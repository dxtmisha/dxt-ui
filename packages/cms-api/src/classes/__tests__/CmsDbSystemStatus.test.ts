import { afterEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { permissions } from '../../media/schema/permissions'
import { CmsDbInstance } from '../CmsDbInstance'
import { CmsDbSystemStatus } from '../CmsDbSystemStatus'
import type { CmsDb } from '../../types/cmsDbTypes'

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

describe('CmsDbSystemStatus', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  describe('get', () => {
    it('returns undefined without querying database for non-positive or invalid IDs', async () => {
      const { dbInstance, raw } = createMockDb({ selectQueue: [[{ systemStatus: 'active' }]] })
      const status = new CmsDbSystemStatus(permissions, dbInstance)

      expect(await status.get(0)).toBeUndefined()
      expect(await status.get(-5)).toBeUndefined()
      expect(await status.get(1.5)).toBeUndefined()
      expect(await status.get(Number.NaN)).toBeUndefined()
      expect(raw.select).not.toHaveBeenCalled()
    })

    it('returns stored systemStatus when record exists and undefined when missing', async () => {
      const { dbInstance, raw } = createMockDb({
        selectQueue: [
          [{ systemStatus: 'blocked' }],
          []
        ]
      })
      const status = new CmsDbSystemStatus(permissions, dbInstance)

      expect(await status.get(12)).toBe('blocked')
      expect(await status.get(999)).toBeUndefined()
      expect(raw.select).toHaveBeenCalledTimes(2)
    })
  })

  describe('update & lifecycle helpers', () => {
    it('throws ErrorCenterError and does not query database for non-positive or invalid IDs', async () => {
      ErrorCenter.setIsConsole(false)
      registerCmsErrorCauses()
      const capturedErrors: Array<{ group?: string, code: string }> = []
      ErrorCenter.addCallback((cause) => {
        capturedErrors.push({
          group: cause.group,
          code: cause.code
        })
      })

      const { dbInstance, raw } = createMockDb({ updateQueue: [[{ id: 1 }]] })
      const status = new CmsDbSystemStatus(permissions, dbInstance)

      await expect(status.update(0, 'blocked')).rejects.toThrow(ErrorCenterError)
      await expect(status.activate(-1)).rejects.toThrow('Valid positive integer record ID is required.')
      await expect(status.block(2.3)).rejects.toThrow(ErrorCenterError)
      await expect(status.softDelete(Number.NaN)).rejects.toThrow(ErrorCenterError)
      expect(capturedErrors).toEqual([
        { group: 'cms-verification', code: 'invalidId' },
        { group: 'cms-verification', code: 'invalidId' },
        { group: 'cms-verification', code: 'invalidId' },
        { group: 'cms-verification', code: 'invalidId' }
      ])
      expect(raw.update).not.toHaveBeenCalled()
    })

    it('updates systemStatus and updatedAt via update, activate, block, and softDelete', async () => {
      const { dbInstance, raw, updateChains } = createMockDb({
        updateQueue: [
          [{ id: 7 }],
          [{ id: 7 }],
          [{ id: 7 }],
          [{ id: 7 }],
          []
        ]
      })
      const status = new CmsDbSystemStatus(permissions, dbInstance)

      expect(await status.update(7, 'blocked')).toBe(true)
      expect(await status.activate(7)).toBe(true)
      expect(await status.block(7)).toBe(true)
      expect(await status.softDelete(7)).toBe(true)
      expect(await status.softDelete(888)).toBe(false)

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
