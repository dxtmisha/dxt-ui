import { describe, expect, it } from 'vitest'
import { toClear } from '../toClear'

describe('toClear', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should strip http and https protocols', () => {
      expect(toClear('https://github.com/dxtmisha')).toBe('github.com/dxtmisha')
      expect(toClear('http://github.com/dxtmisha')).toBe('github.com/dxtmisha')
    })

    it('should strip protocol-relative slashes (//) and multiple leading slashes (///, ////)', () => {
      expect(toClear('//github.com/dxtmisha')).toBe('github.com/dxtmisha')
      expect(toClear('///github.com/dxtmisha')).toBe('github.com/dxtmisha')
      expect(toClear('////github.com/dxtmisha')).toBe('github.com/dxtmisha')
      expect(toClear('http:///github.com/dxtmisha')).toBe('github.com/dxtmisha')
      expect(toClear('https:////github.com/dxtmisha')).toBe('github.com/dxtmisha')
    })

    it('should not strip a single leading slash', () => {
      expect(toClear('/github.com/dxtmisha')).toBe('/github.com/dxtmisha')
      expect(toClear('/dxtmisha')).toBe('/dxtmisha')
    })

    it('should strip www prefix with or without protocol', () => {
      expect(toClear('www.github.com/dxtmisha')).toBe('github.com/dxtmisha')
      expect(toClear('https://www.github.com/dxtmisha')).toBe('github.com/dxtmisha')
      expect(toClear('http://www.github.com/dxtmisha')).toBe('github.com/dxtmisha')
      expect(toClear('//www.github.com/dxtmisha')).toBe('github.com/dxtmisha')
    })

    it('should strip leading @ symbols', () => {
      expect(toClear('@dxtmisha')).toBe('dxtmisha')
      expect(toClear('@@dxtmisha')).toBe('dxtmisha')
      expect(toClear('@@@@username')).toBe('username')
      expect(toClear('https://@dxtmisha')).toBe('dxtmisha')
      expect(toClear('https://www.@dxtmisha')).toBe('dxtmisha')
      expect(toClear('www.@dxtmisha')).toBe('dxtmisha')
    })

    it('should leave non-URL strings without leading @ untouched', () => {
      expect(toClear('dxtmisha')).toBe('dxtmisha')
      expect(toClear('john_doe')).toBe('john_doe')
      expect(toClear('user-123')).toBe('user-123')
    })
  })

  describe('Casing handling (Domain lowercasing & path preservation)', () => {
    it('should lowercase protocol, www, and domain while preserving path casing', () => {
      expect(toClear('HTTPS://GITHUB.COM/DxTMiShA')).toBe('github.com/DxTMiShA')
      expect(toClear('HTTP://WWW.GITHUB.COM/DxTMiShA')).toBe('github.com/DxTMiShA')
      expect(toClear('WWW.GITHUB.COM/DxTMiShA')).toBe('github.com/DxTMiShA')
      expect(toClear('https://WWW.INSTAGRAM.COM/MyProfile')).toBe('instagram.com/MyProfile')
    })

    it('should preserve @ inside URL paths after domain', () => {
      expect(toClear('https://www.tiktok.com/@CoolUser')).toBe('tiktok.com/@CoolUser')
      expect(toClear('WWW.TIKTOK.COM/@CoolUser')).toBe('tiktok.com/@CoolUser')
    })

    it('should preserve plain username casing after stripping leading @', () => {
      expect(toClear('@DxTMiShA')).toBe('DxTMiShA')
      expect(toClear('@@DxTMiShA')).toBe('DxTMiShA')
      expect(toClear('DxTMiShA')).toBe('DxTMiShA')
      expect(toClear('CamelCaseUser')).toBe('CamelCaseUser')
    })
  })

  describe('Boundary values and prefix-only strings', () => {
    it('should return empty string when value contains only clearable prefixes', () => {
      expect(toClear('https://')).toBe('')
      expect(toClear('http://')).toBe('')
      expect(toClear('//')).toBe('')
      expect(toClear('www.')).toBe('')
      expect(toClear('https://www.')).toBe('')
      expect(toClear('@')).toBe('')
      expect(toClear('@@')).toBe('')
      expect(toClear('https://@')).toBe('')
    })

    it('should handle complex URLs with ports, query parameters, and fragments', () => {
      expect(toClear('https://localhost:3000/api')).toBe('localhost:3000/api')
      expect(toClear('http://example.com:8080/path')).toBe('example.com:8080/path')
      expect(toClear('https://github.com/dxtmisha?tab=repositories#readme'))
        .toBe('github.com/dxtmisha?tab=repositories#readme')
    })

    it('should handle extremely long URL strings without performance degradation', () => {
      const longUsername = 'user'.repeat(2500)
      const longUrl = `https://www.github.com/${longUsername}`
      expect(toClear(longUrl)).toBe(`github.com/${longUsername}`)
    })
  })

  describe('Non-standard protocols and strings', () => {
    it('should not strip non-http protocols like skype, mailto, tel', () => {
      expect(toClear('skype:DxTMiShA')).toBe('skype:DxTMiShA')
      expect(toClear('mailto:support@example.com')).toBe('mailto:support@example.com')
      expect(toClear('tel:+1234567890')).toBe('tel:+1234567890')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return empty string when called without arguments', () => {
      expect(toClear()).toBe('')
    })

    it('should return empty string for null and undefined', () => {
      expect(toClear(null)).toBe('')
      expect(toClear(undefined)).toBe('')
    })

    it('should return empty string for empty string and whitespace-only strings', () => {
      expect(toClear('')).toBe('')
      expect(toClear(' ')).toBe('')
      expect(toClear('   ')).toBe('')
      expect(toClear('\t')).toBe('')
      expect(toClear('\n')).toBe('')
      expect(toClear('\r\n   \t')).toBe('')
    })

    it('should trim surrounding whitespace before clearing', () => {
      expect(toClear('   https://github.com/dxtmisha   ')).toBe('github.com/dxtmisha')
      expect(toClear('\t\nhttps://www.github.com/dxtmisha\n')).toBe('github.com/dxtmisha')
      expect(toClear('   @dxtmisha   ')).toBe('dxtmisha')
    })
  })

  describe('Type coercion and numeric inputs', () => {
    it('should correctly handle zero (0) without treating it as falsy or empty', () => {
      expect(toClear(0)).toBe('0')
    })

    it('should convert positive and negative numbers to strings', () => {
      expect(toClear(12345)).toBe('12345')
      expect(toClear(-42)).toBe('-42')
      expect(toClear(3.14)).toBe('3.14')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should clear protocols and @ for Cyrillic domains and usernames', () => {
      expect(toClear('https://вконтакте.рф/id123')).toBe('вконтакте.рф/id123')
      expect(toClear('@михаил')).toBe('михаил')
      expect(toClear('@@михаил')).toBe('михаил')
    })

    it('should clear protocols and @ for Vietnamese URLs and nicknames', () => {
      expect(toClear('https://zalo.me/nguyễn')).toBe('zalo.me/nguyễn')
      expect(toClear('@nguyễn_văn_a')).toBe('nguyễn_văn_a')
    })

    it('should clear protocols and @ for strings with Emojis', () => {
      expect(toClear('https://t.me/🚀channel')).toBe('t.me/🚀channel')
      expect(toClear('@🚀rocket')).toBe('🚀rocket')
    })
  })

  describe('Determinism and idempotence', () => {
    it('should produce identical results over repeated calls with identical input', () => {
      const input = 'https://www.github.com/DxTMiShA'
      expect(toClear(input)).toBe('github.com/DxTMiShA')
      expect(toClear(input)).toBe('github.com/DxTMiShA')
      expect(toClear(input)).toBe('github.com/DxTMiShA')
    })

    it('should be idempotent on already cleared values', () => {
      const cleared = toClear('https://www.github.com/DxTMiShA')
      expect(toClear(cleared)).toBe(cleared)
    })
  })
})
