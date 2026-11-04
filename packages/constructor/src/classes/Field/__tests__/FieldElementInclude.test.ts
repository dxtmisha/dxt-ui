// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import * as functional from '@dxtmisha/functional'

import { FieldElementInclude } from '../FieldElementInclude'
import type { FieldElementInput } from '../../../types/fieldTypes'

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

  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return HTMLInputElement directly when ref holds it', () => {
      const elementRef = ref<FieldElementInput>(inputElement)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.get()).toBe(inputElement)
      expect(fieldElement.getElement()).toBe(elementRef)
    })

    it('should return nested input from wrapper object when present', () => {
      const mockWrapper = { input: inputElement }
      const elementRef = ref<FieldElementInput>(mockWrapper)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.get()).toBe(inputElement)
    })

    it('should return the element directly when an HTMLInputElement instance is passed to findByName', () => {
      const targetInput = document.createElement('input')
      const elementRef = ref<FieldElementInput>(inputElement)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.findByName(targetInput)).toBe(targetInput)
    })

    it('should find element by name in parent form', () => {
      const secondInput = document.createElement('input')
      secondInput.name = 'second-input'
      formElement.appendChild(secondInput)

      const elementRef = ref<FieldElementInput>(inputElement)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.findByName('second-input')).toBe(secondInput)
    })

    it('should find element globally when form does not contain it and isGlobal is true', () => {
      const globalInput = document.createElement('input')
      globalInput.id = 'global-id'
      document.body.appendChild(globalInput)

      const detachedInput = document.createElement('input')
      const elementRef = ref<FieldElementInput>(detachedInput)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.findByName('#global-id')).toBe(globalInput)
      expect(fieldElement.findByName('#global-id', true)).toBe(globalInput)
    })

    it('should not search globally when isGlobal is false', () => {
      const globalInput = document.createElement('input')
      globalInput.id = 'global-id'
      document.body.appendChild(globalInput)

      const detachedInput = document.createElement('input')
      const elementRef = ref<FieldElementInput>(detachedInput)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.findByName('#global-id', false)).toBeUndefined()
    })

    it('should call clear on input wrapper when defined and return current instance', () => {
      const clearSpy = vi.fn()
      const mockWrapper = { input: inputElement, clear: clearSpy }
      const elementRef = ref<FieldElementInput>(mockWrapper)
      const fieldElement = new FieldElementInclude({}, elementRef)

      const result = fieldElement.clear()

      expect(clearSpy).toHaveBeenCalledTimes(1)
      expect(result).toBe(fieldElement)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return undefined from get() when element ref is undefined', () => {
      const elementRef = ref<FieldElementInput>(undefined)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.get()).toBeUndefined()
    })

    it('should return undefined from findByName when selector is empty string', () => {
      const elementRef = ref<FieldElementInput>(inputElement)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.findByName('')).toBeUndefined()
    })

    it('should safely no-op on clear() when element is undefined or lacks clear method', () => {
      const emptyRef = ref<FieldElementInput>(undefined)
      const emptyFieldElement = new FieldElementInclude({}, emptyRef)
      expect(emptyFieldElement.clear()).toBe(emptyFieldElement)

      const nativeRef = ref<FieldElementInput>(inputElement)
      const nativeFieldElement = new FieldElementInclude({}, nativeRef)
      expect(nativeFieldElement.clear()).toBe(nativeFieldElement)
    })
  })

  describe('Metacharacters, invalid selectors, and SSR safety', () => {
    it('should not throw DOMException when nameSelectors is an invalid CSS selector', () => {
      const detachedInput = document.createElement('input')
      const elementRef = ref<FieldElementInput>(detachedInput)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(() => fieldElement.findByName('123-invalid-selector')).not.toThrow()
      expect(fieldElement.findByName('123-invalid-selector')).toBeUndefined()
      expect(() => fieldElement.findByName('unclosed"quote')).not.toThrow()
      expect(fieldElement.findByName('unclosed"quote')).toBeUndefined()
    })

    it('should not throw when form querySelector fails on unescaped quotes in nameSelectors', () => {
      const elementRef = ref<FieldElementInput>(inputElement)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(() => fieldElement.findByName('bad"name', false)).not.toThrow()
      expect(fieldElement.findByName('bad"name', false)).toBeUndefined()
    })

    it('should return undefined in non-DOM (SSR) runtime', () => {
      vi.spyOn(functional, 'isDomRuntime').mockReturnValue(false)

      const elementRef = ref<FieldElementInput>(inputElement)
      const fieldElement = new FieldElementInclude({}, elementRef)

      expect(fieldElement.findByName('test-input')).toBeUndefined()
    })
  })
})
