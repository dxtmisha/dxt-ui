import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { sleep } from '../sleep'

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return a Promise that resolves to undefined after the specified delay', async () => {
      let isResolved = false
      const promise = sleep(100).then((value) => {
        isResolved = true
        return value
      })

      expect(promise).toBeInstanceOf(Promise)
      expect(isResolved).toBe(false)

      vi.advanceTimersByTime(99)
      await Promise.resolve()
      expect(isResolved).toBe(false)

      vi.advanceTimersByTime(1)
      const result = await promise
      expect(isResolved).toBe(true)
      expect(result).toBeUndefined()
    })

    it('should pass the exact millisecond duration to setTimeout', async () => {
      const setTimeoutSpy = vi.spyOn(globalThis, 'setTimeout')

      const promise = sleep(250)
      expect(setTimeoutSpy).toHaveBeenCalledTimes(1)
      expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 250)

      vi.advanceTimersByTime(250)
      await promise
    })
  })

  describe('Boundary values and concurrent execution', () => {
    it('should resolve when delay is 0 milliseconds', async () => {
      const promise = sleep(0)
      vi.advanceTimersByTime(0)
      await expect(promise).resolves.toBeUndefined()
    })

    it('should resolve when delay is negative', async () => {
      const promise = sleep(-50)
      vi.advanceTimersByTime(0)
      await expect(promise).resolves.toBeUndefined()
    })

    it('should resolve multiple concurrent sleep timers in order of their duration', async () => {
      const completionOrder: string[] = []

      const slowPromise = sleep(300).then(() => completionOrder.push('slow'))
      const fastPromise = sleep(100).then(() => completionOrder.push('fast'))
      const mediumPromise = sleep(200).then(() => completionOrder.push('medium'))

      vi.advanceTimersByTime(100)
      await fastPromise
      expect(completionOrder).toEqual(['fast'])

      vi.advanceTimersByTime(100)
      await mediumPromise
      expect(completionOrder).toEqual(['fast', 'medium'])

      vi.advanceTimersByTime(100)
      await slowPromise
      expect(completionOrder).toEqual(['fast', 'medium', 'slow'])
    })
  })
})
