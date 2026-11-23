import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_PERMISSION_ERROR_GROUP } from '../../../media/errors/cmsPermissionErrorCauseList'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsPermissionItem } from '../CmsPermissionItem'
import type { CmsDb, CmsPermission } from '../../../types/cmsDbTypes'

interface MockQueryChain {
  from: ReturnType<typeof vi.fn>
  innerJoin: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  orderBy: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  values: ReturnType<typeof vi.fn>
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
    innerJoin: vi.fn(() => chain),
    where: vi.fn(() => chain),
    orderBy: vi.fn(() => chain),
    limit: vi.fn(() => chain),
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
    delete: vi.fn(() => createChain(() => deleteQueue.shift() ?? [])),
    transaction: vi.fn(async (callback: (transaction: unknown) => Promise<unknown>) => callback(db))
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

function makePermission(overrides: Partial<CmsPermission> = {}): CmsPermission {
  const now = new Date('2026-11-16T10:00:00.000Z')
  return {
    id: 10,
    code: 'users:read',
    name: 'cms-permission-users_read',
    description: 'cms-permission-users_read_description',
    systemStatus: 'active',
    createdOrigin: null,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsPermissionItem', () => {
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
    it('exposes all permission fields and returns immutable snapshots from getData/toJSONString', () => {
      const data = makePermission()
      const item = new CmsPermissionItem(data)

      expect(item.getId()).toBe(10)
      expect(item.getCode()).toBe('users:read')
      expect(item.getName()).toBe('cms-permission-users_read')
      expect(item.getDescription()).toBe('cms-permission-users_read_description')
      expect(item.getCreatedOrigin()).toBeNull()
      expect(item.getCreatedAt()).toEqual(data.createdAt)
      expect(item.getUpdatedAt()).toEqual(data.updatedAt)

      const snapshot = item.getData()
      snapshot.name = 'mutated'
      expect(item.getName()).toBe('cms-permission-users_read')
      expect(item.toJSONString()).toBe(JSON.stringify(data))
    })
  })

  describe('Instance mutations (update, delete, reload)', () => {
    it('normalizes fields, updates database record, and refreshes internal snapshot', async () => {
      const updatedRecord = makePermission({
        code: 'users:manage',
        name: 'Manage users',
        description: null,
        createdOrigin: 'admin'
      })
      const mock = createMockDb({
        selectQueue: [[updatedRecord]],
        updateQueue: [[{ id: 10 }]]
      })
      const item = new CmsPermissionItem(makePermission(), mock.dbInstance)

      const result = await item.update({
        code: '  users:manage  ',
        name: '  Manage users  ',
        description: '   ',
        createdOrigin: '  admin  '
      })

      expect(result).toBe(item)
      expect(item.getCode()).toBe('users:manage')
      expect(item.getName()).toBe('Manage users')
      expect(item.getDescription()).toBeNull()
      expect(item.getCreatedOrigin()).toBe('admin')
      expect(mock.updateChains[0]?.set).toHaveBeenCalledWith(expect.objectContaining({
        code: 'users:manage',
        name: 'Manage users',
        description: null,
        createdOrigin: 'admin'
      }))
    })

    it('throws ErrorCenterError when updating an invalid ID and returns this when record is missing', async () => {
      const mock = createMockDb({ updateQueue: [[]] })
      const missingItem = new CmsPermissionItem(makePermission({ id: 404 }), mock.dbInstance)
      const invalidItem = new CmsPermissionItem(makePermission({ id: 0 }), mock.dbInstance)

      await expect(invalidItem.update({ name: 'Test' })).rejects.toThrow(ErrorCenterError)
      expect(await missingItem.update({ name: 'Test' })).toBe(missingItem)
      expect(missingItem.getName()).toBe('cms-permission-users_read')
    })

    it('validates code and name on update via ErrorCenter', async () => {
      const mock = createMockDb()
      const item = new CmsPermissionItem(makePermission(), mock.dbInstance)

      await expect(item.update({ code: 'bad code' })).rejects.toThrow('Valid code is required.')
      await expect(item.update({ name: '   ' })).rejects.toThrow('Valid name is required.')
      expect(capturedErrors.map(error => `${error.group}:${error.code}`)).toEqual([
        'cms-verification:invalidCode',
        'cms-verification:invalidName'
      ])
    })

    it('reloads and deletes the permission record', async () => {
      const reloaded = makePermission({ name: 'Reloaded name' })
      const mock = createMockDb({
        selectQueue: [[reloaded], []],
        deleteQueue: [[{ id: 10 }], []]
      })
      const item = new CmsPermissionItem(makePermission(), mock.dbInstance)

      expect(await item.reload()).toBe(item)
      expect(item.getName()).toBe('Reloaded name')
      expect(await item.reload()).toBe(item)
      expect(item.getName()).toBe('Reloaded name')

      expect(await item.delete()).toBe(true)
      expect(await item.delete()).toBe(false)
    })
  })

  describe('Static batch queries and ID resolution', () => {
    it('fetches permissions by single role ID and multiple role IDs', async () => {
      const permOne = makePermission({ id: 1, code: 'users:read' })
      const permTwo = makePermission({ id: 2, code: 'users:create' })
      const mock = createMockDb({
        selectQueue: [
          [{ permission: permOne }, { permission: permTwo }],
          [
            { roleId: 5, permission: permOne },
            { roleId: 6, permission: permTwo }
          ]
        ]
      })

      expect(await CmsPermissionItem.fetchByRoleId(mock.db, 0)).toEqual([])
      expect(await CmsPermissionItem.fetchByRoleId(mock.db, 5)).toEqual([permOne, permTwo])

      const batchMap = await CmsPermissionItem.fetchByRoleIds(mock.db, [5, 6, 5])
      expect(batchMap.get(5)).toEqual([permOne])
      expect(batchMap.get(6)).toEqual([permTwo])
      expect((await CmsPermissionItem.fetchByRoleIds(mock.db, [])).size).toBe(0)
    })

    it('resolves and validates permission IDs and codes', async () => {
      const mock = createMockDb({
        selectQueue: [
          [{ id: 1 }],
          [{ id: 2, code: 'users:create' }],
          []
        ]
      })

      const resolved = await CmsPermissionItem.resolveIds(
        mock.db,
        [1, 1],
        [' users:create ', '']
      )
      expect(resolved).toEqual([1, 2])

      await expect(
        CmsPermissionItem.resolveIds(mock.db, [999])
      ).rejects.toThrow('Requested CMS permissions were not found.')
      expect(capturedErrors[0]).toMatchObject({
        group: CMS_PERMISSION_ERROR_GROUP,
        code: 'notFound'
      })
    })

    it('resolves permission IDs and codes separately via resolveIdsByIds and resolveIdsByCodes', async () => {
      const mock = createMockDb({
        selectQueue: [
          [{ id: 3 }],
          [{ id: 4, code: 'roles:read' }],
          []
        ]
      })

      expect(
        await CmsPermissionItem.resolveIdsByIds(mock.db, [3, 3])
      ).toEqual([3])

      expect(
        await CmsPermissionItem.resolveIdsByCodes(
          mock.db,
          [' roles:read ', '']
        )
      ).toEqual([4])

      await expect(
        CmsPermissionItem.resolveIdsByCodes(mock.db, ['missing:code'])
      ).rejects.toThrow('Requested CMS permissions were not found.')
      expect(capturedErrors[0]).toMatchObject({
        group: CMS_PERMISSION_ERROR_GROUP,
        code: 'notFound'
      })
    })
  })
})
