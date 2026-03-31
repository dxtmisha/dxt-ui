import { describe, it, expect } from 'vitest'
import { capitalize } from '../capitalize'

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  it('should return the same string if already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello')
  })

  it('should return the same string if it is empty', () => {
    expect(capitalize('')).toBe('')
  })

  it('should capitalize a single character', () => {
    expect(capitalize('a')).toBe('A')
  })

  it('should return the same string if it starts with a non-alphabetical character', () => {
    expect(capitalize('123')).toBe('123')
    expect(capitalize(' hello')).toBe(' hello')
  })
})
