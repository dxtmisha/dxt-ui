// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'

import { FormElements } from '../FormElements'
import { FormElementsNative } from '../FormElementsNative'
import { FormError } from '../FormError'
import type { FormPropsBasic } from '../props'

describe('FormError', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Custom elements mode (native = false)', () => {
    it('should evaluate errors, checkValidity, validation message fallbacks, and reset without instantiating native', () => {
      const props: FormPropsBasic = { native: false }
      const elements = new FormElements()
      const nativeGetter = vi.fn(() => new FormElementsNative(ref(undefined)))
      const formError = new FormError(props, () => elements, nativeGetter)

      expect(formError.get()).toBe(false)
      expect(formError.isError()).toBe(false)
      expect(formError.checkValidity()).toBe(true)
      expect(formError.getErrors()).toEqual({})

      elements.register({
        name: 'email',
        value: ref('invalid'),
        getValue: () => 'invalid',
        setValue: vi.fn(),
        clear: vi.fn(),
        isChanged: () => false,
        checkValidity: () => false,
        getValidationMessage: () => 'Invalid email address'
      })
      elements.register({
        name: 'phone',
        value: ref(''),
        getValue: () => '',
        setValue: vi.fn(),
        clear: vi.fn(),
        isChanged: () => false,
        checkValidity: () => true,
        getValidationMessage: () => '',
        data: { value: '', status: false, validityMessage: 'Phone required' }
      })

      formError.update()

      expect(formError.get()).toBe(true)
      expect(formError.isError()).toBe(true)
      expect(formError.checkValidity()).toBe(false)
      expect(formError.getErrors()).toEqual({
        email: 'Invalid email address',
        phone: 'Phone required'
      })

      formError.reset()
      expect(formError.get()).toBe(false)
      expect(formError.getErrors()).toEqual({})
      expect(nativeGetter).not.toHaveBeenCalled()
    })
  })

  describe('Native elements mode (native = true) and lifecycle watchers', () => {
    it('should track native element errors and reactively update on mount until unmount', async () => {
      const props = reactive<FormPropsBasic>({ native: true })
      const form = document.createElement('form')
      const input = document.createElement('input')
      input.name = 'username'
      input.required = true
      input.value = ''
      form.appendChild(input)

      const elementsGetter = vi.fn(() => new FormElements())
      const native = new FormElementsNative(ref(form))
      native.update()

      const formError = new FormError(props, elementsGetter, () => native)
      formError.onMounted()

      expect(formError.get()).toBe(true)
      expect(formError.isError()).toBe(true)
      expect(formError.checkValidity()).toBe(false)
      expect(formError.getErrors().username).toBeDefined()
      expect(elementsGetter).not.toHaveBeenCalled()

      input.value = 'john_doe'
      native.update()
      await nextTick()

      expect(formError.get()).toBe(false)
      expect(formError.isError()).toBe(false)
      expect(formError.getErrors()).toEqual({})

      formError.onUnmounted()

      input.value = ''
      native.update()
      await nextTick()

      // Watcher stopped on unmount so cached ref stays false until manual update()
      expect(formError.get()).toBe(false)
      expect(formError.isError()).toBe(true)
    })

    it('should switch watched source dynamically when props.native toggles', async () => {
      const props = reactive<FormPropsBasic>({ native: false })
      const elements = new FormElements()
      const form = document.createElement('form')
      const input = document.createElement('input')
      input.name = 'requiredField'
      input.required = true
      input.value = ''
      form.appendChild(input)

      const native = new FormElementsNative(ref(form))
      native.update()

      const formError = new FormError(props, () => elements, () => native)
      formError.onMounted()
      expect(formError.get()).toBe(false)

      props.native = true
      await nextTick()
      expect(formError.get()).toBe(true)

      formError.onUnmounted()
    })
  })
})
