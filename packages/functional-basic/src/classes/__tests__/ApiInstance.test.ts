/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiInstance } from '../ApiInstance'
import { ApiMethodItem } from '../../types/apiTypes'

// Mock fetch globally
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

// Mock console.error to avoid cluttering test output
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {
})

describe('ApiInstance', () => {
  let api: ApiInstance

  beforeEach(() => {
    api = new ApiInstance('/api/')
    mockFetch.mockClear()
    consoleErrorSpy.mockClear()

    // Set up default successful response
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

  describe('configuration methods', () => {
    describe('setUrl', () => {
      it('should set base URL and return instance', () => {
        const result = api.setUrl('/custom-api/')

        expect(result).toBe(api)
      })

      it('should use custom URL in requests', async () => {
        api.setUrl('/custom/')

        await api.get({ path: 'test' })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/custom/test'),
          expect.any(Object)
        )
      })
    })

    describe('setHeaders', () => {
      it('should set default headers and return instance', () => {
        const result = api.setHeaders({
          'X-Custom-Header': 'test-value'
        })

        expect(result).toBe(api)
      })

      it('should include default headers in requests', async () => {
        api.setHeaders({
          'X-Api-Key': 'test-key-123'
        })

        await api.get({ path: 'test' })

        const fetchCall = mockFetch.mock.calls[0]
        expect(fetchCall?.[1].headers).toMatchObject({
          'X-Api-Key': 'test-key-123'
        })
      })
    })

    describe('setRequestDefault', () => {
      it('should set default request data and return instance', () => {
        const result = api.setRequestDefault({
          userId: '123',
          token: 'abc'
        })

        expect(result).toBe(api)
      })

      it('should merge default request data with a custom request', async () => {
        api.setRequestDefault({
          apiKey: 'default-key'
        })

        mockFetch.mockResolvedValueOnce({
          ok: true,
          status: 200,
          statusText: 'OK',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          json: async () => ({ data: 'test' })
        })

        await api.post({
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
      it('should set a preparation callback and return the instance', () => {
        const callback = vi.fn().mockResolvedValue(undefined)
        const result = api.setPreparation(callback)

        expect(result).toBe(api)
      })

      it('should call preparation callback before request', async () => {
        const preparationCallback = vi.fn().mockResolvedValue(undefined)
        api.setPreparation(preparationCallback)

        await api.get({ path: 'test' })

        expect(preparationCallback).toHaveBeenCalled()
      })
    })

    describe('setEnd', () => {
      it('should set an end callback and return the instance', () => {
        const callback = vi.fn().mockResolvedValue({})
        const result = api.setEnd(callback)

        expect(result).toBe(api)
      })

      it('should call end callback after request', async () => {
        const endCallback = vi.fn().mockResolvedValue({})
        api.setEnd(endCallback)

        await api.get({ path: 'test' })

        expect(endCallback).toHaveBeenCalled()
        expect(endCallback.mock.calls?.[0]?.[0]).toBeDefined()
      })

      it('should retry the request when the end callback returns a reset flag', async () => {
        let callCount = 0
        const endCallback = vi.fn().mockImplementation(async () => {
          callCount++
          if (callCount === 1) {
            return { reset: true }
          }
          return {}
        })

        api.setEnd(endCallback)

        await api.get({ path: 'test' })

        expect(endCallback).toHaveBeenCalledTimes(2)
        expect(mockFetch).toHaveBeenCalledTimes(2)
      })
    })
  })

  describe('utility methods', () => {
    describe('isLocalhost', () => {
      it('should return true when the hostname is localhost', () => {
        Object.defineProperty(window, 'location', {
          value: { hostname: 'localhost' },
          writable: true,
          configurable: true
        })

        expect(api.isLocalhost()).toBe(true)
      })

      it('should return false when the hostname is not localhost', () => {
        Object.defineProperty(window, 'location', {
          value: { hostname: 'example.com' },
          writable: true,
          configurable: true
        })

        expect(api.isLocalhost()).toBe(false)
      })
    })

    describe('getUrl', () => {
      it('should return a path with an API prefix by default', () => {
        api.setUrl('/api/')
        const url = api.getUrl('users')

        expect(url).toBe('/api/users')
      })

      it('should return the path without API prefix when api is false', () => {
        const url = api.getUrl('/custom/path', false)

        expect(url).toBe('/custom/path')
      })

      it('should replace {locale} placeholder', () => {
        const url = api.getUrl('data/{locale}/info')

        expect(url).toMatch(/data\/\w{2}-\w{2}\/info/)
      })

      it('should replace {country} placeholder', () => {
        const url = api.getUrl('data/{country}/info')

        expect(url).toMatch(/data\/\w{2}\/info/)
      })

      it('should replace {language} placeholder', () => {
        const url = api.getUrl('data/{language}/info')

        expect(url).toMatch(/data\/\w{2}\/info/)
      })
    })

    describe('getBody', () => {
      it('should return undefined for GET method', () => {
        const body = api.getBody({ key: 'value' }, ApiMethodItem.get)

        expect(body).toBeUndefined()
      })

      it('should return JSON string for a POST method with an object', () => {
        const body = api.getBody({ key: 'value' }, ApiMethodItem.post)

        expect(body).toBe('{"key":"value"}')
      })

      it('should return FormData as is', () => {
        const formData = new FormData()
        formData.append('key', 'value')

        const body = api.getBody(formData, ApiMethodItem.post)

        expect(body).toBe(formData)
      })

      it('should return string as is for the POST method', () => {
        const body = api.getBody('custom-string', ApiMethodItem.post)

        expect(body).toBe('custom-string')
      })

      it('should return undefined for empty request', () => {
        const body = api.getBody({}, ApiMethodItem.post)

        expect(body).toBeUndefined()
      })
    })

    describe('getBodyForGet', () => {
      it('should return the query string for GET method', () => {
        const body = api.getBodyForGet({ key: 'value', id: 123 }, '/path', ApiMethodItem.get)

        expect(body).toContain('?')
        expect(body).toContain('key=value')
        expect(body).toContain('id=123')
      })

      it('should use and when a path already has a query string', () => {
        const body = api.getBodyForGet({ key: 'value' }, '/path?existing=param', ApiMethodItem.get)

        expect(body).toMatch(/^&/)
      })

      it('should return empty string for non-GET methods', () => {
        const body = api.getBodyForGet({ key: 'value' }, '/path', ApiMethodItem.post)

        expect(body).toBe('')
      })

      it('should return an empty string for an empty request', () => {
        const body = api.getBodyForGet({}, '/path', ApiMethodItem.get)

        expect(body).toBe('')
      })
    })
  })

  describe('HTTP method shortcuts', () => {
    describe('get', () => {
      it('should make a GET request', async () => {
        await api.get({ path: 'test' })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/test'),
          expect.objectContaining({ method: ApiMethodItem.get })
        )
      })

      it('should append a query string to URL for GET request', async () => {
        await api.get({
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
      it('should make a POST request', async () => {
        await api.post({
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

      it('should send request data in the body', async () => {
        await api.post({
          path: 'test',
          request: { key: 'value' }
        })

        const body = mockFetch.mock.calls?.[0]?.[1].body
        expect(JSON.parse(body)).toEqual({ key: 'value' })
      })
    })

    describe('put', () => {
      it('should make a PUT request', async () => {
        await api.put({
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
      it('should make a DELETE request', async () => {
        await api.delete({ path: 'test' })

        expect(mockFetch).toHaveBeenCalledWith(
          expect.stringContaining('/api/test'),
          expect.objectContaining({ method: ApiMethodItem.delete })
        )
      })
    })
  })

  describe('request', () => {
    it('should accept string as a path', async () => {
      await api.request('test/path')

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/test/path'),
        expect.any(Object)
      )
    })

    it('should accept ApiFetch object', async () => {
      await api.request({
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

      const result = await api.request<{ id: number, name: string }>({
        path: 'test'
      })

      expect(result).toEqual(expect.objectContaining({ id: 1, name: 'test', success: true }))
    })

    it('should return a full response when toData is false', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ data: 'test', success: true, meta: { count: 10 } })
      })

      const result = await api.request({
        path: 'test',
        toData: false
      })

      expect(result).toEqual(expect.objectContaining({ data: 'test', success: true, meta: { count: 10 } }))
    })

    it('should use custom headers', async () => {
      await api.request({
        path: 'test',
        headers: {
          Authorization: 'Bearer custom-token'
        }
      })

      const headers = mockFetch.mock.calls?.[0]?.[1].headers
      expect(headers.Authorization).toBe('Bearer custom-token')
    })

    it('should use a custom content type', async () => {
      await api.request({
        path: 'test',
        type: 'application/xml'
      })

      const headers = mockFetch.mock.calls?.[0]?.[1].headers
      expect(headers['Content-Type']).toBe('application/xml')
    })

    it('should use pathFull when provided', async () => {
      await api.request({
        pathFull: 'https://external-api.com/data'
      })

      expect(mockFetch).toHaveBeenCalledWith(
        'https://external-api.com/data',
        expect.any(Object)
      )
    })

    it('should pass custom init options to fetch', async () => {
      await api.request({
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

      await expect(api.request({ path: 'test' })).rejects.toThrow('Network error')

      expect(consoleErrorSpy).toHaveBeenCalled()
    })

    it('should not log error when hideError is true', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))

      await expect(
        api.request({
          path: 'test',
          hideError: true
        })
      ).rejects.toThrow('Network error')

      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    it('should set error status on failure', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Request failed'))

      await expect(api.request({ path: 'test' })).rejects.toThrow('Request failed')

      const status = api.getStatus()
      expect(status.getError()).toContain('Request failed')
    })
  })

  describe('status tracking', () => {
    it('should update the status on a successful request', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ data: 'test' })
      })

      await api.request({ path: 'test' })

      const status = api.getStatus()
      expect(status.getStatus()).toBe(200)
      expect(status.getStatusText()).toBe('OK')
    })

    it('should update the status on 404 response', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        json: async () => ({ error: 'Not found' })
      })

      await api.request({ path: 'test' })

      const status = api.getStatus()
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

      await api.request({ path: 'test' })

      const status = api.getStatus()
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

      const result = await api.request({
        path: 'test',
        queryReturn: customCallback
      })

      expect(customCallback).toHaveBeenCalled()
      expect(result).toEqual(expect.objectContaining({ customData: 'processed' }))
    })

    it('should handle text responses', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'text/plain' }),
        text: async () => 'plain text response'
      })

      const result = await api.request({ path: 'test' })

      expect(result).toBe('plain text response')
    })
  })

  describe('preparation lifecycle', () => {
    it('should not call global preparation when globalPreparation is false', async () => {
      const preparationCallback = vi.fn().mockResolvedValue(undefined)
      api.setPreparation(preparationCallback)

      await api.request({
        path: 'test',
        globalPreparation: false
      })

      expect(preparationCallback).not.toHaveBeenCalled()
    })

    it('should not call the global end when globalEnd is false', async () => {
      const endCallback = vi.fn().mockResolvedValue({})
      api.setEnd(endCallback)

      await api.request({
        path: 'test',
        globalEnd: false
      })

      expect(endCallback).not.toHaveBeenCalled()
    })

    it('should use data from end callback when provided', async () => {
      const endCallback = vi.fn().mockResolvedValue({
        data: { customData: 'from-end-callback' }
      })
      api.setEnd(endCallback)

      const result = await api.request({ path: 'test' })

      expect(result).toEqual(expect.objectContaining({ customData: 'from-end-callback' }))
    })
  })

  describe('getStatus and getResponse', () => {
    it('should return a status instance', () => {
      const status = api.getStatus()

      expect(status).toBeDefined()
      expect(typeof status.getStatus).toBe('function')
    })

    it('should return a response instance', () => {
      const response = api.getResponse()

      expect(response).toBeDefined()
      expect(typeof response.emulator).toBe('function')
    })
  })
})
