// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, inject, ref } from 'vue'

import { ModelInclude } from '../../../classes/ModelInclude'
import {
  FORM_NAME_ELEMENT,
  type FormElementItem,
  type FormElementRegistration,
  type FormElementsValues
} from '../basicTypes'
import { FormElements } from '../FormElements'
import { FormElementsNative } from '../FormElementsNative'
import { FormEvent } from '../FormEvent'
import { FormProvide } from '../FormProvide'
import { FormValue } from '../FormValue'

const cleanups: Array<() => void> = []

describe('FormProvide', () => {
  afterEach(() => {
    cleanups.splice(0).reverse().forEach(unmount => unmount())
    vi.restoreAllMocks()
  })

  it('should provide registration callbacks lazily without invoking elements() or event() during construction', () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const elements = new FormElements()
    const native = new FormElementsNative(ref(undefined))
    const formValue = new FormValue({}, () => elements, () => native)
    const model = new ModelInclude<FormElementsValues>('value')
    const formEvent = new FormEvent(() => model, () => formValue)

    const elementsGetter = vi.fn(() => elements)
    const eventGetter = vi.fn(() => formEvent)
    let injectedContext: FormElementRegistration | undefined

    const Child = defineComponent({
      setup() {
        injectedContext = inject<FormElementRegistration | undefined>(FORM_NAME_ELEMENT, undefined)
        return () => h('div')
      }
    })

    const Parent = defineComponent({
      setup() {
        new FormProvide(elementsGetter, eventGetter)
        return () => h(Child)
      }
    })

    const app = createApp(Parent)
    app.mount(container)
    cleanups.push(() => app.unmount())

    expect(injectedContext).toBeDefined()
    expect(elementsGetter).not.toHaveBeenCalled()
    expect(eventGetter).not.toHaveBeenCalled()

    const logSpy = vi.spyOn(console, 'log')
    const onInputSpy = vi.spyOn(formEvent, 'onInput')
    const updateDataSpy = vi.spyOn(elements, 'updateData')

    const mockElement: FormElementItem = {
      id: 'username-1',
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: vi.fn(),
      clear: vi.fn(),
      isChanged: () => false,
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: { value: 'admin', status: true }
    }

    injectedContext?.register(mockElement)
    expect(elementsGetter).toHaveBeenCalledTimes(1)
    expect(eventGetter).not.toHaveBeenCalled()
    expect(injectedContext?.getValue('username')).toBe('admin')

    const updatedData = {
      value: 'admin',
      status: false,
      validationMessage: 'Invalid username'
    }
    const inputEvent = new InputEvent('input')

    injectedContext?.updateData('username-1', updatedData, inputEvent)

    expect(logSpy).not.toHaveBeenCalled()
    expect(updateDataSpy).toHaveBeenCalledWith('username-1', updatedData)
    expect(onInputSpy).toHaveBeenCalledWith(inputEvent)
    expect(elements.getData().username).toEqual(updatedData)

    const unregisterSpy = vi.spyOn(elements, 'unregister')
    injectedContext?.unregister?.('username-1')

    expect(unregisterSpy).toHaveBeenCalledWith('username-1')
    expect(elements.get().value).toHaveLength(0)
    expect(injectedContext?.getValue('username')).toBeUndefined()
  })
})
