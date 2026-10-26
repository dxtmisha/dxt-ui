/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { ErrorCenter } from '../ErrorCenter'
import { TranslateFile } from '../TranslateFile'
import { Geo } from '../Geo'
import { TRANSLATE_GLOBAL_PREFIX, type TranslateDataFile } from '../../types/translateTypes'

class TestableTranslateFile extends TranslateFile {
  getFilesMap(): TranslateDataFile {
    return this.files
  }

  getResolvedIndex(location?: string, language?: string): string | undefined {
    return this.getIndex(location, language)
  }

  getCachedData(index: string) {
    return this.getByData(index)
  }

  getActivePromises(index: string) {
    return this.promises[index]
  }
}

describe('TranslateFile', () => {
  let translateFile: TestableTranslateFile

  beforeEach(() => {
    translateFile = new TestableTranslateFile()
    vi.spyOn(Geo, 'getLocation').mockReturnValue('en-US')
    vi.spyOn(Geo, 'getLanguage').mockReturnValue('en')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('add and isFile', () => {
    it('should register file functions correctly', () => {
      const mockFile = vi.fn().mockResolvedValue({ hello: 'world' })
      translateFile.add({ 'en-US': mockFile })

      expect(translateFile.getFilesMap()['en-US']).toBe(mockFile)
    })

    it('should safely handle undefined, null or empty object in add', () => {
      // @ts-expect-error Testing invalid runtime value
      expect(() => translateFile.add(null)).not.toThrow()
      // @ts-expect-error Testing invalid runtime value
      expect(() => translateFile.add(undefined)).not.toThrow()
      expect(() => translateFile.add({})).not.toThrow()
    })

    it('should ignore non-function items passed to add', () => {
      // @ts-expect-error Testing invalid runtime value
      translateFile.add({ 'en-US': 'not-a-function' })
      expect(translateFile.getFilesMap()['en-US']).toBeUndefined()
    })

    it('should return true if files exist for current default location', () => {
      translateFile.add({ 'en-US': vi.fn() })
      expect(translateFile.isFile()).toBe(true)
    })

    it('should return false if no files exist for current default location', () => {
      translateFile.add({ 'fr-FR': vi.fn() })
      expect(translateFile.isFile()).toBe(false)
    })

    it('should evaluate isFile with explicit location and language arguments', () => {
      translateFile.add({
        'de-DE': vi.fn(),
        'es': vi.fn()
      })

      expect(translateFile.isFile('de-DE', 'de')).toBe(true)
      expect(translateFile.isFile('es-ES', 'es')).toBe(true)
      expect(translateFile.isFile('it-IT', 'it')).toBe(false)
    })
  })

  describe('getList and caching', () => {
    it('should return undefined when no matching file exists', async () => {
      translateFile.add({ 'fr-FR': vi.fn().mockResolvedValue({ bonjour: 'monde' }) })
      expect(await translateFile.getList()).toBeUndefined()
    })

    it('should fetch data from a file function and cache it', async () => {
      const mockData = { hello: 'world' }
      const mockFile = vi.fn().mockResolvedValue(mockData)

      translateFile.add({ 'en-US': mockFile })

      const firstResult = await translateFile.getList()
      expect(firstResult).toEqual(mockData)
      expect(mockFile).toHaveBeenCalledTimes(1)

      const secondResult = await translateFile.getList()
      expect(secondResult).toEqual(mockData)
      expect(mockFile).toHaveBeenCalledTimes(1)
    })

    it('should accept explicit location and language in getList', async () => {
      const germanData = { hallo: 'Welt' }
      const mockGerman = vi.fn().mockResolvedValue(germanData)
      translateFile.add({ 'de-DE': mockGerman })

      const result = await translateFile.getList('de-DE', 'de')
      expect(result).toEqual(germanData)
      expect(mockGerman).toHaveBeenCalledTimes(1)
    })

    it('should deduplicate concurrent in-flight requests for the same file', async () => {
      let resolvePromise: (data: Record<string, string>) => void
      const deferred = new Promise<Record<string, string>>((resolve) => {
        resolvePromise = resolve
      })
      const mockLoader = vi.fn().mockImplementation(() => deferred)

      translateFile.add({ 'en-US': mockLoader })

      const promise1 = translateFile.getList('en-US', 'en')
      const promise2 = translateFile.getList('en-US', 'en')

      expect(mockLoader).toHaveBeenCalledTimes(1)

      resolvePromise!({ hello: 'concurrent' })
      const [res1, res2] = await Promise.all([promise1, promise2])

      expect(res1).toEqual({ hello: 'concurrent' })
      expect(res2).toEqual({ hello: 'concurrent' })
      expect(mockLoader).toHaveBeenCalledTimes(1)
    })

    it('should track in-flight requests with unique id and promise object', async () => {
      let resolvePromise: (data: Record<string, string>) => void
      const deferred = new Promise<Record<string, string>>((resolve) => {
        resolvePromise = resolve
      })
      translateFile.add({ 'en-US': () => deferred })

      const pending = translateFile.getList('en-US', 'en')
      const activeItem = translateFile.getActivePromises('en-US')

      expect(activeItem).toBeDefined()
      expect(typeof activeItem?.id).toBe('number')
      expect(activeItem?.promise).toBeInstanceOf(Promise)

      resolvePromise!({ hello: 'id' })
      await pending
    })

    it('should not let older in-flight request overwrite newer cached data when updated via add()', async () => {
      let resolveSlowLoader: (data: Record<string, string>) => void
      const slowPromise = new Promise<Record<string, string>>((resolve) => {
        resolveSlowLoader = resolve
      })
      const slowLoader = vi.fn().mockImplementation(() => slowPromise)

      // 1. Initial slow loader registered
      translateFile.add({ 'en-US': slowLoader })

      // 2. First load triggered (in-flight)
      const firstPendingLoad = translateFile.getList('en-US', 'en')

      // 3. User updates loader while request is in-flight
      const fastLoader = vi.fn().mockResolvedValue({ version: 'v2-fresh' })
      translateFile.add({ 'en-US': fastLoader })

      // 4. Second load triggered with fresh loader
      const secondLoad = translateFile.getList('en-US', 'en')
      const secondResult = await secondLoad
      expect(secondResult).toEqual({ version: 'v2-fresh' })
      expect(translateFile.getCachedData('en-US')).toEqual({ version: 'v2-fresh' })

      // 5. Initial slow loader completes with obsolete data
      resolveSlowLoader!({ version: 'v1-stale' })
      const firstResult = await firstPendingLoad
      expect(firstResult).toEqual({ version: 'v1-stale' })

      // 6. Cache MUST NOT be poisoned by the older promise!
      expect(translateFile.getCachedData('en-US')).toEqual({ version: 'v2-fresh' })
    })

    it('should not delete newer active promise when older in-flight loader finishes finally', async () => {
      let resolveFirst: (data: Record<string, string>) => void
      let resolveSecond: (data: Record<string, string>) => void

      const firstPromise = new Promise<Record<string, string>>((resolve) => {
        resolveFirst = resolve
      })
      const secondPromise = new Promise<Record<string, string>>((resolve) => {
        resolveSecond = resolve
      })

      translateFile.add({ 'en-US': () => firstPromise })
      const load1 = translateFile.getList('en-US', 'en')

      // Update loader while load1 is pending
      translateFile.add({ 'en-US': () => secondPromise })
      const load2 = translateFile.getList('en-US', 'en')

      // load1 finishes
      resolveFirst!({ req: '1' })
      await load1

      // Active promise for second request must NOT have been deleted by load1's finally!
      expect(translateFile.getActivePromises('en-US')).toBeDefined()

      // Concurrent request during load2 must reuse load2
      const load3 = translateFile.getList('en-US', 'en')

      resolveSecond!({ req: '2' })
      const [res2, res3] = await Promise.all([load2, load3])
      expect(res2).toEqual({ req: '2' })
      expect(res3).toEqual({ req: '2' })
    })

    it('should invalidate cache when add() is called for an existing locale', async () => {
      const initialLoader = vi.fn().mockResolvedValue({ version: '1' })
      translateFile.add({ 'en-US': initialLoader })

      const firstResult = await translateFile.getList('en-US', 'en')
      expect(firstResult).toEqual({ version: '1' })

      const updatedLoader = vi.fn().mockResolvedValue({ version: '2' })
      translateFile.add({ 'en-US': updatedLoader })

      const secondResult = await translateFile.getList('en-US', 'en')
      expect(secondResult).toEqual({ version: '2' })
      expect(updatedLoader).toHaveBeenCalledTimes(1)
    })

    it('should reset cache when reset() is called', async () => {
      const mockLoader = vi.fn().mockResolvedValue({ greeting: 'hi' })
      translateFile.add({ 'en-US': mockLoader })

      await translateFile.getList('en-US', 'en')
      expect(mockLoader).toHaveBeenCalledTimes(1)

      translateFile.reset()
      expect(translateFile.getCachedData('en-US')).toBeUndefined()

      await translateFile.getList('en-US', 'en')
      expect(mockLoader).toHaveBeenCalledTimes(2)
    })

    it('should catch file loading errors, report to ErrorCenter and return undefined', async () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      const loadError = new Error('Network failure loading locale')
      const mockFile = vi.fn().mockRejectedValue(loadError)

      translateFile.add({ 'en-US': mockFile })

      const result = await translateFile.getList()
      expect(result).toBeUndefined()
      expect(errorSpy).toHaveBeenCalledWith({
        group: 'translate',
        code: 'error',
        details: loadError
      })
    })

    it('should recover and allow retry when loader throws a synchronous exception', async () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      let callCount = 0

      translateFile.add({
        'en-US': () => {
          callCount++
          if (callCount === 1) {
            throw new Error('Sync initialization error')
          }
          return Promise.resolve({ recovered: 'yes' })
        }
      })

      const firstResult = await translateFile.getList('en-US', 'en')
      expect(firstResult).toBeUndefined()
      expect(errorSpy).toHaveBeenCalledTimes(1)
      expect(translateFile.getActivePromises('en-US')).toBeUndefined()

      const secondResult = await translateFile.getList('en-US', 'en')
      expect(secondResult).toEqual({ recovered: 'yes' })
      expect(callCount).toBe(2)
    })

    it('should not poison cache if reset() is invoked while a load is still pending', async () => {
      let resolveSlowLoader: (data: Record<string, string>) => void
      const slowPromise = new Promise<Record<string, string>>((resolve) => {
        resolveSlowLoader = resolve
      })

      translateFile.add({
        'en-US': () => slowPromise
      })

      const pendingLoad = translateFile.getList('en-US', 'en')

      // Reset cache while loading is in progress
      translateFile.reset()

      // Slow loader finally completes after reset
      resolveSlowLoader!({ stale: 'data' })
      await pendingLoad

      // Cache should NOT be poisoned with stale data
      expect(translateFile.getCachedData('en-US')).toBeUndefined()
    })
  })

  describe('getIndex prioritization', () => {
    it('should prioritize Location > Language > Global with defaults', () => {
      const mockLocation = vi.fn()
      const mockLanguage = vi.fn()
      const mockGlobal = vi.fn()

      translateFile.add({
        'en-US': mockLocation,
        'en': mockLanguage,
        [TRANSLATE_GLOBAL_PREFIX]: mockGlobal
      })

      expect(translateFile.getResolvedIndex()).toBe('en-US')

      delete translateFile.getFilesMap()['en-US']
      expect(translateFile.getResolvedIndex()).toBe('en')

      delete translateFile.getFilesMap()['en']
      expect(translateFile.getResolvedIndex()).toBe(TRANSLATE_GLOBAL_PREFIX)

      delete translateFile.getFilesMap()[TRANSLATE_GLOBAL_PREFIX]
      expect(translateFile.getResolvedIndex()).toBeUndefined()
    })

    it('should prioritize Location > Language > Global with explicit arguments', () => {
      translateFile.add({
        'pt-BR': vi.fn(),
        'pt': vi.fn(),
        [TRANSLATE_GLOBAL_PREFIX]: vi.fn()
      })

      expect(translateFile.getResolvedIndex('pt-BR', 'pt')).toBe('pt-BR')
      expect(translateFile.getResolvedIndex('pt-PT', 'pt')).toBe('pt')
      expect(translateFile.getResolvedIndex('ja-JP', 'ja')).toBe(TRANSLATE_GLOBAL_PREFIX)
    })
  })

  describe('constructor options and getters', () => {
    it('should accept initial data and custom language and location getters', async () => {
      const mockFrenchLoader = vi.fn().mockResolvedValue({ greeting: 'Bonjour' })
      const customFile = new TranslateFile(
        { 'fr-FR': mockFrenchLoader },
        () => 'fr-FR',
        () => 'fr'
      )

      expect(customFile.getLanguage()).toBe('fr')
      expect(customFile.getLocation()).toBe('fr-FR')
      expect(customFile.isFile()).toBe(true)
      expect(await customFile.getList()).toEqual({ greeting: 'Bonjour' })
    })

    it('should accept static string values for language and location', () => {
      const customFile = new TranslateFile({}, 'vi-VN', 'vi')
      expect(customFile.getLanguage()).toBe('vi')
      expect(customFile.getLocation()).toBe('vi-VN')
    })
  })
})
