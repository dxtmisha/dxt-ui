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

  getResolvedIndex(): string | undefined {
    return this.getIndex()
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

    it('should return true if files exist for the current location', () => {
      translateFile.add({ 'en-US': vi.fn() })
      expect(translateFile.isFile()).toBe(true)
    })

    it('should return false if no files exist for the current location', () => {
      translateFile.add({ 'fr-FR': vi.fn() })
      expect(translateFile.isFile()).toBe(false)
    })
  })

  describe('getList and caching', () => {
    it('should return undefined when no matching file exists for current location', async () => {
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

    it('should catch file loading errors and report to ErrorCenter', async () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      const loadError = new Error('Failed to load dictionary')
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
  })

  describe('getIndex prioritization', () => {
    it('should prioritize Location > Language > Global', () => {
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
    })
  })

  describe('constructor options', () => {
    it('should accept initial data and custom language and location getters', async () => {
      const mockFrenchLoader = vi.fn().mockResolvedValue({ greeting: 'Bonjour' })
      const customFile = new TranslateFile(
        { 'fr-FR': mockFrenchLoader },
        () => 'fr',
        () => 'fr-FR'
      )
      expect(customFile.getLanguage()).toBe('fr')
      expect(customFile.getLocation()).toBe('fr-FR')
      expect(customFile.isFile()).toBe(true)
      expect(await customFile.getList()).toEqual({ greeting: 'Bonjour' })
    })
  })
})
