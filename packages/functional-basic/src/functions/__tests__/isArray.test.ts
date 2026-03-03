import { describe, it, expect } from 'vitest'
import { isArray } from '../isArray'

describe('isArray', () => {
  it('should return true for an array', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('should return false for an object', () => {
    expect(isArray({})).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isArray('string')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isArray(123)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isArray(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isArray(undefined)).toBe(false)
  })
})
