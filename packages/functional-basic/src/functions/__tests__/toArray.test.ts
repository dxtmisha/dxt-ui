import { describe, expect, it } from 'vitest'
import { toArray } from '../toArray'

describe('toArray', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return the exact same array reference when the input is already an array', () => {
      const input = [1, 2, 3]
      const result = toArray(input)

      expect(result).toBe(input)
      expect(result).toEqual([1, 2, 3])
    })

    it('should wrap primitive values in a single-element array', () => {
      expect(toArray(1)).toEqual([1])
      expect(toArray('hello')).toEqual(['hello'])
      expect(toArray(true)).toEqual([true])
    })

    it('should wrap plain objects, Dates, Sets, Maps, and functions in a single-element array', () => {
      const plainObject = { a: 1 }
      const dateInstance = new Date('2025-01-01')
      const setInstance = new Set([1, 2])
      const callback = () => 'result'

      expect(toArray(plainObject)).toEqual([plainObject])
      expect(toArray(plainObject)[0]).toBe(plainObject)
      expect(toArray(dateInstance)).toEqual([dateInstance])
      expect(toArray(setInstance)).toEqual([setInstance])
      expect(toArray(callback)).toEqual([callback])
    })
  })

  describe('Boundary values, empty collections, and nested arrays', () => {
    it('should return an empty array as-is without wrapping it into a nested array', () => {
      const emptyArray: unknown[] = []
      const result = toArray(emptyArray)

      expect(result).toBe(emptyArray)
      expect(result).toEqual([])
    })

    it('should preserve multi-dimensional nested arrays without flattening or double-wrapping', () => {
      const matrix = [[1, 2], [3, 4]]
      const result = toArray(matrix)

      expect(result).toBe(matrix)
      expect(result).toEqual([[1, 2], [3, 4]])
    })
  })

  describe('Falsy and nullish inputs', () => {
    it('should wrap falsy primitives (0, false, empty string, NaN) in an array', () => {
      expect(toArray(0)).toEqual([0])
      expect(toArray(false)).toEqual([false])
      expect(toArray('')).toEqual([''])
      expect(toArray(Number.NaN)).toEqual([Number.NaN])
    })

    it('should wrap null and undefined in a single-element array', () => {
      expect(toArray(null)).toEqual([null])
      expect(toArray(undefined)).toEqual([undefined])
    })
  })
})
