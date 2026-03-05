import { describe, it, expect } from 'vitest'
import { isNull } from '../isNull'

describe('isNull', () => {
  it('should return true for null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isNull(undefined)).toBe(true)
  })

  it('should return false for 0', () => {
    expect(isNull(0)).toBe(false)
  })

  it('should return false for false', () => {
    expect(isNull(false)).toBe(false)
  })

  it('should return false for empty strings', () => {
    expect(isNull('')).toBe(false)
  })

  it('should return false for empty objects and arrays', () => {
    expect(isNull({})).toBe(false)
    expect(isNull([])).toBe(false)
  })
})
