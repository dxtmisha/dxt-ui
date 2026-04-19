import { describe, it, expect } from 'vitest'
import { ApiDefault } from '../ApiDefault'

describe('ApiDefault', () => {
  it('should initialize without default value', () => {
    const apiDefault = new ApiDefault()
    expect(apiDefault.is()).toBe(false)
    expect(apiDefault.get()).toBeUndefined()
  })

  it('should set and get default values', () => {
    const apiDefault = new ApiDefault()
    apiDefault.set({ token: '123' })
    expect(apiDefault.is()).toBe(true)
    expect(apiDefault.get()).toEqual({ token: '123' })
  })

  it('should merge default object into request object', () => {
    const apiDefault = new ApiDefault()
    apiDefault.set({ globalParam: 'yes' })

    // Passing standard object
    const result = apiDefault.request({ customParam: 'no' })
    expect(result).toEqual({
      globalParam: 'yes',
      customParam: 'no'
    })

    // Request overrides default
    const resultOverride = apiDefault.request({ globalParam: 'no' })
    expect(resultOverride).toEqual({
      globalParam: 'no'
    })
  })

  it('should merge defaults into FormData', () => {
    const apiDefault = new ApiDefault()
    apiDefault.set({ globalParam: 'yes', existingParam: 'new' })

    const form = new FormData()
    form.append('existingParam', 'old')

    const result = apiDefault.request(form) as FormData

    // Default should be added if not exists
    expect(result.get('globalParam')).toBe('yes')

    // Existing should NOT be overridden by default
    expect(result.get('existingParam')).toBe('old')
  })

  it('should return request as is if it is a string or array when value is set', () => {
    const apiDefault = new ApiDefault()
    apiDefault.set({ defaultParam: 1 })

    // String
    expect(apiDefault.request('string_request')).toBe('string_request')

    // Array
    expect(apiDefault.request(['array_item'])).toEqual(['array_item'])
  })

  it('should return request as is if no defaults exist', () => {
    const apiDefault = new ApiDefault()
    expect(apiDefault.request({ a: 1 })).toEqual({ a: 1 })
    expect(apiDefault.request(undefined)).toBeUndefined()
  })
})
