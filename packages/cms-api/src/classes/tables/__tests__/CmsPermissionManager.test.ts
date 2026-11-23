import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { useCmsDb } from '../../../composables/useCmsDb'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_PERMISSION_ERROR_GROUP } from '../../../media/errors/cmsPermissionErrorCauseList'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsPermissionItem } from '../CmsPermissionItem'
import { CmsPermissionManager } from '../CmsPermissionManager'
import type { CmsDb, CmsPermission } from '../../../types/cmsDbTypes'
import type { CmsPermissionListResult } from '../../../types/cmsPermissionTypes'

interface MockQueryChain {
  from: ReturnType<typeof vi.fn>
  innerJoin: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  orderBy: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  offset: ReturnType<typeof vi.fn>
  values: ReturnType<typeof vi.fn>
  set: ReturnType<typeof vi.fn>
  returning: ReturnType<typeof vi.fn>
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
    innerJoin: vi.fn(() => chain),
    where: vi.fn(() => chain),
    orderBy: vi.fn(() => chain),
    limit: vi.fn(() => chain),
    offset: vi.fn(() => chain),
    values: vi.fn(() => chain),
    set: vi.fn(() => chain),
    returning: vi.fn(() => chain),
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

  const selectChains: MockQueryChain[] = []
  const insertChains: MockQueryChain[] = []
  const updateChains: MockQueryChain[] = []
  const deleteChains: MockQueryChain[] = []

  const db = {
    select: vi.fn(() => {
      const chain = createChain(() => selectQueue.shift() ?? [])
      selectChains.push(chain)
      return chain
    }),
    insert: vi.fn(() => {
      const chain = createChain(() => insertQueue.shift() ?? [])
      insertChains.push(chain)
      return chain
    }),
    update: vi.fn(() => {
      const chain = createChain(() => updateQueue.shift() ?? [])
      updateChains.push(chain)
      return chain
    }),
    delete: vi.fn(() => {
      const chain = createChain(() => deleteQueue.shift() ?? [])
      deleteChains.push(chain)
      return chain
    }),
    transaction: vi.fn(async (callback: (transaction: unknown) => Promise<unknown>) => callback(db))
  }

  const dbInstance = new CmsDbInstance()
  vi.spyOn(dbInstance, 'get').mockReturnValue(db as unknown as CmsDb)

  return {
    dbInstance,
    db: db as unknown as CmsDb,
    raw: db,
    selectChains,
    insertChains,
    updateChains,
    deleteChains
  }
}

function makePermission(overrides: Partial<CmsPermission> = {}): CmsPermission {
  const now = new Date('2026-11-16T10:00:00.000Z')
  return {
    id: 1,
    code: 'users:read',
    name: 'View users',
    description: 'Allows viewing users',
    systemStatus: 'active',
    createdOrigin: null,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsPermissionManager', () => {
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
    const defaultManager = new CmsPermissionManager()

    expect(await defaultManager.hasById(1)).toBe(true)
    expect(defaultGetSpy).toHaveBeenCalledTimes(1)

    const mock = createMockDb({ selectQueue: [[{ id: 2 }]] })
    const customManager = new CmsPermissionManager(mock.dbInstance)

    expect(await customManager.hasById(2)).toBe(true)
    expect(mock.dbInstance.get).toHaveBeenCalledTimes(1)
  })

  it('creates a permission, normalizes fields, and wraps in CmsPermissionItem', async () => {
    const created = makePermission({ id: 7, code: 'content:publish', name: 'Publish content', description: null })
    const mock = createMockDb({
      insertQueue: [[created]]
    })
    const manager = new CmsPermissionManager(mock.dbInstance)

    const result = await manager.create({
      code: '  content:publish  ',
      name: '  Publish content  ',
      description: '   '
    })

    expectTypeOf(result).toEqualTypeOf<CmsPermissionItem>()
    expect(result).toBeInstanceOf(CmsPermissionItem)
    expect(result.getCode()).toBe('content:publish')
    expect(result.getDescription()).toBeNull()
    expect(mock.insertChains[0]?.values).toHaveBeenCalledWith({
      code: 'content:publish',
      name: 'Publish content',
      description: null
    })
  })

  it('rejects invalid code and name on create via ErrorCenter', async () => {
    const mock = createMockDb()
    const manager = new CmsPermissionManager(mock.dbInstance)

    await expect(manager.create({ code: '  ', name: 'Name' })).rejects.toThrow('Valid code is required.')
    await expect(manager.create({ code: 'has space', name: 'Name' })).rejects.toThrow('Valid code is required.')
    await expect(manager.create({ code: 'users:read', name: '  ' })).rejects.toThrow('Valid name is required.')

    expect(capturedErrors.map(item => `${item.group}:${item.code}`)).toEqual([
      'cms-verification:invalidCode',
      'cms-verification:invalidCode',
      'cms-verification:invalidName'
    ])
    expect(mock.raw.insert).not.toHaveBeenCalled()
  })

  it('handles hasById, hasByCode, getById, getByCode, getByIds, and getByCodes', async () => {
    const permOne = makePermission({ id: 1, code: 'users:read' })
    const permTwo = makePermission({ id: 2, code: 'users:create' })
    const mock = createMockDb({
      selectQueue: [
        [{ id: 1 }],
        [{ id: 1 }],
        [permOne],
        [permTwo],
        [permOne, permTwo],
        [permOne, permTwo]
      ]
    })
    const manager = new CmsPermissionManager(mock.dbInstance)

    expect(await manager.hasById(0)).toBe(false)
    expect(await manager.hasByCode('   ')).toBe(false)
    expect(await manager.getById(-1)).toBeUndefined()
    expect(await manager.getByCode('   ')).toBeUndefined()
    expect(await manager.getByIds([0, -2])).toEqual([])
    expect(await manager.getByCodes(['  '])).toEqual([])
    expect(mock.raw.select).not.toHaveBeenCalled()

    expect(await manager.hasById(1)).toBe(true)
    expect(await manager.hasByCode(' users:read ')).toBe(true)

    const byId = await manager.getById(1)
    const byCode = await manager.getByCode(' users:create ')
    const byIds = await manager.getByIds([1, 2])
    const byCodes = await manager.getByCodes([' users:read ', 'users:create'])

    expect(byId?.getData()).toEqual(permOne)
    expect(byCode?.getData()).toEqual(permTwo)
    expect(byIds.map(item => item.getId())).toEqual([1, 2])
    expect(byCodes.map(item => item.getCode())).toEqual(['users:read', 'users:create'])
  })

  it('lists paginated permissions with filters and clamps limit/offset', async () => {
    const permOne = makePermission({ id: 1, code: 'users:read' })
    const mock = createMockDb({
      selectQueue: [
        [{ count: 1 }],
        [permOne],
        [{ count: 0 }]
      ]
    })
    const manager = new CmsPermissionManager(mock.dbInstance)

    const result = await manager.getList({
      search: 'users',
      roleCode: 'admin',
      limit: 500,
      offset: -5
    })

    expectTypeOf(result).toEqualTypeOf<CmsPermissionListResult>()
    expect(result.total).toBe(1)
    expect(result.limit).toBe(200)
    expect(result.offset).toBe(0)
    expect(result.items).toHaveLength(1)
    expect(result.items[0]).toBeInstanceOf(CmsPermissionItem)

    const empty = await manager.getList({ limit: 0 })
    expect(empty).toEqual({
      items: [],
      total: 0,
      limit: 1,
      offset: 0
    })
  })

  it('delegates update and delete by ID and routes DB failures through ErrorCenter', async () => {
    const existing = makePermission({ id: 3, name: 'Old' })
    const updated = makePermission({ id: 3, name: 'New' })
    const mock = createMockDb({
      selectQueue: [
        [existing],
        [updated],
        [existing],
        []
      ],
      updateQueue: [[{ id: 3 }]],
      deleteQueue: [[{ id: 3 }]]
    })
    const manager = new CmsPermissionManager(mock.dbInstance)

    const updatedItem = await manager.update(3, { name: 'New' })
    expect(updatedItem?.getName()).toBe('New')
    expect(await manager.delete(3)).toBe(true)
    expect(await manager.delete(999)).toBe(false)

    vi.spyOn(mock.raw, 'insert').mockImplementation(() => {
      throw new Error('Insert failed')
    })
    await expect(manager.create({ code: 'a:b', name: 'AB' })).rejects.toThrow('Failed to create CMS permission.')
    expect(capturedErrors[0]).toMatchObject({
      group: CMS_PERMISSION_ERROR_GROUP,
      code: 'create'
    })
  })
})
