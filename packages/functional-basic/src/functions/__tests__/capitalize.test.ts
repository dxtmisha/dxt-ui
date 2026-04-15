import { describe, it, expect, vi, beforeEach } from 'vitest'
import { capitalize } from '../capitalize'
import { Geo } from '../../classes/Geo'

describe('capitalize', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

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

  it('should return string representation for non-string inputs', () => {
    expect(capitalize(123 as any)).toBe('123')
    expect(capitalize(true as any)).toBe('True')
    expect(capitalize(null as any)).toBe('Null')
  })

  it('should handles non-alphabetical characters', () => {
    expect(capitalize('123')).toBe('123')
    expect(capitalize(' hello')).toBe(' hello')
  })

  describe('Locale-aware capitalization', () => {
    it('should use toLocaleUpperCase when isLocale is true', () => {
      // Mock Geo.getLocation to return a specific locale
      // We use Turkish ('tr-TR') because it has a unique rule for 'i' -> 'İ'
      vi.spyOn(Geo, 'getLocation').mockReturnValue('tr-TR')

      const res = capitalize('i', true)
      // In Turkish, lowercase 'i' becomes 'İ' (with a dot)
      expect(res).toBe('İ')
    })

    it('should use standard toUpperCase when isLocale is false (even if locale is set)', () => {
      vi.spyOn(Geo, 'getLocation').mockReturnValue('tr-TR')

      const res = capitalize('i', false)
      // Standard toUpperCase for 'i' is 'I'
      expect(res).toBe('I')
    })
  })
})
