import { describe, it, expect } from 'vitest'
import { ApiHeaders } from '../ApiHeaders'

describe('ApiHeaders', () => {
  it('should initialize and set default headers', () => {
    const apiHeaders = new ApiHeaders()
    apiHeaders.set({ Authorization: 'Token' })

    const headers = apiHeaders.get()
    expect(headers).toEqual({
      'Authorization': 'Token',
      'Content-Type': 'application/json;charset=UTF-8'
    })
  })

  it('should merge default headers and value headers', () => {
    const apiHeaders = new ApiHeaders()
    apiHeaders.set({ 'X-Global': 'true', 'Shared': 'yes' })

    const headers = apiHeaders.get({ 'X-Global': 'false', 'Custom': 'value' })
    expect(headers).toEqual({
      'Shared': 'yes',
      'X-Global': 'false',
      'Custom': 'value',
      'Content-Type': 'application/json;charset=UTF-8'
    })
  })

  it('should return undefined if value is strictly null', () => {
    const apiHeaders = new ApiHeaders()
    expect(apiHeaders.get(null)).toBeUndefined()
  })

  it('should allow changing Content-Type', () => {
    const apiHeaders = new ApiHeaders()
    const headers = apiHeaders.get({}, 'text/plain')
    expect(headers).toEqual({
      'Content-Type': 'text/plain'
    })
  })

  it('should not set Content-Type if it is null or empty', () => {
    const apiHeaders = new ApiHeaders()
    // null type
    expect(apiHeaders.get({}, null)).toEqual({})
    // undefined triggers default parameter 'application/json;charset=UTF-8'
    expect(apiHeaders.get({}, undefined)).toEqual({
      'Content-Type': 'application/json;charset=UTF-8'
    })
    // empty string
    expect(apiHeaders.get({}, '')).toEqual({})
  })

  it('should omit Content-Type for FormData requests', () => {
    const apiHeaders = new ApiHeaders()
    apiHeaders.set({ Global: 'yes' })

    const formData = new FormData()

    // getByRequest handles FormData and should pass null for Content-Type
    const headers = apiHeaders.getByRequest(formData, { Add: 'test' })
    expect(headers).toEqual({
      Global: 'yes',
      Add: 'test'
    })
    expect(headers?.['Content-Type']).toBeUndefined()
  })

  it('should include Content-Type for non-FormData objects', () => {
    const apiHeaders = new ApiHeaders()
    const headers = apiHeaders.getByRequest({ a: 1 }, { Add: 'test' })
    expect(headers).toEqual({
      'Add': 'test',
      'Content-Type': 'application/json;charset=UTF-8'
    })
  })
})
