import { describe, expect, it } from 'vitest'
import { splice } from '../splice'

describe('splice', () => {
  describe('Standard functional requirements (Object merging & key-ordered splicing)', () => {
    it('should merge target and replacement objects when indexStart is omitted, empty, or null', () => {
      const target = { a: 1 }
      const replacement = { b: 2 }

      expect(splice<number>(target, replacement)).toEqual({ a: 1, b: 2 })
      expect(splice<number>(target, replacement, '')).toEqual({ a: 1, b: 2 })
      expect(splice<number>(target, replacement, null)).toEqual({ a: 1, b: 2 })
    })

    it('should replace at indexStart matching a property key and preserve exact order of surrounding keys', () => {
      const target = { a: 1, b: 2, c: 3 }
      const replacement = { d: 4, e: 5 }

      const result = splice(target, replacement, 'b')
      expect(result).toEqual({ a: 1, d: 4, e: 5, c: 3 })
      expect(Object.keys(result)).toEqual(['a', 'd', 'e', 'c'])
    })

    it('should replace at indexStart matching a property string value and preserve following keys', () => {
      const target = { firstKey: 'targetValue', rest: 'preserved' }
      const replacement = { updatedKey: 'updatedValue' }

      const result = splice(target, replacement, 'targetValue')
      expect(result).toEqual({ updatedKey: 'updatedValue', rest: 'preserved' })
      expect(Object.keys(result)).toEqual(['updatedKey', 'rest'])
    })

    it('should only trigger replacement on the first matching key or value when duplicates exist', () => {
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

  describe('Cascade priority and recursive merging around indexStart', () => {
    it('should let replacement override keys before indexStart while keys after indexStart override replacement', () => {
      const target: Record<string, unknown> = {
        before: { shared: 'oldBefore', keepBefore: true },
        anchor: '{link.token}',
        after: { shared: 'overrideAfter', keepAfter: true }
      }
      const replacement: Record<string, unknown> = {
        before: { shared: 'fromLinkBefore', linkOnly: 1 },
        injected: { value: '16px' },
        after: { shared: 'fromLinkAfter', linkExtra: 2 }
      }

      const result = splice(target, replacement, 'anchor')

      expect(Object.keys(result)).toEqual(['before', 'injected', 'after'])
      expect(result).toEqual({
        before: { shared: 'fromLinkBefore', keepBefore: true, linkOnly: 1 },
        injected: { value: '16px' },
        after: { shared: 'overrideAfter', linkExtra: 2, keepAfter: true }
      })
    })

    it('should merge and deduplicate nested arrays across indexStart via replaceRecursive', () => {
      const target: Record<string, unknown> = {
        tags: ['base', 'shared'],
        link: 'inject-here',
        modifiers: ['after']
      }
      const replacement: Record<string, unknown> = {
        tags: ['shared', 'from-link'],
        modifiers: ['from-link', 'after']
      }

      const result = splice(target, replacement, 'link')

      expect(result).toEqual({
        tags: ['base', 'shared', 'from-link'],
        modifiers: ['from-link', 'after']
      })
    })

    it('should allow replacement to re-introduce the matched indexStart key itself if present in replacement', () => {
      const target = { a: 1, b: 2, c: 3 }
      const replacement = { b: 20, extra: 99 }

      const result = splice(target, replacement, 'b')
      expect(result).toEqual({ a: 1, b: 20, extra: 99, c: 3 })
      expect(Object.keys(result)).toEqual(['a', 'b', 'extra', 'c'])
    })
  })

  describe('Prototype Pollution Protection (Security)', () => {
    it('should filter __proto__, constructor, and prototype from both target and replacement', () => {
      const pollutedTarget = JSON.parse(
        '{"__proto__": {"pollutedTarget": true}, "before": 1, "anchor": 2, "after": 3}'
      ) as Record<string, unknown>
      const pollutedReplacement = JSON.parse(
        '{"__proto__": {"pollutedSource": true}, "constructor": {"hacked": true}, "prototype": {"bad": true}, "clean": 10}'
      ) as Record<string, unknown>

      const result = splice(pollutedTarget, pollutedReplacement, 'anchor')
      const resultNullTarget = splice(undefined, pollutedReplacement)
      const verificationObject: Record<string, unknown> = {}

      expect(verificationObject.pollutedTarget).toBeUndefined()
      expect(verificationObject.pollutedSource).toBeUndefined()
      expect(Object.getPrototypeOf(result)).toBe(Object.prototype)
      expect(Object.hasOwn(result, '__proto__')).toBe(false)
      expect(Object.hasOwn(result, 'constructor')).toBe(false)
      expect(Object.hasOwn(result, 'prototype')).toBe(false)
      expect(Object.hasOwn(resultNullTarget, '__proto__')).toBe(false)
      expect(result).toEqual({ before: 1, clean: 10, after: 3 })
      expect(resultNullTarget).toEqual({ clean: 10 })
    })
  })

  describe('Empty, nullish, and boundary primitive values', () => {
    it('should safely handle omitted, undefined, and null target without returning nullish values', () => {
      const source = { a: 1, nested: { b: 2 } }

      expect(splice()).toEqual({})
      expect(splice(undefined, undefined)).toEqual({})
      expect(splice(null, null)).toEqual({})

      const fromUndefined = splice(undefined, source)
      const fromNull = splice(null, source)

      expect(fromUndefined).toEqual(source)
      expect(fromUndefined).not.toBe(source)
      expect(fromUndefined.nested).not.toBe(source.nested)
      expect(fromNull).toEqual(source)
    })

    it('should return a deep clone of target when replacement is omitted, undefined, null, or primitive', () => {
      const target = { a: 1, nested: { b: 2 } }

      const resOmitted = splice(target)
      const resUndefined = splice(target, undefined)
      const resNull = splice(target, null)

      expect(resOmitted).toEqual(target)
      expect(resOmitted).not.toBe(target)
      expect(resOmitted.nested).not.toBe(target.nested)
      expect(resUndefined).toEqual(target)
      expect(resNull).toEqual(target)

      expect(splice<unknown>(target, 123)).toEqual(target)
      expect(splice<unknown>(target, 'primitive')).toEqual(target)
      expect(splice<unknown>(target, false)).toEqual(target)
    })

    it('should handle empty target or empty replacement objects', () => {
      expect(splice({}, { a: 1 })).toEqual({ a: 1 })
      expect(splice({}, { a: 1 }, 'missing')).toEqual({ a: 1 })
      expect(splice({ a: 1 }, {})).toEqual({ a: 1 })
      expect(splice({ a: 1, b: 2 }, {}, 'a')).toEqual({ b: 2 })
      expect(splice({}, {})).toEqual({})
    })

    it('should preserve falsy values (0, false, "", null) before and after indexStart', () => {
      const target: Record<string, unknown> = {
        zero: 0,
        falseFlag: false,
        anchor: 'replace-me',
        emptyText: '',
        nullValue: null
      }
      const replacement: Record<string, unknown> = {
        insertedZero: 0,
        insertedFalse: false
      }

      const result = splice(target, replacement, 'anchor')

      expect(result).toEqual({
        zero: 0,
        falseFlag: false,
        insertedZero: 0,
        insertedFalse: false,
        emptyText: '',
        nullValue: null
      })
    })

    it('should defensively handle non-object primitive target at runtime', () => {
      // @ts-expect-error Runtime defensive check for primitive target
      expect(splice('invalid', { a: 1 })).toEqual({ a: 1 })
      // @ts-expect-error Runtime defensive check for primitive target and replacement
      expect(splice(12345, 'invalid')).toEqual({})
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should accurately match Unicode indexStart keys/values and preserve multilingual properties', () => {
      const target: Record<string, unknown> = {
        привет: 'мир',
        якорь: 'tiếng Việt',
        cjk: '你好',
        emoji: '🚀'
      }
      const replacement: Record<string, unknown> = {
        ngônNgữ: 'Việt Nam ✨'
      }

      const byKey = splice(target, replacement, 'якорь')
      const byValue = splice(target, replacement, 'tiếng Việt')

      expect(Object.keys(byKey)).toEqual(['привет', 'ngônNgữ', 'cjk', 'emoji'])
      expect(byValue).toEqual(byKey)
    })
  })

  describe('Statefulness and deep input immutability', () => {
    it('should deeply isolate result from both target and replacement with and without indexStart', () => {
      const nestedBefore = { count: 5 }
      const nestedAfter = { active: true }
      const nestedReplacement = { fresh: 2, list: [1, 2] }
      const target: Record<string, unknown> = {
        before: nestedBefore,
        trigger: { old: 1 },
        after: nestedAfter
      }
      const replacement: Record<string, unknown> = {
        replaced: nestedReplacement
      }

      const resultWithIndex = splice(target, replacement, 'trigger')
      const resultWithoutIndex = splice(target, replacement)

      expect(resultWithIndex.before).not.toBe(nestedBefore)
      expect(resultWithIndex.after).not.toBe(nestedAfter)
      expect(resultWithIndex.replaced).not.toBe(nestedReplacement)
      expect(resultWithoutIndex.before).not.toBe(nestedBefore)
      expect(resultWithoutIndex.replaced).not.toBe(nestedReplacement)

      ;(resultWithIndex.replaced as { fresh: number, list: number[] }).fresh = 999
      ;(resultWithIndex.replaced as { fresh: number, list: number[] }).list.push(3)

      expect(nestedReplacement).toEqual({ fresh: 2, list: [1, 2] })
      expect(nestedBefore).toEqual({ count: 5 })
      expect(nestedAfter).toEqual({ active: true })
    })
  })
})
