// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { isAutofillEvent } from '../isAutofillEvent'

describe('isAutofillEvent', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for insertReplacementText, missing inputType, or autofilled target elements', () => {
      const input = document.createElement('input')

      const replacementEvent = new InputEvent('input', { inputType: 'insertReplacementText' })
      expect(isAutofillEvent(replacementEvent, input)).toBe(true)

      const plainInputEvent = new Event('input')
      expect(isAutofillEvent(plainInputEvent, input)).toBe(true)

      vi.spyOn(input, 'matches').mockImplementation(selector => selector === ':-webkit-autofill')
      const insertEvent = new InputEvent('input', { inputType: 'insertText', data: '1' })
      Object.defineProperty(insertEvent, 'target', { value: input })
      expect(isAutofillEvent(insertEvent)).toBe(true)
    })

    it('should prioritize explicit elementSelectors over event.target', () => {
      const targetInput = document.createElement('input')
      const explicitInput = document.createElement('input')
      explicitInput.id = 'explicit-autofill'
      document.body.appendChild(explicitInput)

      vi.spyOn(explicitInput, 'matches').mockImplementation(selector => selector === ':autofill')
      const insertEvent = new InputEvent('input', { inputType: 'insertText', data: '7' })
      Object.defineProperty(insertEvent, 'target', { value: targetInput })

      expect(isAutofillEvent(insertEvent)).toBe(false)
      expect(isAutofillEvent(insertEvent, '#explicit-autofill')).toBe(true)
    })
  })

  describe('Boundary values, regular input events, and SSR safety', () => {
    it('should return false for regular typing, paste, delete, and nullish events', () => {
      const input = document.createElement('input')

      expect(isAutofillEvent(new InputEvent('input', { inputType: 'insertText', data: '1' }), input)).toBe(false)
      expect(isAutofillEvent(new InputEvent('input', { inputType: 'insertFromPaste', data: '123' }), input)).toBe(false)
      expect(isAutofillEvent(new InputEvent('input', { inputType: 'deleteContentBackward' }), input)).toBe(false)
      expect(isAutofillEvent()).toBe(false)
      expect(isAutofillEvent(undefined)).toBe(false)
      expect(isAutofillEvent(null)).toBe(false)
    })

    it('should treat empty or non-string inputType as autofill and handle SSR safely', () => {
      const emptyInputTypeEvent = new InputEvent('input', { inputType: '' })
      expect(isAutofillEvent(emptyInputTypeEvent)).toBe(true)

      vi.stubGlobal('window', undefined)
      const ssrInsertEvent = { inputType: 'insertText', target: null } as unknown as Event
      expect(isAutofillEvent(ssrInsertEvent, '#missing')).toBe(false)
      expect(isAutofillEvent({ inputType: 'insertReplacementText' } as unknown as Event)).toBe(true)
    })
  })
})
