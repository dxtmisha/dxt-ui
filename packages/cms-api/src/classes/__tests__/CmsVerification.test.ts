import { afterEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError, ErrorCenterThrow } from '@dxtmisha/functional-basic'
import { CmsVerification } from '../CmsVerification'

describe('CmsVerification', () => {
  afterEach(() => {
    ErrorCenter.reset()
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  describe('isPositiveInteger', () => {
    it('returns true for positive safe integers without reporting an error', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.isPositiveInteger(1, true)).toBe(true)
      expect(CmsVerification.isPositiveInteger(42, true)).toBe(true)
      expect(CmsVerification.isPositiveInteger(Number.MAX_SAFE_INTEGER, true)).toBe(true)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('returns false without reporting an error when value is zero, negative, float, unsafe, or non-number and isError is false or omitted', () => {
      expect(CmsVerification.isPositiveInteger(0)).toBe(false)
      expect(CmsVerification.isPositiveInteger(0, false)).toBe(false)
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

    it('reports cms-verification:invalidId and throws ErrorCenterError when value is not a positive safe integer and isError is true', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(() => CmsVerification.isPositiveInteger(0, true))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(1)
      expect(reportSpy).toHaveBeenCalledWith(
        {
          group: 'cms-verification',
          code: 'invalidId',
          details: { id: 0 }
        },
        undefined
      )
    })
  })

  describe('verify', () => {
    it('does not report an error and returns true when the callback or boolean value is true', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')
      const cause = {
        group: 'cms-user',
        code: 'invalidEmail'
      }

      expect(CmsVerification.verify(() => true, cause)).toBe(true)
      expect(CmsVerification.verify(true, cause)).toBe(true)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('does not report an error and returns false when the callback or boolean value is false and cause is omitted', () => {
      expect(CmsVerification.verify(() => false)).toBe(false)
      expect(CmsVerification.verify(false)).toBe(false)
    })

    it('calls ErrorCenterThrow.on and throws ErrorCenterError when the callback or boolean value is false and cause is provided', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')
      const cause = {
        group: 'cms-user',
        code: 'invalidEmail',
        details: { email: 'bad' }
      }
      const rootCause = new Error('Validation failed')

      expect(() => CmsVerification.verify(() => false, cause, { cause: rootCause }))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.verify(false, cause, { cause: rootCause }))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(2)
      expect(reportSpy).toHaveBeenCalledWith(cause, { cause: rootCause })
    })

    it('throws ErrorCenterError with cause code when reporting through static ErrorCenterThrow', () => {
      ErrorCenter.setIsConsole(false)

      expect(() => CmsVerification.verify(
        () => false,
        {
          group: 'cms-role',
          code: 'notFound'
        }
      ))
        .toThrow('notFound')
    })
  })
})
