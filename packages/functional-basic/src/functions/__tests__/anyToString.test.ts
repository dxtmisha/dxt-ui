import { describe, it, expect } from 'vitest'
import { anyToString } from '../anyToString'

describe('anyToString', () => {
  it('should return a trimmed string if the input is a string', () => {
    expect(anyToString(' test ')).toBe('test')
    expect(anyToString('test')).toBe('test')
  })

  it('should NOT trim the string if trim is false', () => {
    expect(anyToString(' test ', true, false)).toBe(' test ')
  })

  it('should join an array with commas if it contains no objects and isArrayString is true', () => {
    expect(anyToString([1, 2, 3])).toBe('1,2,3')
    expect(anyToString(['a', 'b'])).toBe('a,b')
    expect(anyToString([])).toBe('')
  })

  it('should return stringified JSON for an array if isArrayString is false', () => {
    expect(anyToString([1, 2, 3], false)).toBe('[1,2,3]')
    expect(anyToString(['a', 'b'], false)).toBe('["a","b"]')
  })

  it('should return stringified JSON for an object', () => {
    expect(anyToString({ a: 1 })).toBe('{"a":1}')
  })

  it('should return stringified JSON for an array containing objects, regardless of isArrayString', () => {
    expect(anyToString([{ a: 1 }, 2])).toBe('[{"a":1},2]')
    expect(anyToString([{ a: 1 }, 2], false)).toBe('[{"a":1},2]')
  })

  it('should return stringified JSON for nested arrays', () => {
    expect(anyToString([[1], [2]])).toBe('[[1],[2]]')
  })

  it('should return "1" for true', () => {
    expect(anyToString(true)).toBe('1')
  })

  it('should return "0" for false', () => {
    expect(anyToString(false)).toBe('0')
  })

  it('should handle BigInt values', () => {
    expect(anyToString(BigInt(123))).toBe('123')
  })

  it('should handle Symbol values', () => {
    const sym = Symbol('test')
    expect(anyToString(sym)).toBe('Symbol(test)')
  })

  it('should handle functions', () => {
    const fn = () => 'test'
    expect(anyToString(fn)).toContain('() =>')
  })

  it('should return fallback toString() of the value if appropriate', () => {
    expect(anyToString(123)).toBe('123')
    expect(anyToString(0)).toBe('0')
  })

  it('should handle circular references by falling back to String()', () => {
    const obj: any = { a: 1 }
    obj.self = obj
    expect(anyToString(obj)).toBe('[object Object]')
  })

  it('should return an empty string for null or undefined', () => {
    expect(anyToString(null)).toBe('')
    expect(anyToString(undefined)).toBe('')
  })
})
