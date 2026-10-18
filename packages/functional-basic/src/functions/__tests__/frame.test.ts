/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { frame } from '../frame'
import * as domRuntime from '../isDomRuntime'

describe('frame', () => {
  let mockRequestAnimationFrame: ReturnType<typeof vi.spyOn>
  let mockTime: number

  beforeEach(() => {
    mockTime = 1000
    mockRequestAnimationFrame = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      mockTime += 16.66
      cb(mockTime)
      return 1
    })
  })

  afterEach(() => {
    mockRequestAnimationFrame.mockRestore()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should call callback and requestAnimationFrame once when next is not provided in DOM', () => {
      const callbackFn = vi.fn()
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

      frame(callbackFn)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(1)
      expect(callbackFn).toHaveBeenCalledTimes(1)
    })

    it('should loop repeatedly while next returns true', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callbackFn = vi.fn()
      let count = 0
      const nextFn = vi.fn(() => {
        count++
        return count < 3
      })
      const endFn = vi.fn()

      frame(callbackFn, nextFn, endFn)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(3)
      expect(callbackFn).toHaveBeenCalledTimes(3)
      expect(nextFn).toHaveBeenCalledTimes(3)
      expect(endFn).toHaveBeenCalledTimes(1)
    })

    it('should stop looping and call end callback as soon as next returns false', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callbackFn = vi.fn()
      const nextFn = vi.fn(() => false)
      const endFn = vi.fn()

      frame(callbackFn, nextFn, endFn)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(1)
      expect(callbackFn).toHaveBeenCalledTimes(1)
      expect(nextFn).toHaveBeenCalledTimes(1)
      expect(endFn).toHaveBeenCalledTimes(1)
    })

    it('should complete gracefully without end callback when next returns false', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callbackFn = vi.fn()

      expect(() => {
        frame(callbackFn, () => false)
      }).not.toThrow()

      expect(callbackFn).toHaveBeenCalledTimes(1)
    })
  })

  describe('Frame timestamp precision and propagation', () => {
    it('should pass DOMHighResTimeStamp to callback and next in DOM', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callbackFn = vi.fn()
      const nextFn = vi.fn(() => false)

      frame(callbackFn, nextFn)

      expect(callbackFn).toHaveBeenCalledWith(expect.any(Number))
      expect(nextFn).toHaveBeenCalledWith(expect.any(Number))
    })

    it('should pass increasing timestamps across consecutive frames', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const timestamps: number[] = []
      let iterations = 0

      frame(
        timestamp => timestamps.push(timestamp),
        () => {
          iterations++
          return iterations < 3
        }
      )

      expect(timestamps).toHaveLength(3)
      expect(timestamps[1]).toBeGreaterThan(timestamps[0])
      expect(timestamps[2]).toBeGreaterThan(timestamps[1])
    })
  })

  describe('SSR safety and non-DOM execution', () => {
    it('should call callback immediately and not use requestAnimationFrame if not in DOM', () => {
      const callbackFn = vi.fn()
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      frame(callbackFn)

      expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
      expect(callbackFn).toHaveBeenCalledTimes(1)
      expect(callbackFn).toHaveBeenCalledWith(0)
    })

    it('should not loop in SSR even if next returns true', () => {
      const callbackFn = vi.fn()
      const nextFn = vi.fn(() => true)
      const endFn = vi.fn()
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      frame(callbackFn, nextFn, endFn)

      expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
      expect(callbackFn).toHaveBeenCalledTimes(1)
      expect(nextFn).not.toHaveBeenCalled()
      expect(endFn).toHaveBeenCalledTimes(1)
    })
  })

  describe('Concurrency and isolation', () => {
    it('should allow multiple independent frame loops to run concurrently without interference', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const loop1Calls: number[] = []
      const loop2Calls: number[] = []
      let count1 = 0
      let count2 = 0

      frame(
        timestamp => loop1Calls.push(timestamp),
        () => ++count1 < 2
      )

      frame(
        timestamp => loop2Calls.push(timestamp),
        () => ++count2 < 4
      )

      expect(loop1Calls).toHaveLength(2)
      expect(loop2Calls).toHaveLength(4)
    })
  })
})
