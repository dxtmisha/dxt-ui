import { describe, it, expect } from 'vitest'
import { strSplit } from '../strSplit'

describe('strSplit', () => {
  it('should split string without limit', () => {
    expect(strSplit('a.b.c', '.')).toEqual(['a', 'b', 'c'])
  })

  it('should split string with limit 2 (PHP style)', () => {
    expect(strSplit('a.b.c.d', '.', 2)).toEqual(['a', 'b.c.d'])
  })

  it('should split string with limit 3 (PHP style)', () => {
    expect(strSplit('a.b.c.d', '.', 3)).toEqual(['a', 'b', 'c.d'])
  })

  it('should work with numeric value', () => {
    expect(strSplit(123.456, '.')).toEqual(['123', '456'])
  })

  it('should return the original string in an array if the separator is not found', () => {
    expect(strSplit('a.b.c', '-', 2)).toEqual(['a.b.c'])
  })

  it('should return an empty string array for undefined', () => {
    expect(strSplit(undefined as any, '.')).toEqual([''])
  })

  it('it should work with boolean values via anyToString', () => {
    expect(strSplit(true as any, '.')).toEqual(['1'])
    expect(strSplit(false as any, '.')).toEqual(['0'])
  })
})
