import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendFrameStyles } from '../sendFrameStyles'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'
import {
  FIGMA_FRAME_STYLES_MESSENGER_NAME,
  type UiFigmaFrameStylesMessengerAttributes
} from '../../types/figmaStylesTypes'

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

describe('sendFrameStyles', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post frame styles request with single ID or array of IDs', () => {
    const messenger = FigmaUiMessenger.getInstance()

    const singleAttr: UiFigmaFrameStylesMessengerAttributes = {
      ids: '12:34',
      children: true
    }
    sendFrameStyles(singleAttr)
    expect(messenger.post).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, singleAttr)

    const multiAttr: UiFigmaFrameStylesMessengerAttributes = {
      ids: ['1:1', '2:2'],
      children: false
    }
    sendFrameStyles(multiAttr)
    expect(messenger.post).toHaveBeenCalledWith(FIGMA_FRAME_STYLES_MESSENGER_NAME, multiAttr)
  })
})
