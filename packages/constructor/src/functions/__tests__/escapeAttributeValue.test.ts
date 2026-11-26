import { describe, it, expect } from 'vitest'
import { escapeAttributeValue } from '../escapeAttributeValue'

describe('escapeAttributeValue', () => {
  it('should preserve plain strings, numbers, and zero', () => {
    expect(escapeAttributeValue('tab-1')).toBe('tab-1')
    expect(escapeAttributeValue(0)).toBe('0')
    expect(escapeAttributeValue(42)).toBe('42')
  })

  it('should escape quotes, backslashes, and line breaks for CSS attribute selectors', () => {
    expect(escapeAttributeValue('a"b\\c\nd\re')).toBe('a\\"b\\\\c\\a d\\d e')
  })
})
