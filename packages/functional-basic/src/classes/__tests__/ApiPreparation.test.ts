import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiPreparation } from '../ApiPreparation'

describe('ApiPreparation', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should run normal make when callback is set and active is true', async () => {
    const prep = new ApiPreparation()
    const callbackSpy = vi.fn().mockResolvedValue(undefined)

    prep.set(callbackSpy)

    const promise = prep.make(true, { path: 'test' })
    await vi.runAllTimersAsync()
    await promise

    expect(callbackSpy).toHaveBeenCalledWith({ path: 'test' })
  })

  it('should NOT run make if active is false', async () => {
    const prep = new ApiPreparation()
    const callbackSpy = vi.fn().mockResolvedValue(undefined)

    prep.set(callbackSpy)

    await prep.make(false, { path: 'test' })

    expect(callbackSpy).not.toHaveBeenCalled()
  })

  it('should NOT run make if callback is not set', async () => {
    const prep = new ApiPreparation()
    await prep.make(true, { path: 'test' })
    expect(true).toBe(true) // Just test that it resolves properly without crashing
  })

  it('should wait if loading is true', async () => {
    const prep = new ApiPreparation()

    // First callback takes some time to resolve
    let resolveFirst: any
    const callback1 = vi.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolveFirst = resolve
      })
    })

    prep.set(callback1)

    // Start first make
    const p1 = prep.make(true, { path: 'first' })

    // Change callback to spy on the second make
    const callback2 = vi.fn().mockResolvedValue(undefined)
    prep.set(callback2) // Note: this replaces the callback, but loading=true flag inside `prep` blocks it

    // Start second make while first is pending
    const p2 = prep.make(true, { path: 'second' })

    // callback2 should not be called yet due to loading=true
    expect(callback2).not.toHaveBeenCalled()

    // Advance fake timers so `go` function recursive setTimeout triggers
    await vi.advanceTimersByTimeAsync(160)

    // Now resolve first callback
    resolveFirst()
    await p1

    // Second callback should now trigger after the next timeout tick
    await vi.runAllTimersAsync()
    await p2

    expect(callback1).toHaveBeenCalledWith({ path: 'first' })
    expect(callback2).toHaveBeenCalledWith({ path: 'second' })
  })

  it('should reset loading state even if callback throws', async () => {
    const prep = new ApiPreparation()
    const errorCallback = vi.fn().mockRejectedValue(new Error('Test error'))

    prep.set(errorCallback)

    await prep.make(true, { path: 'error' })

    // It should catch the error internally and clear loading flag
    const successCallback = vi.fn().mockResolvedValue(undefined)
    prep.set(successCallback)

    await prep.make(true, { path: 'success' })
    expect(successCallback).toHaveBeenCalled()
  })

  it('should handle makeEnd when active and callbackEnd are provided', async () => {
    const prep = new ApiPreparation()
    const callbackEndSpy = vi.fn().mockResolvedValue({ reset: true })

    prep.setEnd(callbackEndSpy)

    const mockResponse = new Response()
    const result = await prep.makeEnd(true, mockResponse, { path: 'test' })

    expect(callbackEndSpy).toHaveBeenCalledWith(mockResponse, { path: 'test' })
    expect(result).toEqual({ reset: true })
  })

  it('should return empty object if makeEnd is called and active is false', async () => {
    const prep = new ApiPreparation()
    const callbackEndSpy = vi.fn().mockResolvedValue({ reset: true })

    prep.setEnd(callbackEndSpy)

    const mockResponse = new Response()
    const result = await prep.makeEnd(false, mockResponse, { path: 'test' })

    expect(callbackEndSpy).not.toHaveBeenCalled()
    expect(result).toEqual({})
  })

  it('should return empty object if makeEnd is called but no callback is set', async () => {
    const prep = new ApiPreparation()
    const mockResponse = new Response()
    const result = await prep.makeEnd(true, mockResponse, { path: 'test' })
    expect(result).toEqual({})
  })
})
