// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { FieldValidationInclude } from '../FieldValidationInclude'
import type { FieldAttributesInclude } from '../FieldAttributesInclude'
import type { FieldChangeInclude } from '../FieldChangeInclude'
import type { FieldMatchInclude } from '../FieldMatchInclude'
import type { FieldValueInclude } from '../FieldValueInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as Record<string, unknown>
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('FieldValidationInclude', () => {
  it('should initialize and return error status based on inputs check', () => {
    const props = {}
    const attributes = {
      listForCheck: { required: true, type: 'text' }
    } as unknown as FieldAttributesInclude
    const value = {
      getToArray: () => [''],
      item: ref('')
    } as unknown as FieldValueInclude

    const validation = new FieldValidationInclude(props, () => attributes, () => value)

    expect(validation.isError()).toBe(true)
    expect(validation.checkValidity()).toBe(false)
  })

  it('should return valid status for satisfying values', () => {
    const props = {}
    const attributes = {
      listForCheck: { required: true, type: 'text' }
    } as unknown as FieldAttributesInclude
    const value = {
      getToArray: () => ['hello'],
      item: ref('hello')
    } as unknown as FieldValueInclude

    const validation = new FieldValidationInclude(props, () => attributes, () => value)

    expect(validation.isError()).toBe(false)
    expect(validation.checkValidity()).toBe(true)
  })

  it('should use validationMessage from props directly', () => {
    const props = { validationMessage: 'Prop error message' }
    const attributes = { listForCheck: {} } as unknown as FieldAttributesInclude
    const value = {
      getToArray: () => [],
      item: ref('val')
    } as unknown as FieldValueInclude

    const validation = new FieldValidationInclude(props, () => attributes, () => value)

    expect(validation.message).toBe('Prop error message')
    expect(validation.isError()).toBe(true)
  })

  it('should suppress error message when change.is() is false', () => {
    const attributes = {
      listForCheck: { required: true, type: 'text' }
    } as unknown as FieldAttributesInclude
    const value = {
      getToArray: () => [''],
      item: ref('')
    } as unknown as FieldValueInclude
    const isChanged = ref(false)
    const change = {
      is: () => isChanged.value
    } as unknown as FieldChangeInclude

    const validation = new FieldValidationInclude({}, () => attributes, () => value, () => change)

    expect(validation.isError()).toBe(true)
    expect(validation.message).toBe('')

    isChanged.value = true
    expect(validation.message).not.toBe('')
  })

  it('should support manual validation updates via set() and match fallback', () => {
    const attributes = { listForCheck: { type: 'text' } } as unknown as FieldAttributesInclude
    const value = {
      getToArray: () => ['abc'],
      item: ref('abc')
    } as unknown as FieldValueInclude
    const match = {
      check: () => ({
        group: 'check',
        status: false,
        validationMessage: 'Fields do not match',
        value: 'abc'
      })
    } as unknown as FieldMatchInclude

    const validation = new FieldValidationInclude({}, () => attributes, () => value, undefined, undefined, () => match)
    expect(validation.isError()).toBe(true)
    expect(validation.message).toBe('Fields do not match')

    validation.set({
      status: false,
      validationMessage: 'Custom set error',
      value: 'abc'
    })
    expect(validation.message).toBe('Custom set error')

    validation.set({})
    expect(validation.message).toBe('Fields do not match')
  })

  it('should expose checkValidity and message getter', () => {
    const props = { validationMessage: 'Explicit' }
    const attributes = { listForCheck: {} } as unknown as FieldAttributesInclude
    const value = {
      getToArray: () => [],
      item: ref('val')
    } as unknown as FieldValueInclude

    const validation = new FieldValidationInclude(props, () => attributes, () => value)
    const exp = validation.expose()

    expect(exp.checkValidity()).toBe(false)
    expect(exp.getValidationMessage()).toBe('Explicit')
  })
})
