import { describe, it, expect, vi, beforeEach } from 'vitest'
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
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  it('should request top level frames and handle non-empty as well as empty lists properly', async () => {
    const { fetchTopLevelFrames } = await import('../fetchTopLevelFrames')
    const callback = vi.fn()

    fetchTopLevelFrames(callback)

    expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_FRAMES_POST_NAME, expect.any(Function))
    expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_POST_NAME)
    expect(callback).not.toHaveBeenCalled()

    // Simulate incoming data with empty list (0 frames in document)
    const handler = getRegisteredHandler()
    expect(handler).toBeTypeOf('function')
    const emptyFrames: UiFigmaFramesList = []
    handler?.(emptyFrames)

    expect(callback).toHaveBeenCalledWith(emptyFrames)
    expect(mockRemove).toHaveBeenCalledWith(UI_FIGMA_FRAMES_POST_NAME, expect.any(Function))

    // Second call should return cached frames
    const cachedCallback = vi.fn()
    fetchTopLevelFrames(cachedCallback)
    expect(cachedCallback).toHaveBeenCalledWith(emptyFrames)
  })
})
