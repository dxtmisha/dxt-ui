import { describe, it, expect } from 'vitest'
import { encodeLiteAttribute } from '../encodeLiteAttribute'

describe('encodeLiteAttribute', () => {
  it('should encode fewer-than signs', () => {
    expect(encodeLiteAttribute('a < b')).toBe('a &lt; b')
    expect(encodeLiteAttribute('<tag>')).toBe('&lt;tag&gt;')
  })

  it('should encode greater-than signs', () => {
    expect(encodeLiteAttribute('a > b')).toBe('a &gt; b')
    expect(encodeLiteAttribute('</tag>')).toBe('&lt;/tag&gt;')
  })

  it('should encode ampersands', () => {
    expect(encodeLiteAttribute('foo & bar')).toBe('foo &amp; bar')
    expect(encodeLiteAttribute('a & b & c')).toBe('a &amp; b &amp; c')
  })

  it('should encode all special characters in one string', () => {
    expect(encodeLiteAttribute('<a> & <b>')).toBe('&lt;a&gt; &amp; &lt;b&gt;')
    expect(encodeLiteAttribute('1 < 2 & 3 > 4')).toBe('1 &lt; 2 &amp; 3 &gt; 4')
  })

  it('should NOT encode single and double quotes', () => {
    expect(encodeLiteAttribute('He said "it\'s fine"')).toBe('He said "it\'s fine"')
    expect(encodeLiteAttribute('"quoted"')).toBe('"quoted"')
    expect(encodeLiteAttribute('\'single\'')).toBe('\'single\'')
  })

  it('should NOT encode other special characters', () => {
    expect(encodeLiteAttribute('a$b')).toBe('a$b')
    expect(encodeLiteAttribute('a^b')).toBe('a^b')
    expect(encodeLiteAttribute('a*b')).toBe('a*b')
    expect(encodeLiteAttribute('a+b')).toBe('a+b')
    expect(encodeLiteAttribute('a|b')).toBe('a|b')
    expect(encodeLiteAttribute('a?b')).toBe('a?b')
  })

  it('should preserve whitespace at the ends', () => {
    expect(encodeLiteAttribute('  hello world  ')).toBe('  hello world  ')
    expect(encodeLiteAttribute('\thello\t')).toBe('\thello\t')
    expect(encodeLiteAttribute('\nhello\n')).toBe('\nhello\n')
  })

  it('should handle non-string input (numbers) safely', () => {
    expect(encodeLiteAttribute(123 as any)).toBe('123')
    expect(encodeLiteAttribute(45.67 as any)).toBe('45.67')
  })

  it('should handle an empty string', () => {
    expect(encodeLiteAttribute('')).toBe('')
  })

  it('should handle strings with only special characters', () => {
    expect(encodeLiteAttribute('<>&')).toBe('&lt;&gt;&amp;')
    expect(encodeLiteAttribute('<<<')).toBe('&lt;&lt;&lt;')
    expect(encodeLiteAttribute('>>>')).toBe('&gt;&gt;&gt;')
    expect(encodeLiteAttribute('&&&')).toBe('&amp;&amp;&amp;')
  })

  it('should handle mixed content correctly', () => {
    expect(encodeLiteAttribute('Click <button>here</button> & continue'))
      .toBe('Click &lt;button&gt;here&lt;/button&gt; &amp; continue')

    expect(encodeLiteAttribute('1 < 2 < 3'))
      .toBe('1 &lt; 2 &lt; 3')
  })

  it('should preserve numbers and special symbols correctly', () => {
    expect(encodeLiteAttribute('Price: $10.99')).toBe('Price: $10.99')
    expect(encodeLiteAttribute('Email: test@example.com')).toBe('Email: test@example.com')
    expect(encodeLiteAttribute('Path: /usr/local/bin')).toBe('Path: /usr/local/bin')
  })
})
