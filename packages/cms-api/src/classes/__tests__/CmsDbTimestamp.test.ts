import { afterEach, describe, expect, it, vi } from 'vitest'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { permissions } from '../../media/schema/permissions'
import { CmsDbInstance } from '../CmsDbInstance'
import { CmsDbTimestamp } from '../CmsDbTimestamp'
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

const minimalTable = pgTable('minimal_items', {
  id: serial('id').primaryKey(),
  systemStatus: text('system_status').$type<CmsSystemStatus>().notNull()
})

describe('CmsDbTimestamp', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  describe('get, getCreatedAt, getUpdatedAt', () => {
    it('returns undefined without querying database for non-positive IDs or tables without timestamp columns', async () => {
      const { dbInstance, raw } = createMockDb({
        selectQueue: [[{ createdAt: new Date(), updatedAt: new Date() }]]
      })
      const timestamp = new CmsDbTimestamp(permissions, dbInstance)

      expect(await timestamp.get(0)).toBeUndefined()
      expect(await timestamp.getCreatedAt(-1)).toBeUndefined()
      expect(await timestamp.getUpdatedAt(1.5)).toBeUndefined()

      const minimalTimestamp = new CmsDbTimestamp(minimalTable, dbInstance)
      expect(await minimalTimestamp.get(1)).toBeUndefined()
      expect(await minimalTimestamp.getCreatedAt(1)).toBeUndefined()
      expect(await minimalTimestamp.getUpdatedAt(1)).toBeUndefined()
      expect(raw.select).not.toHaveBeenCalled()
    })

    it('returns stored timestamps when record exists and undefined when missing', async () => {
      const createdAt = new Date('2026-11-18T10:00:00.000Z')
      const updatedAt = new Date('2026-11-19T08:00:00.000Z')
      const { dbInstance, raw } = createMockDb({
        selectQueue: [
          [{ createdAt, updatedAt }],
          [],
          [{ createdAt }],
          [{ updatedAt }]
        ]
      })
      const timestamp = new CmsDbTimestamp(permissions, dbInstance)

      expect(await timestamp.get(5)).toEqual({ createdAt, updatedAt })
      expect(await timestamp.get(999)).toBeUndefined()
      expect(await timestamp.getCreatedAt(5)).toEqual(createdAt)
      expect(await timestamp.getUpdatedAt(5)).toEqual(updatedAt)
      expect(raw.select).toHaveBeenCalledTimes(4)
    })
  })

  describe('update & buildUpdateValues', () => {
    it('throws ErrorCenterError on invalid ID without querying database', async () => {
      ErrorCenter.setIsConsole(false)
      registerCmsErrorCauses()
      const { dbInstance, raw } = createMockDb()
      const timestamp = new CmsDbTimestamp(permissions, dbInstance)

      await expect(timestamp.update(0)).rejects.toThrow(ErrorCenterError)
      await expect(timestamp.update(-3)).rejects.toThrow('Valid positive integer record ID is required.')
      expect(raw.update).not.toHaveBeenCalled()
    })

    it('updates updatedAt when column exists and returns false when table has no updatedAt column', async () => {
      const customDate = new Date('2026-11-19T09:00:00.000Z')
      const { dbInstance, raw, updateChains } = createMockDb({
        updateQueue: [[{ id: 7 }], []]
      })
      const timestamp = new CmsDbTimestamp(permissions, dbInstance)

      expect(await timestamp.update(7, customDate)).toBe(true)
      expect(await timestamp.update(888, customDate)).toBe(false)
      expect(updateChains[0]?.set).toHaveBeenCalledWith({ updatedAt: customDate })

      const minimalTimestamp = new CmsDbTimestamp(minimalTable, dbInstance)
      expect(await minimalTimestamp.update(7)).toBe(false)
      expect(raw.update).toHaveBeenCalledTimes(2)
    })

    it('builds update payload with updatedAt only when the table defines updatedAt', () => {
      const { dbInstance } = createMockDb()
      const timestamp = new CmsDbTimestamp(permissions, dbInstance)
      expect(timestamp.buildUpdateValues({ systemStatus: 'blocked' })).toEqual({
        systemStatus: 'blocked',
        updatedAt: expect.any(Date)
      })

      const minimalTimestamp = new CmsDbTimestamp(minimalTable, dbInstance)
      expect(minimalTimestamp.buildUpdateValues({ systemStatus: 'blocked' })).toEqual({
        systemStatus: 'blocked'
      })
    })
  })
})
