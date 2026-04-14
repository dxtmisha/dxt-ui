import { describe, it, expect } from 'vitest'
import { getSeparatingSearchExp } from '../getSeparatingSearchExp'

describe('getSeparatingSearchExp', () => {
  it('should match any of the individual words separated by space (OR logic)', () => {
    const regex = getSeparatingSearchExp('hello world')
    // Resetting lastIndex for consistency if needed, but here we just check separate strings
    expect(regex.test('hello')).toBe(true)
    regex.lastIndex = 0 // Resetting because of 'g' flag
    expect(regex.test('world')).toBe(true)
    regex.lastIndex = 0
    expect(regex.test('hello world')).toBe(true)
    regex.lastIndex = 0
    expect(regex.test('foo')).toBe(false)
  })

  it('should be case-insensitive (i flag)', () => {
    const regex = getSeparatingSearchExp('Hello')
    expect(regex.test('hello')).toBe(true)
    regex.lastIndex = 0
    expect(regex.test('HELLO')).toBe(true)
    expect(regex.flags).toContain('i')
  })

  it('should have the global flag (g flag)', () => {
    const regex = getSeparatingSearchExp('test')
    expect(regex.flags).toContain('g')
  })

  it('should escape special regex characters in search words', () => {
    const regex = getSeparatingSearchExp('$10 .')
    expect(regex.test('$10')).toBe(true)
    regex.lastIndex = 0
    expect(regex.test('.')).toBe(true)
    regex.lastIndex = 0
    expect(regex.test('10')).toBe(false) // '10' does not match escaped '\$10'
  })

  it('should match multiple occurrences in a string', () => {
    const regex = getSeparatingSearchExp('apple banana')
    const text = 'an apple and a banana'
    const matches = text.match(regex)
    expect(matches).toContain('apple')
    expect(matches).toContain('banana')
    expect(matches?.length).toBe(2)
  })

  it('should return a regex that matches nothing if search is empty or whitespace only', () => {
    const emptyRegex = getSeparatingSearchExp('')
    expect(emptyRegex.toString()).toBe('/(?!)/gi')
    expect(emptyRegex.test('any string')).toBe(false)

    const whitespaceRegex = getSeparatingSearchExp('   ')
    expect(whitespaceRegex.toString()).toBe('/(?!)/gi')
    expect(whitespaceRegex.test('any string')).toBe(false)
  })

  it('should return a regex that matches nothing if search exceeds the limit', () => {
    const longSearch = 'a'.repeat(200)
    const regex = getSeparatingSearchExp(longSearch, 100)
    expect(regex.toString()).toBe('/(?!)/gi')
    expect(regex.test('a')).toBe(false)
  })

  it('should handle custom limit correctly', () => {
    const search = 'hello world'
    const regexWithinLimit = getSeparatingSearchExp(search, 20)
    expect(regexWithinLimit.test('hello')).toBe(true)

    const regexExceedingLimit = getSeparatingSearchExp(search, 5)
    expect(regexExceedingLimit.test('hello')).toBe(false)
  })

  it('should treat multiple spaces as a single separator', () => {
    const regex = getSeparatingSearchExp('foo    bar')
    expect(regex.source).toBe('(foo|bar)')
    expect(regex.test('foo')).toBe(true)
    regex.lastIndex = 0
    expect(regex.test('bar')).toBe(true)
  })

  it('should return the regex directly if a RegExp object is passed as search', () => {
    const inputRegExp = /custom-regex/i
    const outputRegExp = getSeparatingSearchExp(inputRegExp)
    expect(outputRegExp.source).toBe('custom-regex')
    expect(outputRegExp.test('custom-regex')).toBe(true)
  })

  it('should preserve original flags of the passed RegExp', () => {
    const caseSensitive = /test/
    const output1 = getSeparatingSearchExp(caseSensitive)
    expect(output1.flags).toBe('')

    const caseInsensitive = /test/i
    const output2 = getSeparatingSearchExp(caseInsensitive)
    expect(output2.flags).toBe('i')
  })
})
