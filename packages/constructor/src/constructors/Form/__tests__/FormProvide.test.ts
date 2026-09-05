// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { provide, ref } from 'vue'

import { FORM_NAME_ELEMENT, type FormElementItem } from '../basicTypes'
import { FormElements } from '../FormElements'
import { FormEvent } from '../FormEvent'
import { FormProvide } from '../FormProvide'
import { FormValue } from '../FormValue'

vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return {
    ...actual,
    provide: vi.fn()
  }
})

describe('FormProvide', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('calls provide with FORM_NAME_ELEMENT and registration object on construction', () => {
    const elements = new FormElements()
    const formValue = new FormValue({}, undefined, elements)
    const formEvent = new FormEvent({}, formValue)
    const formProvide = new FormProvide(elements, formEvent)

    expect(provide).toHaveBeenCalledWith(FORM_NAME_ELEMENT, {
      getValue: elements.getValue,
      register: elements.register,
      updateData: formProvide.updateData
    })
  })



  it('updates validation data in FormElements and calls FormEvent.onInput on updateData', () => {
    const elements = new FormElements()
    const formValue = new FormValue({}, undefined, elements)
    const formEvent = new FormEvent({}, formValue)
    const formProvide = new FormProvide(elements, formEvent)

    const updateDataSpy = vi.spyOn(elements, 'updateData')
    const onInputSpy = vi.spyOn(formEvent, 'onInput')

    const mockElement: FormElementItem = {
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: {
        value: 'admin',
        status: true
      }
    }

    elements.register(mockElement)

    const mockData = {
      value: 'admin',
      status: false,
      validationMessage: 'Invalid username'
    }
    const mockEvent = new InputEvent('input')

    formProvide.updateData('username', mockData, mockEvent)

    expect(updateDataSpy).toHaveBeenCalledWith('username', mockData)
    expect(onInputSpy).toHaveBeenCalledWith(mockEvent)
    expect(elements.getData().username).toEqual(mockData)
  })
})
