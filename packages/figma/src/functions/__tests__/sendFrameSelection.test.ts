import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendFrameSelection } from '../sendFrameSelection'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'

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

  it('should post frame selection to plugin', () => {
    sendFrameSelection('frame-id')

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(expect.any(String), { id: 'frame-id' })
  })
})
