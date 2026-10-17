/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import * as domRuntime from '../isDomRuntime'
import { domContentLoaded } from '../domContentLoaded'

describe('domContentLoaded', () => {
  let originalReadyState: PropertyDescriptor | undefined

  beforeEach(() => {
    originalReadyState = Object.getOwnPropertyDescriptor(document, 'readyState')
  })

  afterEach(() => {
    if (originalReadyState) {
      Object.defineProperty(document, 'readyState', originalReadyState)
    } else {
      delete (document as unknown as Record<string, unknown>).readyState
    }
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Immediate readyState execution)', () => {
    it('should execute callback immediately if document.readyState is complete', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const callback = vi.fn().mockReturnValue('complete result')
      const result = await domContentLoaded(callback)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(result).toBe('complete result')
    })

    it('should execute callback immediately if document.readyState is interactive', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'interactive'
      })

      const callback = vi.fn().mockReturnValue('interactive result')
      const result = await domContentLoaded(callback)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(result).toBe('interactive result')
    })

    it('should resolve without arguments when readyState is complete or interactive', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const result = await domContentLoaded()
      expect(result).toBeUndefined()
    })

    it('should handle async callback returning a promise when document is already loaded', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const asyncCallback = vi.fn().mockResolvedValue('async complete result')
      const result = await domContentLoaded(asyncCallback)

      expect(asyncCallback).toHaveBeenCalledTimes(1)
      expect(result).toBe('async complete result')
    })
  })

  describe('Event listener and deferred execution (Loading state)', () => {
    it('should wait for DOMContentLoaded event when document.readyState is loading', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const callback = vi.fn().mockReturnValue(42)
      const promise = domContentLoaded(callback)

      expect(callback).not.toHaveBeenCalled()

      document.dispatchEvent(new Event('DOMContentLoaded'))

      const result = await promise
      expect(callback).toHaveBeenCalledTimes(1)
      expect(result).toBe(42)
    })

    it('should resolve without callback when DOMContentLoaded event fires', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const promise = domContentLoaded()

      document.dispatchEvent(new Event('DOMContentLoaded'))

      const result = await promise
      expect(result).toBeUndefined()
    })

    it('should handle async callback when DOMContentLoaded event fires', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const asyncCallback = vi.fn().mockImplementation(async () => 'deferred async result')
      const promise = domContentLoaded(asyncCallback)

      document.dispatchEvent(new Event('DOMContentLoaded'))

      const result = await promise
      expect(asyncCallback).toHaveBeenCalledTimes(1)
      expect(result).toBe('deferred async result')
    })

    it('should handle multiple concurrent listeners when DOMContentLoaded event fires', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const firstCallback = vi.fn().mockReturnValue('first')
      const secondCallback = vi.fn().mockReturnValue('second')

      const firstPromise = domContentLoaded(firstCallback)
      const secondPromise = domContentLoaded(secondCallback)

      expect(firstCallback).not.toHaveBeenCalled()
      expect(secondCallback).not.toHaveBeenCalled()

      document.dispatchEvent(new Event('DOMContentLoaded'))

      const [firstResult, secondResult] = await Promise.all([firstPromise, secondPromise])
      expect(firstCallback).toHaveBeenCalledTimes(1)
      expect(secondCallback).toHaveBeenCalledTimes(1)
      expect(firstResult).toBe('first')
      expect(secondResult).toBe('second')
    })
  })

  describe('Lifecycle, isolation, and listener cleanup', () => {
    it('should execute callback only once even if DOMContentLoaded is dispatched multiple times', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const callback = vi.fn().mockReturnValue('single execution')
      const promise = domContentLoaded(callback)

      document.dispatchEvent(new Event('DOMContentLoaded'))
      await promise

      // Dispatch event a second time to verify { once: true } unregisters listener
      document.dispatchEvent(new Event('DOMContentLoaded'))

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should handle sequential invocations independently', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const firstCallback = vi.fn().mockReturnValue('first pass')
      const firstPromise = domContentLoaded(firstCallback)
      document.dispatchEvent(new Event('DOMContentLoaded'))
      const firstResult = await firstPromise

      expect(firstResult).toBe('first pass')
      expect(firstCallback).toHaveBeenCalledTimes(1)

      // Subsequent call when document is now complete
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const secondCallback = vi.fn().mockReturnValue('second pass')
      const secondResult = await domContentLoaded(secondCallback)

      expect(secondResult).toBe('second pass')
      expect(secondCallback).toHaveBeenCalledTimes(1)
    })
  })

  describe('Return values and falsy boundary contracts', () => {
    it('should preserve falsy numeric value 0 returned from callback', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const result = await domContentLoaded(() => 0)
      expect(result).toBe(0)
    })

    it('should preserve falsy boolean value false returned from callback', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const result = await domContentLoaded(() => false)
      expect(result).toBe(false)
    })

    it('should preserve null returned from callback', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const result = await domContentLoaded(() => null)
      expect(result).toBeNull()
    })

    it('should preserve empty string returned from callback', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const result = await domContentLoaded(() => '')
      expect(result).toBe('')
    })

    it('should preserve complex objects and arrays returned from callback', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const payload = { identifier: 101, tags: ['alpha', 'beta'] }
      const result = await domContentLoaded(() => payload)
      expect(result).toEqual(payload)
      expect(result).toBe(payload)
    })

    it('should preserve promises resolving to falsy values when event is deferred', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const promise = domContentLoaded(async () => 0)
      document.dispatchEvent(new Event('DOMContentLoaded'))

      const result = await promise
      expect(result).toBe(0)
    })
  })

  describe('SSR / Non-DOM Runtime Environment', () => {
    it('should execute callback immediately when isDomRuntime() returns false by default (isServer = true)', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      const callback = vi.fn().mockReturnValue('ssr-executed')
      const result = await domContentLoaded(callback)

      expect(callback).toHaveBeenCalledTimes(1)
      expect(result).toBe('ssr-executed')
    })

    it('should not execute callback when isDomRuntime() returns false and isServer is false', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      const callback = vi.fn().mockReturnValue('ssr-skipped')
      const result = await domContentLoaded(callback, false)

      expect(callback).not.toHaveBeenCalled()
      expect(result).toBeUndefined()
    })

    it('should resolve without arguments when isDomRuntime() returns false and isServer is false', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      const result = await domContentLoaded(undefined, false)
      expect(result).toBeUndefined()
    })

    it('should propagate synchronous error thrown in callback in non-DOM environment when isServer is true', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      const errorCallback = () => {
        throw new Error('SSR synchronous error')
      }

      await expect(domContentLoaded(errorCallback, true)).rejects.toThrow('SSR synchronous error')
    })

    it('should propagate rejected promise in non-DOM environment when isServer is true', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      const asyncRejectCallback = async () => {
        throw new Error('SSR asynchronous rejection')
      }

      await expect(domContentLoaded(asyncRejectCallback, true)).rejects.toThrow('SSR asynchronous rejection')
    })
  })

  describe('Error handling and rejections', () => {
    it('should propagate synchronous error thrown in callback when readyState is complete', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const errorCallback = () => {
        throw new Error('Sync immediate error')
      }

      await expect(domContentLoaded(errorCallback)).rejects.toThrow('Sync immediate error')
    })

    it('should propagate rejected promise from callback when readyState is complete', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'complete'
      })

      const asyncRejectCallback = async () => {
        throw new Error('Async immediate rejection')
      }

      await expect(domContentLoaded(asyncRejectCallback)).rejects.toThrow('Async immediate rejection')
    })

    it('should propagate synchronous error thrown in callback when DOMContentLoaded event fires', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const syncErrorCallback = () => {
        throw new Error('Deferred sync error')
      }

      const promise = domContentLoaded(syncErrorCallback)
      document.dispatchEvent(new Event('DOMContentLoaded'))

      await expect(promise).rejects.toThrow('Deferred sync error')
    })

    it('should propagate rejected promise when DOMContentLoaded event fires', async () => {
      Object.defineProperty(document, 'readyState', {
        configurable: true,
        get: () => 'loading'
      })

      const asyncRejectCallback = async () => {
        throw new Error('Deferred event rejection')
      }

      const promise = domContentLoaded(asyncRejectCallback)
      document.dispatchEvent(new Event('DOMContentLoaded'))

      await expect(promise).rejects.toThrow('Deferred event rejection')
    })
  })
})
