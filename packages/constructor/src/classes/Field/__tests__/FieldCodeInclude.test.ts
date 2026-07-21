// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldCodeInclude } from '../FieldCodeInclude'

describe('FieldCodeInclude', () => {
  it('should return string validationCode directly if ValidityState is invalid', () => {
    const codeInclude = new FieldCodeInclude({ validationCode: 'Global custom error' })
    const mockState = { valid: false } as ValidityState

    expect(codeInclude.get(mockState)).toBe('Global custom error')
  })

  it('should return undefined if ValidityState is valid', () => {
    const codeInclude = new FieldCodeInclude({ validationCode: 'Error' })
    const mockState = { valid: true } as ValidityState

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
    } as any

    expect(codeInclude.get(mockStateMissing)).toBe('Please fill this field')

    const mockStateTypeMismatch = {
      valid: false,
      valueMissing: false,
      typeMismatch: true
    } as any

    expect(codeInclude.get(mockStateTypeMismatch)).toBe('Invalid type format')
  })
})
