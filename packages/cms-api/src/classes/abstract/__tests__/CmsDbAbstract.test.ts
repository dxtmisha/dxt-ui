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
}

describe('CmsDbAbstract', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
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
})
