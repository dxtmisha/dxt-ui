import { describe, it, expect } from 'vitest'
import { addTagHighlightMatch } from '../addTagHighlightMatch'

describe('addTagHighlightMatch', () => {
  it('should wrap a single match with span tags', () => {
    const result = addTagHighlightMatch('hello world', 'hello')
    expect(result).toBe('<span class="sys-highlight-match">hello</span> world')
  })

  it('should wrap multiple word matches (OR logic)', () => {
    const result = addTagHighlightMatch('apple and banana', 'apple banana')
    expect(result).toBe('<span class="sys-highlight-match">apple</span> and <span class="sys-highlight-match">banana</span>')
  })

  it('should use custom className', () => {
    const result = addTagHighlightMatch('hello', 'hello', 'my-custom-class')
    expect(result).toBe('<span class="my-custom-class">hello</span>')
  })

  it('it should be case-insensitive', () => {
    const result = addTagHighlightMatch('Hello World', 'hello')
    expect(result).toBe('<span class="sys-highlight-match">Hello</span> World')
  })

  it('should handle special regex characters', () => {
    const result = addTagHighlightMatch('price is $10', '$10')
    expect(result).toBe('price is <span class="sys-highlight-match">$10</span>')
  })

  it('should return the original value if the search is empty or undefined', () => {
    expect(addTagHighlightMatch('hello', '')).toBe('hello')
    expect(addTagHighlightMatch('hello', undefined)).toBe('hello')
  })

  it('should handle numeric values by converting to string', () => {
    // Current implementation uses String(value)
    const result = addTagHighlightMatch(12345 as any, '23')
    expect(result).toBe('1<span class="sys-highlight-match">23</span>45')
  })

  it('should escape HTML characters when shouldEscape is true', () => {
    const result = addTagHighlightMatch('<b>bold</b>', 'bold', 'sys-highlight-match', true)
    expect(result).toBe('&lt;b&gt;<span class="sys-highlight-match">bold</span>&lt;/b&gt;')
  })

  it('should escape whole string when shouldEscape is true and no search match', () => {
    const result = addTagHighlightMatch('<b>bold</b>', 'none', 'sys-highlight-match', true)
    expect(result).toBe('&lt;b&gt;bold&lt;/b&gt;')
  })

  it('should handle special characters in search and escape them correctly', () => {
    const result = addTagHighlightMatch('price > 10', '>', 'sys-highlight-match', true)
    expect(result).toBe('price <span class="sys-highlight-match">&gt;</span> 10')
  })

  it('should support RegExp as search parameter', () => {
    const result = addTagHighlightMatch('hello world', /(hello)/i)
    expect(result).toBe('<span class="sys-highlight-match">hello</span> world')
  })

  it('should return empty string if input is empty', () => {
    expect(addTagHighlightMatch('', 'test')).toBe('')
  })

  it('should handle values that look like tags', () => {
    const result = addTagHighlightMatch('TAG_START and TAG_END', 'TAG')
    expect(result).toBe('<span class="sys-highlight-match">TAG</span>_START and <span class="sys-highlight-match">TAG</span>_END')
  })
})
