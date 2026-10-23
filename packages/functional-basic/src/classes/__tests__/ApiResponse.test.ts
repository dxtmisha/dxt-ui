// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import { Loading } from '../Loading'
import { type ApiFetch, ApiMethodItem, type ApiResponseItem } from '../../types/apiTypes'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('ApiResponse', () => {
  let requestDefault: ApiDefault
  let apiResponse: ApiResponse

  beforeEach(() => {
    vi.useFakeTimers()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    requestDefault = new ApiDefault()
    apiResponse = new ApiResponse(requestDefault)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
    document.body.className = ''
  })

  it('should add and retrieve cached responses and support chaining', () => {
    const item: ApiResponseItem = {
      path: '/api/data',
      method: ApiMethodItem.get,
      response: { data: 'test' }
    }

    expect(apiResponse.add(item)).toBe(apiResponse)

    const result = apiResponse.get('/api/data', ApiMethodItem.get, undefined, false)
    expect(result).toBe(item)
  })

  it('should filter out global items in getList()', () => {
    const globalItem: ApiResponseItem = {
      path: 'global-1',
      method: ApiMethodItem.get,
      response: '1',
      isForGlobal: true
    }
    const localItem: ApiResponseItem = {
      path: 'local-2',
      method: ApiMethodItem.get,
      response: '2'
    }

    apiResponse.add([globalItem, localItem])
    const list = apiResponse.getList()

    expect(list).toHaveLength(1)
    expect(list[0]).toBe(localItem)
  })

  it('should skip disabled items whether disable is a boolean or a function', () => {
    apiResponse.add([
      {
        path: 'disabled-bool',
        method: ApiMethodItem.get,
        disable: true,
        response: 'blocked'
      },
      {
        path: 'disabled-function',
        method: ApiMethodItem.get,
        disable: () => true,
        response: 'blocked-by-function'
      }
    ])

    expect(apiResponse.get('disabled-bool', ApiMethodItem.get)).toBeUndefined()
    expect(apiResponse.get('disabled-function', ApiMethodItem.get)).toBeUndefined()
  })

  it('should match path using literal string or RegExp', () => {
    apiResponse.add([
      { path: 'literal-path', method: ApiMethodItem.get, response: 'literal' },
      { path: /regex-path-\d+/, method: ApiMethodItem.get, response: 'regex' }
    ])

    expect(apiResponse.get('literal-path', ApiMethodItem.get)).toBeDefined()
    expect(apiResponse.get('regex-path-123', ApiMethodItem.get)).toBeDefined()
    expect(apiResponse.get('regex-path-abc', ApiMethodItem.get)).toBeUndefined()
  })

  it('should match response by exact request object, "*any" wildcard, or property-level "*any"', () => {
    apiResponse.add([
      { path: 'p1', method: ApiMethodItem.post, request: { first: 1, second: 2 }, response: 'exact' },
      { path: 'p2', method: ApiMethodItem.post, request: '*any', response: 'wildcard' },
      { path: 'p3', method: ApiMethodItem.post, request: { first: '*any' }, response: 'nested-wildcard' }
    ])

    expect(apiResponse.get('p1', ApiMethodItem.post, { first: 1, second: 2 }, true)).toBeDefined()
    expect(apiResponse.get('p1', ApiMethodItem.post, { first: 1 }, true)).toBeUndefined()

    expect(apiResponse.get('p2', ApiMethodItem.post, { completely: 'different' }, true)).toBeDefined()
    expect(apiResponse.get('p2', ApiMethodItem.post, undefined, true)).toBeDefined()

    expect(apiResponse.get('p3', ApiMethodItem.post, { first: 999 }, true)).toBeDefined()
  })

  it('should not match object comparison when request is FormData unless reference or "*any" matches', () => {
    const formData = new FormData()
    formData.append('file', 'content')

    apiResponse.add([
      { path: 'upload-obj', method: ApiMethodItem.post, request: { file: 'content' }, response: 'mismatch' },
      { path: 'upload-any', method: ApiMethodItem.post, request: '*any', response: 'matched-any' }
    ])

    expect(apiResponse.get('upload-obj', ApiMethodItem.post, formData, true)).toBeUndefined()
    expect(apiResponse.get('upload-any', ApiMethodItem.post, formData, true)).toBeDefined()
  })

  it('should return a non-devMode response only once, and allow repeated hits in devMode with console warnings', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const item: ApiResponseItem = { path: 'single-use', method: ApiMethodItem.get, response: 'data' }
    apiResponse.add(item)

    expect(apiResponse.get('single-use', ApiMethodItem.get, undefined, false)).toBe(item)
    expect(apiResponse.get('single-use', ApiMethodItem.get, undefined, false)).toBeUndefined()

    expect(apiResponse.get('single-use', ApiMethodItem.get, undefined, true)).toBe(item)
    expect(warnSpy).toHaveBeenCalledWith('Response type: single-use')

    expect(apiResponse.setDevMode(true)).toBe(apiResponse)
    expect(apiResponse.get('single-use', ApiMethodItem.get, undefined, false)).toBe(item)
  })

  it('should emulate fetch with lag, manage Loading and body class, and clear previous loading timeout', async () => {
    const loadingShowSpy = vi.spyOn(Loading, 'show')
    const loadingHideSpy = vi.spyOn(Loading, 'hide')

    apiResponse.add([
      {
        path: 'lag-test',
        method: ApiMethodItem.get,
        response: { ok: true },
        lag: true
      },
      {
        path: 'second-test',
        method: ApiMethodItem.get,
        response: { second: true }
      }
    ])

    const firstPromise = apiResponse.emulator<{ ok: boolean }>({
      path: 'lag-test',
      method: ApiMethodItem.get,
      global: true
    })

    expect(document.body.classList.contains('d-response-loading')).toBe(true)

    await vi.advanceTimersByTimeAsync(2000)
    const firstResult = await firstPromise
    expect(firstResult).toEqual({ ok: true })
    expect(loadingShowSpy).toHaveBeenCalledOnce()
    expect(loadingHideSpy).toHaveBeenCalledOnce()

    // Trigger a second emulator call before the 2400ms body class removal timer fires
    const secondResult = await apiResponse.emulator<{ second: boolean }>({
      path: 'second-test',
      method: ApiMethodItem.get,
      global: true
    })
    expect(secondResult).toEqual({ second: true })

    await vi.advanceTimersByTimeAsync(2500)
    expect(document.body.classList.contains('d-response-loading')).toBe(false)
  })

  it('should execute response factory function with request payload and log in devMode', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    apiResponse.add({
      path: 'func-response',
      method: ApiMethodItem.get,
      request: '*any',
      response: (request?: ApiFetch['request']) => ({ resolved: true, request })
    })

    const result = await apiResponse.emulator<{ resolved: boolean, request: ApiFetch['request'] }>({
      path: 'func-response',
      method: ApiMethodItem.get,
      global: true,
      devMode: true,
      request: { page: 1 }
    })

    expect(result).toEqual({ resolved: true, request: { page: 1 } })
    expect(warnSpy).toHaveBeenCalledWith(
      'Response data:',
      'func-response',
      { page: 1 },
      { resolved: true, request: { page: 1 } }
    )
  })

  it('should return undefined from emulator() when not in DOM runtime or when global and devMode are false', async () => {
    apiResponse.add({
      path: 'post-only',
      method: ApiMethodItem.post,
      response: { ok: true }
    })

    // Non-GET defaults to global = false and devMode = false
    expect(await apiResponse.emulator({ path: 'post-only', method: ApiMethodItem.post })).toBeUndefined()

    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    expect(await apiResponse.emulator({ path: 'post-only', global: true })).toBeUndefined()
  })

  it('should emulate response synchronously via emulatorAsync()', () => {
    apiResponse.add({
      path: 'sync-test',
      method: ApiMethodItem.get,
      response: { sync: true }
    })

    const result = apiResponse.emulatorAsync<{ sync: boolean }>({
      path: 'sync-test',
      method: ApiMethodItem.get,
      global: true
    })

    expect(result).toEqual({ sync: true })
    expect(apiResponse.emulatorAsync({ path: 'missing-path', global: true })).toBeUndefined()
  })

  it('should return undefined from emulatorAsync() when not in DOM runtime', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    const result = apiResponse.emulatorAsync({ path: 'test' })
    expect(result).toBeUndefined()
  })

  it('should reject and clean up loading state when response function throws or rejects', async () => {
    apiResponse.add({
      path: 'error-test',
      method: ApiMethodItem.get,
      response: async () => {
        throw new Error('Emulator failed')
      }
    })

    const promise = apiResponse.emulator({
      path: 'error-test',
      method: ApiMethodItem.get,
      global: true
    })
    await expect(promise).rejects.toThrow('Emulator failed')

    await vi.advanceTimersByTimeAsync(3000)
    expect(document.body.classList.contains('d-response-loading')).toBe(false)
  })
})
