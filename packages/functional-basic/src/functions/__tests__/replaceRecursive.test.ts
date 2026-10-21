import { describe, expect, it } from 'vitest'
import { replaceRecursive } from '../replaceRecursive'

describe('replaceRecursive', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should recursively merge nested objects', () => {
      const target = { a: 1, b: { c: 2 } }
      const source = { b: { d: 3 }, e: 4 }
      const result = replaceRecursive(target, source as any)

      expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
    })

    it('should overwrite primitive properties with replacement values', () => {
      const target = { a: 1, b: 'old' }
      const source = { b: 'new' }

      expect(replaceRecursive(target, source)).toEqual({ a: 1, b: 'new' })
    })

    it('should handle multi-level deeply nested objects', () => {
      const target = { level1: { level2: { level3: { value: 'A', extra: 1 } } } }
      const source = { level1: { level2: { level3: { value: 'B' }, sibling: true } } }
      const result = replaceRecursive(target, source)

      expect(result).toEqual({
        level1: {
          level2: {
            level3: { value: 'B', extra: 1 },
            sibling: true
          }
        }
      })
    })

    it('should return a new object and not mutate target or source', () => {
      const target = { a: 1, nested: { value: 10 } }
      const source = { nested: { value: 20 } }
      const result = replaceRecursive(target, source)

      expect(result).not.toBe(target)
      expect(result.nested).not.toBe(source.nested)
      expect(target.nested.value).toBe(10)
    })
  })

  describe('Array merging and replacement (isMerge control)', () => {
    it('should merge and deduplicate arrays when isMerge is true (default)', () => {
      const target = { list: [1, 2] }
      const source = { list: [2, 3] }
      const result = replaceRecursive(target, source)

      expect(result.list).toEqual([1, 2, 3])
      expect(Array.isArray(result.list)).toBe(true)
    })

    it('should completely overwrite arrays and preserve Array type when isMerge is false', () => {
      const target = { list: [1, 2] }
      const source = { list: [2, 3] }
      const result = replaceRecursive(target, source, false)

      expect(result.list).toEqual([2, 3])
      expect(Array.isArray(result.list)).toBe(true)
    })

    it('should handle empty arrays merging with non-empty arrays', () => {
      const target = { list: [] }
      const source = { list: [1, 2] }

      expect(replaceRecursive(target, source).list).toEqual([1, 2])
    })

    it('should handle non-empty arrays merging with empty arrays', () => {
      const target = { list: [1, 2] }
      const source = { list: [] }

      expect(replaceRecursive(target, source, true).list).toEqual([1, 2])
      expect(replaceRecursive(target, source, false).list).toEqual([])
    })
  })

  describe('Type conflict resolution (Array vs Object)', () => {
    it('should replace array with object if replacement property is an object', () => {
      const target = { item: [1, 2] }
      const source = { item: { key: 'value' } }
      const result = replaceRecursive(target, source as any)

      expect(result.item).toEqual({ key: 'value' })
      expect(Array.isArray(result.item)).toBe(false)
    })

    it('should replace object with array if replacement property is an array', () => {
      const target = { item: { key: 'value' } }
      const source = { item: [1, 2] }
      const result = replaceRecursive(target, source as any)

      expect(result.item).toEqual([1, 2])
      expect(Array.isArray(result.item)).toBe(true)
    })
  })

  describe('Prototype Pollution Protection (Security)', () => {
    it('should ignore __proto__ properties and not pollute Object.prototype', () => {
      const payload = JSON.parse('{"__proto__": {"polluted": "yes"}}')
      const target = {}

      replaceRecursive(target, payload)

      expect(({} as any).polluted).toBeUndefined()
    })

    it('should ignore constructor and prototype properties', () => {
      const target = {}
      const source = { constructor: { prototype: { hacked: true } } }

      replaceRecursive(target, source)

      expect(({} as any).hacked).toBeUndefined()
    })
  })

  describe('Empty and nullish boundary inputs', () => {
    it('should safely handle undefined target without throwing SyntaxError', () => {
      expect(replaceRecursive(undefined as any, { a: 1 })).toEqual({ a: 1 })
    })

    it('should safely handle null target without throwing error', () => {
      expect(replaceRecursive(null as any, { a: 1 })).toEqual({ a: 1 })
    })

    it('should safely handle undefined replacement', () => {
      expect(replaceRecursive({ a: 1 }, undefined)).toEqual({ a: 1 })
    })

    it('should safely handle null replacement', () => {
      expect(replaceRecursive({ a: 1 }, null as any)).toEqual({ a: 1 })
    })

    it('should return empty object when both inputs are empty objects', () => {
      expect(replaceRecursive({}, {})).toEqual({})
    })

    it('should handle replacement containing null values', () => {
      const target = { a: 1, b: 2 }
      const source = { b: null }
      const result = replaceRecursive(target, source as any)

      expect(result).toEqual({ a: 1, b: null })
    })
  })
})
