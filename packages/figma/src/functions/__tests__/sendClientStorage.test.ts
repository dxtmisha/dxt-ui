import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendClientStorage } from '../sendClientStorage'
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

describe('sendClientStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post client storage data to plugin', () => {
    sendClientStorage('test-name', 'test-value')

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(expect.any(String), {
      name: 'test-name',
      value: 'test-value'
    })
  })
})
