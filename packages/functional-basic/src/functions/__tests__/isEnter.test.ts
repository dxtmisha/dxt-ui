// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { isEnter } from '../isEnter'

describe('isEnter', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true when event.key is "Enter"', () => {
      const event = new KeyboardEvent('keydown', { key: 'Enter' })
      expect(isEnter(event)).toBe(true)
    })

    it('should return true when event.key is " " (Space)', () => {
      const event = new KeyboardEvent('keydown', { key: ' ' })
      expect(isEnter(event)).toBe(true)
    })

    it('should return true when event.code is "Enter"', () => {
      const event = { code: 'Enter' } as KeyboardEvent
      expect(isEnter(event)).toBe(true)
    })

    it('should return true when event.code is "NumpadEnter"', () => {
      const event = { code: 'NumpadEnter' } as KeyboardEvent
      expect(isEnter(event)).toBe(true)
    })

    it('should return true when event.code is "Space"', () => {
      const event = { code: 'Space' } as KeyboardEvent
      expect(isEnter(event)).toBe(true)
    })

    it('should return true for legacy event.key "Spacebar"', () => {
      const event = { key: 'Spacebar' } as KeyboardEvent
      expect(isEnter(event)).toBe(true)
    })

    it('should return true for legacy keyCode 13 and 32', () => {
      expect(isEnter({ keyCode: 13 } as KeyboardEvent)).toBe(true)
      expect(isEnter({ keyCode: 32 } as KeyboardEvent)).toBe(true)
    })

    it('should return false for other keys', () => {
      expect(isEnter(new KeyboardEvent('keydown', { key: 'Tab' }))).toBe(false)
      expect(isEnter(new KeyboardEvent('keydown', { key: 'Escape' }))).toBe(false)
      expect(isEnter(new KeyboardEvent('keydown', { key: 'ArrowDown' }))).toBe(false)
      expect(isEnter(new KeyboardEvent('keydown', { key: 'a' }))).toBe(false)
    })
  })

  describe('Input element filtering (isInput & isInputElement override)', () => {
    it('should return false if target is an HTMLInputElement', () => {
      const input = document.createElement('input')
      const event = { key: 'Enter', target: input } as unknown as KeyboardEvent
      expect(isEnter(event)).toBe(false)
    })

    it('should return false if target is an HTMLTextAreaElement', () => {
      const textarea = document.createElement('textarea')
      const event = { key: ' ', target: textarea } as unknown as KeyboardEvent
      expect(isEnter(event)).toBe(false)
    })

    it('should return false if target is a select element', () => {
      const select = document.createElement('select')
      const event = { key: 'Enter', target: select } as unknown as KeyboardEvent
      expect(isEnter(event)).toBe(false)
    })

    it('should return false if target is contenteditable', () => {
      const div = document.createElement('div')
      div.setAttribute('contenteditable', 'true')
      const event = { key: 'Enter', target: div } as unknown as KeyboardEvent
      expect(isEnter(event)).toBe(false)
    })

    it('should return true if target is a standard non-editable element (div, button, span)', () => {
      const button = document.createElement('button')
      const event = { key: 'Enter', target: button } as unknown as KeyboardEvent
      expect(isEnter(event)).toBe(true)
    })

    it('should respect isInputElement override parameter when set to false even if target is an input', () => {
      const input = document.createElement('input')
      const event = { key: 'Enter', target: input } as unknown as KeyboardEvent
      expect(isEnter(event, false)).toBe(true)
    })

    it('should respect isInputElement override parameter when set to true even if target is a div', () => {
      const div = document.createElement('div')
      const event = { key: 'Enter', target: div } as unknown as KeyboardEvent
      expect(isEnter(event, true)).toBe(false)
    })
  })

  describe('IME composition & Nullish safety', () => {
    it('should return false when event.isComposing is true', () => {
      const event = { key: 'Enter', isComposing: true } as KeyboardEvent
      expect(isEnter(event)).toBe(false)
    })

    it('should safely return false for null or undefined event', () => {
      expect(isEnter(null as unknown as KeyboardEvent)).toBe(false)
      expect(isEnter(undefined as unknown as KeyboardEvent)).toBe(false)
    })

    it('should return false for empty event object', () => {
      expect(isEnter({} as KeyboardEvent)).toBe(false)
    })
  })
})
