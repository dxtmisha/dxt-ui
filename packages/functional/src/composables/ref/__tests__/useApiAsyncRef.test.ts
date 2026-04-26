/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useApiAsyncRef } from '../useApiAsyncRef'
import { Api, type ApiInstance } from '@dxtmisha/functional-basic'

describe('useApiAsyncRef', () => {
  let mockApiInstance: ApiInstance

  beforeEach(() => {
    vi.clearAllMocks()
    mockApiInstance = {
      request: vi.fn().mockResolvedValue({ data: 'default-response' })
    } as unknown as ApiInstance

    // Mock the default Api.getItem()
    vi.spyOn(Api, 'getItem').mockReturnValue(mockApiInstance)
  })

  it('should initialize and execute request immediately (async)', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ data: 'async-data' })

    const { data, loading } = await useApiAsyncRef('test/path')

    // Since useApiAsyncRef calls await item.init(awaitFetch),
    // and default awaitFetch is false, it might not wait for the request itself IF it's in browser environment,
    // but the implementation of useApiRef.init says:
    // if (isDomRuntime() && awaitFetch) { ... } else { await reset(); return }
    // In vitest with jsdom, isDomRuntime() is likely true.

    // By default awaitFetch = false
    // So in useApiRef.init:
    // if (isDomRuntime() && awaitFetch) { // false
    // } else {
    //   await reset()
    //   return
    // }
    // It should actually await the reset even if awaitFetch is false if isDomRuntime() is false,
    // OR if awaitFetch is false it still awaits reset() but returns immediately?
    // Let's look at useApiRef.ts AGAIN.
    /*
      if (
        isDomRuntime()
        && awaitFetch
      ) {
        if (awaitFetch) {
          await reset()
        } else {
          reset().then()
        }
      } else {
        await reset()
        return
      }
    */
    // If isDomRuntime() is true and awaitFetch is false, it goes to ELSE of `if (isDomRuntime() && awaitFetch)` which is `await reset(); return`.
    // Wait, the logic is:
    /*
      if (isDomRuntime() && awaitFetch) {
         if (awaitFetch) { ... } else { ... }
      } else {
         await reset()
         return
      }
    */
    // So if awaitFetch is false, it ALWAYS awaits reset() and returns early, SKIPING watchers and unmounted hooks!
    // That seems like a bug in useApiRef.ts or intended behavior for non-dom or explicit await.
    // Actually, if isDomRuntime() is true and awaitFetch is false, it enters the `else` of the FIRST `if`.

    expect(mockApiInstance.request).toHaveBeenCalledWith(expect.objectContaining({ path: 'test/path' }))
    expect(data.value).toEqual({ data: 'async-data' })
    expect(loading.value).toBe(false)
  })

  it('should pass awaitFetch=true to init', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ data: 'await-fetch-data' })

    const { data } = await useApiAsyncRef('test/path', {}, true)

    expect(mockApiInstance.request).toHaveBeenCalled()
    expect(data.value).toEqual({ data: 'await-fetch-data' })
  })

  it('should respect conditions', async () => {
    const conditions = { value: false } // mock RefType
    const { data } = await useApiAsyncRef('test/path', {}, false, true, conditions as any)

    expect(mockApiInstance.request).not.toHaveBeenCalled()
    expect(data.value).toBeUndefined()
  })

  it('should use provided custom apiInstance', async () => {
    const customInstance = { request: vi.fn().mockResolvedValue({ data: 'custom' }) } as unknown as ApiInstance

    const { data } = await useApiAsyncRef(
      'test/path',
      {},
      false,
      true,
      undefined,
      undefined,
      undefined,
      true,
      customInstance
    )

    expect(customInstance.request).toHaveBeenCalled()
    expect(mockApiInstance.request).not.toHaveBeenCalled()
    expect(data.value).toEqual({ data: 'custom' })
  })

  it('should handle transformation', async () => {
    vi.mocked(mockApiInstance.request).mockResolvedValueOnce({ value: 10 })
    const transformation = (data: any) => ({ doubled: data.value * 2 })

    const { data } = await useApiAsyncRef(
      'test/path',
      {},
      false,
      true,
      undefined,
      transformation
    )

    expect(data.value).toEqual({ doubled: 20 })
  })
})
