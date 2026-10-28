import { describe, expect, it } from 'vitest'
import { isUrlPrefix } from '../isUrlPrefix'

describe('isUrlPrefix', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true when value matches prefix pattern', () => {
      const githubPrefix = /^github\.com(?:\/|$)/i
      expect(isUrlPrefix('github.com/dxtmisha', githubPrefix)).toBe(true)
      expect(isUrlPrefix('github.com', githubPrefix)).toBe(true)
      expect(isUrlPrefix('github.com/', githubPrefix)).toBe(true)
      expect(isUrlPrefix('github.com/dxtmisha/dxt-ui', githubPrefix)).toBe(true)
    })

    it('should return true for protocol-based prefixes', () => {
      expect(isUrlPrefix('skype:dxtmisha', /^skype:/i)).toBe(true)
      expect(isUrlPrefix('mailto:test@example.com', /^mailto:/i)).toBe(true)
      expect(isUrlPrefix('tel:+1234567890', /^tel:/i)).toBe(true)
      expect(isUrlPrefix('https://t.me/channel', /^https?:\/\/t\.me(?:\/|$)/i)).toBe(true)
      expect(isUrlPrefix('http://t.me/channel', /^https?:\/\/t\.me(?:\/|$)/i)).toBe(true)
    })

    it('should return false when value does not match prefix pattern', () => {
      const githubPrefix = /^github\.com(?:\/|$)/i
      expect(isUrlPrefix('dxtmisha', githubPrefix)).toBe(false)
      expect(isUrlPrefix('gitlab.com/dxtmisha', githubPrefix)).toBe(false)
      expect(isUrlPrefix('mygithub.com', githubPrefix)).toBe(false)
      expect(isUrlPrefix('github.community/dxtmisha', githubPrefix)).toBe(false)
      expect(isUrlPrefix('https://github.com/dxtmisha', githubPrefix)).toBe(false)
    })
  })

  describe('Missing or undefined prefix pattern', () => {
    it('should return false when prefix is undefined', () => {
      expect(isUrlPrefix('github.com', undefined)).toBe(false)
      expect(isUrlPrefix('https://github.com/dxtmisha', undefined)).toBe(false)
      expect(isUrlPrefix('', undefined)).toBe(false)
      expect(isUrlPrefix('test', undefined)).toBe(false)
    })
  })

  describe('Boundary values and pattern variations', () => {
    it('should handle empty string correctly based on regex pattern', () => {
      expect(isUrlPrefix('', /^github\.com/i)).toBe(false)
      expect(isUrlPrefix('', /^/)).toBe(true) // Regex matches start of empty string
      expect(isUrlPrefix('', /.+/)).toBe(false) // Non-empty requirement
      expect(isUrlPrefix('', /$a/)).toBe(false) // Impossible match
    })

    it('should match URLs with query parameters and hash fragments', () => {
      const prefix = /^github\.com(?:\/|$)/i
      expect(isUrlPrefix('github.com/dxtmisha?tab=repositories', prefix)).toBe(true)
      expect(isUrlPrefix('github.com/dxtmisha#readme', prefix)).toBe(true)

      const prefixWithQuery = /^github\.com(?:\/|$|\?)/i
      expect(isUrlPrefix('github.com?ref=home', prefixWithQuery)).toBe(true)
      expect(isUrlPrefix('github.com?ref=home', prefix)).toBe(false)
    })

    it('should match URLs with port numbers when supported by pattern', () => {
      const localhostPrefix = /^localhost(?::\d+)?(?:\/|$)/i
      expect(isUrlPrefix('localhost:3000/api', localhostPrefix)).toBe(true)
      expect(isUrlPrefix('localhost:8080', localhostPrefix)).toBe(true)
      expect(isUrlPrefix('localhost/dashboard', localhostPrefix)).toBe(true)
      expect(isUrlPrefix('localhost', localhostPrefix)).toBe(true)
    })

    it('should handle extremely long URL strings without performance issues or stack overflow', () => {
      const prefix = /^github\.com(?:\/|$)/i
      const longUrl = `github.com/${'a'.repeat(20000)}`
      expect(isUrlPrefix(longUrl, prefix)).toBe(true)

      const longMismatch = `invalid.com/${'a'.repeat(20000)}`
      expect(isUrlPrefix(longMismatch, prefix)).toBe(false)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should correctly distinguish literal dots from wildcards in properly escaped patterns', () => {
      const escapedDot = /^github\.com(?:\/|$)/i
      const unescapedDot = /^github.com(?:\/|$)/i

      expect(isUrlPrefix('github.com/dxtmisha', escapedDot)).toBe(true)
      expect(isUrlPrefix('githubXcom/dxtmisha', escapedDot)).toBe(false)
      expect(isUrlPrefix('github-com/dxtmisha', escapedDot)).toBe(false)

      // Unescaped dot matches any character
      expect(isUrlPrefix('githubXcom/dxtmisha', unescapedDot)).toBe(true)
    })

    it('should safely process HTML and XSS payloads without execution or error', () => {
      const prefix = /^github\.com(?:\/|$)/i
      expect(isUrlPrefix('<script>alert(1)</script>', prefix)).toBe(false)
      expect(isUrlPrefix('github.com/<script>alert(1)</script>', prefix)).toBe(true)
      expect(isUrlPrefix('"><img src=x onerror=alert(1)>', prefix)).toBe(false)
      expect(isUrlPrefix('javascript:alert(1)', prefix)).toBe(false)
    })

    it('should handle URL-encoded and special path characters', () => {
      const prefix = /^github\.com(?:\/|$)/i
      expect(isUrlPrefix('github.com/user%20name', prefix)).toBe(true)
      expect(isUrlPrefix('github.com/c++_developer', prefix)).toBe(true)
      expect(isUrlPrefix('github.com/tag/v1.0.0+2026', prefix)).toBe(true)
      expect(isUrlPrefix('github.com/search?q=foo&bar=1', prefix)).toBe(true)
      expect(isUrlPrefix('github.com/foo#section-2', prefix)).toBe(true)
    })
  })

  describe('Regular expression flags and statefulness', () => {
    it('should respect case-insensitivity flag (i)', () => {
      const caseInsensitivePrefix = /^github\.com/i
      const caseSensitivePrefix = /^github\.com/

      expect(isUrlPrefix('GITHUB.COM/dxtmisha', caseInsensitivePrefix)).toBe(true)
      expect(isUrlPrefix('GitHub.Com/dxtmisha', caseInsensitivePrefix)).toBe(true)
      expect(isUrlPrefix('GITHUB.COM/dxtmisha', caseSensitivePrefix)).toBe(false)
      expect(isUrlPrefix('github.com/dxtmisha', caseSensitivePrefix)).toBe(true)
    })

    it('should respect multiline flag (m)', () => {
      const multilinePrefix = /^github\.com/m
      expect(isUrlPrefix('line1\ngithub.com/dxtmisha', multilinePrefix)).toBe(true)
    })

    it('should support patterns with capturing and non-capturing groups', () => {
      const nonCapturing = /^https?:\/\/(?:www\.)?example\.com/i
      const capturing = /^https?:\/\/(www\.)?example\.com/i

      expect(isUrlPrefix('https://example.com', nonCapturing)).toBe(true)
      expect(isUrlPrefix('https://www.example.com', nonCapturing)).toBe(true)
      expect(isUrlPrefix('https://example.com', capturing)).toBe(true)
      expect(isUrlPrefix('https://www.example.com', capturing)).toBe(true)
    })

    it('should handle stateful regular expressions with global flag (g) deterministically', () => {
      const globalRegex = /github\.com/g

      globalRegex.lastIndex = 0
      expect(isUrlPrefix('github.com/dxtmisha', globalRegex)).toBe(true)
      expect(globalRegex.lastIndex).toBeGreaterThan(0)

      globalRegex.lastIndex = 0
      expect(isUrlPrefix('github.com/dxtmisha', globalRegex)).toBe(true)
    })

    it('should handle stateful regular expressions with sticky flag (y)', () => {
      const stickyRegex = /github\.com/y

      stickyRegex.lastIndex = 0
      expect(isUrlPrefix('github.com/dxtmisha', stickyRegex)).toBe(true)

      // When lastIndex points beyond match, sticky test returns false
      stickyRegex.lastIndex = 5
      expect(isUrlPrefix('github.com/dxtmisha', stickyRegex)).toBe(false)
    })
  })

  describe('Empty, whitespace-only, and special characters', () => {
    it('should distinguish leading whitespace from matched prefix', () => {
      const prefix = /^github\.com/i
      expect(isUrlPrefix('   github.com/dxtmisha', prefix)).toBe(false)
      expect(isUrlPrefix('\tgithub.com/dxtmisha', prefix)).toBe(false)
      expect(isUrlPrefix('\ngithub.com/dxtmisha', prefix)).toBe(false)
      expect(isUrlPrefix('\r\n\t  github.com/dxtmisha', prefix)).toBe(false)
    })

    it('should allow trailing whitespace if pattern does not forbid it', () => {
      const prefix = /^github\.com/i
      expect(isUrlPrefix('github.com/dxtmisha   ', prefix)).toBe(true)
      expect(isUrlPrefix('github.com/dxtmisha\t\n', prefix)).toBe(true)
    })

    it('should return false for whitespace-only strings with domain prefix', () => {
      const prefix = /^github\.com(?:\/|$)/i
      expect(isUrlPrefix('   ', prefix)).toBe(false)
      expect(isUrlPrefix('\t\n\r', prefix)).toBe(false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic domains and paths with Unicode patterns', () => {
      const vkPrefix = /^вконтакте\.рф(?:\/|$)/iu
      expect(isUrlPrefix('вконтакте.рф/id12345', vkPrefix)).toBe(true)
      expect(isUrlPrefix('ВКОНТАКТЕ.РФ/id12345', vkPrefix)).toBe(true)
      expect(isUrlPrefix('яндекс.рф/поиск', vkPrefix)).toBe(false)
    })

    it('should support Vietnamese diacritics in URL paths', () => {
      const zaloPrefix = /^zalo\.me(?:\/|$)/i
      expect(isUrlPrefix('zalo.me/tiếngviệt', zaloPrefix)).toBe(true)
      expect(isUrlPrefix('zalo.me/học-tiếng-việt', zaloPrefix)).toBe(true)
      expect(isUrlPrefix('zalo.me/đà-nẵng', zaloPrefix)).toBe(true)
    })

    it('should support CJK (Chinese, Japanese, Korean) characters in URL paths', () => {
      const weiboPrefix = /^weibo\.com(?:\/|$)/i
      expect(isUrlPrefix('weibo.com/用户123', weiboPrefix)).toBe(true)
      expect(isUrlPrefix('weibo.com/北京', weiboPrefix)).toBe(true)

      const linePrefix = /^line\.me(?:\/|$)/i
      expect(isUrlPrefix('line.me/日本語', linePrefix)).toBe(true)
      expect(isUrlPrefix('line.me/한국어', linePrefix)).toBe(true)
    })

    it('should support European accents and umlauts in paths', () => {
      const prefix = /^example\.com(?:\/|$)/i
      expect(isUrlPrefix('example.com/café', prefix)).toBe(true)
      expect(isUrlPrefix('example.com/über-uns', prefix)).toBe(true)
      expect(isUrlPrefix('example.com/año-2026', prefix)).toBe(true)
    })

    it('should support Emoji characters in URLs', () => {
      const telegramPrefix = /^t\.me(?:\/|$)/i
      expect(isUrlPrefix('t.me/🚀channel', telegramPrefix)).toBe(true)
      expect(isUrlPrefix('t.me/🔥hot', telegramPrefix)).toBe(true)
      expect(isUrlPrefix('t.me/✨awesome-group', telegramPrefix)).toBe(true)
    })
  })

  describe('Determinism and pure function contract', () => {
    it('should return strictly boolean primitive values', () => {
      const prefix = /^github\.com(?:\/|$)/i
      expect(isUrlPrefix('github.com/dxtmisha', prefix)).toStrictEqual(true)
      expect(isUrlPrefix('other.com/dxtmisha', prefix)).toStrictEqual(false)
      expect(isUrlPrefix('github.com/dxtmisha', undefined)).toStrictEqual(false)
    })

    it('should return identical results for repeated calls with same arguments', () => {
      const prefix = /^github\.com(?:\/|$)/i
      const url = 'github.com/dxtmisha'

      expect(isUrlPrefix(url, prefix)).toBe(true)
      expect(isUrlPrefix(url, prefix)).toBe(true)
      expect(isUrlPrefix(url, prefix)).toBe(true)
    })

    it('should never mutate the input string', () => {
      const prefix = /^github\.com(?:\/|$)/i
      const input = 'github.com/dxtmisha'
      const original = input

      isUrlPrefix(input, prefix)
      expect(input).toBe(original)
    })
  })
})
