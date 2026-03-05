import { describe, it, expect } from 'vitest'
import { toCamelCaseFirst } from '../toCamelCaseFirst'

describe('toCamelCaseFirst', () => {
  it('should convert strings to CamelCase (first letter upper)', () => {
    expect(toCamelCaseFirst('hello-world')).toBe('HelloWorld')
    expect(toCamelCaseFirst('helloWorld')).toBe('HelloWorld')
  })
})
