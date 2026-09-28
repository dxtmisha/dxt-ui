import { beforeEach, describe, expect, it } from 'vitest'
import { MediaFileCategory, MediaFileGroup } from '../../types/fileTypes'
import { MediaFileIcon } from '../MediaFileIcon'
import { MediaFiles } from '../MediaFiles'

describe('MediaFiles', () => {
  beforeEach(() => {
    // Reset custom icons registry before each test to avoid test pollution
    for (const key in MediaFileIcon.icons) {
      delete MediaFileIcon.icons[key]
    }
  })

  describe('static getList', () => {
    it('should return the full list of file configurations', () => {
      const list = MediaFiles.getList()

      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)

      const pngItem = list.find(item => item.code === 'png')
      expect(pngItem).toBeDefined()
      expect(pngItem?.name).toBe('PNG Image')
      expect(pngItem?.category).toBe(MediaFileCategory.image)
    })
  })

  describe('static get', () => {
    it('should return default neutral item for a non-existent code', () => {
      const item = MediaFiles.get('nonexistent_code')
      expect(item).toBeDefined()
      expect(item?.code).toBe('file')
      expect(item?.name).toBe('File')
      expect(item?.category).toBe(MediaFileCategory.system)
      expect(item?.group).toBe(MediaFileGroup.neutral)
    })

    it('should return a shallow copy of the file configuration item', () => {
      const item1 = MediaFiles.get('pdf')
      const item2 = MediaFiles.get('pdf')

      expect(item1).toBeDefined()
      expect(item2).toBeDefined()
      expect(item1).not.toBe(item2)
      expect(item1?.code).toBe('pdf')
      expect(item1?.name).toBe('PDF Document')
      expect(item1?.category).toBe(MediaFileCategory.document)
    })

    it('should normalize code by trimming and lowercase', () => {
      const item = MediaFiles.get('  PNG  ')

      expect(item).toBeDefined()
      expect(item?.code).toBe('png')
    })

    it('should include the registered custom icon if present', () => {
      MediaFileIcon.add('pdf', 'custom-pdf-svg')

      const item = MediaFiles.get('pdf')
      expect(item?.icon).toBe('custom-pdf-svg')
    })
  })

  describe('static isLink', () => {
    it('should return true for unix paths', () => {
      expect(MediaFiles.isLink('/var/log/file.txt')).toBe(true)
      expect(MediaFiles.isLink('folder/file.png')).toBe(true)
    })

    it('should return true for windows paths', () => {
      expect(MediaFiles.isLink('C:\\Users\\file.txt')).toBe(true)
      expect(MediaFiles.isLink('folder\\file.png')).toBe(true)
    })

    it('should return true for urls', () => {
      expect(MediaFiles.isLink('http://example.com/file.pdf')).toBe(true)
      expect(MediaFiles.isLink('https://example.com/file.pdf')).toBe(true)
    })

    it('should return false for plain filenames or codes', () => {
      expect(MediaFiles.isLink('report.pdf')).toBe(false)
      expect(MediaFiles.isLink('png')).toBe(false)
    })
  })
})
