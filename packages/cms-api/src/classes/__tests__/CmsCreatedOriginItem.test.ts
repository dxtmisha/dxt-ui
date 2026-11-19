import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { CmsCreatedOriginItem } from '../CmsCreatedOriginItem'
import { CmsDbInstance } from '../CmsDbInstance'
import type { CmsCreatedOrigin, CmsDb } from '../../types/cmsDbTypes'

interface MockQueryChain {
  from: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  set: ReturnType<typeof vi.fn>
  returning: ReturnType<typeof vi.fn>
  then: (onFulfilled: (value: unknown) => unknown, onRejected?: (reason: unknown) => unknown) => Promise<unknown>
}

interface MockDatabasePlan {
  selectQueue?: unknown[][]
  updateQueue?: unknown[][]
  deleteQueue?: unknown[][]
}

function createChain(resolveNext: () => unknown): MockQueryChain {
  let resolved = false
  let cachedValue: unknown

  const chain: MockQueryChain = {
    from: vi.fn(() => chain),
    where: vi.fn(() => chain),
    limit: vi.fn(() => chain),
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
  const updateQueue = [...(plan.updateQueue ?? [])]
  const deleteQueue = [...(plan.deleteQueue ?? [])]

  const updateChains: MockQueryChain[] = []

  const db = {
    select: vi.fn(() => createChain(() => selectQueue.shift() ?? [])),
    update: vi.fn(() => {
      const chain = createChain(() => updateQueue.shift() ?? [])
      updateChains.push(chain)
      return chain
    }),
    delete: vi.fn(() => createChain(() => deleteQueue.shift() ?? []))
  }

  const dbInstance = new CmsDbInstance()
  vi.spyOn(dbInstance, 'get').mockReturnValue(db as unknown as CmsDb)

  return {
    dbInstance,
    db: db as unknown as CmsDb,
    raw: db,
    updateChains
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

describe('CmsCreatedOriginItem', () => {
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

  describe('Getters & immutability', () => {
    it('exposes all created origin fields and returns cloned snapshots', () => {
      const data = makeCreatedOrigin()
      const item = new CmsCreatedOriginItem(data)

      expect(item.getId()).toBe(1)
      expect(item.getCode()).toBe('admin')
      expect(item.getName()).toBe('cms-created_origin-admin')
      expect(item.getDescription()).toBe('cms-created_origin-admin_description')
      expect(item.getSystemStatus()).toBe('active')
      expect(item.getCreatedAt()).toEqual(data.createdAt)
      expect(item.getUpdatedAt()).toEqual(data.updatedAt)
      expect(item.toJSON()).toEqual(data)

      const snapshot = item.getData()
      snapshot.name = 'Mutated'
      expect(item.getName()).toBe('cms-created_origin-admin')
    })
  })

  describe('Instance mutations (update, systemStatus, reload, delete)', () => {
    it('normalizes fields, updates database record, and refreshes internal snapshot', async () => {
      const updatedRecord = makeCreatedOrigin({
        code: 'web-portal',
        name: 'Web Portal',
        description: null,
        systemStatus: 'blocked'
      })
      const mock = createMockDb({
        updateQueue: [[updatedRecord]]
      })
      const item = new CmsCreatedOriginItem(makeCreatedOrigin(), mock.dbInstance)

      const result = await item.update({
        code: '  web-portal  ',
        name: '  Web Portal  ',
        description: '   ',
        systemStatus: 'blocked'
      })

      expect(result).toBe(item)
      expect(item.getCode()).toBe('web-portal')
      expect(item.getName()).toBe('Web Portal')
      expect(item.getDescription()).toBeNull()
      expect(item.getSystemStatus()).toBe('blocked')
      expect(mock.updateChains[0]?.set).toHaveBeenCalledWith(expect.objectContaining({
        code: 'web-portal',
        name: 'Web Portal',
        description: null,
        systemStatus: 'blocked',
        updatedAt: expect.any(Date)
      }))
    })

    it('returns undefined when updating a missing or invalid created origin ID', async () => {
      const mock = createMockDb({ updateQueue: [[]] })
      const missingItem = new CmsCreatedOriginItem(makeCreatedOrigin({ id: 404 }), mock.dbInstance)
      const invalidItem = new CmsCreatedOriginItem(makeCreatedOrigin({ id: 0 }), mock.dbInstance)

      expect(await invalidItem.update({ name: 'Test' })).toBeUndefined()
      expect(await missingItem.update({ name: 'Test' })).toBeUndefined()
    })

    it('validates code and name on update via ErrorCenter', async () => {
      const mock = createMockDb()
      const item = new CmsCreatedOriginItem(makeCreatedOrigin(), mock.dbInstance)

      await expect(item.update({ code: 'bad code' })).rejects.toThrow('Valid created origin code is required.')
      await expect(item.update({ name: '   ' })).rejects.toThrow('Created origin name is required.')
      expect(capturedErrors.map(error => `${error.group}:${error.code}`)).toEqual([
        'cms-created-origin:invalidCode',
        'cms-created-origin:invalidName'
      ])
    })

    it('updates systemStatus via activate, block, and softDelete', async () => {
      const blocked = makeCreatedOrigin({ systemStatus: 'blocked' })
      const active = makeCreatedOrigin({ systemStatus: 'active' })
      const deleted = makeCreatedOrigin({ systemStatus: 'deleted' })
      const mock = createMockDb({
        updateQueue: [[{ id: 1 }], [{ id: 1 }], [{ id: 1 }], []],
        selectQueue: [[blocked], [active], [deleted]]
      })
      const item = new CmsCreatedOriginItem(makeCreatedOrigin(), mock.dbInstance)

      expect((await item.block())?.getSystemStatus()).toBe('blocked')
      expect((await item.activate())?.getSystemStatus()).toBe('active')
      expect((await item.softDelete())?.getSystemStatus()).toBe('deleted')
      expect(await item.setSystemStatus('active')).toBeUndefined()
    })

    it('reloads and deletes the created origin record', async () => {
      const reloaded = makeCreatedOrigin({ name: 'Reloaded origin' })
      const mock = createMockDb({
        selectQueue: [[reloaded], []],
        deleteQueue: [[{ id: 1 }], []]
      })
      const item = new CmsCreatedOriginItem(makeCreatedOrigin(), mock.dbInstance)

      expect(await item.reload()).toBe(item)
      expect(item.getName()).toBe('Reloaded origin')
      expect(await item.reload()).toBeUndefined()

      expect(await item.delete()).toBe(true)
      expect(await item.delete()).toBe(false)
    })
  })

  describe('Static ID resolution', () => {
    it('resolves created origin IDs and codes via CmsDbResolver', async () => {
      const mock = createMockDb({
        selectQueue: [
          [{ id: 1 }],
          [{ id: 2, code: 'api' }],
          []
        ]
      })

      const resolved = await CmsCreatedOriginItem.resolveIds(
        mock.db,
        [1, 1],
        [' api ', '']
      )
      expect(resolved).toEqual([1, 2])

      await expect(
        CmsCreatedOriginItem.resolveIds(mock.db, [999])
      ).rejects.toThrow('Requested CMS created origin was not found.')
      expect(capturedErrors[0]).toMatchObject({
        group: 'cms-created-origin',
        code: 'notFound'
      })
    })
  })
})
