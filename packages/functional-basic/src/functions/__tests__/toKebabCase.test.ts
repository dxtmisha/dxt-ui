import { describe, it, expect } from 'vitest'
import { toKebabCase } from '../toKebabCase'

describe('toKebabCase', () => {
  it('should convert strings to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world')
    expect(toKebabCase('Hello World')).toBe('hello-world')
    expect(toKebabCase('some-variable')).toBe('some-variable')
  })

  it('should handle multiple uppercase letters', () => {
    // Current implementation results in xmlhttp-request for XMLHttpRequest
    expect(toKebabCase('XMLHttpRequest')).toBe('xmlhttp-request')
  })
})
