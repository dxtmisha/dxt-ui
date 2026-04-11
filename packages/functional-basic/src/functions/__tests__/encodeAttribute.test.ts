import { describe, it, expect } from 'vitest'
import { encodeAttribute } from '../encodeAttribute'

describe('encodeAttribute', () => {
  it('should encode ampersands', () => {
    expect(encodeAttribute('foo & bar')).toBe('foo &amp; bar')
  })

  it('should encode fewer-than and greater-than signs', () => {
    expect(encodeAttribute('<script>alert("test")</script>'))
      .toBe('&lt;script&gt;alert(&quot;test&quot;)&lt;/script&gt;')
  })

  it('should encode double and single quotes', () => {
    expect(encodeAttribute('He said "it\'s fine"')).toBe('He said &quot;it&#39;s fine&quot;')
  })

  it('should preserve whitespace at the ends', () => {
    expect(encodeAttribute('  hello world  ')).toBe('  hello world  ')
  })

  it('should handle non-string input (numbers) safely', () => {
    expect(encodeAttribute(123 as any)).toBe('123')
  })

  it('should handle an empty string', () => {
    expect(encodeAttribute('')).toBe('')
  })
})
