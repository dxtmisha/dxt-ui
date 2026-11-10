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

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize messenger listener and register styles callback in StorageCallback', () => {
      const callback = vi.fn()
      fetchFrameStyles(callback)

      expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:frame-styles:get')
      expect(mockAddCallback).toHaveBeenCalledWith(callback)
      expect(mockAdd).toHaveBeenCalledTimes(1)
      expect(mockAdd).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, expect.any(Function))

      // Subsequent call must not duplicate listener registration
      fetchFrameStyles(vi.fn())
      expect(mockAdd).toHaveBeenCalledTimes(1)
    })

    it('should forward received styles update from messenger to StorageCallback.run()', () => {
      const callback = vi.fn()
      fetchFrameStyles(callback)

      const listener = getRegisteredListener()
      expect(listener).toBeTypeOf('function')

      const mockStylesResponse: UiFigmaFrameStylesMessengerResponse = [
        { id: '1:1', data: [] },
        { id: '2:2', data: [] }
      ]
      listener?.(mockStylesResponse)

      expect(StorageCallback.getInstance).toHaveBeenLastCalledWith('figma:frame-styles:get')
      expect(mockRun).toHaveBeenCalledWith(mockStylesResponse)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should safely forward empty styles response', () => {
      const callback = vi.fn()
      fetchFrameStyles(callback)

      const listener = getRegisteredListener()
      listener?.([])

      expect(mockRun).toHaveBeenCalledWith([])
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Unicode frame IDs in styles response', () => {
      const callback = vi.fn()
      fetchFrameStyles(callback)

      const listener = getRegisteredListener()
      const unicodeResponse: UiFigmaFrameStylesMessengerResponse = [
        { id: '1:1_шапка_màu_sắc_🎨', data: [] }
      ]
      listener?.(unicodeResponse)

      expect(mockRun).toHaveBeenCalledWith(unicodeResponse)
    })
  })
})
