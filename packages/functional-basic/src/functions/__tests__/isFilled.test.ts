import { describe, it, expect } from 'vitest'
import { isFilled } from '../isFilled'

describe('isFilled', () => {
  it('should return false for null and undefined', () => {
    expect(isFilled(null)).toBe(false)
    expect(isFilled(undefined)).toBe(false)
  })

  it('should return false for empty strings and specific falsy string values', () => {
    expect(isFilled('')).toBe(false)
    expect(isFilled('undefined')).toBe(false)
    expect(isFilled('null')).toBe(false)
    expect(isFilled('false')).toBe(false)
    expect(isFilled('[]')).toBe(false)

    // By default '0' is not filled
    expect(isFilled('0')).toBe(false)
  })

  it('should return true for valid strings', () => {
    expect(isFilled('hello')).toBe(true)
    expect(isFilled(' 123 ')).toBe(true)
  })

  it('should handle "0" string correctly based on zeroTrue argument', () => {
    expect(isFilled('0', false)).toBe(false)
    expect(isFilled('0', true)).toBe(true)
  })

  it('should handle numbers correctly', () => {
    expect(isFilled(0)).toBe(false)
    expect(isFilled(1)).toBe(true)
    expect(isFilled(-1)).toBe(true)
    expect(isFilled(NaN)).toBe(false)
  })

  it('should be false for NaN (since NaN is falsy)', () => {
    expect(isFilled(NaN)).toBe(false)
  })

  it('should handle booleans correctly', () => {
    expect(isFilled(true)).toBe(true)
    expect(isFilled(false)).toBe(false) // `if (value)` is false for `false`
  })

  it('should handle arrays correctly', () => {
    expect(isFilled([])).toBe(false) // though `if([])` is true, `value.length > 0` is false
    expect(isFilled([1, 2, 3])).toBe(true)
  })

  it('should handle objects correctly', () => {
    expect(isFilled({})).toBe(false)
    expect(isFilled({ a: 1 })).toBe(true)
    expect(isFilled({ a: null, b: undefined })).toBe(false) // all values are null/undefined
    expect(isFilled({ a: null, b: 2 })).toBe(true) // at least one value is not null
  })

  it('should handle functions and symbols', () => {
    expect(isFilled(() => { })).toBe(true)
    expect(isFilled(Symbol('test'))).toBe(true)
  })
})
