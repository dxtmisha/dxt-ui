import { describe, it, expect, afterEach, vi } from 'vitest'
import { copyObject } from '../copyObject'

describe('copyObject', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should create a deep copy of a simple flat object', () => {
      const original = { id: 1, name: 'Test Item', active: true }
      const copy = copyObject(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
    })

    it('should deeply clone nested objects and arrays', () => {
      const original = {
        user: {
          name: 'Alice',
          preferences: {
            theme: 'dark',
            notifications: true
          }
        },
        tags: ['admin', 'editor'],
        matrix: [[1, 2], [3, 4]]
      }
      const copy = copyObject(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
      expect(copy.user).not.toBe(original.user)
      expect(copy.user.preferences).not.toBe(original.user.preferences)
      expect(copy.tags).not.toBe(original.tags)
      expect(copy.matrix).not.toBe(original.matrix)
      expect(copy.matrix[0]).not.toBe(original.matrix[0])
      expect(copy.matrix[1]).not.toBe(original.matrix[1])
    })

    it('should deeply clone an array of objects', () => {
      const original = [
        { id: 1, title: 'First', meta: { views: 10 } },
        { id: 2, title: 'Second', meta: { views: 20 } }
      ]
      const copy = copyObject(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
      expect(copy[0]).not.toBe(original[0])
      expect(copy[0].meta).not.toBe(original[0].meta)
      expect(copy[1]).not.toBe(original[1])
      expect(copy[1].meta).not.toBe(original[1].meta)
    })
  })

  describe('Immutability and reference isolation', () => {
    it('should isolate mutations on nested objects between original and copy', () => {
      const original = {
        config: {
          retries: 3,
          headers: { authorization: 'Bearer token' }
        }
      }
      const copy = copyObject(original)

      copy.config.retries = 10
      copy.config.headers.authorization = 'Bearer changed'

      expect(original.config.retries).toBe(3)
      expect(original.config.headers.authorization).toBe('Bearer token')
    })

    it('should isolate array mutations between original and copy', () => {
      const original = { items: [1, 2, 3] }
      const copy = copyObject(original)

      copy.items.push(4)
      copy.items[0] = 99

      expect(original.items).toEqual([1, 2, 3])
      expect(copy.items).toEqual([99, 2, 3, 4])
    })

    it('should create a mutable copy from a deeply frozen object without mutating the source', () => {
      const frozenSource = Object.freeze({
        title: 'Immutable',
        nested: Object.freeze({ count: 5 })
      })

      const copy = copyObject(frozenSource)

      expect(Object.isFrozen(copy)).toBe(false)
      expect(Object.isFrozen(copy.nested)).toBe(false)

      copy.title = 'Mutable Copy'
      copy.nested.count = 42

      expect(frozenSource.title).toBe('Immutable')
      expect(frozenSource.nested.count).toBe(5)
      expect(copy.title).toBe('Mutable Copy')
      expect(copy.nested.count).toBe(42)
    })
  })

  describe('Primitive, falsy, and boundary values', () => {
    it('should handle empty objects and empty arrays', () => {
      const emptyObject = {}
      const copiedObject = copyObject(emptyObject)
      expect(copiedObject).toEqual({})
      expect(copiedObject).not.toBe(emptyObject)

      const emptyArray: unknown[] = []
      const copiedArray = copyObject(emptyArray)
      expect(copiedArray).toEqual([])
      expect(copiedArray).not.toBe(emptyArray)
    })

    it('should preserve falsy primitive values (0, false, empty string, null) inside objects and arrays', () => {
      const original = {
        zero: 0,
        booleanFalse: false,
        emptyString: '',
        nullValue: null,
        list: [0, false, '', null]
      }
      const copy = copyObject(original)

      expect(copy).toEqual({
        zero: 0,
        booleanFalse: false,
        emptyString: '',
        nullValue: null,
        list: [0, false, '', null]
      })
      expect(copy.zero).toBe(0)
      expect(copy.booleanFalse).toBe(false)
      expect(copy.emptyString).toBe('')
      expect(copy.nullValue).toBeNull()
    })

    it('should handle top-level primitive values supported by JSON', () => {
      expect(copyObject(0)).toBe(0)
      expect(copyObject(42)).toBe(42)
      expect(copyObject(-3.14)).toBe(-3.14)
      expect(copyObject(false)).toBe(false)
      expect(copyObject(true)).toBe(true)
      expect(copyObject('')).toBe('')
      expect(copyObject('hello')).toBe('hello')
      expect(copyObject(null)).toBeNull()
    })

    it('should preserve negative zero (-0) via structuredClone', () => {
      const copy = copyObject({ negativeZero: -0 })
      expect(Object.is(copy.negativeZero, -0)).toBe(true)
    })
  })

  describe('Structured clone support and JSON fallback semantics', () => {
    it('should preserve NaN, Infinity, and -Infinity via structuredClone', () => {
      const original = {
        notANumber: Number.NaN,
        positiveInfinity: Number.POSITIVE_INFINITY,
        negativeInfinity: Number.NEGATIVE_INFINITY,
        numbers: [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
      }
      const copy = copyObject(original)

      expect(Number.isNaN(copy.notANumber)).toBe(true)
      expect(copy.positiveInfinity).toBe(Number.POSITIVE_INFINITY)
      expect(copy.negativeInfinity).toBe(Number.NEGATIVE_INFINITY)
      expect(Number.isNaN(copy.numbers[0])).toBe(true)
      expect(copy.numbers[1]).toBe(Number.POSITIVE_INFINITY)
      expect(copy.numbers[2]).toBe(Number.NEGATIVE_INFINITY)
    })

    it('should deeply clone Date instances into new Date objects via structuredClone', () => {
      const date = new Date('2026-01-15T12:30:00.000Z')
      const original = { createdAt: date }
      const copy = copyObject(original)

      expect(copy.createdAt).toBeInstanceOf(Date)
      expect(copy.createdAt).not.toBe(date)
      expect(copy.createdAt.getTime()).toBe(date.getTime())
    })

    it('should deeply clone RegExp, Map, and Set instances via structuredClone', () => {
      const original = {
        pattern: /test/gi,
        mapInstance: new Map([['key', 'value']]),
        setInstance: new Set([1, 2, 3])
      }
      const copy = copyObject(original)

      expect(copy.pattern).toBeInstanceOf(RegExp)
      expect(copy.pattern).not.toBe(original.pattern)
      expect(copy.pattern.source).toBe('test')
      expect(copy.pattern.flags).toBe('gi')

      expect(copy.mapInstance).toBeInstanceOf(Map)
      expect(copy.mapInstance).not.toBe(original.mapInstance)
      expect(copy.mapInstance.get('key')).toBe('value')

      expect(copy.setInstance).toBeInstanceOf(Set)
      expect(copy.setInstance).not.toBe(original.setInstance)
      expect(Array.from(copy.setInstance)).toEqual([1, 2, 3])
    })

    it('should deeply clone circular references and BigInt values via structuredClone', () => {
      const circularObject: { name: string, bigValue: bigint, self?: unknown } = {
        name: 'node',
        bigValue: 100n
      }
      circularObject.self = circularObject

      const copy = copyObject(circularObject)

      expect(copy).not.toBe(circularObject)
      expect(copy.name).toBe('node')
      expect(copy.bigValue).toBe(100n)
      expect(copy.self).toBe(copy)
    })

    it('should fall back to JSON serialization and strip function and symbol properties when structuredClone throws', () => {
      const symbolKey = Symbol('secret')
      const original = {
        kept: 'value',
        omittedUndefined: undefined,
        omittedFunction: () => 'ignored',
        omittedSymbolValue: Symbol('value'),
        [symbolKey]: 'hidden'
      }
      const copy = copyObject(original)

      expect(copy).toEqual({ kept: 'value' })
      expect('omittedUndefined' in copy).toBe(false)
      expect('omittedFunction' in copy).toBe(false)
      expect('omittedSymbolValue' in copy).toBe(false)
      expect(Object.getOwnPropertySymbols(copy)).toHaveLength(0)
    })

    it('should fall back to JSON serialization and convert undefined, functions, and symbols inside arrays to null when non-cloneable items exist', () => {
      const original = [1, undefined, () => {}, Symbol('item'), 'end']
      const copy = copyObject(original)

      expect(copy).toEqual([1, null, null, null, 'end'])
    })

    it('should respect custom toJSON() methods when falling back to JSON serialization', () => {
      const original = {
        entity: {
          internalId: 99,
          secret: 'hidden',
          toJSON() {
            return { publicId: this.internalId }
          }
        }
      }
      const copy = copyObject(original)

      expect(copy).toEqual({
        entity: { publicId: 99 }
      })
    })

    it('should omit inherited prototype properties and only copy own enumerable properties', () => {
      const prototypeObject = { inheritedProp: 'from-prototype' }
      const instance = Object.create(prototypeObject) as { ownProp: string, inheritedProp?: string }
      instance.ownProp = 'own-value'

      const copy = copyObject(instance)

      expect(copy).toEqual({ ownProp: 'own-value' })
      expect('inheritedProp' in copy).toBe(false)
    })

    it('should fall back to JSON.parse(JSON.stringify(value)) when globalThis.structuredClone is unavailable', () => {
      vi.stubGlobal('structuredClone', undefined)

      const original = {
        title: 'Fallback',
        nested: { count: 42 },
        items: [1, 2, 3]
      }
      const copy = copyObject(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
      expect(copy.nested).not.toBe(original.nested)
      expect(copy.items).not.toBe(original.items)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic, Vietnamese, CJK, and Emoji in keys and values', () => {
      const original = {
        привет: 'Мир и данные',
        tiếngViệt: 'Học tiếng Việt mỗi ngày',
        中文键: '你好，世界',
        emoji: '🚀 🔥 ✨ 👨‍👩‍👧‍👦',
        nested: ['Кириллица', 'Đà Nẵng', 'こんにちは', '🎉']
      }
      const copy = copyObject(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
      expect(copy.nested).not.toBe(original.nested)
    })
  })

  describe('Determinism and state isolation', () => {
    it('should produce independent deep copies across repeated invocations', () => {
      const template = { counter: 0, list: ['initial'] }

      const firstCopy = copyObject(template)
      const secondCopy = copyObject(template)

      expect(firstCopy).toEqual(secondCopy)
      expect(firstCopy).not.toBe(secondCopy)
      expect(firstCopy.list).not.toBe(secondCopy.list)

      firstCopy.counter = 1
      firstCopy.list.push('first-only')

      expect(secondCopy.counter).toBe(0)
      expect(secondCopy.list).toEqual(['initial'])
      expect(template.counter).toBe(0)
      expect(template.list).toEqual(['initial'])
    })
  })
})
