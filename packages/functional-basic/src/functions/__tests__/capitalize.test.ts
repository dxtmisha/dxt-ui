import { describe, it, expect, vi, beforeEach } from 'vitest'
import { capitalize } from '../capitalize'
import { Geo } from '../../classes/Geo'

describe('capitalize', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should capitalize the first letter of a simple lowercase word', () => {
      expect(capitalize('hello')).toBe('Hello')
      expect(capitalize('world')).toBe('World')
    })

    it('should preserve casing of the remainder of the string', () => {
      expect(capitalize('iPhone')).toBe('IPhone')
      expect(capitalize('hELLO')).toBe('HELLO')
      expect(capitalize('mIxEdCaSe')).toBe('MIxEdCaSe')
    })

    it('should return identical string if already capitalized', () => {
      expect(capitalize('Hello')).toBe('Hello')
      expect(capitalize('WORLD')).toBe('WORLD')
    })

    it('should correctly infer TypeScript literal type Capitalize<T>', () => {
      const result = capitalize('user' as const)
      const typeCheck: 'User' = result
      expect(typeCheck).toBe('User')
    })

  })

  describe('Boundary values and length limits', () => {
    it('should return empty string for empty input', () => {
      expect(capitalize('')).toBe('')
    })

    it('should capitalize single lowercase character', () => {
      expect(capitalize('a')).toBe('A')
      expect(capitalize('z')).toBe('Z')
    })

    it('should leave single uppercase character untouched', () => {
      expect(capitalize('A')).toBe('A')
      expect(capitalize('Z')).toBe('Z')
    })

    it('should handle two-character strings correctly', () => {
      expect(capitalize('ab')).toBe('Ab')
      expect(capitalize('aB')).toBe('AB')
      expect(capitalize('Ab')).toBe('Ab')
    })

    it('should handle long strings without truncation or corruption', () => {
      const longString = 'a'.repeat(1000)
      const expected = 'A' + 'a'.repeat(999)
      expect(capitalize(longString)).toBe(expected)
    })
  })

  describe('Empty, whitespace-only, and special characters', () => {
    it('should preserve single space and multiple spaces as first characters', () => {
      expect(capitalize(' ')).toBe(' ')
      expect(capitalize('   ')).toBe('   ')
      expect(capitalize(' hello')).toBe(' hello')
    })

    it('should preserve tabs, newlines, and mixed whitespace at start', () => {
      expect(capitalize('\thello')).toBe('\thello')
      expect(capitalize('\nhello')).toBe('\nhello')
      expect(capitalize('\r\nhello')).toBe('\r\nhello')
    })

    it('should handle punctuation and symbols at start without modification', () => {
      expect(capitalize('$value')).toBe('$value')
      expect(capitalize('_private')).toBe('_private')
      expect(capitalize('-hyphen')).toBe('-hyphen')
      expect(capitalize('@username')).toBe('@username')
      expect(capitalize('#hashtag')).toBe('#hashtag')
      expect(capitalize('123abc')).toBe('123abc')
    })
  })

  describe('Type coercion and non-string inputs (via toString)', () => {
    it('should safely convert and capitalize numbers', () => {
      expect(capitalize(0 as any)).toBe('0')
      expect(capitalize(123 as any)).toBe('123')
      expect(capitalize(-42 as any)).toBe('-42')
      expect(capitalize(3.14 as any)).toBe('3.14')
      expect(capitalize(NaN as any)).toBe('NaN')
      expect(capitalize(Infinity as any)).toBe('Infinity')
    })

    it('should safely convert and capitalize booleans', () => {
      expect(capitalize(true as any)).toBe('True')
      expect(capitalize(false as any)).toBe('False')
    })

    it('should return empty string for null, undefined, or empty invocation', () => {
      expect(capitalize(null as any)).toBe('')
      expect(capitalize(undefined)).toBe('')
      expect(capitalize()).toBe('')
    })

    it('should convert objects with custom toString', () => {
      const customObject = {
        toString: () => 'custom'
      }
      expect(capitalize(customObject as any)).toBe('Custom')
    })
  })

  describe('Multilingual and international scripts', () => {
    it('should capitalize Cyrillic characters', () => {
      expect(capitalize('привет')).toBe('Привет')
      expect(capitalize('москва')).toBe('Москва')
      expect(capitalize('яблоко')).toBe('Яблоко')
    })

    it('should capitalize Vietnamese characters with diacritics', () => {
      expect(capitalize('việt nam')).toBe('Việt nam')
      expect(capitalize('đà nẵng')).toBe('Đà nẵng')
      expect(capitalize('học tiếng việt')).toBe('Học tiếng việt')
    })

    it('should capitalize German umlauts and special characters', () => {
      expect(capitalize('über')).toBe('Über')
      expect(capitalize('äpfel')).toBe('Äpfel')
      expect(capitalize('österreich')).toBe('Österreich')
      expect(capitalize('ßeta')).toBe('SSeta')
    })

    it('should capitalize French accented characters', () => {
      expect(capitalize('éclair')).toBe('Éclair')
      expect(capitalize('été')).toBe('Été')
      expect(capitalize('île')).toBe('Île')
    })

    it('should capitalize Greek characters', () => {
      expect(capitalize('ένα')).toBe('Ένα')
      expect(capitalize('αθήνα')).toBe('Αθήνα')
    })

    it('should preserve non-casing scripts (CJK, Arabic, Hebrew)', () => {
      expect(capitalize('你好世界')).toBe('你好世界')
      expect(capitalize('こんにちは')).toBe('こんにちは')
      expect(capitalize('한국어')).toBe('한국어')
      expect(capitalize('مرحبا')).toBe('مرحبا')
      expect(capitalize('שלום')).toBe('שלום')
    })
  })

  describe('Unicode code points & surrogate pairs (Astral Plane)', () => {
    it('should preserve single and multiple emojis at the start', () => {
      expect(capitalize('🎉party')).toBe('🎉party')
      expect(capitalize('😀smile')).toBe('😀smile')
      expect(capitalize('🚀launch')).toBe('🚀launch')
    })

    it('should preserve complex modifier and zero-width joiner emojis', () => {
      expect(capitalize('👍🏽thumb')).toBe('👍🏽thumb')
      expect(capitalize('👨‍👩‍👧‍👦family')).toBe('👨‍👩‍👧‍👦family')
    })

    it('should capitalize characters in SMP plane (Deseret alphabet)', () => {
      // \u{10428} (small letter ee) -> \u{10400} (capital letter ee)
      expect(capitalize('𐐨')).toBe('𐐀')
      expect(capitalize('𐐨abc')).toBe('𐐀abc')
    })
  })

  describe('Locale-aware capitalization', () => {
    it('should use toLocaleUpperCase when locale is true (via Geo.getLocation)', () => {
      vi.spyOn(Geo, 'getLocation').mockReturnValue('tr-TR')

      expect(capitalize('i', true)).toBe('İ')
      expect(capitalize('istanbul', true)).toBe('İstanbul')
      expect(capitalize('ılık', true)).toBe('Ilık')
    })

    it('should use explicit string locale tag directly without relying on Geo', () => {
      vi.spyOn(Geo, 'getLocation').mockReturnValue('en-US')

      // Directly pass Turkish locale code
      expect(capitalize('i', 'tr-TR')).toBe('İ')
      expect(capitalize('istanbul', 'tr')).toBe('İstanbul')
      expect(capitalize('ılık', 'tr')).toBe('Ilık')
    })

    it('should use standard toUpperCase when locale is false (even if Geo locale is set)', () => {
      vi.spyOn(Geo, 'getLocation').mockReturnValue('tr-TR')

      expect(capitalize('i', false)).toBe('I')
      expect(capitalize('istanbul', false)).toBe('Istanbul')
    })

    it('should use standard toUpperCase by default when locale parameter is omitted', () => {
      vi.spyOn(Geo, 'getLocation').mockReturnValue('tr-TR')

      expect(capitalize('i')).toBe('I')
      expect(capitalize('istanbul')).toBe('Istanbul')
    })
  })

  describe('Determinism and purity', () => {
    it('should always return identical output for repeated identical calls', () => {
      const input = 'functional'
      expect(capitalize(input)).toBe(capitalize(input))
      expect(capitalize(input, 'tr')).toBe(capitalize(input, 'tr'))
    })
  })
})
