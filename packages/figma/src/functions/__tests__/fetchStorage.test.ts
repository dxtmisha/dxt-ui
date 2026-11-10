import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchStorage } from '../fetchStorage'
import { StorageCallback } from '@dxtmisha/functional-basic'
import { UI_FIGMA_STORAGE_GET } from '../../types/framesTypes'
import type { StorageMessengerData } from '../../types/storageTypes'

const {
  mockPost,
  mockAdd,
  mockAddCallback,
  mockIsLoading,
  mockPreparation,
  mockRun,
  getRegisteredListener
} = vi.hoisted(() => {
  let registeredListener: ((data: StorageMessengerData) => void) | undefined

  const mockPost = vi.fn()
  const mockAdd = vi.fn((type: string, callback: (data: StorageMessengerData) => void) => {
    if (type === 'ui-figma-storage-get') {
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

describe('fetchStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockIsLoading.mockReturnValue(false)
  })

  it('should initialize and request storage data with value fallback and id', () => {
    const callback = vi.fn()
    fetchStorage('test-name', callback, 'test-id', 'default-val')

    expect(mockAdd).toHaveBeenCalledTimes(1)
    expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, expect.any(Function))
    expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:storage:test-name:test-id')
    expect(mockAddCallback).toHaveBeenCalledWith(callback, true)
    expect(mockPreparation).toHaveBeenCalledTimes(1)
    expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, {
      name: 'test-name',
      id: 'test-id',
      value: 'default-val'
    })

    // Second call without id
    fetchStorage('other-name', callback, undefined, 42, false)
    expect(StorageCallback.getInstance).toHaveBeenLastCalledWith('figma:storage:other-name')
    expect(mockAddCallback).toHaveBeenLastCalledWith(callback, false)
  })

  it('should not call preparation() or post() if already loading', () => {
    mockIsLoading.mockReturnValue(true)
    const callback = vi.fn()

    fetchStorage('loading-name', callback)

    expect(mockAddCallback).toHaveBeenCalledWith(callback, true)
    expect(mockPreparation).not.toHaveBeenCalled()
    expect(mockPost).not.toHaveBeenCalled()
  })

  it('should route incoming messenger data to matching StorageCallback.run()', () => {
    const callback = vi.fn()
    fetchStorage('user-data', callback, '10:20')

    const listener = getRegisteredListener()
    expect(listener).toBeTypeOf('function')

    listener?.({ name: 'user-data', id: '10:20', value: { color: 'blue' } })

    expect(StorageCallback.getInstance).toHaveBeenLastCalledWith('figma:storage:user-data:10:20')
    expect(mockRun).toHaveBeenCalledWith({ color: 'blue' })
  })
})
