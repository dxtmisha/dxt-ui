import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiPreparation } from '../ApiPreparation'

describe('ApiPreparation', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should execute callback in make() when active is true and support chaining on set()', async () => {
    const preparation = new ApiPreparation()
    const callbackSpy = vi.fn(async () => {})

    const returnedInstance = preparation.set(callbackSpy)
    expect(returnedInstance).toBe(preparation)

    const promise = preparation.make(true, { path: 'test' })
    await vi.runAllTimersAsync()
    await promise

    expect(callbackSpy).toHaveBeenCalledWith({ path: 'test' })
  })

  it('should NOT execute callback in make() when active is false', async () => {
    const preparation = new ApiPreparation()
    const callbackSpy = vi.fn(async () => {})

    preparation.set(callbackSpy)
    await preparation.make(false, { path: 'test' })

    expect(callbackSpy).not.toHaveBeenCalled()
  })

  it('should resolve cleanly in make() when no callback is configured', async () => {
    const preparation = new ApiPreparation()
    await expect(preparation.make(true, { path: 'test' })).resolves.toBeUndefined()
  })

  it('should wait until the previous preparation finishes', async () => {
    const preparation = new ApiPreparation()

    let resolveFirstCallback: (() => void) | undefined
    const firstCallback = vi.fn(() => {
      return new Promise<void>((resolve) => {
        resolveFirstCallback = resolve
      })
    })

    preparation.set(firstCallback)
    const firstPromise = preparation.make(true, { path: 'first' })

    const secondCallback = vi.fn(async () => {})
    preparation.set(secondCallback)

    const secondPromise = preparation.make(true, { path: 'second' })
    expect(secondCallback).not.toHaveBeenCalled()

    await vi.advanceTimersByTimeAsync(160)

    resolveFirstCallback?.()
    await firstPromise

    await vi.runAllTimersAsync()
    await secondPromise

    expect(firstCallback).toHaveBeenCalledWith({ path: 'first' })
    expect(secondCallback).toHaveBeenCalledWith({ path: 'second' })
  })

  it('should keep waiting while a preparation remains active after another finishes', async () => {
    const preparation = new ApiPreparation()
    let finishFirst: (() => void) | undefined
    const firstPending = new Promise<void>((resolve) => {
      finishFirst = resolve
    })
    const callback = vi.fn(async () => {}).mockReturnValueOnce(firstPending)

    preparation.set(callback)
    const first = preparation.make(true, { path: 'first' })
    const second = preparation.make(true, { path: 'second' })

    await vi.advanceTimersByTimeAsync(32 * 160)
    await second
    expect(callback).toHaveBeenNthCalledWith(2, { path: 'second' })

    const third = preparation.make(true, { path: 'third' })
    expect(callback).toHaveBeenCalledTimes(2)

    finishFirst?.()
    await first
    await vi.advanceTimersByTimeAsync(160)
    await third

    expect(callback).toHaveBeenNthCalledWith(3, { path: 'third' })
  })

  it('should reset loading state even if the preparation callback rejects or throws synchronously', async () => {
    const preparation = new ApiPreparation()
    const failingCallback = vi.fn(async () => {
      throw new Error('Preparation failure')
    })

    preparation.set(failingCallback)
    await preparation.make(true, { path: 'error' })

    const syncThrowingCallback = vi.fn((() => {
      throw new Error('Sync failure')
    }) as unknown as () => Promise<void>)

    preparation.set(syncThrowingCallback)
    await preparation.make(true, { path: 'sync-error' })

    const subsequentCallback = vi.fn(async () => {})
    preparation.set(subsequentCallback)

    await preparation.make(true, { path: 'success' })
    expect(subsequentCallback).toHaveBeenCalledWith({ path: 'success' })
  })

  it('should resolve when callback becomes undefined while waiting in go() or cleared via set(undefined)', async () => {
    class ExposedApiPreparation extends ApiPreparation {
      setLoading(value: number): void {
        this.loading = value
      }

      runGo(): Promise<void> {
        return this.go({ path: 'no-callback' }, 0)
      }
    }

    const preparation = new ExposedApiPreparation()
    preparation.set(async () => {})
    preparation.set(undefined)
    preparation.setLoading(1)

    await expect(preparation.runGo()).resolves.toBeUndefined()
  })

  it('should execute callbackEnd in makeEnd() when active is true, support chaining on setEnd(), and allow clearing via setEnd(undefined)', async () => {
    const preparation = new ApiPreparation()
    const callbackEndSpy = vi.fn(async () => ({ reset: true }))

    const returnedInstance = preparation.setEnd(callbackEndSpy)
    expect(returnedInstance).toBe(preparation)

    const mockResponse = new Response()
    const result = await preparation.makeEnd(true, mockResponse, { path: 'test' })

    expect(callbackEndSpy).toHaveBeenCalledWith(mockResponse, { path: 'test' })
    expect(result).toEqual({ reset: true })

    preparation.setEnd(undefined)
    const clearedResult = await preparation.makeEnd(true, mockResponse, { path: 'test' })
    expect(clearedResult).toEqual({})
  })

  it('should return an empty object from makeEnd() when active is false', async () => {
    const preparation = new ApiPreparation()
    const callbackEndSpy = vi.fn(async () => ({ reset: true }))

    preparation.setEnd(callbackEndSpy)

    const mockResponse = new Response()
    const result = await preparation.makeEnd(false, mockResponse, { path: 'test' })

    expect(callbackEndSpy).not.toHaveBeenCalled()
    expect(result).toEqual({})
  })

  it('should return an empty object from makeEnd() when callbackEnd is not set', async () => {
    const preparation = new ApiPreparation()
    const mockResponse = new Response()
    const result = await preparation.makeEnd(true, mockResponse, { path: 'test' })

    expect(result).toEqual({})
  })
})
