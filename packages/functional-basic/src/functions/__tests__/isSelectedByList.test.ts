import { describe, it, expect } from 'vitest'
import { isSelectedByList } from '../isSelectedByList'

describe('isSelectedByList', () => {
  it('should return true if a single value is selected (matching string)', () => {
    expect(isSelectedByList('apple', 'apple')).toBe(true)
  })

  it('should return true if a single value is within the selected array', () => {
    expect(isSelectedByList('apple', ['banana', 'apple', 'cherry'])).toBe(true)
  })

  it('should return false if a single value is not within the selected array', () => {
    expect(isSelectedByList('date', ['banana', 'apple', 'cherry'])).toBe(false)
  })

  it('should return true if all values in the array are selected (matching string)', () => {
    // Both items must equal the selected string
    expect(isSelectedByList(['apple', 'apple'], 'apple')).toBe(true)
  })

  it('should return true if all values in the array are within the selected array', () => {
    expect(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])).toBe(true)
  })

  it('should return false if at least one value in the array is not within the selected array', () => {
    expect(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])).toBe(false)
  })

  it('should handle numeric conversions if `isSelected` handles them', () => {
    expect(isSelectedByList([1, '2'], [1, 2, 3])).toBe(true)
  })
})
