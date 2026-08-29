import { afterEach, describe, expect, it, vi } from 'vitest'
import { LibraryAiWiki } from '../LibraryAiWiki'
import { LibraryAiWikiItem } from '../LibraryAiWikiItem'
import { LibraryItems } from '../LibraryItems'
import { PropertiesFile } from '../../Properties/PropertiesFile'
import { PropertiesConfig } from '../../Properties/PropertiesConfig'

describe('LibraryAiWiki and LibraryAiWikiItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('LibraryAiWikiItem', () => {
    it('constructs code, filename and import path', () => {
      vi.spyOn(PropertiesConfig, 'getProjectName').mockReturnValue('ui')
      const item = new LibraryAiWikiItem({
        name: 'button',
        design: 'dxt',
        alias: 'dxt.button',
        codeFull: 'DxtButton',
        dir: 'Button'
      })

      expect(item.getCode()).toBe('DxtButton')
      expect(item.getComponentFileNameAiWiki()).toBe('DxtButtonAiWiki.vue')
      expect(item.getImport()).toContain('import DxtButton from')
      expect(item.getImport()).toContain('Button/DxtButtonAiWiki.vue')
    })

    it('checks if AI wiki component exists with isAiWiki()', () => {
      const item = new LibraryAiWikiItem({
        name: 'button',
        design: 'dxt',
        alias: 'dxt.button',
        codeFull: 'DxtButton',
        dir: 'Button'
      })

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      expect(item.isAiWiki()).toBe(true)

      vi.spyOn(PropertiesFile, 'is').mockReturnValue(false)
      expect(item.isAiWiki()).toBe(false)
    })
  })

  describe('LibraryAiWiki', () => {
    it('generates wiki list and component in make()', () => {
      const items = new LibraryItems()
      vi.spyOn(items, 'getComponentList').mockReturnValue([
        {
          name: 'button',
          design: 'dxt',
          alias: 'dxt.button',
          codeFull: 'DxtButton',
          dir: 'Button'
        }
      ])
      vi.spyOn(PropertiesFile, 'is').mockReturnValue(true)
      const writeSpy = vi.spyOn(items, 'write').mockImplementation(() => {})
      const writeByPathSpy = vi.spyOn(PropertiesFile, 'writeByPath').mockImplementation(() => {})

      const wiki = new LibraryAiWiki(items)
      wiki.make()

      expect(writeSpy).toHaveBeenCalledWith(
        'ai-list',
        expect.arrayContaining([
          expect.stringContaining('export const aiList: any[] = [')
        ]),
        'wiki.ts'
      )
      expect(writeByPathSpy).toHaveBeenCalledWith(
        expect.arrayContaining(['AiWiki.vue']),
        expect.stringContaining('<DxtTestPage')
      )
    })
  })
})
