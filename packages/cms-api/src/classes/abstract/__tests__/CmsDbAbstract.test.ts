import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError } from '@dxtmisha/functional-basic'

import { useCmsDb } from '../../../composables/useCmsDb'
import { registerCmsErrorCauses } from '../../../functions/registerCmsErrorCauses'
import { CMS_VERIFICATION_ERROR_GROUP } from '../../../media/errors/cmsVerificationErrorCauseList'
import { permissions } from '../../../media/schema/permissions'
import { CmsDbInstance } from '../../CmsDbInstance'
import { CmsDbAbstract } from '../CmsDbAbstract'
import type { CmsIdTable } from '../../../types/cmsDbTypes'

class TestCmsDb extends CmsDbAbstract<typeof permissions> {
  protected readonly errorGroup = CMS_VERIFICATION_ERROR_GROUP

  getTable(): CmsIdTable {
    return this.getBaseTable()
  }

  getDatabaseInstance(): CmsDbInstance {
    return this.databaseInstance
  }

  rethrowError(code: string, error: unknown): never {
    return this.handleError(code, error)
  }
}

describe('CmsDbAbstract', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('binds table schema and custom CmsDbInstance via constructor', () => {
      const dbInstance = new CmsDbInstance()
      const entity = new TestCmsDb(permissions, dbInstance)

      expect(entity.getTable()).toBe(permissions)
      expect(entity.getDatabaseInstance()).toBe(dbInstance)
      expectTypeOf(entity.getTable()).toEqualTypeOf<CmsIdTable>()
    })

    it('falls back to default useCmsDb().cmsDbInstance when databaseInstance is omitted', () => {
      const entity = new TestCmsDb(permissions)

      expect(entity.getDatabaseInstance()).toBe(useCmsDb().cmsDbInstance)
    })

    it('isolates databaseInstance references across separate instances', () => {
      const firstDbInstance = new CmsDbInstance()
      const secondDbInstance = new CmsDbInstance()
      const firstEntity = new TestCmsDb(permissions, firstDbInstance)
      const secondEntity = new TestCmsDb(permissions, secondDbInstance)

      expect(firstEntity.getDatabaseInstance()).toBe(firstDbInstance)
      expect(secondEntity.getDatabaseInstance()).toBe(secondDbInstance)
      expect(firstEntity.getDatabaseInstance()).not.toBe(secondEntity.getDatabaseInstance())
    })
  })

  describe('Error handling via ErrorCenterThrow', () => {
    it('wraps raw Error instances and routes them through ErrorCenter using errorGroup', () => {
      ErrorCenter.setIsConsole(false)
      registerCmsErrorCauses()
      const capturedErrors: Array<{ group?: string, code: string }> = []
      ErrorCenter.addCallback((cause) => {
        capturedErrors.push({
          group: cause.group,
          code: cause.code
        })
      })

      const entity = new TestCmsDb(permissions, new CmsDbInstance())

      expect(() => entity.rethrowError('invalidId', new Error('raw failure'))).toThrow(ErrorCenterError)
      expect(() => entity.rethrowError('invalidId', 'string failure')).toThrow('Valid positive integer record ID is required.')
      expect(capturedErrors).toEqual([
        { group: CMS_VERIFICATION_ERROR_GROUP, code: 'invalidId' },
        { group: CMS_VERIFICATION_ERROR_GROUP, code: 'invalidId' }
      ])
    })

    it('rethrows existing ErrorCenterError without double-wrapping', () => {
      ErrorCenter.setIsConsole(false)
      registerCmsErrorCauses()
      const originalError = new ErrorCenterError({
        group: CMS_VERIFICATION_ERROR_GROUP,
        code: 'invalidCode',
        message: 'Existing domain error'
      })

      const entity = new TestCmsDb(permissions, new CmsDbInstance())

      expect(() => entity.rethrowError('invalidId', originalError)).toThrow(originalError)
    })
  })
})
