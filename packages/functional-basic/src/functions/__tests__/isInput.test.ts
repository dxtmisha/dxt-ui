// @vitest-environment jsdom
import { afterEach, beforeEach, describe, it, expect } from 'vitest'
import { isInput } from '../isInput'

describe('isInput', () => {
  let originalWindow: typeof window

  beforeEach(() => {
    originalWindow = globalThis.window
  })

  afterEach(() => {
    globalThis.window = originalWindow
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for standard input elements', () => {
      const input = document.createElement('input')
      expect(isInput(input)).toBe(true)

      input.type = 'text'
      expect(isInput(input)).toBe(true)

      input.type = 'password'
      expect(isInput(input)).toBe(true)

      input.type = 'email'
      expect(isInput(input)).toBe(true)

      input.type = 'number'
      expect(isInput(input)).toBe(true)
    })

    it('should return true for textarea elements', () => {
      const textarea = document.createElement('textarea')
      expect(isInput(textarea)).toBe(true)
    })

    it('should return true for select elements', () => {
      const select = document.createElement('select')
      expect(isInput(select)).toBe(true)
    })

    it('should return true for contenteditable elements (via attribute, property, or isContentEditable)', () => {
      const div = document.createElement('div')
      div.setAttribute('contenteditable', 'true')
      expect(isInput(div)).toBe(true)

      const section = document.createElement('section')
      section.setAttribute('contenteditable', '')
      expect(isInput(section)).toBe(true)

      const article = document.createElement('article')
      article.contentEditable = 'true'
      expect(isInput(article)).toBe(true)

      const span = document.createElement('span')
      Object.defineProperty(span, 'isContentEditable', { value: true, configurable: true })
      expect(isInput(span)).toBe(true)
    })
  })

  describe('Disabled and Readonly states (default behavior)', () => {
    it('should return false for disabled input', () => {
      const input = document.createElement('input')
      input.disabled = true
      expect(isInput(input)).toBe(false)
    })

    it('should return false for readonly input', () => {
      const input = document.createElement('input')
      input.readOnly = true
      expect(isInput(input)).toBe(false)
    })

    it('should return false for disabled textarea', () => {
      const textarea = document.createElement('textarea')
      textarea.disabled = true
      expect(isInput(textarea)).toBe(false)
    })

    it('should return false for readonly textarea', () => {
      const textarea = document.createElement('textarea')
      textarea.readOnly = true
      expect(isInput(textarea)).toBe(false)
    })

    it('should return false for disabled select', () => {
      const select = document.createElement('select')
      select.disabled = true
      expect(isInput(select)).toBe(false)
    })

    it('should return false when contenteditable is explicitly set to false', () => {
      const div = document.createElement('div')
      div.setAttribute('contenteditable', 'false')
      expect(isInput(div)).toBe(false)
    })
  })

  describe('includeDisabled parameter behavior (bypassing readOnly and disabled checks)', () => {
    it('should return true for disabled input when includeDisabled is true', () => {
      const input = document.createElement('input')
      input.disabled = true
      expect(isInput(input, true)).toBe(true)
    })

    it('should return true for readonly input when includeDisabled is true', () => {
      const input = document.createElement('input')
      input.readOnly = true
      expect(isInput(input, true)).toBe(true)
    })

    it('should return true for disabled textarea when includeDisabled is true', () => {
      const textarea = document.createElement('textarea')
      textarea.disabled = true
      expect(isInput(textarea, true)).toBe(true)
    })

    it('should return true for readonly textarea when includeDisabled is true', () => {
      const textarea = document.createElement('textarea')
      textarea.readOnly = true
      expect(isInput(textarea, true)).toBe(true)
    })

    it('should return true for disabled select when includeDisabled is true', () => {
      const select = document.createElement('select')
      select.disabled = true
      expect(isInput(select, true)).toBe(true)
    })

    it('should still return false for non-input elements even when includeDisabled is true', () => {
      const div = document.createElement('div')
      expect(isInput(div, true)).toBe(false)

      const button = document.createElement('button')
      button.disabled = true
      expect(isInput(button, true)).toBe(false)
    })
  })

  describe('Non-input HTML elements', () => {
    it('should return false for generic non-editable HTML elements', () => {
      expect(isInput(document.createElement('div'))).toBe(false)
      expect(isInput(document.createElement('span'))).toBe(false)
      expect(isInput(document.createElement('p'))).toBe(false)
      expect(isInput(document.createElement('button'))).toBe(false)
      expect(isInput(document.createElement('form'))).toBe(false)
      expect(isInput(document.createElement('a'))).toBe(false)
    })
  })

  describe('Nullish, undefined, non-HTMLElement values, and SSR safety', () => {
    it('should return false for null and undefined', () => {
      expect(isInput(null)).toBe(false)
      expect(isInput(undefined)).toBe(false)
      expect(isInput()).toBe(false)
    })

    it('should return false for non-HTMLElement EventTarget instances', () => {
      expect(isInput(new EventTarget())).toBe(false)
      expect(isInput(window)).toBe(false)
      expect(isInput(document)).toBe(false)
    })

    it('should return false for non-element DOM nodes (Text, Comment)', () => {
      expect(isInput(document.createTextNode('text'))).toBe(false)
      expect(isInput(document.createComment('comment'))).toBe(false)
    })

    it('should return false for plain objects and duck-typed objects', () => {
      expect(isInput({} as unknown as EventTarget)).toBe(false)
      expect(isInput({ tagName: 'input' } as unknown as EventTarget)).toBe(false)
      expect(isInput({ tagName: 'INPUT', isContentEditable: true } as unknown as EventTarget)).toBe(false)
    })

    it('should return false for primitive types', () => {
      expect(isInput('input' as unknown as EventTarget)).toBe(false)
      expect(isInput(123 as unknown as EventTarget)).toBe(false)
      expect(isInput(true as unknown as EventTarget)).toBe(false)
    })

    it('should return false when executed in a non-DOM / SSR environment', () => {
      const input = document.createElement('input')
      Reflect.deleteProperty(globalThis, 'window')

      expect(isInput(input)).toBe(false)
    })
  })
})
