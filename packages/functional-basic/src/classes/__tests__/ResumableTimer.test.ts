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

  it('should use default delay of 320ms when delay is omitted', () => {
    const callback = vi.fn()
    new ResumableTimer(callback)

    vi.advanceTimersByTime(319)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should not start immediately if blockStart is true', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000, true)

    vi.advanceTimersByTime(1000)
    expect(callback).not.toHaveBeenCalled()

    expect(timer.resume()).toBe(timer)
    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should pause and resume correctly', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(500)
    expect(timer.pause()).toBe(timer)

    vi.advanceTimersByTime(1000)
    expect(callback).not.toHaveBeenCalled()

    timer.resume()
    vi.advanceTimersByTime(400)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should ignore redundant resume() while timer is already running', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(400)
    timer.resume()

    vi.advanceTimersByTime(600)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should call callback immediately if the remaining time is 0 or less during resume', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(500)
    timer.pause()

    // @ts-expect-error: Setting protected remaining property for edge case testing
    timer.remaining = 0
    timer.resume()
    expect(callback).toHaveBeenCalledTimes(1)

    callback.mockClear()
    timer.clear()
    const secondTimer = new ResumableTimer(callback, 1000, true)
    // @ts-expect-error: Setting protected remaining property for edge case testing
    secondTimer.remaining = -50
    secondTimer.resume()
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should clamp remaining time to 0 if elapsed time exceeds delay on pause()', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 500)

    // @ts-expect-error: Setting startTime into the past to simulate lag before pause
    timer.startTime = Date.now() - 1000
    timer.pause()

    // @ts-expect-error: Reading protected remaining property
    expect(timer.remaining).toBe(0)
  })

  it('should reset correctly', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(500)
    expect(timer.reset()).toBe(timer)

    vi.advanceTimersByTime(500)
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(500)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should clear correctly', () => {
    const callback = vi.fn()
    const timer = new ResumableTimer(callback, 1000)

    vi.advanceTimersByTime(500)
    expect(timer.clear()).toBe(timer)

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

    vi.advanceTimersByTime(200)
    timer.pause()

    vi.advanceTimersByTime(500)
    timer.resume()

    vi.advanceTimersByTime(300)
    timer.pause()

    vi.advanceTimersByTime(1000)
    timer.resume()

    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(500)
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
