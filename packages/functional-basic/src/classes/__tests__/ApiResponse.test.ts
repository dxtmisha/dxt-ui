// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import { ApiMethodItem } from '../../types/apiTypes'
import { Loading } from '../Loading'

describe('ApiResponse', () => {
  let apiResponse: ApiResponse
  let apiDefault: ApiDefault

  beforeEach(() => {
    apiDefault = new ApiDefault()
    apiResponse = new ApiResponse(apiDefault)
    vi.useFakeTimers()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.useRealTimers()
    document.body.className = ''
  })

  it('should add and retrieve cached responses', () => {
    const item = {
      path: '/api/test',
      method: ApiMethodItem.get,
      response: { success: true }
    }
    apiResponse.add(item)

    const retrieved = apiResponse.get('/api/test', ApiMethodItem.get)
    expect(retrieved).toEqual(item)
  })

  it('should match regex path', () => {
    apiResponse.add({
      path: /^\/api\/user\/\d+$/,
      method: ApiMethodItem.get,
      response: { name: 'User' }
    })

    expect(apiResponse.get('/api/user/123', ApiMethodItem.get)).toBeDefined()
    expect(apiResponse.get('/api/user/abc', ApiMethodItem.get)).toBeUndefined()
  })

  it('should match request data', () => {
    apiResponse.add({
      path: '/api/login',
      method: ApiMethodItem.post,
      request: { user: 'admin' },
      response: { ok: true }
    })

    expect(apiResponse.get('/api/login', ApiMethodItem.post, { user: 'admin' })).toBeDefined()
    expect(apiResponse.get('/api/login', ApiMethodItem.post, { user: 'guest' })).toBeUndefined()
  })

  it('should handle *any in request data', () => {
    apiResponse.setDevMode(true)
    apiResponse.add({
      path: '/api/data',
      method: ApiMethodItem.get,
      request: { type: '*any', id: 1 },
      response: { data: 'test' }
    })

    expect(apiResponse.get('/api/data', ApiMethodItem.get, { type: 'A', id: 1 })).toBeDefined()
    expect(apiResponse.get('/api/data', ApiMethodItem.get, { type: 'B', id: 1 })).toBeDefined()
    expect(apiResponse.get('/api/data', ApiMethodItem.get, { type: 'B', id: 2 })).toBeUndefined()
  })

  it('should mark as first-time request and not return it twice (unless devMode)', () => {
    const item = {
      path: '/api/once',
      method: ApiMethodItem.get,
      response: { ok: true }
    }
    apiResponse.add(item)

    expect(apiResponse.get('/api/once', ApiMethodItem.get)).toBeDefined()
    // Second call should return undefined because it's already in 'first' list
    expect(apiResponse.get('/api/once', ApiMethodItem.get)).toBeUndefined()

    // But in dev mode it should return it
    expect(apiResponse.get('/api/once', ApiMethodItem.get, undefined, true)).toBeDefined()
  })

  it('emulator should return data if matched', async () => {
    apiResponse.add({
      path: '/api/mock',
      method: ApiMethodItem.get,
      response: { val: 123 }
    })

    const result = await apiResponse.emulator({
      path: '/api/mock',
      method: ApiMethodItem.get,
      global: true
    })

    expect(result).toEqual({ val: 123 })
  })

  it('emulator should handle function response and lag', async () => {
    apiResponse.add({
      path: '/api/delay',
      method: ApiMethodItem.get,
      response: (req: any) => ({ echoed: req.q }),
      lag: true
    })

    const showSpy = vi.spyOn(Loading, 'show')
    const hideSpy = vi.spyOn(Loading, 'hide')

    const promise = apiResponse.emulator({
      path: '/api/delay',
      method: ApiMethodItem.get,
      request: { q: 'hi' },
      global: true
    })

    // Class d-response-loading should be added to body
    // We might need to wait for a microtask for startResponseLoading to take effect if called within async
    expect(document.body.classList.contains('d-response-loading')).toBe(true)

    // Advance timers for random delay (0-2000ms)
    await vi.advanceTimersByTimeAsync(2000)

    const result = await promise
    expect(result).toEqual({ echoed: 'hi' })
    expect(showSpy).toHaveBeenCalled()
    expect(hideSpy).toHaveBeenCalled()
  })

  it('should support devMode setter', () => {
    apiResponse.setDevMode(true)
    apiResponse.add({ path: '/dev', method: ApiMethodItem.get, response: {} })

    expect(apiResponse.get('/dev', ApiMethodItem.get)).toBeDefined()
    // Still defined because of devMode
    expect(apiResponse.get('/dev', ApiMethodItem.get)).toBeDefined()
  })

  it('getList should exclude global responses', () => {
    apiResponse.add([
      { path: '/a', method: ApiMethodItem.get, response: {}, isForGlobal: false },
      { path: '/b', method: ApiMethodItem.get, response: {}, isForGlobal: true }
    ])

    const list = apiResponse.getList()
    expect(list).toHaveLength(1)
    expect(list[0].path).toBe('/a')
  })
})
