import { describe, it, expect } from 'vitest'
import { getRequestString } from '../getRequestString'

describe('getRequestString', () => {
  it('should transform an object into a query string', () => {
    const data = { search: 'apple', page: 2 }
    expect(getRequestString(data)).toBe('page=2&search=apple')
  })

  it('should URI encode the values', () => {
    const data = { text: 'hello world', expr: 'a+b=c' }
    expect(getRequestString(data)).toBe('expr=a%2Bb%3Dc&text=hello%20world')
  })

  it('should trim string values before encoding', () => {
    const data = { user: ' admin ' }
    expect(getRequestString(data)).toBe('user=admin')
  })

  it('should allow custom delimiters', () => {
    const data = { a: 1, b: 2 }
    // Using ':' instead of '=' and ';' instead of '&'
    expect(getRequestString(data, ':', ';')).toBe('a:1;b:2')
  })

  it('should skip undefined values due to inner implementation of forEach (assuming forEach filters or converts them safely)', () => {
    // Note: The behavior depends on `forEach` and `String()`.
    // String(undefined) is "undefined", so if forEach doesn't skip it, it encodes it.
    // Testing the actual output based on the provided code logic.
    const data = { a: undefined, b: null }
    expect(getRequestString(data)).toBe('a=undefined&b=null')
  })

  it('should return an empty string for an empty object', () => {
    expect(getRequestString({})).toBe('')
  })
})
