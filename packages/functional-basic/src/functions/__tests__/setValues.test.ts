import { describe, expect, it } from 'vitest'
import { setValues } from '../setValues'

describe('setValues', () => {
  describe('Single selection mode (multiple: false / default)', () => {
    it('should return the new value when options parameter is omitted', () => {
      expect(setValues('current', 'next')).toBe('next')
      expect(setValues(undefined, 'next')).toBe('next')
    })

    it('should update value when alwaysChange is false and values differ', () => {
      expect(setValues('a', 'b', { alwaysChange: false })).toBe('b')
      expect(setValues(undefined, 'b', { alwaysChange: false })).toBe('b')
    })

    it('should preserve existing reference if alwaysChange is false and values are strictly equal', () => {
      const selected = { id: 1 }
      expect(setValues(selected, selected, { alwaysChange: false })).toBe(selected)
      expect(setValues('same', 'same', { alwaysChange: false })).toBe('same')
    })

    it('should return new value when alwaysChange is true even if values match', () => {
      expect(setValues('same', 'same', { alwaysChange: true })).toBe('same')
    })
  })

  describe('Multiple selection mode (multiple: true) with array input', () => {
    it('should append a new value when not already present in the array', () => {
      const original = ['a']
      const result = setValues(original, 'b', { multiple: true })

      expect(result).toEqual(['a', 'b'])
      expect(result).not.toBe(original)
      expect(original).toEqual(['a'])
    })

    it('should remove an existing value (toggle off) without mutating the source array', () => {
      const original = ['a', 'b', 'c']
      const result = setValues(original, 'b', { multiple: true })

      expect(result).toEqual(['a', 'c'])
      expect(result).not.toBe(original)
      expect(original).toEqual(['a', 'b', 'c'])
    })

    it('should enforce maxlength constraint when adding new items', () => {
      expect(setValues(['a', 'b'], 'c', { multiple: true, maxlength: 2 })).toEqual(['a', 'b'])
      expect(setValues(['a'], 'b', { multiple: true, maxlength: 2 })).toEqual(['a', 'b'])
    })

    it('should allow removing an existing item even when array length equals maxlength', () => {
      expect(setValues(['a', 'b'], 'a', { multiple: true, maxlength: 2 })).toEqual(['b'])
    })

    it('should prevent removing the last remaining item when notEmpty is true', () => {
      expect(setValues(['a'], 'a', { multiple: true, notEmpty: true })).toEqual(['a'])
    })

    it('should allow removing an item when array has more than 1 item and notEmpty is true', () => {
      expect(setValues(['a', 'b'], 'a', { multiple: true, notEmpty: true })).toEqual(['b'])
    })
  })

  describe('Multiple selection mode (multiple: true) with scalar, falsy, and nullish values', () => {
    it('should preserve falsy scalar values (0, false, empty string) when adding a second item', () => {
      expect(setValues(0, 1, { multiple: true })).toEqual([0, 1])
      expect(setValues(false, true, { multiple: true })).toEqual([false, true])
      expect(setValues('', 'next', { multiple: true })).toEqual(['', 'next'])
    })

    it('should initialize a single-element array when selected is undefined or null', () => {
      expect(setValues(undefined, 'first', { multiple: true })).toEqual(['first'])
      expect(setValues<string | null>(null, 'first', { multiple: true })).toEqual(['first'])
    })

    it('should toggle off to an empty array when scalar selected equals value and notEmpty is false', () => {
      expect(setValues('a', 'a', { multiple: true })).toEqual([])
      expect(setValues(0, 0, { multiple: true })).toEqual([])
    })

    it('should keep scalar in single-element array when selected equals value and notEmpty is true', () => {
      expect(setValues('a', 'a', { multiple: true, notEmpty: true })).toEqual(['a'])
      expect(setValues(0, 0, { multiple: true, notEmpty: true })).toEqual([0])
    })

    it('should return empty array when both selected and value are undefined even if notEmpty is true', () => {
      expect(setValues(undefined, undefined, { multiple: true, notEmpty: true })).toEqual([])
    })

    it('should replace scalar with new value in array when maxlength is 1', () => {
      expect(setValues('a', 'b', { multiple: true, maxlength: 1 })).toEqual(['b'])
    })
  })
})
