import { describe, it, expect } from 'vitest'
import { getArrayHighlightMatch } from '../getArrayHighlightMatch'

describe('getArrayHighlightMatch', () => {
  it('should return a single non-match object if search is empty', () => {
    const result = getArrayHighlightMatch('hello world', '')
    expect(result).toEqual([{ text: 'hello world', isMatch: false }])
  })

  it('should return a single non-match object if search is undefined', () => {
    const result = getArrayHighlightMatch('hello world', undefined)
    expect(result).toEqual([{ text: 'hello world', isMatch: false }])
  })

  it('should highlight a single word', () => {
    const result = getArrayHighlightMatch('hello world', 'hello')
    expect(result).toEqual([
      { text: 'hello', isMatch: true },
      { text: ' world', isMatch: false }
    ])
  })

  it('should highlight multiple occurrences', () => {
    const result = getArrayHighlightMatch('apple apple apple', 'apple')
    expect(result).toEqual([
      { text: 'apple', isMatch: true },
      { text: ' ', isMatch: false },
      { text: 'apple', isMatch: true },
      { text: ' ', isMatch: false },
      { text: 'apple', isMatch: true }
    ])
  })

  it('should highlight multiple different words (OR logic)', () => {
    const result = getArrayHighlightMatch('apple and banana', 'apple banana')
    expect(result).toEqual([
      { text: 'apple', isMatch: true },
      { text: ' and ', isMatch: false },
      { text: 'banana', isMatch: true }
    ])
  })

  it('should be case-insensitive', () => {
    const result = getArrayHighlightMatch('Hello World', 'hello')
    expect(result).toEqual([
      { text: 'Hello', isMatch: true },
      { text: ' World', isMatch: false }
    ])
  })

  it('should handle special regex characters in search', () => {
    const result = getArrayHighlightMatch('price is $10', '$10')
    expect(result).toEqual([
      { text: 'price is ', isMatch: false },
      { text: '$10', isMatch: true }
    ])
  })

  it('should handle matches at the end of the string', () => {
    const result = getArrayHighlightMatch('hello world', 'world')
    expect(result).toEqual([
      { text: 'hello ', isMatch: false },
      { text: 'world', isMatch: true }
    ])
  })

  it('should handle matches at the very beginning', () => {
    const result = getArrayHighlightMatch('apple pie', 'apple')
    expect(result).toEqual([
      { text: 'apple', isMatch: true },
      { text: ' pie', isMatch: false }
    ])
  })

  it('should handle consecutive matches', () => {
    const result = getArrayHighlightMatch('appleapple', 'apple')
    expect(result).toEqual([
      { text: 'apple', isMatch: true },
      { text: 'apple', isMatch: true }
    ])
  })

  it('should support global RegExp as search parameter', () => {
    const result = getArrayHighlightMatch('hello world', /hello/ig)
    expect(result).toEqual([
      { text: 'hello', isMatch: true },
      { text: ' world', isMatch: false }
    ])
  })
})
