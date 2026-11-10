import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaStorage } from '../FigmaStorage'

describe('FigmaStorage', () => {
  let mockNode: any

  beforeEach(() => {
    FigmaStorage.reset()
    mockNode = {
      id: 'test-node-id',
      getPluginData: vi.fn(),
      setPluginData: vi.fn()
    }
    vi.stubGlobal('figma', {
      root: mockNode,
      getNodeByIdAsync: vi.fn().mockResolvedValue(mockNode)
    })
  })

  afterEach(() => {
    FigmaStorage.reset()
    vi.unstubAllGlobals()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('getInstance() should return cached singleton for identical node and name', () => {
      const s1 = FigmaStorage.getInstance('settings', mockNode)
      const s2 = FigmaStorage.getInstance('settings', mockNode)
      const s3 = FigmaStorage.getInstance('other-setting', mockNode)

      expect(s1).toBe(s2)
      expect(s1).not.toBe(s3)
    })

    it('getInstanceById() should resolve node asynchronously and return instance', async () => {
      const storage = await FigmaStorage.getInstanceById('settings', 'test-node-id')

      expect(storage).toBeInstanceOf(FigmaStorage)
      expect(figma.getNodeByIdAsync).toHaveBeenCalledWith('test-node-id')
    })

    it('get() should load and deserialize valid JSON data from pluginData', () => {
      const storage = new FigmaStorage<string>('theme', mockNode)
      mockNode.getPluginData.mockReturnValue(JSON.stringify({ value: 'dark', age: 1000 }))

      const value = storage.get()

      expect(value).toBe('dark')
      expect(mockNode.getPluginData).toHaveBeenCalled()
    })

    it('set() should persist serialized data to pluginData using direct values or factories', () => {
      const storage = new FigmaStorage<string>('status', mockNode)
      storage.set('online')

      expect(mockNode.setPluginData).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining('"value":"online"')
      )

      storage.set(() => 'busy')
      expect(mockNode.setPluginData).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining('"value":"busy"')
      )
    })

    it('remove() should clear pluginData with empty string and reset memory', () => {
      const storage = new FigmaStorage<string>('temp', mockNode)
      const result = storage.remove()

      expect(result).toBe(storage)
      expect(mockNode.setPluginData).toHaveBeenCalledWith(expect.any(String), '')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('get() should persist and return defaultValue when pluginData is empty', () => {
      const storage = new FigmaStorage<string>('config', mockNode)
      mockNode.getPluginData.mockReturnValue('')

      const value = storage.get('default-config')

      expect(value).toBe('default-config')
      expect(mockNode.setPluginData).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining('"value":"default-config"')
      )
    })

    it('get() should correctly handle falsy default values (0, false, empty string)', () => {
      mockNode.getPluginData.mockReturnValue('')

      const numStorage = new FigmaStorage<number>('zero-val', mockNode)
      expect(numStorage.get(0)).toBe(0)

      const boolStorage = new FigmaStorage<boolean>('bool-val', mockNode)
      expect(boolStorage.get(false)).toBe(false)

      const strStorage = new FigmaStorage<string>('str-val', mockNode)
      expect(strStorage.get('')).toBe('')
    })

    it('get() without defaultValue should return undefined when storage is empty', () => {
      const storage = new FigmaStorage<string>('empty', mockNode)
      mockNode.getPluginData.mockReturnValue('')

      expect(storage.get()).toBeUndefined()
      expect(mockNode.setPluginData).not.toHaveBeenCalled()
    })

    it('getValue() should safely handle malformed JSON in pluginData', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      const storage = new FigmaStorage<string>('corrupt', mockNode)
      mockNode.getPluginData.mockReturnValue('not-valid-json{{{')

      const value = storage.get()

      expect(value).toBeUndefined()
      expect(consoleSpy).toHaveBeenCalled()
      consoleSpy.mockRestore()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should correctly store and read multilingual data (Cyrillic, Vietnamese, Emoji)', () => {
      const storage = new FigmaStorage<{ ru: string, vi: string }>('языки_ngôn_ngữ', mockNode)
      const payload = { ru: 'Тестовые данные', vi: 'Dữ liệu kiểm tra 🚀' }

      storage.set(payload)

      expect(mockNode.setPluginData).toHaveBeenCalledWith(
        expect.any(String),
        expect.stringContaining('Dữ liệu kiểm tra 🚀')
      )
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('reset() should clear cached storage instances', () => {
      const s1 = FigmaStorage.getInstance('test', mockNode)
      FigmaStorage.reset()
      const s2 = FigmaStorage.getInstance('test', mockNode)

      expect(s1).not.toBe(s2)
    })
  })
})
