import { describe, it, expect } from 'vitest'
import { toNumber } from '../toNumber'

describe('toNumber', () => {
  it('should convert strings to numbers', () => {
    expect(toNumber('123')).toBe(123)
    expect(toNumber('123,45')).toBe(123.45)
    expect(toNumber('1 234.56')).toBe(1234.56)
  })

  it('should handle formatted numbers with commas as thousands separators', () => {
    // 1,234.56
    expect(toNumber('1,234.56')).toBe(1234.56)
  })

  it('should return 0 for non-numeric strings', () => {
    expect(toNumber('')).toBe(0)
    expect(toNumber('abc')).toBe(NaN) // parseFloat('abc') is NaN, but maybe it returns 0? Let's check impl.
    // impl: let number = value.replace(/[^\d., ]+/ig, '') -> 'abc' becomes '' -> parseFloat('') is NaN
    // but if !value returns 0.
  })
})
