import { describe, it, expect } from 'vitest'
import { escapeExp } from '../escapeExp'

describe('escapeExp', () => {
  it('should escape square brackets', () => {
    expect(escapeExp('[a]')).toBe('\\[a\\]')
  })

  it('should escape backslash', () => {
    expect(escapeExp('a\\b')).toBe('a\\\\b')
  })

  it('should escape dot, star, plus, question mark', () => {
    expect(escapeExp('.*+?')).toBe('\\.\\*\\+\\?')
  })

  it('should escape caret and dollar', () => {
    expect(escapeExp('^start$')).toBe('\\^start\\$')
  })

  it('should escape curly braces and parentheses', () => {
    expect(escapeExp('{a}(b)')).toBe('\\{a\\}\\(b\\)')
  })

  it('should escape pipe and forward slash', () => {
    expect(escapeExp('a|b/c')).toBe('a\\|b\\/c')
  })

  it('should not change plain text without special characters', () => {
    expect(escapeExp('hello world')).toBe('hello world')
  })

  it('should escape all special regex chars at once', () => {
    expect(escapeExp('[\\^$.?*+(){}/|]')).toBe(
      '\\[\\\\\\^\\$\\.\\?\\*\\+\\(\\)\\{\\}\\/\\|\\]'
    )
  })

  it('should return an empty string for empty input', () => {
    expect(escapeExp('')).toBe('')
  })

  it('the result should be safely usable inside a RegExp', () => {
    const escaped = escapeExp('user.name[0]')
    const regex = new RegExp(escaped)
    expect(regex.test('user.name[0]')).toBe(true)
    expect(regex.test('userXname0')).toBe(false)
  })
})
