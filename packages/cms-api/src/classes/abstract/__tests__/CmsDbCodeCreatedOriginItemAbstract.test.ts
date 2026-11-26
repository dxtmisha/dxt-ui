import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { ErrorCenter } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_PERMISSION_ERROR_GROUP } from '../../../media/errors/cmsPermissionErrorCauseList'
import { CmsDbCodeCreatedOriginItemAbstract } from '../temp/CmsDbCodeCreatedOriginItemAbstract'
import {
  type CmsDbCodeCreatedOriginItemData,
  CmsSystemStatus
} from '../../../types/cmsDbTypes'

const testCodeOriginItemsTable = pgTable('test_code_origin_items', {
  id: serial('id').primaryKey(),
  code: text('code').notNull().unique(),
  name: text('name').notNull(),
  description: text('description'),
  createdOrigin: text('created_origin'),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

class TestDbCodeOriginItem extends CmsDbCodeCreatedOriginItemAbstract<
  typeof testCodeOriginItemsTable,
  CmsDbCodeCreatedOriginItemData
> {
  static readonly table = testCodeOriginItemsTable
  static readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  protected readonly errorGroup = TestDbCodeOriginItem.errorGroup

  constructor(data: CmsDbCodeCreatedOriginItemData) {
    super(TestDbCodeOriginItem.table, data)
  }
}

function makeRecord(
  overrides: Partial<CmsDbCodeCreatedOriginItemData> = {}
): CmsDbCodeCreatedOriginItemData {
  const now = new Date('2026-11-24T12:00:00.000Z')
  return {
    id: 10,
    code: 'item:read',
    name: 'Read item',
    description: null,
    createdOrigin: 'admin',
    systemStatus: CmsSystemStatus.active,
    createdAt: now,
    updatedAt: now,
    ...overrides
  }
}

describe('CmsDbCodeCreatedOriginItemAbstract', () => {
  beforeEach(() => {
    registerCmsErrorCauses()
    ErrorCenter.setIsConsole(false)
  })

  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  it('exposes createdOrigin getter for string and null values', () => {
    const withOrigin = new TestDbCodeOriginItem(makeRecord({ createdOrigin: 'system' }))
    const withoutOrigin = new TestDbCodeOriginItem(makeRecord({ createdOrigin: null }))

    expect(withOrigin.getCreatedOrigin()).toBe('system')
    expect(withoutOrigin.getCreatedOrigin()).toBeNull()
  })

  it('normalizes createdOrigin in static buildCreateValues and buildUpdateValues', () => {
    expect(TestDbCodeOriginItem.buildCreateValues({
      code: '  item:write  ',
      name: '  Write item  ',
      createdOrigin: '  admin  '
    })).toEqual({
      code: 'item:write',
      name: 'Write item',
      description: undefined,
      createdOrigin: 'admin'
    })

    expect(TestDbCodeOriginItem.buildCreateValues({
      code: 'item:list',
      name: 'List items',
      createdOrigin: '   '
    })).toEqual({
      code: 'item:list',
      name: 'List items',
      description: undefined,
      createdOrigin: null
    })

    const item = new TestDbCodeOriginItem(makeRecord())
    expect(item.buildUpdateValues({
      createdOrigin: '  api  '
    })).toEqual({
      createdOrigin: 'api',
      updatedAt: expect.any(Date)
    })

    expect(item.buildUpdateValues({
      createdOrigin: '   '
    })).toEqual({
      createdOrigin: null,
      updatedAt: expect.any(Date)
    })

    expect(item.buildUpdateValues({
      createdOrigin: 123 as unknown as string
    })).toEqual({
      createdOrigin: null,
      updatedAt: expect.any(Date)
    })
  })
})
