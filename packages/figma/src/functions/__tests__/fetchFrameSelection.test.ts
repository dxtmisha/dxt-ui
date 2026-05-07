import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFrameSelection } from '../fetchFrameSelection'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'
import { StorageCallback } from '@dxtmisha/functional-basic'

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

vi.mock('@dxtmisha/functional-basic', () => {
  const mockAddCallback = vi.fn().mockReturnThis()
  const mockPreparation = vi.fn().mockReturnThis()
  return {
    StorageCallback: {
      getInstance: vi.fn(() => ({
        addCallback: mockAddCallback,
        isLoading: vi.fn(() => false),
        preparation: mockPreparation,
        run: vi.fn()
      }))
    }
  }
})

describe('fetchFrameSelection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize and request frame selection', () => {
    const callback = vi.fn()
    fetchFrameSelection(callback)

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalled()
    expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:frame-selection:get')
  })
})
