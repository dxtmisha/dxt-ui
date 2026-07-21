// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { FieldElementInclude } from '../FieldElementInclude'

describe('FieldElementInclude', () => {
  let inputElement: HTMLInputElement
  let formElement: HTMLFormElement

  beforeEach(() => {
    formElement = document.createElement('form')
    inputElement = document.createElement('input')
    inputElement.name = 'test-input'
    formElement.appendChild(inputElement)
    document.body.appendChild(formElement)
  })

  it('should return HTMLInputElement directly if ref holds it', () => {
    const elementRef = ref(inputElement)
    const fieldElement = new FieldElementInclude({}, elementRef)

    expect(fieldElement.get()).toBe(inputElement)
    expect(fieldElement.getElement()).toBe(elementRef)
  })

  it('should return nested input from wrapper object if present', () => {
    const mockWrapper = { input: inputElement }
    const elementRef = ref(mockWrapper) as any
    const fieldElement = new FieldElementInclude({}, elementRef)

    expect(fieldElement.get()).toBe(inputElement)
  })

  it('should find element by name in parent form', () => {
    const secondInput = document.createElement('input')
    secondInput.name = 'second-input'
    formElement.appendChild(secondInput)

    const elementRef = ref(inputElement)
    const fieldElement = new FieldElementInclude({}, elementRef)

    expect(fieldElement.findByName('second-input')).toBe(secondInput)
  })

  it('should find element globally if form is missing', () => {
    const globalInput = document.createElement('input')
    globalInput.id = 'global-id'
    document.body.appendChild(globalInput)

    const detachedInput = document.createElement('input')
    const elementRef = ref(detachedInput)
    const fieldElement = new FieldElementInclude({}, elementRef)

    expect(fieldElement.findByName('#global-id')).toBe(globalInput)

    document.body.removeChild(globalInput)
  })

  it('should call clear on input wrapper if defined', () => {
    const clearSpy = vi.fn()
    const mockWrapper = { input: inputElement, clear: clearSpy }
    const elementRef = ref(mockWrapper) as any
    const fieldElement = new FieldElementInclude({}, elementRef)

    fieldElement.clear()
    expect(clearSpy).toHaveBeenCalled()
  })
})
