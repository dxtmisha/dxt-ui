// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'

import { FormElements } from '../FormElements'
import { FormElementsNative } from '../FormElementsNative'
import { FormValue } from '../FormValue'
import type { FormPropsBasic } from '../props'

describe('FormValue', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Static predicate, caching, and lazy initialization', () => {
    it('should report active status via static is() when value or modelValue is provided', () => {
      expect(FormValue.is()).toBe(false)
      expect(FormValue.is({})).toBe(false)
      expect(FormValue.is({ value: {} })).toBe(true)
      expect(FormValue.is({ modelValue: { name: 'Alice' } })).toBe(true)
    })

    it('should cache initial value without mutating caller input and without eagerly invoking lazy getters', () => {
      const initial = { username: 'alice' }
      const elementsGetter = vi.fn(() => new FormElements())
      const nativeGetter = vi.fn(() => new FormElementsNative(ref(undefined)))

      const formValue = new FormValue(
        { value: initial, modelValue: { username: 'bob' } },
        elementsGetter,
        nativeGetter
      )

      expect(elementsGetter).not.toHaveBeenCalled()
      expect(nativeGetter).not.toHaveBeenCalled()
      expect(formValue.getCache()).toEqual({ username: 'alice' })
      expect(formValue.getCache()).not.toBe(initial)
    })

    it('should fall back to modelValue for initial cache when value is absent', () => {
      const formValue = new FormValue(
        { modelValue: { email: 'a@b.com' } },
        () => new FormElements(),
        () => new FormElementsNative(ref(undefined))
      )

      expect(formValue.getCache()).toEqual({ email: 'a@b.com' })
    })
  })

  describe('Lifecycle watchers and mount synchronization', () => {
    it.each(['value', 'modelValue'] as const)(
      'should watch %s after onMounted and stop watching after onUnmounted',
      async (property) => {
        const props = reactive<FormPropsBasic>({})
        const elements = new FormElements()
        const native = new FormElementsNative(ref(undefined))
        const setValuesAllSpy = vi.spyOn(elements, 'setValuesAll')
        const setValuesSpy = vi.spyOn(elements, 'setValues')

        const formValue = new FormValue(props, () => elements, () => native)

        // Before mount, watcher is not active
        props[property] = { title: 'before-mount' }
        await nextTick()
        expect(setValuesAllSpy).not.toHaveBeenCalled()

        props[property] = undefined
        formValue.onMounted()
        expect(setValuesSpy).not.toHaveBeenCalled()

        props[property] = { title: 'first' }
        await nextTick()
        expect(setValuesAllSpy).toHaveBeenCalledExactlyOnceWith({ title: 'first' })

        props[property] = undefined
        await nextTick()
        expect(setValuesAllSpy).toHaveBeenCalledTimes(1)

        props[property] = { title: 'second' }
        await nextTick()
        expect(setValuesAllSpy).toHaveBeenLastCalledWith({ title: 'second' })

        formValue.onUnmounted()
        props[property] = { title: 'after-unmount' }
        await nextTick()
        expect(setValuesAllSpy).toHaveBeenCalledTimes(2)
      }
    )

    it('should apply non-empty initial cache on onMounted', () => {
      const elements = new FormElements()
      const setValuesSpy = vi.spyOn(elements, 'setValues')
      const native = new FormElementsNative(ref(undefined))

      const formValue = new FormValue(
        { value: { username: 'john' } },
        () => elements,
        () => native
      )

      formValue.onMounted()
      expect(setValuesSpy).toHaveBeenCalledExactlyOnceWith({ username: 'john' })
    })
  })

  describe('Custom and native mode delegation', () => {
    it('should delegate reading, writing, and resetting to FormElements when native is false', () => {
      const elements = new FormElements()
      const nativeGetter = vi.fn(() => new FormElementsNative(ref(undefined)))
      const setUsernameMock = vi.fn()
      const resetSpy = vi.spyOn(elements, 'reset')
      const setValuesAllSpy = vi.spyOn(elements, 'setValuesAll')

      elements.register({
        name: 'username',
        value: ref('admin'),
        getValue: () => 'admin',
        setValue: setUsernameMock,
        clear: vi.fn(),
        isChanged: () => false,
        checkValidity: () => true,
        getValidationMessage: () => '',
        data: { value: 'admin', status: true }
      })

      const formValue = new FormValue(
        { native: false, value: { username: 'initial' } },
        () => elements,
        nativeGetter
      )

      expect(formValue.get()).toEqual({ username: 'admin' })
      expect(formValue.getValue('username')).toBe('admin')
      expect(formValue.getData()).toEqual({
        username: { value: 'admin', status: true }
      })

      formValue.set('username', 'root')
      expect(setUsernameMock).toHaveBeenCalledWith('root')

      formValue.setValues({ username: 'guest' })
      expect(setUsernameMock).toHaveBeenCalledWith('guest')

      formValue.setValuesAll({ username: 'all' })
      expect(setValuesAllSpy).toHaveBeenCalledWith({ username: 'all' })

      formValue.update()
      formValue.reset()
      expect(resetSpy).toHaveBeenCalledWith({ username: 'initial' })
      expect(nativeGetter).not.toHaveBeenCalled()
    })

    it('should delegate reading, writing, updating, and resetting to FormElementsNative when native is true', () => {
      const form = document.createElement('form')
      const input = document.createElement('input')
      input.name = 'email'
      input.value = 'test@example.com'
      form.appendChild(input)

      const elementsGetter = vi.fn(() => new FormElements())
      const native = new FormElementsNative(ref(form))
      native.update()

      const resetSpy = vi.spyOn(native, 'reset')
      const updateSpy = vi.spyOn(native, 'update')

      const formValue = new FormValue(
        { native: true, value: { email: 'orig@test.com' } },
        elementsGetter,
        () => native
      )

      expect(formValue.get()).toEqual({ email: 'test@example.com' })
      expect(formValue.getValue('email')).toBe('test@example.com')
      expect(formValue.getData().email.value).toBe('test@example.com')

      formValue.set('email', 'updated@example.com')
      expect(input.value).toBe('updated@example.com')

      formValue.setValues({ email: 'bulk@example.com' })
      expect(input.value).toBe('bulk@example.com')

      formValue.setValuesAll({ email: 'all@example.com' })
      expect(input.value).toBe('all@example.com')

      formValue.update()
      expect(updateSpy).toHaveBeenCalled()

      formValue.reset()
      expect(resetSpy).toHaveBeenCalledWith({ email: 'orig@test.com' })
      expect(elementsGetter).not.toHaveBeenCalled()
    })
  })
})
