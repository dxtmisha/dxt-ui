import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_PERMISSION_ERROR_GROUP } from '../../../media/errors/cmsPermissionErrorCauseList'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsDbItemAbstract } from '../CmsDbItemAbstract'
import { CmsDbManagerAbstract } from '../CmsDbManagerAbstract'
import type {
  CmsDb,
  CmsDbItemData,
  CmsListOptions
} from '../../../types/cmsDbTypes'

const testManagerTable = pgTable('test_manager_items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

interface TestManagerRecord extends CmsDbItemData {
  name: string
}

interface TestManagerCreateInput {
  name: string
}

interface TestManagerUpdateInput {
  name?: string
}

class TestManagerItem extends CmsDbItemAbstract<
  typeof testManagerTable,
  TestManagerRecord,
  TestManagerUpdateInput
> {
  protected readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  constructor(
    data: TestManagerRecord,
    databaseInstance?: CmsDbInstance
  ) {
    super(testManagerTable, data, databaseInstance)
  }
}

class TestManager extends CmsDbManagerAbstract<
  typeof testManagerTable,
  TestManagerRecord,
  TestManagerCreateInput,
  TestManagerUpdateInput,
  TestManagerItem,
  CmsListOptions
> {
  protected readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  constructor(databaseInstance?: CmsDbInstance) {
    super(testManagerTable, databaseInstance)
  }

  protected wrapItem(record: TestManagerRecord): TestManagerItem {
    return new TestManagerItem(record, this.databaseInstance)
  }

  protected prepareCreateValues(input: TestManagerCreateInput) {
    return { name: input.name.trim() }
  }
}

interface MockChain {
  from: ReturnType<typeof vi.fn>
  where: ReturnType<typeof vi.fn>
  orderBy: ReturnType<typeof vi.fn>
  limit: ReturnType<typeof vi.fn>
  offset: ReturnType<typeof vi.fn>
  values: ReturnType<typeof vi.fn>
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
    orderBy: vi.fn(() => chain),
    limit: vi.fn(() => chain),
    offset: vi.fn(() => chain),
    values: vi.fn(() => chain),
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

function makeRecord(overrides: Partial<TestManagerRecord> = {}): TestManagerRecord {
  const now = new Date('2026-11-24T12:00:00.000Z')
  return {
    id: 1,
    name: 'Item',
    systemStatus: 'active',
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsDbManagerAbstract', () => {
  beforeEach(() => {
    registerCmsErrorCauses()
    ErrorCenter.setIsConsole(false)
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  it('provides getById, getByIds, getList, create, update, delete, and ErrorCenter error handling', async () => {
    const first = makeRecord({ id: 1, name: 'First' })
    const second = makeRecord({ id: 2, name: 'Second' })
    const updated = makeRecord({ id: 1, name: 'Updated' })
    const selectQueue: unknown[][] = [
      [first],
      [first, second],
      [{ count: 1 }],
      [first],
      [{ count: 0 }],
      [first],
      [updated],
      [updated],
      []
    ]
    const insertQueue: unknown[][] = [[first], []]
    const updateQueue: unknown[][] = [[{ id: 1 }]]
    const deleteQueue: unknown[][] = [[{ id: 1 }]]

    const db = {
      select: vi.fn(() => createChain(() => selectQueue.shift() ?? [])),
      insert: vi.fn(() => createChain(() => insertQueue.shift() ?? [])),
      update: vi.fn(() => createChain(() => updateQueue.shift() ?? [])),
      delete: vi.fn(() => createChain(() => deleteQueue.shift() ?? []))
    } as unknown as CmsDb

    const dbInstance = new CmsDbInstance()
    vi.spyOn(dbInstance, 'get').mockReturnValue(db)

    const manager = new TestManager(dbInstance)

    expect(await manager.getById(0)).toBeUndefined()
    expect(await manager.getByIds([0, -2])).toEqual([])
    expect((db as unknown as { select: ReturnType<typeof vi.fn> }).select).not.toHaveBeenCalled()

    expect((await manager.getById(1))?.getData().name).toBe('First')
    expect((await manager.getByIds([1, 2])).map(item => item.getId())).toEqual([1, 2])

    const list = await manager.getList({ limit: 300, offset: -5 })
    expect(list.total).toBe(1)
    expect(list.limit).toBe(200)
    expect(list.offset).toBe(0)
    expect(list.hasMore).toBe(false)
    expect(list.items[0]).toBeInstanceOf(TestManagerItem)

    expect(await manager.getList({ limit: 0 })).toEqual({
      items: [],
      total: 0,
      limit: 1,
      offset: 0,
      hasMore: false
    })

    const createdItem = await manager.create({ name: '  First  ' })
    expect(createdItem.getData().name).toBe('First')

    const updatedItem = await manager.update(1, { name: 'Updated' })
    expect(updatedItem?.getData().name).toBe('Updated')

    expect(await manager.delete(1)).toBe(true)
    expect(await manager.delete(999)).toBe(false)
    expect(await manager.update(999, { name: 'Missing' })).toBeUndefined()

    await expect(manager.create({ name: 'Fail' })).rejects.toThrow('Failed to create CMS permission.')
  })

  it('supports standalone getItems, getTotal, and hasMore queries', async () => {
    const first = makeRecord({ id: 1, name: 'First' })
    const second = makeRecord({ id: 2, name: 'Second' })
    const selectQueue: unknown[][] = [
      [first, second],
      [{ count: 5 }],
      [{ id: 3 }],
      []
    ]
    const selectChains: MockChain[] = []

    const db = {
      select: vi.fn(() => {
        const chain = createChain(() => selectQueue.shift() ?? [])
        selectChains.push(chain)
        return chain
      })
    } as unknown as CmsDb

    const dbInstance = new CmsDbInstance()
    vi.spyOn(dbInstance, 'get').mockReturnValue(db)

    const manager = new TestManager(dbInstance)

    const items = await manager.getItems({ limit: 2, offset: 0 })
    expect(items.map(item => item.getId())).toEqual([1, 2])
    expect(items[0]).toBeInstanceOf(TestManagerItem)
    expect(selectChains[0]?.limit).toHaveBeenCalledWith(2)
    expect(selectChains[0]?.offset).toHaveBeenCalledWith(0)

    expect(await manager.getTotal()).toBe(5)

    expect(await manager.hasMore({ limit: 2, offset: 0 })).toBe(true)
    expect(selectChains[2]?.limit).toHaveBeenCalledWith(1)
    expect(selectChains[2]?.offset).toHaveBeenCalledWith(2)

    expect(await manager.hasMore({ limit: 2, offset: 4 })).toBe(false)
    expect(selectChains[3]?.limit).toHaveBeenCalledWith(1)
    expect(selectChains[3]?.offset).toHaveBeenCalledWith(6)
  })
})
