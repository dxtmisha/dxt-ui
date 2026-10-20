import { describe, it, expect } from 'vitest'
import { isFloat } from '../isFloat'

describe('isFloat', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for integer numbers', () => {
      expect(isFloat(0)).toBe(true)
      expect(isFloat(1)).toBe(true)
      expect(isFloat(123)).toBe(true)
      expect(isFloat(999999)).toBe(true)
    })

    it('should return true for negative integer numbers', () => {
      expect(isFloat(-1)).toBe(true)
      expect(isFloat(-123)).toBe(true)
      expect(isFloat(-999999)).toBe(true)
    })

    it('should return true for floating-point numbers', () => {
      expect(isFloat(0.1)).toBe(true)
      expect(isFloat(123.45)).toBe(true)
      expect(isFloat(0.00001)).toBe(true)
      expect(isFloat(3.1415926535)).toBe(true)
    })

    it('should return true for negative floating-point numbers', () => {
      expect(isFloat(-0.1)).toBe(true)
      expect(isFloat(-123.45)).toBe(true)
      expect(isFloat(-3.14159)).toBe(true)
    })

    it('should return true for numeric strings (integers)', () => {
      expect(isFloat('0')).toBe(true)
      expect(isFloat('123')).toBe(true)
      expect(isFloat('-123')).toBe(true)
      expect(isFloat('+123')).toBe(true)
    })

    it('should return true for numeric strings (floats)', () => {
      expect(isFloat('0.0')).toBe(true)
      expect(isFloat('123.45')).toBe(true)
      expect(isFloat('-123.45')).toBe(true)
      expect(isFloat('+123.45')).toBe(true)
      expect(isFloat('0.0001')).toBe(true)
    })

    it('should return true for trimmed numeric strings with whitespace padding', () => {
      expect(isFloat(' 123 ')).toBe(true)
      expect(isFloat('  -123.45\n')).toBe(true)
      expect(isFloat('\t+42.5\t')).toBe(true)
    })
  })

  describe('Special numeric values and boundary conditions', () => {
    it('should return false for NaN', () => {
      expect(isFloat(NaN)).toBe(false)
      expect(isFloat(Number.NaN)).toBe(false)
    })

    it('should return false for Infinity and -Infinity', () => {
      expect(isFloat(Infinity)).toBe(false)
      expect(isFloat(-Infinity)).toBe(false)
      expect(isFloat(Number.POSITIVE_INFINITY)).toBe(false)
      expect(isFloat(Number.NEGATIVE_INFINITY)).toBe(false)
    })

    it('should return true for zero variations', () => {
      expect(isFloat(0)).toBe(true)
      expect(isFloat(-0)).toBe(true)
      expect(isFloat('0')).toBe(true)
      expect(isFloat('-0')).toBe(true)
      expect(isFloat('+0')).toBe(true)
      expect(isFloat('0.0')).toBe(true)
    })

    it('should return true for Number.MAX_SAFE_INTEGER and MIN_SAFE_INTEGER', () => {
      expect(isFloat(Number.MAX_SAFE_INTEGER)).toBe(true)
      expect(isFloat(Number.MIN_SAFE_INTEGER)).toBe(true)
    })
  })

  describe('Invalid string representations', () => {
    it('should return false for empty or whitespace-only strings', () => {
      expect(isFloat('')).toBe(false)
      expect(isFloat('   ')).toBe(false)
      expect(isFloat('\t\n')).toBe(false)
    })

    it('should return false for strings with non-numeric characters', () => {
      expect(isFloat('abc')).toBe(false)
      expect(isFloat('123a')).toBe(false)
      expect(isFloat('a123')).toBe(false)
      expect(isFloat('12.34.56')).toBe(false)
      expect(isFloat('12,34')).toBe(false)
    })

    it('should return false for incomplete decimal notation', () => {
      expect(isFloat('.')).toBe(false)
      expect(isFloat('123.')).toBe(false)
      expect(isFloat('.123')).toBe(false)
      expect(isFloat('..')).toBe(false)
    })

    it('should return false for invalid signs placement', () => {
      expect(isFloat('--123')).toBe(false)
      expect(isFloat('++123')).toBe(false)
      expect(isFloat('+-123')).toBe(false)
      expect(isFloat('123-')).toBe(false)
      expect(isFloat('123+')).toBe(false)
      expect(isFloat('12-34')).toBe(false)
    })
  })

  describe('Non-numeric data types and nullish values', () => {
    it('should return false for null and undefined', () => {
      expect(isFloat(null)).toBe(false)
      expect(isFloat(undefined)).toBe(false)
    })

    it('should return false for boolean values', () => {
      expect(isFloat(true)).toBe(false)
      expect(isFloat(false)).toBe(false)
    })

    it('should return false for objects and arrays', () => {
      expect(isFloat({})).toBe(false)
      expect(isFloat({ a: 1 })).toBe(false)
      expect(isFloat([])).toBe(false)
      expect(isFloat([123])).toBe(false)
      expect(isFloat(['123.45'])).toBe(false)
    })

    it('should return false for functions and symbols', () => {
      expect(isFloat(() => 123)).toBe(false)
      expect(isFloat(Symbol('123'))).toBe(false)
    })

    it('should return false for BigInt primitives', () => {
      expect(isFloat(123n)).toBe(false)
      expect(isFloat(0n)).toBe(false)
    })
  })
})
