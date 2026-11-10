import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchClientStorage } from '../fetchClientStorage'
import { StorageCallback } from '@dxtmisha/functional-basic'
import { UI_FIGMA_CLIENT_STORAGE_GET } from '../../types/framesTypes'
import type { ClientStorageMessengerData } from '../../types/storageTypes'

const {
  mockPost,
  mockAdd,
  mockAddCallback,
  mockIsLoading,
  mockPreparation,
  mockRun,
  getRegisteredListener
} = vi.hoisted(() => {
  let registeredListener: ((data: ClientStorageMessengerData) => void) | undefined

  const mockPost = vi.fn()
  const mockAdd = vi.fn((type: string, callback: (data: ClientStorageMessengerData) => void) => {
    if (type === 'ui-figma-client-storage-get') {
      registeredListener = callback
    }
  })
  const mockAddCallback = vi.fn().mockReturnThis()
  const mockIsLoading = vi.fn(() => false)
  const mockPreparation = vi.fn().mockReturnThis()
  const mockRun = vi.fn().mockResolvedValue({})

  return {
    mockPost,
    mockAdd,
    mockAddCallback,
    mockIsLoading,
    mockPreparation,
    mockRun,
    getRegisteredListener: () => registeredListener
  }
})

vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost,
      add: mockAdd
    }))
  }
}))

vi.mock('@dxtmisha/functional-basic', () => ({
  StorageCallback: {
    getInstance: vi.fn(() => ({
      addCallback: mockAddCallback,
      isLoading: mockIsLoading,
      preparation: mockPreparation,
      run: mockRun
    }))
  }
}))

describe('fetchClientStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockIsLoading.mockReturnValue(false)
  })

  it('should initialize messenger listener once and request client storage data with value fallback', () => {
    const callback = vi.fn()
    fetchClientStorage('test-name', callback, 'default-val')

    expect(mockAdd).toHaveBeenCalledTimes(1)
    expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, expect.any(Function))
    expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:client-storage:test-name')
    expect(mockAddCallback).toHaveBeenCalledWith(callback, true)
    expect(mockPreparation).toHaveBeenCalledTimes(1)
    expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
      name: 'test-name',
      value: 'default-val'
    })

    // Second call should not re-register messenger.add listener
    fetchClientStorage('other-name', callback, 0, false)
    expect(mockAdd).toHaveBeenCalledTimes(1)
    expect(mockAddCallback).toHaveBeenLastCalledWith(callback, false)
  })

  it('should not call preparation() or post() when storageCallback.isLoading() is true', () => {
    mockIsLoading.mockReturnValue(true)
    const callback = vi.fn()

    fetchClientStorage('in-flight-key', callback)

    expect(mockAddCallback).toHaveBeenCalledWith(callback, true)
    expect(mockPreparation).not.toHaveBeenCalled()
    expect(mockPost).not.toHaveBeenCalled()
  })

  it('should forward incoming messenger response to the matching StorageCallback.run()', () => {
    const callback = vi.fn()
    fetchClientStorage('theme', callback)

    const listener = getRegisteredListener()
    expect(listener).toBeTypeOf('function')

    listener?.({ name: 'theme', value: 'dark' })

    expect(StorageCallback.getInstance).toHaveBeenLastCalledWith('figma:client-storage:theme')
    expect(mockRun).toHaveBeenCalledWith('dark')
  })
})
