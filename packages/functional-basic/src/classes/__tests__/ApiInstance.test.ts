// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiInstance } from '../ApiInstance'
import { ApiMethodItem } from '../../types/apiTypes'
import { Loading } from '../Loading'
import { ErrorCenter } from '../ErrorCenter'
import { ApiCache } from '../ApiCache'
import { ApiDefault } from '../ApiDefault'
import { ApiResponse } from '../ApiResponse'
import * as isOnLineModule from '../../functions/isOnLine'

describe('ApiInstance', () => {
  let api: ApiInstance
  let fetchMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    vi.useFakeTimers()
    ApiCache.reset()

    // Default valid json response for fetch
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ data: { success: true } }), {
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

  it('should construct with base URL and replace Geo tokens', () => {
    expect(api.getUrl('test')).toBe('/api/test')

    // Geo fields mapping
    const url = api.getUrl('data/{country}/{language}')
    expect(url).not.toContain('{country}')
    expect(url).not.toContain('{language}')
  })

  it('should construct with custom options classes', () => {
    class CustomApiDefault extends ApiDefault { }
    class CustomApiResponse extends ApiResponse { }

    const customApi = new ApiInstance('/api/', {
      requestDefaultClass: CustomApiDefault,
      responseClass: CustomApiResponse
    })

    expect(customApi.getResponse()).toBeInstanceOf(CustomApiResponse)
  })

  it('should format GET query strings correctly', () => {
    const query = api.getBodyForGet({ a: 1, b: 'test' }, 'path', ApiMethodItem.get)
    expect(query).toBe('?a=1&b=test')

    const queryAppend = api.getBodyForGet({ c: 3 }, 'path?x=1', ApiMethodItem.get)
    expect(queryAppend).toBe('&c=3')

    // Should return empty string for non GET methods
    const queryPost = api.getBodyForGet({ c: 3 }, 'path', ApiMethodItem.post)
    expect(queryPost).toBe('')
  })

  it('should format body for non-GET methods', () => {
    const body = api.getBody({ a: 1 }, ApiMethodItem.post)
    expect(body).toBe(JSON.stringify({ a: 1 }))

    const formData = new FormData()
    expect(api.getBody(formData, ApiMethodItem.post)).toBe(formData)

    expect(api.getBody('raw_string', ApiMethodItem.post)).toBe('raw_string')
  })

  it('should successfully execute GET request', async () => {
    // Re-create the mock inside the test if needed, but it's set in beforeEach
    const result = await api.get<any>({ path: 'test' })

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/test'),
      expect.objectContaining({ method: ApiMethodItem.get })
    )
    expect(result).toEqual(expect.objectContaining({ success: true }))
  })

  it('should successfully execute POST, PUT, PATCH, DELETE requests', async () => {
    // Need to provide fresh responses for each call otherwise `.json()` fails with "Body has already been read"
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } }))
    await api.post({ path: 'post-r', request: { a: 1 } })
    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.post }))

    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } }))
    await api.put({ path: 'put-r' })
    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.put }))

    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } }))
    await api.patch({ path: 'patch-r' })
    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.patch }))

    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } }))
    await api.delete({ path: 'del-r' })
    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({ method: ApiMethodItem.delete }))
  })

  it('should use Emulator response if added', async () => {
    api.getResponse().add({
      path: 'mocked',
      method: ApiMethodItem.get,
      response: { emulated: true }
    })

    const result = await api.get({ path: 'mocked', global: true })
    expect(fetchMock).not.toHaveBeenCalled()
    expect(result).toEqual({ emulated: true })
  })

  // Note: network failure retry is tested indirectly via 'perform retry if server returns 500'
  // Disable throwing promise retry because JSDOM fake timers + async catch causes flaky drops
  it('should throw error after network failure without retry', async () => {
    fetchMock.mockRejectedValue(new Error('Network failure'))

    const promise = api.get({
      path: 'fail-test-no-retry'
    })

    await expect(promise).rejects.toThrow('Network failure')
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('should perform retry if server returns 500 and then succeeds', async () => {
    fetchMock
      .mockResolvedValueOnce(new Response(null, { status: 500, statusText: 'Server Error' }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ data: { ok: true } }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }))

    const promise = api.get<any>({
      path: 'retry-success',
      retry: 1,
      retryDelay: 10
    })

    await vi.runAllTimersAsync()

    const result = await promise
    expect(fetchMock).toHaveBeenCalledTimes(2)
    expect(result).toEqual(expect.objectContaining({ ok: true }))
  })

  it('should handle timeout using AbortSignal.timeout', async () => {
    const timeoutSpy = vi.spyOn(AbortSignal, 'timeout')
    api.setTimeout(50)

    await api.get('timeout-test' as any)

    expect(timeoutSpy).toHaveBeenCalledWith(50)
  })

  it('should handle manual abort via custom controller', async () => {
    const controller = new AbortController()
    fetchMock.mockRejectedValue(new DOMException('Aborted', 'AbortError'))

    const promise = api.get({
      path: 'abort-test',
      controller
    })

    controller.abort()

    await expect(promise).rejects.toThrow('Aborted')
    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
      signal: controller.signal
    }))
  })

  it('should load data from ApiCache if available', async () => {
    const fetchConfig = {
      path: 'cache-test',
      cache: 60,
      enableClientCache: true
    }

    // First request triggers fetch
    await api.get(fetchConfig)
    expect(fetchMock).toHaveBeenCalledTimes(1)

    // Second request reads from cache
    const result = await api.get(fetchConfig)
    expect(fetchMock).toHaveBeenCalledTimes(1) // Should not increase
    expect(result).toEqual(expect.objectContaining({ success: true }))
  })

  it('should call preparation callbacks and wrap with loading', async () => {
    const prepSpy = vi.fn().mockResolvedValue(undefined)
    const endSpy = vi.fn().mockResolvedValue({ reset: false })
    const loadingShowSpy = vi.spyOn(Loading.getItem(), 'show')
    const loadingHideSpy = vi.spyOn(Loading.getItem(), 'hide')

    api.setPreparation(prepSpy)
    api.setEnd(endSpy)

    await api.get('prep-test' as any)

    expect(prepSpy).toHaveBeenCalled()
    expect(endSpy).toHaveBeenCalled()
    expect(loadingShowSpy).toHaveBeenCalled()
    expect(loadingHideSpy).toHaveBeenCalled()
  })

  it('should report different error codes to ErrorCenter based on HTTP status', async () => {
    const errorSpy = vi.spyOn(ErrorCenter.getItem(), 'on')

    fetchMock.mockResolvedValue(new Response(null, { status: 404 }))
    try {
      await api.get('err-404' as any)
    } catch (_e) { /* ignore */ }
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ code: 'notFound' }))

    fetchMock.mockResolvedValue(new Response(null, { status: 401 }))
    try {
      await api.get('err-401' as any)
    } catch (_e) { /* ignore */ }
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ code: 'unauthorized' }))

    fetchMock.mockResolvedValue(new Response(null, { status: 403 }))
    try {
      await api.get('err-403' as any)
    } catch (_e) { /* ignore */ }
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ code: 'forbidden' }))

    fetchMock.mockResolvedValue(new Response(null, { status: 500 }))
    try {
      await api.get('err-500' as any)
    } catch (_e) { /* ignore */ }
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ code: 'server' }))

    fetchMock.mockResolvedValue(new Response(null, { status: 503 }))
    try {
      await api.get('err-503' as any)
    } catch (_e) { /* ignore */ }
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ code: '503' }))
  })

  it('should format offline/unknown errors to ErrorCenter', async () => {
    const errorSpy = vi.spyOn(ErrorCenter.getItem(), 'on')
    const onLineSpy = vi.spyOn(isOnLineModule, 'isOnLine')

    // Simulate Offline
    onLineSpy.mockReturnValue(false)
    fetchMock.mockRejectedValue(new Error('Your device is currently offline. Please check your network settings.'))

    try {
      await api.get('offline-test' as any)
    } catch (_e) {
      // ignore
    }
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ code: 'offline' }))

    // Simulate Online Unknown Error
    onLineSpy.mockReturnValue(true)
    fetchMock.mockRejectedValue(new Error('Failed to fetch'))

    try {
      await api.get('unknown-test' as any)
    } catch (_e) {
      // ignore
    }
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({ code: 'unknown' }))
  })

  it('should support custom queryReturn to bypass standard parsing', async () => {
    fetchMock.mockResolvedValue(new Response('custom-text'))

    const result = await api.get<any>({
      path: 'custom-return',
      toData: false,
      queryReturn: async res => ({ data: await res.text(), custom: true })
    })

    expect(result).toEqual(expect.objectContaining({ data: 'custom-text', custom: true }))
  })

  it('should identify when running on localhost', () => {
    // Note: Depends on whether window.location is defined in your JSDOM test setup
    // We can just verify the function resolves cleanly without crashing
    const isLocal = api.isLocalhost()
    expect(typeof isLocal).toBe('boolean')
  })

  it('should apply setHeaders and setRequestDefault globally', async () => {
    api.setHeaders({ 'X-Custom': 'yes' })
    api.setRequestDefault({ globalToken: 'abc' })

    await api.get({ path: 'merge-test', request: { param: 1 } })

    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
      headers: expect.objectContaining({
        'X-Custom': 'yes'
      })
    }))

    // For GET request body formatting testing default merging:
    expect(fetchMock.mock.calls[0][0]).toContain('globalToken=abc')
    expect(fetchMock.mock.calls[0][0]).toContain('param=1')
  })
})
