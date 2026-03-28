/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { TranslateInstance } from '../TranslateInstance'
import { TranslateFile } from '../TranslateFile'
import { Api } from '../Api'
import { TRANSLATE_GLOBAL_PREFIX } from '../../types/translateTypes'

describe('TranslateInstance', () => {
  let translate: TranslateInstance
  let mockFile: TranslateFile
  let mockApiGet: any
  let mockIsLocalhost: any

  beforeEach(() => {
    vi.useFakeTimers()
    mockFile = new TranslateFile()
    translate = new TranslateInstance('/api/test', 'list', mockFile)

    mockApiGet = vi.spyOn(Api, 'get').mockResolvedValue({})
    mockIsLocalhost = vi.spyOn(Api, 'isLocalhost').mockReturnValue(true)

    vi.spyOn(mockFile, 'getLocation').mockReturnValue('en-US')
    vi.spyOn(mockFile, 'getLanguage').mockReturnValue('en')
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Sync execution', () => {
    it('should return translation by specific location', () => {
      translate.addSyncByLocation({
        'en-US': { hello: 'Hello US' },
        en: { hello: 'Hello EN' },
        [TRANSLATE_GLOBAL_PREFIX]: { hello: 'Hello Global' }
      })

      expect(translate.getSync('hello')).toBe('Hello US')
    })

    it('should fall back to language if location lacks the key', () => {
      translate.addSyncByLocation({
        en: { hello: 'Hello EN' },
        [TRANSLATE_GLOBAL_PREFIX]: { hello: 'Hello Global' }
      })

      expect(translate.getSync('hello')).toBe('Hello EN')
    })

    it('should fall back to global if language and location lack the key', () => {
      translate.addSyncByLocation({
        [TRANSLATE_GLOBAL_PREFIX]: { hello: 'Hello Global' }
      })

      expect(translate.getSync('hello')).toBe('Hello Global')
    })

    it('should return the key if no translation is found', () => {
      expect(translate.getSync('missing.key')).toBe('missing.key')
    })

    it('should return " " if first is true and text is missing', () => {
      expect(translate.getSync('missing.key', true)).toBe(' ')
    })

    it('should replace templates using array values', () => {
      translate.addSync({ greeting: 'Hello, %d!' })
      expect(translate.getSync('greeting', false, ['World'])).toBe('Hello, World!')
    })

    it('should replace templates using object values', () => {
      translate.addSync({ items: 'You have [count] [type].' })
      expect(translate.getSync('items', false, { count: 'five', type: 'apples' })).toBe('You have five apples.')
    })
  })

  describe('getListSync', () => {
    it('should return an object with translated values', () => {
      translate.addSync({
        'btn.save': 'Save',
        'btn.cancel': 'Cancel'
      })

      const list = translate.getListSync(['btn.save', 'btn.cancel', 'btn.missing'])

      expect(list).toEqual({
        'btn.save': 'Save',
        'btn.cancel': 'Cancel',
        'btn.missing': 'btn.missing'
      })
    })

    it('should replace templates when passing an array to list', () => {
      translate.addSync({
        greet: 'Hello, %d!'
      })

      const list = translate.getListSync([['greet', 'Alice']])

      expect(list).toEqual({
        greet: 'Hello, Alice!'
      })
    })
  })

  describe('Batch update (add)', () => {
    it('should batch multiple calls into a single API request', async () => {
      mockIsLocalhost.mockReturnValue(false)
      mockApiGet.mockResolvedValue({ key1: 'Value 1', key2: 'Value 2' })

      const p1 = translate.add('key1')
      const p2 = translate.add('key2')

      await vi.advanceTimersByTimeAsync(200)

      await Promise.all([p1, p2])

      expect(mockApiGet).toHaveBeenCalledTimes(1)
      expect(mockApiGet).toHaveBeenCalledWith(expect.objectContaining({
        request: { list: ['key1', 'key2'] }
      }))

      expect(translate.getSync('key1')).toBe('Value 1')
      expect(translate.getSync('key2')).toBe('Value 2')
    })

    it('should not call API if on localhost', async () => {
      mockIsLocalhost.mockReturnValue(true)
      await translate.get('hello')

      expect(mockApiGet).not.toHaveBeenCalled()
    })

    it('should not add to cache if hasName is true (optimization fix)', async () => {
      mockIsLocalhost.mockReturnValue(false)
      translate.addSync({ hello: 'World' })

      const promise = translate.add('hello')
      await vi.advanceTimersByTimeAsync(200)
      await promise

      expect(mockApiGet).not.toHaveBeenCalled()
    })
  })

  describe('TranslateFile interaction', () => {
    it('should use TranslateFile if isFile() is true', async () => {
      mockIsLocalhost.mockReturnValue(false)
      vi.spyOn(mockFile, 'isFile').mockReturnValue(true)
      const mockGetList = vi.spyOn(mockFile, 'getList').mockResolvedValue({ hello: 'World from File' })

      const promise = translate.get('hello')
      await vi.advanceTimersByTimeAsync(200)

      const text = await promise

      expect(mockGetList).toHaveBeenCalled()
      expect(mockApiGet).not.toHaveBeenCalled()
      expect(text).toBe('World from File')
    })
  })

  describe('Setters and Chaining', () => {
    it('should support chaining for setUrl, setPropsName, setReadApi', () => {
      expect(translate.setUrl('/new')).toBe(translate)
      expect(translate.setPropsName('data')).toBe(translate)
      expect(translate.setReadApi(true)).toBe(translate)
    })
  })

  describe('getList (async)', () => {
    it('should return a promise that resolves with multiple translations', async () => {
      translate.addSync({ a: 'Alpha', b: 'Beta' })
      const list = await translate.getList(['a', 'b'])

      expect(list).toEqual({ a: 'Alpha', b: 'Beta' })
    })

    it('should handle template replacements in getList', async () => {
      translate.addSync({ greet: 'Hi, %d!' })
      const list = await translate.getList([['greet', 'John']])

      expect(list).toEqual({ greet: 'Hi, John!' })
    })
  })

  describe('addNormalOrSync', () => {
    it('should addSync on localhost', async () => {
      mockIsLocalhost.mockReturnValue(true)
      await translate.addNormalOrSync({ 'test.key': 'Value' })
      expect(translate.getSync('test.key')).toBe('Value')
    })

    it('should add async on non-localhost', async () => {
      mockIsLocalhost.mockReturnValue(false)
      mockApiGet.mockResolvedValue({ 'test.key': 'API Value' })

      const promise = translate.addNormalOrSync({ 'test.key': 'Something' })
      await vi.advanceTimersByTimeAsync(200)
      await promise

      expect(translate.getSync('test.key')).toBe('API Value')
    })
  })
})
