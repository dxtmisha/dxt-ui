import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaClientStorage } from '../FigmaClientStorage'

describe('FigmaClientStorage', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      clientStorage: {
        getAsync: vi.fn(),
        setAsync: vi.fn(),
        deleteAsync: vi.fn()
      }
    })
    FigmaClientStorage.reset()
  })

  afterEach(() => {
    FigmaClientStorage.reset()
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('getInstance() should return cached singleton instance for identical keys', () => {
      const s1 = FigmaClientStorage.getInstance('user-settings')
      const s2 = FigmaClientStorage.getInstance('user-settings')
      const s3 = FigmaClientStorage.getInstance('app-settings')

      expect(s1).toBe(s2)
      expect(s1).not.toBe(s3)
    })

    it('get() should load cached value from figma.clientStorage', async () => {
      const storage = new FigmaClientStorage<string>('test-get')
      vi.mocked(figma.clientStorage.getAsync).mockResolvedValue({
        value: 'loaded-theme',
        age: 1000
      })

      const value = await storage.get()

      expect(value).toBe('loaded-theme')
      expect(figma.clientStorage.getAsync).toHaveBeenCalled()
    })

    it('set() should persist values directly or from function factories', async () => {
      const storage = new FigmaClientStorage<string>('profile')
      const res1 = await storage.set('admin')

      expect(res1).toBe('admin')
      expect(figma.clientStorage.setAsync).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ value: 'admin' })
      )

      const res2 = await storage.set(() => 'computed-role')
      expect(res2).toBe('computed-role')
      expect(figma.clientStorage.setAsync).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ value: 'computed-role' })
      )

      const res3 = await storage.set(async () => 'async-role')
      expect(res3).toBe('async-role')
      expect(figma.clientStorage.setAsync).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ value: 'async-role' })
      )
    })

    it('remove() should delete key from figma.clientStorage and clear data', async () => {
      const storage = new FigmaClientStorage<string>('cache-item')
      const result = await storage.remove()

      expect(result).toBe(storage)
      expect(figma.clientStorage.deleteAsync).toHaveBeenCalled()
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('get() with defaultValue should fallback and persist when storage is empty', async () => {
      const storage = new FigmaClientStorage<string>('missing-key')
      vi.mocked(figma.clientStorage.getAsync).mockResolvedValue(undefined)

      const value = await storage.get('default-fallback')

      expect(value).toBe('default-fallback')
      expect(figma.clientStorage.setAsync).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ value: 'default-fallback' })
      )
    })

    it('get() should correctly handle falsy default values (0, false, empty string)', async () => {
      vi.mocked(figma.clientStorage.getAsync).mockResolvedValue(undefined)

      const numStorage = new FigmaClientStorage<number>('num-key')
      const zero = await numStorage.get(0)
      expect(zero).toBe(0)

      const boolStorage = new FigmaClientStorage<boolean>('bool-key')
      const falseVal = await boolStorage.get(false)
      expect(falseVal).toBe(false)

      const strStorage = new FigmaClientStorage<string>('str-key')
      const emptyStr = await strStorage.get('')
      expect(emptyStr).toBe('')
    })

    it('get() without defaultValue should return undefined when storage is empty', async () => {
      const storage = new FigmaClientStorage<string>('empty-key')
      vi.mocked(figma.clientStorage.getAsync).mockResolvedValue(undefined)

      const value = await storage.get()

      expect(value).toBeUndefined()
      expect(figma.clientStorage.setAsync).not.toHaveBeenCalled()
    })

    it('get() should respect cache expiration duration', async () => {
      const cacheSeconds = 30
      const storage = new FigmaClientStorage<string>('cached-key', cacheSeconds)
      const now = Date.now()

      // Return expired record (age 60s ago)
      vi.mocked(figma.clientStorage.getAsync).mockResolvedValue({
        value: 'stale-data',
        age: now - 60 * 1000
      })

      const val = await storage.get('fresh-fallback')
      expect(val).toBe('fresh-fallback')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Unicode names and complex objects', async () => {
      const unicodeKey = 'настройки_giao_diện_🌐'
      const storage = FigmaClientStorage.getInstance<Record<string, string>>(unicodeKey)
      const payload = { ru: 'Тема', vi: 'Giao diện' }

      await storage.set(payload)

      expect(figma.clientStorage.setAsync).toHaveBeenCalledWith(
        expect.stringContaining(unicodeKey),
        expect.objectContaining({ value: payload })
      )
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('reset() should clear cached instances registry completely', () => {
      const s1 = FigmaClientStorage.getInstance('test-key')
      FigmaClientStorage.reset()
      const s2 = FigmaClientStorage.getInstance('test-key')

      expect(s1).not.toBe(s2)
    })
  })
})
