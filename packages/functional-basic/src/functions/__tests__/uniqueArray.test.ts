import { describe, it, expect } from 'vitest'
import { uniqueArray } from '../uniqueArray'

describe('uniqueArray', () => {
  it('should remove duplicate values from an array', () => {
    expect(uniqueArray([1, 2, 2, 3, 1])).toEqual([1, 2, 3])
    expect(uniqueArray(['a', 'b', 'a'])).toEqual(['a', 'b'])
  })

  it('should handle empty arrays', () => {
    expect(uniqueArray([])).toEqual([])
  })
})
