import { afterEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_VERIFICATION_ERROR_GROUP } from '../../../media/errors/cmsVerificationErrorCauseList'
import { permissions } from '../../../media/schema/permissions'
import { CmsDbAbstract } from '../CmsDbAbstract'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsDbSystemStatus } from '../../CmsDbSystemStatus'
import { CmsDbTimestamp } from '../../CmsDbTimestamp'
import type { CmsDb, CmsSystemStatus } from '../../../types/cmsDbTypes'

interface MockQueryChain {
  from: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  set: ReturnType<typeof vi.fn>
  returning: ReturnType<typeof vi.fn>
  then: (onFulfilled: (value: unknown) => unknown, onRejected?: (reason: unknown) => unknown) => Promise<unknown>
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

function createMockDb(
  selectQueue: unknown[][] = [],
  updateQueue: unknown[][] = [],
  deleteQueue: unknown[][] = []
) {
  const sQueue = [...selectQueue]
  const uQueue = [...updateQueue]
  const dQueue = [...deleteQueue]
  const db = {
    select: vi.fn(() => createChain(() => sQueue.shift() ?? [])),
    update: vi.fn(() => createChain(() => uQueue.shift() ?? [])),
    delete: vi.fn(() => createChain(() => dQueue.shift() ?? []))
  }

  const dbInstance = new CmsDbInstance()
  vi.spyOn(dbInstance, 'get').mockReturnValue(db as unknown as CmsDb)

  return {
    dbInstance,
    raw: db
  }
}

class TestCmsDbItem extends CmsDbAbstract<typeof permissions> {
  protected readonly errorGroup = CMS_VERIFICATION_ERROR_GROUP

  hasSystemStatusInstance(): boolean {
    return this.systemStatusInstance !== undefined
  }

  hasTimestampInstance(): boolean {
    return this.timestampInstance !== undefined
  }

  readSystemStatus(): CmsDbSystemStatus<typeof permissions> {
    return this.systemStatus
  }

  readTimestamp(): CmsDbTimestamp<typeof permissions> {
    return this.timestamp
  }

  readSystemStatusById(id: number): Promise<CmsSystemStatus | undefined> {
    return this.systemStatus.get(id)
  }

  activateRecord(id: number): Promise<boolean> {
    return this.systemStatus.activate(id)
  }

  removeRecord(id: number): Promise<boolean> {
    return this.deleteRecordById(id)
  }

  modifyRecord(id: number, values: Record<string, unknown>): Promise<boolean> {
    return this.updateRecordById(id, values)
  }

  loadById(id: number) {
    return this.fetchById(id)
  }

  rethrowError(code: string, error: unknown): never {
    return this.handleError(code, error)
  }
}

describe('CmsDbAbstract', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('lazily initializes and caches CmsDbSystemStatus and CmsDbTimestamp via getters', async () => {
    const { dbInstance, raw } = createMockDb([[{ systemStatus: 'active' }]], [[{ id: 5 }]])
    const instance = new TestCmsDbItem(permissions, dbInstance)

    expect(instance.hasSystemStatusInstance()).toBe(false)
    expect(instance.hasTimestampInstance()).toBe(false)

    const statusManager = instance.readSystemStatus()
    expect(statusManager).toBeInstanceOf(CmsDbSystemStatus)
    expect(instance.hasSystemStatusInstance()).toBe(true)
    expect(instance.hasTimestampInstance()).toBe(false)
    expect(instance.readSystemStatus()).toBe(statusManager)

    expect(await instance.readSystemStatusById(5)).toBe('active')
    expect(instance.hasTimestampInstance()).toBe(false)

    expect(await instance.activateRecord(5)).toBe(true)
    expect(instance.hasTimestampInstance()).toBe(true)
    expect(instance.readTimestamp()).toBeInstanceOf(CmsDbTimestamp)
    expect(raw.select).toHaveBeenCalledTimes(1)
    expect(raw.update).toHaveBeenCalledTimes(1)
  })

  it('throws ErrorCenterError on invalid ID and deletes record on valid ID in deleteRecordById', async () => {
    ErrorCenter.setIsConsole(false)
    registerCmsErrorCauses()
    const capturedErrors: Array<{ group?: string, code: string }> = []
    ErrorCenter.addCallback((cause) => {
      capturedErrors.push({
        group: cause.group,
        code: cause.code
      })
    })

    const { dbInstance, raw } = createMockDb([], [], [[{ id: 5 }], []])
    const instance = new TestCmsDbItem(permissions, dbInstance)

    await expect(instance.removeRecord(0)).rejects.toThrow(ErrorCenterError)
    await expect(instance.removeRecord(-3)).rejects.toThrow('Valid positive integer record ID is required.')
    expect(capturedErrors).toEqual([
      { group: CMS_VERIFICATION_ERROR_GROUP, code: 'invalidId' },
      { group: CMS_VERIFICATION_ERROR_GROUP, code: 'invalidId' }
    ])
    expect(raw.delete).not.toHaveBeenCalled()

    expect(await instance.removeRecord(5)).toBe(true)
    expect(await instance.removeRecord(6)).toBe(false)
    expect(raw.delete).toHaveBeenCalledTimes(2)
  })

  it('throws ErrorCenterError on invalid ID and updates record on valid ID in updateRecordById', async () => {
    ErrorCenter.setIsConsole(false)
    registerCmsErrorCauses()
    const capturedErrors: Array<{ group?: string, code: string }> = []
    ErrorCenter.addCallback((cause) => {
      capturedErrors.push({
        group: cause.group,
        code: cause.code
      })
    })

    const { dbInstance, raw } = createMockDb([], [[{ id: 5 }], []], [])
    const instance = new TestCmsDbItem(permissions, dbInstance)

    await expect(instance.modifyRecord(0, { name: 'Updated' })).rejects.toThrow(ErrorCenterError)
    await expect(instance.modifyRecord(-3, { name: 'Updated' })).rejects.toThrow('Valid positive integer record ID is required.')
    expect(capturedErrors).toEqual([
      { group: CMS_VERIFICATION_ERROR_GROUP, code: 'invalidId' },
      { group: CMS_VERIFICATION_ERROR_GROUP, code: 'invalidId' }
    ])
    expect(raw.update).not.toHaveBeenCalled()

    expect(await instance.modifyRecord(5, { name: 'Updated' })).toBe(true)
    expect(await instance.modifyRecord(6, { name: 'Updated' })).toBe(false)
    expect(raw.update).toHaveBeenCalledTimes(2)
  })

  it('builds create, update, and conditional payloads via buildCreateValues, buildUpdateValues, and buildValues with systemStatus and timestamps', () => {
    vi.useFakeTimers()
    const fixedNow = new Date('2026-11-24T15:00:00.000Z')
    vi.setSystemTime(fixedNow)

    const { dbInstance } = createMockDb()
    const instance = new TestCmsDbItem(permissions, dbInstance)

    expect(instance.buildCreateValues({
      id: 99,
      createdAt: new Date('2020-01-01T00:00:00.000Z'),
      updatedAt: new Date('2020-01-01T00:00:00.000Z'),
      code: 'users:read',
      name: 'Permission name',
      createdOrigin: 'admin',
      unknownField: 'ignored',
      description: undefined
    } as Record<string, unknown>)).toEqual({
      code: 'users:read',
      name: 'Permission name',
      createdOrigin: 'admin',
      systemStatus: 'active',
      createdAt: fixedNow,
      updatedAt: fixedNow
    })

    expect(instance.buildUpdateValues({
      id: 99,
      createdAt: new Date('2020-01-01T00:00:00.000Z'),
      updatedAt: new Date('2020-01-01T00:00:00.000Z'),
      name: 'Permission name',
      createdOrigin: 'admin',
      unknownField: 'ignored',
      description: undefined
    } as Record<string, unknown>)).toEqual({
      name: 'Permission name',
      createdOrigin: 'admin',
      updatedAt: fixedNow
    })

    expect(instance.buildValues({ name: 'Test' }, true)).toEqual({
      name: 'Test',
      systemStatus: 'active',
      createdAt: fixedNow,
      updatedAt: fixedNow
    })

    vi.useRealTimers()
  })

  it('fetches a record by ID via fetchById and skips invalid IDs', async () => {
    const record = { id: 5, code: 'users:read' }
    const { dbInstance, raw } = createMockDb([[record], []])
    const instance = new TestCmsDbItem(permissions, dbInstance)

    expect(await instance.loadById(0)).toBeUndefined()
    expect(await instance.loadById(-1)).toBeUndefined()
    expect(raw.select).not.toHaveBeenCalled()

    expect(await instance.loadById(5)).toEqual(record)
    expect(await instance.loadById(99)).toBeUndefined()
    expect(raw.select).toHaveBeenCalledTimes(2)
  })

  it('checks record existence by ID via hasById and skips invalid IDs', async () => {
    const { dbInstance, raw } = createMockDb([[{ id: 5 }], []])
    const instance = new TestCmsDbItem(permissions, dbInstance)

    expect(await instance.hasById(0)).toBe(false)
    expect(await instance.hasById(-1)).toBe(false)
    expect(raw.select).not.toHaveBeenCalled()

    expect(await instance.hasById(5)).toBe(true)
    expect(await instance.hasById(99)).toBe(false)
    expect(raw.select).toHaveBeenCalledTimes(2)
  })

  it('routes operational errors through ErrorCenter via handleError', () => {
    ErrorCenter.setIsConsole(false)
    registerCmsErrorCauses()
    const capturedErrors: Array<{ group?: string, code: string }> = []
    ErrorCenter.addCallback((cause) => {
      capturedErrors.push({
        group: cause.group,
        code: cause.code
      })
    })

    const { dbInstance } = createMockDb()
    const instance = new TestCmsDbItem(permissions, dbInstance)

    expect(() => instance.rethrowError('invalidId', new Error('boom'))).toThrow('Valid positive integer record ID is required.')
    expect(capturedErrors).toEqual([
      { group: CMS_VERIFICATION_ERROR_GROUP, code: 'invalidId' }
    ])
  })
})
