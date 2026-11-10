import { describe, it, expect, vi, beforeEach } from 'vitest'
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
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  it('should request selected frames from plugin with once: true', async () => {
    const { fetchFramesSelected } = await import('../fetchFramesSelected')
    const callback = vi.fn()

    fetchFramesSelected(callback)

    expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_POST_NAME, expect.any(Function), true)
    expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_POST_NAME)
    expect(callback).not.toHaveBeenCalled()

    // Simulate incoming data
    const handler = getRegisteredHandler()
    expect(handler).toBeTypeOf('function')
    handler?.(['frame-1', 'frame-2'])

    expect(callback).toHaveBeenCalledWith(['frame-1', 'frame-2'])

    // Calling again should return cached result immediately
    const callbackCached = vi.fn()
    fetchFramesSelected(callbackCached)
    expect(callbackCached).toHaveBeenCalledWith(['frame-1', 'frame-2'])
  })
})
