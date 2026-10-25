/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi, type MockInstance } from 'vitest'
import { TranslateInstance } from '../TranslateInstance'
import { TranslateFile } from '../TranslateFile'
import { Api } from '../Api'
import { ErrorCenter } from '../ErrorCenter'
import { TRANSLATE_GLOBAL_PREFIX } from '../../types/translateTypes'

describe('TranslateInstance', () => {
  let translate: TranslateInstance
  let mockFile: TranslateFile
  let mockApiGet: MockInstance<typeof Api.get>
  let mockIsLocalhost: MockInstance<typeof Api.isLocalhost>

  beforeEach(() => {
    vi.useFakeTimers()
    mockFile = new TranslateFile()
    translate = new TranslateInstance('/api/test', 'list', mockFile)

    mockApiGet = vi.spyOn(Api, 'get').mockResolvedValue({})
    mockIsLocalhost = vi.spyOn(Api, 'isLocalhost').mockReturnValue(true)
    vi.spyOn(Api.getStatus(), 'getStatus').mockReturnValue(200)

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
        'en': { hello: 'Hello EN' },
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

    it('should fall back properly when data contains an empty string "" for location', () => {
      translate.addSyncByLocation({
        'en-US': { emptyKey: '' },
        'en': { emptyKey: 'Fallback Language Value' }
      })

      expect(translate.getSync('emptyKey')).toBe('Fallback Language Value')
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

    it('should ignore empty string values in addSync()', () => {
      translate.addSync({ emptyText: '' })
      expect(translate.getSync('emptyText')).toBe('emptyText')
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

    it('should replace templates when passing an array tuple to getListSync', () => {
      translate.addSync({
        greet: 'Hello, %d!'
      })

      const list = translate.getListSync([['greet', 'Alice']])

      expect(list).toEqual({
        greet: 'Hello, Alice!'
      })
    })
  })

  describe('Batch update (add) & get', () => {
    it('should batch multiple calls into a single API request', async () => {
      mockIsLocalhost.mockReturnValue(false)
      mockApiGet.mockResolvedValue({ key1: 'Value 1', key2: 'Value 2' })

      const firstPromise = translate.add('key1')
      const secondPromise = translate.add('key2')

      await vi.advanceTimersByTimeAsync(200)

      await Promise.all([firstPromise, secondPromise])

      expect(mockApiGet).toHaveBeenCalledTimes(1)
      expect(mockApiGet).toHaveBeenCalledWith(expect.objectContaining({
        request: { list: ['key1', 'key2'] }
      }))

      expect(translate.getSync('key1')).toBe('Value 1')
      expect(translate.getSync('key2')).toBe('Value 2')
    })

    it('should ignore sentinel markers __TRANSLATE_START__ and __TRANSLATE_END__', async () => {
      mockIsLocalhost.mockReturnValue(false)
      await translate.add(['__TRANSLATE_START__', '__TRANSLATE_END__'])

      expect(mockApiGet).not.toHaveBeenCalled()
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

    it('should not add to cache if available in fallback language', async () => {
      mockIsLocalhost.mockReturnValue(false)
      vi.spyOn(mockFile, 'getLanguage').mockReturnValue('en')
      translate.addSyncByLocation({
        en: { fallback: 'Language Value' }
      })

      const promise = translate.add('fallback')
      await vi.advanceTimersByTimeAsync(200)
      await promise

      expect(mockApiGet).not.toHaveBeenCalled()
      expect(translate.getSync('fallback')).toBe('Language Value')
    })

    it('should not add to cache if available in global fallback', async () => {
      mockIsLocalhost.mockReturnValue(false)
      translate.addSyncByLocation({
        [TRANSLATE_GLOBAL_PREFIX]: { globalKey: 'Global Value' }
      })

      const promise = translate.add('globalKey')
      await vi.advanceTimersByTimeAsync(200)
      await promise

      expect(mockApiGet).not.toHaveBeenCalled()
      expect(translate.getSync('globalKey')).toBe('Global Value')
    })

    it('should apply replacement both on cached text and after first async fetch in get()', async () => {
      mockIsLocalhost.mockReturnValue(false)
      mockApiGet.mockResolvedValue({ greeting: 'Hello, %d!' })

      // First async fetch
      const firstPromise = translate.get('greeting', ['World'])
      await vi.advanceTimersByTimeAsync(200)
      expect(await firstPromise).toBe('Hello, World!')

      // Second call on cached text
      expect(await translate.get('greeting', ['Alice'])).toBe('Hello, Alice!')
    })

    it('should resolve add() and fall back to key name when API request rejects, reporting to ErrorCenter', async () => {
      mockIsLocalhost.mockReturnValue(false)
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      mockApiGet.mockRejectedValueOnce(new Error('Network error'))

      const promise = translate.get('missingKey')
      await vi.advanceTimersByTimeAsync(200)
      const text = await promise

      expect(text).toBe('missingKey')
      expect(errorSpy).toHaveBeenCalledWith(expect.objectContaining({
        group: 'translate',
        code: 'error'
      }))
    })

    it('should isolate in-flight batch from new add() calls arriving during network request', async () => {
      mockIsLocalhost.mockReturnValue(false)

      let resolveFirstBatch!: (value: Record<string, string>) => void
      mockApiGet
        .mockImplementationOnce(() => new Promise((resolve) => {
          resolveFirstBatch = resolve
        }))
        .mockResolvedValueOnce({ keyB: 'Value B' })

      const promiseA = translate.get('keyA')
      await vi.advanceTimersByTimeAsync(200)

      // While batch 1 is in-flight, request keyB
      const promiseB = translate.get('keyB')

      // Resolve batch 1
      resolveFirstBatch({ keyA: 'Value A' })
      expect(await promiseA).toBe('Value A')

      // Advance timer for batch 2
      await vi.advanceTimersByTimeAsync(200)
      expect(await promiseB).toBe('Value B')
    })
  })

  describe('TranslateFile interaction', () => {
    it('should use TranslateFile if isFile() is true or addSyncByFile is used', async () => {
      mockIsLocalhost.mockReturnValue(false)
      translate.addSyncByFile({
        'en-US': async () => ({ hello: 'World from File' })
      })

      const promise = translate.get('hello')
      await vi.advanceTimersByTimeAsync(200)

      const text = await promise

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
      translate.addSync({ firstKey: 'Alpha', secondKey: 'Beta' })
      const list = await translate.getList(['firstKey', 'secondKey'])

      expect(list).toEqual({ firstKey: 'Alpha', secondKey: 'Beta' })
    })

    it('should handle template replacements in getList', async () => {
      translate.addSync({ greet: 'Hi, %d!' })
      const list = await translate.getList([['greet', 'John']])

      expect(list).toEqual({ greet: 'Hi, John!' })
    })

    it('should resolve immediately with empty object when getList([]) is called with empty array', async () => {
      const list = await translate.getList([])
      expect(list).toEqual({})
    })

    it('should resolve safely with key names when make() or get() fails', async () => {
      mockIsLocalhost.mockReturnValue(false)
      vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      mockApiGet.mockRejectedValueOnce(new Error('API Down'))

      const listPromise = translate.getList(['failKey1', 'failKey2'])
      await vi.advanceTimersByTimeAsync(200)
      const list = await listPromise

      expect(list).toEqual({
        failKey1: 'failKey1',
        failKey2: 'failKey2'
      })
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
