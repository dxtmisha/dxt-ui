import { describe, it, expect } from 'vitest'
import { isObject } from '../isObject'

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 1 })).toBe(true)
  })

  it('should return true for arrays (arrays are objects in JS)', () => {
    // Note: The function implementation checks `typeof value === 'object'`, which is true for arrays.
    expect(isObject([])).toBe(true)
    expect(isObject([1, 2, 3])).toBe(true)
  })

  it('should return false for null (even though typeof null === "object", the function uses `value && ...`)', () => {
    expect(isObject(null)).toBe(false)
  })

  it('should return false for primitive values', () => {
    expect(isObject(123)).toBe(false)
    expect(isObject('string')).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject(Symbol('foo'))).toBe(false)
  })

  it('should return false for functions', () => {
    expect(isObject(() => { })).toBe(false)
  })
})
