import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
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

const createdOnlyTable = pgTable('created_only_items', {
  id: serial('id').primaryKey(),
  systemStatus: text('system_status').$type<CmsSystemStatus>().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
})

const updatedOnlyTable = pgTable('updated_only_items', {
  id: serial('id').primaryKey(),
  systemStatus: text('system_status').$type<CmsSystemStatus>().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})

describe('CmsDbTimestamp', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
    vi.useRealTimers()
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
      expect(raw.select).toHaveBeenCalledWith({
        createdAt: permissions.createdAt,
        updatedAt: permissions.updatedAt
      })
    })

    it('selects only the timestamp column defined on single-timestamp tables', async () => {
      const createdAt = new Date('2026-11-18T10:00:00.000Z')
      const updatedAt = new Date('2026-11-19T08:00:00.000Z')
      const { dbInstance, raw } = createMockDb({
        selectQueue: [
          [{ createdAt }],
          [{ updatedAt }]
        ]
      })

      const createdOnly = new CmsDbTimestamp(createdOnlyTable, dbInstance)
      expect(await createdOnly.getCreatedAt(3)).toEqual(createdAt)
      expect(await createdOnly.getUpdatedAt(3)).toBeUndefined()
      expect(raw.select).toHaveBeenNthCalledWith(1, {
        createdAt: createdOnlyTable.createdAt
      })

      const updatedOnly = new CmsDbTimestamp(updatedOnlyTable, dbInstance)
      expect(await updatedOnly.getUpdatedAt(4)).toEqual(updatedAt)
      expect(await updatedOnly.getCreatedAt(4)).toBeUndefined()
      expect(raw.select).toHaveBeenNthCalledWith(2, {
        updatedAt: updatedOnlyTable.updatedAt
      })
    })
  })

  describe('update, buildCreateValues, buildTimestampValues & buildUpdateValues', () => {
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

    it('builds create payload with createdAt and updatedAt only when the table defines them', () => {
      vi.useFakeTimers()
      const fixedNow = new Date('2026-11-24T10:00:00.000Z')
      vi.setSystemTime(fixedNow)

      const { dbInstance } = createMockDb()
      const timestampManager = new CmsDbTimestamp(permissions, dbInstance)
      const callerInput = { systemStatus: 'active' as const }
      const inputSnapshot = { ...callerInput }
      const createdPayload = timestampManager.buildCreateValues(callerInput)

      expectTypeOf(createdPayload).toEqualTypeOf<Partial<typeof permissions.$inferInsert>>()
      expect(callerInput).toEqual(inputSnapshot)
      expect(createdPayload).toEqual({
        systemStatus: 'active',
        createdAt: fixedNow,
        updatedAt: fixedNow
      })
      expect(timestampManager.buildCreateValues()).toEqual({
        createdAt: fixedNow,
        updatedAt: fixedNow
      })

      const createdOnlyManager = new CmsDbTimestamp(createdOnlyTable, dbInstance)
      expect(createdOnlyManager.buildCreateValues({ systemStatus: 'active' })).toEqual({
        systemStatus: 'active',
        createdAt: fixedNow
      })

      const minimalManager = new CmsDbTimestamp(minimalTable, dbInstance)
      expect(minimalManager.buildCreateValues({ systemStatus: 'active' })).toEqual({
        systemStatus: 'active'
      })
    })

    it('builds timestamp payload conditionally via buildTimestampValues and overwrites stale timestamps', () => {
      vi.useFakeTimers()
      const fixedNow = new Date('2026-11-24T11:30:00.000Z')
      vi.setSystemTime(fixedNow)

      const { dbInstance } = createMockDb()
      const timestampManager = new CmsDbTimestamp(permissions, dbInstance)
      const staleDate = new Date('2020-01-01T00:00:00.000Z')

      const updatePayload = timestampManager.buildTimestampValues({
        systemStatus: 'blocked',
        createdAt: staleDate,
        updatedAt: staleDate
      })
      expectTypeOf(updatePayload).toEqualTypeOf<Partial<typeof permissions.$inferInsert>>()
      expect(updatePayload).toEqual({
        systemStatus: 'blocked',
        createdAt: staleDate,
        updatedAt: fixedNow
      })

      const createPayload = timestampManager.buildTimestampValues({
        systemStatus: 'active',
        createdAt: staleDate,
        updatedAt: staleDate
      }, true)
      expect(createPayload).toEqual({
        systemStatus: 'active',
        createdAt: fixedNow,
        updatedAt: fixedNow
      })

      expect(timestampManager.buildTimestampValues()).toEqual({
        updatedAt: fixedNow
      })
    })

    it('builds update payload with updatedAt only when the table defines updatedAt', () => {
      vi.useFakeTimers()
      const fixedNow = new Date('2026-11-24T12:00:00.000Z')
      vi.setSystemTime(fixedNow)

      const { dbInstance } = createMockDb()
      const timestampManager = new CmsDbTimestamp(permissions, dbInstance)
      const updatePayload = timestampManager.buildUpdateValues({ systemStatus: 'blocked' })

      expectTypeOf(updatePayload).toEqualTypeOf<Partial<typeof permissions.$inferInsert>>()
      expect(updatePayload).toEqual({
        systemStatus: 'blocked',
        updatedAt: fixedNow
      })
      expect(timestampManager.buildUpdateValues()).toEqual({
        updatedAt: fixedNow
      })

      const createdOnlyManager = new CmsDbTimestamp(createdOnlyTable, dbInstance)
      expect(createdOnlyManager.buildUpdateValues({ systemStatus: 'blocked' })).toEqual({
        systemStatus: 'blocked'
      })

      const minimalManager = new CmsDbTimestamp(minimalTable, dbInstance)
      expect(minimalManager.buildUpdateValues({ systemStatus: 'blocked' })).toEqual({
        systemStatus: 'blocked'
      })
    })
  })
})
