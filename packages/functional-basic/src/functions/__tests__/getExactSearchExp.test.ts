import { describe, it, expect } from 'vitest'
import { getExactSearchExp } from '../getExactSearchExp'

describe('getExactSearchExp', () => {
  it('should match the exact string', () => {
    const regex = getExactSearchExp('hello')
    expect(regex.test('hello')).toBe(true)
  })

  it('should match the exact string regardless of case', () => {
    const regex = getExactSearchExp('Hello')
    expect(regex.test('hello')).toBe(true)
    expect(regex.test('HELLO')).toBe(true)
  })

  it('should match partial strings (non-anchored)', () => {
    const regex = getExactSearchExp('hello')
    expect(regex.test('hello world')).toBe(true)
    expect(regex.test('say hello')).toBe(true)
  })

  it('should escape special regex characters', () => {
    const regex = getExactSearchExp('price $10.00')
    expect(regex.test('price $10.00')).toBe(true)
    expect(regex.test('price X10Y00')).toBe(false)
  })

  it('should have the case-insensitive flag', () => {
    const regex = getExactSearchExp('test')
    expect(regex.flags).toContain('i')
  })
})
