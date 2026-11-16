import { describe, expect, it } from 'vitest'
import { escapeCmsSearchPattern } from '../escapeCmsSearchPattern'

describe('escapeCmsSearchPattern', () => {
  it('escapes backslashes, percent signs, and underscores in SQL LIKE order', () => {
    expect(escapeCmsSearchPattern('100%_test\\')).toBe('100\\%\\_test\\\\')
    expect(escapeCmsSearchPattern('plain-text')).toBe('plain-text')
    expect(escapeCmsSearchPattern('')).toBe('')
  })
})
