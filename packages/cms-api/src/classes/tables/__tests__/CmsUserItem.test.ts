import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_USER_ERROR_GROUP } from '../../../media/errors/cmsUserErrorCauseList'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsPermissionItem } from '../CmsPermissionItem'
import { CmsRoleItem } from '../CmsRoleItem'
import { CmsUserItem } from '../CmsUserItem'
import type { CmsDb, CmsPermission } from '../../../types/cmsDbTypes'
import type { CmsRoleWithPermissions } from '../../../types/cmsRoleTypes'
import type { CmsUserWithRoles } from '../../../types/cmsUserTypes'

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
    name: 'cms-permission-users_read',
    description: 'cms-permission-users_read_description',
    systemStatus: 'active',
    createdOrigin: null,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

function makeRole(overrides: Partial<CmsRoleWithPermissions> = {}): CmsRoleWithPermissions {
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
    permissions: [makePermission()],
    ...overrides
  }
}

function makeUserData(overrides: Partial<CmsUserWithRoles> = {}): CmsUserWithRoles {
  const now = new Date('2026-11-16T10:00:00.000Z')
  return {
    id: 1,
    username: 'alex',
    email: 'alex@example.com',
    phone: 79991234567,
    firstName: 'Alex',
    lastName: 'Ivanov',
    middleName: 'Sergeevich',
    avatar: 'https://example.com/avatar.png',
    bio: 'CMS admin',
    status: 'active',
    systemStatus: 'active',
    emailVerifiedAt: null,
    phoneVerifiedAt: null,
    twoFactorEnabled: false,
    lastLoginAt: null,
    metadata: { locale: 'ru' },
    createdOrigin: null,
    createdAt: now,
    updatedAt: now,
    roles: [makeRole()],
    ...overrides
  }
}

describe('CmsUserItem', () => {
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
    vi.useRealTimers()
  })

  describe('Getters, status, role & permission integration helpers', () => {
    it('exposes all fields, wraps roles/permissions into CmsRoleItem/CmsPermissionItem, and returns immutable snapshots', () => {
      const readPerm = makePermission({ id: 10, code: 'users:read' })
      const createPerm = makePermission({ id: 11, code: 'users:create' })
      const data = makeUserData({
        roles: [
          makeRole({ id: 2, code: 'admin', permissions: [readPerm, createPerm] }),
          makeRole({ id: 3, code: 'editor', permissions: [readPerm] })
        ]
      })
      const item = new CmsUserItem(data)

      expect(item.getId()).toBe(1)
      expect(item.getEmail()).toBe('alex@example.com')
      expect(item.getUsername()).toBe('alex')
      expect(item.getFirstName()).toBe('Alex')
      expect(item.getLastName()).toBe('Ivanov')
      expect(item.getMiddleName()).toBe('Sergeevich')
      expect(item.getPhone()).toBe(79991234567)
      expect(item.getAvatar()).toBe('https://example.com/avatar.png')
      expect(item.getBio()).toBe('CMS admin')
      expect(item.getStatus()).toBe('active')
      expect(item.isActive()).toBe(true)
      expect(item.isDeleted()).toBe(false)
      expect(item.hasRole('admin')).toBe(true)
      expect(item.hasRole('viewer')).toBe(false)
      expect(item.hasRoleId(2)).toBe(true)
      expect(item.hasRoleId(99)).toBe(false)

      expect(item.hasPermission('users:read')).toBe(true)
      expect(item.hasPermission('users:delete')).toBe(false)
      expect(item.hasPermissionId(11)).toBe(true)
      expect(item.hasPermissionId(999)).toBe(false)
      expect(item.hasAnyPermission(['users:delete', 'users:create'])).toBe(true)
      expect(item.hasAnyPermission(['users:delete'])).toBe(false)
      expect(item.hasAllPermissions(['users:read', 'users:create'])).toBe(true)
      expect(item.hasAllPermissions(['users:read', 'users:delete'])).toBe(false)

      const roleItems = item.getRoleItems()
      expect(roleItems).toHaveLength(2)
      expect(roleItems[0]).toBeInstanceOf(CmsRoleItem)
      expect(roleItems[0]?.hasPermission('users:create')).toBe(true)

      const permissionsList = item.getPermissions()
      expect(permissionsList).toEqual([readPerm, createPerm])

      const permissionItems = item.getPermissionItems()
      expect(permissionItems).toHaveLength(2)
      expect(permissionItems[0]).toBeInstanceOf(CmsPermissionItem)
      expect(permissionItems[1]?.getCode()).toBe('users:create')

      const snapshot = item.getData()
      snapshot.metadata.locale = 'en'
      snapshot.roles[0]?.permissions.pop()
      snapshot.roles.pop()
      expect(item.getMetadata()).toEqual({ locale: 'ru' })
      expect(item.getRoles()).toHaveLength(2)
      expect(item.getRoles()[0]?.permissions).toHaveLength(2)
      expect(item.toJSONString()).toBe(JSON.stringify(data))
    })

    it('detects soft-deleted and inactive states accurately', () => {
      const deletedItem = new CmsUserItem(
        makeUserData({ status: 'active', metadata: { deletedAt: '2026-11-16T10:00:00.000Z' } })
      )
      const blockedItem = new CmsUserItem(
        makeUserData({ status: 'blocked', metadata: { deletedAt: '   ' } })
      )

      expect(deletedItem.isDeleted()).toBe(true)
      expect(deletedItem.isActive()).toBe(false)
      expect(blockedItem.isDeleted()).toBe(false)
      expect(blockedItem.isActive()).toBe(false)
    })
  })

  describe('Instance mutations (update, setStatus, roles, reload, delete, restore)', () => {
    it('updates fields, merges metadata safely, and refreshes roles with permissions in place', async () => {
      const contentPerm = makePermission({ id: 20, code: 'content:update' })
      const editorRole = makeRole({ id: 3, code: 'editor', permissions: [contentPerm] })

      const mock = createMockDb({
        selectQueue: [
          [makeUserData({ metadata: { locale: 'en', timezone: 'UTC' } })],
          [{ role: editorRole }],
          [{ roleId: 3, permission: contentPerm }]
        ],
        updateQueue: [
          [makeUserData({
            firstName: 'Updated',
            status: 'invited',
            metadata: { locale: 'ru', timezone: 'UTC' }
          })]
        ]
      })
      const item = new CmsUserItem(makeUserData(), mock.dbInstance)

      const updated = await item.update({
        firstName: ' Updated ',
        status: 'invited',
        metadata: { locale: 'ru', timezone: undefined }
      })

      expect(updated).toBe(item)
      expect(item.getFirstName()).toBe('Updated')
      expect(item.getStatus()).toBe('invited')
      expect(item.getMetadata()).toEqual({ locale: 'ru', timezone: 'UTC' })
      expect(item.getRoles()).toEqual([editorRole])
      expect(item.hasPermission('content:update')).toBe(true)
      expect(mock.updateChains[0]?.set).toHaveBeenCalledWith(expect.objectContaining({
        firstName: 'Updated',
        status: 'invited',
        metadata: { locale: 'ru', timezone: 'UTC' }
      }))
    })

    it('supports setRoles, addRoles, addRolesByCode, setRolesByCode, removeRolesByCode, and removeRoles with permissions sync', async () => {
      const readPerm = makePermission({ id: 10, code: 'users:read' })
      const editPerm = makePermission({ id: 11, code: 'content:update' })
      const adminRole = makeRole({ id: 2, code: 'admin', permissions: [readPerm] })
      const editorRole = makeRole({ id: 3, code: 'editor', permissions: [editPerm] })

      const mock = createMockDb({
        selectQueue: [
          // addRoles([3])
          [{ id: 1 }],
          [{ id: 3 }],
          [{ role: adminRole }, { role: editorRole }],
          [{ roleId: 2, permission: readPerm }, { roleId: 3, permission: editPerm }],
          // setRolesByCode(['admin'])
          [{ id: 1 }],
          [{ id: 2, code: 'admin' }],
          [{ role: adminRole }],
          [{ roleId: 2, permission: readPerm }],
          // addRolesByCode(['editor'])
          [{ id: 1 }],
          [{ id: 3, code: 'editor' }],
          [{ role: adminRole }, { role: editorRole }],
          [{ roleId: 2, permission: readPerm }, { roleId: 3, permission: editPerm }],
          // removeRolesByCode(['editor'])
          [{ id: 1 }],
          [{ id: 3 }],
          [{ role: adminRole }],
          [{ roleId: 2, permission: readPerm }],
          // removeRoles([2])
          [{ id: 1 }],
          []
        ],
        insertQueue: [[], [], []],
        deleteQueue: [[], [], []]
      })
      const item = new CmsUserItem(makeUserData(), mock.dbInstance)

      expect(await item.addRoles([3])).toEqual([adminRole, editorRole])
      expect(item.hasRole('editor')).toBe(true)
      expect(item.hasPermission('content:update')).toBe(true)

      expect(await item.setRolesByCode(['admin'])).toEqual([adminRole])
      expect(item.hasRole('editor')).toBe(false)
      expect(item.hasPermission('content:update')).toBe(false)

      expect(await item.addRolesByCode(['editor'])).toEqual([adminRole, editorRole])
      expect(item.hasPermission('content:update')).toBe(true)

      expect(await item.removeRolesByCode(['editor'])).toEqual([adminRole])
      expect(item.hasRole('editor')).toBe(false)

      expect(await item.removeRoles([2])).toEqual([])
      expect(item.getRoles()).toEqual([])
      expect(item.getPermissions()).toEqual([])
    })

    it('reports userNotFound via ErrorCenter when mutating roles of missing user', async () => {
      const mock = createMockDb({ selectQueue: [[]] })
      const item = new CmsUserItem(makeUserData({ id: 404 }), mock.dbInstance)

      await expect(item.setRoles([1])).rejects.toThrow('Requested CMS user was not found.')
      expect(capturedErrors[0]).toMatchObject({
        group: CMS_USER_ERROR_GROUP,
        code: 'notFound'
      })
    })

    it('reloads, soft-deletes, and restores the user record', async () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2026-11-16T12:00:00.000Z'))

      const perm = makePermission()
      const role = makeRole({ permissions: [perm] })
      const reloadedUser = makeUserData({ firstName: 'Reloaded' })
      const mock = createMockDb({
        selectQueue: [
          [reloadedUser],
          [{ role }],
          [{ roleId: 2, permission: perm }],
          [{ id: 1, metadata: { locale: 'ru' } }],
          [makeUserData({ metadata: { locale: 'ru', deletedAt: '2026-11-16T12:00:00.000Z' } })],
          [{ role }],
          [{ roleId: 2, permission: perm }]
        ],
        updateQueue: [
          [],
          [makeUserData({ metadata: { locale: 'ru' } })]
        ]
      })
      const item = new CmsUserItem(makeUserData(), mock.dbInstance)

      expect(await item.reload()).toBe(item)
      expect(item.getFirstName()).toBe('Reloaded')
      expect(item.hasPermission('users:read')).toBe(true)

      expect(await item.delete()).toBe(true)
      expect(item.isDeleted()).toBe(true)

      expect(await item.restore()).toBe(item)
      expect(item.isDeleted()).toBe(false)
      expect(item.getMetadata()).toEqual({ locale: 'ru' })
    })
  })
})
