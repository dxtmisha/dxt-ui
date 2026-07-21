// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { DraggableWrapperDelay } from '../DraggableWrapperDelay'

describe('DraggableWrapperDelay', () => {
  it('should return correct default and explicit delay', () => {
    const delayDefault = new DraggableWrapperDelay({})
    expect(delayDefault.delay).toBe(640)

    const delayExplicit = new DraggableWrapperDelay({ delay: 300 })
    expect(delayExplicit.delay).toBe(300)
  })

  it('should manage delay timer start and stop', () => {
    vi.useFakeTimers()
    const delay = new DraggableWrapperDelay({ delay: 300 })
    const callback = vi.fn()

    expect(delay.is()).toBe(false)
    expect(delay.stop()).toBe(false)

    delay.start(callback)
    expect(delay.is()).toBe(true)

    vi.advanceTimersByTime(299)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(delay.is()).toBe(false)

    // Stop logic
    delay.start(callback)
    expect(delay.is()).toBe(true)
    expect(delay.stop()).toBe(true)
    expect(delay.is()).toBe(false)

    vi.useRealTimers()
  })
})
