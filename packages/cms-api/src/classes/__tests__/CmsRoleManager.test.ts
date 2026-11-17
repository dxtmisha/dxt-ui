import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { useCmsDb } from '../../composables/useCmsDb'
import { CmsDbInstance } from '../CmsDbInstance'
import { CmsErrorInstance } from '../CmsErrorInstance'
import { CmsPermissionManager } from '../CmsPermissionManager'
import { CmsRoleItem } from '../CmsRoleItem'
import { CmsRoleManager } from '../CmsRoleManager'
import type { CmsDb, CmsPermission, CmsRole } from '../../types/cmsDbTypes'
import type { CmsRoleListResult } from '../../types/cmsRoleTypes'

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

function makePermission(overrides: Partial<CmsPermission> = {}): CmsPermission {
  const now = new Date('2026-11-16T10:00:00.000Z')
  return {
    id: 10,
    code: 'users:read',
    name: 'View users',
    description: null,
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
    name: 'Administrator',
    description: 'Admin role',
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsRoleManager', () => {
  let errorCenter: ErrorCenterInstance
  let cmsError: CmsErrorInstance
  let capturedErrors: Array<{ group?: string, code: string, message?: string }>

  beforeEach(() => {
    errorCenter = new ErrorCenterInstance()
    errorCenter.setIsConsole(false)
    ErrorCenter.setIsConsole(false)
    cmsError = new CmsErrorInstance(errorCenter)
    capturedErrors = []
    const captureError = (cause: { group?: string, code: string, message?: string }) => {
      capturedErrors.push({
        group: cause.group,
        code: cause.code,
        message: cause.message
      })
    }
    errorCenter.addCallback(captureError)
    ErrorCenter.addCallback(captureError)
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  it('provides a synchronized CmsPermissionManager and supports configuration overrides', () => {
    const firstMock = createMockDb()
    const secondMock = createMockDb()
    const secondError = new CmsErrorInstance(new ErrorCenterInstance())
    const manager = new CmsRoleManager(firstMock.dbInstance, cmsError)

    expect(new CmsRoleManager().getDatabaseInstance()).toBe(useCmsDb().cmsDbInstance)

    const permissionManager = manager.getPermissionManager()
    expect(permissionManager).toBeInstanceOf(CmsPermissionManager)
    expect(manager.getPermissionManager()).toBe(permissionManager)
    expect(permissionManager.getDatabaseInstance()).toBe(firstMock.dbInstance)
    expect(permissionManager.getError()).toBe(cmsError)

    manager.setDatabaseInstance(secondMock.dbInstance).setError(secondError)
    expect(permissionManager.getDatabaseInstance()).toBe(secondMock.dbInstance)
    expect(permissionManager.getError()).toBe(secondError)
  })

  it('creates a role with permissions in a transaction and wraps it in CmsRoleItem', async () => {
    const createdRole = makeRole({ id: 5, code: 'moderator', name: 'Moderator', description: null })
    const permOne = makePermission({ id: 10, code: 'users:read' })
    const permTwo = makePermission({ id: 11, code: 'content:update' })

    const mock = createMockDb({
      insertQueue: [
        [createdRole],
        []
      ],
      selectQueue: [
        [{ id: 10 }],
        [{ id: 11, code: 'content:update' }],
        [{ permission: permOne }, { permission: permTwo }]
      ]
    })
    const manager = new CmsRoleManager(mock.dbInstance, cmsError)

    const result = await manager.create({
      code: '  moderator  ',
      name: '  Moderator  ',
      description: '   ',
      permissionIds: [10],
      permissionCodes: [' content:update ']
    })

    expectTypeOf(result).toEqualTypeOf<CmsRoleItem>()
    expect(result).toBeInstanceOf(CmsRoleItem)
    expect(result.getCode()).toBe('moderator')
    expect(result.hasPermission('content:update')).toBe(true)
    expect(result.getPermissions()).toEqual([permOne, permTwo])
    expect(mock.insertChains[1]?.values).toHaveBeenCalledWith([
      { roleId: 5, permissionId: 10 },
      { roleId: 5, permissionId: 11 }
    ])
  })

  it('validates role code/name and reports permissionNotFound on unknown permissions', async () => {
    const createdRole = makeRole({ id: 8 })
    const mock = createMockDb({
      insertQueue: [[createdRole]],
      selectQueue: [[]]
    })
    const manager = new CmsRoleManager(mock.dbInstance, cmsError)

    await expect(manager.create({ code: '  ', name: 'Role' })).rejects.toThrow('Valid role code is required.')
    await expect(manager.create({ code: 'mod', name: '  ' })).rejects.toThrow('Role name is required.')
    await expect(manager.create({
      code: 'mod',
      name: 'Mod',
      permissionIds: [999]
    })).rejects.toThrow('Requested CMS permissions were not found.')

    expect(capturedErrors.map(item => `${item.group}:${item.code}`)).toEqual([
      'cms-role:invalidCode',
      'cms-role:invalidName',
      'cms-permission:notFound'
    ])
  })

  it('reads single and batch roles wrapped in CmsRoleItem with permissions', async () => {
    const adminRole = makeRole({ id: 2, code: 'admin' })
    const editorRole = makeRole({ id: 3, code: 'editor' })
    const perm = makePermission({ id: 10, code: 'users:read' })

    const mock = createMockDb({
      selectQueue: [
        [{ id: 2 }],
        [{ id: 2 }],
        [adminRole],
        [{ permission: perm }],
        [editorRole],
        [],
        [adminRole, editorRole],
        [{ roleId: 2, permission: perm }]
      ]
    })
    const manager = new CmsRoleManager(mock.dbInstance, cmsError)

    expect(await manager.hasById(0)).toBe(false)
    expect(await manager.hasByCode('   ')).toBe(false)
    expect(await manager.getById(0)).toBeUndefined()
    expect(await manager.getByCode('   ')).toBeUndefined()
    expect(await manager.getByIds([-1])).toEqual([])
    expect(await manager.getByCodes([''])).toEqual([])
    expect(mock.raw.select).not.toHaveBeenCalled()

    expect(await manager.hasById(2)).toBe(true)
    expect(await manager.hasByCode(' admin ')).toBe(true)

    const byId = await manager.getById(2)
    const byCode = await manager.getByCode(' editor ')
    const byIds = await manager.getByIds([2, 3])

    expect(byId?.getPermissions()).toEqual([perm])
    expect(byCode?.getPermissions()).toEqual([])
    expect(byIds).toHaveLength(2)
    expect(byIds[0]?.hasPermission('users:read')).toBe(true)
  })

  it('lists paginated roles with filters and delegates update/delete', async () => {
    const adminRole = makeRole({ id: 2, code: 'admin' })
    const perm = makePermission({ id: 10, code: 'users:read' })
    const updatedRole = makeRole({ id: 2, name: 'Super Admin' })

    const mock = createMockDb({
      selectQueue: [
        [{ count: 1 }],
        [adminRole],
        [{ roleId: 2, permission: perm }],
        [{ count: 0 }],
        // update(2, ...)
        [adminRole],
        [{ permission: perm }],
        [adminRole],
        [{ permission: perm }],
        // delete(2)
        [adminRole],
        []
      ],
      updateQueue: [[updatedRole]],
      deleteQueue: [[{ id: 2 }]]
    })
    const manager = new CmsRoleManager(mock.dbInstance, cmsError)

    const listResult = await manager.getList({
      search: 'admin',
      permissionCode: 'users:read',
      userId: 1,
      limit: 500,
      offset: -10
    })

    expectTypeOf(listResult).toEqualTypeOf<CmsRoleListResult>()
    expect(listResult.total).toBe(1)
    expect(listResult.limit).toBe(200)
    expect(listResult.offset).toBe(0)
    expect(listResult.items[0]).toBeInstanceOf(CmsRoleItem)
    expect(listResult.items[0]?.getPermissions()).toEqual([perm])

    expect(await manager.getList({ limit: 0 })).toEqual({
      items: [],
      total: 0,
      limit: 1,
      offset: 0
    })

    const updatedItem = await manager.update(2, { name: 'Super Admin' })
    expect(updatedItem?.getName()).toBe('Super Admin')
    expect(await manager.delete(2)).toBe(true)
  })
})
