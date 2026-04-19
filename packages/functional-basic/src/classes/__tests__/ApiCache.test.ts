// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { ApiCache } from '../ApiCache'

describe('ApiCache', () => {
  beforeEach(() => {
    ApiCache.reset()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should store and retrieve data', async () => {
    const key = 'test-key'
    const value = { data: 'hello' }

    await ApiCache.set(key, value, 60) // 60 seconds
    const retrieved = await ApiCache.get(key)

    expect(retrieved).toEqual(value)
  })

  it('should return undefined for expired items', async () => {
    const key = 'expired-key'
    const value = 'some-value'

    await ApiCache.set(key, value, 10) // 10 seconds

    // Advance time by 11 seconds
    vi.advanceTimersByTime(11000)

    const retrieved = await ApiCache.get(key)
    expect(retrieved).toBeUndefined()
  })

  it('should return undefined for non-existent items', async () => {
    const retrieved = await ApiCache.get('missing')
    expect(retrieved).toBeUndefined()
  })

  it('should use listeners if provided', async () => {
    const mockGet = vi.fn().mockResolvedValue({ value: 'from-listener', age: 60, cacheAge: Date.now() })
    const mockSet = vi.fn().mockResolvedValue(true)
    const mockRemove = vi.fn().mockResolvedValue(true)

    ApiCache.init(mockGet, mockSet, mockRemove)

    const val = await ApiCache.get('any-key')
    expect(val).toBe('from-listener')
    expect(mockGet).toHaveBeenCalledWith('any-key')

    await ApiCache.set('new-key', 'new-val', 30)
    expect(mockSet).toHaveBeenCalledWith('new-key', expect.objectContaining({ value: 'new-val', age: 30 }))

    await ApiCache.remove('some-key')
    expect(mockRemove).toHaveBeenCalledWith('some-key')
  })

  it('should handle getByFetch and setByFetch', async () => {
    const fetchConfig = {
      path: '/api/test',
      method: 'GET',
      cache: 100,
      enableClientCache: true
    } as any

    const data = { result: 42 }
    await ApiCache.setByFetch(fetchConfig, data)

    const cached = await ApiCache.getByFetch(fetchConfig)
    expect(cached).toEqual(data)
  })

  it('should not cache if enableClientCache is false in DOM runtime', async () => {
    // We are in jsdom environment
    const fetchConfig = {
      path: '/api/test',
      method: 'GET',
      cache: 100,
      enableClientCache: false
    } as any

    await ApiCache.setByFetch(fetchConfig, { data: 1 })
    const cached = await ApiCache.getByFetch(fetchConfig)
    expect(cached).toBeUndefined()
  })

  it('should clear old items when step count reached', async () => {
    // We don't use listeners here to test internal memory storage
    ApiCache.init(
      undefined as any,
      undefined as any,
      undefined as any,
      2 // clear every 2 gets
    )

    const key1 = 'key1'
    const key2 = 'key2'

    await ApiCache.set(key1, 'val1', 5) // short age
    await ApiCache.set(key2, 'val2', 100) // long age

    // Items are in memory
    expect(await ApiCache.get(key1)).toBe('val1')

    // Advance time to expire key1
    await vi.advanceTimersByTimeAsync(6000)

    // Trigger clearOld by doing multiple gets
    await ApiCache.get('trigger1')
    await ApiCache.get('trigger2')

    // key1 should be removed
    const val1 = await ApiCache.get(key1)
    expect(val1).toBeUndefined()

    const val2 = await ApiCache.get(key2)
    expect(val2).toBe('val2')
  })
})
