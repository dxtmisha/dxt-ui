import { describe, expect, it } from 'vitest'
import { isDangerousProtocol } from '../isDangerousProtocol'

describe('isDangerousProtocol', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for javascript protocol URLs', () => {
      expect(isDangerousProtocol('javascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('javascript:void(0)')).toBe(true)
      expect(isDangerousProtocol('javascript:console.log("test")')).toBe(true)
      expect(isDangerousProtocol('javascript:window.location="https://attacker.com"')).toBe(true)
    })

    it('should return true for data protocol URLs', () => {
      expect(isDangerousProtocol('data:text/html,<script>alert(1)</script>')).toBe(true)
      expect(isDangerousProtocol('data:image/svg+xml;base64,PHN2Zz4=')).toBe(true)
      expect(isDangerousProtocol('data:application/javascript;base64,YWxlcnQoMSk=')).toBe(true)
      expect(isDangerousProtocol('data:text/plain;charset=utf-8,hello')).toBe(true)
    })

    it('should return true for vbscript protocol URLs', () => {
      expect(isDangerousProtocol('vbscript:msgbox(1)')).toBe(true)
      expect(isDangerousProtocol('vbscript:Execute(payload)')).toBe(true)
    })

    it('should return false for safe standard protocols', () => {
      expect(isDangerousProtocol('https://github.com/dxtmisha')).toBe(false)
      expect(isDangerousProtocol('http://example.com/index.html')).toBe(false)
      expect(isDangerousProtocol('mailto:support@example.com')).toBe(false)
      expect(isDangerousProtocol('tel:+1234567890')).toBe(false)
      expect(isDangerousProtocol('ftp://ftp.example.com/file.zip')).toBe(false)
      expect(isDangerousProtocol('sms:+1234567890')).toBe(false)
      expect(isDangerousProtocol('blob:https://example.com/uuid-token')).toBe(false)
    })

    it('should return false for safe usernames, domain names, and paths', () => {
      expect(isDangerousProtocol('dxtmisha')).toBe(false)
      expect(isDangerousProtocol('john.doe')).toBe(false)
      expect(isDangerousProtocol('@dxtmisha')).toBe(false)
      expect(isDangerousProtocol('github.com/dxtmisha')).toBe(false)
      expect(isDangerousProtocol('/path/to/resource')).toBe(false)
      expect(isDangerousProtocol('//example.com/test')).toBe(false)
    })
  })

  describe('Security & Evasion: Leading whitespace handling (XSS bypass protection)', () => {
    it('should detect dangerous protocol when preceded by single or multiple spaces', () => {
      expect(isDangerousProtocol(' javascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('   javascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('          javascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol(' data:text/html,x')).toBe(true)
      expect(isDangerousProtocol('   vbscript:msgbox(1)')).toBe(true)
    })

    it('should detect dangerous protocol when preceded by tabs, newlines, and carriage returns', () => {
      expect(isDangerousProtocol('\tjavascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('\njavascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('\rjavascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('\r\njavascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol(' \t\r\n  javascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('\t\t data:text/html,x')).toBe(true)
      expect(isDangerousProtocol('\r\n\t vbscript:msgbox(1)')).toBe(true)
    })

    it('should detect dangerous protocol preceded by large volume of whitespace', () => {
      const paddedInput = `${' '.repeat(10_000)}javascript:alert(1)`
      expect(isDangerousProtocol(paddedInput)).toBe(true)
    })

    it('should detect dangerous protocol when preceded by Unicode whitespace and non-breaking spaces', () => {
      expect(isDangerousProtocol('\u00A0javascript:alert(1)')).toBe(true) // Non-breaking space (NBSP)
      expect(isDangerousProtocol('\u3000javascript:alert(1)')).toBe(true) // Ideographic space
      expect(isDangerousProtocol('\u2000javascript:alert(1)')).toBe(true) // En quad
      expect(isDangerousProtocol('\u2009javascript:alert(1)')).toBe(true) // Thin space
      expect(isDangerousProtocol('\u200Ajavascript:alert(1)')).toBe(true) // Hair space (upper bound 0x200A)
      expect(isDangerousProtocol('\u2028javascript:alert(1)')).toBe(true) // Line separator
      expect(isDangerousProtocol('\u2029javascript:alert(1)')).toBe(true) // Paragraph separator
      expect(isDangerousProtocol('\u202Fjavascript:alert(1)')).toBe(true) // Narrow NBSP
      expect(isDangerousProtocol('\u205Fjavascript:alert(1)')).toBe(true) // Math space
      expect(isDangerousProtocol('\u00A0\u3000  javascript:alert(1)')).toBe(true)
    })
  })

  describe('Security & Evasion: ASCII & C1 control character filtering', () => {
    it('should detect protocol with embedded null bytes (\\0)', () => {
      expect(isDangerousProtocol('java\0script:alert(1)')).toBe(true)
      expect(isDangerousProtocol('\0javascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('j\0a\0v\0a\0s\0c\0r\0i\0p\0t:alert(1)')).toBe(true)
      expect(isDangerousProtocol('d\0a\0t\0a:text/html,x')).toBe(true)
      expect(isDangerousProtocol('vb\0script:msgbox(1)')).toBe(true)
    })

    it('should detect protocol with embedded tabs, newlines, and carriage returns', () => {
      expect(isDangerousProtocol('java\tscript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('java\nscript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('java\rscript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('vb\r\nscript:msgbox(1)')).toBe(true)
      expect(isDangerousProtocol('d\na\tt\ra:text/plain,1')).toBe(true)
    })

    it('should detect protocol with ASCII C0 control characters (codes 1-31)', () => {
      expect(isDangerousProtocol('java\x01script:alert(1)')).toBe(true)
      expect(isDangerousProtocol('java\x07script:alert(1)')).toBe(true)
      expect(isDangerousProtocol('java\x0Bscript:alert(1)')).toBe(true) // Vertical tab
      expect(isDangerousProtocol('java\x0Cscript:alert(1)')).toBe(true) // Form feed
      expect(isDangerousProtocol('java\x1Fscript:alert(1)')).toBe(true)
    })

    it('should detect protocol with DEL character (code 127)', () => {
      expect(isDangerousProtocol('java\x7Fscript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('\x7Fjavascript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('data\x7F:text/plain,1')).toBe(true)
    })

    it('should detect protocol with C1 control characters (codes 128-159)', () => {
      expect(isDangerousProtocol('java\x80script:alert(1)')).toBe(true)
      expect(isDangerousProtocol('java\x9Fscript:alert(1)')).toBe(true)
      expect(isDangerousProtocol('data\x88:text/html,x')).toBe(true)
      expect(isDangerousProtocol('\x88vbscript:msgbox(1)')).toBe(true)
    })

    it('should detect protocol with Unicode zero-width and formatting evasion characters', () => {
      expect(isDangerousProtocol('\u200Bjavascript:alert(1)')).toBe(true) // Leading ZWSP
      expect(isDangerousProtocol('java\u200Bscript:alert(1)')).toBe(true) // Embedded ZWSP
      expect(isDangerousProtocol('java\u200Cscript:alert(1)')).toBe(true) // Embedded ZWNJ
      expect(isDangerousProtocol('java\u200Dscript:alert(1)')).toBe(true) // Embedded ZWJ
      expect(isDangerousProtocol('java\u2060script:alert(1)')).toBe(true) // Word joiner
      expect(isDangerousProtocol('\uFEFFjavascript:alert(1)')).toBe(true) // Leading BOM
      expect(isDangerousProtocol('java\uFEFFscript:alert(1)')).toBe(true) // Embedded BOM
      expect(isDangerousProtocol('d\u200Ba\uFEFFt\u2060a:text/html,x')).toBe(true)
    })

    it('should return false for benign safe strings containing control characters or zero-width formatting', () => {
      expect(isDangerousProtocol('\0https://example.com')).toBe(false)
      expect(isDangerousProtocol('\uFEFFhttps://example.com')).toBe(false)
      expect(isDangerousProtocol('\u00A0https://example.com')).toBe(false)
      expect(isDangerousProtocol('user\x01name:tag')).toBe(false)
      expect(isDangerousProtocol('user\u200Bname:tag')).toBe(false)
      expect(isDangerousProtocol('test\0:value')).toBe(false)
      expect(isDangerousProtocol('\u200B:test')).toBe(false)
    })

    it('should detect dangerous protocol even when padded with more than 15 embedded control or evasion characters', () => {
      const heavilyObfuscated = `java${'\0\u200B\t\n\x7F\x80\uFEFF'.repeat(5)}script:alert(1)`
      expect(isDangerousProtocol(heavilyObfuscated)).toBe(true)
    })

    it('should respect exact character code range boundaries without off-by-one errors', () => {
      expect(isDangerousProtocol('java\x7Escript:alert(1)')).toBe(false) // 126 ('~', just below 127 DEL)
      expect(isDangerousProtocol('java\u00A1script:alert(1)')).toBe(false) // 161 ('¡', just above 160 NBSP)
      expect(isDangerousProtocol('java\u1FFFscript:alert(1)')).toBe(false) // 0x1FFF (just below 0x2000)
      expect(isDangerousProtocol('java\u200Escript:alert(1)')).toBe(false) // 0x200E (LRM, just above 0x200D ZWJ)
      expect(isDangerousProtocol('java\u205Escript:alert(1)')).toBe(false) // 0x205E (just below 0x205F)
      expect(isDangerousProtocol('java\u2061script:alert(1)')).toBe(false) // 0x2061 (just above 0x2060 Word Joiner)
    })
  })

  describe('Case sensitivity and mixed case variations', () => {
    it('should detect dangerous protocols in uppercase', () => {
      expect(isDangerousProtocol('JAVASCRIPT:alert(1)')).toBe(true)
      expect(isDangerousProtocol('DATA:text/html,test')).toBe(true)
      expect(isDangerousProtocol('VBSCRIPT:msgbox(1)')).toBe(true)
    })

    it('should detect dangerous protocols in mixed case', () => {
      expect(isDangerousProtocol('JavaScript:void(0)')).toBe(true)
      expect(isDangerousProtocol('jAvAsCrIpT:alert(1)')).toBe(true)
      expect(isDangerousProtocol('Data:text/plain;base64,AA==')).toBe(true)
      expect(isDangerousProtocol('dAtA:test')).toBe(true)
      expect(isDangerousProtocol('VbScript:msgbox(1)')).toBe(true)
      expect(isDangerousProtocol('vBsCrIpT:run()')).toBe(true)
    })
  })

  describe('Boundary values and scheme length threshold limits', () => {
    it('should detect minimal dangerous protocol strings ending with colon', () => {
      expect(isDangerousProtocol('javascript:')).toBe(true)
      expect(isDangerousProtocol('data:')).toBe(true)
      expect(isDangerousProtocol('vbscript:')).toBe(true)
    })

    it('should return false when protocol name lacks a trailing colon', () => {
      expect(isDangerousProtocol('javascript')).toBe(false)
      expect(isDangerousProtocol('data')).toBe(false)
      expect(isDangerousProtocol('vbscript')).toBe(false)
      expect(isDangerousProtocol('javascript-action')).toBe(false)
      expect(isDangerousProtocol('data-attr="value"')).toBe(false)
    })

    it('should return false when colon appears at the very beginning', () => {
      expect(isDangerousProtocol(':javascript:')).toBe(false)
      expect(isDangerousProtocol(':data:')).toBe(false)
      expect(isDangerousProtocol(':')).toBe(false)
      expect(isDangerousProtocol('::')).toBe(false)
    })

    it('should return false when space or Unicode whitespace is placed inside protocol name or before colon', () => {
      expect(isDangerousProtocol('javascript :alert(1)')).toBe(false)
      expect(isDangerousProtocol('data :test')).toBe(false)
      expect(isDangerousProtocol('vbscript :test')).toBe(false)
      expect(isDangerousProtocol('java script:alert(1)')).toBe(false)
      expect(isDangerousProtocol('java\u00A0script:alert(1)')).toBe(false)
      expect(isDangerousProtocol('java\u2000script:alert(1)')).toBe(false)
      expect(isDangerousProtocol('javascript\u00A0:alert(1)')).toBe(false)
    })

    it('should return false when protocol name has suffix additions', () => {
      expect(isDangerousProtocol('javascript-code:alert(1)')).toBe(false)
      expect(isDangerousProtocol('data-payload:text')).toBe(false)
      expect(isDangerousProtocol('vbscriptx:test')).toBe(false)
    })

    it('should return false exactly at and beyond the 15-character scheme length threshold', () => {
      expect(isDangerousProtocol(`${'a'.repeat(15)}:value`)).toBe(false) // Exactly 15 chars before colon
      expect(isDangerousProtocol(`${'a'.repeat(16)}:value`)).toBe(false) // 16 chars before colon (exceeds threshold by 1)
    })

    it('should return false for single character inputs', () => {
      expect(isDangerousProtocol('j')).toBe(false)
      expect(isDangerousProtocol('d')).toBe(false)
      expect(isDangerousProtocol('v')).toBe(false)
      expect(isDangerousProtocol(':')).toBe(false)
    })
  })

  describe('Safe protocols, relative paths, and colon placement', () => {
    it('should return false when dangerous protocol words appear in domain or path', () => {
      expect(isDangerousProtocol('https://example.com/javascript:alert(1)')).toBe(false)
      expect(isDangerousProtocol('path/javascript:alert')).toBe(false)
      expect(isDangerousProtocol('subdomain.javascript.com')).toBe(false)
      expect(isDangerousProtocol('about:blank')).toBe(false)
    })

    it('should return false when colons appear in URLs for ports, credentials, or queries', () => {
      expect(isDangerousProtocol('https://example.com:8080/path')).toBe(false)
      expect(isDangerousProtocol('https://user:password@domain.com')).toBe(false)
      expect(isDangerousProtocol('https://example.com/page?key:val=1')).toBe(false)
      expect(isDangerousProtocol('https://example.com/#section:anchor')).toBe(false)
    })

    it('should return false for protocol-relative and absolute URLs', () => {
      expect(isDangerousProtocol('//javascript:alert(1)')).toBe(false)
      expect(isDangerousProtocol('/javascript:alert(1)')).toBe(false)
      expect(isDangerousProtocol('./javascript:alert(1)')).toBe(false)
      expect(isDangerousProtocol('../javascript:alert(1)')).toBe(false)
    })
  })

  describe('Empty, whitespace-only, and non-string inputs (Type resilience)', () => {
    it('should return false for empty string', () => {
      expect(isDangerousProtocol('')).toBe(false)
    })

    it('should return false for whitespace-only and control-only strings', () => {
      expect(isDangerousProtocol(' ')).toBe(false)
      expect(isDangerousProtocol('   ')).toBe(false)
      expect(isDangerousProtocol('\t')).toBe(false)
      expect(isDangerousProtocol('\n')).toBe(false)
      expect(isDangerousProtocol('\r\n')).toBe(false)
      expect(isDangerousProtocol('  \t \r\n  ')).toBe(false)
      expect(isDangerousProtocol('\0\0\0')).toBe(false)
      expect(isDangerousProtocol('\u200B\u200C\u200D\u2060\uFEFF')).toBe(false)
      expect(isDangerousProtocol('\x01\x1F\x7F\x80\x9F')).toBe(false)
    })

    it('should safely return false for invalid non-string runtime inputs', () => {
      expect(isDangerousProtocol(undefined)).toBe(false)
      expect(isDangerousProtocol(null)).toBe(false)
      expect(isDangerousProtocol(0)).toBe(false)
      expect(isDangerousProtocol(12345)).toBe(false)
      expect(isDangerousProtocol(-1)).toBe(false)
      expect(isDangerousProtocol(0.1 + 0.2)).toBe(false)
      expect(isDangerousProtocol(Number.NaN)).toBe(false)
      expect(isDangerousProtocol(Number.POSITIVE_INFINITY)).toBe(false)
      expect(isDangerousProtocol(Number.NEGATIVE_INFINITY)).toBe(false)
      expect(isDangerousProtocol(BigInt(0))).toBe(false)
      expect(isDangerousProtocol(false)).toBe(false)
      expect(isDangerousProtocol(true)).toBe(false)
      expect(isDangerousProtocol(Symbol('javascript:alert(1)'))).toBe(false)
      expect(isDangerousProtocol({})).toBe(false)
      expect(isDangerousProtocol([])).toBe(false)
      expect(isDangerousProtocol(() => {})).toBe(false)
      expect(isDangerousProtocol({ toString: () => 'javascript:alert(1)' })).toBe(false)
      expect(isDangerousProtocol({ valueOf: () => 'javascript:alert(1)' })).toBe(false)
    })
  })

  describe('Multilingual, Unicode, and Emoji support', () => {
    it('should return false for Cyrillic strings with colons', () => {
      expect(isDangerousProtocol('привет:мир')).toBe(false)
      expect(isDangerousProtocol('яндекс:почта')).toBe(false)
      expect(isDangerousProtocol('социальная-сеть:профиль')).toBe(false)
    })

    it('should return false for Vietnamese strings with colons', () => {
      expect(isDangerousProtocol('tiếng:việt')).toBe(false)
      expect(isDangerousProtocol('học:tập')).toBe(false)
      expect(isDangerousProtocol('mạng:xã-hội')).toBe(false)
    })

    it('should return false for European accented strings with colons', () => {
      expect(isDangerousProtocol('über:schön')).toBe(false)
      expect(isDangerousProtocol('café:latte')).toBe(false)
      expect(isDangerousProtocol('año:nuevo')).toBe(false)
    })

    it('should return false for CJK strings with colons', () => {
      expect(isDangerousProtocol('你好:世界')).toBe(false)
      expect(isDangerousProtocol('こんにちは:テスト')).toBe(false)
      expect(isDangerousProtocol('안녕하세요:테스트')).toBe(false)
    })

    it('should return false for Emoji strings with colons', () => {
      expect(isDangerousProtocol('🚀:space')).toBe(false)
      expect(isDangerousProtocol('🔥:fire')).toBe(false)
      expect(isDangerousProtocol('✨:stars')).toBe(false)
    })
  })

  describe('Performance, DoS resilience, and O(1) early exit', () => {
    it('should exit immediately and return false for long strings without a colon', () => {
      const longString = 'a'.repeat(100_000)
      const start = performance.now()
      const result = isDangerousProtocol(longString)
      const duration = performance.now() - start

      expect(result).toBe(false)
      expect(duration).toBeLessThan(10) // Must execute in < 10ms
    })

    it('should exit early when scheme exceeds maximum protocol length before colon', () => {
      const longScheme = `${'a'.repeat(50)}:value`
      const start = performance.now()
      const result = isDangerousProtocol(longScheme)
      const duration = performance.now() - start

      expect(result).toBe(false)
      expect(duration).toBeLessThan(10)
    })

    it('should exit early for 16-character scheme without colon', () => {
      expect(isDangerousProtocol('1234567890123456')).toBe(false)
    })
  })

  describe('Determinism and idempotence', () => {
    it('should return identical results for repeated calls with same input', () => {
      const dangerousInput = 'javascript:alert(1)'
      const safeInput = 'https://example.com'

      expect(isDangerousProtocol(dangerousInput)).toBe(true)
      expect(isDangerousProtocol(dangerousInput)).toBe(true)
      expect(isDangerousProtocol(safeInput)).toBe(false)
      expect(isDangerousProtocol(safeInput)).toBe(false)
    })
  })
})
