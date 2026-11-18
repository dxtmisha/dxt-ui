import { afterEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterInstance, ErrorCenterThrowInstance } from '@dxtmisha/functional-basic'
import { permissions } from '../../media/schema/permissions'
import { CmsDbAbstract } from '../CmsDbAbstract'
import { CmsDbInstance } from '../CmsDbInstance'
import type { CmsDb, CmsSystemStatus } from '../../types/cmsDbTypes'

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
  const updateChains: MockQueryChain[] = []

  const db = {
    select: vi.fn(() => createChain(() => selectQueue.shift() ?? [])),
    update: vi.fn(() => {
      const chain = createChain(() => updateQueue.shift() ?? [])
      updateChains.push(chain)
      return chain
    })
  }

  const dbInstance = new CmsDbInstance()
  vi.spyOn(dbInstance, 'get').mockReturnValue(db as unknown as CmsDb)

  return {
    dbInstance,
    raw: db,
    updateChains
  }
}

class TestCmsDbItem extends CmsDbAbstract<typeof permissions> {
  readSystemStatusById(id: number): Promise<CmsSystemStatus | undefined> {
    return this.getSystemStatusById(id)
  }

  changeSystemStatusById(id: number, systemStatus: CmsSystemStatus): Promise<boolean> {
    return this.updateSystemStatusById(id, systemStatus)
  }

  activateById(id: number): Promise<boolean> {
    return this.activateRecordById(id)
  }

  blockById(id: number): Promise<boolean> {
    return this.blockRecordById(id)
  }

  softDeleteById(id: number): Promise<boolean> {
    return this.softDeleteRecordById(id)
  }
}

describe('CmsDbAbstract', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  describe('getSystemStatusById', () => {
    it('returns undefined without querying database for non-positive or invalid IDs', async () => {
      const { dbInstance, raw } = createMockDb({ selectQueue: [[{ systemStatus: 'active' }]] })
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)
      const instance = new TestCmsDbItem(permissions, dbInstance, new ErrorCenterThrowInstance(errorCenter))

      expect(await instance.readSystemStatusById(0)).toBeUndefined()
      expect(await instance.readSystemStatusById(-5)).toBeUndefined()
      expect(await instance.readSystemStatusById(1.5)).toBeUndefined()
      expect(await instance.readSystemStatusById(Number.NaN)).toBeUndefined()
      expect(raw.select).not.toHaveBeenCalled()
    })

    it('returns stored systemStatus when record exists and undefined when missing', async () => {
      const { dbInstance, raw } = createMockDb({
        selectQueue: [
          [{ systemStatus: 'blocked' }],
          []
        ]
      })
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)
      const instance = new TestCmsDbItem(permissions, dbInstance, new ErrorCenterThrowInstance(errorCenter))

      expect(await instance.readSystemStatusById(12)).toBe('blocked')
      expect(await instance.readSystemStatusById(999)).toBeUndefined()
      expect(raw.select).toHaveBeenCalledTimes(2)
    })
  })

  describe('updateSystemStatusById & lifecycle helpers', () => {
    it('returns false without querying database for non-positive or invalid IDs', async () => {
      const { dbInstance, raw } = createMockDb({ updateQueue: [[{ id: 1 }]] })
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)
      const instance = new TestCmsDbItem(permissions, dbInstance, new ErrorCenterThrowInstance(errorCenter))

      expect(await instance.changeSystemStatusById(0, 'blocked')).toBe(false)
      expect(await instance.activateById(-1)).toBe(false)
      expect(await instance.blockById(2.3)).toBe(false)
      expect(await instance.softDeleteById(Number.NaN)).toBe(false)
      expect(raw.update).not.toHaveBeenCalled()
    })

    it('updates systemStatus and updatedAt via updateSystemStatusById, activateRecordById, blockRecordById, and softDeleteRecordById', async () => {
      const { dbInstance, raw, updateChains } = createMockDb({
        updateQueue: [
          [{ id: 7 }],
          [{ id: 7 }],
          [{ id: 7 }],
          [{ id: 7 }],
          []
        ]
      })
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)
      const instance = new TestCmsDbItem(permissions, dbInstance, new ErrorCenterThrowInstance(errorCenter))

      expect(await instance.changeSystemStatusById(7, 'blocked')).toBe(true)
      expect(await instance.activateById(7)).toBe(true)
      expect(await instance.blockById(7)).toBe(true)
      expect(await instance.softDeleteById(7)).toBe(true)
      expect(await instance.softDeleteById(888)).toBe(false)

      expect(raw.update).toHaveBeenCalledTimes(5)
      expect(updateChains[0].set).toHaveBeenCalledWith(expect.objectContaining({
        systemStatus: 'blocked',
        updatedAt: expect.any(Date)
      }))
      expect(updateChains[1].set).toHaveBeenCalledWith(expect.objectContaining({
        systemStatus: 'active',
        updatedAt: expect.any(Date)
      }))
      expect(updateChains[2].set).toHaveBeenCalledWith(expect.objectContaining({
        systemStatus: 'blocked',
        updatedAt: expect.any(Date)
      }))
      expect(updateChains[3].set).toHaveBeenCalledWith(expect.objectContaining({
        systemStatus: 'deleted',
        updatedAt: expect.any(Date)
      }))
    })
  })
})
