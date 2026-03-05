import { describe, it, expect } from 'vitest'
import { getMaxLengthAllArray } from '../getMaxLengthAllArray'

describe('getMaxLengthAllArray', () => {
  it('should return the length of the longest string in the array', () => {
    const data = ['a', 'abc', 'ab']
    expect(getMaxLengthAllArray(data)).toBe(3)
  })

  it('should return 0 for an array of empty strings', () => {
    expect(getMaxLengthAllArray(['', '', ''])).toBe(0)
  })

  it('should return -Infinity if an empty array is passed', () => {
    // Math.max() with no arguments returns `-Infinity`
    expect(getMaxLengthAllArray([])).toBe(-Infinity)
  })
})
