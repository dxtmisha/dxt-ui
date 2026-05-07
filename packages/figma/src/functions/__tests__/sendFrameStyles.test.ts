import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendFrameStyles } from '../sendFrameStyles'
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

describe('sendFrameStyles', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post styles request to plugin', () => {
    const attrs = { selection: true, styles: true } as any
    sendFrameStyles(attrs)

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(expect.any(String), attrs)
  })
})
