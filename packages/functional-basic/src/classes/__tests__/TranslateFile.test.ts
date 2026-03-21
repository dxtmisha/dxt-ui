/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { TranslateFile } from '../TranslateFile'
import { Geo } from '../Geo'
import { TRANSLATE_GLOBAL_PREFIX } from '../../types/translateTypes'

describe('TranslateFile', () => {
  beforeEach(() => {
    // Clear protected static properties
    const anyTranslateFile = TranslateFile as any
    anyTranslateFile.files = {}
    anyTranslateFile.data = {}
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('add and isFile', () => {
    it('should register file functions correctly', () => {
      const mockFile = vi.fn().mockResolvedValue({ hello: 'world' })
      TranslateFile.add({ 'en-US': mockFile })

      const anyTranslateFile = TranslateFile as any
      expect(anyTranslateFile.files['en-US']).toBe(mockFile)
    })

    it('should return true if files exist for the current location', () => {
      vi.spyOn(Geo, 'getLocation').mockReturnValue('en-US')
      TranslateFile.add({ 'en-US': vi.fn() })

      expect(TranslateFile.isFile()).toBe(true)
    })

    it('should return false if no files exist for the current location', () => {
      vi.spyOn(Geo, 'getLocation').mockReturnValue('en-US')
      vi.spyOn(Geo, 'getLanguage').mockReturnValue('en')
      TranslateFile.add({ 'fr-FR': vi.fn() })

      expect(TranslateFile.isFile()).toBe(false)
    })
  })

  describe('getList and caching', () => {
    it('should fetch data from a file function and cache it', async () => {
      const mockData = { hello: 'world' }
      const mockFile = vi.fn().mockResolvedValue(mockData)
      vi.spyOn(Geo, 'getLocation').mockReturnValue('en-US')

      TranslateFile.add({ 'en-US': mockFile })

      // First call - should call mockFile
      const result1 = await TranslateFile.getList()
      expect(result1).toEqual(mockData)
      expect(mockFile).toHaveBeenCalledTimes(1)

      // Second call - should use cache, not call mockFile
      const result2 = await TranslateFile.getList()
      expect(result2).toEqual(mockData)
      expect(mockFile).toHaveBeenCalledTimes(1)
    })
  })

  describe('getIndex prioritization', () => {
    it('should prioritize Location > Language > Global', () => {
      vi.spyOn(Geo, 'getLocation').mockReturnValue('en-US')
      vi.spyOn(Geo, 'getLanguage').mockReturnValue('en')

      const mockLocation = vi.fn()
      const mockLanguage = vi.fn()
      const mockGlobal = vi.fn()

      TranslateFile.add({
        'en-US': mockLocation,
        'en': mockLanguage,
        [TRANSLATE_GLOBAL_PREFIX]: mockGlobal
      })

      // Try with all 3 - should pick location
      const anyTranslateFile = TranslateFile as any
      expect(anyTranslateFile.getIndex()).toBe('en-US')

      // Remove location - should pick a language
      delete anyTranslateFile.files['en-US']
      expect(anyTranslateFile.getIndex()).toBe('en')

      // Remove language - should pick global
      delete anyTranslateFile.files['en']
      expect(anyTranslateFile.getIndex()).toBe(TRANSLATE_GLOBAL_PREFIX)
    })
  })
})
