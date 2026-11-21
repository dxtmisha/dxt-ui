// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { isAutofillEvent } from '../isAutofillEvent'

describe('isAutofillEvent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

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

  it('should return false for null/undefined events and normal typing without autofill state', () => {
    const input = document.createElement('input')
    const insertEvent = new InputEvent('input', { inputType: 'insertText', data: '1' })

    expect(isAutofillEvent(insertEvent, input)).toBe(false)
    expect(isAutofillEvent(undefined)).toBe(false)
    expect(isAutofillEvent(null)).toBe(false)
  })
})
