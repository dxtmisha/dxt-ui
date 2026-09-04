// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import { FormElements } from '../FormElements'
import { FormElementsNative } from '../FormElementsNative'
import { FormError } from '../FormError'
import type { FormPropsBasic } from '../props'

describe('FormError', () => {
  it('manages error states for custom elements mode (native = false)', async () => {
    const props: FormPropsBasic = { native: false }
    const form = document.createElement('form')
    const elements = new FormElements()
    const native = new FormElementsNative(ref(form))
    const formError = new FormError(props, elements, native)

    expect(formError.get()).toBe(false)
    expect(formError.isError()).toBe(false)
    expect(formError.checkValidity()).toBe(true)
    expect(formError.getErrors()).toEqual({})

    elements.register({
      name: 'email',
      value: ref('invalid-email'),
      getValue: () => 'invalid-email',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => false,
      getValidationMessage: () => 'Invalid email address'
    })

    formError.update()

    expect(formError.get()).toBe(true)
    expect(formError.isError()).toBe(true)
    expect(formError.checkValidity()).toBe(false)
    expect(formError.getErrors()).toEqual({
      email: 'Invalid email address'
    })

    formError.reset()
    expect(formError.get()).toBe(false)
    expect(formError.getErrors()).toEqual({})
  })

  it('manages error states for native elements mode (native = true)', async () => {
    const props: FormPropsBasic = { native: true }
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.name = 'username'
    input.required = true
    input.value = ''
    form.appendChild(input)

    const elements = new FormElements()
    const native = new FormElementsNative(ref(form))
    native.update()
    const formError = new FormError(props, elements, native)
    formError.update()

    expect(formError.get()).toBe(true)
    expect(formError.isError()).toBe(true)
    expect(formError.getErrors().username).toBeDefined()

    input.value = 'john_doe'
    native.update()
    formError.update()

    expect(formError.get()).toBe(false)
    expect(formError.isError()).toBe(false)
    expect(formError.getErrors()).toEqual({})
  })
})
