import { describe, it, expect } from 'vitest'
import { getObjectNoUndefined } from '../getObjectNoUndefined'

describe('getObjectNoUndefined', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should remove properties strictly equal to undefined by default', () => {
      const data = { a: 1, b: undefined, c: 3, d: undefined }
      expect(getObjectNoUndefined(data)).toEqual({ a: 1, c: 3 })
    })

    it('should return all properties if none match undefined', () => {
      const data = { a: 1, b: 'hello', c: true }
      expect(getObjectNoUndefined(data)).toEqual({ a: 1, b: 'hello', c: true })
    })

    it('should return an empty object if all properties are undefined', () => {
      const data = { a: undefined, b: undefined, c: undefined }
      expect(getObjectNoUndefined(data)).toEqual({})
    })
  })

  describe('Custom exception values', () => {
    it('should remove properties matching a custom string exception', () => {
      const data = { name: 'John', role: 'guest', status: 'guest', level: 'admin' }
      expect(getObjectNoUndefined(data, 'guest')).toEqual({ name: 'John', level: 'admin' })
    })

    it('should remove properties matching null when null is exception', () => {
      const data = { a: 1, b: null, c: undefined, d: null }
      expect(getObjectNoUndefined(data, null)).toEqual({ a: 1, c: undefined })
    })

    it('should remove properties matching boolean false when false is exception', () => {
      const data = { enabled: false, visible: true, active: false }
      expect(getObjectNoUndefined(data, false)).toEqual({ visible: true })
    })

    it('should remove properties matching empty string when "" is exception', () => {
      const data = { title: '', description: 'Some text', subtitle: '' }
      expect(getObjectNoUndefined(data, '')).toEqual({ description: 'Some text' })
    })
  })

  describe('Preservation of valid falsy values with default exception', () => {
    it('should preserve null, 0, -0, false, empty strings, and NaN when default exception is used', () => {
      const data = {
        nullVal: null,
        zero: 0,
        negZero: -0,
        bool: false,
        emptyStr: '',
        nan: Number.NaN,
        undef: undefined
      }
      expect(getObjectNoUndefined(data)).toEqual({
        nullVal: null,
        zero: 0,
        negZero: -0,
        bool: false,
        emptyStr: '',
        nan: Number.NaN
      })
    })
  })

  describe('Boundary numeric values and special floats', () => {
    it('should remove 0 when 0 is the exception (including -0 and +0)', () => {
      const data = { a: 0, b: -0, c: 1, d: +0 }
      expect(getObjectNoUndefined(data, 0)).toEqual({ c: 1 })
    })

    it('should correctly remove NaN when NaN is the exception', () => {
      const data = { a: 1, b: Number.NaN, c: 2, d: Number.NaN }
      expect(getObjectNoUndefined(data, Number.NaN)).toEqual({ a: 1, c: 2 })
    })

    it('should correctly handle Infinity and -Infinity', () => {
      const data = { a: Number.POSITIVE_INFINITY, b: Number.NEGATIVE_INFINITY, c: 100 }
      expect(getObjectNoUndefined(data, Number.POSITIVE_INFINITY)).toEqual({
        b: Number.NEGATIVE_INFINITY,
        c: 100
      })
    })
  })

  describe('Array handling and indexing', () => {
    it('should convert array to indexed object filtering out exception elements', () => {
      const data = ['apple', undefined, 'banana', undefined, 'cherry']
      const result = getObjectNoUndefined(data)
      expect(result).toEqual({ 0: 'apple', 2: 'banana', 4: 'cherry' })
      expect(result[0]).toBe('apple')
      expect(result[2]).toBe('banana')
      expect(result[4]).toBe('cherry')
    })

    it('should work with empty arrays returning empty object', () => {
      const result = getObjectNoUndefined([])
      expect(result).toEqual({})
    })
  })

  describe('Empty, nullish, and non-object inputs', () => {
    it('should return empty object for empty object input', () => {
      expect(getObjectNoUndefined({})).toEqual({})
    })

    it('should safely return empty object for null, undefined, and primitives without throwing', () => {
      expect(getObjectNoUndefined(null as unknown as Record<string, unknown>)).toEqual({})
      expect(getObjectNoUndefined(undefined as unknown as Record<string, unknown>)).toEqual({})
      expect(getObjectNoUndefined(42 as unknown as Record<string, unknown>)).toEqual({})
      expect(getObjectNoUndefined('string' as unknown as Record<string, unknown>)).toEqual({})
      expect(getObjectNoUndefined(true as unknown as Record<string, unknown>)).toEqual({})
    })
  })

  describe('Immutability and shallow filtering', () => {
    it('should return a new object reference and not mutate original object', () => {
      const data = { x: 1, y: undefined }
      const result = getObjectNoUndefined(data)
      expect(result).not.toBe(data)
      expect(data).toEqual({ x: 1, y: undefined })
    })

    it('should perform shallow filtering and preserve nested object references untouched', () => {
      const nested = { inner: undefined, valid: 42 }
      const data = { nested, top: undefined }
      const result = getObjectNoUndefined(data)

      expect(result).toEqual({ nested: { inner: undefined, valid: 42 } })
      expect(result.nested).toBe(nested)
      expect(result.nested.inner).toBeUndefined()
    })
  })

  describe('Multilingual and Unicode keys', () => {
    it('should correctly process Cyrillic, Vietnamese, and Emoji keys and values', () => {
      const data = {
        'ключ_1': 'значение',
        'ключ_2': undefined,
        'tiêu_đề': 'Học tiếng Việt',
        'mô_tả': undefined,
        '🚀_status': 'active',
        '🔥_pending': undefined
      }
      expect(getObjectNoUndefined(data)).toEqual({
        'ключ_1': 'значение',
        'tiêu_đề': 'Học tiếng Việt',
        '🚀_status': 'active'
      })
    })
  })
})
