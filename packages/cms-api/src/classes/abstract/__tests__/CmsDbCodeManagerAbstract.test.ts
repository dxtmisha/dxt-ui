import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_PERMISSION_ERROR_GROUP } from '../../../media/errors/cmsPermissionErrorCauseList'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsDbCodeItemAbstract } from '../temp/CmsDbCodeItemAbstract'
import { CmsDbCodeManagerAbstract } from '../temp/CmsDbCodeManagerAbstract'
import {
  type CmsCodeCreateInput,
  type CmsCodeInsertValues,
  type CmsCodeListOptions,
  type CmsCodeUpdateInput,
  type CmsDb,
  type CmsDbCodeItemData,
  CmsSystemStatus
} from '../../../types/cmsDbTypes'

const testCodeManagerTable = pgTable('test_code_manager_items', {
  id: serial('id').primaryKey(),
  code: text('code').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

class TestCodeManagerItem extends CmsDbCodeItemAbstract<
  typeof testCodeManagerTable,
  CmsDbCodeItemData,
  CmsCodeUpdateInput
> {
  static readonly table = testCodeManagerTable
  static readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  protected readonly errorGroup = TestCodeManagerItem.errorGroup

  constructor(
    data: CmsDbCodeItemData,
    databaseInstance?: CmsDbInstance
  ) {
    super(TestCodeManagerItem.table, data, databaseInstance)
  }
}

class TestCodeManager extends CmsDbCodeManagerAbstract<
  typeof testCodeManagerTable,
  CmsDbCodeItemData,
  CmsCodeCreateInput,
  CmsCodeUpdateInput,
  TestCodeManagerItem,
  CmsCodeListOptions
> {
  protected readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  constructor(databaseInstance?: CmsDbInstance) {
    super(testCodeManagerTable, databaseInstance)
  }

  protected wrapItem(record: CmsDbCodeItemData): TestCodeManagerItem {
    return new TestCodeManagerItem(record, this.databaseInstance)
  }

  protected prepareCreateValues(input: CmsCodeCreateInput): CmsCodeInsertValues {
    return TestCodeManagerItem.buildCreateValues(input)
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

function makeRecord(overrides: Partial<CmsDbCodeItemData> = {}): CmsDbCodeItemData {
  const now = new Date('2026-11-24T12:00:00.000Z')
  return {
    id: 1,
    code: 'item:read',
    name: 'Read item',
    description: null,
    systemStatus: CmsSystemStatus.active,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsDbCodeManagerAbstract', () => {
  beforeEach(() => {
    registerCmsErrorCauses()
    ErrorCenter.setIsConsole(false)
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  it('provides hasByCode, getById, getByCode, getByIds, and getByCodes with validation guards', async () => {
    const first = makeRecord({ id: 1, code: 'one' })
    const second = makeRecord({ id: 2, code: 'two' })
    const selectQueue: unknown[][] = [
      [{ id: 1 }],
      [first],
      [second],
      [first, second],
      [first, second]
    ]

    const db = {
      select: vi.fn(() => createChain(() => selectQueue.shift() ?? []))
    } as unknown as CmsDb

    const dbInstance = new CmsDbInstance()
    vi.spyOn(dbInstance, 'get').mockReturnValue(db)

    const manager = new TestCodeManager(dbInstance)

    expect(await manager.hasByCode('   ')).toBe(false)
    expect(await manager.getById(0)).toBeUndefined()
    expect(await manager.getByCode('   ')).toBeUndefined()
    expect(await manager.getByIds([-1])).toEqual([])
    expect(await manager.getByCodes([''])).toEqual([])
    expect((db as unknown as { select: ReturnType<typeof vi.fn> }).select).not.toHaveBeenCalled()

    expect(await manager.hasByCode(' one ')).toBe(true)
    expect((await manager.getById(1))?.getCode()).toBe('one')
    expect((await manager.getByCode(' two '))?.getId()).toBe(2)
    expect((await manager.getByIds([1, 2])).map(item => item.getId())).toEqual([1, 2])
    expect((await manager.getByCodes(['one', ' two '])).map(item => item.getCode())).toEqual(['one', 'two'])
  })

  it('handles paginated lists, create, update, delete, and ErrorCenter error routing', async () => {
    const created = makeRecord({ id: 4, code: 'created' })
    const updated = makeRecord({ id: 4, code: 'created', name: 'Updated' })
    const selectQueue: unknown[][] = [
      [{ count: 1 }],
      [created],
      [created],
      [updated],
      [updated],
      []
    ]
    const insertQueue: unknown[][] = [[created], []]
    const updateQueue: unknown[][] = [[{ id: 4 }]]
    const deleteQueue: unknown[][] = [[{ id: 4 }]]

    const db = {
      select: vi.fn(() => createChain(() => selectQueue.shift() ?? [])),
      insert: vi.fn(() => createChain(() => insertQueue.shift() ?? [])),
      update: vi.fn(() => createChain(() => updateQueue.shift() ?? [])),
      delete: vi.fn(() => createChain(() => deleteQueue.shift() ?? []))
    } as unknown as CmsDb

    const dbInstance = new CmsDbInstance()
    vi.spyOn(dbInstance, 'get').mockReturnValue(db)

    const manager = new TestCodeManager(dbInstance)

    const list = await manager.getList({ search: 'created', limit: 300, offset: -2 })
    expect(list.total).toBe(1)
    expect(list.limit).toBe(200)
    expect(list.offset).toBe(0)
    expect(list.items[0]).toBeInstanceOf(TestCodeManagerItem)

    const createdItem = await manager.create({ code: ' created ', name: 'Created' })
    expect(createdItem.getCode()).toBe('created')

    const updatedItem = await manager.update(4, { name: 'Updated' })
    expect(updatedItem?.getName()).toBe('Updated')

    expect(await manager.delete(4)).toBe(true)
    expect(await manager.delete(999)).toBe(false)

    await expect(manager.create({ code: 'empty', name: 'Empty' })).rejects.toThrow('Failed to create CMS permission.')
  })
})
