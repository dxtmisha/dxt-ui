// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ErrorCenter } from '@dxtmisha/functional'
import { FieldInputCheckInclude } from '../FieldInputCheckInclude'
import { FieldCodeInclude } from '../FieldCodeInclude'

describe('FieldInputCheckInclude', () => {
  it('should initialize hidden input with string or factory pattern attribute', () => {
    const checkInclude = new FieldInputCheckInclude('[a-z]+')
    expect(checkInclude.input).toBeDefined()
    expect(checkInclude.input?.pattern).toBe('[a-z]+')
    expect(checkInclude.group).toBe('check')

    const factoryInclude = new FieldInputCheckInclude(() => ({ pattern: '\\d+', required: true }))
    expect(factoryInclude.input?.pattern).toBe('\\d+')
    expect(factoryInclude.input?.required).toBe(true)
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

  it('should validate checkbox and radio inputs via checked property', () => {
    const checkInclude = new FieldInputCheckInclude({ type: 'checkbox', required: true })

    expect(checkInclude.check(false).status).toBe(false)
    expect(checkInclude.check(true).status).toBe(true)
  })

  it('should use FieldCodeInclude custom error messages on validity errors', () => {
    const validationCode = {
      patternMismatch: 'Must contain lowercase letters only'
    }
    const codeInclude = new FieldCodeInclude({ validationCode })
    const checkInclude = new FieldInputCheckInclude('[a-z]+', 'custom-group', () => codeInclude)

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

  it('should handle type="file" inputs correctly with File, File[], and empty values', () => {
    const checkInclude = new FieldInputCheckInclude({ type: 'file' })
    const file = new File(['test'], 'test.png', { type: 'image/png' })

    const resultWithFile = checkInclude.check(file)
    expect(resultWithFile.status).toBe(true)
    expect(resultWithFile.value).toBe(file)

    const resultWithArray = checkInclude.check([file])
    expect(resultWithArray.status).toBe(true)

    const resultEmpty = checkInclude.check(undefined)
    expect(resultEmpty.status).toBe(true)
  })

  it('should report error via ErrorCenter if setting files throws', () => {
    const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
    const checkInclude = new FieldInputCheckInclude({ type: 'file' })
    const file = new File(['test'], 'test.png', { type: 'image/png' })

    if (checkInclude.input) {
      Object.defineProperty(checkInclude.input, 'value', {
        set() {
          throw new Error('DOMException')
        },
        configurable: true
      })
    }

    checkInclude.check(file)
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({
      code: 'field-input-check-file'
    }))

    errorSpy.mockRestore()
  })
})
