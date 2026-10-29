import { describe, expect, it } from 'vitest'
import { getObjectNull } from '../getObjectNull'

describe('getObjectNull', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should create an object with a null prototype', () => {
      const result = getObjectNull()

      expect(Object.getPrototypeOf(result)).toBeNull()
      expect(typeof result).toBe('object')
      expect(result).not.toBeNull()
    })

    it('should not inherit properties from Object.prototype', () => {
      const result = getObjectNull()

      expect('toString' in result).toBe(false)
      expect('valueOf' in result).toBe(false)
      expect('constructor' in result).toBe(false)
      expect('hasOwnProperty' in result).toBe(false)
      expect('isPrototypeOf' in result).toBe(false)
      expect('propertyIsEnumerable' in result).toBe(false)
    })

    it('should allow setting, reading, and deleting arbitrary properties', () => {
      const result = getObjectNull<number>()

      result.alpha = 10
      result.beta = 20

      expect(result.alpha).toBe(10)
      expect(result.beta).toBe(20)
      expect('alpha' in result).toBe(true)

      delete result.alpha
      expect('alpha' in result).toBe(false)
      expect(result.alpha).toBeUndefined()
    })

    it('should safely treat prototype method names as normal own properties', () => {
      const result = getObjectNull<string>()

      result.toString = 'custom-to-string'
      result.valueOf = 'custom-value-of'

      expect(result.toString).toBe('custom-to-string')
      expect(result.valueOf).toBe('custom-value-of')
      expect(Object.keys(result)).toEqual(['toString', 'valueOf'])
    })
  })

  describe('Initial data initialization', () => {
    it('should copy properties from a standard plain object', () => {
      const source = { name: 'Item', count: 5 }
      const result = getObjectNull(source)

      expect(Object.getPrototypeOf(result)).toBeNull()
      expect(result).toEqual({ name: 'Item', count: 5 })
      expect(result.name).toBe('Item')
      expect(result.count).toBe(5)
      expect('toString' in result).toBe(false)
    })

    it('should produce an independent clone not mutating the source object', () => {
      const source = { value: 100 }
      const result = getObjectNull(source)

      result.value = 200
      result.extra = 300

      expect(source.value).toBe(100)
      expect('extra' in source).toBe(false)
    })

    it('should copy properties from another null-prototype object', () => {
      const first = getObjectNull({ id: 1, active: true })
      const second = getObjectNull(first)

      expect(Object.getPrototypeOf(second)).toBeNull()
      expect(second).toEqual({ id: 1, active: true })
      expect(second).not.toBe(first)
    })

    it('should handle empty object correctly', () => {
      const result = getObjectNull({})

      expect(Object.getPrototypeOf(result)).toBeNull()
      expect(Object.keys(result)).toHaveLength(0)
    })
  })

  describe('Boundary values and non-object inputs', () => {
    it('should return an empty null-prototype object when data is undefined or omitted', () => {
      const result = getObjectNull(undefined)

      expect(Object.getPrototypeOf(result)).toBeNull()
      expect(Object.keys(result)).toHaveLength(0)
    })

    it('should ignore null without throwing an exception', () => {
      const result = getObjectNull(null as unknown as Record<string, unknown>)

      expect(Object.getPrototypeOf(result)).toBeNull()
      expect(Object.keys(result)).toHaveLength(0)
    })

    it('should ignore array inputs and return an empty null-prototype object', () => {
      const result = getObjectNull([1, 2, 3] as unknown as Record<string, unknown>)

      expect(Object.getPrototypeOf(result)).toBeNull()
      expect(Object.keys(result)).toHaveLength(0)
    })

    it('should ignore primitive numbers, strings, and booleans', () => {
      expect(Object.keys(getObjectNull(123 as unknown as Record<string, unknown>))).toHaveLength(0)
      expect(Object.keys(getObjectNull(0 as unknown as Record<string, unknown>))).toHaveLength(0)
      expect(Object.keys(getObjectNull('text' as unknown as Record<string, unknown>))).toHaveLength(0)
      expect(Object.keys(getObjectNull('' as unknown as Record<string, unknown>))).toHaveLength(0)
      expect(Object.keys(getObjectNull(true as unknown as Record<string, unknown>))).toHaveLength(0)
      expect(Object.keys(getObjectNull(false as unknown as Record<string, unknown>))).toHaveLength(0)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic, Vietnamese, and Emoji keys and values', () => {
      const source = {
        ключ: 'значение',
        'tiêu đề': 'nội dung',
        '🚀': 'космос'
      }
      const result = getObjectNull(source)

      expect(result['ключ']).toBe('значение')
      expect(result['tiêu đề']).toBe('nội dung')
      expect(result['🚀']).toBe('космос')
      expect(Object.getPrototypeOf(result)).toBeNull()
    })
  })
})
