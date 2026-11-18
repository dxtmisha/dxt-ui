import { afterEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError, ErrorCenterInstance, ErrorCenterThrowInstance } from '@dxtmisha/functional-basic'
import { registerCmsErrorCauses } from '../../functions/registerCmsErrorCauses'
import { CmsVerification } from '../CmsVerification'

describe('CmsVerification', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  describe('isPositiveInteger', () => {
    it('returns true for positive safe integers without reporting an error', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)
      registerCmsErrorCauses(errorCenter)

      const errorThrow = new ErrorCenterThrowInstance(errorCenter)
      const reportSpy = vi.spyOn(errorThrow, 'on')
      const cause = {
        group: 'cms-user',
        code: 'invalidId'
      }

      expect(CmsVerification.isPositiveInteger(1, cause, undefined, errorThrow)).toBe(true)
      expect(CmsVerification.isPositiveInteger(42, cause, undefined, errorThrow)).toBe(true)
      expect(CmsVerification.isPositiveInteger(Number.MAX_SAFE_INTEGER, cause, undefined, errorThrow)).toBe(true)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('returns false without reporting an error when value is zero, negative, float, unsafe, or non-number and cause is omitted', () => {
      expect(CmsVerification.isPositiveInteger(0)).toBe(false)
      expect(CmsVerification.isPositiveInteger(-0)).toBe(false)
      expect(CmsVerification.isPositiveInteger(-1)).toBe(false)
      expect(CmsVerification.isPositiveInteger(1.5)).toBe(false)
      expect(CmsVerification.isPositiveInteger(Number.NaN)).toBe(false)
      expect(CmsVerification.isPositiveInteger(Number.POSITIVE_INFINITY)).toBe(false)
      expect(CmsVerification.isPositiveInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
      expect(CmsVerification.isPositiveInteger('1')).toBe(false)
      expect(CmsVerification.isPositiveInteger(null)).toBe(false)
      expect(CmsVerification.isPositiveInteger(undefined)).toBe(false)
      expect(CmsVerification.isPositiveInteger({})).toBe(false)
    })

    it('reports cause and throws ErrorCenterError when value is not a positive safe integer and cause is provided', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)
      registerCmsErrorCauses(errorCenter)

      const errorThrow = new ErrorCenterThrowInstance(errorCenter)
      const reportSpy = vi.spyOn(errorThrow, 'on')
      const cause = {
        group: 'cms-user',
        code: 'invalidId',
        details: { id: 0 }
      }
      const rootCause = new Error('Invalid ID')

      expect(() => CmsVerification.isPositiveInteger(0, cause, { cause: rootCause }, errorThrow))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(1)
      expect(reportSpy).toHaveBeenCalledWith(cause, { cause: rootCause })
    })
  })

  describe('verify', () => {
    it('does not report an error and returns true when the callback or boolean value is true', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)
      registerCmsErrorCauses(errorCenter)

      const errorThrow = new ErrorCenterThrowInstance(errorCenter)
      const reportSpy = vi.spyOn(errorThrow, 'on')
      const cause = {
        group: 'cms-user',
        code: 'invalidEmail'
      }

      expect(CmsVerification.verify(() => true, cause, undefined, errorThrow)).toBe(true)
      expect(CmsVerification.verify(true, cause, undefined, errorThrow)).toBe(true)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('does not report an error and returns false when the callback or boolean value is false and cause is omitted', () => {
      expect(CmsVerification.verify(() => false)).toBe(false)
      expect(CmsVerification.verify(false)).toBe(false)
    })

    it('calls ErrorCenterThrowInstance.on and throws ErrorCenterError when the callback or boolean value is false and cause is provided', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)
      registerCmsErrorCauses(errorCenter)

      const errorThrow = new ErrorCenterThrowInstance(errorCenter)
      const reportSpy = vi.spyOn(errorThrow, 'on')
      const cause = {
        group: 'cms-user',
        code: 'invalidEmail',
        details: { email: 'bad' }
      }
      const rootCause = new Error('Validation failed')

      expect(() => CmsVerification.verify(() => false, cause, { cause: rootCause }, errorThrow))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.verify(false, cause, { cause: rootCause }, errorThrow))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(2)
      expect(reportSpy).toHaveBeenCalledWith(cause, { cause: rootCause })
    })

    it('uses default ErrorCenterThrow.getItem() when no ErrorCenterThrowInstance is provided', () => {
      ErrorCenter.setIsConsole(false)

      expect(() => CmsVerification.verify(
        () => false,
        {
          group: 'cms-role',
          code: 'notFound'
        }
      ))
        .toThrow('Requested CMS role was not found.')
    })
  })
})
