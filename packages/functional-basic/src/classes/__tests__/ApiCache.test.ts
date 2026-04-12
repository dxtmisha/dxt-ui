import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiCache } from '../ApiCache'
import { ApiMethodItem } from '../../types/apiTypes'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as getCurrentTimeModule from '../../functions/getCurrentTime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

vi.mock('../../functions/getCurrentTime', () => ({
  getCurrentTime: vi.fn()
}))

describe('ApiCache / Кэширование API', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    ApiCache.reset()
    vi.mocked(getCurrentTimeModule.getCurrentTime).mockReturnValue(1000)
  })

  // ─────────────────────────────────────────────
  // Initialization
  // ─────────────────────────────────────────────

  describe('init / Инициализация', () => {
    it('should initialize with listeners / должен инициализироваться с листнерами', () => {
      const get = vi.fn()
      const set = vi.fn()
      const remove = vi.fn()

      ApiCache.init(get, set, remove)

      // Accessing private members via any for testing
      expect((ApiCache as any).getListener).toBe(get)
      expect((ApiCache as any).setListener).toBe(set)
      expect((ApiCache as any).removeListener).toBe(remove)
    })
  })

  // ─────────────────────────────────────────────
  // Get and Set
  // ─────────────────────────────────────────────

  describe('set and get / Установка и получение', () => {
    it('should store and retrieve data in memory when no listeners are provided / должен сохранять и извлекать данные в памяти, если листнеры не предоставлены', async () => {
      await ApiCache.set('key1', 'value1', 60)
      expect(await ApiCache.get('key1')).toBe('value1')
    })

    it('should return undefined for non-existent key / должен возвращать undefined для несуществующего ключа', async () => {
      expect(await ApiCache.get('missing')).toBeUndefined()
    })

    it('should use listeners when provided / должен использовать листнеры, если они предоставлены', async () => {
      const mockItem = { value: 'from-listener', age: 60, cacheAge: 1000 }
      const get = vi.fn().mockReturnValue(mockItem)
      const set = vi.fn()
      const remove = vi.fn()

      ApiCache.init(get, set, remove)

      const result = await ApiCache.get('any-key')

      expect(get).toHaveBeenCalledWith('any-key')
      expect(result).toBe('from-listener')

      await ApiCache.set('new-key', 'new-value', 120)
      expect(set).toHaveBeenCalledWith('new-key', {
        value: 'new-value',
        age: 120,
        cacheAge: 1000
      })
    })

    it('should handle complex objects in cache / должен обрабатывать сложные объекты в кэше', async () => {
      const complexValue = { a: 1, b: { c: 2 }, d: [3, 4] }
      await ApiCache.set('complex', complexValue)
      expect(await ApiCache.get('complex')).toEqual(complexValue)
    })
  })

  // ─────────────────────────────────────────────
  // Fetch Integration
  // ─────────────────────────────────────────────

  describe('setByFetch and getByFetch / Кэширование по параметрам fetch', () => {
    const apiFetch = {
      path: 'test/path',
      method: ApiMethodItem.get,
      cache: 3600
    }

    beforeEach(() => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
    })

    it('should store and retrieve data using fetch options / должен сохранять и извлекать данные, используя параметры fetch', async () => {
      await ApiCache.setByFetch(apiFetch, { some: 'data' })
      expect(await ApiCache.getByFetch(apiFetch)).toEqual({ some: 'data' })
    })

    it('should return undefined if cache is disabled in fetch options / должен возвращать undefined, если кэш отключен в параметрах fetch', async () => {
      const noCacheFetch = { ...apiFetch, cache: undefined }
      await ApiCache.setByFetch(noCacheFetch, { some: 'data' })
      expect(await ApiCache.getByFetch(noCacheFetch)).toBeUndefined()
    })

    it('should return undefined if isDomRuntime is true / должен возвращать undefined, если isDomRuntime равно true', async () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      await ApiCache.setByFetch(apiFetch, { some: 'data' })
      expect(await ApiCache.getByFetch(apiFetch)).toBeUndefined()
    })

    it('should handle POST requests if global is true / должен обрабатывать POST-запросы, если global равно true', async () => {
      const postFetch = {
        path: 'post-path',
        method: ApiMethodItem.post,
        cache: 60,
        global: true
      }
      await ApiCache.setByFetch(postFetch, { success: true })
      expect(await ApiCache.getByFetch(postFetch)).toEqual({ success: true })
    })

    it('should not cache POST requests if global is false / не должен кэшировать POST-запросы, если global равно false', async () => {
      const postFetch = {
        path: 'post-path',
        method: ApiMethodItem.post,
        cache: 60,
        global: false
      }
      await ApiCache.setByFetch(postFetch, { success: true })
      expect(await ApiCache.getByFetch(postFetch)).toBeUndefined()
    })
  })

  // ─────────────────────────────────────────────
  // Expiration Logic
  // ─────────────────────────────────────────────

  describe('isAge / Проверка времени жизни', () => {
    it('should return true if item has no age limit / должен возвращать true, если у элемента нет ограничения по возрасту', () => {
      const item = { value: 'test', cacheAge: 1000 }
      expect((ApiCache as any).isAge(item)).toBe(true)
    })

    it('should return true if item is within age limit / должен возвращать true, если время жизни элемента не истекло', () => {
      vi.mocked(getCurrentTimeModule.getCurrentTime).mockReturnValue(1500)
      const item = { value: 'test', age: 1, cacheAge: 1000 } // age 1s = 1000ms. limit = 1000 + 1000 = 2000. 1500 < 2000.
      expect((ApiCache as any).isAge(item)).toBe(true)
    })

    it('should return false if item is expired / должен возвращать false, если время жизни элемента истекло', () => {
      vi.mocked(getCurrentTimeModule.getCurrentTime).mockReturnValue(3000)
      const item = { value: 'test', age: 1, cacheAge: 1000 } // limit = 2000. 3000 > 2000.
      expect((ApiCache as any).isAge(item)).toBe(false)
    })
  })

  // ─────────────────────────────────────────────
  // Removal and Key Generation
  // ─────────────────────────────────────────────

  describe('remove / Удаление', () => {
    it('should remove item from memory / должен удалять элемент из памяти', async () => {
      await ApiCache.set('key', 'val')
      expect(await ApiCache.get('key')).toBe('val')
      await ApiCache.remove('key')
      expect(await ApiCache.get('key')).toBeUndefined()
    })

    it('should call removeListener if provided / должен вызывать removeListener, если он предоставлен', async () => {
      const remove = vi.fn()
      ApiCache.init(vi.fn(), vi.fn(), remove)
      await ApiCache.remove('some-key')
      expect(remove).toHaveBeenCalledWith('some-key')
    })
  })

  describe('generateKey / Генерация ключа', () => {
    it('should generate consistent keys for same fetch options / должен генерировать одинаковые ключи для одних и тех же параметров fetch', () => {
      const fetch1 = { path: 'a', method: ApiMethodItem.get, cache: 10 }
      const fetch2 = { path: 'a', method: ApiMethodItem.get, cache: 20 }

      const key1 = (ApiCache as any).generateKey(fetch1)
      const key2 = (ApiCache as any).generateKey(fetch2)

      expect(key1).toBe(key2)
    })

    it('should generate different keys for different paths / должен генерировать разные ключи для разных путей', () => {
      const key1 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get })
      const key2 = (ApiCache as any).generateKey({ path: 'b', method: ApiMethodItem.get })
      expect(key1).not.toBe(key2)
    })

    it('should include request data in key generation / должен включать данные запроса в генерацию ключа', () => {
      const key1 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get, request: { id: 1 } })
      const key2 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get, request: { id: 2 } })
      expect(key1).not.toBe(key2)
    })
  })

  describe('reset / Сброс', () => {
    it('should clear all items and listeners / должен очищать все элементы и листнеры', async () => {
      const get = vi.fn()
      ApiCache.init(get, vi.fn(), vi.fn())
      await ApiCache.set('key', 'val')
      
      ApiCache.reset()
      
      expect((ApiCache as any).getListener).toBeUndefined()
      expect(await ApiCache.get('key')).toBeUndefined()
    })
  })
})
