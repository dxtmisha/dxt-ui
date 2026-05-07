import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchStorage } from '../fetchStorage'
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

describe('fetchStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize and request storage data', () => {
    const callback = vi.fn()
    fetchStorage('test-name', callback, 'test-id', 'default-val')

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(expect.any(String), {
      name: 'test-name',
      id: 'test-id',
      defaultValue: 'default-val'
    })

    expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:storage:test-name:test-id')
  })
})
