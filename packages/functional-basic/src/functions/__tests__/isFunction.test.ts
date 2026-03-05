import { describe, it, expect } from 'vitest'
import { isFunction } from '../isFunction'

describe('isFunction', () => {
  it('should return true for standard functions', () => {
    function testFunc() { }
    expect(isFunction(testFunc)).toBe(true)
  })

  it('should return true for arrow functions', () => {
    const arrowFunc = () => { }
    expect(isFunction(arrowFunc)).toBe(true)
  })

  it('should return true for async functions', () => {
    const asyncFunc = async () => { }
    expect(isFunction(asyncFunc)).toBe(true)
  })

  it('should return false for objects', () => {
    expect(isFunction({})).toBe(false)
    expect(isFunction({ call: () => { } })).toBe(false)
  })

  it('should return false for arrays', () => {
    expect(isFunction([])).toBe(false)
  })

  it('should return false for primitive values', () => {
    expect(isFunction('string')).toBe(false)
    expect(isFunction(123)).toBe(false)
    expect(isFunction(true)).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
  })
})
