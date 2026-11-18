import { afterEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError, ErrorCenterInstance } from '@dxtmisha/functional-basic'
import { CmsErrorInstance } from '../CmsErrorInstance'
import { CmsVerification } from '../CmsVerification'

describe('CmsVerification', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
  })

  describe('isNonNegative', () => {
    it('returns true for zero and positive finite numbers without reporting an error', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)

      const cmsError = new CmsErrorInstance(errorCenter)
      const reportSpy = vi.spyOn(cmsError, 'report')
      const verification = new CmsVerification(cmsError)
      const cause = {
        group: 'cms-user',
        code: 'invalidPhone'
      }

      expect(verification.isNonNegative(0, cause)).toBe(true)
      expect(verification.isNonNegative(-0, cause)).toBe(true)
      expect(verification.isNonNegative(1, cause)).toBe(true)
      expect(verification.isNonNegative(12.5, cause)).toBe(true)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('returns false without reporting an error when value is negative, non-finite, or non-number and cause is omitted', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)

      const cmsError = new CmsErrorInstance(errorCenter)
      const reportSpy = vi.spyOn(cmsError, 'report')
      const verification = new CmsVerification(cmsError)

      expect(verification.isNonNegative(-1)).toBe(false)
      expect(verification.isNonNegative(-0.01)).toBe(false)
      expect(verification.isNonNegative(Number.NaN)).toBe(false)
      expect(verification.isNonNegative(Number.POSITIVE_INFINITY)).toBe(false)
      expect(verification.isNonNegative(Number.NEGATIVE_INFINITY)).toBe(false)
      expect(verification.isNonNegative('0')).toBe(false)
      expect(verification.isNonNegative(null)).toBe(false)
      expect(verification.isNonNegative(undefined)).toBe(false)
      expect(verification.isNonNegative({})).toBe(false)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('reports cause and throws ErrorCenterError when value is negative or invalid and cause is provided', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)

      const cmsError = new CmsErrorInstance(errorCenter)
      const reportSpy = vi.spyOn(cmsError, 'report')
      const verification = new CmsVerification(cmsError)
      const cause = {
        group: 'cms-user',
        code: 'invalidPhone',
        details: { value: -5 }
      }
      const rootCause = new Error('Negative value')

      expect(() => verification.isNonNegative(-5, cause, { cause: rootCause }))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(1)
      expect(reportSpy).toHaveBeenCalledWith(cause, { cause: rootCause })
    })
  })

  describe('verify', () => {
    it('does not report an error and returns true when the callback returns true', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)

      const cmsError = new CmsErrorInstance(errorCenter)
      const reportSpy = vi.spyOn(cmsError, 'report')
      const verification = new CmsVerification(cmsError)

      expect(verification.verify(
        () => true,
        {
          group: 'cms-user',
          code: 'invalidEmail'
        }
      )).toBe(true)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('does not report an error and returns false when the callback returns false and cause is omitted', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)

      const cmsError = new CmsErrorInstance(errorCenter)
      const reportSpy = vi.spyOn(cmsError, 'report')
      const verification = new CmsVerification(cmsError)

      expect(verification.verify(() => false)).toBe(false)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('calls CmsErrorInstance.report and throws ErrorCenterError when the callback returns false and cause is provided', () => {
      const errorCenter = new ErrorCenterInstance()
      errorCenter.setIsConsole(false)

      const cmsError = new CmsErrorInstance(errorCenter)
      const reportSpy = vi.spyOn(cmsError, 'report')
      const verification = new CmsVerification(cmsError)
      const cause = {
        group: 'cms-user',
        code: 'invalidEmail',
        details: { email: 'bad' }
      }
      const rootCause = new Error('Validation failed')

      expect(() => verification.verify(() => false, cause, { cause: rootCause }))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(1)
      expect(reportSpy).toHaveBeenCalledWith(cause, { cause: rootCause })
    })

    it('uses default CmsError.getItem() when no CmsErrorInstance is provided', () => {
      ErrorCenter.setIsConsole(false)
      const verification = new CmsVerification()

      expect(() => verification.verify(
        () => false,
        {
          group: 'cms-role',
          code: 'notFound'
        }
      ))
        .toThrow(ErrorCenterError)
    })
  })
})
