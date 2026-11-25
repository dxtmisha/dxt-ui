// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import type { FormElementItem } from '../basicTypes'
import { FormElements } from '../FormElements'

/**
 * Helper factory creating a typed mock FormElementItem.
 *
 * Вспомогательная фабрика для создания типизированного мока FormElementItem.
 */
function createMockElement(
  overrides: Partial<FormElementItem> & { name: string }
): FormElementItem {
  const internalValue = ref<unknown>(overrides.value?.value)

  return {
    value: internalValue,
    getValue: () => internalValue.value,
    setValue: vi.fn((nextValue: unknown) => {
      internalValue.value = nextValue
    }),
    clear: vi.fn(() => {
      internalValue.value = undefined
    }),
    isChanged: () => false,
    checkValidity: () => true,
    getValidationMessage: () => '',
    ...overrides
  }
}

describe('FormElements', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Registration and retrieval', () => {
    it('should register child elements, prevent duplicates, and return reactive list via get()', () => {
      const elements = new FormElements()
      const emailField = createMockElement({
        id: 'email-1',
        name: 'email',
        value: ref('test@example.com'),
        data: {
          value: 'test@example.com',
          valueInput: 'test@example.com',
          status: true,
          detail: { customProperty: 'example' }
        }
      })

      expect(elements.get().value).toHaveLength(0)

      elements.register(emailField)
      elements.register(emailField)

      expect(elements.get().value).toHaveLength(1)
      expect(elements.get().value[0]).toBe(emailField)
      expect(elements.get().value[0].data?.detail).toEqual({ customProperty: 'example' })
    })

    it('should unregister child element by id while preserving other elements and avoiding redundant updates on unknown id', () => {
      const elements = new FormElements()
      const firstRadio = createMockElement({ id: 'radio-1', name: 'channel', value: ref('email') })
      const secondRadio = createMockElement({ id: 'radio-2', name: 'channel', value: ref('sms') })

      elements.register(firstRadio)
      elements.register(secondRadio)

      const snapshotBeforeUnknown = elements.get().value
      elements.unregister('missing-id')
      expect(elements.get().value).toBe(snapshotBeforeUnknown)
      expect(elements.get().value).toHaveLength(2)

      elements.unregister('radio-1')
      expect(elements.get().value).toHaveLength(1)
      expect(elements.get().value[0]).toBe(secondRadio)
      expect(elements.getValue('channel')).toBe('sms')
    })

    it('should collect values and preserve falsy boundary values (0, false, empty string) while skipping nullish', () => {
      const elements = new FormElements()

      elements.register(createMockElement({ name: 'count', value: ref(0) }))
      elements.register(createMockElement({ name: 'enabled', value: ref(false) }))
      elements.register(createMockElement({ name: 'note', value: ref('') }))
      elements.register(createMockElement({ name: 'empty', value: ref(undefined) }))
      elements.register(createMockElement({ name: 'nullable', value: ref(null) }))
      elements.register(createMockElement({ name: 'vietnamese', value: ref('Nguyễn Văn A — Привет 🚀') }))

      expect(elements.getValues()).toEqual({
        count: 0,
        enabled: false,
        note: '',
        vietnamese: 'Nguyễn Văn A — Привет 🚀'
      })
      expect(elements.getValue('count')).toBe(0)
      expect(elements.getValue('enabled')).toBe(false)
      expect(elements.getValue('note')).toBe('')
      expect(elements.getValue('empty')).toBeUndefined()
      expect(elements.getValue('nonexistent')).toBeUndefined()
    })

    it('should return validation data keyed by name and avoid overwriting populated sibling data in radio groups', () => {
      const elements = new FormElements()

      elements.register(createMockElement({
        id: 'radio-1',
        name: 'channel',
        value: ref('email'),
        data: { value: 'email', status: true }
      }))
      elements.register(createMockElement({
        id: 'radio-2',
        name: 'channel',
        value: ref(undefined),
        data: undefined
      }))
      elements.register(createMockElement({
        id: 'age-1',
        name: 'age',
        value: ref(25)
      }))
      elements.register(createMockElement({
        id: 'empty-1',
        name: 'toString',
        value: ref(undefined)
      }))

      expect(elements.getData()).toEqual({
        channel: { value: 'email', status: true },
        age: { value: 25 },
        toString: { value: undefined }
      })
      expect(elements.getValue('channel')).toBe('email')
    })

    it('should resolve first non-nullish value when multiple elements share a name', () => {
      const elements = new FormElements()

      elements.register(createMockElement({
        id: 'radio-1',
        name: 'plan',
        value: ref(undefined)
      }))
      elements.register(createMockElement({
        id: 'radio-2',
        name: 'plan',
        value: ref('pro')
      }))

      expect(elements.getValue('plan')).toBe('pro')
    })
  })

  describe('Value assignment, bulk updates, and reset', () => {
    it('should set single and multiple values and fall back to value ref when setValue is absent', () => {
      const elements = new FormElements()
      const setUsernameMock = vi.fn()
      const refOnlyValue = ref<unknown>('initial')

      elements.register(createMockElement({
        name: 'username',
        value: ref('admin'),
        setValue: setUsernameMock
      }))
      elements.register({
        name: 'refOnly',
        value: refOnlyValue,
        getValue: () => refOnlyValue.value,
        setValue: undefined as unknown as (value: unknown) => void,
        clear: vi.fn(),
        isChanged: () => false,
        checkValidity: () => true,
        getValidationMessage: () => ''
      })

      elements.set('username', 'superadmin')
      expect(setUsernameMock).toHaveBeenCalledWith('superadmin')

      elements.setValues({
        username: 'guest',
        refOnly: 'updated-via-ref'
      })

      expect(setUsernameMock).toHaveBeenCalledWith('guest')
      expect(refOnlyValue.value).toBe('updated-via-ref')
    })

    it('should set all values and clear omitted fields via setValuesAll without unnecessary writes on unchanged values', () => {
      const elements = new FormElements()
      const setUsernameMock = vi.fn()
      const setCountMock = vi.fn()
      const clearAgeMock = vi.fn()
      const setFallbackMock = vi.fn()

      elements.register(createMockElement({
        name: 'username',
        value: ref('admin'),
        getValue: () => 'admin',
        setValue: setUsernameMock
      }))
      elements.register(createMockElement({
        name: 'count',
        value: ref(0),
        getValue: () => 0,
        setValue: setCountMock
      }))
      elements.register(createMockElement({
        name: 'age',
        value: ref(25),
        getValue: () => 25,
        clear: clearAgeMock
      }))
      elements.register({
        name: 'bio',
        value: ref('text'),
        getValue: () => 'text',
        setValue: setFallbackMock,
        clear: undefined as unknown as () => void,
        isChanged: () => false,
        checkValidity: () => true,
        getValidationMessage: () => ''
      })

      elements.setValuesAll({
        username: 'new_user',
        count: 0
      })

      expect(setUsernameMock).toHaveBeenCalledWith('new_user')
      expect(setCountMock).not.toHaveBeenCalled()
      expect(clearAgeMock).toHaveBeenCalledTimes(1)
      expect(setFallbackMock).toHaveBeenCalledWith(undefined)
    })

    it('should reset elements with or without initial values', () => {
      const elements = new FormElements()
      const setUsernameMock = vi.fn()
      const clearAgeMock = vi.fn()

      elements.register(createMockElement({
        name: 'username',
        value: ref('modified'),
        getValue: () => 'modified',
        setValue: setUsernameMock
      }))
      elements.register(createMockElement({
        name: 'age',
        value: ref(99),
        getValue: () => 99,
        clear: clearAgeMock
      }))

      elements.reset({ username: 'original_user' })
      expect(setUsernameMock).toHaveBeenCalledWith('original_user')
      expect(clearAgeMock).toHaveBeenCalledTimes(1)

      elements.reset()
      expect(clearAgeMock).toHaveBeenCalledTimes(2)
    })
  })

  describe('Validation data updates and sibling clearing', () => {
    it('should update validation data, detect errors, and clear siblings with the same name', () => {
      const elements = new FormElements()
      const setRadio1Mock = vi.fn()

      const radio1 = createMockElement({
        id: 'radio-1',
        name: 'notification',
        value: ref('email'),
        setValue: setRadio1Mock,
        data: { value: 'email', status: true }
      })
      const radio2 = createMockElement({
        id: 'radio-2',
        name: 'notification',
        value: ref(undefined),
        data: undefined
      })

      elements.register(radio1)
      elements.register(radio2)

      expect(elements.isError()).toBe(false)

      elements.updateData('radio-2', {
        value: 'sms',
        status: false,
        validationMessage: 'SMS unavailable'
      })

      expect(radio1.data).toBeUndefined()
      expect(setRadio1Mock).toHaveBeenCalledWith(undefined)
      expect(radio2.data).toEqual({
        value: 'sms',
        status: false,
        validationMessage: 'SMS unavailable'
      })
      expect(elements.isError()).toBe(true)
    })

    it('should detect errors from checkValidity() returning false', () => {
      const elements = new FormElements()

      elements.register(createMockElement({
        name: 'email',
        checkValidity: () => false
      }))

      expect(elements.isError()).toBe(true)
    })

    it('should clear elements by name with or without exclude id, including elements without id', () => {
      const elements = new FormElements()
      const setNoIdMock = vi.fn()
      const setWithIdMock = vi.fn()

      const noIdElement = createMockElement({
        name: 'choice',
        setValue: setNoIdMock,
        data: { value: 'a', status: true }
      })
      const withIdElement = createMockElement({
        id: 'choice-2',
        name: 'choice',
        setValue: setWithIdMock,
        data: { value: 'b', status: true }
      })

      elements.register(noIdElement)
      elements.register(withIdElement)

      elements.clearByName('choice', 'choice-2')
      expect(noIdElement.data).toBeUndefined()
      expect(setNoIdMock).toHaveBeenCalledWith(undefined)
      expect(withIdElement.data).toEqual({ value: 'b', status: true })
      expect(setWithIdMock).not.toHaveBeenCalled()

      elements.clearByName('choice')
      expect(withIdElement.data).toBeUndefined()
      expect(setWithIdMock).toHaveBeenCalledWith(undefined)
    })

    it('should invalidate stale cached validation data when element value is updated via set() or clear()', () => {
      const elements = new FormElements()
      const field = createMockElement({
        id: 'user-1',
        name: 'username',
        value: ref('')
      })

      elements.register(field)
      elements.updateData('user-1', {
        value: '',
        status: false,
        validationMessage: 'Required'
      })

      expect(elements.isError()).toBe(true)
      expect(elements.getValue('username')).toBe('')

      elements.set('username', 'alice')
      expect(field.data).toBeUndefined()
      expect(elements.getValue('username')).toBe('alice')
      expect(elements.isError()).toBe(false)

      elements.updateData('user-1', {
        value: 'alice',
        status: false,
        validationMessage: 'Taken'
      })
      elements.setValuesAll({})
      expect(field.data).toBeUndefined()
      expect(elements.getValues()).toEqual({})
    })

    it('should safely ignore updateData for non-existent id', () => {
      const elements = new FormElements()

      expect(() => {
        elements.updateData('nonexistent', { value: 'test', status: false })
      }).not.toThrow()
      expect(elements.getData()).toEqual({})
    })
  })
})
