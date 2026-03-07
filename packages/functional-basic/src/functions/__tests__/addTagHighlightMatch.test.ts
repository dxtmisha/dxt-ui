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
})
