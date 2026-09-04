// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { nextTick, ref, toRefs } from 'vue'

import { FormElements } from '../FormElements'
import { FormElementsNative } from '../FormElementsNative'
import { FormValue } from '../FormValue'

describe('FormValue', () => {
  it('delegates reading and writing to FormElements in custom elements mode', () => {
    const elements = new FormElements()
    const setUsernameMock = vi.fn()
    const setAgeMock = vi.fn()

    elements.register({
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: setUsernameMock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: {
        value: 'admin',
        status: true
      }
    })

    elements.register({
      name: 'age',
      value: ref(25),
      getValue: () => 25,
      setValue: setAgeMock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    const formValue = new FormValue({ native: false }, undefined, elements)

    expect(formValue.get()).toEqual({
      username: 'admin',
      age: 25
    })
    expect(formValue.getValue('username')).toBe('admin')
    expect(formValue.getData()).toEqual({
      username: {
        value: 'admin',
        status: true
      },
      age: {
        value: 25
      }
    })

    formValue.set('username', 'root')
    expect(setUsernameMock).toHaveBeenCalledWith('root')

    formValue.setValues({ username: 'guest', age: 30 })
    expect(setUsernameMock).toHaveBeenCalledWith('guest')
    expect(setAgeMock).toHaveBeenCalledWith(30)
  })

  it('delegates reading and writing to FormElementsNative in native mode', () => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.name = 'email'
    input.value = 'test@example.com'
    form.appendChild(input)

    const native = new FormElementsNative(ref(form))
    const formValue = new FormValue({ native: true }, undefined, undefined, native)

    expect(formValue.get()).toEqual({
      email: 'test@example.com'
    })
    expect(formValue.getValue('email')).toBe('test@example.com')

    formValue.set('email', 'updated@example.com')
    expect(input.value).toBe('updated@example.com')
    expect(formValue.getValue('email')).toBe('updated@example.com')

    formValue.setValues({ email: 'bulk@example.com' })
    expect(input.value).toBe('bulk@example.com')
    expect(formValue.get()).toEqual({
      email: 'bulk@example.com'
    })
  })

  it('watches refs.value and updates form elements on change', async () => {
    const elements = new FormElements()
    const setMock = vi.fn()

    elements.register({
      name: 'title',
      value: ref('Hello'),
      getValue: () => 'Hello',
      setValue: setMock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    const reactiveProps = ref({
      value: { title: 'Hello' }
    })
    const refs = toRefs(reactiveProps.value)

    const formValue = new FormValue(reactiveProps.value, refs, elements)

    reactiveProps.value.value = { title: 'New World' }
    await nextTick()

    expect(setMock).toHaveBeenCalledWith('New World')
    expect(formValue).toBeDefined()
  })

  it('resets custom elements in non-native mode', () => {
    const elements = new FormElements()
    const resetSpy = vi.spyOn(elements, 'reset')
    const formValue = new FormValue({ native: false }, undefined, elements)

    formValue.reset()
    expect(resetSpy).toHaveBeenCalledTimes(1)
  })

  it('resets native elements in native mode', () => {
    const form = document.createElement('form')
    const native = new FormElementsNative(ref(form))
    const resetSpy = vi.spyOn(native, 'reset')
    const formValue = new FormValue({ native: true }, undefined, undefined, native)

    formValue.reset()
    expect(resetSpy).toHaveBeenCalledTimes(1)
  })
})
