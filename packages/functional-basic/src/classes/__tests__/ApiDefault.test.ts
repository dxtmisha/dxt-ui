import { describe, it, expect } from 'vitest'
import { ApiDefault } from '../ApiDefault'

describe('ApiDefault', () => {
  describe('Initialization, get(), set(), and is()', () => {
    it('should initialize without default value', () => {
      const apiDefault = new ApiDefault()

      expect(apiDefault.is()).toBe(false)
      expect(apiDefault.get()).toBeUndefined()
    })

    it('should set and get static default values and support method chaining', () => {
      const apiDefault = new ApiDefault()
      const returnedInstance = apiDefault.set({ token: '123' })

      expect(returnedInstance).toBe(apiDefault)
      expect(apiDefault.is()).toBe(true)
      expect(apiDefault.get()).toEqual({ token: '123' })
    })

    it('should evaluate function when default value is a factory function', () => {
      const apiDefault = new ApiDefault()
      let counter = 0

      apiDefault.set(() => {
        counter += 1
        return { token: `dynamic-${counter}` }
      })

      expect(apiDefault.is()).toBe(true)
      expect(apiDefault.get()).toEqual({ token: 'dynamic-1' })
      expect(apiDefault.get()).toEqual({ token: 'dynamic-2' })
    })
  })

  describe('Request payload merging (request)', () => {
    it('should merge default object into request object without mutating originals', () => {
      const apiDefault = new ApiDefault()
      const defaults = { globalParam: 'yes', sharedParam: 'default' }
      const inputRequest = { customParam: 'no', sharedParam: 'override' }

      apiDefault.set(defaults)

      const mergedResult = apiDefault.request(inputRequest)
      expect(mergedResult).toEqual({
        globalParam: 'yes',
        sharedParam: 'override',
        customParam: 'no'
      })
      expect(defaults.sharedParam).toBe('default')
      expect(inputRequest).not.toHaveProperty('globalParam')
    })

    it('should return a copy of defaults when request() is called with undefined or no arguments', () => {
      const apiDefault = new ApiDefault()
      apiDefault.set({ globalParam: 'yes', count: 0, active: false })

      expect(apiDefault.request()).toEqual({
        globalParam: 'yes',
        count: 0,
        active: false
      })
      expect(apiDefault.request(undefined)).toEqual({
        globalParam: 'yes',
        count: 0,
        active: false
      })
    })

    it('should merge defaults into FormData without overwriting existing FormData keys', () => {
      const apiDefault = new ApiDefault()
      apiDefault.set({ globalParam: 'yes', existingParam: 'new-default' })

      const formData = new FormData()
      formData.append('existingParam', 'preserved-value')

      const result = apiDefault.request(formData)

      expect(result).toBe(formData)
      expect((result as FormData).get('globalParam')).toBe('yes')
      expect((result as FormData).get('existingParam')).toBe('preserved-value')
    })

    it('should return request unchanged when request is a string or an array', () => {
      const apiDefault = new ApiDefault()
      apiDefault.set({ defaultParam: 1 })

      expect(apiDefault.request('raw-string-body')).toBe('raw-string-body')
      expect(apiDefault.request(['array-item'])).toEqual(['array-item'])
    })

    it('should return request unchanged when no defaults are set or defaults are empty', () => {
      const apiDefault = new ApiDefault()

      expect(apiDefault.request({ key: 1 })).toEqual({ key: 1 })
      expect(apiDefault.request()).toBeUndefined()

      apiDefault.set({})
      expect(apiDefault.request({ key: 2 })).toEqual({ key: 2 })
      expect(apiDefault.request()).toBeUndefined()
    })
  })
})
