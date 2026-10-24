// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperDelay } from '../DraggableWrapperDelay'

describe('DraggableWrapperDelay', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return default delay of 640ms when not specified', () => {
      const delay = new DraggableWrapperDelay({})
      expect(delay.delay).toBe(640)
    })

    it('should return explicit delay when provided in props', () => {
      const delay = new DraggableWrapperDelay({ delay: 300 })
      expect(delay.delay).toBe(300)
    })

    it('should manage delay timer execution and status', () => {
      vi.useFakeTimers()
      const delay = new DraggableWrapperDelay({ delay: 200 })
      const callback = vi.fn()

      expect(delay.is()).toBe(false)
      delay.start(callback)
      expect(delay.is()).toBe(true)

      vi.advanceTimersByTime(199)
      expect(callback).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1)
      expect(callback).toHaveBeenCalledTimes(1)
      expect(delay.is()).toBe(false)

      vi.useRealTimers()
    })

    it('should cancel active timer and return true on stop()', () => {
      vi.useFakeTimers()
      const delay = new DraggableWrapperDelay({ delay: 200 })
      const callback = vi.fn()

      delay.start(callback)
      expect(delay.is()).toBe(true)

      const stopped = delay.stop()
      expect(stopped).toBe(true)
      expect(delay.is()).toBe(false)

      vi.advanceTimersByTime(200)
      expect(callback).not.toHaveBeenCalled()

      vi.useRealTimers()
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should parse string delay values into numbers', () => {
      const delay = new DraggableWrapperDelay({ delay: '450' as any })
      expect(delay.delay).toBe(450)
    })

    it('should fall back to 640 when delay is undefined or empty string', () => {
      expect(new DraggableWrapperDelay({ delay: undefined }).delay).toBe(640)
      expect(new DraggableWrapperDelay({ delay: '' as any }).delay).toBe(640)
    })

    it('should return false on stop() when no timer is active', () => {
      const delay = new DraggableWrapperDelay({})
      expect(delay.is()).toBe(false)
      expect(delay.stop()).toBe(false)
    })

    it('should cancel prior pending timer when start() is called repeatedly', () => {
      vi.useFakeTimers()
      const delay = new DraggableWrapperDelay({ delay: 200 })
      const callback1 = vi.fn()
      const callback2 = vi.fn()

      delay.start(callback1)
      vi.advanceTimersByTime(100)

      delay.start(callback2)
      vi.advanceTimersByTime(150)
      expect(callback1).not.toHaveBeenCalled()
      expect(callback2).not.toHaveBeenCalled()

      vi.advanceTimersByTime(50)
      expect(callback1).not.toHaveBeenCalled()
      expect(callback2).toHaveBeenCalledTimes(1)

      vi.useRealTimers()
    })
  })

  describe('Lifecycle and cleanup', () => {
    it('should clear active timeout on onUnmounted()', () => {
      vi.useFakeTimers()
      const delay = new DraggableWrapperDelay({ delay: 300 })
      const callback = vi.fn()

      delay.start(callback)
      expect(delay.is()).toBe(true)

      delay.onUnmounted()
      expect(delay.is()).toBe(false)

      vi.advanceTimersByTime(300)
      expect(callback).not.toHaveBeenCalled()

      vi.useRealTimers()
    })
  })

  describe('Statefulness and instance isolation', () => {
    it('should maintain independent timers between distinct instances', () => {
      vi.useFakeTimers()
      const delay1 = new DraggableWrapperDelay({ delay: 100 })
      const delay2 = new DraggableWrapperDelay({ delay: 300 })
      const cb1 = vi.fn()
      const cb2 = vi.fn()

      delay1.start(cb1)
      delay2.start(cb2)

      expect(delay1.is()).toBe(true)
      expect(delay2.is()).toBe(true)

      delay1.stop()
      expect(delay1.is()).toBe(false)
      expect(delay2.is()).toBe(true)

      vi.advanceTimersByTime(300)
      expect(cb1).not.toHaveBeenCalled()
      expect(cb2).toHaveBeenCalledTimes(1)

      vi.useRealTimers()
    })
  })
})
