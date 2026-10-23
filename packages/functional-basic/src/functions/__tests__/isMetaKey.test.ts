// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { isMetaKey } from '../isMetaKey'

describe('isMetaKey', () => {
  describe('Standard functional requirements (Single modifier keys)', () => {
    it('should return true when event.metaKey is true', () => {
      expect(isMetaKey(new KeyboardEvent('keydown', { metaKey: true }))).toBe(true)
      expect(isMetaKey({ metaKey: true } as KeyboardEvent)).toBe(true)
    })

    it('should return true when event.altKey is true', () => {
      expect(isMetaKey(new KeyboardEvent('keydown', { altKey: true }))).toBe(true)
      expect(isMetaKey({ altKey: true } as KeyboardEvent)).toBe(true)
    })

    it('should return true when event.ctrlKey is true', () => {
      expect(isMetaKey(new KeyboardEvent('keydown', { ctrlKey: true }))).toBe(true)
      expect(isMetaKey({ ctrlKey: true } as KeyboardEvent)).toBe(true)
    })
  })

  describe('Combined modifier keys', () => {
    it('should return true when multiple modifier keys are active simultaneously', () => {
      expect(isMetaKey(new KeyboardEvent('keydown', { ctrlKey: true, altKey: true }))).toBe(true)
      expect(isMetaKey(new KeyboardEvent('keydown', { metaKey: true, ctrlKey: true }))).toBe(true)
      expect(isMetaKey(new KeyboardEvent('keydown', { metaKey: true, altKey: true, ctrlKey: true }))).toBe(true)
    })

    it('should return true when a meta/alt/ctrl key is combined with shiftKey', () => {
      expect(isMetaKey(new KeyboardEvent('keydown', { ctrlKey: true, shiftKey: true }))).toBe(true)
      expect(isMetaKey(new KeyboardEvent('keydown', { metaKey: true, shiftKey: true }))).toBe(true)
      expect(isMetaKey(new KeyboardEvent('keydown', { altKey: true, shiftKey: true }))).toBe(true)
    })
  })

  describe('Inactive modifiers and non-meta keys', () => {
    it('should return false when metaKey, altKey, and ctrlKey are all false', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'a',
        metaKey: false,
        altKey: false,
        ctrlKey: false
      })
      expect(isMetaKey(event)).toBe(false)
    })

    it('should return false when only shiftKey is pressed without metaKey, altKey, or ctrlKey', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'A',
        shiftKey: true,
        metaKey: false,
        altKey: false,
        ctrlKey: false
      })
      expect(isMetaKey(event)).toBe(false)
    })

    it('should return false for an empty event object where modifier properties are undefined', () => {
      expect(isMetaKey({} as KeyboardEvent)).toBe(false)
    })
  })
})
