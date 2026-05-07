import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFramesSelected } from '../fetchFramesSelected'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'

vi.mock('../../classes/FigmaUiMessenger', () => {
  const mockPost = vi.fn()
  const mockAdd = vi.fn().mockReturnThis()
  return {
    FigmaUiMessenger: {
      getInstance: vi.fn(() => ({
        post: mockPost,
        add: mockAdd
      }))
    }
  }
})

describe('fetchFramesSelected', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset internal state if possible (though difficult without exposing it)
  })

  it('should request selected frames from plugin', () => {
    const callback = vi.fn()
    fetchFramesSelected(callback)

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.add).toHaveBeenCalled()
    expect(messenger.post).toHaveBeenCalled()
  })
})
