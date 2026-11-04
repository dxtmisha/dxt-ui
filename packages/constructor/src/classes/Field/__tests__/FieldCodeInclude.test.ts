// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldCodeInclude } from '../FieldCodeInclude'

describe('FieldCodeInclude', () => {
  it('should return string validationCode directly if ValidityState is invalid', () => {
    const codeInclude = new FieldCodeInclude({ validationCode: 'Global custom error' })
    const mockState = { valid: false } as ValidityState

    expect(codeInclude.get(mockState)).toBe('Global custom error')
  })

  it('should return undefined if ValidityState is valid or missing', () => {
    const codeInclude = new FieldCodeInclude({ validationCode: 'Error' })
    const mockState = { valid: true } as ValidityState

    expect(codeInclude.get(mockState)).toBeUndefined()
    expect(codeInclude.get(undefined)).toBeUndefined()
  })

  it('should return undefined if validationCode is not configured in props', () => {
    const codeInclude = new FieldCodeInclude({})
    const mockState = { valid: false, valueMissing: true } as ValidityState

    expect(codeInclude.get(mockState)).toBeUndefined()
  })

  it('should lookup ValidityState error mapped keys when validationCode is a record', () => {
    const validationCode = {
      valueMissing: 'Please fill this field',
      typeMismatch: 'Invalid type format'
    }
    const codeInclude = new FieldCodeInclude({ validationCode })

    const mockStateMissing = {
      valid: false,
      valueMissing: true,
      typeMismatch: false
    } as unknown as ValidityState

    expect(codeInclude.get(mockStateMissing)).toBe('Please fill this field')

    const mockStateTypeMismatch = {
      valid: false,
      valueMissing: false,
      typeMismatch: true
    } as unknown as ValidityState

    expect(codeInclude.get(mockStateTypeMismatch)).toBe('Invalid type format')

    const mockStateUnmapped = {
      valid: false,
      rangeOverflow: true
    } as unknown as ValidityState

    expect(codeInclude.get(mockStateUnmapped)).toBeUndefined()
  })
})
