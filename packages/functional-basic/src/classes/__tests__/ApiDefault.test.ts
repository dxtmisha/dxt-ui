// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ApiDefault } from '../ApiDefault'

describe('ApiDefault', () => {
  it('is() should return false initially', () => {
    const apiDefault = new ApiDefault()
    expect(apiDefault.is()).toBe(false)
  })

  it('set() should set value and is() should return true', () => {
    const apiDefault = new ApiDefault()
    apiDefault.set({ key: 'value' })
    expect(apiDefault.is()).toBe(true)
    expect(apiDefault.get()).toEqual({ key: 'value' })
  })

  it('request() should merge defaults with object request', () => {
    const apiDefault = new ApiDefault()
    apiDefault.set({ appId: 123, version: '1.0' })

    const request = { userId: 456, version: '2.0' }
    const result = apiDefault.request(request)

    expect(result).toEqual({
      appId: 123,
      userId: 456,
      version: '2.0' // Overridden by request
    })
  })

  it('request() should add defaults to FormData', () => {
    const apiDefault = new ApiDefault()
    apiDefault.set({ token: 'abc', group: 'admin' })

    const formData = new FormData()
    formData.append('group', 'user')
    formData.append('name', 'John')

    apiDefault.request(formData)

    expect(formData.get('token')).toBe('abc')
    expect(formData.get('group')).toBe('user') // Should not overwrite existing
    expect(formData.get('name')).toBe('John')
  })

  it('request() should return original request if no defaults set', () => {
    const apiDefault = new ApiDefault()
    const request = { a: 1 }
    expect(apiDefault.request(request)).toBe(request)
  })

  it('request() should return original request if it is a string', () => {
    const apiDefault = new ApiDefault()
    apiDefault.set({ a: 1 })
    const request = 'raw body'
    expect(apiDefault.request(request)).toBe(request)
  })

  it('should support chaining', () => {
    const apiDefault = new ApiDefault()
    const result = apiDefault.set({ x: 1 })
    expect(result).toBe(apiDefault)
  })
})
