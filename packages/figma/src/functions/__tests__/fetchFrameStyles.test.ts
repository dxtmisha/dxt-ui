import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFrameStyles } from '../fetchFrameStyles'
import { StorageCallback } from '@dxtmisha/functional-basic'
import {
  FIGMA_FRAME_STYLES_MESSENGER_NAME,
  type UiFigmaFrameStylesMessengerResponse
} from '../../types/figmaStylesTypes'

const {
  mockAdd,
  mockAddCallback,
  mockRun,
  getRegisteredListener
} = vi.hoisted(() => {
  let registeredListener: ((data: UiFigmaFrameStylesMessengerResponse) => void) | undefined

  const mockAdd = vi.fn((type: string, callback: (data: UiFigmaFrameStylesMessengerResponse) => void) => {
    if (type === 'ui-figma-styles-update') {
      registeredListener = callback
    }
  })
  const mockAddCallback = vi.fn().mockReturnThis()
  const mockRun = vi.fn().mockResolvedValue({})

  return {
    mockAdd,
    mockAddCallback,
    mockRun,
    getRegisteredListener: () => registeredListener
  }
})

vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => ({
      add: mockAdd
    }))
  }
}))

vi.mock('@dxtmisha/functional-basic', () => ({
  StorageCallback: {
    getInstance: vi.fn(() => ({
      addCallback: mockAddCallback,
      run: mockRun
    }))
  }
}))

describe('fetchFrameStyles', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize messenger listener once and register styles callback', () => {
    const callback = vi.fn()
    fetchFrameStyles(callback)

    expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:frame-styles:get')
    expect(mockAddCallback).toHaveBeenCalledWith(callback)
    expect(mockAdd).toHaveBeenCalledTimes(1)
    expect(mockAdd).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, expect.any(Function))

    // Second call should not re-register messenger listener
    fetchFrameStyles(vi.fn())
    expect(mockAdd).toHaveBeenCalledTimes(1)
  })

  it('should route incoming messenger data to StorageCallback.run()', () => {
    const callback = vi.fn()
    fetchFrameStyles(callback)

    const listener = getRegisteredListener()
    expect(listener).toBeTypeOf('function')

    const mockStylesResponse: UiFigmaFrameStylesMessengerResponse = [
      { id: '1:1', data: [] }
    ]
    listener?.(mockStylesResponse)

    expect(StorageCallback.getInstance).toHaveBeenLastCalledWith('figma:frame-styles:get')
    expect(mockRun).toHaveBeenCalledWith(mockStylesResponse)
  })
})
