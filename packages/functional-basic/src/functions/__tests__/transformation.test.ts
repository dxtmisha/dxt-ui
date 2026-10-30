/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, afterEach, vi } from 'vitest'
import { transformation } from '../transformation'
import { ErrorCenter } from '../../classes/ErrorCenter'

describe('transformation', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  describe('Primitive keyword literals', () => {
    it('should transform string literals into boolean, null, and undefined primitives', () => {
      expect(transformation('true')).toBe(true)
      expect(transformation('false')).toBe(false)
      expect(transformation('null')).toBe(null)
      expect(transformation('undefined')).toBe(undefined)
    })

    it('should trim surrounding whitespace before matching primitive literals', () => {
      expect(transformation('  true  ')).toBe(true)
      expect(transformation('  false ')).toBe(false)
      expect(transformation('\nnull\t')).toBe(null)
      expect(transformation(' \r\nundefined ')).toBe(undefined)
    })

    it('should remain case-sensitive for primitive keywords', () => {
      expect(transformation('True')).toBe('True')
      expect(transformation('FALSE')).toBe('FALSE')
      expect(transformation('NULL')).toBe('NULL')
      expect(transformation('UNDEFINED')).toBe('UNDEFINED')
    })
  })

  describe('Numeric strings (integers and floats)', () => {
    it('should transform integer strings into numbers', () => {
      expect(transformation('123')).toBe(123)
      expect(transformation('0')).toBe(0)
      expect(transformation('-42')).toBe(-42)
      expect(transformation('+42')).toBe(42)
      expect(transformation('+0')).toBe(0)
      expect(transformation('-0')).toBe(-0)
      expect(transformation('  99  ')).toBe(99)
      expect(transformation('  +99  ')).toBe(99)
    })

    it('should transform floating-point strings into numbers', () => {
      expect(transformation('123.45')).toBe(123.45)
      expect(transformation('+123.45')).toBe(123.45)
      expect(transformation('0.0')).toBe(0)
      expect(transformation('+0.0')).toBe(0)
      expect(transformation('-42.5')).toBe(-42.5)
      expect(transformation('+42.5')).toBe(42.5)
      expect(transformation(' -3.1415 ')).toBe(-3.1415)
      expect(transformation(' +3.1415 ')).toBe(3.1415)
    })

    it('should not transform strings that only partially resemble numbers or have leading zeros', () => {
      expect(transformation('0123')).toBe('0123')
      expect(transformation('007')).toBe('007')
      expect(transformation('-0123')).toBe('-0123')
      expect(transformation('+0123')).toBe('+0123')
      expect(transformation('01.23')).toBe('01.23')
      expect(transformation('+01.23')).toBe('+01.23')
      expect(transformation('12.34.56')).toBe('12.34.56')
      expect(transformation('100px')).toBe('100px')
      expect(transformation('.5')).toBe('.5')
      expect(transformation('5.')).toBe('5.')
    })

    it('should not transform integers beyond safe range (Number.MAX_SAFE_INTEGER / MIN_SAFE_INTEGER) to avoid precision loss', () => {
      expect(transformation('9007199254740993')).toBe('9007199254740993')
      expect(transformation('-9007199254740993')).toBe('-9007199254740993')
      expect(transformation('9007199254740991')).toBe(9007199254740991)
      expect(transformation('-9007199254740991')).toBe(-9007199254740991)
    })

    it('should not transform floating-point strings that overflow to Infinity', () => {
      const hugeFloat = `1${'0'.repeat(309)}.5`
      expect(transformation(hugeFloat)).toBe(hugeFloat)
    })
  })

  describe('JSON objects and arrays', () => {
    it('should parse valid JSON object and array strings', () => {
      expect(transformation('{}')).toEqual({})
      expect(transformation('[]')).toEqual([])
      expect(transformation('{"a":1}')).toEqual({ a: 1 })
      expect(transformation('[1,2,3]')).toEqual([1, 2, 3])
      expect(transformation('  {"nested":{"active":true}}  ')).toEqual({
        nested: { active: true }
      })
    })

    it('should report to ErrorCenter and return the original string when JSON candidate is malformed', () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)

      expect(transformation('{invalid:json}')).toBe('{invalid:json}')
      expect(errorSpy).toHaveBeenCalledTimes(1)
      expect(errorSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          group: 'transformation',
          code: 'error',
          details: expect.any(SyntaxError)
        })
      )

      expect(transformation('[1, 2,]')).toBe('[1, 2,]')
      expect(errorSpy).toHaveBeenCalledTimes(2)
    })

    it('should not treat strings with unclosed or mismatched brackets as JSON candidates', () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)

      expect(transformation('[1, 2,')).toBe('[1, 2,')
      expect(transformation('{unclosed')).toBe('{unclosed')
      expect(transformation('{mismatch]')).toBe('{mismatch]')
      expect(errorSpy).not.toHaveBeenCalled()
    })
  })

  describe('Global window function resolution', () => {
    it('should resolve a global window function when isFunctionCheck is true', () => {
      const mockCallback = () => 'executed'
      const windowRecord = window as unknown as Record<string, unknown>
      windowRecord.customGlobalCallback = mockCallback

      try {
        expect(transformation('customGlobalCallback', true)).toBe(mockCallback)
        expect(transformation('  customGlobalCallback  ', true)).toBe(mockCallback)
      } finally {
        delete windowRecord.customGlobalCallback
      }
    })

    it('should not resolve a global window function when isFunctionCheck is false (default)', () => {
      const mockCallback = () => 'executed'
      const windowRecord = window as unknown as Record<string, unknown>
      windowRecord.customGlobalCallback = mockCallback

      try {
        expect(transformation('customGlobalCallback')).toBe('customGlobalCallback')
        expect(transformation('customGlobalCallback', false)).toBe('customGlobalCallback')
      } finally {
        delete windowRecord.customGlobalCallback
      }
    })

    it('should not return non-function properties attached to window when isFunctionCheck is true', () => {
      const windowRecord = window as unknown as Record<string, unknown>
      windowRecord.customGlobalValue = 12345

      try {
        expect(transformation('customGlobalValue', true)).toBe('customGlobalValue')
      } finally {
        delete windowRecord.customGlobalValue
      }
    })

    it('should guard against inherited Object.prototype properties on window', () => {
      expect(transformation('toString', true)).toBe('toString')
      expect(transformation('valueOf', true)).toBe('valueOf')
      expect(transformation('__proto__', true)).toBe('__proto__')
      expect(transformation('constructor', true)).toBe('constructor')
    })

    it('should safely return the original string in SSR environments when window is undefined', () => {
      vi.stubGlobal('window', undefined)
      expect(transformation('customGlobalCallback', true)).toBe('customGlobalCallback')
    })
  })

  describe('Passthrough and non-string values', () => {
    it('should return plain strings and empty/whitespace strings unchanged', () => {
      expect(transformation('normal string')).toBe('normal string')
      expect(transformation('')).toBe('')
      expect(transformation('   ')).toBe('   ')
    })

    it('should return non-string primitives and object references without modification', () => {
      const sourceObject = { key: 'value' }
      const sourceArray = [1, 2, 3]

      expect(transformation()).toBe(undefined)
      expect(transformation(0)).toBe(0)
      expect(transformation(123)).toBe(123)
      expect(transformation(false)).toBe(false)
      expect(transformation(true)).toBe(true)
      expect(transformation(null)).toBe(null)
      expect(transformation(undefined)).toBe(undefined)
      expect(transformation(sourceObject)).toBe(sourceObject)
      expect(transformation(sourceArray)).toBe(sourceArray)
    })
  })
})
