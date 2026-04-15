import { describe, it, expect } from 'vitest'
import { getSearchExp } from '../getSearchExp'

describe('getSearchExp', () => {
  it('should match a string containing the single search word', () => {
    const regex = getSearchExp('hello')
    expect(regex.test('hello world')).toBe(true)
    expect(regex.test('world')).toBe(false)
  })

  it('should match regardless of word order when multiple words are given', () => {
    const regex = getSearchExp('foo bar')
    expect(regex.test('foo bar baz')).toBe(true)
    expect(regex.test('bar foo')).toBe(true)
    expect(regex.test('foo only')).toBe(false)
  })

  it('should use case-insensitive matching', () => {
    const regex = getSearchExp('Hello')
    expect(regex.test('HELLO world')).toBe(true)
    expect(regex.test('hello world')).toBe(true)
  })

  it('should escape special regex characters in the search string?', () => {
    const regex = getSearchExp('price $10.00')
    expect(regex.test('price $10.00')).toBe(true)
    expect(regex.test('price X10Y00')).toBe(false)
  })

  it('should ignore extra spaces between words', () => {
    const regex = getSearchExp('foo  bar')
    expect(regex.test('foo bar')).toBe(true)
  })

  it('should return a RegExp that matches everything for an empty search string', () => {
    const regex = getSearchExp('')
    expect(regex.test('anything')).toBe(true)
    expect(regex.test('')).toBe(true)
  })
})
