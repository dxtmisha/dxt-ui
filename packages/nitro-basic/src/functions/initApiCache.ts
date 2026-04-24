// export:none

import { useStorage } from 'nitro/storage'
import { ApiCache, type ApiCacheItem, ErrorCenter } from '@dxtmisha/functional-basic'

/**
 * Initialize api cache.
 *
 * Инициализация api кэша.
 * @param storageKey Storage key prefix / Префикс ключа хранилища
 * @param cacheStepAgeClearOld Cache cleanup threshold / Порог очистки кэша
 */
export function initApiCache(
  storageKey: string = 'Ui_ApiCache',
  cacheStepAgeClearOld?: number
): void {
  /** Storage instance / Экземпляр хранилища */
  const storage = useStorage(storageKey)

  /**
   * Get cache key.
   *
   * Получить ключ кэша.
   * @param key Cache key / Ключ кэша
   * @returns Full cache key / Полный ключ кэша
   */
  const getKey = (key: string) => `Ui_ApiCache_${key}`

  ApiCache.init(
    /**
     * Get item from cache.
     *
     * Получить элемент из кэша.
     * @param key Cache key / Ключ кэша
     * @returns Cache item or undefined / Элемент кэша или undefined
     */
    async (key: string) => {
      try {
        return (await storage.getItem<ApiCacheItem>(getKey(key))) ?? undefined
      } catch (error) {
        ErrorCenter.on({
          group: 'api',
          code: 'cacheGet',
          details: error
        })

        return undefined
      }
    },

    /**
     * Set item to cache.
     *
     * Установить элемент в кэш.
     * @param key Cache key / Ключ кэша
     * @param value Cache item / Элемент кэша
     * @returns Promise with success status / Promise со статусом успеха
     */
    async (key: string, value: ApiCacheItem) => {
      try {
        await storage.setItem(getKey(key), value)
        return true
      } catch (error) {
        ErrorCenter.on({
          group: 'api',
          code: 'cacheSet',
          details: error
        })

        return false
      }
    },

    /**
     * Remove item from cache.
     *
     * Удалить элемент из кэша.
     * @param key Cache key / Ключ кэша
     * @returns Promise with success status / Promise со статусом успеха
     */
    async (key: string) => {
      try {
        await storage.removeItem(getKey(key))
        return true
      } catch (error) {
        ErrorCenter.on({
          group: 'api',
          code: 'cacheRemove',
          details: error
        })

        return false
      }
    },

    cacheStepAgeClearOld
  )
}
