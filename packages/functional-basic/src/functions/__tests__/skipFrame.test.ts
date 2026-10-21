/**
 * @vitest-environment jsdom
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as domRuntime from '../isDomRuntime'
import { skipFrame } from '../skipFrame'

describe('skipFrame', () => {
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

  it('should resolve and skip 1 frame by default in DOM', async () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

    await skipFrame()

    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(1)
  })

  it('should skip specified number of frames', async () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

    await skipFrame(undefined, 3)

    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(3)
  })

  it('should execute callback and return result after skipping frames', async () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

    const result = await skipFrame(() => 'done', 2)

    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(2)
    expect(result).toBe('done')
  })

  it('should resolve immediately and not use requestAnimationFrame if not in DOM', async () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

    const result = await skipFrame(() => 'ssr', 3)

    expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
    expect(result).toBe('ssr')
  })

  it('should resolve immediately if count is 0 or negative', async () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

    await skipFrame(undefined, 0)
    await skipFrame(undefined, -1)

    expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
  })

  it('should reject if callback throws an error', async () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)

    await expect(skipFrame(() => {
      throw new Error('Test error')
    }, 1)).rejects.toThrow('Test error')
  })
})
