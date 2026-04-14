import { describe, it, expect } from 'vitest'
import { toString } from '../toString'

describe('toString', () => {
  it('should return the same string if the input is a string', () => {
    expect(toString('test')).toBe('test')
    expect(toString('')).toBe('')
  })

  it('should return an empty string for null or undefined', () => {
    expect(toString(null)).toBe('')
    expect(toString(undefined)).toBe('')
  })
})

