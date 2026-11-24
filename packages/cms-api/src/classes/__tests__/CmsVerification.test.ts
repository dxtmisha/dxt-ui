import { afterEach, describe, expect, it, vi } from 'vitest'
import { ErrorCenter, ErrorCenterError, ErrorCenterThrow } from '@dxtmisha/functional-basic'
import { CMS_VERIFICATION_ERROR_GROUP } from '../../media/errors/cmsVerificationErrorCauseList'
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

      expect(CmsVerification.isPositiveInteger(1)).toBe(true)
      expect(CmsVerification.isPositiveInteger(42, true)).toBe(true)
      expect(CmsVerification.isPositiveInteger(Number.MAX_SAFE_INTEGER, false)).toBe(true)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('returns false without reporting an error when value is zero, negative, float, unsafe, or non-number and isError is false', () => {
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.isPositiveInteger(0, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger(-0, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger(-1, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger(1.5, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger(Number.NaN, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger(Number.POSITIVE_INFINITY, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger(Number.MAX_SAFE_INTEGER + 1, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger('1', false)).toBe(false)
      expect(CmsVerification.isPositiveInteger(null, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger(undefined, false)).toBe(false)
      expect(CmsVerification.isPositiveInteger({}, false)).toBe(false)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('reports cms-verification:invalidId and throws ErrorCenterError when value is not a positive safe integer and isError is true or omitted', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(() => CmsVerification.isPositiveInteger(0))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.isPositiveInteger(-1, true))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(2)
      expect(reportSpy).toHaveBeenNthCalledWith(
        1,
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidId',
          details: { id: 0 }
        },
        undefined
      )
      expect(reportSpy).toHaveBeenNthCalledWith(
        2,
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidId',
          details: { id: -1 }
        },
        undefined
      )
    })
  })

  describe('normalizeCode', () => {
    it('trims and returns valid codes without reporting an error', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.normalizeCode('  admin  ')).toBe('admin')
      expect(CmsVerification.normalizeCode('users:read', false)).toBe('users:read')
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('returns empty string without reporting an error for invalid codes when isError is false', () => {
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.normalizeCode('   ', false)).toBe('')
      expect(CmsVerification.normalizeCode('bad code', false)).toBe('')
      expect(CmsVerification.normalizeCode(null, false)).toBe('')
      expect(CmsVerification.normalizeCode(undefined, false)).toBe('')
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('reports cms-verification:invalidCode via ErrorCenterThrow.on and throws ErrorCenterError for empty or whitespace codes', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(() => CmsVerification.normalizeCode('   '))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.normalizeCode('bad code'))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.normalizeCode(null))
        .toThrow(ErrorCenterError)

      expect(reportSpy).toHaveBeenNthCalledWith(
        1,
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidCode',
          details: { code: '   ' }
        },
        undefined
      )
      expect(reportSpy).toHaveBeenNthCalledWith(
        2,
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidCode',
          details: { code: 'bad code' }
        },
        undefined
      )
      expect(reportSpy).toHaveBeenNthCalledWith(
        3,
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidCode',
          details: { code: null }
        },
        undefined
      )
    })
  })

  describe('normalizeName', () => {
    it('trims and returns valid names without reporting an error', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.normalizeName('  Admin Role  ')).toBe('Admin Role')
      expect(CmsVerification.normalizeName('Read Users', true, false)).toBe('Read Users')
      expect(CmsVerification.normalizeName('Read Users', false)).toBe('Read Users')
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('returns empty string without reporting an error for invalid names when isError is false', () => {
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.normalizeName('   ', true, false)).toBe('')
      expect(CmsVerification.normalizeName('', true, false)).toBe('')
      expect(CmsVerification.normalizeName(undefined, true, false)).toBe('')
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('returns empty string without reporting an error when isRequired is false', () => {
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.normalizeName('   ', false)).toBe('')
      expect(CmsVerification.normalizeName('', false)).toBe('')
      expect(CmsVerification.normalizeName(null, false)).toBe('')
      expect(CmsVerification.normalizeName(undefined, false)).toBe('')
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('reports cms-verification:invalidName via ErrorCenterThrow.on and throws ErrorCenterError for empty or non-string names', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(() => CmsVerification.normalizeName('   '))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.normalizeName(''))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.normalizeName(undefined))
        .toThrow(ErrorCenterError)

      expect(reportSpy).toHaveBeenNthCalledWith(
        1,
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidName',
          details: { name: '   ' }
        },
        undefined
      )
      expect(reportSpy).toHaveBeenNthCalledWith(
        2,
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidName',
          details: { name: '' }
        },
        undefined
      )
      expect(reportSpy).toHaveBeenNthCalledWith(
        3,
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidName',
          details: { name: undefined }
        },
        undefined
      )
    })
  })

  describe('normalizeOptionalText', () => {
    it('normalizes optional text, preserving undefined and converting blank strings to null', () => {
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.normalizeOptionalText()).toBeUndefined()
      expect(CmsVerification.normalizeOptionalText(undefined)).toBeUndefined()
      expect(CmsVerification.normalizeOptionalText(null)).toBeNull()
      expect(CmsVerification.normalizeOptionalText('')).toBeNull()
      expect(CmsVerification.normalizeOptionalText('   ')).toBeNull()
      expect(CmsVerification.normalizeOptionalText('  hello world  ')).toBe('hello world')
      expect(CmsVerification.normalizeOptionalText(123)).toBeNull()
      expect(CmsVerification.normalizeOptionalText({})).toBeNull()
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('validates non-empty value when isRequired is true', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.normalizeOptionalText('  hello  ', true)).toBe('hello')
      expect(CmsVerification.normalizeOptionalText('   ', true, false)).toBeNull()
      expect(CmsVerification.normalizeOptionalText(undefined, true, false)).toBeNull()
      expect(reportSpy).not.toHaveBeenCalled()

      expect(() => CmsVerification.normalizeOptionalText('   ', true))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.normalizeOptionalText(null, true))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(2)
    })
  })

  describe('verify', () => {
    it('does not report an error and returns true when the callback or boolean value is true', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.verify(true, () => true, undefined, 'invalidId', { id: 1 })).toBe(true)
      expect(CmsVerification.verify(undefined, true, undefined, 'invalidId', { id: 1 })).toBe(true)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('does not report an error and returns false when the callback or boolean value is false and isError is false', () => {
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(CmsVerification.verify(false, () => false)).toBe(false)
      expect(CmsVerification.verify(false, false)).toBe(false)
      expect(CmsVerification.verify(
        false,
        false,
        undefined,
        'invalidCode',
        { code: 'bad code' }
      )).toBe(false)
      expect(reportSpy).not.toHaveBeenCalled()
    })

    it('uses the default invalid code when code is omitted and isError is true', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')

      expect(() => CmsVerification.verify(true, () => false))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.verify(undefined, false))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(2)
      expect(reportSpy).toHaveBeenCalledWith(
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalid',
          details: undefined
        },
        undefined
      )
    })

    it('calls ErrorCenterThrow.on with assembled CMS verification cause and throws ErrorCenterError when false and code is provided', () => {
      ErrorCenter.setIsConsole(false)
      const reportSpy = vi.spyOn(ErrorCenterThrow, 'on')
      const details = { code: 'bad code' }
      const rootCause = new Error('Validation failed')

      expect(() => CmsVerification.verify(undefined, () => false, { cause: rootCause }, 'invalidCode', details))
        .toThrow(ErrorCenterError)
      expect(() => CmsVerification.verify(true, false, { cause: rootCause }, 'invalidCode', details))
        .toThrow(ErrorCenterError)
      expect(reportSpy).toHaveBeenCalledTimes(2)
      expect(reportSpy).toHaveBeenCalledWith(
        {
          group: CMS_VERIFICATION_ERROR_GROUP,
          code: 'invalidCode',
          details
        },
        { cause: rootCause }
      )
    })

    it('throws ErrorCenterError with cause code when reporting through static ErrorCenterThrow', () => {
      ErrorCenter.setIsConsole(false)

      expect(() => CmsVerification.verify(true, () => false, undefined, 'invalidName', { name: '' }))
        .toThrow('invalidName')
    })
  })
})
