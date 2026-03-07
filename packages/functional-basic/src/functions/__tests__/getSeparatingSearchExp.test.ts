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
})
