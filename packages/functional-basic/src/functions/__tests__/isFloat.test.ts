import { describe, it, expect } from 'vitest'
import { isFloat } from '../isFloat'

describe('isFloat', () => {
  it('should return true for a number', () => {
    expect(isFloat(123)).toBe(true)
    expect(isFloat(123.45)).toBe(true)
  })

  it('should return true for a string representation of a number', () => {
    expect(isFloat('123')).toBe(true)
    expect(isFloat('123.45')).toBe(true)
  })

  it('should return false for a non-numeric string', () => {
    expect(isFloat('abc')).toBe(false)
    expect(isFloat('123a')).toBe(false)
  })

  it('should return false for other types', () => {
    expect(isFloat(null)).toBe(false)
    expect(isFloat(undefined)).toBe(false)
    expect(isFloat({})).toBe(false)
    expect(isFloat([])).toBe(false)
    expect(isFloat(true)).toBe(false)
  })
})
