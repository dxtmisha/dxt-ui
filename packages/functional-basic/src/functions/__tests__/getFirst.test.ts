import { describe, it, expect } from 'vitest'
import { getFirst } from '../getFirst'

describe('getFirst', () => {
  it('should return the first element of an array', () => {
    expect(getFirst([1, 2, 3])).toBe(1)
    expect(getFirst(['a', 'b', 'c'])).toBe('a')
  })

  it('should return the first element of an object', () => {
    expect(getFirst({ a: 1, b: 2 })).toBe(1)
    expect(getFirst({ first: 'value', second: 'other' })).toBe('value')
  })

  it('should return the value itself if it is not an array or object', () => {
    expect(getFirst('string')).toBe('string')
    expect(getFirst(123)).toBe(123)
    expect(getFirst(true)).toBe(true)
  })

  it('should return undefined for an empty array', () => {
    expect(getFirst([])).toBeUndefined()
  })

  it('should return undefined for an empty object', () => {
    expect(getFirst({})).toBeUndefined()
  })

  it('should return null for null', () => {
    expect(getFirst(null)).toBeNull()
  })

  it('should return undefined for undefined', () => {
    expect(getFirst(undefined)).toBeUndefined()
  })
})
