// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, ref } from 'vue'

import { FormElementsNative } from '../FormElementsNative'

describe('FormElementsNative', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lifecycle and initial synchronization', () => {
    it('should remain side-effect-free on construction and sync on onMounted/onUnmounted', async () => {
      const form1 = document.createElement('form')
      const input1 = document.createElement('input')
      input1.name = 'username'
      input1.value = 'john'
      form1.appendChild(input1)

      const formRef = ref<HTMLFormElement | undefined>(form1)
      const native = new FormElementsNative(formRef)

      expect(native.getValues()).toEqual({})

      native.onMounted()
      expect(native.getValues()).toEqual({ username: 'john' })

      const form2 = document.createElement('form')
      const input2 = document.createElement('input')
      input2.name = 'username'
      input2.value = 'alice'
      form2.appendChild(input2)

      formRef.value = form2
      await nextTick()
      expect(native.getValues()).toEqual({ username: 'alice' })

      native.onUnmounted()

      formRef.value = form1
      await nextTick()
      expect(native.getValues()).toEqual({ username: 'alice' })
    })
  })

  describe('Control types collection and value updates', () => {
    it('should collect text, checkbox, checked radio, textarea, select, and ignore buttons and fieldsets', () => {
      const form = document.createElement('form')

      const input = document.createElement('input')
      input.name = 'username'
      input.value = 'Nguyễn'
      form.appendChild(input)

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.name = 'agree'
      checkbox.checked = true
      form.appendChild(checkbox)

      const radio1 = document.createElement('input')
      radio1.type = 'radio'
      radio1.name = 'plan'
      radio1.value = 'free'
      radio1.checked = false
      form.appendChild(radio1)

      const radio2 = document.createElement('input')
      radio2.type = 'radio'
      radio2.name = 'plan'
      radio2.value = 'pro'
      radio2.checked = true
      form.appendChild(radio2)

      const textarea = document.createElement('textarea')
      textarea.name = 'bio'
      textarea.value = 'Hello'
      form.appendChild(textarea)

      const select = document.createElement('select')
      select.name = 'role'
      const option = document.createElement('option')
      option.value = 'admin'
      option.selected = true
      select.appendChild(option)
      form.appendChild(select)

      const submitBtn = document.createElement('input')
      submitBtn.type = 'submit'
      submitBtn.name = 'submitBtn'
      submitBtn.value = 'Go'
      form.appendChild(submitBtn)

      const button = document.createElement('button')
      button.type = 'button'
      button.name = 'actionBtn'
      button.value = 'Click'
      form.appendChild(button)

      const fieldset = document.createElement('fieldset')
      fieldset.name = 'group'
      form.appendChild(fieldset)

      const native = new FormElementsNative(ref(form))
      native.update()

      expect(native.getValues()).toEqual({
        username: 'Nguyễn',
        agree: true,
        plan: 'pro',
        bio: 'Hello',
        role: 'admin'
      })
      expect(native.getValue('username')).toBe('Nguyễn')
      expect(native.getValue('agree')).toBe(true)
      expect(native.getValue('submitBtn')).toBeUndefined()
      expect(native.getValue('actionBtn')).toBeUndefined()
      expect(native.getValue('group')).toBeUndefined()
      expect(native.getValue('nonexistent')).toBeUndefined()
    })

    it('should set individual values including numeric 0, checkboxes, radio groups, and safely handle file inputs', () => {
      const form = document.createElement('form')

      const numberInput = document.createElement('input')
      numberInput.type = 'number'
      numberInput.name = 'count'
      numberInput.value = '10'
      form.appendChild(numberInput)

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.name = 'newsletter'
      checkbox.checked = false
      form.appendChild(checkbox)

      const radio1 = document.createElement('input')
      radio1.type = 'radio'
      radio1.name = 'tier'
      radio1.value = ''
      form.appendChild(radio1)

      const radio2 = document.createElement('input')
      radio2.type = 'radio'
      radio2.name = 'tier'
      radio2.value = 'gold'
      form.appendChild(radio2)

      const fileInput = document.createElement('input')
      fileInput.type = 'file'
      fileInput.name = 'avatar'
      form.appendChild(fileInput)

      const native = new FormElementsNative(ref(form))
      native.update()

      native.set('count', 0)
      expect(numberInput.value).toBe('0')
      expect(native.getValue('count')).toBe('0')

      native.set('newsletter', true)
      expect(checkbox.checked).toBe(true)

      native.set('tier', 'gold')
      expect(radio2.checked).toBe(true)
      expect(radio1.checked).toBe(false)

      native.set('tier', undefined)
      expect(radio1.checked).toBe(false)
      expect(radio2.checked).toBe(false)

      expect(() => native.set('avatar', 'fake-path.png')).not.toThrow()
      expect(() => native.set('avatar', '')).not.toThrow()
    })

    it('should update multiple values in a single update() pass via setValues()', () => {
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
      const updateSpy = vi.spyOn(native, 'update')

      native.setValues({
        username: 'user2',
        bio: 'new bio'
      })

      expect(updateSpy).toHaveBeenCalledTimes(1)
      expect(textInput.value).toBe('user2')
      expect(textarea.value).toBe('new bio')
      expect(native.getValues()).toEqual({
        username: 'user2',
        bio: 'new bio'
      })
    })

    it('should clear omitted fields in setValuesAll() and restore/clear via reset()', () => {
      const form = document.createElement('form')

      const textInput = document.createElement('input')
      textInput.name = 'username'
      textInput.value = 'user1'
      form.appendChild(textInput)

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.name = 'agree'
      checkbox.checked = true
      form.appendChild(checkbox)

      const native = new FormElementsNative(ref(form))
      native.update()

      native.setValuesAll({ username: 'user2' })
      expect(textInput.value).toBe('user2')
      expect(checkbox.checked).toBe(false)

      native.reset()
      expect(textInput.value).toBe('')
      expect(checkbox.checked).toBe(false)

      native.reset({ username: 'restored', agree: true })
      expect(textInput.value).toBe('restored')
      expect(checkbox.checked).toBe(true)
    })
  })

  describe('Validation error detection', () => {
    it('should check DOM validity when form element exists and fall back to cached items when unmounted', () => {
      const form = document.createElement('form')
      const requiredInput = document.createElement('input')
      requiredInput.name = 'email'
      requiredInput.required = true
      requiredInput.value = ''
      form.appendChild(requiredInput)

      const formRef = ref<HTMLFormElement | undefined>(form)
      const native = new FormElementsNative(formRef)
      native.update()

      expect(native.isError()).toBe(true)
      expect(native.get().email.status).toBe(false)

      formRef.value = undefined
      expect(native.isError()).toBe(true)

      formRef.value = form
      requiredInput.value = 'user@example.com'
      native.update()

      expect(native.isError()).toBe(false)
      expect(native.get().email.status).toBe(true)
    })
  })
})
