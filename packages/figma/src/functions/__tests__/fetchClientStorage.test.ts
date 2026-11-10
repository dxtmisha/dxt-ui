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

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize messenger listener and request client storage with fallback value', () => {
      const callback = vi.fn()
      fetchClientStorage('user-theme', callback, 'dark', true)

      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, expect.any(Function))
      expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:client-storage:user-theme')
      expect(mockAddCallback).toHaveBeenCalledWith(callback, true)
      expect(mockPreparation).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'user-theme',
        value: 'dark'
      })
    })

    it('should route incoming messenger data to StorageCallback.run()', () => {
      const callback = vi.fn()
      fetchClientStorage('user-theme', callback)

      const listener = getRegisteredListener()
      expect(listener).toBeTypeOf('function')

      listener?.({ name: 'user-theme', value: 'light-mode' })

      expect(StorageCallback.getInstance).toHaveBeenLastCalledWith('figma:client-storage:user-theme')
      expect(mockRun).toHaveBeenCalledWith('light-mode')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should preserve falsy default values without substituting undefined (0, false, empty string)', () => {
      const callback = vi.fn()

      fetchClientStorage('counter', callback, 0)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'counter',
        value: 0
      })

      fetchClientStorage('active', callback, false)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'active',
        value: false
      })

      fetchClientStorage('tag', callback, '')
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'tag',
        value: ''
      })
    })

    it('should not call preparation() or post() if request is already in-flight (isLoading = true)', () => {
      mockIsLoading.mockReturnValue(true)
      const callback = vi.fn()

      fetchClientStorage('in-flight-key', callback)

      expect(mockAddCallback).toHaveBeenCalledWith(callback, true)
      expect(mockPreparation).not.toHaveBeenCalled()
      expect(mockPost).not.toHaveBeenCalled()
    })

    it('should pass isOnce: false flag when persistent subscription is requested', () => {
      const callback = vi.fn()

      fetchClientStorage('persistent-key', callback, 'default', false)

      expect(mockAddCallback).toHaveBeenCalledWith(callback, false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should build proper storage keys for Unicode names', () => {
      const callback = vi.fn()
      fetchClientStorage('ngôn_ngữ_языка', callback)

      expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:client-storage:ngôn_ngữ_языка')
    })
  })
})
