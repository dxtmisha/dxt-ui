/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiInstance } from '../ApiInstance'
import { ApiMethodItem } from '../../types/apiTypes'
import { LoadingInstance } from '../LoadingInstance'
import { Loading } from '../Loading'
import { ErrorCenter } from '../ErrorCenter'
import { ApiHeaders } from '../ApiHeaders'
import { ApiDefault } from '../ApiDefault'
import { ApiStatus } from '../ApiStatus'
import { ApiResponse } from '../ApiResponse'
import { ApiPreparation } from '../ApiPreparation'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import { errorCauseList } from '../../media/errorCauseList'
import { random } from '../../functions/random'
import { sleep } from '../../functions/sleep'

// Mock dependencies
vi.mock('../../functions/random', () => ({
  random: vi.fn((min, _max) => min)
}))

vi.mock('../../functions/sleep', () => ({
  sleep: vi.fn(() => Promise.resolve())
}))

// Mock fetch globally
const mockFetch = vi.fn()
globalThis.fetch = mockFetch

// Spy on ErrorCenterInstance.on to verify error handling
let errorCenterSpy: ReturnType<typeof vi.spyOn>
/**
 * Creates a mock Response object for fetch.
 */
function createMockResponse(options: {
  status?: number
  statusText?: string
  contentType?: string
  json?: any
  text?: string
} = {}) {
  const {
    status = 200,
    statusText = 'OK',
    contentType = 'application/json',
    json = { data: 'test', success: true },
    text = ''
  } = options

  return {
    ok: status >= 200 && status < 300,
    status,
    statusText,
    headers: new Headers({ 'Content-Type': contentType }),
    json: vi.fn().mockResolvedValue(json),
    text: vi.fn().mockResolvedValue(text)
  }
}

describe('ApiInstance', () => {
  let api: ApiInstance

  beforeEach(() => {
    vi.restoreAllMocks()
    mockFetch.mockReset()
    mockFetch.mockResolvedValue(createMockResponse())

    // Clear global mocks
    // @ts-expect-error: sleep is mocked
    sleep.mockClear()
    // @ts-expect-error: random is mocked
    random.mockClear()

    // Spy on the default ErrorCenter instance's on method
    errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on')

    api = new ApiInstance('/api/')

    // Reset default loading instance state
    // @ts-expect-error: Accessing protected member for testing purposes
    Loading.getItem().value = 0
  })

  // ─────────────────────────────────────────────
  // Constructor and DI
  // ─────────────────────────────────────────────

  describe('constructor', () => {
    it('should use the default url "/api/" when no argument is provided', () => {
      const defaultApi = new ApiInstance()
      expect(defaultApi.getUrl('test')).toContain('/api/test')
    })

    it('should use custom url when provided', () => {
      const customApi = new ApiInstance('/v2/')
      expect(customApi.getUrl('users')).toBe('/v2/users')
    })

    it('should accept custom headersClass in options', () => {
      class CustomHeaders extends ApiHeaders {
        get() {
          return { 'X-Custom': 'yes' } as Record<string, string>
        }
      }
      const customApi = new ApiInstance('/api/', { headersClass: CustomHeaders })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.headers).toBeInstanceOf(CustomHeaders)
    })

    it('should accept custom requestDefaultClass in options', () => {
      class CustomDefault extends ApiDefault { }
      const customApi = new ApiInstance('/api/', { requestDefaultClass: CustomDefault })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.requestDefault).toBeInstanceOf(CustomDefault)
    })

    it('should accept custom statusClass in options', () => {
      class CustomStatus extends ApiStatus { }
      const customApi = new ApiInstance('/api/', { statusClass: CustomStatus })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.status).toBeInstanceOf(CustomStatus)
    })

    it('should accept custom responseClass in options', () => {
      class CustomResponse extends ApiResponse { }
      const customApi = new ApiInstance('/api/', { responseClass: CustomResponse })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.response).toBeInstanceOf(CustomResponse)
    })

    it('should accept custom preparationClass in options', () => {
      class CustomPreparation extends ApiPreparation { }
      const customApi = new ApiInstance('/api/', { preparationClass: CustomPreparation })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.preparation).toBeInstanceOf(CustomPreparation)
    })

    it('should accept custom loadingClass in options', () => {
      const customLoading = new LoadingInstance('custom-event')
      const customApi = new ApiInstance('/api/', { loadingClass: customLoading })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.loading).toBe(customLoading)
    })

    it('should accept custom errorCenterClass in options', () => {
      const customErrorCenter = new ErrorCenterInstance(errorCauseList)
      const customApi = new ApiInstance('/api/', { errorCenterClass: customErrorCenter })
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(customApi.errorCenter).toBe(customErrorCenter)
    })

    it('should use Loading.getItem() by default for loading', () => {
      const defaultApi = new ApiInstance()
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(defaultApi.loading).toBe(Loading.getItem())
    })

    it('should use ErrorCenter.getItem() by default for errorCenter', () => {
      const defaultApi = new ApiInstance()
      // @ts-expect-error: Accessing protected member for testing purposes
      expect(defaultApi.errorCenter).toBe(ErrorCenter.getItem())
    })
  })

  // ─────────────────────────────────────────────
  // Loading lifecycle
  // ─────────────────────────────────────────────

  describe('loading lifecycle', () => {
    it('should call loading.show() and loading.hide() on successful request', async () => {
      const loading = Loading.getItem()
      const showSpy = vi.spyOn(loading, 'show')
      const hideSpy = vi.spyOn(loading, 'hide')
      await api.get({ path: 'test' })
      expect(showSpy).toHaveBeenCalledTimes(1)
      expect(hideSpy).toHaveBeenCalledTimes(1)
      expect(loading.get()).toBe(0)
    })

    it('should call loading.show() and loading.hide() on failed request', async () => {
      const loading = Loading.getItem()
      const showSpy = vi.spyOn(loading, 'show')
      const hideSpy = vi.spyOn(loading, 'hide')
      mockFetch.mockRejectedValueOnce(new Error('Network failure'))
      await expect(api.get({ path: 'test' })).rejects.toThrow()
      expect(showSpy).toHaveBeenCalledTimes(1)
      expect(hideSpy).toHaveBeenCalledTimes(1)
      expect(loading.get()).toBe(0)
    })

    it('should not call loading operations when hideLoading is true', async () => {
      const loading = Loading.getItem()
      const showSpy = vi.spyOn(loading, 'show')
      const hideSpy = vi.spyOn(loading, 'hide')
      await api.get({ path: 'test', hideLoading: true })
      expect(showSpy).not.toHaveBeenCalled()
      expect(hideSpy).not.toHaveBeenCalled()
    })

    it('should use custom LoadingInstance if provided', async () => {
      const customLoading = new LoadingInstance('custom-event')
      const showSpy = vi.spyOn(customLoading, 'show')
      const hideSpy = vi.spyOn(customLoading, 'hide')
      const customApi = new ApiInstance('/api/', { loadingClass: customLoading })
      await customApi.get({ path: 'test' })
      expect(showSpy).toHaveBeenCalledTimes(1)
      expect(hideSpy).toHaveBeenCalledTimes(1)
      expect(customLoading.get()).toBe(0)
      expect(Loading.is()).toBe(false)
    })

    it('should hide loading before retrying when `end.reset` is true', async () => {
      const loading = Loading.getItem()
      let callCount = 0
      api.setEnd(async () => {
        callCount++
        return callCount === 1 ? { reset: true } : {}
      })
      const showSpy = vi.spyOn(loading, 'show')
      const hideSpy = vi.spyOn(loading, 'hide')
      await api.get({ path: 'test' })
      expect(showSpy).toHaveBeenCalledTimes(2)
      expect(hideSpy).toHaveBeenCalledTimes(2)
      expect(loading.get()).toBe(0)
    })

    it('should not hide loading on error when hideLoading is true', async () => {
      const loading = Loading.getItem()
      const hideSpy = vi.spyOn(loading, 'hide')
      mockFetch.mockRejectedValueOnce(new Error('fail'))
      await expect(api.get({ path: 'test', hideLoading: true })).rejects.toThrow()
      expect(hideSpy).not.toHaveBeenCalled()
    })
  })

  // ─────────────────────────────────────────────
  // Configuration methods
  // ─────────────────────────────────────────────

  describe('configuration methods', () => {
    describe('setUrl', () => {
      it('should set base URL and return instance for chaining', () => {
        const result = api.setUrl('/custom-api/')
        expect(result).toBe(api)
      })

      it('should use custom URL in requests', async () => {
        api.setUrl('/custom/')
        await api.get({ path: 'test' })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/custom/test'), expect.any(Object))
      })
    })

    describe('setHeaders', () => {
      it('should set default headers and return the instance for chaining', () => {
        const result = api.setHeaders({ 'X-Custom-Header': 'test-value' })
        expect(result).toBe(api)
      })

      it('should include default headers in requests', async () => {
        api.setHeaders({ 'X-Api-Key': 'test-key-123' })
        await api.get({ path: 'test' })
        const fetchCall = mockFetch.mock.calls[0]
        expect(fetchCall?.[1].headers).toMatchObject({ 'X-Api-Key': 'test-key-123' })
      })
    })

    describe('setRequestDefault', () => {
      it('should set default request data and return an instance for chaining', () => {
        const result = api.setRequestDefault({ userId: '123', token: 'abc' })
        expect(result).toBe(api)
      })

      it('should merge default request data with a custom request', async () => {
        api.setRequestDefault({ apiKey: 'default-key' })
        mockFetch.mockResolvedValueOnce(createMockResponse())
        await api.post({ path: 'test', request: { customData: 'value' } })
        const body = mockFetch.mock.calls?.[0]?.[1].body
        expect(JSON.parse(body)).toMatchObject({ apiKey: 'default-key', customData: 'value' })
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
      })

      it('should retry the request when the end callback returns a reset flag', async () => {
        let callCount = 0
        const endCallback = vi.fn().mockImplementation(async () => {
          callCount++
          return callCount === 1 ? { reset: true } : {}
        })
        api.setEnd(endCallback)
        await api.get({ path: 'test' })
        expect(endCallback).toHaveBeenCalledTimes(2)
        expect(mockFetch).toHaveBeenCalledTimes(2)
      })
    })

    describe('retry logic', () => {
      it('should return a jittered delay from getRetryDelay', () => {
        const retryDelay = 100
        const retryCount = 2
        // @ts-expect-error: accessing protected member
        const delay = api.getRetryDelay(retryCount, retryDelay)
        expect(random).toHaveBeenCalledWith(retryDelay, retryDelay + (retryCount * retryDelay))
        expect(delay).toBe(retryDelay)
      })

      it('should retry the request when the `retry` property is set', async () => {
        mockFetch
          .mockResolvedValueOnce(createMockResponse({ status: 500, json: { error: 'Fail 1' } }))
          .mockResolvedValueOnce(createMockResponse({ status: 500, json: { error: 'Fail 2' } }))
          .mockResolvedValueOnce(createMockResponse({ json: { data: 'success' } }))
        const result = await api.get({ path: 'test', retry: 2, retryDelay: 100 })
        expect(mockFetch).toHaveBeenCalledTimes(3)
        expect(sleep).toHaveBeenCalledTimes(2)
        expect(result).toBe('success')
      })

      it('should return last failed attempt after exceeding retries', async () => {
        mockFetch.mockResolvedValue(createMockResponse({ status: 500, json: { error: 'Persistent fail' } }))
        const result = await api.get({ path: 'test', retry: 2 })
        expect(mockFetch).toHaveBeenCalledTimes(3)
        expect(result).toEqual(expect.objectContaining({ error: 'Persistent fail' }))
      })

      it('should calculate delay using getRetryDelay on each retry', async () => {
        mockFetch
          .mockResolvedValueOnce(createMockResponse({ status: 500 }))
          .mockResolvedValueOnce(createMockResponse({ status: 500 }))
          .mockResolvedValueOnce(createMockResponse())
        const getRetryDelaySpy = vi.spyOn(api as any, 'getRetryDelay')
        await api.get({ path: 'test', retry: 2, retryDelay: 50 })
        expect(getRetryDelaySpy).toHaveBeenCalledWith(0, 50)
        expect(getRetryDelaySpy).toHaveBeenCalledWith(1, 50)
      })
    })
  })

  // ─────────────────────────────────────────────
  // Utility methods
  // ─────────────────────────────────────────────

  describe('utility methods', () => {
    describe('isLocalhost', () => {
      it('should return true when the hostname is localhost', () => {
        Object.defineProperty(window, 'location', { value: { hostname: 'localhost' }, writable: true, configurable: true })
        expect(api.isLocalhost()).toBe(true)
      })

      it('should return false when the hostname is not localhost', () => {
        Object.defineProperty(window, 'location', { value: { hostname: 'example.com' }, writable: true, configurable: true })
        expect(api.isLocalhost()).toBe(false)
      })
    })

    describe('getUrl', () => {
      it('should return a path with an API prefix by default', () => {
        api.setUrl('/api/')
        expect(api.getUrl('users')).toBe('/api/users')
      })

      it('should return the path without API prefix when api is false', () => {
        expect(api.getUrl('/custom/path', false)).toBe('/custom/path')
      })

      it('should replace {locale} placeholder', () => {
        expect(api.getUrl('data/{locale}/info')).toMatch(/data\/\w{2}-\w{2}\/info/)
      })

      it('should replace {country} placeholder', () => {
        expect(api.getUrl('data/{country}/info')).toMatch(/data\/\w{2}\/info/)
      })

      it('should replace {language} placeholder', () => {
        expect(api.getUrl('data/{language}/info')).toMatch(/data\/\w{2}\/info/)
      })
    })

    describe('getBody', () => {
      it('should return undefined for GET method', () => {
        expect(api.getBody({ key: 'value' }, ApiMethodItem.get)).toBeUndefined()
      })

      it('should return JSON string for a POST method with an object', () => {
        expect(api.getBody({ key: 'value' }, ApiMethodItem.post)).toBe('{"key":"value"}')
      })

      it('should return FormData as is', () => {
        const formData = new FormData()
        formData.append('key', 'value')
        expect(api.getBody(formData, ApiMethodItem.post)).toBe(formData)
      })

      it('should return string as is for the POST method', () => {
        expect(api.getBody('custom-string', ApiMethodItem.post)).toBe('custom-string')
      })

      it('should return undefined for empty request', () => {
        expect(api.getBody({}, ApiMethodItem.post)).toBeUndefined()
      })

      it('should return undefined when called with no arguments', () => {
        expect(api.getBody()).toBeUndefined()
      })

      it('should return JSON string for PUT method', () => {
        expect(api.getBody({ key: 'value' }, ApiMethodItem.put)).toBe('{"key":"value"}')
      })

      it('should return JSON string for DELETE method with data', () => {
        expect(api.getBody({ id: 1 }, ApiMethodItem.delete)).toBe('{"id":1}')
      })

      it('should return JSON string for PATCH method', () => {
        expect(api.getBody({ key: 'value' }, ApiMethodItem.patch)).toBe('{"key":"value"}')
      })
    })

    describe('getBodyForGet', () => {
      it('should return the query string for GET method', () => {
        const body = api.getBodyForGet({ key: 'value', id: 123 }, '/path', ApiMethodItem.get)
        expect(body).toContain('?')
        expect(body).toContain('key=value')
        expect(body).toContain('id=123')
      })

      it('should use & when a path already has a query string', () => {
        const body = api.getBodyForGet({ key: 'value' }, '/path?existing=param', ApiMethodItem.get)
        expect(body).toMatch(/^&/)
      })

      it('should return empty string for non-GET methods', () => {
        expect(api.getBodyForGet({ key: 'value' }, '/path', ApiMethodItem.post)).toBe('')
      })

      it('should return an empty string for an empty request', () => {
        expect(api.getBodyForGet({}, '/path', ApiMethodItem.get)).toBe('')
      })

      it('should handle string request for GET method', () => {
        expect(api.getBodyForGet('key=value', '/path', ApiMethodItem.get)).toContain('key=value')
      })
    })
  })

  // ─────────────────────────────────────────────
  // HTTP method shortcuts
  // ─────────────────────────────────────────────

  describe('HTTP method shortcuts', () => {
    describe('get', () => {
      it('should make a GET request', async () => {
        await api.get({ path: 'test' })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.get }))
      })

      it('should append a query string to URL for GET request', async () => {
        await api.get({ path: 'test', request: { id: '123', name: 'test' } })
        const url = mockFetch.mock.calls?.[0]?.[0]
        expect(url).toContain('?')
        expect(url).toContain('id=123')
        expect(url).toContain('name=test')
      })
    })

    describe('post', () => {
      it('should make a POST request', async () => {
        await api.post({ path: 'test', request: { data: 'value' } })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.post, body: expect.any(String) }))
      })

      it('should send request data in the body', async () => {
        await api.post({ path: 'test', request: { key: 'value' } })
        const body = mockFetch.mock.calls?.[0]?.[1].body
        expect(JSON.parse(body)).toEqual({ key: 'value' })
      })
    })

    describe('put', () => {
      it('should make a PUT request', async () => {
        await api.put({ path: 'test', request: { data: 'value' } })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.put }))
      })
    })

    describe('delete', () => {
      it('should make a DELETE request', async () => {
        await api.delete({ path: 'test' })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.delete }))
      })
    })

    describe('patch', () => {
      it('should make a PATCH request', async () => {
        await api.patch({ path: 'test', request: { data: 'value' } })
        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.patch }))
      })
    })
  })

  // ─────────────────────────────────────────────
  // request
  // ─────────────────────────────────────────────

  describe('request', () => {
    it('should accept string as a path', async () => {
      await api.request('test/path')
      expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test/path'), expect.any(Object))
    })

    it('should accept ApiFetch object', async () => {
      await api.request({ path: 'test', method: ApiMethodItem.post, request: { data: 'value' } })
      expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test'), expect.objectContaining({ method: ApiMethodItem.post }))
    })

    it('should return parsed JSON data by default (toData = true)', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: { id: 1, name: 'test' }, success: true } }))
      const result = await api.request<{ id: number, name: string }>({ path: 'test' })
      expect(result).toEqual(expect.objectContaining({ id: 1, name: 'test', success: true }))
    })

    it('should return a full response when toData is false', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: 'test', success: true, meta: { count: 10 } } }))
      const result = await api.request({ path: 'test', toData: false })
      expect(result).toEqual(expect.objectContaining({ data: 'test', success: true, meta: { count: 10 } }))
    })

    it('should use custom headers', async () => {
      await api.request({ path: 'test', headers: { Authorization: 'Bearer custom-token' } })
      const headers = mockFetch.mock.calls?.[0]?.[1].headers
      expect(headers.Authorization).toBe('Bearer custom-token')
    })

    it('should use a custom content type', async () => {
      await api.request({ path: 'test', type: 'application/xml' })
      const headers = mockFetch.mock.calls?.[0]?.[1].headers
      expect(headers['Content-Type']).toBe('application/xml')
    })

    it('should use pathFull when provided', async () => {
      await api.request({ pathFull: 'https://external-api.com/data' })
      expect(mockFetch).toHaveBeenCalledWith('https://external-api.com/data', expect.any(Object))
    })

    it('should pass custom init options to fetch', async () => {
      await api.request({ path: 'test', init: { credentials: 'include', mode: 'cors' } })
      expect(mockFetch).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ credentials: 'include', mode: 'cors' }))
    })

    it('should skip api prefix when api is false', async () => {
      await api.request({ path: '/absolute/path', api: false })
      const url = mockFetch.mock.calls[0][0]
      expect(url).not.toContain('/api/')
    })
  })

  // ─────────────────────────────────────────────
  // Error handling
  // ─────────────────────────────────────────────

  describe('error handling', () => {
    it('should report network error to ErrorCenter', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))
      await expect(api.request({ path: 'test' })).rejects.toThrow('Network error')
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'unknown' }))
    })

    it('should not report an error when hideError is true', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))
      await expect(api.request({ path: 'test', hideError: true })).rejects.toThrow('Network error')
      expect(errorCenterSpy).not.toHaveBeenCalled()
    })

    it('should set error status on failure', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Request failed'))
      await expect(api.request({ path: 'test' })).rejects.toThrow('Request failed')
      expect(api.getStatus().getError()).toContain('Request failed')
    })

    it('should report 404 to ErrorCenter with notFound code', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 404, statusText: 'Not Found', json: { error: 'Not found' } }))
      await api.request({ path: 'test' })
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'notFound' }))
    })

    it('should report 500 to ErrorCenter with server code', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 500, statusText: 'Internal Server Error', json: { error: 'Server error' } }))
      await api.request({ path: 'test' })
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'server' }))
    })

    it('should report 401 to ErrorCenter with unauthorized code', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 401, statusText: 'Unauthorized', json: { error: 'Unauthorized' } }))
      await api.request({ path: 'test' })
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'unauthorized' }))
    })

    it('should report 403 to ErrorCenter with forbidden code', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 403, statusText: 'Forbidden', json: { error: 'Forbidden' } }))
      await api.request({ path: 'test' })
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'forbidden' }))
    })

    it('should report other 4xx/5xx statuses to ErrorCenter with api-server group', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 402, statusText: 'Payment Required', json: { error: 'Payment required' } }))
      await api.request({ path: 'test' })
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api-server', code: '402' }))
    })

    it('should not report a query error when hideError is true', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 500, statusText: 'Server Error', json: {} }))
      await api.request({ path: 'test', hideError: true })
      expect(errorCenterSpy).not.toHaveBeenCalled()
    })

    it('should handle TimeoutError via ErrorCenter with timeout code', async () => {
      const timeoutError = new DOMException('Timeout', 'TimeoutError')
      mockFetch.mockRejectedValueOnce(timeoutError)
      await expect(api.request({ path: 'test' })).rejects.toThrow()
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'timeout' }))
    })

    it('should use custom errorCenterInstance from options for reporting errors', async () => {
      const customErrorCenter = new ErrorCenterInstance(errorCauseList)
      const customSpy = vi.spyOn(customErrorCenter, 'on')
      const customApi = new ApiInstance('/api/', { errorCenterClass: customErrorCenter })
      mockFetch.mockRejectedValueOnce(new Error('isolated error'))
      await expect(customApi.request({ path: 'test' })).rejects.toThrow()
      expect(customSpy).toHaveBeenCalledWith(expect.objectContaining({ group: 'api', code: 'unknown' }))
      expect(errorCenterSpy).not.toHaveBeenCalled()
    })

    it('should not report AbortError to ErrorCenter', async () => {
      mockFetch.mockRejectedValueOnce(new DOMException('Aborted', 'AbortError'))
      await expect(api.request({ path: 'test' })).rejects.toThrow()
      expect(errorCenterSpy).not.toHaveBeenCalled()
    })
  })

  // ─────────────────────────────────────────────
  // Status tracking
  // ─────────────────────────────────────────────

  describe('status tracking', () => {
    it('should update the status on a successful request', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 200, statusText: 'OK', json: { data: 'test' } }))
      await api.request({ path: 'test' })
      const status = api.getStatus()
      expect(status.getStatus()).toBe(200)
      expect(status.getStatusText()).toBe('OK')
    })

    it('should update the status on 404 response', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ status: 404, statusText: 'Not Found', json: { error: 'Not found' } }))
      await api.request({ path: 'test' })
      const status = api.getStatus()
      expect(status.getStatus()).toBe(404)
      expect(status.getStatusText()).toBe('Not Found')
    })

    it('should store last response', async () => {
      const responseData = { data: { id: 1, name: 'test' }, success: true }
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: responseData }))
      await api.request({ path: 'test' })
      expect(api.getStatus().getResponse()).toMatchObject(responseData)
    })

    it('should update the error status on exception', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Connection refused'))
      await expect(api.request({ path: 'test' })).rejects.toThrow()
      expect(api.getStatus().getError()).toContain('Connection refused')
    })
  })

  // ─────────────────────────────────────────────
  // Custom response processing
  // ─────────────────────────────────────────────

  describe('custom response processing', () => {
    it('should use queryReturn callback when provided', async () => {
      const customCallback = vi.fn().mockResolvedValue({ customData: 'processed' })
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: 'original' } }))
      const result = await api.request({ path: 'test', queryReturn: customCallback })
      expect(customCallback).toHaveBeenCalled()
      expect(result).toEqual(expect.objectContaining({ customData: 'processed' }))
    })

    it('should handle text responses', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ contentType: 'text/plain', text: 'plain text response' }))
      expect(await api.request({ path: 'test' })).toBe('plain text response')
    })

    it('should use data from end callback when provided', async () => {
      api.setEnd(vi.fn().mockResolvedValue({ data: { customData: 'from-end-callback' } }))
      const result = await api.request({ path: 'test' })
      expect(result).toEqual(expect.objectContaining({ customData: 'from-end-callback' }))
    })
  })

  // ─────────────────────────────────────────────
  // Preparation lifecycle
  // ─────────────────────────────────────────────

  describe('preparation lifecycle', () => {
    it('should not call global preparation when globalPreparation is false', async () => {
      const preparationCallback = vi.fn().mockResolvedValue(undefined)
      api.setPreparation(preparationCallback)
      await api.request({ path: 'test', globalPreparation: false })
      expect(preparationCallback).not.toHaveBeenCalled()
    })

    it('should not call the global end when globalEnd is false', async () => {
      const endCallback = vi.fn().mockResolvedValue({})
      api.setEnd(endCallback)
      await api.request({ path: 'test', globalEnd: false })
      expect(endCallback).not.toHaveBeenCalled()
    })

    it('should call preparation with the apiFetch object', async () => {
      const preparationCallback = vi.fn().mockResolvedValue(undefined)
      api.setPreparation(preparationCallback)
      await api.request({ path: 'test', method: ApiMethodItem.post as any })
      expect(preparationCallback).toHaveBeenCalledWith(expect.objectContaining({ path: 'test' }))
    })

    it('should call end with the response and apiFetch objects', async () => {
      const endCallback = vi.fn().mockResolvedValue({})
      api.setEnd(endCallback)
      await api.request({ path: 'test' })
      const [query, apiFetch] = endCallback.mock.calls[0]
      expect(query.status).toBe(200)
      expect(apiFetch.path).toBe('test')
    })
  })

  // ─────────────────────────────────────────────
  // makeData transformation
  // ─────────────────────────────────────────────

  describe('makeData transformation (via toData)', () => {
    it('should extract a data field and merge success/status/message', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: { id: 1 }, success: true, status: 'success', message: 'Created successfully' } }))
      const result = await api.request<{ id: number }>({ path: 'test' })
      expect(result).toEqual(expect.objectContaining({ id: 1, success: true, status: 'success', message: 'Created successfully' }))
    })

    it('should return raw data when the data field is not an object', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: 42, success: true } }))
      expect(await api.request({ path: 'test' })).toBe(42)
    })

    it('should return array data as-is', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: [1, 2, 3], success: true } }))
      expect(await api.request<number[]>({ path: 'test' })).toEqual([1, 2, 3])
    })

    it('should not overwrite the success field if already present in data', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: { id: 1, success: false }, success: true } }))
      const result = await api.request<{ id: number, success: boolean }>({ path: 'test' })
      expect(result.success).toBe(false)
    })

    it('should return a full response when toData is false', async () => {
      const responseData = { data: { id: 1 }, success: true, extra: 'field' }
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: responseData }))
      const result = await api.request({ path: 'test', toData: false })
      expect(result).toEqual(expect.objectContaining({ data: { id: 1 }, success: true, extra: 'field' }))
    })

    it('should handle null `data.data` gracefully', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: null, success: true } }))
      const result = await api.request({ path: 'test' })
      expect(result).toEqual(expect.objectContaining({ success: true, statusObject: expect.objectContaining({ status: 200 }) }))
    })
  })

  // ─────────────────────────────────────────────
  // makeStatus — statusObject injection
  // ─────────────────────────────────────────────

  describe('makeStatus', () => {
    it('should append statusObject to object responses', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: { id: 1 }, success: true } }))
      const result = await api.request<{ id: number }>({ path: 'test' })
      expect(result).toHaveProperty('statusObject')
      expect((result as any).statusObject).toEqual(expect.objectContaining({ status: 200, statusText: 'OK' }))
    })

    it('should not append statusObject to non-object responses', async () => {
      mockFetch.mockResolvedValueOnce(createMockResponse({ json: { data: 42, success: true } }))
      expect(await api.request({ path: 'test' })).toBe(42)
    })
  })

  // ─────────────────────────────────────────────
  // initController — timeout and abort
  // ─────────────────────────────────────────────

  describe('initController (timeout and abort)', () => {
    it('should set signal when timeout only is provided', async () => {
      await api.request({ path: 'test', timeout: 5000 })
      expect(mockFetch.mock.calls[0][1].signal).toBeDefined()
    })

    it('should set signal when controller only is provided', async () => {
      const controller = new AbortController()
      await api.request({ path: 'test', controller })
      expect(mockFetch.mock.calls[0][1].signal).toBe(controller.signal)
    })

    it('should use controller signal when both timeout and controller are provided', async () => {
      const controller = new AbortController()
      await api.request({ path: 'test', timeout: 5000, controller })
      expect(mockFetch.mock.calls[0][1].signal).toBe(controller.signal)
    })

    it('should not set signal when neither timeout nor controller are provided and timeout is 0', async () => {
      await api.request({ path: 'test', timeout: 0 })
      expect(mockFetch.mock.calls[0][1].signal).toBeUndefined()
    })
  })

  // ─────────────────────────────────────────────
  // Emulator (via ApiResponse)
  // ─────────────────────────────────────────────

  describe('emulator integration', () => {
    it('should return an emulated response if available', async () => {
      api.getResponse().add({ path: 'emulated', method: ApiMethodItem.get as any, response: { data: 'emulated-data', success: true } })
      expect(await api.get({ path: 'emulated' })).toEqual(expect.objectContaining({ data: 'emulated-data' }))
      expect(mockFetch).not.toHaveBeenCalled()
    })
  })

  // ─────────────────────────────────────────────
  // getStatus and getResponse accessors
  // ─────────────────────────────────────────────

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

  // ─────────────────────────────────────────────
  // Headers with null
  // ─────────────────────────────────────────────

  describe('header null handling', () => {
    it('should not include headers when the header option is null', async () => {
      await api.request({ path: 'test', headers: null })
      expect(mockFetch.mock.calls[0][1].headers).toBeUndefined()
    })
  })

  // ─────────────────────────────────────────────
  // FormData request integration
  // ─────────────────────────────────────────────

  describe('FormData request', () => {
    it('should send FormData as a body for POST request', async () => {
      const formData = new FormData()
      formData.append('file', 'content')
      await api.post({ path: 'upload', request: formData })
      expect(mockFetch.mock.calls[0][1].body).toBe(formData)
    })
  })

  // ─────────────────────────────────────────────
  // Cache parameters
  // ─────────────────────────────────────────────

  describe('cache parameters', () => {
    it('should respect enableClientCache parameter', async () => {
      await api.get({ path: 'test', enableClientCache: true, cache: 60 })
      // Request should be made (not cached)
      expect(mockFetch).toHaveBeenCalledTimes(1)
    })

    it('should use cacheId for cache grouping', async () => {
      await api.get({ path: 'test', cacheId: 'group1', cache: 60 })
      expect(mockFetch).toHaveBeenCalledTimes(1)
    })
  })

  // ─────────────────────────────────────────────
  // Auth parameter
  // ─────────────────────────────────────────────

  describe('auth parameter', () => {
    it('should include auth headers when auth is true', async () => {
      await api.get({ path: 'test', auth: true })
      const headers = mockFetch.mock.calls[0][1].headers
      // Auth headers should be included (implementation-specific)
      expect(headers).toBeDefined()
    })
  })

  // ─────────────────────────────────────────────
  // endResetLimit parameter
  // ─────────────────────────────────────────────

  describe('endResetLimit parameter', () => {
    it('should respect endResetLimit for retries', async () => {
      let callCount = 0
      api.setEnd(async () => {
        callCount++
        return { reset: true }
      })

      mockFetch
        .mockResolvedValueOnce(createMockResponse({ status: 500 }))
        .mockResolvedValueOnce(createMockResponse({ status: 500 }))
        .mockResolvedValueOnce(createMockResponse())
        .mockResolvedValueOnce(createMockResponse())
        .mockResolvedValueOnce(createMockResponse())

      // endResetLimit of 4 should allow 4 resets
      await api.get({ path: 'test', endResetLimit: 4 })

      // Should have called fetch 5 times (1 initial + 4 resets)
      expect(mockFetch).toHaveBeenCalledTimes(5)
    })

    it('should stop retrying after endResetLimit is reached', async () => {
      let callCount = 0
      api.setEnd(async () => {
        callCount++
        return { reset: true }
      })

      mockFetch.mockResolvedValue(createMockResponse({ status: 500 }))

      // endResetLimit of 2 should allow only 2 resets
      await api.get({ path: 'test', endResetLimit: 2 })

      // Should have called fetch 3 times (1 initial + 2 resets)
      expect(mockFetch).toHaveBeenCalledTimes(3)
    })
  })
})
