import { describe, it, expect } from 'vitest'
import { isString } from '../isString'

describe('isString', () => {
  it('should return true for basic strings', () => {
    expect(isString('hello')).toBe(true)
    expect(isString('')).toBe(true)
    expect(isString(`template ${1}`)).toBe(true)
  })

  it('should return false for numbers', () => {
    expect(isString(123)).toBe(false)
    expect(isString(NaN)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)
  })

  it('should return false for objects and arrays', () => {
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
  })

  it('should return false for null and undefined', () => {
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
  })

  it('should return false for instances of String object', () => {
    // Note: `typeof new String('abc')` is 'object'.
    expect(isString(new String('abc'))).toBe(false)
  })
})
