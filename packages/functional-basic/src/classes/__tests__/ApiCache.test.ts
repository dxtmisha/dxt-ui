import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiCache } from '../ApiCache'
import { ApiMethodItem } from '../../types/apiTypes'
import { ErrorCenter } from '../ErrorCenter'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('ApiCache', () => {
  beforeEach(() => {
    ApiCache.reset()
    vi.useFakeTimers()
    vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined as any)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should set and get values from local memory cache', async () => {
    await ApiCache.set('test-key', { data: 123 }, 60)
    const result = await ApiCache.get('test-key')
    expect(result).toEqual({ data: 123 })
  })

  it('should ignore expired cache items', async () => {
    await ApiCache.set('test-exp', 'expired', 1) // 1 second cache

    vi.advanceTimersByTime(1100) // advance 1.1s

    const result = await ApiCache.get('test-exp')
    expect(result).toBeUndefined()
  })

  it('should use custom listeners if provided', async () => {
    const getSpy = vi.fn().mockResolvedValue({ value: 'listened-val', age: 60, cacheAge: Date.now() })
    const setSpy = vi.fn().mockResolvedValue(true)
    const removeSpy = vi.fn().mockResolvedValue(true)

    ApiCache.init(getSpy, setSpy, removeSpy)

    await ApiCache.set('key', 'new-val', 10)
    expect(setSpy).toHaveBeenCalledWith('key', expect.objectContaining({ value: 'new-val' }))

    const result = await ApiCache.get('key')
    expect(getSpy).toHaveBeenCalledWith('key')
    expect(result).toBe('listened-val')

    await ApiCache.remove('key')
    expect(removeSpy).toHaveBeenCalledWith('key')
  })

  it('should set without value in memory if setListener returns true', async () => {
    const setSpy = vi.fn().mockResolvedValue(true)
    ApiCache.init(undefined as any, setSpy, undefined as any)

    await ApiCache.set('memory-test', 'save-me')
    // Local memory should have undefined value because listener supposedly handled it
    // Note: get() uses getting logic, but since we didn't mock getListener, it falls back to memory.
    const result = await ApiCache.get('memory-test')
    expect(result).toBeUndefined()
  })

  it('should set with value in memory if setListener returns false', async () => {
    const setSpy = vi.fn().mockResolvedValue(false)
    ApiCache.init(undefined as any, setSpy, undefined as any)

    await ApiCache.set('memory-test', 'save-me')
    const result = await ApiCache.get('memory-test')
    expect(result).toBe('save-me')
  })

  it('should generate key based on limited fetch parameters', async () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

    // Setup fetching logic
    const fetchObj = {
      path: '/api/v1',
      method: ApiMethodItem.get,
      cache: 60
    }

    await ApiCache.setByFetch(fetchObj, 'fetched-val')
    const result = await ApiCache.getByFetch(fetchObj)

    expect(result).toBe('fetched-val')
  })

  it('should bypass cache logic if cache option is missing or disabled in browser', async () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true) // Browser

    // no cache property
    expect(await ApiCache.getByFetch({ path: 'test' })).toBeUndefined()

    // cache property, but enableClientCache is false (default)
    expect(await ApiCache.getByFetch({ path: 'test', cache: 60 })).toBeUndefined()

    // enableClientCache is true
    await ApiCache.setByFetch({ path: 'test', cache: 60, enableClientCache: true }, 'browser-cache')
    expect(await ApiCache.getByFetch({ path: 'test', cache: 60, enableClientCache: true })).toBe('browser-cache')
  })

  it('should clear old cache after reaching cacheStepAgeClearOld', async () => {
    // Init with low step size to easily trigger clearOld
    ApiCache.init(undefined as any, undefined as any, undefined as any, 2)

    await ApiCache.set('old-key', '1', 1)
    await ApiCache.set('new-key', '2', 60)

    vi.advanceTimersByTime(1500) // old-key expires

    // Step 2 -> 1
    await ApiCache.get('new-key')

    // Check if memory still has 'old-key'. We can do this implicitly or by trying to get it directly
    // Step 1 -> 0 -> triggering clearOld here but since we use microtasks it might trigger after
    await ApiCache.get('old-key')

    // We await for internal promise to finish
    await vi.runAllTimersAsync()

    // Now if we mock a listener, we can see if remove was called...
    // Let's reset and test specifically with listener
    ApiCache.reset()
    const removeSpy = vi.fn().mockResolvedValue(true)
    ApiCache.init(undefined as any, undefined as any, removeSpy, 1) // step 1

    await ApiCache.set('old-key2', '1', 1)
    vi.advanceTimersByTime(1100)

    // Trigger clearOld -> step 1 -> 0
    await ApiCache.get('any')
    // Trigger clearOld -> step 0 -> -1 (activates)
    await ApiCache.get('any')

    // Wait for microtasks
    await Promise.resolve()
    await Promise.resolve()
    await Promise.resolve()
    expect(removeSpy).toHaveBeenCalledWith('old-key2')
  })

  it('should catch error in clearOld and report to ErrorCenter', async () => {
    const removeSpy = vi.fn().mockRejectedValue(new Error('Clear Error'))
    const errorSpy = vi.spyOn(ErrorCenter, 'on')

    ApiCache.init(undefined as any, undefined as any, removeSpy, 1)

    await ApiCache.set('old-key', '1', 1)
    vi.advanceTimersByTime(1100)

    // Trigger clearOld
    await ApiCache.get('any')
    await ApiCache.get('any')

    // Wait for microtasks
    await Promise.resolve()
    await Promise.resolve()
    await Promise.resolve()
    expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({
      group: 'api',
      code: 'cacheClear',
      details: expect.any(Error)
    }))
  })
})
