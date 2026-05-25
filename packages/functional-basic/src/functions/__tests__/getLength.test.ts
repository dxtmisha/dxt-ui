import { describe, it, expect } from 'vitest'
import { getLength } from '../getLength'

describe('getLength', () => {
  it('should return 0 for null and undefined', () => {
    expect(getLength(null)).toBe(0)
    expect(getLength(undefined)).toBe(0)
  })

  it('should return length of an array', () => {
    expect(getLength([1, 2, 3])).toBe(3)
    expect(getLength([])).toBe(0)
  })

  it('should return length of a string', () => {
    expect(getLength('hello')).toBe(5)
    expect(getLength('')).toBe(0)
  })

  it('should return size of a Map', () => {
    const map = new Map()
    map.set('a', 1)
    map.set('b', 2)
    expect(getLength(map)).toBe(2)
  })

  it('should return size of a Set', () => {
    const set = new Set([1, 2, 3, 3])
    expect(getLength(set)).toBe(3)
  })

  it('should return key count of an object', () => {
    expect(getLength({ a: 1, b: 2, c: 3 })).toBe(3)
    expect(getLength({})).toBe(0)
  })

  it('should return 0 for other types like numbers or booleans', () => {
    expect(getLength(123)).toBe(0)
    expect(getLength(true)).toBe(0)
  })
})
