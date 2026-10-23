import { describe, it, expect } from 'vitest'
import { isObjectNotArray } from '../isObjectNotArray'

describe('isObjectNotArray', () => {
  describe('Standard functional requirements (Plain and non-array objects)', () => {
    it('should return true for plain objects', () => {
      expect(isObjectNotArray({})).toBe(true)
      expect(isObjectNotArray({ a: 1, b: 'value' })).toBe(true)
    })

    it('should return true for null-prototype objects and custom class instances', () => {
      class CustomEntity {
        name = 'test'
      }

      expect(isObjectNotArray(Object.create(null))).toBe(true)
      expect(isObjectNotArray(new CustomEntity())).toBe(true)
    })

    it('should return true for built-in non-array object instances (Date, RegExp, Map, Set, Error)', () => {
      expect(isObjectNotArray(new Date())).toBe(true)
      expect(isObjectNotArray(/regex/)).toBe(true)
      expect(isObjectNotArray(new Map())).toBe(true)
      expect(isObjectNotArray(new Set())).toBe(true)
      expect(isObjectNotArray(new Error('test'))).toBe(true)
    })
  })

  describe('Array exclusion', () => {
    it('should return false for empty, populated, and nested arrays', () => {
      expect(isObjectNotArray([])).toBe(false)
      expect(isObjectNotArray([1, 2, 3])).toBe(false)
      expect(isObjectNotArray([{ key: 'value' }])).toBe(false)
      expect(isObjectNotArray([[]])).toBe(false)
      expect(isObjectNotArray(new Array(3))).toBe(false)
      expect(isObjectNotArray(Array.from('abc'))).toBe(false)
    })
  })

  describe('Nullish and falsy primitive values', () => {
    it('should return false for null and undefined', () => {
      expect(isObjectNotArray(null)).toBe(false)
      expect(isObjectNotArray(undefined)).toBe(false)
    })

    it('should return false for falsy primitives (0, false, NaN, empty string)', () => {
      expect(isObjectNotArray(0)).toBe(false)
      expect(isObjectNotArray(-0)).toBe(false)
      expect(isObjectNotArray(0n)).toBe(false)
      expect(isObjectNotArray(false)).toBe(false)
      expect(isObjectNotArray(Number.NaN)).toBe(false)
      expect(isObjectNotArray('')).toBe(false)
    })
  })

  describe('Functions and non-object primitive types', () => {
    it('should return false for functions and class constructors', () => {
      class SampleClass {}

      expect(isObjectNotArray(() => {})).toBe(false)
      expect(isObjectNotArray(function namedFunction() {})).toBe(false)
      expect(isObjectNotArray(SampleClass)).toBe(false)
    })

    it('should return false for strings, numbers, booleans, symbols, and bigints', () => {
      expect(isObjectNotArray('string')).toBe(false)
      expect(isObjectNotArray('{}')).toBe(false)
      expect(isObjectNotArray(123)).toBe(false)
      expect(isObjectNotArray(true)).toBe(false)
      expect(isObjectNotArray(Symbol('test'))).toBe(false)
      expect(isObjectNotArray(42n)).toBe(false)
    })
  })
})
