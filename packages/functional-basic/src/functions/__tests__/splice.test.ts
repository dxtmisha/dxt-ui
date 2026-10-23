import { describe, expect, it } from 'vitest'
import { splice } from '../splice'

describe('splice', () => {
  describe('Standard functional requirements (Object merging & key-ordered splicing)', () => {
    it('should merge target and replacement objects when indexStart is omitted or empty', () => {
      const target = { a: 1 }
      const replacement = { b: 2 }

      expect(splice(target, replacement)).toEqual({ a: 1, b: 2 })
      expect(splice(target, replacement, '')).toEqual({ a: 1, b: 2 })
    })

    it('should replace at indexStart matching a property key and preserve order of following keys', () => {
      const target = { a: 1, b: 2, c: 3 }
      const replacement = { d: 4 }

      const result = splice(target, replacement, 'b')
      expect(result).toEqual({ a: 1, d: 4, c: 3 })
      expect(Object.keys(result)).toEqual(['a', 'd', 'c'])
    })

    it('should replace at indexStart matching a property value and preserve following keys', () => {
      const target = { firstKey: 'targetValue', rest: 'preserved' }
      const replacement = { updatedKey: 'updatedValue' }

      const result = splice(target, replacement, 'targetValue')
      expect(result).toEqual({ updatedKey: 'updatedValue', rest: 'preserved' })
      expect(Object.keys(result)).toEqual(['updatedKey', 'rest'])
    })

    it('should only trigger replacement on the first matching key or value when indexStart is used', () => {
      const target = { first: 'match', second: 'match', third: 'other' }
      const replacement = { inserted: 'done' }

      const result = splice(target, replacement, 'match')
      expect(result).toEqual({ inserted: 'done', second: 'match', third: 'other' })
      expect(Object.keys(result)).toEqual(['inserted', 'second', 'third'])
    })

    it('should append replacement via replaceRecursive when indexStart is not found in target', () => {
      const target = { a: 1, b: 2 }
      const replacement = { c: 3 }

      const result = splice(target, replacement, 'notFound')
      expect(result).toEqual({ a: 1, b: 2, c: 3 })
      expect(Object.keys(result)).toEqual(['a', 'b', 'c'])
    })
  })

  describe('Deep cloning and immutability', () => {
    it('should deeply clone nested objects both with and without indexStart', () => {
      const nestedBefore = { count: 5 }
      const nestedAfter = { active: true }
      const target = { before: nestedBefore, trigger: { old: 1 }, after: nestedAfter }
      const replacement = { replaced: { fresh: 2 } }

      const result = splice(target, replacement, 'trigger')

      expect(result).toEqual({
        before: { count: 5 },
        replaced: { fresh: 2 },
        after: { active: true }
      })
      expect(result.before).not.toBe(nestedBefore)
      expect(result.after).not.toBe(nestedAfter)
    })

    it('should deeply clone nested objects when merging without indexStart', () => {
      const nested = { deep: { count: 5 } }
      const replacement = { added: { value: 10 } }

      const result = splice(nested, replacement)
      expect(result).toEqual({ deep: { count: 5 }, added: { value: 10 } })
      expect(result.deep).not.toBe(nested.deep)
    })
  })

  describe('Boundary values, empty objects, and non-object inputs', () => {
    it('should return a cloned copy of target if replacement is undefined or not an object', () => {
      const target = { a: 1, nested: { b: 2 } }

      const resultUndefined = splice(target, undefined)
      expect(resultUndefined).toEqual(target)
      expect(resultUndefined).not.toBe(target)
      expect(resultUndefined.nested).not.toBe(target.nested)

      // @ts-expect-error testing invalid primitive replacement at runtime
      expect(splice(target, 123)).toEqual(target)
      // @ts-expect-error testing invalid string replacement at runtime
      expect(splice(target, 'string')).toEqual(target)
    })

    it('should handle empty target or empty replacement objects', () => {
      expect(splice({}, { a: 1 })).toEqual({ a: 1 })
      expect(splice({ a: 1 }, {})).toEqual({ a: 1 })
      expect(splice({}, {})).toEqual({})
    })
  })
})
