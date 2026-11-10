import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UI_FIGMA_FRAMES_SELECTED_ADD_NAME } from '../../types/framesTypes'

const mockPost = vi.fn()
vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost
    }))
  }
}))

import { sendFramesSelected } from '../sendFramesSelected'

describe('sendFramesSelected', () => {
  beforeEach(() => {
    mockPost.mockClear()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should post frame selection toggle message with id and selected: true', () => {
      sendFramesSelected('frame-1', true)

      expect(mockPost).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_ADD_NAME, {
        id: 'frame-1',
        selected: true
      })
    })

    it('should post frame selection toggle message with id and selected: false', () => {
      sendFramesSelected('frame-1', false)

      expect(mockPost).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_ADD_NAME, {
        id: 'frame-1',
        selected: false
      })
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should correctly handle standard Figma colon IDs ("0:1", "123:456")', () => {
      sendFramesSelected('123:456', true)

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_ADD_NAME, {
        id: '123:456',
        selected: true
      })
    })

    it('should handle empty string ID without throwing', () => {
      sendFramesSelected('', false)

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_ADD_NAME, {
        id: '',
        selected: false
      })
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Unicode and Emoji in frame ID', () => {
      const unicodeId = '10:20_секция_khung_hình_🚀'
      sendFramesSelected(unicodeId, true)

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_ADD_NAME, {
        id: unicodeId,
        selected: true
      })
    })
  })
})
