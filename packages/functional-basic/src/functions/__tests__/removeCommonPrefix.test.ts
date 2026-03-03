import { describe, it, expect } from 'vitest'
import { removeCommonPrefix } from '../removeCommonPrefix'

describe('removeCommonPrefix', () => {
  it('should remove a full prefix and trim the result', () => {
    const result = removeCommonPrefix('hello World', 'hello')

    expect(result).toBe('World')
  })

  it('should remove the full prefix without spaces', () => {
    const result = removeCommonPrefix('helloWorld', 'hello')

    expect(result).toBe('World')
  })

  it('should return trimmed mainStr when the prefix does not match', () => {
    const result = removeCommonPrefix('helloWorld', 'goodbye')

    expect(result).toBe('helloWorld')
  })

  it('should remove the common prefix when a partial match exists', () => {
    const result = removeCommonPrefix('helloWorld', 'helium')

    expect(result).toBe('loWorld')
  })

  it('should return an empty string when mainStr equals prefix', () => {
    const result = removeCommonPrefix('hello', 'hello')

    expect(result).toBe('')
  })

  it('should return trimmed mainStr when the prefix is empty', () => {
    const result = removeCommonPrefix('hello', '')

    expect(result).toBe('hello')
  })

  it('should return an empty string when both strings are empty', () => {
    const result = removeCommonPrefix('', '')

    expect(result).toBe('')
  })

  it('should handle a case when the prefix is longer than mainStr', () => {
    const result = removeCommonPrefix('hi', 'hello')

    expect(result).toBe('i')
  })

  it('should handle Unicode characters and trim a result', () => {
    const result = removeCommonPrefix('привет, мир', 'привет')

    expect(result).toBe('мир')
  })

  it('should handle special characters', () => {
    const result = removeCommonPrefix('/path/to/file', '/path/to')

    expect(result).toBe('/file')
  })

  it('should remove only common characters when no full match', () => {
    const result = removeCommonPrefix('abcdef', 'abcxyz')

    expect(result).toBe('def')
  })

  it('should trim leading and trailing spaces from a result', () => {
    const result = removeCommonPrefix('prefix   suffix   ', 'prefix')

    expect(result).toBe('suffix')
  })

  it('should handle a case with only spaces after prefix removal', () => {
    const result = removeCommonPrefix('hello   ', 'hello')

    expect(result).toBe('')
  })
})
