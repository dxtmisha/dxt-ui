import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { useCmsDb } from '../../composables/useCmsDb'
import { CmsDbInstance } from '../CmsDbInstance'
import { CmsUserItem } from '../CmsUserItem'
import type { CmsDb, CmsRole } from '../../types/cmsDbTypes'
import type { CmsUserWithRoles } from '../../types/cmsUserTypes'

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

function makeRole(overrides: Partial<CmsRole> = {}): CmsRole {
  const now = new Date('2026-11-16T10:00:00.000Z')
  return {
    id: 2,
    code: 'admin',
    name: 'cms-role-admin',
    description: 'cms-role-admin_description',
    createdAt: now,
    updatedAt: now,
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
    emailVerifiedAt: null,
    phoneVerifiedAt: null,
    twoFactorEnabled: false,
    lastLoginAt: null,
    metadata: { locale: 'ru' },
    createdAt: now,
    updatedAt: now,
    roles: [makeRole()],
    ...overrides
  }
}

describe('CmsUserItem', () => {
  let errorCenter: ErrorCenterInstance
  let capturedErrors: Array<{ group?: string, code: string, message?: string }>

  beforeEach(() => {
    errorCenter = new ErrorCenterInstance()
    errorCenter.setIsConsole(false)
    capturedErrors = []
    errorCenter.addCallback((cause) => {
      capturedErrors.push({
        group: cause.group,
        code: cause.code,
        message: cause.message
      })
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Getters, status & role helpers', () => {
    it('exposes all fields via getters and returns immutable copies from getData/getMetadata/getRoles', () => {
      const data = makeUserData()
      const item = new CmsUserItem(data, undefined, errorCenter)

      expect(item.getDatabaseInstance()).toBe(useCmsDb().cmsDbInstance)
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

      const snapshot = item.getData()
      snapshot.metadata.locale = 'en'
      snapshot.roles.pop()
      expect(item.getMetadata()).toEqual({ locale: 'ru' })
      expect(item.getRoles()).toHaveLength(1)
      expect(item.toJSON()).toEqual(data)
    })

    it('detects soft-deleted and inactive states accurately', () => {
      const deletedItem = new CmsUserItem(
        makeUserData({ status: 'active', metadata: { deletedAt: '2026-11-16T10:00:00.000Z' } }),
        undefined,
        errorCenter
      )
      const blockedItem = new CmsUserItem(
        makeUserData({ status: 'blocked', metadata: { deletedAt: '   ' } }),
        undefined,
        errorCenter
      )

      expect(deletedItem.isDeleted()).toBe(true)
      expect(deletedItem.isActive()).toBe(false)
      expect(blockedItem.isDeleted()).toBe(false)
      expect(blockedItem.isActive()).toBe(false)
    })
  })

  describe('Instance mutations (update, setStatus, roles, reload, delete, restore)', () => {
    it('updates fields, merges metadata safely, and updates internal snapshot in place', async () => {
      const mock = createMockDb({
        selectQueue: [
          [makeUserData({ metadata: { locale: 'en', timezone: 'UTC' } })],
          [{ role: makeRole({ id: 3, code: 'editor' }) }]
        ],
        updateQueue: [
          [makeUserData({
            firstName: 'Updated',
            status: 'invited',
            metadata: { locale: 'ru', timezone: 'UTC' }
          })]
        ]
      })
      const item = new CmsUserItem(makeUserData(), mock.dbInstance, errorCenter)

      const updated = await item.update({
        firstName: ' Updated ',
        status: 'invited',
        metadata: { locale: 'ru', timezone: undefined }
      })

      expect(updated).toBe(item)
      expect(item.getFirstName()).toBe('Updated')
      expect(item.getStatus()).toBe('invited')
      expect(item.getMetadata()).toEqual({ locale: 'ru', timezone: 'UTC' })
      expect(item.getRoles()).toEqual([makeRole({ id: 3, code: 'editor' })])
      expect(mock.updateChains[0]?.set).toHaveBeenCalledWith(expect.objectContaining({
        firstName: 'Updated',
        status: 'invited',
        metadata: { locale: 'ru', timezone: 'UTC' }
      }))
    })

    it('supports setRoles, addRoles, setRolesByCode, and removeRoles while keeping item roles in sync', async () => {
      const adminRole = makeRole({ id: 2, code: 'admin' })
      const editorRole = makeRole({ id: 3, code: 'editor' })

      const mock = createMockDb({
        selectQueue: [
          [{ id: 1 }],
          [{ id: 3 }],
          [{ role: adminRole }, { role: editorRole }],
          [{ id: 1 }],
          [{ id: 2, code: 'admin' }],
          [{ role: adminRole }],
          [{ id: 1 }],
          []
        ],
        insertQueue: [[], []],
        deleteQueue: [[], []]
      })
      const item = new CmsUserItem(makeUserData(), mock.dbInstance, errorCenter)

      expect(await item.addRoles([3])).toEqual([adminRole, editorRole])
      expect(item.hasRole('editor')).toBe(true)

      expect(await item.setRolesByCode(['admin'])).toEqual([adminRole])
      expect(item.hasRole('editor')).toBe(false)

      expect(await item.removeRoles([2])).toEqual([])
      expect(item.getRoles()).toEqual([])
    })

    it('reports userNotFound via ErrorCenter when mutating roles of missing user', async () => {
      const mock = createMockDb({ selectQueue: [[]] })
      const item = new CmsUserItem(makeUserData({ id: 404 }), mock.dbInstance, errorCenter)

      await expect(item.setRoles([1])).rejects.toThrow('CMS user with ID 404 was not found.')
      expect(capturedErrors[0]).toMatchObject({
        group: 'cms',
        code: 'userNotFound'
      })
    })

    it('reloads, soft-deletes, and restores the user record', async () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2026-11-16T12:00:00.000Z'))

      const reloadedUser = makeUserData({ firstName: 'Reloaded' })
      const mock = createMockDb({
        selectQueue: [
          [reloadedUser],
          [{ role: makeRole() }],
          [{ id: 1, metadata: { locale: 'ru' } }],
          [makeUserData({ metadata: { locale: 'ru', deletedAt: '2026-11-16T12:00:00.000Z' } })],
          [{ role: makeRole() }]
        ],
        updateQueue: [
          [],
          [makeUserData({ metadata: { locale: 'ru' } })]
        ]
      })
      const item = new CmsUserItem(makeUserData(), mock.dbInstance, errorCenter)

      expect(await item.reload()).toBe(item)
      expect(item.getFirstName()).toBe('Reloaded')

      expect(await item.delete()).toBe(true)
      expect(item.isDeleted()).toBe(true)

      expect(await item.restore()).toBe(item)
      expect(item.isDeleted()).toBe(false)
      expect(item.getMetadata()).toEqual({ locale: 'ru' })
    })
  })
})
