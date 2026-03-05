import { describe, it, expect } from 'vitest'
import { getLengthOfAllArray } from '../getLengthOfAllArray'

describe('getLengthOfAllArray', () => {
  it('should return an array of lengths from an array of strings', () => {
    const data = ['apple', 'banana', 'cherry']
    expect(getLengthOfAllArray(data)).toEqual([5, 6, 6])
  })

  it('should handle an array with empty strings', () => {
    const data = ['', 'a', '']
    expect(getLengthOfAllArray(data)).toEqual([0, 1, 0])
  })

  it('should return an empty array if an empty array is passed', () => {
    expect(getLengthOfAllArray([])).toEqual([])
  })

  it('should work with an object whose values are strings (due to ObjectOrArray behavior in forEach)', () => {
    const obj = { start: 'one', end: 'three' }
    expect(getLengthOfAllArray(obj)).toEqual([3, 5])
  })
})
