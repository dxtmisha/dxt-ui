/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Translate, TRANSLATE_GLOBAL_PREFIX } from '../Translate'
import { Api } from '../Api'
import { Geo } from '../Geo'

describe('Translate', () => {
  let mockGetLocation: any
  let mockIsLocalhost: any
  let mockApiGet: any

  beforeEach(() => {
    // Clear the protected internal dictionaries
    const anyTranslate = Translate as any
    for (const key in anyTranslate.data) delete anyTranslate.data[key]
    anyTranslate.cache = []
    anyTranslate.resolveList = []

    mockGetLocation = vi.spyOn(Geo, 'getLocation').mockReturnValue('en-US')
    mockIsLocalhost = vi.spyOn(Api, 'isLocalhost').mockReturnValue(true)
    mockApiGet = vi.spyOn(Api, 'get').mockResolvedValue({})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Sync getters and fallbacks', () => {
    it('should return translation by a specific location', () => {
      Translate.addSyncByLocation({
        'en-US': { hello: 'Hello US' },
        'en': { hello: 'Hello EN' },
        [TRANSLATE_GLOBAL_PREFIX]: { hello: 'Hello Global' }
      })

      expect(Translate.getSync('hello')).toBe('Hello US')
    })

    it('should fall back to language if the location lacks the key', () => {
      Translate.addSyncByLocation({
        en: { hello: 'Hello EN' },
        [TRANSLATE_GLOBAL_PREFIX]: { hello: 'Hello Global' }
      })

      expect(Translate.getSync('hello')).toBe('Hello EN')
    })

    it('should fall back to global if language and location lack the key', () => {
      Translate.addSyncByLocation({
        [TRANSLATE_GLOBAL_PREFIX]: { hello: 'Hello Global' }
      })

      expect(Translate.getSync('hello')).toBe('Hello Global')
    })

    it('should return the key name if no translation is found', () => {
      expect(Translate.getSync('missing.key')).toBe('missing.key')
    })

    it('should return an empty string if the first is set to false and text is missing', () => {
      expect(Translate.getSync('missing.key', true)).toBe(' ') // As per `first ? ' ' : name` in code
    })
  })

  describe('Template replacement', () => {
    it('should replace templates using array values', () => {
      Translate.addSync({ greeting: 'Hello, %d!' })
      expect(Translate.getSync('greeting', false, ['World'])).toBe('Hello, World!')
    })

    it('should replace templates using object values', () => {
      Translate.addSync({ items: 'You have [count] [type].' })
      expect(Translate.getSync('items', false, { count: 'five', type: 'apples' })).toBe('You have five apples.')
    })
  })

  describe('getListSync', () => {
    it('should return an object with translated values', () => {
      Translate.addSync({
        'btn.save': 'Save',
        'btn.cancel': 'Cancel'
      })

      const list = Translate.getListSync(['btn.save', 'btn.cancel', 'btn.missing'])

      expect(list).toEqual({
        'btn.save': 'Save',
        'btn.cancel': 'Cancel',
        'btn.missing': 'btn.missing'
      })
    })

    it('should replace templates when passing an array to list', () => {
      Translate.addSync({
        greet: 'Hello, %d!'
      })

      const list = Translate.getListSync([['greet', 'Alice']])

      expect(list).toEqual({
        greet: 'Hello, Alice!'
      })
    })
  })

  describe('Async getters and API', () => {
    it('should return a cached translation without calling API', async () => {
      Translate.addSync({ hello: 'Hello API' })
      const text = await Translate.get('hello')

      expect(text).toBe('Hello API')
      expect(mockApiGet).not.toHaveBeenCalled()
    })

    it('should call API when translation is missing and not localhost', async () => {
      mockIsLocalhost.mockReturnValue(false)
      mockApiGet.mockResolvedValue({ hello: 'World API' })

      const textPromise = Translate.get('hello')

      // Fast-forward timers if necessary or just await
      // Wait for timeout (160ms) of Translate.add
      await new Promise(resolve => setTimeout(resolve, 200))
      const text = await textPromise

      expect(mockApiGet).toHaveBeenCalled()
      expect(text).toBe('World API')
    })

    it('should not call API when on localhost and the key is missing', async () => {
      mockIsLocalhost.mockReturnValue(true)

      const text = await Translate.get('hello')

      expect(mockApiGet).not.toHaveBeenCalled()
      expect(text).toBe('hello')
    })
  })

  describe('Data manipulation', () => {
    it('addSync should use exactly the current location', () => {
      Translate.addSync({ direct: 'Added directly' })
      expect(Translate.getSync('direct')).toBe('Added directly')

      // Changing location should lose the translation
      mockGetLocation.mockReturnValue('ru-RU')
      expect(Translate.getSync('direct')).toBe('direct') // fallback to key
    })

    it('addNormalOrSync should use addSync on localhost', async () => {
      mockIsLocalhost.mockReturnValue(true)
      await Translate.addNormalOrSync({ 'test.key': 'test.value' })

      expect(Translate.getSync('test.key')).toBe('test.value')
    })

    it('setUrl and setPropsName should return Translate for chaining', () => {
      expect(Translate.setUrl('/new/url')).toBe(Translate)
      expect(Translate.setPropsName('newProps')).toBe(Translate)
    })
  })
})
