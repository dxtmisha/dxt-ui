import { describe, it, expect } from 'vitest'
import { strFill } from '../strFill'

describe('strFill', () => {
  it('should create a string of specified length filled with the given character', () => {
    const result = strFill('a', 3)
    expect(result).toBe('aaa')
  })

  it('should work with multiple characters', () => {
    const result = strFill('ab', 2)
    expect(result).toBe('abab')
  })

  it('should return an empty string if the count is 0', () => {
    const result = strFill('a', 0)
    expect(result).toBe('')
  })
})
