// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldInputCheckInclude } from '../FieldInputCheckInclude'
import { FieldCodeInclude } from '../FieldCodeInclude'

describe('FieldInputCheckInclude', () => {
  it('should initialize hidden input with pattern attribute', () => {
    const checkInclude = new FieldInputCheckInclude('[a-z]+')
    expect(checkInclude.input).toBeDefined()
    expect(checkInclude.input?.pattern).toBe('[a-z]+')
  })

  it('should return true validation status for matching values', () => {
    const checkInclude = new FieldInputCheckInclude('[a-z]+')
    const result = checkInclude.check('abc')

    expect(result.status).toBe(true)
    expect(result.value).toBe('abc')
  })

  it('should return false validation status for mismatched values', () => {
    const checkInclude = new FieldInputCheckInclude('[a-z]+')
    const result = checkInclude.check('123')

    expect(result.status).toBe(false)
    expect(result.validationMessage).toBeDefined()
  })

  it('should use FieldCodeInclude custom error messages on validity errors', () => {
    const validationCode = {
      patternMismatch: 'Must contain lowercase letters only'
    }
    const codeInclude = new FieldCodeInclude({ validationCode })
    const checkInclude = new FieldInputCheckInclude('[a-z]+', 'custom-group', codeInclude)

    if (checkInclude.input) {
      Object.defineProperty(checkInclude.input, 'validity', {
        value: {
          valid: false,
          patternMismatch: true
        },
        configurable: true
      })
    }

    const result = checkInclude.check('123')
    expect(result.status).toBe(false)
    expect(result.validityMessage).toBe('Must contain lowercase letters only')
    expect(result.group).toBe('custom-group')
  })
})
