import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ApiCache, type ApiCacheItem, ErrorCenter } from '@dxtmisha/functional-basic'

const mockStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn()
}

vi.mock('nitro/storage', () => ({
  useStorage: vi.fn(() => mockStorage)
}))

import { useStorage } from 'nitro/storage'
import { initPluginApiCache } from '../initPluginApiCache'

describe('initPluginApiCache', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize useStorage with default key "Ui_ApiCache" and register callbacks in ApiCache.init', () => {
      const initSpy = vi.spyOn(ApiCache, 'init')

      initPluginApiCache()

      expect(useStorage).toHaveBeenCalledTimes(1)
      expect(useStorage).toHaveBeenCalledWith('Ui_ApiCache')
      expect(initSpy).toHaveBeenCalledTimes(1)
      expect(initSpy).toHaveBeenCalledWith(
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        undefined
      )
    })

    it('should pass custom storageKey and cacheStepAgeClearOld to useStorage and ApiCache.init', () => {
      const initSpy = vi.spyOn(ApiCache, 'init')

      initPluginApiCache('CustomCacheNamespace', 50)

      expect(useStorage).toHaveBeenCalledWith('CustomCacheNamespace')
      expect(initSpy).toHaveBeenCalledWith(
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        50
      )
    })
  })

  describe('CRUD cache callbacks (get, set, remove)', () => {
    it('should prefix keys with "Ui_ApiCache_" and retrieve cached item via get callback', async () => {
      const initSpy = vi.spyOn(ApiCache, 'init')
      const mockItem: ApiCacheItem = { value: { id: 1 }, age: 1000, cacheAge: 60 }
      mockStorage.getItem.mockResolvedValueOnce(mockItem)

      initPluginApiCache()
      const [getCallback] = initSpy.mock.calls[0]!

      const result = await getCallback('users_list')

      expect(mockStorage.getItem).toHaveBeenCalledWith('Ui_ApiCache_users_list')
      expect(result).toEqual(mockItem)
    })

    it('should return undefined when storage.getItem returns null or undefined', async () => {
      const initSpy = vi.spyOn(ApiCache, 'init')
      mockStorage.getItem.mockResolvedValueOnce(null)

      initPluginApiCache()
      const [getCallback] = initSpy.mock.calls[0]!

      await expect(getCallback('missing_key')).resolves.toBeUndefined()
    })

    it('should store item with prefixed key and return true via set callback', async () => {
      const initSpy = vi.spyOn(ApiCache, 'init')
      const mockItem: ApiCacheItem = { value: 'cached-data', age: 2000, cacheAge: 120 }
      mockStorage.setItem.mockResolvedValueOnce(undefined)

      initPluginApiCache()
      const [, setCallback] = initSpy.mock.calls[0]!

      const result = await setCallback('item_42', mockItem)

      expect(mockStorage.setItem).toHaveBeenCalledWith('Ui_ApiCache_item_42', mockItem)
      expect(result).toBe(true)
    })

    it('should remove item with prefixed key and return true via remove callback', async () => {
      const initSpy = vi.spyOn(ApiCache, 'init')
      mockStorage.removeItem.mockResolvedValueOnce(undefined)

      initPluginApiCache()
      const [, , removeCallback] = initSpy.mock.calls[0]!

      const result = await removeCallback('item_42')

      expect(mockStorage.removeItem).toHaveBeenCalledWith('Ui_ApiCache_item_42')
      expect(result).toBe(true)
    })
  })

  describe('Error handling and ErrorCenter reporting', () => {
    it('should report cacheGet error to ErrorCenter and return undefined when storage.getItem throws', async () => {
      const initSpy = vi.spyOn(ApiCache, 'init')
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const storageError = new Error('Redis read timeout')
      mockStorage.getItem.mockRejectedValueOnce(storageError)

      initPluginApiCache()
      const [getCallback] = initSpy.mock.calls[0]!

      const result = await getCallback('broken_key')

      expect(result).toBeUndefined()
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'api',
        code: 'cacheGet',
        details: storageError
      })
    })

    it('should report cacheSet error to ErrorCenter and return false when storage.setItem throws', async () => {
      const initSpy = vi.spyOn(ApiCache, 'init')
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const storageError = new Error('Storage quota exceeded')
      mockStorage.setItem.mockRejectedValueOnce(storageError)

      initPluginApiCache()
      const [, setCallback] = initSpy.mock.calls[0]!

      const result = await setCallback('key', { value: 1, age: 0, cacheAge: 10 })

      expect(result).toBe(false)
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'api',
        code: 'cacheSet',
        details: storageError
      })
    })

    it('should report cacheRemove error to ErrorCenter and return false when storage.removeItem throws', async () => {
      const initSpy = vi.spyOn(ApiCache, 'init')
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => undefined)
      const storageError = new Error('Permission denied')
      mockStorage.removeItem.mockRejectedValueOnce(storageError)

      initPluginApiCache()
      const [, , removeCallback] = initSpy.mock.calls[0]!

      const result = await removeCallback('key')

      expect(result).toBe(false)
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'api',
        code: 'cacheRemove',
        details: storageError
      })
    })
  })
})
