import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendFramesSelected } from '../sendFramesSelected'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'
import { UI_FIGMA_FRAMES_SELECTED_ADD_NAME } from '../../types/framesTypes'

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

describe('sendFramesSelected', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post frame selection toggle with id and boolean true/false', () => {
    const messenger = FigmaUiMessenger.getInstance()

    sendFramesSelected('frame-1', true)
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_ADD_NAME, {
      id: 'frame-1',
      selected: true
    })

    sendFramesSelected('frame-1', false)
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_FRAMES_SELECTED_ADD_NAME, {
      id: 'frame-1',
      selected: false
    })
  })
})
