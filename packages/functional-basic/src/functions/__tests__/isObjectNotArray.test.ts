import { describe, it, expect } from 'vitest'
import { isObjectNotArray } from '../isObjectNotArray'

describe('isObjectNotArray', () => {
  it('should return true for plain objects', () => {
    expect(isObjectNotArray({})).toBe(true)
    expect(isObjectNotArray({ a: 1 })).toBe(true)
  })

  it('should return false for arrays', () => {
    expect(isObjectNotArray([])).toBe(false)
    expect(isObjectNotArray([1, 2, 3])).toBe(false)
  })

  it('should return false for null', () => {
    expect(isObjectNotArray(null)).toBe(false)
  })

  it('should return false for primitive values', () => {
    expect(isObjectNotArray(123)).toBe(false)
    expect(isObjectNotArray('string')).toBe(false)
    expect(isObjectNotArray(true)).toBe(false)
    expect(isObjectNotArray(undefined)).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isObjectNotArray(() => { })).toBe(false)
  })
})
