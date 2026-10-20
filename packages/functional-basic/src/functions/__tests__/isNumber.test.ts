import { describe, it, expect } from 'vitest'
import { isNumber } from '../isNumber'

describe('isNumber', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for actual finite numbers', () => {
      expect(isNumber(123)).toBe(true)
      expect(isNumber(0)).toBe(true)
      expect(isNumber(-50)).toBe(true)
      expect(isNumber(3.14)).toBe(true)
      expect(isNumber(-0.0001)).toBe(true)
    })

    it('should return true for BigInt values', () => {
      expect(isNumber(0n)).toBe(true)
      expect(isNumber(123n)).toBe(true)
      expect(isNumber(-42n)).toBe(true)
      expect(isNumber(BigInt(999999999999))).toBe(true)
    })

    it('should return true for numeric strings (integers)', () => {
      expect(isNumber('123')).toBe(true)
      expect(isNumber('0')).toBe(true)
      expect(isNumber('-123')).toBe(true)
      expect(isNumber('+123')).toBe(true)
    })

    it('should return true for numeric strings (floats)', () => {
      expect(isNumber('3.14')).toBe(true)
      expect(isNumber('-0.5')).toBe(true)
      expect(isNumber('+0.5')).toBe(true)
      expect(isNumber('0.0')).toBe(true)
    })

    it('should return true for trimmed numeric strings with whitespace padding', () => {
      expect(isNumber(' 123 ')).toBe(true)
      expect(isNumber('  -50.5\n')).toBe(true)
      expect(isNumber('\t+42\t')).toBe(true)
    })
  })

  describe('Special numeric values and boundary conditions', () => {
    it('should return false for NaN', () => {
      expect(isNumber(NaN)).toBe(false)
      expect(isNumber(Number.NaN)).toBe(false)
    })

    it('should return false for Infinity and -Infinity', () => {
      expect(isNumber(Infinity)).toBe(false)
      expect(isNumber(-Infinity)).toBe(false)
      expect(isNumber(Number.POSITIVE_INFINITY)).toBe(false)
      expect(isNumber(Number.NEGATIVE_INFINITY)).toBe(false)
    })

    it('should return true for zero variations', () => {
      expect(isNumber(0)).toBe(true)
      expect(isNumber(-0)).toBe(true)
      expect(isNumber('0')).toBe(true)
      expect(isNumber('-0')).toBe(true)
      expect(isNumber('+0')).toBe(true)
      expect(isNumber('0.0')).toBe(true)
    })

    it('should return true for Number.MAX_SAFE_INTEGER and MIN_SAFE_INTEGER', () => {
      expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true)
      expect(isNumber(Number.MIN_SAFE_INTEGER)).toBe(true)
    })
  })

  describe('Invalid string representations', () => {
    it('should return false for empty and whitespace-only strings', () => {
      expect(isNumber('')).toBe(false)
      expect(isNumber('   ')).toBe(false)
      expect(isNumber('\t\n')).toBe(false)
    })

    it('should return false for alphanumeric and malformed strings', () => {
      expect(isNumber('123a')).toBe(false)
      expect(isNumber('a123')).toBe(false)
      expect(isNumber('3.14.15')).toBe(false)
      expect(isNumber('-')).toBe(false)
      expect(isNumber('+')).toBe(false)
      expect(isNumber('12,34')).toBe(false)
    })

    it('should return false for incomplete decimal notation', () => {
      expect(isNumber('.')).toBe(false)
      expect(isNumber('123.')).toBe(false)
      expect(isNumber('.123')).toBe(false)
    })

    it('should return false for invalid signs placement', () => {
      expect(isNumber('--123')).toBe(false)
      expect(isNumber('++123')).toBe(false)
      expect(isNumber('123-')).toBe(false)
      expect(isNumber('123+')).toBe(false)
      expect(isNumber('12-34')).toBe(false)
    })
  })

  describe('Non-numeric data types and nullish values', () => {
    it('should return false for null and undefined', () => {
      expect(isNumber(null)).toBe(false)
      expect(isNumber(undefined)).toBe(false)
    })

    it('should return false for boolean values', () => {
      expect(isNumber(true)).toBe(false)
      expect(isNumber(false)).toBe(false)
    })

    it('should return false for objects and arrays', () => {
      expect(isNumber({})).toBe(false)
      expect(isNumber({ value: 123 })).toBe(false)
      expect(isNumber([])).toBe(false)
      expect(isNumber([123])).toBe(false)
      expect(isNumber(['123'])).toBe(false)
    })

    it('should return false for objects with custom valueOf or toString', () => {
      expect(isNumber({ valueOf: () => 123 })).toBe(false)
      expect(isNumber({ toString: () => '123' })).toBe(false)
    })

    it('should return false for functions and symbols', () => {
      expect(isNumber(() => 123)).toBe(false)
      expect(isNumber(Symbol('123'))).toBe(false)
    })
  })

  describe('Alternative number bases and scientific notation in strings', () => {
    it('should return false for scientific notation strings', () => {
      expect(isNumber('1e5')).toBe(false)
      expect(isNumber('1.5e-3')).toBe(false)
      expect(isNumber('1E+10')).toBe(false)
    })

    it('should return false for hexadecimal, binary, and octal string representations', () => {
      expect(isNumber('0x123')).toBe(false)
      expect(isNumber('0b101')).toBe(false)
      expect(isNumber('0o77')).toBe(false)
    })
  })

  describe('Multilingual and Unicode strings', () => {
    it('should return false for strings with localized text mixed with numbers', () => {
      expect(isNumber('123 руб')).toBe(false)
      expect(isNumber('№ 123')).toBe(false)
      expect(isNumber('Số 123')).toBe(false)
      expect(isNumber('123px')).toBe(false)
      expect(isNumber('123%')).toBe(false)
    })

    it('should return false for full-width and non-ASCII numeral characters', () => {
      expect(isNumber('１２３')).toBe(false)
      expect(isNumber('١٢٣')).toBe(false)
      expect(isNumber('一二三')).toBe(false)
    })

    it('should return false for strings containing emojis', () => {
      expect(isNumber('123🚀')).toBe(false)
      expect(isNumber('🔥')).toBe(false)
    })

    it('should trim non-breaking spaces and multi-line whitespace correctly', () => {
      expect(isNumber('\u00A0123\u00A0')).toBe(true)
      expect(isNumber('\n\t  -42.5  \r\n')).toBe(true)
    })
  })
})
