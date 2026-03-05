import { describe, it, expect } from 'vitest'
import { setValues } from '../setValues'

describe('setValues', () => {
  it('should return value for single select', () => {
    expect(setValues(undefined, 'a', {})).toBe('a')
    expect(setValues('b', 'a', {})).toBe('a')
  })

  it('should handle multiple selection (add)', () => {
    expect(setValues(['a'], 'b', { multiple: true })).toEqual(['a', 'b'])
  })

  it('should handle multiple selection (remove)', () => {
    expect(setValues(['a', 'b'], 'a', { multiple: true })).toEqual(['b'])
  })

  it('should handle maxlength in multiple selection', () => {
    expect(setValues(['a', 'b'], 'c', { multiple: true, maxlength: 2 })).toEqual(['a', 'b'])
  })

  it('should handle notEmpty in multiple selection', () => {
    expect(setValues(['a'], 'a', { multiple: true, notEmpty: true })).toEqual(['a'])
  })

  it('should return selected if alwaysChange is false and value is same', () => {
    const selected = 'a'
    expect(setValues(selected, 'a', { alwaysChange: false })).toBe(selected)
  })
})
