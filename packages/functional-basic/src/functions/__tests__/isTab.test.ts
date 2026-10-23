// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { isTab } from '../isTab'

describe('isTab', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for a native KeyboardEvent with Tab key and code', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        code: 'Tab',
        keyCode: 9
      })

      expect(isTab(event)).toBe(true)
    })

    it('should return true when Shift+Tab is pressed', () => {
      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        code: 'Tab',
        keyCode: 9,
        shiftKey: true
      })

      expect(isTab(event)).toBe(true)
    })
  })

  describe('Property fallback branches (key, code, and legacy keyCode)', () => {
    it('should return true when only event.key is "Tab"', () => {
      const event = { key: 'Tab' } as KeyboardEvent

      expect(isTab(event)).toBe(true)
    })

    it('should return true when only event.code is "Tab"', () => {
      const event = { key: 'Unidentified', code: 'Tab' } as KeyboardEvent

      expect(isTab(event)).toBe(true)
    })

    it('should return true when only legacy event.keyCode is 9', () => {
      const event = { keyCode: 9 } as KeyboardEvent

      expect(isTab(event)).toBe(true)
    })
  })

  describe('Non-matching keys and boundary values', () => {
    it('should return false for other common navigation and action keys', () => {
      expect(isTab(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13 }))).toBe(false)
      expect(isTab(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27 }))).toBe(false)
      expect(isTab(new KeyboardEvent('keydown', { key: ' ', code: 'Space', keyCode: 32 }))).toBe(false)
      expect(isTab(new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39 }))).toBe(false)
    })

    it('should return false for adjacent keyCodes (8 Backspace and 10) and 0', () => {
      expect(isTab({ key: 'Backspace', code: 'Backspace', keyCode: 8 } as KeyboardEvent)).toBe(false)
      expect(isTab({ keyCode: 10 } as KeyboardEvent)).toBe(false)
      expect(isTab({ keyCode: 0 } as KeyboardEvent)).toBe(false)
      expect(isTab({ keyCode: -9 } as KeyboardEvent)).toBe(false)
    })

    it('should be case-sensitive for key and code values', () => {
      expect(isTab({ key: 'tab', code: 'tab', keyCode: 0 } as KeyboardEvent)).toBe(false)
      expect(isTab({ key: 'TAB', code: 'TAB', keyCode: 0 } as KeyboardEvent)).toBe(false)
    })

    it('should return false for an empty event object', () => {
      const event = {} as KeyboardEvent

      expect(isTab(event)).toBe(false)
    })
  })
})
