/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Api } from '../Api'
import { ApiMethodItem } from '../../types/apiTypes'

// Mock fetch globally
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

// Mock console.error to avoid cluttering test output
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {
})

describe('Api', () => {
  beforeEach(() => {
    mockFetch.mockClear()
    consoleErrorSpy.mockClear()

    // Setup default successful response
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      json: async () => ({ data: 'test', success: true })
    })
  })

  afterEach(() => {
    // Reset API state after each test
    Api.setUrl('/api/')
    Api.setHeaders({})
    Api.setRequestDefault({})
  })

  describe('static configuration methods', () => {
    describe('setUrl', () => {
      it('should set base URL and return Api class', () => {
        const result = Api.setUrl('/custom-api/')

        expect(result).toBe(Api)
      })

      it('should use custom URL in requests', async () => {
        Api.setUrl('/custom/')

        await Api.get({ path: 'test' })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/custom/test'),
          expect.any(Object)
        )
      })
    })

    describe('setHeaders', () => {
      it('should set default headers and return Api class', () => {
        const result = Api.setHeaders({
          'X-Custom-Header': 'test-value'
        })

        expect(result).toBe(Api)
      })

      it('should include default headers in requests', async () => {
        Api.setHeaders({
          'X-Api-Key': 'test-key-123'
        })

        await Api.get({ path: 'test' })

        const fetchCall = mockFetch.mock.calls[0]
        expect(fetchCall?.[1].headers).toMatchObject({
          'X-Api-Key': 'test-key-123'
        })
      })
    })

    describe('setRequestDefault', () => {
      it('should set default request data and return Api class', () => {
        const result = Api.setRequestDefault({
          userId: '123',
          token: 'abc'
        })

        expect(result).toBe(Api)
      })

      it('should merge default request data with custom request', async () => {
        Api.setRequestDefault({
          apiKey: 'default-key'
        })

        mockFetch.mockResolvedValueOnce({
          ok: true,
          status: 200,
          statusText: 'OK',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          json: async () => ({ data: 'test' })
        })

        await Api.post({
          path: 'test',
          request: { customData: 'value' }
        })

        const body = mockFetch.mock.calls?.[0]?.[1].body
        expect(JSON.parse(body)).toMatchObject({
          apiKey: 'default-key',
          customData: 'value'
        })
      })
    })

    describe('setPreparation', () => {
      it('should set preparation callback and return Api class', () => {
        const callback = vi.fn().mockResolvedValue(undefined)
        const result = Api.setPreparation(callback)

        expect(result).toBe(Api)
      })

      it('should call preparation callback before request', async () => {
        const preparationCallback = vi.fn().mockResolvedValue(undefined)
        Api.setPreparation(preparationCallback)

        await Api.get({ path: 'test' })

        expect(preparationCallback).toHaveBeenCalled()
      })
    })

    describe('setEnd', () => {
      it('should set end callback and return Api class', () => {
        const callback = vi.fn().mockResolvedValue({})
        const result = Api.setEnd(callback)

        expect(result).toBe(Api)
      })

      it('should call end callback after request', async () => {
        const endCallback = vi.fn().mockResolvedValue({})
        Api.setEnd(endCallback)

        await Api.get({ path: 'test' })

        expect(endCallback).toHaveBeenCalled()
        expect(endCallback.mock.calls?.[0]?.[0]).toBeDefined()
      })

      it('should retry request when end callback returns reset flag', async () => {
        let callCount = 0
        const endCallback = vi.fn().mockImplementation(async () => {
          callCount++
          if (callCount === 1) {
            return { reset: true }
          }
          return {}
        })

        Api.setEnd(endCallback)

        await Api.get({ path: 'test' })

        expect(endCallback).toHaveBeenCalledTimes(2)
        expect(mockFetch).toHaveBeenCalledTimes(2)
      })
    })
  })

  describe('utility methods', () => {
    describe('isLocalhost', () => {
      it('should return true when hostname is localhost', () => {
        Object.defineProperty(window, 'location', {
          value: { hostname: 'localhost' },
          writable: true,
          configurable: true
        })

        expect(Api.isLocalhost()).toBe(true)
      })

      it('should return false when hostname is not localhost', () => {
        Object.defineProperty(window, 'location', {
          value: { hostname: 'example.com' },
          writable: true,
          configurable: true
        })

        expect(Api.isLocalhost()).toBe(false)
      })
    })

    describe('getUrl', () => {
      it('should return path with API prefix by default', () => {
        Api.setUrl('/api/')
        const url = Api.getUrl('users')

        expect(url).toBe('/api/users')
      })

      it('should return path without API prefix when api is false', () => {
        const url = Api.getUrl('/custom/path', false)

        expect(url).toBe('/custom/path')
      })

      it('should replace {locale} placeholder', () => {
        const url = Api.getUrl('data/{locale}/info')

        expect(url).toMatch(/data\/\w{2}-\w{2}\/info/)
      })

      it('should replace {country} placeholder', () => {
        const url = Api.getUrl('data/{country}/info')

        expect(url).toMatch(/data\/\w{2}\/info/)
      })

      it('should replace {language} placeholder', () => {
        const url = Api.getUrl('data/{language}/info')

        expect(url).toMatch(/data\/\w{2}\/info/)
      })
    })

    describe('getBody', () => {
      it('should return undefined for GET method', () => {
        const body = Api.getBody({ key: 'value' }, ApiMethodItem.get)

        expect(body).toBeUndefined()
      })

      it('should return JSON string for POST method with object', () => {
        const body = Api.getBody({ key: 'value' }, ApiMethodItem.post)

        expect(body).toBe('{"key":"value"}')
      })

      it('should return FormData as is', () => {
        const formData = new FormData()
        formData.append('key', 'value')

        const body = Api.getBody(formData, ApiMethodItem.post)

        expect(body).toBe(formData)
      })

      it('should return string as is for POST method', () => {
        const body = Api.getBody('custom-string', ApiMethodItem.post)

        expect(body).toBe('custom-string')
      })

      it('should return undefined for empty request', () => {
        const body = Api.getBody({}, ApiMethodItem.post)

        expect(body).toBeUndefined()
      })
    })

    describe('getBodyForGet', () => {
      it('should return query string for GET method', () => {
        const body = Api.getBodyForGet({ key: 'value', id: 123 }, '/path', ApiMethodItem.get)

        expect(body).toContain('?')
        expect(body).toContain('key=value')
        expect(body).toContain('id=123')
      })

      it('should use & when path already has query string', () => {
        const body = Api.getBodyForGet({ key: 'value' }, '/path?existing=param', ApiMethodItem.get)

        expect(body).toMatch(/^&/)
      })

      it('should return empty string for non-GET methods', () => {
        const body = Api.getBodyForGet({ key: 'value' }, '/path', ApiMethodItem.post)

        expect(body).toBe('')
      })

      it('should return empty string for empty request', () => {
        const body = Api.getBodyForGet({}, '/path', ApiMethodItem.get)

        expect(body).toBe('')
      })
    })
  })

  describe('HTTP method shortcuts', () => {
    describe('get', () => {
      it('should make GET request', async () => {
        await Api.get({ path: 'test' })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/test'),
          expect.objectContaining({ method: ApiMethodItem.get })
        )
      })

      it('should append query string to URL for GET request', async () => {
        await Api.get({
          path: 'test',
          request: { id: '123', name: 'test' }
        })

        const url = mockFetch.mock.calls?.[0]?.[0]
        expect(url).toContain('?')
        expect(url).toContain('id=123')
        expect(url).toContain('name=test')
      })
    })

    describe('post', () => {
      it('should make POST request', async () => {
        await Api.post({
          path: 'test',
          request: { data: 'value' }
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/test'),
          expect.objectContaining({
            method: ApiMethodItem.post,
            body: expect.any(String)
          })
        )
      })

      it('should send request data in body', async () => {
        await Api.post({
          path: 'test',
          request: { key: 'value' }
        })

        const body = mockFetch.mock.calls?.[0]?.[1].body
        expect(JSON.parse(body)).toEqual({ key: 'value' })
      })
    })

    describe('put', () => {
      it('should make PUT request', async () => {
        await Api.put({
          path: 'test',
          request: { data: 'value' }
        })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/test'),
          expect.objectContaining({ method: ApiMethodItem.put })
        )
      })
    })

    describe('delete', () => {
      it('should make DELETE request', async () => {
        await Api.delete({ path: 'test' })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/test'),
          expect.objectContaining({ method: ApiMethodItem.delete })
        )
      })
    })
  })

  describe('request', () => {
    it('should accept string as path', async () => {
      await Api.request('test/path')

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/test/path'),
        expect.any(Object)
      )
    })

    it('should accept ApiFetch object', async () => {
      await Api.request({
        path: 'test',
        method: ApiMethodItem.post,
        request: { data: 'value' }
      })

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/test'),
        expect.objectContaining({ method: ApiMethodItem.post })
      )
    })

    it('should return parsed JSON data by default', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ data: { id: 1, name: 'test' }, success: true })
      })

      const result = await Api.request<{ id: number, name: string }>({
        path: 'test'
      })

      expect(result).toEqual({ id: 1, name: 'test', success: true })
    })

    it('should return full response when toData is false', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ data: 'test', success: true, meta: { count: 10 } })
      })

      const result = await Api.request({
        path: 'test',
        toData: false
      })

      expect(result).toEqual({ data: 'test', success: true, meta: { count: 10 } })
    })

    it('should use custom headers', async () => {
      await Api.request({
        path: 'test',
        headers: {
          Authorization: 'Bearer custom-token'
        }
      })

      const headers = mockFetch.mock.calls?.[0]?.[1].headers
      expect(headers.Authorization).toBe('Bearer custom-token')
    })

    it('should use custom content type', async () => {
      await Api.request({
        path: 'test',
        type: 'application/xml'
      })

      const headers = mockFetch.mock.calls?.[0]?.[1].headers
      expect(headers['Content-Type']).toBe('application/xml')
    })

    it('should use pathFull when provided', async () => {
      await Api.request({
        pathFull: 'https://external-api.com/data'
      })

      expect(mockFetch).toHaveBeenCalledWith(
        'https://external-api.com/data',
        expect.any(Object)
      )
    })

    it('should pass custom init options to fetch', async () => {
      await Api.request({
        path: 'test',
        init: {
          credentials: 'include',
          mode: 'cors'
        }
      })

      expect(mockFetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          credentials: 'include',
          mode: 'cors'
        })
      )
    })
  })

  describe('error handling', () => {
    it('should handle fetch errors', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))

      const result = await Api.request({ path: 'test' })

      expect(consoleErrorSpy).toHaveBeenCalled()
      expect(result).toEqual({})
    })

    it('should not log error when hideError is true', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))

      await Api.request({
        path: 'test',
        hideError: true
      })

      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    it('should set error status on failure', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Request failed'))

      await Api.request({ path: 'test' })

      const status = Api.getStatus()
      expect(status.getError()).toContain('Request failed')
    })
  })

  describe('status tracking', () => {
    it('should update status on successful request', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ data: 'test' })
      })

      await Api.request({ path: 'test' })

      const status = Api.getStatus()
      expect(status.getStatus()).toBe(200)
      expect(status.getStatusText()).toBe('OK')
    })

    it('should update status on 404 response', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ error: 'Not found' })
      })

      await Api.request({ path: 'test' })

      const status = Api.getStatus()
      expect(status.getStatus()).toBe(404)
      expect(status.getStatusText()).toBe('Not Found')
    })

    it('should store last response', async () => {
      const responseData = { data: { id: 1, name: 'test' }, success: true }
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => responseData
      })

      await Api.request({ path: 'test' })

      const status = Api.getStatus()
      expect(status.getResponse()).toMatchObject(responseData)
    })
  })

  describe('custom response processing', () => {
    it('should use queryReturn callback when provided', async () => {
      const customCallback = vi.fn().mockResolvedValue({ customData: 'processed' })

      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ data: 'original' })
      })

      const result = await Api.request({
        path: 'test',
        queryReturn: customCallback
      })

      expect(customCallback).toHaveBeenCalled()
      expect(result).toEqual({ customData: 'processed' })
    })

    it('should handle text responses', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'text/plain' }),
        text: async () => 'plain text response'
      })

      const result = await Api.request({ path: 'test' })

      expect(result).toBe('plain text response')
    })
  })

  describe('preparation lifecycle', () => {
    it('should not call global preparation when globalPreparation is false', async () => {
      const preparationCallback = vi.fn().mockResolvedValue(undefined)
      Api.setPreparation(preparationCallback)

      await Api.request({
        path: 'test',
        globalPreparation: false
      })

      expect(preparationCallback).not.toHaveBeenCalled()
    })

    it('should not call global end when globalEnd is false', async () => {
      const endCallback = vi.fn().mockResolvedValue({})
      Api.setEnd(endCallback)

      await Api.request({
        path: 'test',
        globalEnd: false
      })

      expect(endCallback).not.toHaveBeenCalled()
    })

    it('should use data from end callback when provided', async () => {
      const endCallback = vi.fn().mockResolvedValue({
        data: { customData: 'from-end-callback' }
      })
      Api.setEnd(endCallback)

      const result = await Api.request({ path: 'test' })

      expect(result).toEqual({ customData: 'from-end-callback' })
    })
  })

  describe('integration scenarios', () => {
    it('should handle complete request lifecycle', async () => {
      const preparationCallback = vi.fn().mockResolvedValue(undefined)
      const endCallback = vi.fn().mockResolvedValue({})

      Api.setUrl('/api/v1/')
      Api.setHeaders({ 'X-Api-Key': 'test-key' })
      Api.setPreparation(preparationCallback)
      Api.setEnd(endCallback)

      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ data: { userId: 1 }, success: true })
      })

      const result = await Api.post({
        path: 'users',
        request: { name: 'John' }
      })

      expect(preparationCallback).toHaveBeenCalled()
      expect(endCallback).toHaveBeenCalled()
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/v1/users'),
        expect.objectContaining({
          method: ApiMethodItem.post,
          headers: expect.objectContaining({
            'X-Api-Key': 'test-key'
          })
        })
      )
      expect(result).toEqual({ userId: 1, success: true })
    })

    it('should handle FormData upload', async () => {
      const formData = new FormData()
      formData.append('file', new Blob(['test'], { type: 'text/plain' }))
      formData.append('name', 'test-file')

      await Api.post({
        path: 'upload',
        request: formData
      })

      const fetchCall = mockFetch.mock.calls[0]
      expect(fetchCall?.[1].body).toBe(formData)
    })

    it('should handle retry logic with reset flag', async () => {
      let attempts = 0
      const endCallback = vi.fn().mockImplementation(async () => {
        attempts++
        if (attempts === 1) {
          return { reset: true }
        }
        return {}
      })

      Api.setEnd(endCallback)

      mockFetch.mockResolvedValue({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ data: 'success' })
      })

      await Api.request({ path: 'test' })

      expect(attempts).toBe(2)
      expect(mockFetch).toHaveBeenCalledTimes(2)
    })
  })

  describe('getStatus and getResponse', () => {
    it('should return status instance', () => {
      const status = Api.getStatus()

      expect(status).toBeDefined()
      expect(typeof status.getStatus).toBe('function')
    })

    it('should return response instance', () => {
      const response = Api.getResponse()

      expect(response).toBeDefined()
      expect(typeof response.emulator).toBe('function')
    })
  })
})
