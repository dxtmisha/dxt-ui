import { describe, it, expect } from 'vitest'
import { isPrototypeKey } from '../isPrototypeKey'

describe('isPrototypeKey', () => {
  it('should return true for prototype pollution keys', () => {
    expect(isPrototypeKey('__proto__')).toBe(true)
    expect(isPrototypeKey('constructor')).toBe(true)
    expect(isPrototypeKey('prototype')).toBe(true)
  })

  it('should return false for safe property names and non-prototype keys', () => {
    expect(isPrototypeKey('id')).toBe(false)
    expect(isPrototypeKey('title')).toBe(false)
    expect(isPrototypeKey('toString')).toBe(false)
    expect(isPrototypeKey('valueOf')).toBe(false)
    expect(isPrototypeKey('hasOwnProperty')).toBe(false)
    expect(isPrototypeKey('')).toBe(false)
  })

  it('should return false for numbers, symbols, null, and undefined', () => {
    expect(isPrototypeKey(0)).toBe(false)
    expect(isPrototypeKey(123)).toBe(false)
    expect(isPrototypeKey(null)).toBe(false)
    expect(isPrototypeKey(undefined)).toBe(false)
    expect(isPrototypeKey(Symbol('constructor'))).toBe(false)
    expect(isPrototypeKey(Symbol('__proto__'))).toBe(false)
  })
})
