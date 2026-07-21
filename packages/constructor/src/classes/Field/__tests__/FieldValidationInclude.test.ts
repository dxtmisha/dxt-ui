// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { FieldValidationInclude } from '../FieldValidationInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
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
    } as any
    const value = {
      getToArray: () => [''],
      item: ref('')
    } as any

    const validation = new FieldValidationInclude(props, attributes, value)

    expect(validation.isError()).toBe(true)
    expect(validation.checkValidity()).toBe(false)
  })

  it('should return valid status for satisfying values', () => {
    const props = {}
    const attributes = {
      listForCheck: { required: true, type: 'text' }
    } as any
    const value = {
      getToArray: () => ['hello'],
      item: ref('hello')
    } as any

    const validation = new FieldValidationInclude(props, attributes, value)

    expect(validation.isError()).toBe(false)
    expect(validation.checkValidity()).toBe(true)
  })

  it('should use validationMessage from props directly', () => {
    const props = { validationMessage: 'Prop error message' }
    const attributes = { listForCheck: {} } as any
    const value = {
      getToArray: () => [],
      item: ref('val')
    } as any

    const validation = new FieldValidationInclude(props, attributes, value)

    expect(validation.message).toBe('Prop error message')
    expect(validation.isError()).toBe(true)
  })

  it('should expose checkValidity and message getter', () => {
    const props = { validationMessage: 'Explicit' }
    const attributes = { listForCheck: {} } as any
    const value = {
      getToArray: () => [],
      item: ref('val')
    } as any

    const validation = new FieldValidationInclude(props, attributes, value)
    const exp = validation.expose()

    expect(exp.checkValidity()).toBe(false)
    expect(exp.getValidationMessage()).toBe('Explicit')
  })
})
