import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendClientStorage } from '../sendClientStorage'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'
import { UI_FIGMA_CLIENT_STORAGE_SET } from '../../types/framesTypes'

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

describe('sendClientStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post client storage data with string, object, number, and boolean values', () => {
    const messenger = FigmaUiMessenger.getInstance()

    sendClientStorage('theme', 'dark')
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
      name: 'theme',
      value: 'dark'
    })

    sendClientStorage('settings', { count: 10, active: true })
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
      name: 'settings',
      value: { count: 10, active: true }
    })

    sendClientStorage('zero', 0)
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
      name: 'zero',
      value: 0
    })

    sendClientStorage('flag', false)
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
      name: 'flag',
      value: false
    })
  })
})
