// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiPreparation } from '../ApiPreparation'

describe('ApiPreparation', () => {
  let preparation: ApiPreparation

  beforeEach(() => {
    preparation = new ApiPreparation()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should call callback in make() when active', async () => {
    const callback = vi.fn().mockResolvedValue(undefined)
    preparation.set(callback)

    const apiFetch = { path: '/test' } as any
    const promise = preparation.make(true, apiFetch)

    expect(callback).toHaveBeenCalledWith(apiFetch)
    await promise
  })

  it('should not call callback in make() when not active', async () => {
    const callback = vi.fn().mockResolvedValue(undefined)
    preparation.set(callback)

    await preparation.make(false, { path: '/test' } as any)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should call callbackEnd in makeEnd() when active', async () => {
    const callbackEnd = vi.fn().mockResolvedValue({ reset: true, data: { ok: 1 } })
    preparation.setEnd(callbackEnd)

    const query = new Response()
    const apiFetch = { path: '/test' } as any
    const result = await preparation.makeEnd(true, query, apiFetch)

    expect(callbackEnd).toHaveBeenCalledWith(query, apiFetch)
    expect(result).toEqual({ reset: true, data: { ok: 1 } })
  })

  it('should return empty object in makeEnd() when not active', async () => {
    const callbackEnd = vi.fn().mockResolvedValue({ reset: true })
    preparation.setEnd(callbackEnd)

    const result = await preparation.makeEnd(false, new Response(), {} as any)
    expect(result).toEqual({})
    expect(callbackEnd).not.toHaveBeenCalled()
  })

  it('should handle sequential requests with loading state', async () => {
    let resolveCallback: (value: void | PromiseLike<void>) => void
    const callback = vi.fn().mockImplementation(() => new Promise<void>((resolve) => {
      resolveCallback = resolve
    }))

    preparation.set(callback)

    const p1 = preparation.make(true, { id: 1 } as any)
    expect(callback).toHaveBeenCalledTimes(1)

    const p2 = preparation.make(true, { id: 2 } as any)
    // p2 should be waiting because loading is true
    expect(callback).toHaveBeenCalledTimes(1)

    // Finish p1
    resolveCallback!()
    await p1

    // Advance timers to trigger the retry in go() for p2
    // We need to advance multiple times because go() might be called multiple times
    await vi.advanceTimersByTimeAsync(160)
    await vi.advanceTimersByTimeAsync(160)

    // Now p2 should run
    await p2
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('should handle errors in callback and reset loading state', async () => {
    const callback = vi.fn().mockRejectedValue(new Error('callback error'))
    preparation.set(callback)

    await preparation.make(true, {} as any)
    expect(callback).toHaveBeenCalledTimes(1)

    // Check if we can run another one (loading should be false)
    await preparation.make(true, {} as any)
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('should support chaining', () => {
    const result = preparation.set(() => Promise.resolve())
    expect(result).toBe(preparation)

    const resultEnd = preparation.setEnd(() => Promise.resolve({}))
    expect(resultEnd).toBe(preparation)
  })
})
