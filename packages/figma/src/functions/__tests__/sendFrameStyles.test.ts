import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FIGMA_FRAME_STYLES_MESSENGER_NAME, type UiFigmaFrameStylesMessengerAttributes } from '../../types/figmaStylesTypes'

const mockPost = vi.fn()
vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost
    }))
  }
}))

import { sendFrameStyles } from '../sendFrameStyles'

describe('sendFrameStyles', () => {
  beforeEach(() => {
    mockPost.mockClear()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should post styles request with single ID and children: true', () => {
      const attributes: UiFigmaFrameStylesMessengerAttributes = {
        ids: '12:34',
        children: true
      }

      sendFrameStyles(attributes)

      expect(mockPost).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, attributes)
    })

    it('should post styles request with array of IDs and children: false', () => {
      const attributes: UiFigmaFrameStylesMessengerAttributes = {
        ids: ['10:1', '20:2'],
        children: false
      }

      sendFrameStyles(attributes)

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, attributes)
    })

    it('should post styles request when children flag is omitted', () => {
      const attributes: UiFigmaFrameStylesMessengerAttributes = {
        ids: 'frame-header'
      }

      sendFrameStyles(attributes)

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, attributes)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should safely post when ids array is empty', () => {
      const attributes: UiFigmaFrameStylesMessengerAttributes = {
        ids: []
      }

      sendFrameStyles(attributes)

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, attributes)
    })

    it('should safely post when ids is an empty string', () => {
      const attributes: UiFigmaFrameStylesMessengerAttributes = {
        ids: ''
      }

      sendFrameStyles(attributes)

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, attributes)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Unicode frame IDs in attributes payload', () => {
      const attributes: UiFigmaFrameStylesMessengerAttributes = {
        ids: ['1:1_шапка_trang_chính', '2:2_кнопка_🎉'],
        children: true
      }

      sendFrameStyles(attributes)

      expect(mockPost).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, attributes)
    })
  })
})
