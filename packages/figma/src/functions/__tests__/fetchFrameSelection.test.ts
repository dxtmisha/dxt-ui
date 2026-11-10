import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFrameSelection } from '../fetchFrameSelection'
import { StorageCallback } from '@dxtmisha/functional-basic'
import { UI_FIGMA_FRAME_GET_SELECTION, type UiFigmaFramesList } from '../../types/framesTypes'

const {
  mockPost,
  mockAdd,
  mockAddCallback,
  mockIsLoading,
  mockPreparation,
  mockRun,
  getRegisteredListener
} = vi.hoisted(() => {
  let registeredListener: ((data: UiFigmaFramesList) => void) | undefined

  const mockPost = vi.fn()
  const mockAdd = vi.fn((type: string, callback: (data: UiFigmaFramesList) => void) => {
    if (type === 'ui-figma-frame-get-selection') {
      registeredListener = callback
    }
  })
  const mockAddCallback = vi.fn().mockReturnThis()
  const mockIsLoading = vi.fn(() => false)
  const mockPreparation = vi.fn().mockReturnThis()
  const mockRun = vi.fn().mockResolvedValue({})

  return {
    mockPost,
    mockAdd,
    mockAddCallback,
    mockIsLoading,
    mockPreparation,
    mockRun,
    getRegisteredListener: () => registeredListener
  }
})

vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost,
      add: mockAdd
    }))
  }
}))

vi.mock('@dxtmisha/functional-basic', () => ({
  StorageCallback: {
    getInstance: vi.fn(() => ({
      addCallback: mockAddCallback,
      isLoading: mockIsLoading,
      preparation: mockPreparation,
      run: mockRun
    }))
  }
}))

describe('fetchFrameSelection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockIsLoading.mockReturnValue(false)
  })

  it('should initialize messenger listener and request frame selection on first call', () => {
    const callback = vi.fn()
    fetchFrameSelection(callback)

    expect(mockAdd).toHaveBeenCalledTimes(1)
    expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_FRAME_GET_SELECTION, expect.any(Function))
    expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:frame-selection:get')
    expect(mockAddCallback).toHaveBeenCalledWith(callback)
    expect(mockPreparation).toHaveBeenCalledTimes(1)
    expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAME_GET_SELECTION)

    // Second call should not re-register listener
    fetchFrameSelection(vi.fn())
    expect(mockAdd).toHaveBeenCalledTimes(1)
  })

  it('should not call preparation() or post() if already loading', () => {
    mockIsLoading.mockReturnValue(true)
    const callback = vi.fn()

    fetchFrameSelection(callback)

    expect(mockAddCallback).toHaveBeenCalledWith(callback)
    expect(mockPreparation).not.toHaveBeenCalled()
    expect(mockPost).not.toHaveBeenCalled()
  })

  it('should route incoming messenger data to StorageCallback.run()', () => {
    const callback = vi.fn()
    fetchFrameSelection(callback)

    const listener = getRegisteredListener()
    expect(listener).toBeTypeOf('function')

    const mockFrames: UiFigmaFramesList = [{ id: '1:2', name: 'Frame 1' }]
    listener?.(mockFrames)

    expect(StorageCallback.getInstance).toHaveBeenLastCalledWith('figma:frame-selection:get')
    expect(mockRun).toHaveBeenCalledWith(mockFrames)
  })
})
