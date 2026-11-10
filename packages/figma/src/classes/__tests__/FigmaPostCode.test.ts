import { describe, it, expect } from 'vitest'
import { FigmaPostCode } from '../FigmaPostCode'

describe('FigmaPostCode', () => {
  describe('Default initialization and get()', () => {
    it('should have a default code starting with figma- followed by 6 digits', () => {
      const code = FigmaPostCode.get()
      expect(code).toMatch(/^figma-\d{6}$/)
    })

    it('get() should return a consistent code across consecutive calls', () => {
      const firstCall = FigmaPostCode.get()
      const secondCall = FigmaPostCode.get()
      expect(firstCall).toBe(secondCall)
    })
  })

  describe('Verification via is()', () => {
    it('should return true when the provided code matches the current code', () => {
      const code = FigmaPostCode.get()
      expect(FigmaPostCode.is(code)).toBe(true)
    })

    it('should return false for non-matching code', () => {
      expect(FigmaPostCode.is('wrong-code')).toBe(false)
    })

    it('should return false for undefined or empty string', () => {
      expect(FigmaPostCode.is()).toBe(false)
      expect(FigmaPostCode.is(undefined)).toBe(false)
      expect(FigmaPostCode.is('')).toBe(false)
    })

    it('should return false when only the raw suffix without figma- prefix is passed', () => {
      const suffix = FigmaPostCode.get().replace(/^figma-/, '')
      expect(FigmaPostCode.is(suffix)).toBe(false)
    })

    it('should be strictly case-sensitive and reject leading/trailing whitespace', () => {
      const code = FigmaPostCode.get()
      expect(FigmaPostCode.is(code.toUpperCase())).toBe(false)
      expect(FigmaPostCode.is(` ${code} `)).toBe(false)
    })
  })

  describe('One-time session lock via set()', () => {
    it('should update the code once with figma- prefix and lock against subsequent modifications', () => {
      const initialCode = FigmaPostCode.get()
      const customId = '123456'

      FigmaPostCode.set(customId)

      expect(FigmaPostCode.get()).toBe(`figma-${customId}`)
      expect(FigmaPostCode.is(`figma-${customId}`)).toBe(true)
      expect(FigmaPostCode.is(initialCode)).toBe(false)

      // Subsequent calls to set() must be ignored because isEditable is now false
      FigmaPostCode.set('654321')
      FigmaPostCode.set('')
      expect(FigmaPostCode.get()).toBe(`figma-${customId}`)
      expect(FigmaPostCode.is('figma-654321')).toBe(false)
    })
  })
})
