// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiInstance } from '../ApiInstance'
import { type ApiFetch, ApiMethodItem } from '../../types/apiTypes'
import { Loading } from '../Loading'
import { ErrorCenter } from '../ErrorCenter'
import { ApiCache } from '../ApiCache'
import { ApiDefault } from '../ApiDefault'
import { ApiErrorItem } from '../ApiErrorItem'
import { ApiResponse } from '../ApiResponse'
import * as isOnLineModule from '../../functions/isOnLine'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('ApiInstance', () => {
  let api: ApiInstance
  let fetchMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    vi.useFakeTimers()
    ApiCache.reset()

    fetchMock.mockImplementation(async () => new Response(JSON.stringify({ data: { success: true } }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }))

    api = new ApiInstance('/api/')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('should construct with base URL and replace {locale}, {country}, and {language} tokens', () => {
    expect(api.getUrl('test')).toBe('/api/test')

    const urlWithTokens = api.getUrl('data/{locale}/{country}/{language}')
    expect(urlWithTokens).not.toContain('{locale}')
    expect(urlWithTokens).not.toContain('{country}')
    expect(urlWithTokens).not.toContain('{language}')
  })

  it('should construct with custom dependency classes and return status, response, and hydration instances', () => {
    class CustomApiDefault extends ApiDefault {}
    class CustomApiResponse extends ApiResponse {}

    const customApi = new ApiInstance('/api/', {
      requestDefaultClass: CustomApiDefault,
      responseClass: CustomApiResponse
    })

    expect(customApi.getResponse()).toBeInstanceOf(CustomApiResponse)
    expect(customApi.getStatus()).toBeDefined()
    expect(customApi.getHydration()).toBeDefined()
  })

  it('should format GET query strings accurately in getBodyForGet()', () => {
    const query = api.getBodyForGet({ first: 1, second: 'test' }, 'path', ApiMethodItem.get)
    expect(query).toBe('?first=1&second=test')

    const queryAppend = api.getBodyForGet({ third: 3 }, 'path?existing=1', ApiMethodItem.get)
    expect(queryAppend).toBe('&third=3')

    const queryStringRaw = api.getBodyForGet('raw=1&other=2', 'path', ApiMethodItem.get)
    expect(queryStringRaw).toBe('?raw=1&other=2')

    const queryFormData = api.getBodyForGet(new FormData(), 'path', ApiMethodItem.get)
    expect(queryFormData).toBe('')

    const queryPost = api.getBodyForGet({ third: 3 }, 'path', ApiMethodItem.post)
    expect(queryPost).toBe('')
  })

  it('should format request bodies for non-GET methods in getBody()', () => {
    expect(api.getBody({ first: 1 }, ApiMethodItem.get)).toBeUndefined()
    expect(api.getBody({}, ApiMethodItem.post)).toBeUndefined()

    const jsonBody = api.getBody({ first: 1 }, ApiMethodItem.post)
    expect(jsonBody).toBe(JSON.stringify({ first: 1 }))

    const formData = new FormData()
    expect(api.getBody(formData, ApiMethodItem.post)).toBe(formData)

    expect(api.getBody('raw_string', ApiMethodItem.post)).toBe('raw_string')
  })

  it('should handle origin, url, and chaining on setter methods', () => {
    const apiWithOrigin = new ApiInstance('/api/')
    expect(apiWithOrigin.setOrigin('https://example.com')).toBe(apiWithOrigin)
    expect(apiWithOrigin.getOrigin()).toBe('https://example.com/api/')

    const apiRelative = new ApiInstance('api/')
    apiRelative.setOrigin('https://example.com')
    expect(apiRelative.getOrigin()).toBe('api/')

    expect(apiWithOrigin.getUrl('test')).toBe('https://example.com/api/test')
    expect(apiWithOrigin.getUrl('test', false)).toBe('test')

    expect(apiWithOrigin.setUrl('/v2/')).toBe(apiWithOrigin)
    expect(apiWithOrigin.getOrigin()).toBe('https://example.com/v2/')
  })

  it('should return hydration script string from getHydrationScript()', () => {
    const script = api.getHydrationScript()
    expect(script).toContain('<script')
    expect(script).toContain('type="application/json"')
  })

  it('should reset instance status before starting a new top-level request', async () => {
    api.getStatus().setError('Previous error')
    expect(api.getStatus().getError()).toBe('Previous error')

    await api.get({ path: 'fresh-request' })
    expect(api.getStatus().getError()).toBeUndefined()
    expect(api.getStatus().getStatus()).toBe(200)
  })

  it('should respect retry and perform multiple retries when status >= 400 until success', async () => {
    fetchMock
      .mockResolvedValueOnce(new Response(null, { status: 500 }))
      .mockResolvedValueOnce(new Response(null, { status: 500 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }))

    const promise = api.get<{ ok: boolean }>({
      path: 'multi-retry',
      retry: 2,
      retryDelay: 10
    })

    await vi.runAllTimersAsync()
    const result = await promise
    expect(fetchMock).toHaveBeenCalledTimes(3)
    expect(result.ok).toBe(true)
  })

  it('should NOT retry when retry is configured and the first response is 200 OK', async () => {
    fetchMock.mockResolvedValueOnce(new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }))

    const result = await api.get<{ ok: boolean }>({
      path: 'no-retry-on-success',
      retry: 2,
      retryDelay: 10
    })

    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(result.ok).toBe(true)
  })

  it('should clear timeout timer when fetch rejects in makeQuery', async () => {
    const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout')
    const controller = new AbortController()
    fetchMock.mockRejectedValueOnce(new TypeError('Network Error'))

    await expect(api.get({
      path: 'timeout-leak-test',
      timeout: 5000,
      controller,
      hideError: true
    })).rejects.toThrow('Network Error')

    expect(clearTimeoutSpy).toHaveBeenCalled()
  })

  it('should stop retrying after reaching endResetLimit when end hook returns reset: true', async () => {
    api.setEnd(async () => ({ reset: true }))
    fetchMock.mockImplementation(async () => new Response(null, { status: 500 }))

    const promise = api.get({
      path: 'infinite-reset',
      retryDelay: 1,
      endResetLimit: 3,
      hideError: true
    })

    await vi.runAllTimersAsync()
    await promise

    expect(fetchMock).toHaveBeenCalledTimes(4)
  })

  it('should queue concurrent preparation calls sequentially', async () => {
    let activePreparations = 0
    let maxConcurrentPreparations = 0

    api.setPreparation(async () => {
      activePreparations += 1
      maxConcurrentPreparations = Math.max(maxConcurrentPreparations, activePreparations)
      await new Promise(resolve => setTimeout(resolve, 100))
      activePreparations -= 1
    })

    const firstPromise = api.get({ path: 'query-1' })
    const secondPromise = api.get({ path: 'query-2' })

    await vi.advanceTimersByTimeAsync(300)
    await Promise.all([firstPromise, secondPromise])

    expect(maxConcurrentPreparations).toBe(1)
  })

  it('should execute GET, POST, PUT, PATCH, and DELETE requests with expected HTTP methods', async () => {
    const getResult = await api.get<{ success: boolean }>({ path: 'test-get' })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/test-get'),
      expect.objectContaining({ method: ApiMethodItem.get })
    )
    expect(getResult).toEqual(expect.objectContaining({ success: true }))

    await api.post({ path: 'test-post', request: { item: 1 } })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/test-post'),
      expect.objectContaining({ method: ApiMethodItem.post, body: '{"item":1}' })
    )

    await api.put({ path: 'test-put' })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/test-put'),
      expect.objectContaining({ method: ApiMethodItem.put })
    )

    await api.patch({ path: 'test-patch' })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/test-patch'),
      expect.objectContaining({ method: ApiMethodItem.patch })
    )

    await api.delete({ path: 'test-delete' })
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/test-delete'),
      expect.objectContaining({ method: ApiMethodItem.delete })
    )
  })

  it('should support string path in request() and pathFull override in makeQuery()', async () => {
    await api.request('direct-string-path')
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/direct-string-path',
      expect.objectContaining({ method: ApiMethodItem.get })
    )

    await api.get({ path: 'ignored', pathFull: 'https://custom.domain/endpoint' })
    expect(fetchMock).toHaveBeenCalledWith(
      'https://custom.domain/endpoint',
      expect.objectContaining({ method: ApiMethodItem.get })
    )
  })

  it('should return emulated response from ApiResponse without calling fetch', async () => {
    api.getResponse().add({
      path: 'mocked',
      method: ApiMethodItem.get,
      response: { emulated: true }
    })

    const result = await api.get<{ emulated: boolean }>({ path: 'mocked', global: true })
    expect(fetchMock).not.toHaveBeenCalled()
    expect(result).toEqual({ emulated: true })
  })

  it('should throw error after network failure and record error on status', async () => {
    fetchMock.mockRejectedValueOnce(new Error('Network failure'))

    await expect(api.get({ path: 'fail-test-no-retry', hideError: true })).rejects.toThrow('Network failure')
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(api.getStatus().getError()).toContain('Network failure')
  })

  it('should handle timeout using AbortSignal.timeout when no custom controller is provided', async () => {
    const timeoutSpy = vi.spyOn(AbortSignal, 'timeout')
    api.setTimeout(50)

    await api.request('timeout-test')

    expect(timeoutSpy).toHaveBeenCalledWith(50)
  })

  it('should handle custom controller without timeout and with timeout', async () => {
    const controllerWithoutTimeout = new AbortController()
    await api.get({
      path: 'controller-no-timeout',
      timeout: 0,
      controller: controllerWithoutTimeout
    })

    expect(fetchMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ signal: controllerWithoutTimeout.signal })
    )

    const controllerWithTimeout = new AbortController()
    const abortSpy = vi.spyOn(controllerWithTimeout, 'abort')

    fetchMock.mockImplementationOnce((_url: string, init: RequestInit) => {
      return new Promise((_resolve, reject) => {
        init.signal?.addEventListener('abort', () => {
          reject(init.signal?.reason)
        })
      })
    })

    const timeoutPromise = expect(api.get({
      path: 'controller-with-timeout',
      timeout: 100,
      controller: controllerWithTimeout,
      hideError: true
    })).rejects.toThrow('Timeout')

    await vi.advanceTimersByTimeAsync(150)

    await timeoutPromise
    expect(abortSpy).toHaveBeenCalled()
  })

  it('should load data from ApiCache if available and forward cached data to hydration', async () => {
    const hydrationSpy = vi.spyOn(api.getHydration(), 'toClient')
    const fetchConfig: ApiFetch = {
      path: 'cache-test',
      cache: 60,
      enableClientCache: true
    }

    await api.get(fetchConfig)
    expect(fetchMock).toHaveBeenCalledTimes(1)

    const result = await api.get<{ success: boolean }>(fetchConfig)
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(result).toEqual(expect.objectContaining({ success: true }))
    expect(hydrationSpy).toHaveBeenCalledTimes(2)
  })

  it('should call preparation callbacks and toggle Loading unless hideLoading is true', async () => {
    const preparationSpy = vi.fn(async () => {})
    const endSpy = vi.fn(async () => ({ reset: false }))
    const loadingShowSpy = vi.spyOn(Loading.getItem(), 'show')
    const loadingHideSpy = vi.spyOn(Loading.getItem(), 'hide')

    api.setPreparation(preparationSpy)
    api.setEnd(endSpy)

    await api.request('prep-test')

    expect(preparationSpy).toHaveBeenCalledOnce()
    expect(endSpy).toHaveBeenCalledOnce()
    expect(loadingShowSpy).toHaveBeenCalledOnce()
    expect(loadingHideSpy).toHaveBeenCalledOnce()

    loadingShowSpy.mockClear()
    loadingHideSpy.mockClear()

    await api.get({ path: 'hidden-loading', hideLoading: true })
    expect(loadingShowSpy).not.toHaveBeenCalled()
    expect(loadingHideSpy).not.toHaveBeenCalled()
  })

  it('should report HTTP status errors (401, 403, 404, 500, and custom) to ErrorCenter', async () => {
    const errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on').mockImplementation(() => {})

    fetchMock.mockResolvedValueOnce(new Response(null, { status: 404 }))
    await api.get({ path: 'error-404' })
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'notFound',
      details: expect.any(ApiErrorItem)
    }))

    fetchMock.mockResolvedValueOnce(new Response(null, { status: 401 }))
    await api.get({ path: 'error-401' })
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'unauthorized',
      details: expect.any(ApiErrorItem)
    }))

    fetchMock.mockResolvedValueOnce(new Response(null, { status: 403 }))
    await api.get({ path: 'error-403' })
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'forbidden',
      details: expect.any(ApiErrorItem)
    }))

    fetchMock.mockResolvedValueOnce(new Response(null, { status: 500 }))
    await api.get({ path: 'error-500' })
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'server',
      details: expect.any(ApiErrorItem)
    }))

    fetchMock.mockResolvedValueOnce(new Response(null, { status: 503 }))
    await api.get({ path: 'error-503' })
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api-server',
      code: '503',
      details: expect.any(ApiErrorItem)
    }))
  })

  it('should pass raw Response to ErrorCenter when initError is false', async () => {
    const errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on').mockImplementation(() => {})
    fetchMock.mockResolvedValueOnce(new Response(null, { status: 503 }))

    await api.get({ path: 'error-503-raw', initError: false })

    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api-server',
      code: '503',
      details: expect.any(Response)
    }))
  })

  it('should report timeout, offline, and unknown errors to ErrorCenter and ignore AbortError', async () => {
    const errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on').mockImplementation(() => {})
    const onLineSpy = vi.spyOn(isOnLineModule, 'isOnLine')

    onLineSpy.mockReturnValue(false)
    fetchMock.mockRejectedValueOnce(new Error('Device is offline'))
    await expect(api.get({ path: 'offline-test' })).rejects.toThrow('Device is offline')
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'offline'
    }))

    onLineSpy.mockReturnValue(true)
    fetchMock.mockRejectedValueOnce(new Error('Unknown network failure'))
    await expect(api.get({ path: 'unknown-test' })).rejects.toThrow('Unknown network failure')
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'unknown'
    }))

    fetchMock.mockRejectedValueOnce(new DOMException('Timed out', 'TimeoutError'))
    await expect(api.get({ path: 'timeout-error-test' })).rejects.toThrow('Timed out')
    expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'timeout'
    }))

    errorCenterSpy.mockClear()
    fetchMock.mockRejectedValueOnce(new DOMException('User aborted', 'AbortError'))
    await expect(api.get({ path: 'abort-error-test' })).rejects.toThrow('User aborted')
    expect(errorCenterSpy).not.toHaveBeenCalled()
  })

  it('should support custom queryReturn to bypass standard response parsing', async () => {
    fetchMock.mockResolvedValueOnce(new Response('custom-text'))

    const result = await api.get<{ data: string, custom: boolean }>({
      path: 'custom-return',
      toData: false,
      queryReturn: async response => ({ data: await response.text(), custom: true })
    })

    expect(result).toEqual(expect.objectContaining({ data: 'custom-text', custom: true }))
  })

  it('should evaluate isLocalhost() based on DOM runtime and location.hostname', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    expect(typeof api.isLocalhost()).toBe('boolean')

    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    expect(api.isLocalhost()).toBe(false)
  })

  it('should apply setHeaders and setRequestDefault globally and omit headers when headers is null', async () => {
    api.setHeaders({ 'X-Custom': 'yes' })
    api.setRequestDefault({ globalToken: 'abc' })

    await api.get({ path: 'merge-test', request: { param: 1 } })

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('globalToken=abc'),
      expect.objectContaining({
        headers: expect.objectContaining({
          'x-custom': 'yes'
        })
      })
    )
    expect(fetchMock.mock.calls[0]?.[0]).toContain('param=1')

    await api.get({ path: 'null-headers-test', headers: null })
    expect(fetchMock.mock.calls[1]?.[1]?.headers).toBeUndefined()
  })

  it('should support wrapping request with request-level wrapper and instance-level wrapper', async () => {
    const requestWrapper = vi.fn(async <R>(callback: () => Promise<R>, _apiFetch: ApiFetch): Promise<R> => {
      const response = await callback()
      return { ...(response as Record<string, unknown>), wrappedByRequest: true } as R
    })

    const requestWrappedResult = await api.request<{ wrappedByRequest: boolean }>({
      path: 'wrapper-test',
      wrapper: requestWrapper
    })

    expect(requestWrapper).toHaveBeenCalledOnce()
    expect(requestWrappedResult).toEqual(expect.objectContaining({ wrappedByRequest: true }))

    const instanceWrapper = vi.fn(async <R>(callback: () => Promise<R>, _apiFetch: ApiFetch): Promise<R> => {
      const response = await callback()
      return { ...(response as Record<string, unknown>), wrappedByInstance: true } as R
    })

    api.setWrapper(instanceWrapper)

    const instanceWrappedResult = await api.request<{ wrappedByInstance: boolean }>({
      path: 'instance-wrapper-test'
    })

    expect(instanceWrapper).toHaveBeenCalledOnce()
    expect(instanceWrappedResult).toEqual(expect.objectContaining({ wrappedByInstance: true }))
  })
})
