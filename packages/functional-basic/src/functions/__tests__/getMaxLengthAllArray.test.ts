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

  it('should return 0 if an empty array is passed', () => {
    expect(getMaxLengthAllArray([])).toBe(0)
  })

  it('should return the length of the longest string in a large array (>10,000)', () => {
    const data = new Array(11000).fill('a')
    data[5000] = 'abc'
    expect(getMaxLengthAllArray(data)).toBe(3)
  })
})
