/**
 * @vitest-environment jsdom
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as domRuntime from '../isDomRuntime'
import { skipFrame } from '../skipFrame'

describe('skipFrame', () => {
  let mockRequestAnimationFrame: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    mockRequestAnimationFrame = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((frameCallback: FrameRequestCallback) => {
      frameCallback(performance.now())
      return 1
    })
  })

  afterEach(() => {
    mockRequestAnimationFrame.mockRestore()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should resolve and skip 1 animation frame by default in DOM runtime', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

      const result = await skipFrame()

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(1)
      expect(result).toBeUndefined()
    })

    it('should skip the specified number of frames before resolving', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

      await skipFrame(undefined, 3)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(3)
    })

    it('should execute synchronous callback on the target frame and resolve with its return value', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callback = vi.fn(() => 'done')

      const result = await skipFrame(callback, 2)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(2)
      expect(callback).toHaveBeenCalledTimes(1)
      expect(result).toBe('done')
    })

    it('should await asynchronous Promise-returning callback on the target frame', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

      const result = await skipFrame(async () => {
        return 42
      }, 2)

      expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(2)
      expect(result).toBe(42)
    })
  })

  describe('Boundary values and frame count thresholds', () => {
    it('should resolve immediately without calling requestAnimationFrame when count is 0 or negative', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const callback = vi.fn(() => 'immediate')

      const zeroResult = await skipFrame(callback, 0)
      const negativeResult = await skipFrame(callback, -2)

      expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
      expect(callback).toHaveBeenCalledTimes(2)
      expect(zeroResult).toBe('immediate')
      expect(negativeResult).toBe('immediate')
    })

    it('should not invoke callback until the final frame is reached', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
      const pendingFrameCallbacks: FrameRequestCallback[] = []

      mockRequestAnimationFrame.mockImplementation((frameCallback: FrameRequestCallback) => {
        pendingFrameCallbacks.push(frameCallback)
        return pendingFrameCallbacks.length
      })

      const callback = vi.fn(() => 'completed')
      const promise = skipFrame(callback, 2)

      expect(pendingFrameCallbacks).toHaveLength(1)
      expect(callback).not.toHaveBeenCalled()

      // Trigger frame 1
      pendingFrameCallbacks[0]!(performance.now())
      expect(pendingFrameCallbacks).toHaveLength(2)
      expect(callback).not.toHaveBeenCalled()

      // Trigger frame 2
      pendingFrameCallbacks[1]!(performance.now())
      const result = await promise

      expect(callback).toHaveBeenCalledTimes(1)
      expect(result).toBe('completed')
    })
  })

  describe('SSR and non-DOM environment safety', () => {
    it('should resolve immediately without requestAnimationFrame when isDomRuntime() is false', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      const result = await skipFrame(() => 'ssr-value', 3)

      expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
      expect(result).toBe('ssr-value')
    })
  })

  describe('Error handling and promise rejection', () => {
    it('should reject the returned promise if synchronous callback throws inside animation frame', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

      await expect(skipFrame(() => {
        throw new Error('Frame callback error')
      }, 1)).rejects.toThrow('Frame callback error')
    })

    it('should reject the returned promise if async callback rejects inside animation frame', async () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

      await expect(skipFrame(async () => {
        throw new Error('Async frame error')
      }, 2)).rejects.toThrow('Async frame error')
    })
  })
})
