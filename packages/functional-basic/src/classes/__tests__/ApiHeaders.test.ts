// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ApiHeaders } from '../ApiHeaders'

describe('ApiHeaders', () => {
  it('should return default content-type if no headers provided', () => {
    const headers = new ApiHeaders()
    expect(headers.get()).toEqual({
      'Content-Type': 'application/json;charset=UTF-8'
    })
  })

  it('should merge provided headers with defaults', () => {
    const apiHeaders = new ApiHeaders()
    apiHeaders.set({ 'X-Custom-Header': 'custom-value' })

    expect(apiHeaders.get({ 'Another-Header': 'another-value' })).toEqual({
      'X-Custom-Header': 'custom-value',
      'Another-Header': 'another-value',
      'Content-Type': 'application/json;charset=UTF-8'
    })
  })

  it('should override Content-Type if specified in get()', () => {
    const headers = new ApiHeaders()
    expect(headers.get({}, 'text/plain')).toEqual({
      'Content-Type': 'text/plain'
    })
  })

  it('should not include Content-Type if type is null', () => {
    const headers = new ApiHeaders()
    expect(headers.get({}, null)).toEqual({})
  })

  it('should return undefined if value is null', () => {
    const headers = new ApiHeaders()
    expect(headers.get(null)).toBeUndefined()
  })

  it('should handle FormData in getByRequest', () => {
    const headers = new ApiHeaders()
    const formData = new FormData()

    // When request is FormData, Content-Type should be removed (browser sets it automatically with boundary)
    const result = headers.getByRequest(formData)
    expect(result).toEqual({})
    expect(result).not.toHaveProperty('Content-Type')
  })

  it('should use default headers if provided in getByRequest', () => {
    const headers = new ApiHeaders()
    headers.set({ Authorization: 'Bearer token' })

    expect(headers.getByRequest({}, { 'X-Test': 'val' })).toEqual({
      'Authorization': 'Bearer token',
      'X-Test': 'val',
      'Content-Type': 'application/json;charset=UTF-8'
    })
  })

  it('should support chaining in set()', () => {
    const headers = new ApiHeaders()
    const result = headers.set({ A: 'B' })
    expect(result).toBe(headers)
    expect(headers.get()).toEqual({
      'A': 'B',
      'Content-Type': 'application/json;charset=UTF-8'
    })
  })
})
