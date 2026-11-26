import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_PERMISSION_ERROR_GROUP } from '../../../media/errors/cmsPermissionErrorCauseList'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsDbCodeItemAbstract } from '../temp/CmsDbCodeItemAbstract'
import {
  type CmsDb,
  type CmsDbCodeItemData,
  CmsSystemStatus
} from '../../../types/cmsDbTypes'

const testCodeItemsTable = pgTable('test_code_items', {
  id: serial('id').primaryKey(),
  code: text('code').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  extraColumn: text('extra_column'),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

interface TestCodeItemRecord extends CmsDbCodeItemData {
  extraColumn?: string | null
}

class TestDbCodeItem extends CmsDbCodeItemAbstract<typeof testCodeItemsTable, TestCodeItemRecord> {
  static readonly table = testCodeItemsTable
  static readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  protected readonly errorGroup = TestDbCodeItem.errorGroup

  constructor(
    data: TestCodeItemRecord,
    databaseInstance?: CmsDbInstance
  ) {
    super(TestDbCodeItem.table, data, databaseInstance)
  }
}

class TestRestrictedDbCodeItem extends TestDbCodeItem {
  protected override getForbiddenUpdateColumns(): readonly string[] {
    return [
      ...super.getForbiddenUpdateColumns(),
      'code'
    ]
  }

  protected override getUpdateValidators() {
    return {
      ...super.getUpdateValidators(),
      extraColumn: (value: unknown) => (typeof value === 'string' ? value.trim().toUpperCase() : value)
    }
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

function makeRecord(overrides: Partial<TestCodeItemRecord> = {}): TestCodeItemRecord {
  const now = new Date('2026-11-23T12:00:00.000Z')
  return {
    id: 10,
    code: 'item:read',
    name: 'Read item',
    description: 'Allows reading items',
    systemStatus: CmsSystemStatus.active,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsDbCodeItemAbstract', () => {
  beforeEach(() => {
    registerCmsErrorCauses()
    ErrorCenter.setIsConsole(false)
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  it('provides shared code, name, and description getters', () => {
    const item = new TestDbCodeItem(makeRecord())

    expect(item.getId()).toBe(10)
    expect(item.getCode()).toBe('item:read')
    expect(item.getName()).toBe('Read item')
    expect(item.getDescription()).toBe('Allows reading items')
  })

  it('validates and builds create/update payloads via CmsVerification and table column checks', () => {
    const item = new TestDbCodeItem(makeRecord())
    const restrictedItem = new TestRestrictedDbCodeItem(makeRecord())

    expect(() => TestDbCodeItem.buildCreateValues({ code: 'bad code', name: 'Name' })).toThrow('Valid code is required.')
    expect(() => TestDbCodeItem.buildCreateValues({ code: 'users:read', name: '   ' })).toThrow('Valid name is required.')
    expect(() => item.buildUpdateValues({ code: 'bad code' })).toThrow('Valid code is required.')
    expect(() => item.buildUpdateValues({ name: '   ' })).toThrow('Valid name is required.')

    expect(TestDbCodeItem.buildCreateValues({
      code: '  users:write  ',
      name: '  Users Write  ',
      description: '   '
    })).toEqual({
      code: 'users:write',
      name: 'Users Write',
      description: null
    })

    expect(TestDbCodeItem.buildCreateValues({
      code: 'users:delete',
      name: 'Users Delete',
      description: '  Delete users  ',
      systemStatus: CmsSystemStatus.blocked
    })).toEqual({
      code: 'users:delete',
      name: 'Users Delete',
      description: 'Delete users',
      systemStatus: CmsSystemStatus.blocked
    })

    expect(item.buildUpdateValues({
      id: 999,
      createdAt: new Date('2020-01-01T00:00:00.000Z'),
      updatedAt: new Date('2020-01-01T00:00:00.000Z'),
      code: '  users:manage  ',
      name: '  Manage  ',
      description: '   ',
      extraColumn: 'custom-value',
      nonExistentColumn: 'ignored',
      systemStatus: 'active'
    } as Record<string, unknown>)).toEqual({
      code: 'users:manage',
      name: 'Manage',
      description: null,
      extraColumn: 'custom-value',
      systemStatus: CmsSystemStatus.active,
      updatedAt: expect.any(Date)
    })

    expect(restrictedItem.buildUpdateValues({
      code: 'bad code',
      name: '  Allowed  ',
      extraColumn: '  custom  '
    })).toEqual({
      name: 'Allowed',
      extraColumn: 'CUSTOM',
      updatedAt: expect.any(Date)
    })

    expect(restrictedItem.buildCreateValues({
      code: '  allowed:code  ',
      name: '  Allowed  ',
      extraColumn: '  custom  '
    })).toEqual({
      code: 'allowed:code',
      name: 'Allowed',
      extraColumn: 'CUSTOM',
      systemStatus: CmsSystemStatus.active,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)
    })

    expect(item.buildUpdateValues({})).toEqual({
      updatedAt: expect.any(Date)
    })
  })

  it('resolves IDs by IDs and codes', async () => {
    const selectQueue = [
      [{ id: 5 }],
      [{ id: 6, code: 'roles:write' }],
      []
    ]

    const db = {
      select: vi.fn(() => createChain(() => selectQueue.shift() ?? []))
    } as unknown as CmsDb

    expect(await TestDbCodeItem.resolveIds(db, [5, 5], [' roles:write ', ''])).toEqual([5, 6])

    await expect(TestDbCodeItem.resolveIds(db, [999])).rejects.toThrow('Requested CMS permissions were not found.')
  })

  it('updates fields in database via inherited update method and validates id', async () => {
    const selectQueue = [
      [makeRecord({ code: 'item:updated', name: 'Updated Item', description: null })]
    ]
    const updateQueue = [
      [{ id: 10 }]
    ]

    const updateChain = createChain(() => updateQueue.shift() ?? [])
    const db = {
      select: vi.fn(() => createChain(() => selectQueue.shift() ?? [])),
      update: vi.fn(() => updateChain)
    } as unknown as CmsDb

    const dbInstance = new CmsDbInstance()
    vi.spyOn(dbInstance, 'get').mockReturnValue(db)

    const item = new TestDbCodeItem(makeRecord(), dbInstance)
    const updated = await item.update({
      code: '  item:updated  ',
      name: '  Updated Item  ',
      description: '   '
    })

    expect(updated).toBe(item)
    expect(item.getCode()).toBe('item:updated')
    expect(item.getName()).toBe('Updated Item')
    expect(item.getDescription()).toBeNull()
    expect(updateChain.set).toHaveBeenCalledWith(expect.objectContaining({
      code: 'item:updated',
      name: 'Updated Item',
      description: null,
      updatedAt: expect.any(Date)
    }))

    const invalidItem = new TestDbCodeItem(makeRecord({ id: 0 }), dbInstance)
    await expect(invalidItem.update({ name: 'Test' })).rejects.toThrow('Valid positive integer record ID is required.')
  })
})
