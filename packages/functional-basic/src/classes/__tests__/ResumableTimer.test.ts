import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { ResumableTimer } from '../ResumableTimer'

describe('ResumableTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('should call the callback after the specified delay', () => {
    const callback = vi.fn()
    new ResumableTimer(callback, 1000)

    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('it should not start immediately if blockStart is true', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000, true)

    vi.advanceTimersByTime(1000)
    expect(callback).not.toHaveBeenCalled()

    timer.resume()
    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should pause and resume correctly', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(500)
    timer.pause()

    vi.advanceTimersByTime(1000)
    expect(callback).not.toHaveBeenCalled()

    timer.resume()
    vi.advanceTimersByTime(400)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should call callback immediately if the remaining time is 0 or less during resume', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(500)
    timer.pause()

    // Case 1: time passed beyond delay while paused
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    timer.remaining = 0
    timer.resume()
    expect(callback).toHaveBeenCalledTimes(1)

    // Case 2: remaining set to less than 0
    callback.mockClear()
    timer.clear()
    const timer2 = new ResumableTimer(callback, 1000, true)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    timer2.remaining = -50
    timer2.resume()
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should reset correctly', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(500)
    timer.reset()

    vi.advanceTimersByTime(500)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(500)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should clear correctly', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(500)
    timer.clear()

    vi.advanceTimersByTime(1000)
    expect(callback).not.toHaveBeenCalled()
  })

  it('should not call callback twice if already completed', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)

    timer.resume()
    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should handle multiple pauses and resumes', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(200) // 800 left
    timer.pause()

    vi.advanceTimersByTime(500)
    timer.resume() // Start with 800

    vi.advanceTimersByTime(300) // 500 left
    timer.pause()

    vi.advanceTimersByTime(1000)
    timer.resume()

    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(500)
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
