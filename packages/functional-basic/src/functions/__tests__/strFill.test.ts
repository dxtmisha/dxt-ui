import { describe, expect, it } from 'vitest'
import { strFill } from '../strFill'

describe('strFill', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should create a string of specified repeat count filled with a single character', () => {
      expect(strFill('a', 3)).toBe('aaa')
      expect(strFill('*', 5)).toBe('*****')
      expect(strFill('0', 4)).toBe('0000')
    })

    it('should repeat multi-character strings count times', () => {
      expect(strFill('ab', 2)).toBe('abab')
      expect(strFill('123-', 3)).toBe('123-123-123-')
    })
  })

  describe('Boundary values and count thresholds', () => {
    it('should default to zero repetitions when count is omitted or undefined', () => {
      expect(strFill()).toBe('')
      expect(strFill('value')).toBe('')
      expect(strFill('value', undefined)).toBe('')
    })

    it('should return an empty string when count is 0', () => {
      expect(strFill('a', 0)).toBe('')
      expect(strFill('hello', 0)).toBe('')
    })

    it('should return the original string once when count is 1', () => {
      expect(strFill('single', 1)).toBe('single')
    })

    it('should truncate fractional counts toward zero', () => {
      expect(strFill('x', 3.9)).toBe('xxx')
      expect(strFill('x', 0.9)).toBe('')
      expect(strFill('x', -0.9)).toBe('')
    })

    it('should treat NaN and negative zero counts as zero repetitions', () => {
      expect(strFill('x', Number.NaN)).toBe('')
      expect(strFill('x', -0)).toBe('')
    })

    it('should throw RangeError for negative integer or infinite counts', () => {
      expect(() => strFill('a', -1)).toThrow(RangeError)
      expect(() => strFill('a', Number.POSITIVE_INFINITY)).toThrow(RangeError)
      expect(() => strFill('a', Number.NEGATIVE_INFINITY)).toThrow(RangeError)
    })
  })

  describe('Empty, whitespace-only, and coerced inputs', () => {
    it('should normalize nullish values to an empty string before repeating', () => {
      expect(strFill(null, 3)).toBe('')
      expect(strFill(undefined, 3)).toBe('')
    })

    it('should return an empty string when filling an empty string with any valid count', () => {
      expect(strFill('', 0)).toBe('')
      expect(strFill('', 10)).toBe('')
    })

    it('should repeat whitespace characters accurately', () => {
      expect(strFill(' ', 4)).toBe('    ')
      expect(strFill('\t', 2)).toBe('\t\t')
      expect(strFill('\n', 2)).toBe('\n\n')
    })

    it('should coerce non-string runtime values via String()', () => {
      expect(strFill(7, 3)).toBe('777')
      expect(strFill(true, 2)).toBe('truetrue')
      expect(strFill(0, 2)).toBe('00')
      expect(strFill(false, 2)).toBe('falsefalse')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should repeat Unicode, Cyrillic, Vietnamese, CJK, and Emoji strings accurately', () => {
      expect(strFill('Я', 3)).toBe('ЯЯЯ')
      expect(strFill('ă', 3)).toBe('ăăă')
      expect(strFill('你', 2)).toBe('你你')
      expect(strFill('🚀', 3)).toBe('🚀🚀🚀')
    })
  })
})
