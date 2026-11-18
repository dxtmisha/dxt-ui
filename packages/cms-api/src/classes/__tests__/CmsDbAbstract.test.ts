import { afterEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { permissions } from '../../media/schema/permissions'
import { CmsDbAbstract } from '../CmsDbAbstract'
import { CmsDbInstance } from '../CmsDbInstance'
import { CmsDbSystemStatus } from '../CmsDbSystemStatus'
import type { CmsDb, CmsSystemStatus } from '../../types/cmsDbTypes'

interface MockQueryChain {
  from: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  then: (onFulfilled: (value: unknown) => unknown, onRejected?: (reason: unknown) => unknown) => Promise<unknown>
}

function createChain(resolveNext: () => unknown): MockQueryChain {
  let resolved = false
  let cachedValue: unknown

  const chain: MockQueryChain = {
    from: vi.fn(() => chain),
    where: vi.fn(() => chain),
    limit: vi.fn(() => chain),
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

function createMockDb(selectQueue: unknown[][] = []) {
  const queue = [...selectQueue]
  const db = {
    select: vi.fn(() => createChain(() => queue.shift() ?? []))
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
    return this.systemStatus !== undefined
  }

  readSystemStatus(): CmsDbSystemStatus<typeof permissions> {
    return this.getSystemStatus()
  }

  readSystemStatusById(id: number): Promise<CmsSystemStatus | undefined> {
    return this.getSystemStatus().get(id)
  }
}

describe('CmsDbAbstract', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  it('lazily initializes and caches CmsDbSystemStatus via getSystemStatus()', async () => {
    const { dbInstance, raw } = createMockDb([[{ systemStatus: 'active' }]])
    const instance = new TestCmsDbItem(permissions, dbInstance)

    expect(instance.hasSystemStatusInstance()).toBe(false)

    const statusManager = instance.readSystemStatus()
    expect(statusManager).toBeInstanceOf(CmsDbSystemStatus)
    expect(instance.hasSystemStatusInstance()).toBe(true)
    expect(instance.readSystemStatus()).toBe(statusManager)

    expect(await instance.readSystemStatusById(5)).toBe('active')
    expect(raw.select).toHaveBeenCalledTimes(1)
  })
})
