import { describe, it, expect } from 'vitest'
import { isSelected } from '../isSelected'

describe('isSelected', () => {
  it('should return false if value is null or undefined', () => {
    expect(isSelected(null, 1)).toBe(false)
    expect(isSelected(undefined, 1)).toBe(false)
  })

  it('should return true if value is directly equal to selected (strings/booleans)', () => {
    expect(isSelected('apple', 'apple')).toBe(true)
    expect(isSelected('apple', 'banana')).toBe(false)
    expect(isSelected(true, true)).toBe(true)
    expect(isSelected(true, false)).toBe(false)
  })

  it('should return true if value and selected are numeric strings/numbers that are equal after parsing', () => {
    // These tests rely on the toNumber function behavior. Assuming it successfully parses numeric strings.
    expect(isSelected(5, 5)).toBe(true)
    expect(isSelected('5', 5)).toBe(true) // '5' converts to 5 if `isNumber` allows '5'
    expect(isSelected(5, '5')).toBe(true)
    expect(isSelected('5', '6')).toBe(false)
  })

  it('should return true if value is included in the selected array', () => {
    expect(isSelected(2, [1, 2, 3])).toBe(true)
    expect(isSelected('apple', ['banana', 'apple', 'cherry'])).toBe(true)
  })

  it('should return false if value is not included in the selected array', () => {
    expect(isSelected(4, [1, 2, 3])).toBe(false)
    expect(isSelected('date', ['banana', 'apple', 'cherry'])).toBe(false)
  })
})
