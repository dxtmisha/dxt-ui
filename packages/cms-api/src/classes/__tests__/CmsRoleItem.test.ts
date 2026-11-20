import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { CmsDbInstance } from '../CmsDbInstance'
import { CmsPermissionItem } from '../CmsPermissionItem'
import { CmsRoleItem } from '../CmsRoleItem'
import type { CmsDb, CmsPermission, CmsRole } from '../../types/cmsDbTypes'
import type { CmsRoleWithPermissions } from '../../types/cmsRoleTypes'

interface MockQueryChain {
  from: ReturnType<typeof vi.fn>
  innerJoin: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  orderBy: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
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
    innerJoin: vi.fn(() => chain),
    where: vi.fn(() => chain),
    orderBy: vi.fn(() => chain),
    limit: vi.fn(() => chain),
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

  const updateChains: MockQueryChain[] = []

  const db = {
    select: vi.fn(() => createChain(() => selectQueue.shift() ?? [])),
    insert: vi.fn(() => createChain(() => insertQueue.shift() ?? [])),
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
    name: 'View users',
    description: null,
    systemStatus: 'active',
    createdOrigin: null,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

function makeRole(overrides: Partial<CmsRole> = {}): CmsRole {
  const now = new Date('2026-11-16T10:00:00.000Z')
  return {
    id: 2,
    code: 'admin',
    name: 'cms-role-admin',
    description: 'cms-role-admin_description',
    systemStatus: 'active',
    createdOrigin: null,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

function makeRoleData(overrides: Partial<CmsRoleWithPermissions> = {}): CmsRoleWithPermissions {
  return {
    ...makeRole(),
    permissions: [makePermission()],
    ...overrides
  }
}

describe('CmsRoleItem', () => {
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

  describe('Getters, permission checks, and CmsPermissionItem wrapping', () => {
    it('exposes role fields, checks permissions, and wraps permissions in CmsPermissionItem', () => {
      const readPerm = makePermission({ id: 10, code: 'users:read' })
      const createPerm = makePermission({ id: 11, code: 'users:create' })
      const data = makeRoleData({ permissions: [readPerm, createPerm] })
      const item = new CmsRoleItem(data)

      expect(item.getId()).toBe(2)
      expect(item.getCode()).toBe('admin')
      expect(item.getName()).toBe('cms-role-admin')
      expect(item.getDescription()).toBe('cms-role-admin_description')
      expect(item.getCreatedAt()).toEqual(data.createdAt)
      expect(item.getUpdatedAt()).toEqual(data.updatedAt)

      expect(item.hasPermission('users:read')).toBe(true)
      expect(item.hasPermission('users:delete')).toBe(false)
      expect(item.hasPermissionId(11)).toBe(true)
      expect(item.hasPermissionId(99)).toBe(false)
      expect(item.hasAnyPermission(['users:delete', 'users:read'])).toBe(true)
      expect(item.hasAnyPermission(['users:delete'])).toBe(false)
      expect(item.hasAllPermissions(['users:read', 'users:create'])).toBe(true)
      expect(item.hasAllPermissions(['users:read', 'users:delete'])).toBe(false)

      const permissionItems = item.getPermissionItems()
      expect(permissionItems).toHaveLength(2)
      expect(permissionItems[0]).toBeInstanceOf(CmsPermissionItem)
      expect(permissionItems[0]?.getCode()).toBe('users:read')

      const snapshot = item.getData()
      snapshot.permissions.pop()
      expect(item.getPermissions()).toHaveLength(2)
      expect(item.toJSONString()).toBe(JSON.stringify(data))
    })
  })

  describe('Instance mutations (update, permissions management, reload, delete)', () => {
    it('updates role fields and replaces permissions in a transaction', async () => {
      const writePerm = makePermission({ id: 12, code: 'content:update' })
      const mock = createMockDb({
        selectQueue: [
          [makeRole()],
          [{ id: 12, code: 'content:update' }],
          [{ permission: writePerm }]
        ],
        updateQueue: [
          [makeRole({ name: 'Content Admin', description: null })]
        ],
        insertQueue: [[]],
        deleteQueue: [[]]
      })
      const item = new CmsRoleItem(makeRoleData(), mock.dbInstance)

      const updated = await item.update({
        name: '  Content Admin  ',
        description: '   ',
        permissionCodes: ['content:update']
      })

      expect(updated).toBe(item)
      expect(item.getName()).toBe('Content Admin')
      expect(item.getDescription()).toBeNull()
      expect(item.getPermissions()).toEqual([writePerm])
      expect(item.hasPermission('content:update')).toBe(true)
    })

    it('supports setPermissions, setPermissionsByCode, addPermissions, addPermissionsByCode, removePermissions, and removePermissionsByCode', async () => {
      const permOne = makePermission({ id: 10, code: 'users:read' })
      const permTwo = makePermission({ id: 11, code: 'users:create' })

      const mock = createMockDb({
        selectQueue: [
          // addPermissions([11])
          [{ id: 2 }],
          [{ id: 11 }],
          [{ permission: permOne }, { permission: permTwo }],
          // setPermissionsByCode(['users:read'])
          [{ id: 2 }],
          [{ id: 10, code: 'users:read' }],
          [{ permission: permOne }],
          // addPermissionsByCode(['users:create'])
          [{ id: 2 }],
          [{ id: 11, code: 'users:create' }],
          [{ permission: permOne }, { permission: permTwo }],
          // removePermissionsByCode(['users:create'])
          [{ id: 2 }],
          [{ id: 11 }],
          [{ permission: permOne }],
          // removePermissions([10])
          [{ id: 2 }],
          []
        ],
        insertQueue: [[], [], []],
        deleteQueue: [[], [], []]
      })
      const item = new CmsRoleItem(makeRoleData({ permissions: [permOne] }), mock.dbInstance)

      expect(await item.addPermissions([11])).toEqual([permOne, permTwo])
      expect(await item.setPermissionsByCode(['users:read'])).toEqual([permOne])
      expect(await item.addPermissionsByCode(['users:create'])).toEqual([permOne, permTwo])
      expect(await item.removePermissionsByCode(['users:create'])).toEqual([permOne])
      expect(await item.removePermissions([10])).toEqual([])
      expect(item.getPermissions()).toEqual([])
    })

    it('reports roleNotFound when mutating permissions of a missing role', async () => {
      const mock = createMockDb({ selectQueue: [[]] })
      const item = new CmsRoleItem(makeRoleData({ id: 404 }), mock.dbInstance)

      await expect(item.setPermissions([10])).rejects.toThrow('Requested CMS role was not found.')
      expect(capturedErrors[0]).toMatchObject({
        group: 'cms-role',
        code: 'notFound'
      })
    })

    it('reloads and deletes the role record', async () => {
      const perm = makePermission({ id: 10, code: 'users:read' })
      const reloadedRole = makeRole({ name: 'Reloaded Role' })
      const mock = createMockDb({
        selectQueue: [
          [reloadedRole],
          [{ permission: perm }],
          []
        ],
        deleteQueue: [[{ id: 2 }], []]
      })
      const item = new CmsRoleItem(makeRoleData(), mock.dbInstance)

      expect(await item.reload()).toBe(item)
      expect(item.getName()).toBe('Reloaded Role')
      expect(item.getPermissions()).toEqual([perm])
      expect(await item.reload()).toBeUndefined()

      expect(await item.delete()).toBe(true)
      expect(await item.delete()).toBe(false)
    })
  })

  describe('Static user-role batch helpers', () => {
    it('fetches roles with permissions by user ID and multiple user IDs', async () => {
      const perm = makePermission({ id: 10, code: 'users:read' })
      const adminRole = makeRole({ id: 2, code: 'admin' })
      const mock = createMockDb({
        selectQueue: [
          [{ role: adminRole }],
          [{ roleId: 2, permission: perm }],
          [{ userId: 1, role: adminRole }],
          [{ roleId: 2, permission: perm }]
        ]
      })

      expect(await CmsRoleItem.fetchByUserId(mock.db, 0)).toEqual([])
      expect(await CmsRoleItem.fetchByUserId(mock.db, 1)).toEqual([
        { ...adminRole, permissions: [perm] }
      ])

      const rolesMap = await CmsRoleItem.fetchByUserIds(mock.db, [1])
      expect(rolesMap.get(1)).toEqual([
        { ...adminRole, permissions: [perm] }
      ])
    })
  })
})
