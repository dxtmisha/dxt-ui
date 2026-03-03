import { describe, it, expect } from 'vitest'
import { arrFill } from '../arrFill'

describe('arrFill', () => {
  it('should create an array of specified length filled with the given value', () => {
    const result = arrFill('a', 3)
    expect(result).toEqual(['a', 'a', 'a'])
    expect(result).toHaveLength(3)
  })

  it('it should work with numbers', () => {
    const result = arrFill(1, 5)
    expect(result).toEqual([1, 1, 1, 1, 1])
  })

  it('should work with objects', () => {
    const obj = { key: 'value' }
    const result = arrFill(obj, 2)
    expect(result).toEqual([obj, obj])
    expect(result[0]).toBe(obj) // References should be the same
  })

  it('should return an empty array if the count is 0', () => {
    const result = arrFill('a', 0)
    expect(result).toEqual([])
  })

  it('should return an empty array if the count is negative', () => {
    expect(() => arrFill('a', -1)).toThrow()
  })
})
