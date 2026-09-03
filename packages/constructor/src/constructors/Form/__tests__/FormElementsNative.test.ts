// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import { FormElementsNative } from '../FormElementsNative'

describe('FormElementsNative', () => {
  it('reads initial values and validation data from form element', () => {
    const form = document.createElement('form')

    const input = document.createElement('input')
    input.name = 'username'
    input.value = 'john'
    form.appendChild(input)

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'agree'
    checkbox.checked = true
    form.appendChild(checkbox)

    const native = new FormElementsNative(ref(form))

    expect(native.getValues()).toEqual({
      username: 'john',
      agree: true
    })
    expect(native.getValue('username')).toBe('john')
    expect(native.getValue('agree')).toBe(true)
    expect(native.getValue('nonexistent')).toBeUndefined()
  })

  it('sets individual native element value via set(name, value)', () => {
    const form = document.createElement('form')

    const textInput = document.createElement('input')
    textInput.name = 'email'
    textInput.value = 'old@example.com'
    form.appendChild(textInput)

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'newsletter'
    checkbox.checked = false
    form.appendChild(checkbox)

    const native = new FormElementsNative(ref(form))

    native.set('email', 'new@example.com')
    expect(textInput.value).toBe('new@example.com')
    expect(native.getValue('email')).toBe('new@example.com')

    native.set('newsletter', true)
    expect(checkbox.checked).toBe(true)
    expect(native.getValue('newsletter')).toBe(true)
  })

  it('sets multiple native element values via setValues(values)', () => {
    const form = document.createElement('form')

    const textInput = document.createElement('input')
    textInput.name = 'username'
    textInput.value = 'user1'
    form.appendChild(textInput)

    const textarea = document.createElement('textarea')
    textarea.name = 'bio'
    textarea.value = 'old bio'
    form.appendChild(textarea)

    const native = new FormElementsNative(ref(form))

    native.setValues({
      username: 'user2',
      bio: 'new bio'
    })

    expect(textInput.value).toBe('user2')
    expect(textarea.value).toBe('new bio')
    expect(native.getValues()).toEqual({
      username: 'user2',
      bio: 'new bio'
    })
  })

  it('resets native form elements via reset()', () => {
    const form = document.createElement('form')
    const textInput = document.createElement('input')
    textInput.name = 'username'
    textInput.defaultValue = 'default_user'
    textInput.value = 'changed_user'
    form.appendChild(textInput)

    const native = new FormElementsNative(ref(form))
    const resetSpy = vi.spyOn(form, 'reset')
    const updateSpy = vi.spyOn(native, 'update')

    native.reset()

    expect(resetSpy).toHaveBeenCalledTimes(1)
    expect(updateSpy).toHaveBeenCalledTimes(1)
  })
})
