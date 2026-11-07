import { describe, it, expect, expectTypeOf } from 'vitest'
import { getObjectOrNone, type ObjectOrNoneReturn } from '../getObjectOrNone'

describe('getObjectOrNone', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return the exact same object reference if it is a plain object', () => {
      const inputObject = { a: 1, b: 2 }
      expect(getObjectOrNone(inputObject)).toBe(inputObject)
    })

    it('should return the exact same object reference for an empty plain object', () => {
      const emptyObject = {}
      expect(getObjectOrNone(emptyObject)).toBe(emptyObject)
    })

    it('should preserve objects created via Object.create(null) or custom prototypes', () => {
      const nullPrototypeObject = Object.create(null) as Record<string, number>
      nullPrototypeObject.key = 100
      expect(getObjectOrNone(nullPrototypeObject)).toBe(nullPrototypeObject)

      const dateInstance = new Date('2025-01-01T00:00:00.000Z')
      expect(getObjectOrNone(dateInstance)).toBe(dateInstance)
    })
  })

  describe('Arrays and collection inputs', () => {
    it('should return an empty object if the value is a non-empty array', () => {
      expect(getObjectOrNone([1, 2, 3])).toEqual({})
    })

    it('should return an empty object if the value is an empty array', () => {
      expect(getObjectOrNone([])).toEqual({})
    })
  })

  describe('Empty, nullish, and primitive inputs', () => {
    it('should return an empty object if the value is missing, null, or undefined', () => {
      expect(getObjectOrNone()).toEqual({})
      expect(getObjectOrNone(null)).toEqual({})
      expect(getObjectOrNone(undefined)).toEqual({})
    })

    it('should return an empty object if the value is a string (including empty and whitespace)', () => {
      expect(getObjectOrNone('hello')).toEqual({})
      expect(getObjectOrNone('')).toEqual({})
      expect(getObjectOrNone('   \t\n')).toEqual({})
    })

    it('should return an empty object if the value is a number (including 0, negative, NaN, and Infinity)', () => {
      expect(getObjectOrNone(42)).toEqual({})
      expect(getObjectOrNone(0)).toEqual({})
      expect(getObjectOrNone(-0)).toEqual({})
      expect(getObjectOrNone(-99.5)).toEqual({})
      expect(getObjectOrNone(Number.NaN)).toEqual({})
      expect(getObjectOrNone(Number.POSITIVE_INFINITY)).toEqual({})
      expect(getObjectOrNone(Number.NEGATIVE_INFINITY)).toEqual({})
    })

    it('should return an empty object if the value is a boolean', () => {
      expect(getObjectOrNone(true)).toEqual({})
      expect(getObjectOrNone(false)).toEqual({})
    })

    it('should return an empty object if the value is a function or symbol', () => {
      const callback = () => ({ a: 1 })
      expect(getObjectOrNone(callback)).toEqual({})
      expect(getObjectOrNone(Symbol('test'))).toEqual({})
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve objects containing Cyrillic, Vietnamese, CJK, and Emoji keys and values', () => {
      const multilingualObject = {
        'привет': 'мир',
        'tiếng_việt': 'xin chào',
        '你好': '世界',
        '🚀': '✨'
      }
      expect(getObjectOrNone(multilingualObject)).toBe(multilingualObject)
    })
  })

  describe('Statefulness and reference isolation', () => {
    it('should return a fresh empty object instance on each fallback call to prevent shared mutation leaks', () => {
      const firstFallback = getObjectOrNone(null)
      const secondFallback = getObjectOrNone(undefined)

      expect(firstFallback).not.toBe(secondFallback)
      firstFallback.mutated = true
      expect(secondFallback).toEqual({})
    })
  })

  describe('Return types match preserved objects and fallback values', () => {
    it('should preserve known object properties and instance methods', () => {
      const object = { name: 'Admin', count: 2 } as const
      const result = getObjectOrNone(object)

      expectTypeOf(result.name).toEqualTypeOf<'Admin'>()
      expectTypeOf(result.count).toEqualTypeOf<2>()
      expectTypeOf(getObjectOrNone(new Date()).getTime).toBeFunction()
    })

    it('should expose array and string fallback properties as unknown', () => {
      const arrayResult = getObjectOrNone(['a'])
      const readonlyArrayResult = getObjectOrNone(['a'] as const)
      const stringResult = getObjectOrNone('text')

      expectTypeOf(arrayResult).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(readonlyArrayResult).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(stringResult).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(arrayResult.map).toBeUnknown()
      expectTypeOf(readonlyArrayResult.map).toBeUnknown()
      expectTypeOf(stringResult.toUpperCase).toBeUnknown()
    })

    it('should use the fallback type for other primitives and functions', () => {
      const callbackResult = getObjectOrNone(() => 'value')
      const constructorResult = getObjectOrNone(Date)

      expectTypeOf(getObjectOrNone(42)).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(getObjectOrNone(false)).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(getObjectOrNone(Symbol('value'))).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(getObjectOrNone(1n)).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(callbackResult).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(constructorResult).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(callbackResult.apply).toBeUnknown()
      expectTypeOf(constructorResult.now).toBeUnknown()
      expectTypeOf<ObjectOrNoneReturn<abstract new () => { name: string }>>().toEqualTypeOf<Record<string, unknown>>()
    })

    it('should use an object fallback for missing and nullish inputs', () => {
      expectTypeOf(getObjectOrNone()).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(getObjectOrNone(null)).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf(getObjectOrNone(undefined)).toEqualTypeOf<Record<string, unknown>>()
      expectTypeOf<ObjectOrNoneReturn<never>>().toEqualTypeOf<Record<string, unknown>>()
    })

    it('should retain both object and fallback possibilities for mixed unions', () => {
      expectTypeOf<ObjectOrNoneReturn<{ name: string } | string | undefined>>().toEqualTypeOf<
        ({ name: string } & Record<string, unknown>) | Record<string, unknown>
      >()
      expectTypeOf<ObjectOrNoneReturn<{ name: string } | readonly string[] | null>>().toEqualTypeOf<
        ({ name: string } & Record<string, unknown>) | Record<string, unknown>
      >()
    })
  })
})
