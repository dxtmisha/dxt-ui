// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { provide, ref } from 'vue'

import { FORM_NAME_ELEMENT, type FormElementItem } from '../basicTypes'
import { FormElements } from '../FormElements'

vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return {
    ...actual,
    provide: vi.fn()
  }
})

describe('FormElements', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('calls provide with FORM_NAME_ELEMENT and registration object on construction', () => {
    const elements = new FormElements()

    expect(provide).toHaveBeenCalledWith(FORM_NAME_ELEMENT, {
      getValue: elements.getValue,
      register: elements.register,
      updateData: elements.updateData
    })
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

  it('updates validation data for registered element via updateData(name, data)', () => {
    const elements = new FormElements()
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
    expect(elements.getData().username.status).toBe(true)

    elements.updateData('username', {
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
