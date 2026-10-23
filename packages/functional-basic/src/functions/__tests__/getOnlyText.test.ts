import { describe, expect, it } from 'vitest'
import { getOnlyText } from '../getOnlyText'

describe('getOnlyText', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should extract alphanumeric characters and spaces from basic English text', () => {
      expect(getOnlyText('Hello, World! 123')).toBe('Hello World 123')
    })

    it('should strip punctuation and preserve valid sentence words and spaces', () => {
      expect(getOnlyText('The quick brown fox, jumps over the lazy dog.')).toBe(
        'The quick brown fox jumps over the lazy dog'
      )
    })

    it('should clean alphanumeric identifiers with hyphens and underscores', () => {
      expect(getOnlyText('user_123-test.id#99')).toBe('user123testid99')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Cyrillic characters correctly', () => {
      expect(getOnlyText('Привет, Мир! 123')).toBe('Привет Мир 123')
      expect(getOnlyText('Заголовок №42: «Тестирование»')).toBe('Заголовок 42 Тестирование')
    })

    it('should handle Vietnamese text with complex diacritics in NFC form', () => {
      expect(getOnlyText('Xin chào, Thế giới! Giá: 100.000đ')).toBe('Xin chào Thế giới Giá 100000đ')
      expect(getOnlyText('Học tiếng Việt (rất vui, thú vị)')).toBe('Học tiếng Việt rất vui thú vị')
    })

    it('should preserve unicode combining diacritical marks (\\p{M}) in decomposed NFD strings', () => {
      const nfdVietnamese = 'tiếng Việt'.normalize('NFD')
      expect(getOnlyText(nfdVietnamese).normalize('NFC')).toBe('tiếng Việt')

      const nfdFrench = 'café crème'.normalize('NFD')
      expect(getOnlyText(nfdFrench).normalize('NFC')).toBe('café crème')

      expect(getOnlyText('e\u0301')).toBe('e\u0301')
    })

    it('should handle European languages with accents and special letters', () => {
      // Немецкий (умлауты и эсцет)
      expect(getOnlyText('Über schöne Grüße und 100% Späße!')).toBe('Über schöne Grüße und 100 Späße')
      // Французский (седиль, циркумфлекс, гравис)
      expect(getOnlyText('Ça va très bien, où est la fête?')).toBe('Ça va très bien où est la fête')
      // Испанский (тильда, знаки)
      expect(getOnlyText('¡Hola, Señor! ¿Cómo estás? Año 2026.')).toBe('Hola Señor Cómo estás Año 2026')
      // Греческий
      expect(getOnlyText('Γειά σου, Κόсμε! #1')).toBe('Γειά σου Κόсμε 1')
    })

    it('should handle Asian and CJK characters (Japanese, Chinese, Korean)', () => {
      expect(getOnlyText('こんにちは世界！ 2026年')).toBe('こんにちは世界 2026年')
      expect(getOnlyText('中文测试：你好，世界！')).toBe('中文测试你好世界')
      expect(getOnlyText('안녕하세요, 세계! 2026')).toBe('안녕하세요 세계 2026')
    })

    it('should handle RTL scripts (Arabic, Hebrew) and Indic/Thai scripts', () => {
      expect(getOnlyText('مرحبا بالعالم! 123')).toBe('مرحبا بالعالم 123')
      expect(getOnlyText('שלום עולם! 123')).toBe('שלום עולם 123')
      expect(getOnlyText('สวัสดีครับ 123')).toBe('สวัสดีครับ 123')
    })
  })

  describe('Whitespace, formatting, and trimming behavior', () => {
    it('should trim leading and trailing spaces', () => {
      expect(getOnlyText('   Leading and trailing   ')).toBe('Leading and trailing')
      expect(getOnlyText('\n\t  Wrapped with newlines and tabs  \t\n')).toBe('Wrapped with newlines and tabs')
    })

    it('should keep inner spaces when punctuation is removed', () => {
      expect(getOnlyText('Text with #$% and *&^%')).toBe('Text with  and')
      expect(getOnlyText('!!! Hello !!!')).toBe('Hello')
    })

    it('should preserve inner whitespace characters (tabs, newlines, carriage returns)', () => {
      expect(getOnlyText('Text\twith\nspaces')).toBe('Text\twith\nspaces')
      expect(getOnlyText('Line 1\r\nLine 2')).toBe('Line 1\r\nLine 2')
    })

    it('should preserve non-breaking spaces (\\u00A0)', () => {
      expect(getOnlyText('Non\u00A0breaking\u00A0space')).toBe('Non\u00A0breaking\u00A0space')
    })
  })

  describe('Empty, whitespace-only, and punctuation-only inputs', () => {
    it('should return empty string for empty string input', () => {
      expect(getOnlyText('')).toBe('')
    })

    it('should return empty string for whitespace-only input', () => {
      expect(getOnlyText('   ')).toBe('')
      expect(getOnlyText('\t\t\t')).toBe('')
      expect(getOnlyText('\n\r\n')).toBe('')
      expect(getOnlyText(' \t \n \r ')).toBe('')
    })

    it('should return empty string for strings consisting only of ASCII special characters', () => {
      expect(getOnlyText('!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~')).toBe('')
    })

    it('should return empty string for Unicode punctuation and symbols', () => {
      expect(getOnlyText('—«»“”‘’…¿¡•§¶†‡')).toBe('')
      expect(getOnlyText('   !@#   $%^   ')).toBe('')
    })
  })

  describe('Nullish and falsy values', () => {
    it('should safely return empty string for null and undefined', () => {
      expect(getOnlyText(null)).toBe('')
      expect(getOnlyText(undefined)).toBe('')
    })
  })

  describe('Numeric inputs', () => {
    it('should handle positive integers', () => {
      expect(getOnlyText(12345)).toBe('12345')
      expect(getOnlyText(999999)).toBe('999999')
    })

    it('should handle zero correctly', () => {
      expect(getOnlyText(0)).toBe('0')
    })

    it('should handle negative numbers (minus sign stripped as punctuation)', () => {
      expect(getOnlyText(-42)).toBe('42')
      expect(getOnlyText(-1)).toBe('1')
    })

    it('should handle floating point numbers (dot stripped as punctuation)', () => {
      expect(getOnlyText(3.14159)).toBe('314159')
      expect(getOnlyText(-0.5)).toBe('05')
    })

    it('should handle scientific notation and special numeric representations', () => {
      expect(getOnlyText(1e5)).toBe('100000')
      expect(getOnlyText(NaN)).toBe('NaN')
      expect(getOnlyText(Infinity)).toBe('Infinity')
    })
  })

  describe('Boolean inputs', () => {
    it('should convert true to 1 via anyToString', () => {
      expect(getOnlyText(true)).toBe('1')
    })

    it('should convert false to 0 via anyToString', () => {
      expect(getOnlyText(false)).toBe('0')
    })
  })

  describe('Complex non-string data structures (Objects and Arrays)', () => {
    it('should handle array of strings (joined by comma, comma stripped)', () => {
      expect(getOnlyText(['a', 'b', 'c'])).toBe('abc')
      expect(getOnlyText(['Hello!', 'World?'])).toBe('HelloWorld')
    })

    it('should handle array of numbers', () => {
      expect(getOnlyText([1, 2, 3])).toBe('123')
    })

    it('should handle mixed arrays', () => {
      expect(getOnlyText(['Item', 1, 'Value', 2])).toBe('Item1Value2')
    })

    it('should handle empty arrays and empty objects', () => {
      expect(getOnlyText([])).toBe('')
      expect(getOnlyText({})).toBe('')
    })

    it('should handle plain key-value objects (JSON structure stripped)', () => {
      expect(getOnlyText({ key: 'value' })).toBe('keyvalue')
      expect(getOnlyText({ id: 100, name: 'DXT' })).toBe('id100nameDXT')
    })
  })

  describe('Security, HTML tags, and metacharacters', () => {
    it('should strip HTML tags and XSS injection vectors', () => {
      expect(getOnlyText('<script>alert("XSS")</script>')).toBe('scriptalertXSSscript')
      expect(getOnlyText('<img src="x" onerror="alert(1)" />')).toBe('img srcx onerroralert1')
      expect(getOnlyText('<div class="box">Content 123</div>')).toBe('div classboxContent 123div')
    })

    it('should strip regex metacharacters completely', () => {
      expect(getOnlyText('.*+?^${}()|[]\\/')).toBe('')
    })

    it('should strip emojis (symbols outside letters, marks, and numbers)', () => {
      expect(getOnlyText('Hello 🚀 World 🔥 123')).toBe('Hello  World  123')
      expect(getOnlyText('🚀🔥✨🎉')).toBe('')
    })
  })

  describe('Determinism, state isolation, and idempotence', () => {
    it('should produce identical results over repeated calls with the same global regex', () => {
      const input = 'Sample Text #1 with Punctuation!'
      const expected = 'Sample Text 1 with Punctuation'

      for (let index = 0; index < 10; index++) {
        expect(getOnlyText(input)).toBe(expected)
      }
    })

    it('should be idempotent (f(f(x)) === f(x))', () => {
      const complexInput = '  Some Text, with #symbols & 123 numbers!  '
      const once = getOnlyText(complexInput)
      const twice = getOnlyText(once)

      expect(twice).toBe(once)
    })
  })
})
