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

  it('should return 0 if an empty array is passed', () => {
    expect(getMinLengthAllArray([])).toBe(0)
  })

  it('should return the length of the shortest string in a large array (>10,000)', () => {
    const data = new Array(11000).fill('aaaa')
    data[5000] = 'abc'
    expect(getMinLengthAllArray(data)).toBe(3)
  })
})
