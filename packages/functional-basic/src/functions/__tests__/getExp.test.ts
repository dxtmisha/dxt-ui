import { describe, it, expect } from 'vitest'
import { getExp } from '../getExp'

describe('getExp', () => {
  it('should escape special regex characters in the input value', () => {
    const regex = getExp('hello.*+?^${}()|[]\\world')
    expect(regex.source).toBe('hello\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\world')
  })

  it('should use default flags (ig) if not provided', () => {
    const regex = getExp('test')
    expect(regex.flags).toBe('gi')
  })

  it('should use custom flags if provided', () => {
    const regex = getExp('test', 'm')
    expect(regex.flags).toBe('m')
  })

  it('should replace :value in the pattern with the escaped input', () => {
    const regex = getExp('query', 'i', '^:value$')
    expect(regex.source).toBe('^query$')
    expect(regex.flags).toBe('i')
  })

  it('should correctly match expected strings', () => {
    const regex = getExp('foo.bar', 'i', '^:value$')
    expect(regex.test('foo.bar')).toBe(true)
    expect(regex.test('fooXbar')).toBe(false) // Without escaping, '.' would match 'X'
  })
})
