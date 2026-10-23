import { describe, expect, it } from 'vitest'
import { replaceRecursive } from '../replaceRecursive'
import { type ObjectItem, type ObjectOrArray } from '../../types/basicTypes'

describe('replaceRecursive', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should recursively merge nested objects', () => {
      const target: Record<string, unknown> = { a: 1, b: { c: 2 } }
      const source: Record<string, unknown> = { b: { d: 3 }, e: 4 }
      const result = replaceRecursive(target, source)

      expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
    })

    it('should overwrite primitive properties with replacement values', () => {
      const target: Record<string, unknown> = { a: 1, b: 'old' }
      const source: Record<string, unknown> = { b: 'new' }

      expect(replaceRecursive(target, source)).toEqual({ a: 1, b: 'new' })
    })

    it('should handle multi-level deeply nested objects', () => {
      const target: Record<string, unknown> = { level1: { level2: { level3: { value: 'A', extra: 1 } } } }
      const source: Record<string, unknown> = { level1: { level2: { level3: { value: 'B' }, sibling: true } } }
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
      const addedObject = { deep: 'value' }
      const result = replaceRecursive<unknown>(target, { ...source, added: addedObject })

      expect(result).not.toBe(target)
      expect(result.nested).not.toBe(source.nested)
      expect(result.added).not.toBe(addedObject)
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
      const target: { list: number[] } = { list: [] }
      const source: { list: number[] } = { list: [1, 2] }

      expect(replaceRecursive(target, source).list).toEqual([1, 2])
    })

    it('should handle non-empty arrays merging with empty arrays', () => {
      const target: { list: number[] } = { list: [1, 2] }
      const source: { list: number[] } = { list: [] }

      expect(replaceRecursive(target, source, true).list).toEqual([1, 2])
      expect(replaceRecursive(target, source, false).list).toEqual([])
    })
  })

  describe('Type conflict resolution (Array vs Object)', () => {
    it('should replace array with object if replacement property is an object', () => {
      const target: Record<string, unknown> = { item: [1, 2] }
      const source: Record<string, unknown> = { item: { key: 'value' } }
      const result = replaceRecursive(target, source)

      expect(result.item).toEqual({ key: 'value' })
      expect(Array.isArray(result.item)).toBe(false)
    })

    it('should replace object with array if replacement property is an array', () => {
      const target: Record<string, unknown> = { item: { key: 'value' } }
      const source: Record<string, unknown> = { item: [1, 2] }
      const result = replaceRecursive(target, source)

      expect(result.item).toEqual([1, 2])
      expect(Array.isArray(result.item)).toBe(true)
    })
  })

  describe('Prototype Pollution Protection (Security)', () => {
    it('should ignore __proto__ properties and not pollute Object.prototype', () => {
      const payload = JSON.parse('{"__proto__": {"polluted": "yes"}}') as Record<string, unknown>
      const target: Record<string, unknown> = {}

      replaceRecursive(target, payload)

      const verificationObject: Record<string, unknown> = {}
      expect(verificationObject.polluted).toBeUndefined()
    })

    it('should ignore constructor and prototype properties', () => {
      const target: Record<string, unknown> = {}
      const source: Record<string, unknown> = {
        constructor: { prototype: { hacked: true } },
        prototype: { injected: true }
      }

      replaceRecursive(target, source)

      const verificationObject: Record<string, unknown> = {}
      expect(verificationObject.hacked).toBeUndefined()
      expect(verificationObject.injected).toBeUndefined()
    })
  })

  describe('Empty and nullish boundary inputs', () => {
    it('should safely handle undefined target without throwing error', () => {
      expect(
        replaceRecursive(undefined as unknown as ObjectItem<number>, { a: 1 })
      ).toEqual({ a: 1 })
    })

    it('should safely handle null target without throwing error', () => {
      expect(
        replaceRecursive(null as unknown as ObjectItem<number>, { a: 1 })
      ).toEqual({ a: 1 })
    })

    it('should return empty object when both target and replacement are non-objects', () => {
      expect(
        replaceRecursive(
          undefined as unknown as ObjectItem<unknown>,
          undefined
        )
      ).toEqual({})
      expect(
        replaceRecursive(
          null as unknown as ObjectItem<unknown>,
          null as unknown as ObjectOrArray<unknown>
        )
      ).toEqual({})
    })

    it('should safely handle undefined replacement', () => {
      expect(replaceRecursive({ a: 1 }, undefined)).toEqual({ a: 1 })
    })

    it('should safely handle null replacement', () => {
      expect(
        replaceRecursive({ a: 1 }, null as unknown as ObjectOrArray<number>)
      ).toEqual({ a: 1 })
    })

    it('should return empty object when both inputs are empty objects', () => {
      expect(replaceRecursive({}, {})).toEqual({})
    })

    it('should handle replacement containing null, 0, and false values', () => {
      const target: Record<string, unknown> = { a: 1, b: 2, c: true, d: 10 }
      const source: Record<string, unknown> = { b: null, c: false, d: 0 }
      const result = replaceRecursive(target, source)

      expect(result).toEqual({ a: 1, b: null, c: false, d: 0 })
    })
  })
})
