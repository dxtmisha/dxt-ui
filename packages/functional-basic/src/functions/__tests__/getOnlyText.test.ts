import { describe, it, expect } from 'vitest'
import { getOnlyText } from '../getOnlyText'

describe('getOnlyText', () => {
  it('should return only letters, numbers and spaces', () => {
    expect(getOnlyText('Hello, World! 123')).toBe('Hello World 123')
  })

  it('should handle unicode letters correctly', () => {
    expect(getOnlyText('Привет, Мир! 123')).toBe('Привет Мир 123')
  })

  it('should remove special characters and punctuation and trim the result', () => {
    expect(getOnlyText('Text with #$% and *&^%')).toBe('Text with  and')
    expect(getOnlyText('!!! Hello !!!')).toBe('Hello')
    expect(getOnlyText('  Spaces  ')).toBe('Spaces')
  })

  it('should keep spaces and tabs as whitespace', () => {
    expect(getOnlyText('Text\twith\nspaces')).toBe('Text\twith\nspaces')
  })

  it('should handle empty strings', () => {
    expect(getOnlyText('')).toBe('')
  })

  it('should handle non-string inputs using anyToString', () => {
    expect(getOnlyText(12345)).toBe('12345')
    expect(getOnlyText({ key: 'val' })).toBe('keyval')
    expect(getOnlyText(['a', 'b', 'c'])).toBe('abc')
  })
})
