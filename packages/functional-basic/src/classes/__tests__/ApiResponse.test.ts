// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiResponse } from '../ApiResponse'
import { ApiDefault } from '../ApiDefault'
import { ApiMethodItem, type ApiResponseItem } from '../../types/apiTypes'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('ApiResponse', () => {
  let isDomRuntimeSpy: any
  let requestDefault: ApiDefault
  let apiResponse: ApiResponse

  beforeEach(() => {
    vi.useFakeTimers()
    isDomRuntimeSpy = vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    requestDefault = new ApiDefault()
    apiResponse = new ApiResponse(requestDefault)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
    document.body.className = ''
  })

  it('should add and retrieve cached responses', () => {
    const item: ApiResponseItem = {
      path: '/api/data',
      method: ApiMethodItem.get,
      response: { data: 'test' }
    }

    apiResponse.add(item)

    const result = apiResponse.get('/api/data', ApiMethodItem.get, undefined, false)
    expect(result).toBe(item)
  })

  it('should filter out global items in getList', () => {
    const item1: ApiResponseItem = { path: '1', method: ApiMethodItem.get, response: '1', isForGlobal: true }
    const item2: ApiResponseItem = { path: '2', method: ApiMethodItem.get, response: '2' }

    apiResponse.add([item1, item2])
    const list = apiResponse.getList()

    expect(list.length).toBe(1)
    expect(list[0]).toBe(item2)
  })

  it('should disable items properly', () => {
    const item: ApiResponseItem = {
      path: 'test',
      method: ApiMethodItem.get,
      disable: true,
      response: 'test'
    }

    apiResponse.add(item)
    expect(apiResponse.get('test', ApiMethodItem.get)).toBeUndefined()
  })

  it('should match path using literal or regex', () => {
    apiResponse.add([
      { path: 'literal-path', method: ApiMethodItem.get, response: 'literal' },
      { path: /regex-path-\d+/, method: ApiMethodItem.get, response: 'regex' }
    ])

    expect(apiResponse.get('literal-path', ApiMethodItem.get)).toBeDefined()
    expect(apiResponse.get('regex-path-123', ApiMethodItem.get)).toBeDefined()
    expect(apiResponse.get('regex-path-ab', ApiMethodItem.get)).toBeUndefined()
  })

  it('should match response by exact request object or wildcard', () => {
    apiResponse.add([
      { path: 'p1', method: ApiMethodItem.post, request: { a: 1, b: 2 }, response: 'exact' },
      { path: 'p2', method: ApiMethodItem.post, request: '*any', response: 'wildcard' },
      { path: 'p3', method: ApiMethodItem.post, request: { a: '*any' }, response: 'nested-wildcard' }
    ])

    // Exact matches (using devMode: true to skip "first time" check)
    expect(apiResponse.get('p1', ApiMethodItem.post, { a: 1, b: 2 }, true)).toBeDefined()
    expect(apiResponse.get('p1', ApiMethodItem.post, { a: 1 }, true)).toBeUndefined() // diff length

    // Wildcard matches
    expect(apiResponse.get('p2', ApiMethodItem.post, { completely: 'different' }, true)).toBeDefined()
    expect(apiResponse.get('p2', ApiMethodItem.post, undefined, true)).toBeDefined()

    // Nested wildcard
    expect(apiResponse.get('p3', ApiMethodItem.post, { a: 999 }, true)).toBeDefined()
  })

  it('should only return response once unless devMode is true', () => {
    const item: ApiResponseItem = { path: 'test', method: ApiMethodItem.get, response: 'data' }
    apiResponse.add(item)

    // First time should work
    expect(apiResponse.get('test', ApiMethodItem.get, undefined, false)).toBeDefined()

    // Second time should fail unless devMode
    expect(apiResponse.get('test', ApiMethodItem.get, undefined, false)).toBeUndefined()

    // DevMode overrides this check
    expect(apiResponse.get('test', ApiMethodItem.get, undefined, true)).toBeDefined()

    // Global devMode overrides this too
    apiResponse.setDevMode(true)
    expect(apiResponse.get('test', ApiMethodItem.get, undefined, false)).toBeDefined()
  })

  it('should emulate fetch and trigger loading state', async () => {
    apiResponse.add({
      path: 'lag-test',
      method: ApiMethodItem.get,
      response: { ok: true },
      lag: true
    })

    const promise = apiResponse.emulator({ path: 'lag-test', method: ApiMethodItem.get, global: true })

    expect(document.body.classList.contains('d-response-loading')).toBe(true)

    await vi.runAllTimersAsync()

    const result = await promise
    expect(result).toEqual({ ok: true })

    // Simulate clearing the loading class 2400ms after completion
    await vi.advanceTimersByTimeAsync(3000)
    expect(document.body.classList.contains('d-response-loading')).toBe(false)
  })

  it('should handle function as response', async () => {
    apiResponse.add({
      path: 'func-res',
      method: ApiMethodItem.get,
      request: '*any',
      response: (req: any) => ({ resolved: true, req })
    })

    const result = await apiResponse.emulator({ path: 'func-res', method: ApiMethodItem.get, global: true, request: { a: 1 } })

    expect(result).toEqual({ resolved: true, req: { a: 1 } })
  })

  it('should return undefined from emulator if not DomRuntime', async () => {
    isDomRuntimeSpy.mockReturnValue(false)
    const result = await apiResponse.emulator({ path: 'test' })
    expect(result).toBeUndefined()
  })

  it('should emulate fetch synchronously using emulatorAsync', () => {
    const item: ApiResponseItem = {
      path: 'sync-test',
      method: ApiMethodItem.get,
      response: { sync: true }
    }
    apiResponse.add(item)

    const result = apiResponse.emulatorAsync({
      path: 'sync-test',
      method: ApiMethodItem.get,
      global: true
    })

    expect(result).toEqual({ sync: true })
  })

  it('should return undefined from emulatorAsync if not DomRuntime', () => {
    isDomRuntimeSpy.mockReturnValue(false)
    const result = apiResponse.emulatorAsync({ path: 'test' })
    expect(result).toBeUndefined()
  })
})
