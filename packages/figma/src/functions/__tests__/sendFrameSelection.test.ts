import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendFrameSelection } from '../sendFrameSelection'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'
import { UI_FIGMA_FRAME_SET_SELECTION } from '../../types/framesTypes'

vi.mock('../../classes/FigmaUiMessenger', () => {
  const mockPost = vi.fn()
  return {
    FigmaUiMessenger: {
      getInstance: vi.fn(() => ({
        post: mockPost
      }))
    }
  }
})

describe('sendFrameSelection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post frame selection to plugin with provided id', () => {
    sendFrameSelection('frame-123')

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_FRAME_SET_SELECTION, { id: 'frame-123' })
  })

  it('should safely post undefined id when called without arguments', () => {
    sendFrameSelection()

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_FRAME_SET_SELECTION, { id: undefined })
  })
})
