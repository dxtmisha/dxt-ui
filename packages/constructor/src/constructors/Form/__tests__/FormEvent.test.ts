// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import { ModelInclude } from '../../../classes/ModelInclude'
import type { FormElementsValues } from '../basicTypes'
import { FormElements } from '../FormElements'
import { FormElementsNative } from '../FormElementsNative'
import { FormEvent } from '../FormEvent'
import { FormValue } from '../FormValue'

describe('FormEvent', () => {
  it('handles onInput by updating native elements and emitting input, inputLite, and inputValues', () => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.name = 'username'
    input.value = 'john'
    form.appendChild(input)

    const elements = new FormElements()
    const native = new FormElementsNative(ref(form))
    const formValue = new FormValue({ native: false }, undefined, elements, native)
    const emits = vi.fn()
    const formEvent = new FormEvent({ native: false }, formValue, emits)

    elements.register({
      name: 'username',
      value: ref('john'),
      getValue: () => 'john',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    const updateSpy = vi.spyOn(formValue, 'update')
    const event = new InputEvent('input')

    formEvent.onInput(event)

    expect(updateSpy).toHaveBeenCalledTimes(1)
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
    expect(emits).toHaveBeenCalledWith(
      'inputValues',
      { username: 'john' }
    )
  })

  it('handles onChange by emitting change, changeLite, and changeValues without updating native elements', () => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.name = 'age'
    input.value = '25'
    form.appendChild(input)

    const elements = new FormElements()
    const native = new FormElementsNative(ref(form))
    const formValue = new FormValue({ native: false }, undefined, elements, native)
    const emits = vi.fn()
    const formEvent = new FormEvent({ native: false }, formValue, emits)

    elements.register({
      name: 'age',
      value: ref('25'),
      getValue: () => '25',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    const updateSpy = vi.spyOn(formValue, 'update')
    const event = new Event('change')

    formEvent.onChange(event)

    expect(updateSpy).not.toHaveBeenCalled()
    expect(emits).toHaveBeenCalledWith(
      'change',
      event,
      { age: expect.objectContaining({ value: '25' }) },
      { age: '25' }
    )
    expect(emits).toHaveBeenCalledWith(
      'changeLite',
      { age: expect.objectContaining({ value: '25' }) },
      { age: '25' }
    )
    expect(emits).toHaveBeenCalledWith(
      'changeValues',
      { age: '25' }
    )
  })

  it('retrieves native data and values when props.native is true', () => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.name = 'city'
    input.value = 'Hanoi'
    form.appendChild(input)

    const native = new FormElementsNative(ref(form))
    const formValue = new FormValue({ native: true }, undefined, undefined, native)
    const emits = vi.fn()
    const formEvent = new FormEvent({ native: true }, formValue, emits)

    formEvent.onInput(new InputEvent('input'))

    expect(emits).toHaveBeenCalledWith(
      'inputValues',
      { city: 'Hanoi' }
    )
  })

  it('handles onReset by emitting reset event', () => {
    const formValue = new FormValue()
    const emits = vi.fn()
    const formEvent = new FormEvent({}, formValue, emits)
    const event = new Event('reset')

    formEvent.onReset(event)

    expect(emits).toHaveBeenCalledWith('reset', event)
  })

  it('handles onSubmit by emitting submit event', () => {
    const formValue = new FormValue()
    const emits = vi.fn()
    const formEvent = new FormEvent({}, formValue, emits)
    const event = new SubmitEvent('submit')

    formEvent.onSubmit(event)

    expect(emits).toHaveBeenCalledWith('submit', event)
  })

  it('safely handles events without emits provided', () => {
    const formValue = new FormValue()
    const formEvent = new FormEvent({}, formValue)

    expect(() => {
      formEvent.onChange(new Event('change'))
      formEvent.onInput(new InputEvent('input'))
      formEvent.onReset(new Event('reset'))
      formEvent.onSubmit(new SubmitEvent('submit'))
    }).not.toThrow()
  })

  it('calls model.emit with values on onInput and onChange when model is provided', () => {
    const elements = new FormElements()
    const formValue = new FormValue({ native: false }, undefined, elements)
    const emits = vi.fn()
    const model = new ModelInclude<FormElementsValues>('value', emits)
    const modelEmitSpy = vi.spyOn(model, 'emit')
    const formEvent = new FormEvent({ native: false }, formValue, emits, model)

    elements.register({
      name: 'email',
      value: ref('test@example.com'),
      getValue: () => 'test@example.com',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    formEvent.onInput(new InputEvent('input'))
    expect(modelEmitSpy).toHaveBeenCalledWith({ email: 'test@example.com' })
    expect(emits).toHaveBeenCalledWith('update:value', { email: 'test@example.com' })
    expect(emits).toHaveBeenCalledWith('update:modelValue', { email: 'test@example.com' })

    formEvent.onChange(new Event('change'))
    expect(modelEmitSpy).toHaveBeenCalledWith({ email: 'test@example.com' })
  })
})
