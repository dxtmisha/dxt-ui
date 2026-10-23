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
    mockRequestAnimationFrame = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((frameCallback: FrameRequestCallback) => {
      mockTime += 16.66
      frameCallback(mockTime)
      return 1
    })
  })

  afterEach(() => {
    mockRequestAnimationFrame.mockRestore()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should call callback and requestAnimationFrame once when next is not provided in DOM', () => {
      const callback = vi.fn()
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

      frame(callback)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should loop repeatedly while next returns true', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callback = vi.fn()
      let count = 0
      const nextCallback = vi.fn(() => {
        count++
        return count < 3
      })
      const endCallback = vi.fn()

      frame(callback, nextCallback, endCallback)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(3)
      expect(callback).toHaveBeenCalledTimes(3)
      expect(nextCallback).toHaveBeenCalledTimes(3)
      expect(endCallback).toHaveBeenCalledTimes(1)
    })

    it('should stop looping and call end callback as soon as next returns false', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callback = vi.fn()
      const nextCallback = vi.fn(() => false)
      const endCallback = vi.fn()

      frame(callback, nextCallback, endCallback)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledTimes(1)
      expect(nextCallback).toHaveBeenCalledTimes(1)
      expect(endCallback).toHaveBeenCalledTimes(1)
    })

    it('should complete gracefully without end callback when next returns false', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callback = vi.fn()

      expect(() => {
        frame(callback, () => false)
      }).not.toThrow()

      expect(callback).toHaveBeenCalledTimes(1)
    })
  })

  describe('Frame timestamp precision and propagation', () => {
    it('should pass DOMHighResTimeStamp to callback and next in DOM', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callback = vi.fn()
      const nextCallback = vi.fn(() => false)

      frame(callback, nextCallback)

      expect(callback).toHaveBeenCalledWith(expect.any(Number))
      expect(nextCallback).toHaveBeenCalledWith(expect.any(Number))
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
      const callback = vi.fn()
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      frame(callback)

      expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith(0)
    })

    it('should not loop in SSR even if next returns true', () => {
      const callback = vi.fn()
      const nextCallback = vi.fn(() => true)
      const endCallback = vi.fn()
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      frame(callback, nextCallback, endCallback)

      expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
      expect(callback).toHaveBeenCalledTimes(1)
      expect(nextCallback).not.toHaveBeenCalled()
      expect(endCallback).toHaveBeenCalledTimes(1)
    })

    it('should stop looping and invoke end callback if DOM runtime becomes unavailable mid-loop', () => {
      const domRuntimeSpy = vi.spyOn(domRuntime, 'isDomRuntime')
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)

      const callback = vi.fn()
      const nextCallback = vi.fn(() => true)
      const endCallback = vi.fn()

      frame(callback, nextCallback, endCallback)

      expect(domRuntimeSpy).toHaveBeenCalledTimes(2)
      expect(callback).toHaveBeenCalledTimes(1)
      expect(nextCallback).not.toHaveBeenCalled()
      expect(endCallback).toHaveBeenCalledTimes(1)
    })
  })

  describe('Concurrency and isolation', () => {
    it('should allow multiple independent frame loops to run concurrently without interference', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const firstLoopCalls: number[] = []
      const secondLoopCalls: number[] = []
      let firstCount = 0
      let secondCount = 0

      frame(
        timestamp => firstLoopCalls.push(timestamp),
        () => ++firstCount < 2
      )

      frame(
        timestamp => secondLoopCalls.push(timestamp),
        () => ++secondCount < 4
      )

      expect(firstLoopCalls).toHaveLength(2)
      expect(secondLoopCalls).toHaveLength(4)
    })
  })
})
