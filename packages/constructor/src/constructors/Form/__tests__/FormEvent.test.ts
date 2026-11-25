// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import { ModelInclude } from '../../../classes/ModelInclude'
import type { FormElementsValues } from '../basicTypes'
import { FormElements } from '../FormElements'
import { FormElementsNative } from '../FormElementsNative'
import { FormEvent } from '../FormEvent'
import { FormValue } from '../FormValue'

describe('FormEvent', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lazy dependency coupling', () => {
    it('should not invoke model or value getters during construction', () => {
      const modelGetter = vi.fn(() => new ModelInclude<FormElementsValues>('value'))
      const valueGetter = vi.fn(() => new FormValue({}, () => new FormElements(), () => new FormElementsNative(ref(undefined))))

      const formEvent = new FormEvent(modelGetter, valueGetter)

      expect(formEvent).toBeDefined()
      expect(modelGetter).not.toHaveBeenCalled()
      expect(valueGetter).not.toHaveBeenCalled()
    })
  })

  describe('Input and change event handling', () => {
    it('should update value, sync model, and emit input, inputLite, and inputValues on onInput', () => {
      const elements = new FormElements()
      const native = new FormElementsNative(ref(undefined))
      const formValue = new FormValue({ native: false }, () => elements, () => native)
      const emits = vi.fn()
      const model = new ModelInclude<FormElementsValues>('value', emits)
      const formEvent = new FormEvent(() => model, () => formValue, emits)

      elements.register({
        name: 'username',
        value: ref('john'),
        getValue: () => 'john',
        setValue: vi.fn(),
        clear: vi.fn(),
        isChanged: () => false,
        checkValidity: () => true,
        getValidationMessage: () => ''
      })

      const updateSpy = vi.spyOn(formValue, 'update')
      const event = new InputEvent('input')

      formEvent.onInput(event)

      expect(updateSpy).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('update:value', { username: 'john' })
      expect(emits).toHaveBeenCalledWith('update:modelValue', { username: 'john' })
      expect(emits).toHaveBeenCalledWith(
        'input',
        event,
        { username: expect.objectContaining({ value: 'john' }) },
        { username: 'john' }
      )
      expect(emits).toHaveBeenCalledWith(
        'inputLite',
        { username: expect.objectContaining({ value: 'john' }) },
        { username: 'john' }
      )
      expect(emits).toHaveBeenCalledWith('inputValues', { username: 'john' })
    })

    it('should omit input/change DOM event emits when event argument is undefined', () => {
      const elements = new FormElements()
      const native = new FormElementsNative(ref(undefined))
      const formValue = new FormValue({ native: false }, () => elements, () => native)
      const emits = vi.fn()
      const model = new ModelInclude<FormElementsValues>('value', emits)
      const formEvent = new FormEvent(() => model, () => formValue, emits)

      formEvent.onInput(undefined)
      formEvent.onChange(undefined)

      expect(emits).not.toHaveBeenCalledWith('input', expect.anything(), expect.anything(), expect.anything())
      expect(emits).not.toHaveBeenCalledWith('change', expect.anything(), expect.anything(), expect.anything())
      expect(emits).toHaveBeenCalledWith('inputLite', {}, {})
      expect(emits).toHaveBeenCalledWith('inputValues', {})
      expect(emits).toHaveBeenCalledWith('changeLite', {}, {})
      expect(emits).toHaveBeenCalledWith('changeValues', {})
    })

    it('should emit change, changeLite, changeValues, and sync model without calling value.update() on onChange', () => {
      const elements = new FormElements()
      const native = new FormElementsNative(ref(undefined))
      const formValue = new FormValue({ native: false }, () => elements, () => native)
      const emits = vi.fn()
      const model = new ModelInclude<FormElementsValues>('value', emits)
      const formEvent = new FormEvent(() => model, () => formValue, emits)

      elements.register({
        name: 'age',
        value: ref(25),
        getValue: () => 25,
        setValue: vi.fn(),
        clear: vi.fn(),
        isChanged: () => false,
        checkValidity: () => true,
        getValidationMessage: () => ''
      })

      const updateSpy = vi.spyOn(formValue, 'update')
      const event = new Event('change')

      formEvent.onChange(event)

      expect(updateSpy).not.toHaveBeenCalled()
      expect(emits).toHaveBeenCalledWith('update:value', { age: 25 })
      expect(emits).toHaveBeenCalledWith('update:modelValue', { age: 25 })
      expect(emits).toHaveBeenCalledWith('change', event, { age: { value: 25 } }, { age: 25 })
      expect(emits).toHaveBeenCalledWith('changeLite', { age: { value: 25 } }, { age: 25 })
      expect(emits).toHaveBeenCalledWith('changeValues', { age: 25 })
    })

    it('should collect native values in native mode on onInput', () => {
      const form = document.createElement('form')
      const input = document.createElement('input')
      input.name = 'city'
      input.value = 'Hanoi'
      form.appendChild(input)

      const elements = new FormElements()
      const native = new FormElementsNative(ref(form))
      const formValue = new FormValue({ native: true }, () => elements, () => native)
      const emits = vi.fn()
      const model = new ModelInclude<FormElementsValues>('value', emits)
      const formEvent = new FormEvent(() => model, () => formValue, emits)

      formEvent.onInput(new InputEvent('input'))

      expect(emits).toHaveBeenCalledWith('inputValues', { city: 'Hanoi' })
    })
  })

  describe('Reset, submit, and missing emits resilience', () => {
    it('should prevent default, reset value, and emit reset, input, and change events on onReset', () => {
      const elements = new FormElements()
      const native = new FormElementsNative(ref(undefined))
      const formValue = new FormValue({}, () => elements, () => native)
      const resetSpy = vi.spyOn(formValue, 'reset')
      const emits = vi.fn()
      const model = new ModelInclude<FormElementsValues>('value', emits)
      const formEvent = new FormEvent(() => model, () => formValue, emits)

      const event = new Event('reset', { cancelable: true })
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault')

      formEvent.onReset(event)

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1)
      expect(resetSpy).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('reset', event)
      expect(emits).toHaveBeenCalledWith('input', event, {}, {})
      expect(emits).toHaveBeenCalledWith('change', event, {}, {})
      expect(emits).toHaveBeenCalledWith('changeLite', {}, {})
      expect(emits).toHaveBeenCalledWith('changeValues', {})
    })

    it('should emit submit event on onSubmit', () => {
      const elements = new FormElements()
      const native = new FormElementsNative(ref(undefined))
      const formValue = new FormValue({}, () => elements, () => native)
      const emits = vi.fn()
      const model = new ModelInclude<FormElementsValues>('value', emits)
      const formEvent = new FormEvent(() => model, () => formValue, emits)
      const event = new SubmitEvent('submit')

      formEvent.onSubmit(event)

      expect(emits).toHaveBeenCalledExactlyOnceWith('submit', event)
    })

    it('should safely handle all event handlers when emits is omitted', () => {
      const elements = new FormElements()
      const native = new FormElementsNative(ref(undefined))
      const formValue = new FormValue({}, () => elements, () => native)
      const model = new ModelInclude<FormElementsValues>('value')
      const formEvent = new FormEvent(() => model, () => formValue)

      expect(() => {
        formEvent.onChange(new Event('change'))
        formEvent.onInput(new InputEvent('input'))
        formEvent.onReset(new Event('reset'))
        formEvent.onSubmit(new SubmitEvent('submit'))
      }).not.toThrow()
    })
  })
})
