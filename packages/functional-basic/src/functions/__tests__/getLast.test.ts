import { describe, it, expect } from 'vitest'
import { getLast } from '../getLast'

describe('getLast', () => {
  it('should return the last element of an array', () => {
    expect(getLast([1, 2, 3])).toBe(3)
    expect(getLast(['a', 'b', 'c'])).toBe('c')
  })

  it('should return the last element of an object', () => {
    expect(getLast({ a: 1, b: 2 })).toBe(2)
    expect(getLast({ first: 'value', second: 'other' })).toBe('other')
  })

  it('should return the value itself if it is not an array or object', () => {
    expect(getLast('string')).toBe('string')
    expect(getLast(123)).toBe(123)
    expect(getLast(true)).toBe(true)
  })

  it('should return undefined for an empty array', () => {
    expect(getLast([])).toBeUndefined()
  })

  it('should return undefined for an empty object', () => {
    expect(getLast({})).toBeUndefined()
  })

  it('should return null for null', () => {
    expect(getLast(null)).toBeNull()
  })

  it('should return undefined for undefined', () => {
    expect(getLast(undefined)).toBeUndefined()
  })
})
