import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { UI_FIGMA_FRAMES_POST_NAME, type UiFigmaFramesList } from '../../types/framesTypes'

const { mockPost, mockAdd, mockRemove, getRegisteredHandler, mockMessenger } = vi.hoisted(() => {
  let registeredHandler: ((data: UiFigmaFramesList) => void) | undefined

  const mockPost = vi.fn()
  const mockRemove = vi.fn()
  const mockMessenger = {
    post: mockPost,
    add: vi.fn(),
    remove: mockRemove
  }

  const mockAdd = vi.fn((type: string, callback: (data: UiFigmaFramesList) => void) => {
    if (type === 'ui-figma-frames-list') {
      registeredHandler = callback
    }
    return mockMessenger
  })
  mockMessenger.add = mockAdd

  return {
    mockPost,
    mockAdd,
    mockRemove,
    mockMessenger,
    getRegisteredHandler: () => registeredHandler
  }
})

vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => mockMessenger)
  }
}))

describe('fetchTopLevelFrames', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should request top level frames and remove listener after receiving response', async () => {
      const { fetchTopLevelFrames } = await import('../fetchTopLevelFrames')
      const callback = vi.fn()

      fetchTopLevelFrames(callback)

      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_FRAMES_POST_NAME, expect.any(Function))
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_POST_NAME)
      expect(callback).not.toHaveBeenCalled()

      const handler = getRegisteredHandler()
      expect(handler).toBeTypeOf('function')
      const sampleFrames: UiFigmaFramesList = [
        { id: '1:1', name: 'Frame 1' },
        { id: '2:2', name: 'Frame 2' }
      ]
      handler?.(sampleFrames)

      expect(callback).toHaveBeenCalledWith(sampleFrames)
      expect(mockRemove).toHaveBeenCalledWith(UI_FIGMA_FRAMES_POST_NAME, expect.any(Function))
    })

    it('should return cached frames immediately on subsequent calls without reposting', async () => {
      const { fetchTopLevelFrames } = await import('../fetchTopLevelFrames')
      const callback1 = vi.fn()
      const callback2 = vi.fn()

      fetchTopLevelFrames(callback1)
      getRegisteredHandler()?.([{ id: 'cached:1', name: 'Cached Frame' }])

      expect(callback1).toHaveBeenCalledWith([{ id: 'cached:1', name: 'Cached Frame' }])
      expect(mockPost).toHaveBeenCalledTimes(1)

      // Subsequent call must return cached frames synchronously
      fetchTopLevelFrames(callback2)
      expect(callback2).toHaveBeenCalledWith([{ id: 'cached:1', name: 'Cached Frame' }])
      expect(mockPost).toHaveBeenCalledTimes(1)
    })
  })

  describe('Concurrency and polling when loading is true', () => {
    it('should debounce concurrent requests with setTimeout(160) until first fetch completes', async () => {
      const { fetchTopLevelFrames } = await import('../fetchTopLevelFrames')
      const callback1 = vi.fn()
      const callback2 = vi.fn()

      // Initial request sets loading: true
      fetchTopLevelFrames(callback1)
      expect(mockPost).toHaveBeenCalledTimes(1)

      // Concurrent request while loading is in progress
      fetchTopLevelFrames(callback2)
      expect(callback2).not.toHaveBeenCalled()

      // Resolve first request
      const loadedFrames: UiFigmaFramesList = [{ id: 'res:1', name: 'Resolved Frame' }]
      getRegisteredHandler()?.(loadedFrames)

      expect(callback1).toHaveBeenCalledWith(loadedFrames)
      expect(callback2).not.toHaveBeenCalled()

      // Advance timers by 160ms for queued call
      vi.advanceTimersByTime(160)
      expect(callback2).toHaveBeenCalledWith(loadedFrames)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should safely process empty frames list', async () => {
      const { fetchTopLevelFrames } = await import('../fetchTopLevelFrames')
      const callback = vi.fn()

      fetchTopLevelFrames(callback)
      getRegisteredHandler()?.([])

      expect(callback).toHaveBeenCalledWith([])
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve multilingual frame names in payload', async () => {
      const { fetchTopLevelFrames } = await import('../fetchTopLevelFrames')
      const callback = vi.fn()

      fetchTopLevelFrames(callback)
      const unicodeFrames: UiFigmaFramesList = [
        { id: '1:1', name: 'Главный экран 🚀' },
        { id: '2:2', name: 'Màn hình chính 🇻🇳' }
      ]
      getRegisteredHandler()?.(unicodeFrames)

      expect(callback).toHaveBeenCalledWith(unicodeFrames)
    })
  })
})
