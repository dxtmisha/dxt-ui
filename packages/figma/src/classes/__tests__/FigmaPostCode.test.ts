import { describe, it, expect } from 'vitest'
import { FigmaPostCode } from '../FigmaPostCode'

describe('FigmaPostCode', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should have a default code starting with figma- followed by 6 digits', () => {
      const code = FigmaPostCode.get()
      expect(code).toMatch(/^figma-\d{6}$/)
    })

    it('get() should return a consistent code across consecutive calls', () => {
      const firstCall = FigmaPostCode.get()
      const secondCall = FigmaPostCode.get()
      expect(firstCall).toBe(secondCall)
    })

    it('is() should return true when the provided code matches the current code exactly', () => {
      const code = FigmaPostCode.get()
      expect(FigmaPostCode.is(code)).toBe(true)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('is() should return false for empty or undefined code without crashing', () => {
      expect(FigmaPostCode.is()).toBe(false)
      expect(FigmaPostCode.is(undefined)).toBe(false)
      expect(FigmaPostCode.is('')).toBe(false)
      expect(FigmaPostCode.is('   ')).toBe(false)
    })

    it('is() should return false when only the raw numeric suffix is passed', () => {
      const suffix = FigmaPostCode.get().replace(/^figma-/, '')
      expect(FigmaPostCode.is(suffix)).toBe(false)
    })

    it('is() should be strictly case-sensitive', () => {
      const code = FigmaPostCode.get()
      expect(FigmaPostCode.is(code.toUpperCase())).toBe(false)
      expect(FigmaPostCode.is(` ${code} `)).toBe(false)
    })

    it('is() should return false for string representations of keywords', () => {
      expect(FigmaPostCode.is('null')).toBe(false)
      expect(FigmaPostCode.is('undefined')).toBe(false)
      expect(FigmaPostCode.is('false')).toBe(false)
      expect(FigmaPostCode.is('0')).toBe(false)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('is() should safely reject regex metacharacters and injection strings', () => {
      const metacharacters = ['.*', '+', '?', '^', '$', '(', ')', '[', ']', '{', '}', '|', '\\']
      for (const char of metacharacters) {
        expect(FigmaPostCode.is(char)).toBe(false)
        expect(FigmaPostCode.is(`figma-${char}`)).toBe(false)
      }
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('is() should handle Cyrillic, Vietnamese, and Emoji strings safely', () => {
      expect(FigmaPostCode.is('figma-проверка')).toBe(false)
      expect(FigmaPostCode.is('figma-kiểm_tra')).toBe(false)
      expect(FigmaPostCode.is('figma-🔒🚀')).toBe(false)
    })
  })

  describe('Statefulness, isolation, and one-time session lock via set()', () => {
    it('set() should update code once with figma- prefix and lock against subsequent modifications', () => {
      const initialCode = FigmaPostCode.get()
      const customId = '777888'

      FigmaPostCode.set(customId)

      expect(FigmaPostCode.get()).toBe(`figma-${customId}`)
      expect(FigmaPostCode.is(`figma-${customId}`)).toBe(true)
      expect(FigmaPostCode.is(initialCode)).toBe(false)

      // Subsequent calls to set() must be ignored because isEditable is now false
      FigmaPostCode.set('999000')
      FigmaPostCode.set('')
      expect(FigmaPostCode.get()).toBe(`figma-${customId}`)
      expect(FigmaPostCode.is('figma-999000')).toBe(false)
    })
  })
})
