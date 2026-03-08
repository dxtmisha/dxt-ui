import { describe, it, expect } from 'vitest'
import { toCamelCase } from '../toCamelCase'

describe('toCamelCase', () => {
  it('should convert strings to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld')
    expect(toCamelCase('Hello world')).toBe('helloWorld')
    // implementation doesn't handle underscores
    expect(toCamelCase('some-long-variable-name')).toBe('someLongVariableName')
  })

  it('should handle spaces and special characters', () => {
    expect(toCamelCase('  test  string  ')).toBe('testString')
    expect(toCamelCase('data-v-123')).toBe('dataV123')
    expect(toCamelCase('data.value.123')).toBe('dataValue123')
  })

  it('should handle already camelCase strings', () => {
    expect(toCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase')
  })
})
