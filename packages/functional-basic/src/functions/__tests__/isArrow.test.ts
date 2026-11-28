// @vitest-environment jsdom
import { describe, expect, expectTypeOf, it } from 'vitest'
import { isArrow } from '../isArrow'

describe('isArrow', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for all four arrow key strings with strict boolean return type', () => {
      expectTypeOf(isArrow('ArrowUp')).toEqualTypeOf<boolean>()

      expect(isArrow('ArrowUp')).toBe(true)
      expect(isArrow('ArrowDown')).toBe(true)
      expect(isArrow('ArrowLeft')).toBe(true)
      expect(isArrow('ArrowRight')).toBe(true)
    })

    it('should return true for native KeyboardEvent objects with arrow keys', () => {
      expect(isArrow(new KeyboardEvent('keydown', { key: 'ArrowUp', code: 'ArrowUp', keyCode: 38 }))).toBe(true)
      expect(isArrow(new KeyboardEvent('keydown', { key: 'ArrowDown', code: 'ArrowDown', keyCode: 40 }))).toBe(true)
      expect(isArrow(new KeyboardEvent('keydown', { key: 'ArrowLeft', code: 'ArrowLeft', keyCode: 37 }))).toBe(true)
      expect(isArrow(new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39 }))).toBe(true)
    })
  })

  describe('Property fallback branches (key, code, and legacy keyCode)', () => {
    it('should return true when only event.key matches an arrow key', () => {
      expect(isArrow({ key: 'ArrowUp' } as KeyboardEvent)).toBe(true)
      expect(isArrow({ key: 'ArrowDown' } as KeyboardEvent)).toBe(true)
      expect(isArrow({ key: 'ArrowLeft' } as KeyboardEvent)).toBe(true)
      expect(isArrow({ key: 'ArrowRight' } as KeyboardEvent)).toBe(true)
    })

    it('should return true when only event.code matches an arrow key', () => {
      expect(isArrow({ key: 'Unidentified', code: 'ArrowUp' } as KeyboardEvent)).toBe(true)
      expect(isArrow({ key: 'Unidentified', code: 'ArrowDown' } as KeyboardEvent)).toBe(true)
      expect(isArrow({ key: 'Unidentified', code: 'ArrowLeft' } as KeyboardEvent)).toBe(true)
      expect(isArrow({ key: 'Unidentified', code: 'ArrowRight' } as KeyboardEvent)).toBe(true)
    })

    it('should return true when only legacy event.keyCode is 37..40', () => {
      expect(isArrow({ keyCode: 37 } as KeyboardEvent)).toBe(true)
      expect(isArrow({ keyCode: 38 } as KeyboardEvent)).toBe(true)
      expect(isArrow({ keyCode: 39 } as KeyboardEvent)).toBe(true)
      expect(isArrow({ keyCode: 40 } as KeyboardEvent)).toBe(true)
    })
  })

  describe('IME composition guard, non-matching keys, and boundary values', () => {
    it('should return false when event.isComposing is true', () => {
      expect(isArrow({ key: 'ArrowDown', code: 'ArrowDown', keyCode: 40, isComposing: true } as KeyboardEvent)).toBe(false)
      expect(isArrow(new KeyboardEvent('keydown', { key: 'ArrowRight', isComposing: true }))).toBe(false)
    })

    it('should return false for other navigation, action, and character keys', () => {
      expect(isArrow('Enter')).toBe(false)
      expect(isArrow('Tab')).toBe(false)
      expect(isArrow('Escape')).toBe(false)
      expect(isArrow(' ')).toBe(false)
      expect(isArrow('a')).toBe(false)
      expect(isArrow(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13 }))).toBe(false)
      expect(isArrow(new KeyboardEvent('keydown', { key: 'Tab', code: 'Tab', keyCode: 9 }))).toBe(false)
    })

    it('should return false for adjacent keyCodes (36 Home, 41), 0, and negative values', () => {
      expect(isArrow({ key: 'Home', code: 'Home', keyCode: 36 } as KeyboardEvent)).toBe(false)
      expect(isArrow({ keyCode: 41 } as KeyboardEvent)).toBe(false)
      expect(isArrow({ keyCode: 0 } as KeyboardEvent)).toBe(false)
      expect(isArrow({ keyCode: -37 } as KeyboardEvent)).toBe(false)
    })

    it('should be case-sensitive and reject whitespace-padded or partial strings', () => {
      expect(isArrow('arrowup')).toBe(false)
      expect(isArrow('ARROWUP')).toBe(false)
      expect(isArrow(' ArrowUp ')).toBe(false)
      expect(isArrow('Up')).toBe(false)
      expect(isArrow('')).toBe(false)
      expect(isArrow('   ')).toBe(false)
    })

    it('should return false for empty event object, null, undefined, or omitted argument', () => {
      expect(isArrow({} as KeyboardEvent)).toBe(false)
      expect(isArrow(null)).toBe(false)
      expect(isArrow(undefined)).toBe(false)
      expect(isArrow()).toBe(false)
    })
  })
})
