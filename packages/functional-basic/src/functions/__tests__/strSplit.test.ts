import { describe, expect, it } from 'vitest'
import { strSplit } from '../strSplit'

describe('strSplit', () => {
  describe('Standard functional requirements (Splitting with and without limit)', () => {
    it('should split string into individual characters when separator is omitted or empty', () => {
      expect(strSplit('abc')).toEqual(['a', 'b', 'c'])
      expect(strSplit('abc', '')).toEqual(['a', 'b', 'c'])
    })

    it('should split string by delimiter when limit is omitted', () => {
      expect(strSplit('a.b.c', '.')).toEqual(['a', 'b', 'c'])
      expect(strSplit('one::two::three', '::')).toEqual(['one', 'two', 'three'])
    })

    it('should split string up to limit and join remaining parts in the last element (PHP explode style)', () => {
      expect(strSplit('a.b.c.d', '.', 2)).toEqual(['a', 'b.c.d'])
      expect(strSplit('a.b.c.d', '.', 3)).toEqual(['a', 'b', 'c.d'])
      expect(strSplit('one::two::three::four', '::', 2)).toEqual(['one', 'two::three::four'])
      expect(strSplit('abc', '', 2)).toEqual(['a', 'bc'])
    })

    it('should return the original string in a single-element array if separator is not found', () => {
      expect(strSplit('a.b.c', '-')).toEqual(['a.b.c'])
      expect(strSplit('a.b.c', '-', 2)).toEqual(['a.b.c'])
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return the full string inside a single-element array when limit is 1', () => {
      expect(strSplit('a.b.c.d', '.', 1)).toEqual(['a.b.c.d'])
    })

    it('should split completely when limit is 0 or negative', () => {
      expect(strSplit('a.b.c', '.', 0)).toEqual(['a', 'b', 'c'])
      expect(strSplit('a.b.c', '.', -1)).toEqual(['a', 'b', 'c'])
      expect(strSplit('a.b.c', '.', -100)).toEqual(['a', 'b', 'c'])
    })

    it('should return all split parts when total parts count equals or is less than limit', () => {
      expect(strSplit('a.b.c', '.', 3)).toEqual(['a', 'b', 'c'])
      expect(strSplit('a.b', '.', 5)).toEqual(['a', 'b'])
    })

    it('should preserve empty segments from leading, trailing, or consecutive separators', () => {
      expect(strSplit('.a..b.', '.')).toEqual(['', 'a', '', 'b', ''])
      expect(strSplit('.a..b.', '.', 3)).toEqual(['', 'a', '.b.'])
    })
  })

  describe('Type coercion, empty, and nullish inputs', () => {
    it('should handle empty string and no-argument calls safely', () => {
      expect(strSplit()).toEqual([])
      expect(strSplit('', '.')).toEqual([''])
    })

    it('should return an array with an empty string for undefined and null when separator is non-empty', () => {
      expect(strSplit(undefined, '.')).toEqual([''])
      expect(strSplit(null, '.')).toEqual([''])
    })

    it('should convert numeric values (including 0) via anyToString before splitting', () => {
      expect(strSplit(123.456, '.')).toEqual(['123', '456'])
      expect(strSplit(0, '.')).toEqual(['0'])
    })

    it('should convert boolean values via anyToString ("1" and "0") before splitting', () => {
      expect(strSplit(true, '.')).toEqual(['1'])
      expect(strSplit(false, '.')).toEqual(['0'])
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should split Unicode, Cyrillic, Vietnamese, and Emoji strings accurately with limit', () => {
      expect(strSplit('Привет мир тест', ' ', 2)).toEqual(['Привет', 'мир тест'])
      expect(strSplit('Xin-chào-Việt-Nam', '-', 3)).toEqual(['Xin', 'chào', 'Việt-Nam'])
    })
  })
})
