import { describe, it, expect } from 'vitest'
import { anyToString } from '../anyToString'

describe('anyToString', () => {
  it('should return a trimmed string if the input is a string', () => {
    expect(anyToString(' test ')).toBe('test')
    expect(anyToString('test')).toBe('test')
  })

  it('should join an array with commas if it contains no objects', () => {
    expect(anyToString([1, 2, 3])).toBe('1,2,3')
    expect(anyToString(['a', 'b'])).toBe('a,b')
  })

  it('should return stringified JSON for an object', () => {
    expect(anyToString({ a: 1 })).toBe('{"a":1}')
  })

  it('should return stringified JSON for an array containing objects', () => {
    expect(anyToString([{ a: 1 }, 2])).toBe('[{"a":1},2]')
  })

  it('should return "1" for true', () => {
    expect(anyToString(true)).toBe('1')
  })

  it('should return "0" for false', () => {
    expect(anyToString(false)).toBe('0')
  })

  it('should return fallback toString() of the value if appropriate', () => {
    expect(anyToString(123)).toBe('123')
  })

  it('should return an empty string for null or undefined', () => {
    expect(anyToString(null)).toBe('')
    expect(anyToString(undefined)).toBe('')
  })
})
