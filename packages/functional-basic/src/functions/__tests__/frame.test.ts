/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { frame } from '../frame'
import * as domRuntime from '../isDomRuntime'

describe('frame', () => {
  let mockRequestAnimationFrame: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    mockRequestAnimationFrame = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      cb(performance.now())
      return 1
    })
  })

  afterEach(() => {
    mockRequestAnimationFrame.mockRestore()
    vi.restoreAllMocks()
  })

  it('should call callback and requestAnimationFrame if in DOM', () => {
    const callbackFn = vi.fn()
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

    frame(callbackFn)

    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(1)
    expect(callbackFn).toHaveBeenCalledTimes(1)
  })

  it('should call callback immediately and not use requestAnimationFrame if not in DOM', () => {
    const callbackFn = vi.fn()
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

    frame(callbackFn)

    expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
    expect(callbackFn).toHaveBeenCalledTimes(1)
  })

  it('should loop if next returns true', () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
    const callbackFn = vi.fn()
    let count = 0
    const nextFn = vi.fn(() => {
      count++
      return count < 3
    })
    const endFn = vi.fn()

    frame(callbackFn, nextFn, endFn)

    // Initial frame + 2 more frames based on nextFn
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(3)
    expect(callbackFn).toHaveBeenCalledTimes(3)
    expect(nextFn).toHaveBeenCalledTimes(3)
    expect(endFn).toHaveBeenCalledTimes(1)
  })

  it('should not loop if next is not provided or returns false', () => {
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
})
