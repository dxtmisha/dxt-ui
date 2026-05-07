import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendStorage } from '../sendStorage'
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

describe('sendStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should post storage data to plugin', () => {
    sendStorage('test-name', 'test-value', 'test-id')

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(expect.any(String), {
      name: 'test-name',
      value: 'test-value',
      id: 'test-id'
    })
  })
})
