/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { TranslateFile } from '../TranslateFile'
import { Geo } from '../Geo'
import { TRANSLATE_GLOBAL_PREFIX } from '../../types/translateTypes'

describe('TranslateFile', () => {
  let translateFile: TranslateFile

  beforeEach(() => {
    translateFile = new TranslateFile()
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

      const anyFile = translateFile as any
      expect(anyFile.files['en-US']).toBe(mockFile)
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
    it('should fetch data from a file function and cache it', async () => {
      const mockData = { hello: 'world' }
      const mockFile = vi.fn().mockResolvedValue(mockData)

      translateFile.add({ 'en-US': mockFile })

      // First call - should call mockFile
      const result1 = await translateFile.getList()
      expect(result1).toEqual(mockData)
      expect(mockFile).toHaveBeenCalledTimes(1)

      // Second call - should use cache, not call mockFile
      const result2 = await translateFile.getList()
      expect(result2).toEqual(mockData)
      expect(mockFile).toHaveBeenCalledTimes(1)
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

      const anyFile = translateFile as any
      expect(anyFile.getIndex()).toBe('en-US')

      // Remove location - should pick a language
      delete anyFile.files['en-US']
      expect(anyFile.getIndex()).toBe('en')

      // Remove language - should pick global
      delete anyFile.files['en']
      expect(anyFile.getIndex()).toBe(TRANSLATE_GLOBAL_PREFIX)
    })
  })

  describe('constructor options', () => {
    it('should accept custom language and location getters', () => {
      const customFile = new TranslateFile(
        {},
        () => 'fr',
        () => 'fr-FR'
      )
      expect(customFile.getLanguage()).toBe('fr')
      expect(customFile.getLocation()).toBe('fr-FR')
    })
  })
})
