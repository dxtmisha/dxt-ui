import { describe, it, expect } from 'vitest'
import { isNumber } from '../isNumber'

describe('isNumber', () => {
  it('should return true for actual numbers', () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-50)).toBe(true)
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(NaN)).toBe(true) // typeof NaN is 'number'
  })

  it('should return true for strings that contain only digits', () => {
    expect(isNumber('123')).toBe(true)
    expect(isNumber('0')).toBe(true)
  })

  it('should return true for negative and fractional numbers in strings', () => {
    expect(isNumber('-123')).toBe(true)
    expect(isNumber('3.14')).toBe(true)
    expect(isNumber('-0.5')).toBe(true)
  })

  it('should return false for strings with invalid characters or multiple dots', () => {
    expect(isNumber('123a')).toBe(false)
    expect(isNumber('3.14.15')).toBe(false)
    expect(isNumber('-')).toBe(false)
  })

  it('should return false for non-number types', () => {
    expect(isNumber(true)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber({})).toBe(false)
  })
})
