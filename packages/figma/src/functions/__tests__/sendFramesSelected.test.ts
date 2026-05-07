import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendFramesSelected } from '../sendFramesSelected'
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

describe('sendFramesSelected', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post selected frames to plugin', () => {
    sendFramesSelected('frame-id', true)

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(expect.any(String), {
      id: 'frame-id',
      selected: true
    })
  })
})
