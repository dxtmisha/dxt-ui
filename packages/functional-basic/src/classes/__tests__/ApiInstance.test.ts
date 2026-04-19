// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiInstance } from '../ApiInstance'
import { ApiMethodItem } from '../../types/apiTypes'
import { Loading } from '../Loading'
import { ErrorCenter } from '../ErrorCenter'
import { ApiCache } from '../ApiCache'

describe('ApiInstance', () => {
  let api: ApiInstance

  beforeEach(() => {
    api = new ApiInstance('/api/')
    vi.stubGlobal('fetch', vi.fn())
    vi.useFakeTimers()
    ApiCache.reset()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.useRealTimers()
    vi.clearAllMocks()
  })

  it('should construct with base URL', () => {
    expect(api.getUrl('test')).toBe('/api/test')
  })

  it('should replace tokens in URL', () => {
    // Note: Geo functions are used in getUrl, we might need to mock Geo if it returns fixed values
    const url = api.getUrl('user/{country}')
    expect(url).toContain('/api/user/')
  })

  it('should generate correct body for non-GET requests', () => {
    const body = api.getBody({ a: 1 }, ApiMethodItem.post)
    expect(body).toBe(JSON.stringify({ a: 1 }))

    const formData = new FormData()
    expect(api.getBody(formData, ApiMethodItem.post)).toBe(formData)
  })

  it('should generate correct query string for GET requests', () => {
    const query = api.getBodyForGet({ a: 1, b: 'test' }, 'path', ApiMethodItem.get)
    expect(query).toBe('?a=1&b=test')

    const queryAppend = api.getBodyForGet({ c: 3 }, 'path?x=1', ApiMethodItem.get)
    expect(queryAppend).toBe('&c=3')
  })

  it('should handle successful JSON request', async () => {
    const mockFetch = vi.mocked(fetch)
    mockFetch.mockResolvedValue(new Response(JSON.stringify({ data: { success: true } }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }))

    const result = await api.request<any>('test-success')
    expect(result).toEqual(expect.objectContaining({ success: true }))
    expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/test-success'), expect.any(Object))
  })

  it('should handle request with retry on error status', async () => {
    const mockFetch = vi.mocked(fetch)
    mockFetch
      .mockResolvedValueOnce(new Response(null, { status: 500, statusText: 'Server Error' }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ data: { ok: true } }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }))

    const promise = api.request<any>({
      path: 'retry-test',
      retry: 1,
      retryDelay: 10
    })

    // Advance timers for retry delay
    await vi.runAllTimersAsync()

    const result = await promise
    expect(mockFetch).toHaveBeenCalledTimes(2)
    expect(result).toEqual(expect.objectContaining({ ok: true }))
  })

  it('should throw error after network failure', async () => {
    const mockFetch = vi.mocked(fetch)
    mockFetch.mockRejectedValue(new Error('Network failure'))

    const promise = api.request({
      path: 'fail-test',
      retry: 1,
      retryDelay: 10
    })

    await vi.runAllTimersAsync()

    await expect(promise).rejects.toThrow('Network failure')
    expect(mockFetch).toHaveBeenCalledTimes(2)
  })

  it('should handle timeout', async () => {
    vi.mocked(fetch).mockImplementation(() => new Promise(() => {})) // never resolves

    api.setTimeout(100)
    const promise = api.request('timeout-test')

    await vi.advanceTimersByTimeAsync(150)

    await expect(promise).rejects.toThrow()
  })

  it('should use cache if available', async () => {
    const fetchConfig = {
      path: 'cache-test',
      cache: 60,
      enableClientCache: true
    }

    // First request to populate cache
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ data: 'cached-val' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }))

    await api.request(fetchConfig)
    expect(fetch).toHaveBeenCalledTimes(1)

    // Second request should use cache
    const result = await api.request(fetchConfig)
    expect(result).toEqual('cached-val')
    expect(fetch).toHaveBeenCalledTimes(1) // Still 1
  })

  it('should use emulator if matched', async () => {
    api.getResponse().add({
      path: 'mock-path',
      method: ApiMethodItem.get,
      response: { emulated: true }
    })

    const result = await api.request({ path: 'mock-path', global: true })
    expect(result).toEqual({ emulated: true })
    expect(fetch).not.toHaveBeenCalled()
  })

  it('should call preparation callbacks', async () => {
    const prepSpy = vi.fn().mockResolvedValue(undefined)
    const endSpy = vi.fn().mockResolvedValue({ reset: false })

    api.setPreparation(prepSpy)
    api.setEnd(endSpy)

    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ data: {} }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }))

    await api.request('prep-test')

    expect(prepSpy).toHaveBeenCalled()
    expect(endSpy).toHaveBeenCalled()
  })

  it('should show and hide loading', async () => {
    const showSpy = vi.spyOn(Loading.getItem(), 'show')
    const hideSpy = vi.spyOn(Loading.getItem(), 'hide')

    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ data: {} }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }))

    await api.request('loading-test')

    expect(showSpy).toHaveBeenCalled()
    expect(hideSpy).toHaveBeenCalled()
  })

  it('should report errors to ErrorCenter', async () => {
    const errorSpy = vi.spyOn(ErrorCenter.getItem(), 'on')

    vi.mocked(fetch).mockResolvedValue(new Response(null, { status: 404 }))

    try {
      await api.request('error-test')
    } catch (e) {}

    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'notFound'
    }))
  })
})
