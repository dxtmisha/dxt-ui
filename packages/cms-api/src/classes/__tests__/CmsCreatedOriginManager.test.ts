import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { useCmsDb } from '../../composables/useCmsDb'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { CmsCreatedOriginItem } from '../CmsCreatedOriginItem'
import { CmsCreatedOriginManager } from '../CmsCreatedOriginManager'
import { CmsDbInstance } from '../CmsDbInstance'
import type { CmsCreatedOrigin, CmsDb } from '../../types/cmsDbTypes'
import type { CmsCreatedOriginListResult } from '../../types/cmsCreatedOriginTypes'

interface MockQueryChain {
  from: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  orderBy: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  offset: ReturnType<typeof vi.fn>
  values: ReturnType<typeof vi.fn>
  set: ReturnType<typeof vi.fn>
  returning: ReturnType<typeof vi.fn>
  onConflictDoNothing: ReturnType<typeof vi.fn>
  then: (onFulfilled: (value: unknown) => unknown, onRejected?: (reason: unknown) => unknown) => Promise<unknown>
}

interface MockDatabasePlan {
  selectQueue?: unknown[][]
  insertQueue?: unknown[][]
  updateQueue?: unknown[][]
  deleteQueue?: unknown[][]
}

function createChain(resolveNext: () => unknown): MockQueryChain {
  let resolved = false
  let cachedValue: unknown

  const chain: MockQueryChain = {
    from: vi.fn(() => chain),
    where: vi.fn(() => chain),
    orderBy: vi.fn(() => chain),
    limit: vi.fn(() => chain),
    offset: vi.fn(() => chain),
    values: vi.fn(() => chain),
    set: vi.fn(() => chain),
    returning: vi.fn(() => chain),
    onConflictDoNothing: vi.fn(() => chain),
    then: (onFulfilled, onRejected) => {
      if (!resolved) {
        resolved = true
        cachedValue = resolveNext()
      }

      return Promise.resolve(cachedValue).then(onFulfilled, onRejected)
    }
  }

  return chain
}

function createMockDb(plan: MockDatabasePlan = {}) {
  const selectQueue = [...(plan.selectQueue ?? [])]
  const insertQueue = [...(plan.insertQueue ?? [])]
  const updateQueue = [...(plan.updateQueue ?? [])]
  const deleteQueue = [...(plan.deleteQueue ?? [])]

  const insertChains: MockQueryChain[] = []

  const db = {
    select: vi.fn(() => createChain(() => selectQueue.shift() ?? [])),
    insert: vi.fn(() => {
      const chain = createChain(() => insertQueue.shift() ?? [])
      insertChains.push(chain)
      return chain
    }),
    update: vi.fn(() => createChain(() => updateQueue.shift() ?? [])),
    delete: vi.fn(() => createChain(() => deleteQueue.shift() ?? []))
  }

  const dbInstance = new CmsDbInstance()
  vi.spyOn(dbInstance, 'get').mockReturnValue(db as unknown as CmsDb)

  return {
    dbInstance,
    db: db as unknown as CmsDb,
    raw: db,
    insertChains
  }
}

function makeCreatedOrigin(overrides: Partial<CmsCreatedOrigin> = {}): CmsCreatedOrigin {
  const now = new Date('2026-11-19T10:00:00.000Z')
  return {
    id: 1,
    code: 'admin',
    name: 'cms-created_origin-admin',
    description: 'cms-created_origin-admin_description',
    systemStatus: 'active',
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsCreatedOriginManager', () => {
  let capturedErrors: Array<{ group?: string, code: string, message?: string }>

  beforeEach(() => {
    registerCmsErrorCauses()
    ErrorCenter.setIsConsole(false)
    capturedErrors = []
    ErrorCenter.addCallback((cause) => {
      capturedErrors.push({
        group: cause.group,
        code: cause.code,
        message: cause.message
      })
    })
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  it('defaults to useCmsDb().cmsDbInstance and accepts custom CmsDbInstance in constructor', async () => {
    const defaultMock = createMockDb({ selectQueue: [[{ id: 1 }]] })
    const defaultGetSpy = vi.spyOn(useCmsDb().cmsDbInstance, 'get').mockReturnValue(defaultMock.db)
    const defaultManager = new CmsCreatedOriginManager()

    expect(await defaultManager.hasById(1)).toBe(true)
    expect(defaultGetSpy).toHaveBeenCalled()

    const customMock = createMockDb({ selectQueue: [[{ id: 2 }]] })
    const customManager = new CmsCreatedOriginManager(customMock.dbInstance)
    expect(await customManager.hasById(2)).toBe(true)
  })

  it('creates a created origin, normalizes fields, and wraps in CmsCreatedOriginItem', async () => {
    const created = makeCreatedOrigin({ id: 7, code: 'mobile', name: 'Mobile App', description: null })
    const mock = createMockDb({
      insertQueue: [[created]]
    })
    const manager = new CmsCreatedOriginManager(mock.dbInstance)

    const result = await manager.create({
      code: '  mobile  ',
      name: '  Mobile App  ',
      description: '   '
    })

    expectTypeOf(result).toEqualTypeOf<CmsCreatedOriginItem>()
    expect(result).toBeInstanceOf(CmsCreatedOriginItem)
    expect(result.getCode()).toBe('mobile')
    expect(result.getDescription()).toBeNull()
    expect(mock.insertChains[0]?.values).toHaveBeenCalledWith({
      code: 'mobile',
      name: 'Mobile App',
      description: null
    })
  })

  it('rejects invalid code and name on create via ErrorCenter', async () => {
    const mock = createMockDb()
    const manager = new CmsCreatedOriginManager(mock.dbInstance)

    await expect(manager.create({ code: '  ', name: 'Name' })).rejects.toThrow('Valid created origin code is required.')
    await expect(manager.create({ code: 'has space', name: 'Name' })).rejects.toThrow('Valid created origin code is required.')
    await expect(manager.create({ code: 'api', name: '  ' })).rejects.toThrow('Created origin name is required.')

    expect(capturedErrors.map(item => `${item.group}:${item.code}`)).toEqual([
      'cms-created-origin:invalidCode',
      'cms-created-origin:invalidCode',
      'cms-created-origin:invalidName'
    ])
    expect(mock.raw.insert).not.toHaveBeenCalled()
  })

  it('handles hasById, hasByCode, getById, getByCode, getByIds, and getByCodes', async () => {
    const originOne = makeCreatedOrigin({ id: 1, code: 'system' })
    const originTwo = makeCreatedOrigin({ id: 2, code: 'api' })
    const mock = createMockDb({
      selectQueue: [
        [{ id: 1 }],
        [{ id: 1 }],
        [originOne],
        [originTwo],
        [originOne, originTwo],
        [originOne, originTwo]
      ]
    })
    const manager = new CmsCreatedOriginManager(mock.dbInstance)

    expect(await manager.hasById(0)).toBe(false)
    expect(await manager.hasByCode('   ')).toBe(false)
    expect(await manager.getById(-1)).toBeUndefined()
    expect(await manager.getByCode('   ')).toBeUndefined()
    expect(await manager.getByIds([0, -2])).toEqual([])
    expect(await manager.getByCodes(['  '])).toEqual([])
    expect(mock.raw.select).not.toHaveBeenCalled()

    expect(await manager.hasById(1)).toBe(true)
    expect(await manager.hasByCode(' system ')).toBe(true)

    const byId = await manager.getById(1)
    const byCode = await manager.getByCode(' api ')
    const byIds = await manager.getByIds([1, 2])
    const byCodes = await manager.getByCodes([' system ', 'api'])

    expect(byId?.getData()).toEqual(originOne)
    expect(byCode?.getData()).toEqual(originTwo)
    expect(byIds.map(item => item.getId())).toEqual([1, 2])
    expect(byCodes.map(item => item.getCode())).toEqual(['system', 'api'])
  })

  it('lists paginated created origins with filters and clamps limit/offset', async () => {
    const originOne = makeCreatedOrigin({ id: 1, code: 'admin' })
    const mock = createMockDb({
      selectQueue: [
        [{ count: 1 }],
        [originOne],
        [{ count: 0 }]
      ]
    })
    const manager = new CmsCreatedOriginManager(mock.dbInstance)

    const result = await manager.getList({
      search: 'admin',
      systemStatus: 'active',
      limit: 500,
      offset: -5
    })

    expectTypeOf(result).toEqualTypeOf<CmsCreatedOriginListResult>()
    expect(result.total).toBe(1)
    expect(result.limit).toBe(200)
    expect(result.offset).toBe(0)
    expect(result.items).toHaveLength(1)
    expect(result.items[0]).toBeInstanceOf(CmsCreatedOriginItem)

    const empty = await manager.getList({ limit: 0 })
    expect(empty).toEqual({
      items: [],
      total: 0,
      limit: 1,
      offset: 0
    })
  })

  it('seeds created origins and wraps persisted records in CmsCreatedOriginItem', async () => {
    const seededOne = makeCreatedOrigin({ id: 1, code: 'system' })
    const seededTwo = makeCreatedOrigin({ id: 2, code: 'admin' })
    const mock = createMockDb({
      insertQueue: [[]],
      selectQueue: [[seededOne, seededTwo]]
    })
    const manager = new CmsCreatedOriginManager(mock.dbInstance)

    const result = await manager.seed()
    expect(result).toHaveLength(2)
    expect(result[0]).toBeInstanceOf(CmsCreatedOriginItem)
    expect(result.map(item => item.getCode())).toEqual(['system', 'admin'])
  })

  it('delegates update, setSystemStatus, and delete by ID and routes DB failures through ErrorCenter', async () => {
    const existing = makeCreatedOrigin({ id: 3, name: 'Old' })
    const updated = makeCreatedOrigin({ id: 3, name: 'New' })
    const blocked = makeCreatedOrigin({ id: 3, name: 'New', systemStatus: 'blocked' })
    const mock = createMockDb({
      selectQueue: [
        [existing],
        [existing],
        [blocked],
        [existing],
        []
      ],
      updateQueue: [[updated], [{ id: 3 }]],
      deleteQueue: [[{ id: 3 }]]
    })
    const manager = new CmsCreatedOriginManager(mock.dbInstance)

    const updatedItem = await manager.update(3, { name: 'New' })
    expect(updatedItem?.getName()).toBe('New')

    const blockedItem = await manager.setSystemStatus(3, 'blocked')
    expect(blockedItem?.getSystemStatus()).toBe('blocked')

    expect(await manager.delete(3)).toBe(true)
    expect(await manager.delete(999)).toBe(false)

    vi.spyOn(mock.raw, 'insert').mockImplementation(() => {
      throw new Error('Insert failed')
    })
    await expect(manager.create({ code: 'api', name: 'API' })).rejects.toThrow('Failed to create CMS created origin.')
    expect(capturedErrors[0]).toMatchObject({
      group: 'cms-created-origin',
      code: 'create'
    })
  })
})
