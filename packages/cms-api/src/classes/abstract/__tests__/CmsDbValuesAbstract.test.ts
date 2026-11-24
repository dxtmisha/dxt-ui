import { afterEach, describe, expect, it, vi } from 'vitest'
import { permissions } from '../../../media/schema/permissions'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsDbValuesAbstract } from '../CmsDbValuesAbstract'
import type { CmsDbUpdateValidator } from '../../../types/cmsDbTypes'

class TestCmsDbValues extends CmsDbValuesAbstract<typeof permissions> {
  protected override getForbiddenUpdateColumns(): readonly string[] {
    return [
      ...super.getForbiddenUpdateColumns(),
      'code'
    ]
  }

  protected override getUpdateValidators(): Record<string, CmsDbUpdateValidator> {
    return {
      name: value => (typeof value === 'string' ? value.trim() : value)
    }
  }
}

describe('CmsDbValuesAbstract', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('builds create, update, and conditional payloads with column filtering, forbidden fields, and validators', () => {
    vi.useFakeTimers()
    const fixedNow = new Date('2026-11-24T19:00:00.000Z')
    vi.setSystemTime(fixedNow)

    const valuesHelper = new TestCmsDbValues(permissions, new CmsDbInstance())

    expect(valuesHelper.buildCreateValues({
      id: 1,
      createdAt: new Date('2020-01-01T00:00:00.000Z'),
      updatedAt: new Date('2020-01-01T00:00:00.000Z'),
      code: 'users:read',
      name: '  Users Read  ',
      unknownField: 'ignored'
    } as Record<string, unknown>)).toEqual({
      code: 'users:read',
      name: 'Users Read',
      systemStatus: 'active',
      createdAt: fixedNow,
      updatedAt: fixedNow
    })

    expect(valuesHelper.buildUpdateValues({
      id: 1,
      code: 'users:write',
      name: '  Users Write  ',
      unknownField: 'ignored'
    } as Record<string, unknown>)).toEqual({
      name: 'Users Write',
      updatedAt: fixedNow
    })

    expect(valuesHelper.buildValues({ name: '  Custom  ' }, true)).toEqual({
      name: 'Custom',
      systemStatus: 'active',
      createdAt: fixedNow,
      updatedAt: fixedNow
    })
  })
})
