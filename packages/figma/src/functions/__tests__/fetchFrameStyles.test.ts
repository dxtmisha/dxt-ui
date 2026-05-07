import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFrameStyles } from '../fetchFrameStyles'
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
  return {
    StorageCallback: {
      getInstance: vi.fn(() => ({
        addCallback: mockAddCallback,
        run: vi.fn()
      }))
    }
  }
})

describe('fetchFrameStyles', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize and register styles callback', () => {
    const callback = vi.fn()
    fetchFrameStyles(callback)

    expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:frame-styles:get')
    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.add).toHaveBeenCalled()
  })
})
