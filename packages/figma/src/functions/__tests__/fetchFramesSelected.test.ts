import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { UI_FIGMA_FRAMES_SELECTED_POST_NAME } from '../../types/framesTypes'

const { mockPost, mockAdd, getRegisteredHandler, mockMessenger } = vi.hoisted(() => {
  let registeredHandler: ((data: string[]) => void) | undefined

  const mockPost = vi.fn()
  const mockMessenger = {
    post: mockPost,
    add: vi.fn()
  }

  const mockAdd = vi.fn((type: string, callback: (data: string[]) => void) => {
    if (type === 'ui-figma-frames-selected') {
      registeredHandler = callback
    }
    return mockMessenger
  })
  mockMessenger.add = mockAdd

  return {
    mockPost,
    mockAdd,
    mockMessenger,
    getRegisteredHandler: () => registeredHandler
  }
})

vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => mockMessenger)
  }
}))

describe('fetchFramesSelected', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should request selected frames from plugin with once: true on initial call', async () => {
      const { fetchFramesSelected } = await import('../fetchFramesSelected')
      const callback = vi.fn()

      fetchFramesSelected(callback)

      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_POST_NAME, expect.any(Function), true)
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_POST_NAME)
      expect(callback).not.toHaveBeenCalled()

      // Deliver plugin response
      const handler = getRegisteredHandler()
      expect(handler).toBeTypeOf('function')
      handler?.(['frame-1', 'frame-2'])

      expect(callback).toHaveBeenCalledWith(['frame-1', 'frame-2'])
    })

    it('should immediately return cached frames on subsequent calls without reposting', async () => {
      const { fetchFramesSelected } = await import('../fetchFramesSelected')
      const callback1 = vi.fn()
      const callback2 = vi.fn()

      fetchFramesSelected(callback1)
      getRegisteredHandler()?.(['cached-1'])

      expect(callback1).toHaveBeenCalledWith(['cached-1'])
      expect(mockPost).toHaveBeenCalledTimes(1)

      // Second call must return immediately from memory cache
      fetchFramesSelected(callback2)
      expect(callback2).toHaveBeenCalledWith(['cached-1'])
      expect(mockPost).toHaveBeenCalledTimes(1)
    })
  })

  describe('Concurrency and polling when loading is true', () => {
    it('should queue concurrent request with setTimeout(160) and resolve after loading finishes', async () => {
      const { fetchFramesSelected } = await import('../fetchFramesSelected')
      const callback1 = vi.fn()
      const callback2 = vi.fn()

      // First call initiates loading
      fetchFramesSelected(callback1)
      expect(mockPost).toHaveBeenCalledTimes(1)

      // Second call happens while first is still pending (loading === true)
      fetchFramesSelected(callback2)
      expect(callback2).not.toHaveBeenCalled()

      // Deliver data for the first call
      getRegisteredHandler()?.(['frame-parallel'])
      expect(callback1).toHaveBeenCalledWith(['frame-parallel'])
      expect(callback2).not.toHaveBeenCalled()

      // Advance timers by 160ms so queued call executes and picks up cached data
      vi.advanceTimersByTime(160)
      expect(callback2).toHaveBeenCalledWith(['frame-parallel'])
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle empty selected frames array safely', async () => {
      const { fetchFramesSelected } = await import('../fetchFramesSelected')
      const callback = vi.fn()

      fetchFramesSelected(callback)
      getRegisteredHandler()?.([])

      expect(callback).toHaveBeenCalledWith([])
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Unicode frame IDs in received selection', async () => {
      const { fetchFramesSelected } = await import('../fetchFramesSelected')
      const callback = vi.fn()

      fetchFramesSelected(callback)
      const unicodeIds = ['1:1_фрейм_🚀', '2:2_giao_diện_🇻🇳']
      getRegisteredHandler()?.(unicodeIds)

      expect(callback).toHaveBeenCalledWith(unicodeIds)
    })
  })
})
