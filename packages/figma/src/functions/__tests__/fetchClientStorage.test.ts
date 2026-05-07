import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchClientStorage } from '../fetchClientStorage'
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
  const mockRun = vi.fn().mockResolvedValue({})
  return {
    StorageCallback: {
      getInstance: vi.fn(() => ({
        addCallback: mockAddCallback,
        isLoading: vi.fn(() => false),
        preparation: mockPreparation,
        run: mockRun
      }))
    }
  }
})

describe('fetchClientStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize and request client storage data', () => {
    const callback = vi.fn()
    fetchClientStorage('test-name', callback, 'default-val')

    const messenger = FigmaUiMessenger.getInstance()
    expect(messenger.post).toHaveBeenCalledWith(expect.any(String), {
      name: 'test-name',
      defaultValue: 'default-val'
    })

    expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:client-storage:test-name')
  })
})
