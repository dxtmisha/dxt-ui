// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import type { FormElementItem } from '../basicTypes'
import { FormElements } from '../FormElements'

describe('FormElements', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('registers child element record and returns items via get()', () => {
    const elements = new FormElements()
    const mockElement: FormElementItem = {
      name: 'email',
      value: ref('test@example.com'),
      getValue: () => 'test@example.com',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: {
        value: 'test@example.com',
        valueInput: 'test@example.com',
        status: true,
        detail: { customProperty: 'example' }
      }
    }

    expect(elements.get().value).toHaveLength(0)

    elements.register(mockElement)

    expect(elements.get().value).toHaveLength(1)
    expect(elements.get().value[0]).toBe(mockElement)
    expect(elements.get().value[0].name).toBe('email')
    expect(elements.get().value[0].getValue()).toBe('test@example.com')
    expect(elements.get().value[0].checkValidity()).toBe(true)
    expect(elements.get().value[0].getValidationMessage()).toBe('')
    expect(elements.get().value[0].data).toEqual({
      value: 'test@example.com',
      valueInput: 'test@example.com',
      status: true,
      detail: { customProperty: 'example' }
    })
  })

  it('does not add duplicate element references on register', () => {
    const elements = new FormElements()
    const mockElement: FormElementItem = {
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    }

    elements.register(mockElement)
    elements.register(mockElement)

    expect(elements.get().value).toHaveLength(1)
  })

  it('returns object of element values keyed by name via getValues()', () => {
    const elements = new FormElements()

    expect(elements.getValues()).toEqual({})

    elements.register({
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    elements.register({
      name: 'age',
      value: ref(25),
      getValue: () => 25,
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    expect(elements.getValues()).toEqual({
      username: 'admin',
      age: 25
    })
  })

  it('returns object of element data keyed by name via getData()', () => {
    const elements = new FormElements()

    expect(elements.getData()).toEqual({})

    elements.register({
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
    })

    elements.register({
      name: 'age',
      value: ref(25),
      getValue: () => 25,
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    expect(elements.getData()).toEqual({
      username: {
        value: 'admin',
        status: true
      },
      age: {
        value: 25
      }
    })
  })

  it('returns individual element value via getValue(name)', () => {
    const elements = new FormElements()

    elements.register({
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: vi.fn(),
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    expect(elements.getValue('username')).toBe('admin')
    expect(elements.getValue('nonexistent')).toBeUndefined()
  })

  it('sets individual element value via set(name, value)', () => {
    const elements = new FormElements()
    const setValueMock = vi.fn()

    elements.register({
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: setValueMock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    elements.set('username', 'superadmin')
    expect(setValueMock).toHaveBeenCalledWith('superadmin')
  })

  it('sets multiple element values via setValues(values)', () => {
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
      getValidationMessage: () => ''
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

    elements.setValues({
      username: 'guest',
      age: 30
    })

    expect(setUsernameMock).toHaveBeenCalledWith('guest')
    expect(setAgeMock).toHaveBeenCalledWith(30)
  })

  it('sets values for all registered child elements and clears omitted fields via setValuesAll(values)', () => {
    const elements = new FormElements()
    const setUsernameMock = vi.fn()
    const clearAgeMock = vi.fn()

    elements.register({
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: setUsernameMock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    elements.register({
      name: 'age',
      value: ref(25),
      getValue: () => 25,
      setValue: vi.fn(),
      clear: clearAgeMock,
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    elements.setValuesAll({
      username: 'new_user'
    })

    expect(setUsernameMock).toHaveBeenCalledWith('new_user')
    expect(clearAgeMock).toHaveBeenCalledTimes(1)
  })

  it('resets registered child elements via reset() calling clear() or setValue(undefined)', () => {
    const elements = new FormElements()
    const clearMock = vi.fn()
    const setValueMock = vi.fn()

    elements.register({
      name: 'username',
      value: ref('admin'),
      getValue: () => 'admin',
      setValue: vi.fn(),
      clear: clearMock,
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    elements.register({
      name: 'age',
      value: ref(25),
      getValue: () => 25,
      setValue: setValueMock,
      clear: undefined as any,
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    elements.reset()
    expect(clearMock).toHaveBeenCalledTimes(1)
    expect(setValueMock).toHaveBeenCalledWith(undefined)
  })

  it('resets registered child elements with initial values via reset(initialValues)', () => {
    const elements = new FormElements()
    const setUsernameMock = vi.fn()
    const setAgeMock = vi.fn()

    elements.register({
      name: 'username',
      value: ref('modified'),
      getValue: () => 'modified',
      setValue: setUsernameMock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    elements.register({
      name: 'age',
      value: ref(99),
      getValue: () => 99,
      setValue: setAgeMock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => ''
    })

    elements.reset({ username: 'original_user', age: 20 })
    expect(setUsernameMock).toHaveBeenCalledWith('original_user')
    expect(setAgeMock).toHaveBeenCalledWith(20)
  })

  it('updates validation data for registered element via updateData(id, data)', () => {
    const elements = new FormElements()
    const mockElement: FormElementItem = {
      id: 'user-1',
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
    expect(elements.getData().username.status).toBe(true)

    elements.updateData('user-1', {
      value: 'admin',
      status: false,
      validationMessage: 'Username is required'
    })

    expect(elements.getData().username).toEqual({
      value: 'admin',
      status: false,
      validationMessage: 'Username is required'
    })
    expect(elements.isError()).toBe(true)
  })

  it('clears values and data of elements with the same name via clearByName', () => {
    const elements = new FormElements()
    const setRadio1Mock = vi.fn()
    const setRadio2Mock = vi.fn()

    const radio1: FormElementItem = {
      id: 'radio-1',
      name: 'notification',
      value: ref(true),
      getValue: () => 'email',
      setValue: setRadio1Mock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: { value: 'email', status: true }
    }

    const radio2: FormElementItem = {
      id: 'radio-2',
      name: 'notification',
      value: ref(false),
      getValue: () => undefined,
      setValue: setRadio2Mock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: undefined
    }

    elements.register(radio1)
    elements.register(radio2)

    elements.clearByName('notification', 'radio-2')

    expect(radio1.data).toBeUndefined()
    expect(setRadio1Mock).toHaveBeenCalledWith(undefined)
    expect(setRadio2Mock).not.toHaveBeenCalled()
  })

  it('clears all elements with the name when no exclude id provided to clearByName', () => {
    const elements = new FormElements()
    const setRadio1Mock = vi.fn()
    const setRadio2Mock = vi.fn()

    const radio1: FormElementItem = {
      id: 'radio-1',
      name: 'notification',
      value: ref(true),
      getValue: () => 'email',
      setValue: setRadio1Mock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: { value: 'email', status: true }
    }

    const radio2: FormElementItem = {
      id: 'radio-2',
      name: 'notification',
      value: ref(false),
      getValue: () => undefined,
      setValue: setRadio2Mock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: { value: 'sms', status: true }
    }

    elements.register(radio1)
    elements.register(radio2)

    elements.clearByName('notification')

    expect(radio1.data).toBeUndefined()
    expect(radio2.data).toBeUndefined()
    expect(setRadio1Mock).toHaveBeenCalledWith(undefined)
    expect(setRadio2Mock).toHaveBeenCalledWith(undefined)
  })

  it('clears other elements with the same name when updateData is called', () => {
    const elements = new FormElements()
    const setRadio1Mock = vi.fn()
    const setRadio2Mock = vi.fn()

    const radio1: FormElementItem = {
      id: 'radio-1',
      name: 'notification',
      value: ref(true),
      getValue: () => 'email',
      setValue: setRadio1Mock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: { value: 'email', status: true }
    }

    const radio2: FormElementItem = {
      id: 'radio-2',
      name: 'notification',
      value: ref(false),
      getValue: () => undefined,
      setValue: setRadio2Mock,
      clear: vi.fn(),
      checkValidity: () => true,
      getValidationMessage: () => '',
      data: undefined
    }

    elements.register(radio1)
    elements.register(radio2)

    elements.updateData('radio-2', { value: 'sms', status: true })

    expect(radio1.data).toBeUndefined()
    expect(setRadio1Mock).toHaveBeenCalledWith(undefined)
    expect(radio2.data).toEqual({ value: 'sms', status: true })
  })

  it('ignores updateData for non-existent element', () => {
    const elements = new FormElements()

    expect(() => {
      elements.updateData('nonexistent', {
        value: 'test',
        status: false
      })
    }).not.toThrow()

    expect(elements.getData()).toEqual({})
  })
})
