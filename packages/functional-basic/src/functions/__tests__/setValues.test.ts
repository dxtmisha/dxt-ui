import { describe, expect, it } from 'vitest'
import { setValues } from '../setValues'

describe('setValues', () => {
  describe('default arguments & crash prevention', () => {
    it('should not crash when options parameter is omitted', () => {
      expect(setValues('current', 'next')).toBe('next')
      expect(setValues(undefined, 'next')).toBe('next')
    })
  })

  describe('single selection (multiple: false)', () => {
    it('should return value for single select', () => {
      expect(setValues(undefined, 'a')).toBe('a')
      expect(setValues('b', 'a')).toBe('a')
    })

    it('should preserve reference if alwaysChange is false and values match', () => {
      const selected = { id: 1 }
      expect(setValues(selected, selected, { alwaysChange: false })).toBe(selected)
    })
  })

  describe('multiple selection (multiple: true) with array', () => {
    it('should handle multiple selection (add)', () => {
      expect(setValues(['a'], 'b', { multiple: true })).toEqual(['a', 'b'])
    })

    it('should handle multiple selection (remove)', () => {
      expect(setValues(['a', 'b'], 'a', { multiple: true })).toEqual(['b'])
    })

    it('should handle maxlength in multiple selection', () => {
      expect(setValues(['a', 'b'], 'c', { multiple: true, maxlength: 2 })).toEqual(['a', 'b'])
    })

    it('should allow toggle-off even if array length equals maxlength', () => {
      expect(setValues(['a', 'b'], 'a', { multiple: true, maxlength: 2 })).toEqual(['b'])
    })

    it('should handle notEmpty in multiple selection', () => {
      expect(setValues(['a'], 'a', { multiple: true, notEmpty: true })).toEqual(['a'])
    })

    it('should allow removing an item when array has more than 1 item and notEmpty is true', () => {
      expect(setValues(['a', 'b'], 'a', { multiple: true, notEmpty: true })).toEqual(['b'])
    })
  })

  describe('multiple selection (multiple: true) with scalar / falsy values', () => {
    it('should correctly handle numeric 0 without losing it', () => {
      expect(setValues(0, 1, { multiple: true })).toEqual([0, 1])
    })

    it('should correctly handle boolean false without losing it', () => {
      expect(setValues(false, true, { multiple: true })).toEqual([false, true])
    })

    it('should correctly handle empty string "" without losing it', () => {
      expect(setValues('', 'next', { multiple: true })).toEqual(['', 'next'])
    })

    it('should initialize array when selected is undefined', () => {
      expect(setValues(undefined, 'first', { multiple: true })).toEqual(['first'])
    })

    it('should toggle off to empty array when selected equals value', () => {
      expect(setValues('a', 'a', { multiple: true })).toEqual([])
    })

    it('should respect notEmpty when selected equals value on a scalar', () => {
      expect(setValues('a', 'a', { multiple: true, notEmpty: true })).toEqual(['a'])
    })

    it('should respect maxlength = 1 when combining with scalar', () => {
      expect(setValues('a', 'b', { multiple: true, maxlength: 1 })).toEqual(['b'])
    })
  })
})
