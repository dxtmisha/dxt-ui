import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { useCmsDb } from '../../composables/useCmsDb'
import { CmsDbInstance } from '../CmsDbInstance'
import { CmsUserItem } from '../CmsUserItem'
import { CmsUserManager } from '../CmsUserManager'
import type { CmsDb, CmsRole } from '../../types/cmsDbTypes'
import type {
  CmsUserListResult,
  CmsUserPublic
} from '../../types/cmsUserTypes'

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

function makeUser(overrides: Partial<CmsUserPublic> = {}): CmsUserPublic {
  const now = new Date('2026-11-16T10:00:00.000Z')
  return {
    id: 1,
    username: 'alex',
    email: 'alex@example.com',
    phone: 79991234567,
    firstName: 'Alex',
    lastName: 'Ivanov',
    middleName: null,
    avatar: null,
    bio: null,
    status: 'active',
    emailVerifiedAt: null,
    phoneVerifiedAt: null,
    twoFactorEnabled: false,
    lastLoginAt: null,
    metadata: {},
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
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsUserManager', () => {
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

  describe('Database configuration', () => {
    it('defaults to useCmsDb().cmsDbInstance and supports setDatabaseInstance', () => {
      const defaultManager = new CmsUserManager(undefined, errorCenter)
      expect(defaultManager.getDatabaseInstance()).toBe(useCmsDb().cmsDbInstance)

      const firstMock = createMockDb()
      const secondMock = createMockDb()
      const manager = new CmsUserManager(firstMock.dbInstance, errorCenter)

      expect(manager.getDatabaseInstance()).toBe(firstMock.dbInstance)
      expect(manager.getDatabase()).toBe(firstMock.db)
      expect(manager.setDatabaseInstance(secondMock.dbInstance)).toBe(manager)
      expect(manager.getDatabaseInstance()).toBe(secondMock.dbInstance)
      expect(manager.getDatabase()).toBe(secondMock.db)
    })
  })

  describe('create', () => {
    it('normalizes input, sanitizes metadata, creates user, and returns wrapped CmsUserItem', async () => {
      const createdUser = makeUser({
        id: 10,
        email: 'user@example.com',
        username: null,
        firstName: 'Tung',
        metadata: { locale: 'vi' }
      })
      const editorRole = makeRole({ id: 3, code: 'editor' })
      const adminRole = makeRole({ id: 2, code: 'admin' })

      const mock = createMockDb({
        insertQueue: [
          [createdUser],
          []
        ],
        selectQueue: [
          [{ id: 2 }],
          [{ id: 3, code: 'editor' }],
          [{ role: adminRole }, { role: editorRole }]
        ]
      })

      const manager = new CmsUserManager(mock.dbInstance, errorCenter)
      const dirtyMetadata = JSON.parse('{"locale":"vi","__proto__":{"polluted":true}}') as Record<string, unknown>

      const result = await manager.create({
        email: '  USER@Example.COM ',
        firstName: '  Tung  ',
        username: '   ',
        phone: 84901234567,
        metadata: dirtyMetadata,
        roleIds: [2],
        roleCodes: [' editor ']
      })

      expectTypeOf(result).toEqualTypeOf<CmsUserItem>()
      expect(result).toBeInstanceOf(CmsUserItem)
      expect(result.getEmail()).toBe('user@example.com')
      expect(result.getRoles()).toEqual([adminRole, editorRole])
      expect(result.getDatabaseInstance()).toBe(mock.dbInstance)
      expect(mock.insertChains[0]?.values).toHaveBeenCalledWith(expect.objectContaining({
        email: 'user@example.com',
        firstName: 'Tung',
        username: null,
        phone: 84901234567,
        status: 'active',
        twoFactorEnabled: false,
        metadata: { locale: 'vi' }
      }))
      expect(({} as { polluted?: boolean }).polluted).toBeUndefined()
      expect(mock.deleteChains[0]).toBeDefined()
      expect(mock.insertChains[1]?.values).toHaveBeenCalledWith([
        { userId: 10, roleId: 2 },
        { userId: 10, roleId: 3 }
      ])
    })

    it('rejects invalid email, empty firstName, and invalid phone via ErrorCenter', async () => {
      const mock = createMockDb()
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      await expect(manager.create({ email: 'invalid-email', firstName: 'Alex' })).rejects.toThrow('Valid user email is required.')
      await expect(manager.create({ email: 'a@', firstName: 'Alex' })).rejects.toThrow('Valid user email is required.')
      await expect(manager.create({ email: 'alex@example.com', firstName: '   ' })).rejects.toThrow('User firstName is required.')
      await expect(manager.create({ email: 'alex@example.com', firstName: 'Alex', phone: 0 })).rejects.toThrow('Phone must be a positive integer')
      await expect(manager.create({ email: 'alex@example.com', firstName: 'Alex', phone: -5 })).rejects.toThrow('Phone must be a positive integer')
      await expect(manager.create({ email: 'alex@example.com', firstName: 'Alex', phone: 12.5 })).rejects.toThrow('Phone must be a positive integer')

      expect(capturedErrors.map(item => item.code)).toEqual([
        'userInvalidEmail',
        'userInvalidEmail',
        'userInvalidFirstName',
        'userInvalidPhone',
        'userInvalidPhone',
        'userInvalidPhone'
      ])
      expect(mock.raw.insert).not.toHaveBeenCalled()
    })

    it('throws and reports roleNotFound when assigning unknown role IDs or codes', async () => {
      const createdUser = makeUser({ id: 7 })
      const mock = createMockDb({
        insertQueue: [[createdUser]],
        selectQueue: [[]]
      })
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      await expect(manager.create({
        email: 'alex@example.com',
        firstName: 'Alex',
        roleIds: [999]
      })).rejects.toThrow('CMS roles not found for IDs: 999.')

      expect(capturedErrors[0]).toMatchObject({
        group: 'cms',
        code: 'roleNotFound'
      })
    })
  })

  describe('Reading & listing wrapped CmsUserItem records', () => {
    it('returns undefined / false immediately for invalid IDs and blank identifiers', async () => {
      const mock = createMockDb()
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      expect(await manager.getById(0)).toBeUndefined()
      expect(await manager.getById(-3)).toBeUndefined()
      expect(await manager.getById(1.5)).toBeUndefined()
      expect(await manager.hasById(0)).toBe(false)
      expect(await manager.hasByEmail('   ')).toBe(false)
      expect(await manager.getByEmail('   ')).toBeUndefined()
      expect(await manager.getByUsername('   ')).toBeUndefined()
      expect(mock.raw.select).not.toHaveBeenCalled()
    })

    it('finds user by ID, email, and username wrapped in CmsUserItem', async () => {
      const user = makeUser({ id: 5, email: 'alex@example.com', username: 'alex' })
      const role = makeRole({ id: 1, code: 'super_admin' })
      const mock = createMockDb({
        selectQueue: [
          [user],
          [{ role }],
          [user],
          [{ role }],
          [user],
          [{ role }]
        ]
      })
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      const byId = await manager.getById(5)
      const byEmail = await manager.getByEmail(' ALEX@Example.com ')
      const byUsername = await manager.getByUsername(' alex ')

      expect(byId).toBeInstanceOf(CmsUserItem)
      expect(byEmail).toBeInstanceOf(CmsUserItem)
      expect(byUsername).toBeInstanceOf(CmsUserItem)
      expect(byId?.getData()).toEqual({ ...user, roles: [role] })
      expect(byEmail?.getData()).toEqual({ ...user, roles: [role] })
      expect(byUsername?.getData()).toEqual({ ...user, roles: [role] })
    })

    it('lists paginated users wrapped in CmsUserItem instances and clamps limit/offset', async () => {
      const userOne = makeUser({ id: 1, email: 'one@example.com' })
      const userTwo = makeUser({ id: 2, email: 'two@example.com' })
      const adminRole = makeRole({ id: 2, code: 'admin' })
      const editorRole = makeRole({ id: 3, code: 'editor' })

      const mock = createMockDb({
        selectQueue: [
          [{ count: 2 }],
          [userTwo, userOne],
          [
            { userId: 2, role: adminRole },
            { userId: 1, role: editorRole }
          ]
        ]
      })
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      const listResult = await manager.getList({
        search: '100%_test\\',
        status: ['active', 'invited'],
        roleCode: 'admin',
        limit: 500,
        offset: -10
      })

      expectTypeOf(listResult).toEqualTypeOf<CmsUserListResult>()
      expect(listResult.total).toBe(2)
      expect(listResult.limit).toBe(100)
      expect(listResult.offset).toBe(0)
      expect(listResult.items).toHaveLength(2)
      expect(listResult.items[0]).toBeInstanceOf(CmsUserItem)
      expect(listResult.items[1]).toBeInstanceOf(CmsUserItem)
      expect(listResult.items[0]?.getData()).toEqual({ ...userTwo, roles: [adminRole] })
      expect(listResult.items[1]?.getData()).toEqual({ ...userOne, roles: [editorRole] })
      expect(mock.selectChains[2]?.limit).toHaveBeenCalledWith(100)
      expect(mock.selectChains[2]?.offset).toHaveBeenCalledWith(0)
    })

    it('returns empty list immediately when total count is 0', async () => {
      const mock = createMockDb({
        selectQueue: [[{ count: 0 }]]
      })
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      const listResult = await manager.getList({ limit: 0 })

      expect(listResult).toEqual({
        items: [],
        total: 0,
        limit: 1,
        offset: 0
      })
      expect(mock.raw.select).toHaveBeenCalledTimes(1)
    })
  })

  describe('update, delete, restore delegation', () => {
    it('delegates update(id, input) through CmsUserItem and returns updated instance', async () => {
      const existing = makeUser({ id: 4, firstName: 'Old' })
      const updated = makeUser({ id: 4, firstName: 'Updated' })
      const role = makeRole({ id: 3, code: 'editor' })

      const mock = createMockDb({
        selectQueue: [
          [existing],
          [{ role }],
          [existing],
          [{ role }]
        ],
        updateQueue: [[updated]]
      })
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      const result = await manager.update(4, { firstName: ' Updated ' })
      expect(result).toBeInstanceOf(CmsUserItem)
      expect(result?.getFirstName()).toBe('Updated')
    })

    it('returns undefined when updating a non-existent or invalid user ID', async () => {
      const mock = createMockDb({ selectQueue: [[]] })
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      expect(await manager.update(0, { firstName: 'Test' })).toBeUndefined()
      expect(await manager.update(999, { firstName: 'Test' })).toBeUndefined()
    })

    it('delegates soft/hard delete and restore by ID', async () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2026-11-16T12:00:00.000Z'))

      const activeUser = makeUser({ id: 12, metadata: { locale: 'ru' } })
      const softDeletedUser = makeUser({
        id: 12,
        metadata: { locale: 'ru', deletedAt: '2026-11-16T12:00:00.000Z' }
      })
      const restoredUser = makeUser({ id: 12, metadata: { locale: 'ru' } })

      const mock = createMockDb({
        selectQueue: [
          [activeUser],
          [],
          [{ id: 12, metadata: { locale: 'ru' } }],
          [softDeletedUser],
          [],
          [softDeletedUser],
          []
        ],
        updateQueue: [
          [],
          [restoredUser]
        ]
      })
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      expect(await manager.delete(12)).toBe(true)
      const restored = await manager.restore(12)
      expect(restored).toBeInstanceOf(CmsUserItem)
      expect(restored?.isDeleted()).toBe(false)
    })

    it('performs hard delete by ID when options.hard is true', async () => {
      const user = makeUser({ id: 15 })
      const mock = createMockDb({
        selectQueue: [
          [user],
          [],
          []
        ],
        deleteQueue: [[{ id: 15 }]]
      })
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      expect(await manager.delete(0, { hard: true })).toBe(false)
      expect(await manager.delete(15, { hard: true })).toBe(true)
      expect(await manager.delete(999, { hard: true })).toBe(false)
    })

    it('routes unexpected transaction errors through ErrorCenter', async () => {
      const mock = createMockDb()
      vi.spyOn(mock.raw, 'transaction').mockRejectedValue(new Error('DB connection lost'))
      const manager = new CmsUserManager(mock.dbInstance, errorCenter)

      await expect(manager.create({
        email: 'alex@example.com',
        firstName: 'Alex'
      })).rejects.toThrow('DB connection lost')

      expect(capturedErrors[0]).toMatchObject({
        group: 'cms',
        code: 'userCreate'
      })
    })
  })
})
