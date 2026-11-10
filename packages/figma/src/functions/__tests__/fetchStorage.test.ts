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

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize and request storage data with key name, node id, and fallback value', () => {
      const callback = vi.fn()
      fetchStorage('theme', callback, 'node-1', 'dark')

      expect(mockAdd).toHaveBeenCalledTimes(1)
      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, expect.any(Function))
      expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:storage:theme:node-1')
      expect(mockAddCallback).toHaveBeenCalledWith(callback, true)
      expect(mockPreparation).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'theme',
        id: 'node-1',
        value: 'dark'
      })
    })

    it('should generate global key when node id is omitted', () => {
      const callback = vi.fn()
      fetchStorage('global-settings', callback)

      expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:storage:global-settings')
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'global-settings',
        id: undefined,
        value: undefined
      })
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

  describe('Boundary values and limit thresholds', () => {
    it('should preserve falsy default values (0, false, empty string)', () => {
      const callback = vi.fn()

      fetchStorage('counter', callback, 'id-1', 0)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'counter',
        id: 'id-1',
        value: 0
      })

      fetchStorage('enabled', callback, 'id-1', false)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'enabled',
        id: 'id-1',
        value: false
      })

      fetchStorage('prefix', callback, 'id-1', '')
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'prefix',
        id: 'id-1',
        value: ''
      })
    })

    it('should not call preparation() or post() if already loading', () => {
      mockIsLoading.mockReturnValue(true)
      const callback = vi.fn()

      fetchStorage('loading-name', callback)

      expect(mockAddCallback).toHaveBeenCalledWith(callback, true)
      expect(mockPreparation).not.toHaveBeenCalled()
      expect(mockPost).not.toHaveBeenCalled()
    })

    it('should pass isOnce: false when persistent listener is requested', () => {
      const callback = vi.fn()

      fetchStorage('stream-key', callback, 'id-2', undefined, false)

      expect(mockAddCallback).toHaveBeenCalledWith(callback, false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should build proper storage keys and route Unicode storage data', () => {
      const callback = vi.fn()
      fetchStorage('настройки_trang_trí', callback, '1:2_кнопка')

      expect(StorageCallback.getInstance).toHaveBeenCalledWith('figma:storage:настройки_trang_trí:1:2_кнопка')

      const listener = getRegisteredListener()
      listener?.({
        name: 'настройки_trang_trí',
        id: '1:2_кнопка',
        value: 'активно 🚀'
      })

      expect(mockRun).toHaveBeenCalledWith('активно 🚀')
    })
  })
})
