import { describe, expect, it } from 'vitest'
import { removeCommonPrefix } from '../removeCommonPrefix'

describe('removeCommonPrefix', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should remove a full prefix matching at the start', () => {
      expect(removeCommonPrefix('hello World', 'hello')).toBe('World')
    })

    it('should remove prefix without space separator', () => {
      expect(removeCommonPrefix('helloWorld', 'hello')).toBe('World')
    })

    it('should remove prefix from a path', () => {
      expect(removeCommonPrefix('/usr/local/bin', '/usr/local')).toBe('/bin')
    })

    it('should handle multi-word strings', () => {
      expect(removeCommonPrefix('The quick brown fox', 'The quick')).toBe('brown fox')
    })
  })

  describe('Trimming control (trim parameter)', () => {
    it('should trim surrounding whitespace by default when trim is omitted', () => {
      expect(removeCommonPrefix('prefix   data   ', 'prefix')).toBe('data')
    })

    it('should trim surrounding whitespace when trim is explicitly true', () => {
      expect(removeCommonPrefix('prefix   data   ', 'prefix', true)).toBe('data')
    })

    it('should preserve leading whitespace after prefix removal when trim is false', () => {
      expect(removeCommonPrefix('hello World', 'hello', false)).toBe(' World')
    })

    it('should preserve trailing whitespace when trim is false', () => {
      expect(removeCommonPrefix('hello   ', 'hello', false)).toBe('   ')
    })

    it('should preserve both leading and trailing whitespace when trim is false', () => {
      expect(removeCommonPrefix('prefix   data   ', 'prefix', false)).toBe('   data   ')
    })

    it('should trim surrounding whitespace even when prefix does not match if trim is true', () => {
      expect(removeCommonPrefix('   helloWorld   ', 'goodbye', true)).toBe('helloWorld')
    })

    it('should preserve surrounding whitespace when prefix does not match and trim is false', () => {
      expect(removeCommonPrefix('   helloWorld   ', 'goodbye', false)).toBe('   helloWorld   ')
    })

    it('should preserve internal whitespace while trimming edges when trim is true', () => {
      expect(removeCommonPrefix('prefix  foo  bar  baz  ', 'prefix', true)).toBe('foo  bar  baz')
    })
  })

  describe('Partial prefix matching and length boundaries', () => {
    it('should remove the common prefix when a partial match exists', () => {
      expect(removeCommonPrefix('helloWorld', 'helium')).toBe('loWorld')
    })

    it('should remove partial common prefix without trimming when trim is false', () => {
      expect(removeCommonPrefix('hello   World', 'helium', false)).toBe('lo   World')
    })

    it('should return main string when prefix has 0 characters in common', () => {
      expect(removeCommonPrefix('helloWorld', 'goodbye')).toBe('helloWorld')
    })

    it('should handle case when prefix is longer than main string with partial match', () => {
      expect(removeCommonPrefix('hi', 'hello')).toBe('i')
    })

    it('should handle case when prefix is longer than main string with zero match', () => {
      expect(removeCommonPrefix('hi', 'bye')).toBe('hi')
    })

    it('should return empty string when main string equals prefix and trim is true', () => {
      expect(removeCommonPrefix('hello', 'hello')).toBe('')
    })

    it('should return empty string when main string equals prefix and trim is false', () => {
      expect(removeCommonPrefix('hello', 'hello', false)).toBe('')
    })

    it('should handle single-character matching strings', () => {
      expect(removeCommonPrefix('a', 'a')).toBe('')
    })

    it('should handle single-character differing strings', () => {
      expect(removeCommonPrefix('a', 'b')).toBe('a')
    })
  })

  describe('Empty and whitespace-only inputs', () => {
    it('should return trimmed main string when prefix is empty and trim is true', () => {
      expect(removeCommonPrefix('  hello  ', '', true)).toBe('hello')
    })

    it('should preserve whitespace when prefix is empty and trim is false', () => {
      expect(removeCommonPrefix('  hello  ', '', false)).toBe('  hello  ')
    })

    it('should return empty string when main string is empty and prefix is non-empty', () => {
      expect(removeCommonPrefix('', 'hello')).toBe('')
    })

    it('should return empty string when both main string and prefix are empty', () => {
      expect(removeCommonPrefix('', '')).toBe('')
    })

    it('should return empty string when main string consists only of spaces after prefix removal and trim is true', () => {
      expect(removeCommonPrefix('hello   ', 'hello', true)).toBe('')
    })

    it('should preserve spaces when main string consists only of spaces after prefix removal and trim is false', () => {
      expect(removeCommonPrefix('hello   ', 'hello', false)).toBe('   ')
    })

    it('should trim tabs, newlines, and carriage returns when trim is true', () => {
      expect(removeCommonPrefix('prefix\t\r\ncontent\n\t', 'prefix', true)).toBe('content')
    })

    it('should preserve tabs, newlines, and carriage returns when trim is false', () => {
      expect(removeCommonPrefix('prefix\t\r\ncontent\n\t', 'prefix', false)).toBe('\t\r\ncontent\n\t')
    })
  })

  describe('Metacharacters, paths, and security strings', () => {
    it('should handle UNIX file paths correctly', () => {
      expect(removeCommonPrefix('/var/log/nginx/access.log', '/var/log/')).toBe('nginx/access.log')
    })

    it('should handle Windows file paths with backslashes', () => {
      expect(removeCommonPrefix('C:\\Users\\Admin\\Documents', 'C:\\Users\\')).toBe('Admin\\Documents')
    })

    it('should handle regex metacharacters without errors', () => {
      expect(removeCommonPrefix('$100.00 USD', '$100.')).toBe('00 USD')
      expect(removeCommonPrefix('[PREFIX] User text', '[PREFIX]')).toBe('User text')
      expect(removeCommonPrefix('(group) item', '(group)')).toBe('item')
      expect(removeCommonPrefix('C++ program', 'C++')).toBe('program')
      expect(removeCommonPrefix('one|two|three', 'one|')).toBe('two|three')
      expect(removeCommonPrefix('a^b$c*d?e', 'a^b$')).toBe('c*d?e')
    })

    it('should handle HTML and XSS payloads without alteration', () => {
      const xssString = '<script>alert("xss")</script>'
      expect(removeCommonPrefix(xssString, '<script>')).toBe('alert("xss")</script>')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Cyrillic characters with full prefix match', () => {
      expect(removeCommonPrefix('Привет, мир!', 'Привет, ')).toBe('мир!')
    })

    it('should handle Cyrillic characters with partial prefix match', () => {
      expect(removeCommonPrefix('приветствие', 'привычка')).toBe('етствие')
    })

    it('should handle Vietnamese diacritics', () => {
      expect(removeCommonPrefix('tiền tố chung cho tất cả', 'tiền tố ')).toBe('chung cho tất cả')
      expect(removeCommonPrefix('Học tiếng Việt', 'Học ')).toBe('tiếng Việt')
    })

    it('should handle German umlauts and French accents', () => {
      expect(removeCommonPrefix('überraschend gut', 'über')).toBe('raschend gut')
      expect(removeCommonPrefix('cafétéria centrale', 'café')).toBe('téria centrale')
      expect(removeCommonPrefix('año nuevo', 'año ')).toBe('nuevo')
    })

    it('should handle CJK characters', () => {
      expect(removeCommonPrefix('こんにちは世界', 'こんにちは')).toBe('世界')
      expect(removeCommonPrefix('你好世界', '你好')).toBe('世界')
    })

    it('should correctly handle emojis in full prefix match', () => {
      expect(removeCommonPrefix('🚀🚀rocket_ship', '🚀🚀')).toBe('rocket_ship')
      expect(removeCommonPrefix('🎉✨ celebration', '🎉✨')).toBe('celebration')
    })

    it('should handle partial emoji prefix matches safely', () => {
      expect(removeCommonPrefix('🚀launch', '🚀target')).toBe('launch')
    })
  })

  describe('Case sensitivity', () => {
    it('should be strictly case-sensitive for ASCII letters', () => {
      expect(removeCommonPrefix('HelloWorld', 'hello')).toBe('HelloWorld')
      expect(removeCommonPrefix('helloWorld', 'HELLO')).toBe('helloWorld')
    })

    it('should be strictly case-sensitive for Cyrillic letters', () => {
      expect(removeCommonPrefix('Привет', 'привет')).toBe('Привет')
    })
  })
})
