import { describe, it, expect } from 'vitest'
import { ApiHeaders } from '../ApiHeaders'

describe('ApiHeaders', () => {
  it('should initialize and set default headers with chaining support', () => {
    const apiHeaders = new ApiHeaders()
    const returnedInstance = apiHeaders.set({ Authorization: 'Token' })

    expect(returnedInstance).toBe(apiHeaders)
    expect(apiHeaders.get()).toEqual({
      'authorization': 'Token',
      'content-type': 'application/json;charset=UTF-8'
    })
  })

  it('should support a factory function as default headers', () => {
    const apiHeaders = new ApiHeaders()
    apiHeaders.set(() => ({ Authorization: 'DynamicToken' }))

    expect(apiHeaders.get()).toEqual({
      'authorization': 'DynamicToken',
      'content-type': 'application/json;charset=UTF-8'
    })
  })

  it('should normalize all header keys to lowercase and override default headers case-insensitively', () => {
    const apiHeaders = new ApiHeaders()
    apiHeaders.set({ 'X-Global': 'true', 'Shared-Header': 'yes' })

    const headers = apiHeaders.get({ 'x-global': 'false', 'Custom-Header': 'value' })
    expect(headers).toEqual({
      'shared-header': 'yes',
      'x-global': 'false',
      'custom-header': 'value',
      'content-type': 'application/json;charset=UTF-8'
    })
  })

  it('should return undefined when value is strictly null', () => {
    const apiHeaders = new ApiHeaders()
    apiHeaders.set({ Authorization: 'Token' })

    expect(apiHeaders.get(null)).toBeUndefined()
  })

  it('should allow overriding Content-Type', () => {
    const apiHeaders = new ApiHeaders()
    const headers = apiHeaders.get({}, 'text/plain')

    expect(headers).toEqual({
      'content-type': 'text/plain'
    })
  })

  it('should omit Content-Type when type is null or empty string, and use default when undefined', () => {
    const apiHeaders = new ApiHeaders()

    expect(apiHeaders.get({}, null)).toEqual({})
    expect(apiHeaders.get({}, '')).toEqual({})
    expect(apiHeaders.get({}, undefined)).toEqual({
      'content-type': 'application/json;charset=UTF-8'
    })
  })

  it('should omit Content-Type for FormData requests in getByRequest()', () => {
    const apiHeaders = new ApiHeaders()
    apiHeaders.set({ Global: 'yes' })

    const formData = new FormData()
    const headers = apiHeaders.getByRequest(formData, { Additional: 'test' })

    expect(headers).toEqual({
      global: 'yes',
      additional: 'test'
    })
    expect(headers?.['content-type']).toBeUndefined()
  })

  it('should include Content-Type for non-FormData requests in getByRequest()', () => {
    const apiHeaders = new ApiHeaders()
    const headers = apiHeaders.getByRequest({ key: 1 }, { Additional: 'test' })

    expect(headers).toEqual({
      'additional': 'test',
      'content-type': 'application/json;charset=UTF-8'
    })
  })

  it('should convert valid sources and ignore non-object sources in toHeaders()', () => {
    class TestApiHeaders extends ApiHeaders {
      testToHeaders(...sources: Parameters<ApiHeaders['toHeaders']>) {
        return this.toHeaders(...sources)
      }
    }

    const testHeaders = new TestApiHeaders()
    const result = testHeaders.testToHeaders(
      { 'X-First': '1' },
      null,
      undefined,
      // @ts-expect-error Intentionally testing runtime guard against invalid string source
      'invalid',
      () => ({ 'x-second': '2' })
    )

    expect(result).toEqual({
      'x-first': '1',
      'x-second': '2'
    })
  })
})
