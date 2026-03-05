import { describe, it, expect } from 'vitest'
import { getMinLengthAllArray } from '../getMinLengthAllArray'

describe('getMinLengthAllArray', () => {
  it('should return the length of the shortest string in the array', () => {
    const data = ['apple', 'abc', 'banana']
    expect(getMinLengthAllArray(data)).toBe(3)
  })

  it('should return 0 if the array contains at least one empty string', () => {
    expect(getMinLengthAllArray(['short', '', 'longest'])).toBe(0)
  })

  it('should return Infinity if an empty array is passed', () => {
    // Math.min() with no arguments returns Infinity
    expect(getMinLengthAllArray([])).toBe(Infinity)
  })
})
