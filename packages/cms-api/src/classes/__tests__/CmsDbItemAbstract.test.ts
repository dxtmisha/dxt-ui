import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { CmsDbInstance } from '../CmsDbInstance'
import { CmsDbItemAbstract } from '../CmsDbItemAbstract'
import type { CmsDb, CmsDbItemData } from '../../types/cmsDbTypes'

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
  constructor(
    data: TestItemRecord,
    databaseInstance?: CmsDbInstance
  ) {
    super(testItemsTable, data, 'cms-permission', databaseInstance)
  }

  updateName(name: string) {
    return this.updateRecord({ name })
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
    systemStatus: 'active',
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
      [makeRecord({ name: 'Reloaded' })],
      [makeRecord({ systemStatus: 'blocked' })],
      []
    ]
    const updateQueue = [
      [makeRecord({ name: 'Updated' })],
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

    expect((await item.updateName('Updated'))?.getData().name).toBe('Updated')
    expect((await item.reload())?.getData().name).toBe('Reloaded')
    expect((await item.block())?.getSystemStatus()).toBe('blocked')
    expect(await item.reload()).toBeUndefined()
    expect(await item.delete()).toBe(true)

    const invalidItem = new TestDbItem(makeRecord({ id: 0 }), dbInstance)
    expect(await invalidItem.updateName('Ignored')).toBeUndefined()
    expect(await invalidItem.reload()).toBeUndefined()
    await expect(invalidItem.block()).rejects.toThrow(ErrorCenterError)
    expect(await invalidItem.delete()).toBe(false)
  })
})
