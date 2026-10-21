import { describe, expect, it } from 'vitest'
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

  it('should return full string in single element array when limit is 1', () => {
    expect(strSplit('a.b.c.d', '.', 1)).toEqual(['a.b.c.d'])
  })

  it('should split fully when limit is 0 or negative', () => {
    expect(strSplit('a.b.c', '.', 0)).toEqual(['a', 'b', 'c'])
    expect(strSplit('a.b.c', '.', -1)).toEqual(['a', 'b', 'c'])
  })

  it('should return full array when string has fewer parts than limit', () => {
    expect(strSplit('a.b', '.', 5)).toEqual(['a', 'b'])
  })

  it('should work with numeric value', () => {
    expect(strSplit(123.456, '.')).toEqual(['123', '456'])
  })

  it('should return the original string in an array if the separator is not found', () => {
    expect(strSplit('a.b.c', '-', 2)).toEqual(['a.b.c'])
  })

  it('should return an empty string array for undefined and null', () => {
    expect(strSplit(undefined, '.')).toEqual([''])
    expect(strSplit(null, '.')).toEqual([''])
  })

  it('should work with boolean values via anyToString without type casting', () => {
    expect(strSplit(true, '.')).toEqual(['1'])
    expect(strSplit(false, '.')).toEqual(['0'])
  })

  it('should work with empty string and empty separator', () => {
    expect(strSplit('', '.')).toEqual([''])
    expect(strSplit('abc', '', 2)).toEqual(['a', 'bc'])
  })
})
