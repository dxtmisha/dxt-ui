import { describe, expect, expectTypeOf, it } from 'vitest'
import { toOptionalText } from '../toOptionalText'

describe('toOptionalText', () => {
  describe('Standard functional requirements', () => {
    it('preserves undefined, converts null to null, and trims non-empty strings', () => {
      expect(toOptionalText()).toBeUndefined()
      expect(toOptionalText(undefined)).toBeUndefined()
      expect(toOptionalText(null)).toBeNull()
      expect(toOptionalText('  hello world  ')).toBe('hello world')
      expectTypeOf(toOptionalText('text')).toEqualTypeOf<string | null | undefined>()
    })
  })

  describe('Empty, whitespace-only, non-string, and falsy string boundaries', () => {
    it('converts empty and whitespace-only strings to null', () => {
      expect(toOptionalText('')).toBeNull()
      expect(toOptionalText('   \t\n\r\u00A0  ')).toBeNull()
    })

    it('preserves falsy non-empty strings like "0" and "false"', () => {
      expect(toOptionalText('0')).toBe('0')
      expect(toOptionalText(' 0 ')).toBe('0')
      expect(toOptionalText('false')).toBe('false')
    })

    it('converts non-string unknown values safely to null', () => {
      expect(toOptionalText(0)).toBeNull()
      expect(toOptionalText(123)).toBeNull()
      expect(toOptionalText(false)).toBeNull()
      expect(toOptionalText(true)).toBeNull()
      expect(toOptionalText({})).toBeNull()
      expect(toOptionalText([])).toBeNull()
    })
  })

  describe('Multilingual and Unicode text handling', () => {
    it('preserves Cyrillic, Vietnamese diacritics, CJK, and Emoji after trimming', () => {
      expect(toOptionalText('  Привет Мир  ')).toBe('Привет Мир')
      expect(toOptionalText('  tiếng Việt  ')).toBe('tiếng Việt')
      expect(toOptionalText('  你好 世界 🚀  ')).toBe('你好 世界 🚀')
    })
  })
})
