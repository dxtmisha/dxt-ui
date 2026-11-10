import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendStorage } from '../sendStorage'
import { FigmaUiMessenger } from '../../classes/FigmaUiMessenger'
import { UI_FIGMA_STORAGE_SET } from '../../types/framesTypes'

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

describe('sendStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post storage data with and without id', () => {
    const messenger = FigmaUiMessenger.getInstance()

    sendStorage('status', 'active')
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_STORAGE_SET, {
      name: 'status',
      value: 'active',
      id: undefined
    })

    sendStorage('node-meta', { visible: true }, '12:34')
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_STORAGE_SET, {
      name: 'node-meta',
      value: { visible: true },
      id: '12:34'
    })

    sendStorage('counter', 0, 'node-1')
    expect(messenger.post).toHaveBeenCalledWith(UI_FIGMA_STORAGE_SET, {
      name: 'counter',
      value: 0,
      id: 'node-1'
    })
  })
})
