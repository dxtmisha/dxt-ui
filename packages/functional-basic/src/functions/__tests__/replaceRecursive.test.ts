import { describe, expect, it } from 'vitest'
import { replaceRecursive } from '../replaceRecursive'

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

    it('should handle multi-level deeply nested JSON-like structures', () => {
      const target: Record<string, unknown> = {
        level1: { level2: { level3: { value: 'A', extra: 1 } } }
      }
      const source: Record<string, unknown> = {
        level1: { level2: { level3: { value: 'B' }, sibling: true } }
      }
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

    it('should merge elements by index keys when replacement is an array or readonly tuple', () => {
      const target: Record<string, unknown> = { 0: 'initial', existing: true }
      const tupleReplacement = ['replaced', 'second'] as const
      const result = replaceRecursive(target, tupleReplacement)

      expect(result).toEqual({
        0: 'replaced',
        1: 'second',
        existing: true
      })
      expect(Array.isArray(result)).toBe(false)
    })
  })

  describe('Array merging and replacement (isMerge control)', () => {
    it('should merge and deduplicate arrays when isMerge is true (default)', () => {
      const target = { list: [1, 2, 2] }
      const source = { list: [2, 3, 1] }
      const result = replaceRecursive(target, source)

      expect(result.list).toEqual([1, 2, 3])
      expect(Array.isArray(result.list)).toBe(true)
    })

    it('should completely overwrite arrays and preserve duplicates in source when isMerge is false', () => {
      const target = { list: [1, 2] }
      const source = { list: [2, 2, 3] }
      const result = replaceRecursive(target, source, false)

      expect(result.list).toEqual([2, 2, 3])
      expect(Array.isArray(result.list)).toBe(true)
    })

    it('should handle empty arrays merging with non-empty arrays in both directions', () => {
      expect(replaceRecursive({ list: [] as number[] }, { list: [1, 2] }).list).toEqual([1, 2])
      expect(replaceRecursive({ list: [1, 2] }, { list: [] as number[] }, true).list).toEqual([1, 2])
      expect(replaceRecursive({ list: [1, 2] }, { list: [] as number[] }, false).list).toEqual([])
    })

    it('should deep-clone plain object elements inside merged and overwritten arrays', () => {
      const targetItem = { id: 1 }
      const sourceItem = { id: 2 }

      const merged = replaceRecursive({ list: [targetItem] }, { list: [sourceItem] }, true)
      const replaced = replaceRecursive({ list: [targetItem] }, { list: [sourceItem] }, false)

      expect(merged.list).toEqual([{ id: 1 }, { id: 2 }])
      expect(merged.list[0]).not.toBe(targetItem)
      expect(merged.list[1]).not.toBe(sourceItem)
      expect(replaced.list[0]).not.toBe(sourceItem)
    })
  })

  describe('Target cloning control (disableCopy parameter)', () => {
    it('should clone target by default (disableCopy = false) and isolate nested objects at all depths', () => {
      const deepAdded = { flag: true }
      const target: Record<string, unknown> = { a: 1, nested: { count: 10 } }
      const source: Record<string, unknown> = { nested: { count: 20, deepAdded } }

      const result = replaceRecursive(target, source)
      const resultNested = result.nested as Record<string, unknown>

      expect(result).not.toBe(target)
      expect(resultNested).not.toBe(target.nested)
      expect(resultNested).not.toBe(source.nested)
      expect(resultNested.deepAdded).not.toBe(deepAdded)
      expect((target.nested as { count: number }).count).toBe(10)
    })

    it('should mutate target in place when disableCopy is true while still cloning replacement branches', () => {
      const deepAdded = { flag: true }
      const target: Record<string, unknown> = { a: 1, nested: { count: 10 } }
      const targetNestedRef = target.nested
      const source: Record<string, unknown> = { nested: { count: 20, deepAdded } }

      const result = replaceRecursive(target, source, true, true)
      const resultNested = result.nested as Record<string, unknown>

      expect(result).toBe(target)
      expect(resultNested).toBe(targetNestedRef)
      expect(resultNested.count).toBe(20)
      expect(resultNested.deepAdded).toEqual({ flag: true })
      expect(resultNested.deepAdded).not.toBe(deepAdded)
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
      const payload = JSON.parse('{"__proto__": {"polluted": "yes"}, "safe": 1}') as Record<string, unknown>
      const result = replaceRecursive({}, payload)

      const verificationObject: Record<string, unknown> = {}
      expect(verificationObject.polluted).toBeUndefined()
      expect(Object.hasOwn(result, '__proto__')).toBe(false)
      expect(result).toEqual({ safe: 1 })
    })

    it('should ignore constructor and prototype properties', () => {
      const source: Record<string, unknown> = {
        constructor: { prototype: { hacked: true } },
        prototype: { injected: true },
        valid: 'ok'
      }

      const result = replaceRecursive({}, source)
      const verificationObject: Record<string, unknown> = {}

      expect(verificationObject.hacked).toBeUndefined()
      expect(verificationObject.injected).toBeUndefined()
      expect(Object.hasOwn(result, 'constructor')).toBe(false)
      expect(Object.hasOwn(result, 'prototype')).toBe(false)
      expect(result).toEqual({ valid: 'ok' })
    })
  })

  describe('Empty, nullish, and boundary primitive values', () => {
    it('should safely handle omitted, undefined, and null arguments without type assertions', () => {
      expect(replaceRecursive()).toEqual({})
      expect(replaceRecursive(undefined, undefined)).toEqual({})
      expect(replaceRecursive(null, null)).toEqual({})
      expect(replaceRecursive(undefined, { a: 1 })).toEqual({ a: 1 })
      expect(replaceRecursive(null, { a: 1 })).toEqual({ a: 1 })
      expect(replaceRecursive({ a: 1 }, undefined)).toEqual({ a: 1 })
      expect(replaceRecursive({ a: 1 }, null)).toEqual({ a: 1 })
      expect(replaceRecursive({}, {})).toEqual({})
    })

    it('should accurately overwrite with falsy boundary values (0, false, "", null)', () => {
      const target: Record<string, unknown> = {
        zero: 100,
        flag: true,
        empty: 'non-empty',
        nullable: 'text'
      }
      const source: Record<string, unknown> = {
        zero: 0,
        flag: false,
        empty: '',
        nullable: null
      }

      expect(replaceRecursive(target, source)).toEqual({
        zero: 0,
        flag: false,
        empty: '',
        nullable: null
      })
    })

    it('should defensively handle non-object primitive inputs at runtime', () => {
      // @ts-expect-error Runtime defensive check for primitive target
      expect(replaceRecursive('invalid', { a: 1 })).toEqual({ a: 1 })
      // @ts-expect-error Runtime defensive check for primitive replacement
      expect(replaceRecursive({ a: 1 }, 12345)).toEqual({ a: 1 })
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic, Vietnamese, CJK, and Emoji keys and values', () => {
      const target: Record<string, unknown> = {
        заголовок: 'Привет',
        ngônNgữ: 'Tiếng Việt',
        nested: { '🚀': ['✨'] }
      }
      const source: Record<string, unknown> = {
        cjk: '你好世界',
        nested: { '🚀': ['🔥'] }
      }

      expect(replaceRecursive(target, source)).toEqual({
        заголовок: 'Привет',
        ngônNgữ: 'Tiếng Việt',
        cjk: '你好世界',
        nested: { '🚀': ['✨', '🔥'] }
      })
    })
  })

  describe('Statefulness and deep input immutability', () => {
    it('should return a completely isolated deep copy without mutating target or replacement', () => {
      const target = { a: 1, nested: { value: 10, list: [1, 2] } }
      const addedObject = { deep: 'value' }
      const source = { nested: { value: 20, list: [2, 3] }, added: addedObject }

      const result = replaceRecursive<unknown>(target, source)

      expect(result).not.toBe(target)
      expect(result.nested).not.toBe(target.nested)
      expect(result.nested).not.toBe(source.nested)
      expect(result.added).not.toBe(addedObject)

      ;(result.nested as { value: number, list: number[] }).value = 999
      ;(result.nested as { value: number, list: number[] }).list.push(4)
      ;(result.added as { deep: string }).deep = 'mutated'

      expect(target).toEqual({ a: 1, nested: { value: 10, list: [1, 2] } })
      expect(source).toEqual({ nested: { value: 20, list: [2, 3] }, added: { deep: 'value' } })
    })
  })
})
