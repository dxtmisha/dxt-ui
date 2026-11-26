import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_PERMISSION_ERROR_GROUP } from '../../../media/errors/cmsPermissionErrorCauseList'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsDbItemAbstract } from '../temp/CmsDbItemAbstract'
import {
  type CmsDb,
  type CmsDbItemData,
  CmsSystemStatus
} from '../../../types/cmsDbTypes'

const testItemsTable = pgTable('test_items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

interface TestItemRecord extends CmsDbItemData {
  name: string
}

class TestDbItem extends CmsDbItemAbstract<typeof testItemsTable, TestItemRecord> {
  protected readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  constructor(
    data: TestItemRecord,
    databaseInstance?: CmsDbInstance
  ) {
    super(testItemsTable, data, databaseInstance)
  }
}

interface MockChain {
  from: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  set: ReturnType<typeof vi.fn>
  returning: ReturnType<typeof vi.fn>
  then: (onFulfilled: (value: unknown) => unknown, onRejected?: (reason: unknown) => unknown) => Promise<unknown>
}

function createChain(resolveValue: () => unknown): MockChain {
  let done = false
  let cached: unknown

  const chain: MockChain = {
    from: vi.fn(() => chain),
    where: vi.fn(() => chain),
    limit: vi.fn(() => chain),
    set: vi.fn(() => chain),
    returning: vi.fn(() => chain),
    then: (onFulfilled, onRejected) => {
      if (!done) {
        done = true
        cached = resolveValue()
      }

      return Promise.resolve(cached).then(onFulfilled, onRejected)
    }
  }

  return chain
}

function makeRecord(overrides: Partial<TestItemRecord> = {}): TestItemRecord {
  const now = new Date('2026-11-19T12:00:00.000Z')
  return {
    id: 10,
    name: 'Initial',
    systemStatus: CmsSystemStatus.active,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsDbItemAbstract', () => {
  beforeEach(() => {
    registerCmsErrorCauses()
    ErrorCenter.setIsConsole(false)
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  it('provides common getters, updateRecord, reload, systemStatus transitions, and delete', async () => {
    const selectQueue = [
      [makeRecord({ name: 'Updated' })],
      [makeRecord({ name: 'Reloaded' })],
      [makeRecord({ name: 'Updated Direct' })],
      [makeRecord({ systemStatus: CmsSystemStatus.blocked })],
      []
    ]
    const updateQueue = [
      [{ id: 10 }],
      [{ id: 10 }],
      [{ id: 10 }]
    ]
    const deleteQueue = [[{ id: 10 }]]

    const db = {
      select: vi.fn(() => createChain(() => selectQueue.shift() ?? [])),
      update: vi.fn(() => createChain(() => updateQueue.shift() ?? [])),
      delete: vi.fn(() => createChain(() => deleteQueue.shift() ?? []))
    }

    const dbInstance = new CmsDbInstance()
    vi.spyOn(dbInstance, 'get').mockReturnValue(db as unknown as CmsDb)

    const item = new TestDbItem(makeRecord(), dbInstance)

    expect(item.getId()).toBe(10)
    expect(item.getSystemStatus()).toBe('active')
    expect(item.toJSONString()).toBe(JSON.stringify(item.getData()))

    expect((await item.update({ name: 'Updated' })).getData().name).toBe('Updated')
    expect((await item.reload()).getData().name).toBe('Reloaded')
    expect((await item.update({ name: 'Updated Direct' })).getData().name).toBe('Updated Direct')
    expect((await item.block())?.getSystemStatus()).toBe('blocked')
    expect(await item.reload()).toBe(item)
    expect(item.getSystemStatus()).toBe('blocked')
    expect(await item.delete()).toBe(true)

    const invalidItem = new TestDbItem(makeRecord({ id: 0 }), dbInstance)
    await expect(invalidItem.update({ name: 'Ignored' })).rejects.toThrow(ErrorCenterError)
    await expect(invalidItem.reload()).rejects.toThrow(ErrorCenterError)
    await expect(invalidItem.block()).rejects.toThrow(ErrorCenterError)
    await expect(invalidItem.delete()).rejects.toThrow(ErrorCenterError)
  })

  it('checks whether record exists in database via exists', async () => {
    const selectQueue = [
      [{ id: 10 }],
      []
    ]
    const db = {
      select: vi.fn(() => createChain(() => selectQueue.shift() ?? []))
    }

    const dbInstance = new CmsDbInstance()
    vi.spyOn(dbInstance, 'get').mockReturnValue(db as unknown as CmsDb)

    const item = new TestDbItem(makeRecord(), dbInstance)
    expect(await item.exists()).toBe(true)
    expect(await item.exists()).toBe(false)

    const invalidItem = new TestDbItem(makeRecord({ id: 0 }), dbInstance)
    expect(await invalidItem.exists()).toBe(false)
    expect(db.select).toHaveBeenCalledTimes(2)
  })
})
