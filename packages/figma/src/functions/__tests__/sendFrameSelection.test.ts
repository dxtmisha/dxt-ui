import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UI_FIGMA_FRAME_SET_SELECTION } from '../../types/framesTypes'

const mockPost = vi.fn()
vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost
    }))
  }
}))

import { sendFrameSelection } from '../sendFrameSelection'

describe('sendFrameSelection', () => {
  beforeEach(() => {
    mockPost.mockClear()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should post frame selection message with provided node id', () => {
      sendFrameSelection('frame-123')

      expect(mockPost).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAME_SET_SELECTION, { id: 'frame-123' })
    })

    it('should support Figma colon format ID ("0:1", "123:456")', () => {
      sendFrameSelection('123:456')

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAME_SET_SELECTION, { id: '123:456' })
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should safely post undefined id when called without arguments or with undefined', () => {
      sendFrameSelection()
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_FRAME_SET_SELECTION, { id: undefined })

      sendFrameSelection(undefined)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_FRAME_SET_SELECTION, { id: undefined })
    })

    it('should safely post empty string id', () => {
      sendFrameSelection('')

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAME_SET_SELECTION, { id: '' })
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should safely pass Unicode and Emoji IDs', () => {
      const unicodeId = '1:2_фрейм_được_chọn_🎯'
      sendFrameSelection(unicodeId)

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_FRAME_SET_SELECTION, { id: unicodeId })
    })
  })
})
