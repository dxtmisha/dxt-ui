import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

import { CMS_PERMISSION_ERROR_GROUP } from '../../../media/errors/cmsPermissionErrorCauseList'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsDbValuesAbstract } from '../CmsDbValuesAbstract'
import type { CmsDbUpdateValidator } from '../../../types/cmsDbTypes'

const valuesTestTable = pgTable('cms_db_values_test', {
  id: serial('id').primaryKey(),
  code: text('code').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  sortOrder: integer('sort_order').notNull().default(0),
  isEnabled: boolean('is_enabled').notNull().default(true),
  systemStatus: text('system_status').$type<'active' | 'blocked' | 'deleted'>().notNull().default('active'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

class DefaultCmsDbValues extends CmsDbValuesAbstract<typeof valuesTestTable> {
  protected readonly errorGroup = CMS_PERMISSION_ERROR_GROUP
}

class CustomCmsDbValues extends CmsDbValuesAbstract<typeof valuesTestTable> {
  protected readonly errorGroup = CMS_PERMISSION_ERROR_GROUP

  protected override getForbiddenCreateColumns(): readonly string[] {
    return [
      ...super.getForbiddenCreateColumns(),
      'createdAt'
    ]
  }

  protected override getForbiddenUpdateColumns(): readonly string[] {
    return [
      ...super.getForbiddenUpdateColumns(),
      'code'
    ]
  }

  protected override getCreateValidators(): Record<string, CmsDbUpdateValidator> {
    return {
      code: value => (typeof value === 'string' ? value.trim().toLowerCase() : value),
      name: value => (typeof value === 'string' ? value.trim() : value),
      description: value => (typeof value === 'string' && value.trim() === '' ? undefined : value)
    }
  }

  protected override getUpdateValidators(): Record<string, CmsDbUpdateValidator> {
    return {
      ...super.getUpdateValidators(),
      name: value => (typeof value === 'string' ? value.trim().toUpperCase() : value)
    }
  }

  protected override processCreateValues(
    values: Partial<typeof valuesTestTable.$inferInsert>
  ): Partial<typeof valuesTestTable.$inferInsert> {
    return {
      ...values,
      systemStatus: values.systemStatus ?? 'active'
    }
  }

  protected override processUpdateValues(
    values: Partial<typeof valuesTestTable.$inferInsert>
  ): Partial<typeof valuesTestTable.$inferInsert> {
    return {
      ...values,
      updatedAt: new Date('2026-11-26T12:00:00.000Z')
    }
  }
}

describe('CmsDbValuesAbstract', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('filters unknown and default forbidden columns (id) on create and update', () => {
      const helper = new DefaultCmsDbValues(valuesTestTable, new CmsDbInstance())

      const createPayload = helper.buildCreateValues({
        id: 10,
        code: 'users:read',
        name: 'Users Read',
        description: 'Allows reading users',
        unknownField: 'ignored'
      } as Record<string, unknown>)

      expect(createPayload).toEqual({
        code: 'users:read',
        name: 'Users Read',
        description: 'Allows reading users'
      })
      expectTypeOf(createPayload).toEqualTypeOf<Partial<typeof valuesTestTable.$inferInsert>>()

      const updatePayload = helper.buildUpdateValues({
        id: 10,
        code: 'users:write',
        name: 'Users Write',
        extraField: 123
      } as Record<string, unknown>)

      expect(updatePayload).toEqual({
        code: 'users:write',
        name: 'Users Write'
      })
      expectTypeOf(updatePayload).toEqualTypeOf<Partial<typeof valuesTestTable.$inferInsert>>()
    })

    it('applies inherited and overridden forbidden columns, validators, and post-processors symmetrically', () => {
      const helper = new CustomCmsDbValues(valuesTestTable, new CmsDbInstance())

      const created = helper.buildCreateValues({
        id: 1,
        createdAt: new Date('2020-01-01T00:00:00.000Z'),
        code: '  USERS:READ  ',
        name: '  Users Read  ',
        unknownField: 'ignored'
      } as Record<string, unknown>)

      expect(created).toEqual({
        code: 'users:read',
        name: 'Users Read',
        systemStatus: 'active'
      })

      const updated = helper.buildUpdateValues({
        id: 1,
        createdAt: new Date('2020-01-01T00:00:00.000Z'),
        code: 'users:write',
        name: '  Users Write  '
      })

      expect(updated).toEqual({
        name: 'USERS WRITE',
        updatedAt: new Date('2026-11-26T12:00:00.000Z')
      })
    })
  })

  describe('Boundary values, falsy traps, and empty/undefined inputs', () => {
    it('preserves valid falsy values (0, false, empty string, null) and skips undefined entries', () => {
      const helper = new DefaultCmsDbValues(valuesTestTable, new CmsDbInstance())

      const payload = helper.buildUpdateValues({
        sortOrder: 0,
        isEnabled: false,
        name: '',
        description: null,
        code: undefined
      })

      expect(payload).toStrictEqual({
        sortOrder: 0,
        isEnabled: false,
        name: '',
        description: null
      })
      expect('code' in payload).toBe(false)
    })

    it('handles empty input objects and omits keys when a validator returns undefined', () => {
      const defaultHelper = new DefaultCmsDbValues(valuesTestTable, new CmsDbInstance())
      const customHelper = new CustomCmsDbValues(valuesTestTable, new CmsDbInstance())

      expect(defaultHelper.buildCreateValues({})).toStrictEqual({})
      expect(defaultHelper.buildUpdateValues({})).toStrictEqual({})

      const payload = customHelper.buildCreateValues({
        code: '  AUTH  ',
        name: '  Auth  ',
        description: '   '
      })

      expect(payload).toStrictEqual({
        code: 'auth',
        name: 'Auth',
        systemStatus: 'active'
      })
      expect('description' in payload).toBe(false)
    })
  })

  describe('Immutability, security boundaries, and multilingual values', () => {
    it('does not mutate caller-passed input objects', () => {
      const helper = new CustomCmsDbValues(valuesTestTable, new CmsDbInstance())
      const input = Object.freeze({
        id: 99,
        code: '  ADMIN  ',
        name: '  Admin  '
      })

      expect(helper.buildCreateValues(input)).toEqual({
        code: 'admin',
        name: 'Admin',
        systemStatus: 'active'
      })
      expect(input).toEqual({
        id: 99,
        code: '  ADMIN  ',
        name: '  Admin  '
      })
    })

    it('ignores prototype pollution keys and inherited Object.prototype property names', () => {
      const helper = new DefaultCmsDbValues(valuesTestTable, new CmsDbInstance())
      const maliciousInput = JSON.parse(
        '{"__proto__":{"polluted":true},"constructor":{"prototype":{"polluted":true}},"prototype":{"polluted":true},"toString":"evil","name":"Safe"}'
      ) as Record<string, unknown>

      const payload = helper.buildCreateValues(maliciousInput)

      expect(payload).toStrictEqual({ name: 'Safe' })
      expect(({} as Record<string, unknown>).polluted).toBeUndefined()
    })

    it('preserves Cyrillic, Vietnamese diacritics, CJK, and Emoji values accurately', () => {
      const helper = new CustomCmsDbValues(valuesTestTable, new CmsDbInstance())

      const payload = helper.buildCreateValues({
        code: '  ROLE_VN  ',
        name: '  Nguyễn Привет 你好 🚀  ',
        description: 'Học tiếng Việt 👨‍👩‍👧‍👦'
      })

      expect(payload).toEqual({
        code: 'role_vn',
        name: 'Nguyễn Привет 你好 🚀',
        description: 'Học tiếng Việt 👨‍👩‍👧‍👦',
        systemStatus: 'active'
      })
    })
  })
})
