import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchTopLevelFrames } from '../fetchTopLevelFrames'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'

vi.mock('../../classes/FigmaUiMessenger', () => {
  const mockPost = vi.fn()
  const mockAdd = vi.fn().mockReturnThis()
  const mockRemove = vi.fn().mockReturnThis()
  return {
    FigmaUiMessenger: {
      getInstance: vi.fn(() => ({
        post: mockPost,
        add: mockAdd,
        remove: mockRemove
      }))
    }
  }
})

describe('fetchTopLevelFrames', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should request top level frames from plugin', () => {
    const callback = vi.fn()
    fetchTopLevelFrames(callback)

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.add).toHaveBeenCalled()
    expect(messenger.post).toHaveBeenCalled()
  })
})
