import { beforeEach, describe, expect, it } from 'vitest'
import { MediaFileCategory, MediaFileGroup } from '../../types/fileTypes'
import { MediaFileIcon } from '../MediaFileIcon'
import { MediaFiles } from '../MediaFiles'

describe('MediaFiles', () => {
  beforeEach(() => {
    MediaFileIcon.reset()
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

    it('should return a new array instance to prevent mutation of the internal registry', () => {
      const list1 = MediaFiles.getList()
      const initialLength = list1.length

      list1.pop()
      expect(list1.length).toBe(initialLength - 1)

      const list2 = MediaFiles.getList()
      expect(list2.length).toBe(initialLength)
    })

    it('should not allow modifying objects in the internal registry through getList items', () => {
      const list = MediaFiles.getList()
      const firstItem = list[0]
      const originalName = firstItem.name

      firstItem.name = 'Mutated Name'

      const freshList = MediaFiles.getList()
      expect(freshList[0].name).toBe(originalName)
    })

    it('should apply registered custom icons to items in getList', () => {
      MediaFileIcon.add('png', 'custom-png-svg-in-list')

      const list = MediaFiles.getList()
      const pngItem = list.find(item => item.code === 'png')
      expect(pngItem?.icon).toBe('custom-png-svg-in-list')
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

    it('should clone extensions array to prevent mutation of the internal registry', () => {
      const item1 = MediaFiles.get('docx')
      const initialExtensionsCount = item1?.extensions?.length ?? 0

      item1?.extensions?.push('mutated_extension')
      expect(item1?.extensions?.length).toBe(initialExtensionsCount + 1)

      const item2 = MediaFiles.get('docx')
      expect(item2?.extensions?.length).toBe(initialExtensionsCount)
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

    it('should find item by MIME type', () => {
      const item = MediaFiles.get('image/png')
      expect(item).toBeDefined()
      expect(item?.code).toBe('png')
      expect(item?.mime).toBe('image/png')
    })

    it('should find item by secondary extension from extensions list', () => {
      const item = MediaFiles.get('markdown')
      expect(item).toBeDefined()
      expect(item?.code).toBe('md')
      expect(item?.name).toBe('Markdown Document')

      const dotx = MediaFiles.get('dotx')
      expect(dotx).toBeDefined()
      expect(dotx?.code).toBe('docx')
    })

    it('should prioritize exact code match over secondary extensions', () => {
      const zipItem = MediaFiles.get('zip')
      expect(zipItem).toBeDefined()
      expect(zipItem?.code).toBe('zip')
      expect(zipItem?.category).toBe(MediaFileCategory.archive)
    })
  })

  describe('static getByMime', () => {
    it('should return item matching MIME type', () => {
      const item = MediaFiles.getByMime('application/pdf')
      expect(item).toBeDefined()
      expect(item?.code).toBe('pdf')
      expect(item?.name).toBe('PDF Document')
      expect(item?.mime).toBe('application/pdf')
    })

    it('should normalize MIME type by trimming and lowercase', () => {
      const item = MediaFiles.getByMime('  IMAGE/JPEG  ')
      expect(item).toBeDefined()
      expect(item?.code).toBe('jpeg')
      expect(item?.mime).toBe('image/jpeg')
    })

    it('should correctly resolve MIME types containing parameters or charset', () => {
      const item = MediaFiles.getByMime('text/plain; charset=utf-8')
      expect(item).toBeDefined()
      expect(item?.code).toBe('text')
    })

    it('should return undefined for unregistered MIME type', () => {
      expect(MediaFiles.getByMime('unknown/mime-type')).toBeUndefined()
      expect(MediaFiles.getByMime('')).toBeUndefined()
    })

    it('should include registered custom icon if present', () => {
      MediaFileIcon.add('png', 'custom-png-svg')

      const item = MediaFiles.getByMime('image/png')
      expect(item?.icon).toBe('custom-png-svg')
    })
  })

  describe('static getNeutral', () => {
    it('should return default neutral file item', () => {
      const item = MediaFiles.getNeutral()

      expect(item).toBeDefined()
      expect(item?.code).toBe('file')
      expect(item?.name).toBe('File')
      expect(item?.category).toBe(MediaFileCategory.system)
      expect(item?.group).toBe(MediaFileGroup.neutral)
    })

    it('should include registered custom icon if present', () => {
      MediaFileIcon.add('file', 'custom-file-svg')

      const item = MediaFiles.getNeutral()
      expect(item?.icon).toBe('custom-file-svg')
    })
  })

  describe('static getByCategory', () => {
    it('should return category neutral item when queried by category enum or string', () => {
      const videoItem = MediaFiles.getByCategory(MediaFileCategory.video)
      expect(videoItem).toBeDefined()
      expect(videoItem?.code).toBe('video')
      expect(videoItem?.category).toBe(MediaFileCategory.video)
      expect(videoItem?.group).toBe(MediaFileGroup.category)

      const audioItem = MediaFiles.getByCategory('audio')
      expect(audioItem).toBeDefined()
      expect(audioItem?.code).toBe('audio')
      expect(audioItem?.category).toBe(MediaFileCategory.audio)
      expect(audioItem?.group).toBe(MediaFileGroup.category)
    })

    it('should resolve category neutral item when queried by file extension/code', () => {
      const mp4Item = MediaFiles.getByCategory('mp4')
      expect(mp4Item).toBeDefined()
      expect(mp4Item?.code).toBe('video')
      expect(mp4Item?.category).toBe(MediaFileCategory.video)
      expect(mp4Item?.group).toBe(MediaFileGroup.category)

      const pngItem = MediaFiles.getByCategory('png')
      expect(pngItem).toBeDefined()
      expect(pngItem?.code).toBe('image')
      expect(pngItem?.category).toBe(MediaFileCategory.image)
      expect(pngItem?.group).toBe(MediaFileGroup.category)
    })

    it('should resolve category neutral item when queried by secondary extension', () => {
      const markdownItem = MediaFiles.getByCategory('markdown')
      expect(markdownItem).toBeDefined()
      expect(markdownItem?.code).toBe('text')
      expect(markdownItem?.category).toBe(MediaFileCategory.text)

      const dotxItem = MediaFiles.getByCategory('dotx')
      expect(dotxItem).toBeDefined()
      expect(dotxItem?.code).toBe('document')

      const mjsItem = MediaFiles.getByCategory('mjs')
      expect(mjsItem).toBeDefined()
      expect(mjsItem?.code).toBe('code')
    })

    it('should resolve category neutral item when queried by MIME type', () => {
      const imageItem = MediaFiles.getByCategory('image/png')
      expect(imageItem).toBeDefined()
      expect(imageItem?.code).toBe('image')
      expect(imageItem?.category).toBe(MediaFileCategory.image)
    })

    it('should return default neutral item for system category or file code', () => {
      const systemItem = MediaFiles.getByCategory(MediaFileCategory.system)
      expect(systemItem).toBeDefined()
      expect(systemItem?.code).toBe('file')
      expect(systemItem?.group).toBe(MediaFileGroup.neutral)

      const fileItem = MediaFiles.getByCategory('file')
      expect(fileItem).toBeDefined()
      expect(fileItem?.code).toBe('file')
      expect(fileItem?.group).toBe(MediaFileGroup.neutral)
    })

    it('should return undefined for completely unknown category or code', () => {
      expect(MediaFiles.getByCategory('unknown_xyz')).toBeUndefined()
      expect(MediaFiles.getByCategory('')).toBeUndefined()
    })

    it('should include custom icon when registered for the category neutral code', () => {
      MediaFileIcon.add('video', 'custom-video-svg')

      const item = MediaFiles.getByCategory('video')
      expect(item?.icon).toBe('custom-video-svg')

      const mp4Item = MediaFiles.getByCategory('mp4')
      expect(mp4Item?.icon).toBe('custom-video-svg')
    })

    it('should match category neutral item when queried with mime wildcard string', () => {
      const audioItem = MediaFiles.getByCategory('audio/*')
      expect(audioItem).toBeDefined()
      expect(audioItem?.code).toBe('audio')
      expect(audioItem?.category).toBe(MediaFileCategory.audio)

      const videoItem = MediaFiles.getByCategory('video/*')
      expect(videoItem).toBeDefined()
      expect(videoItem?.code).toBe('video')
      expect(videoItem?.category).toBe(MediaFileCategory.video)

      const imageItem = MediaFiles.getByCategory('image/*')
      expect(imageItem).toBeDefined()
      expect(imageItem?.code).toBe('image')
      expect(imageItem?.category).toBe(MediaFileCategory.image)

      const textItem = MediaFiles.getByCategory('text/*')
      expect(textItem).toBeDefined()
      expect(textItem?.code).toBe('text')
      expect(textItem?.category).toBe(MediaFileCategory.text)

      const fontItem = MediaFiles.getByCategory('font/*')
      expect(fontItem).toBeDefined()
      expect(fontItem?.code).toBe('font')
      expect(fontItem?.category).toBe(MediaFileCategory.font)
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

    it('should return false for MIME types', () => {
      expect(MediaFiles.isLink('image/png')).toBe(false)
      expect(MediaFiles.isLink('image/jpeg')).toBe(false)
      expect(MediaFiles.isLink('application/pdf')).toBe(false)
      expect(MediaFiles.isLink('text/plain')).toBe(false)
      expect(MediaFiles.isLink('image/*')).toBe(false)
    })
  })

  describe('static isMime', () => {
    it('should return true for registered MIME types', () => {
      expect(MediaFiles.isMime('image/png')).toBe(true)
      expect(MediaFiles.isMime('image/jpeg')).toBe(true)
      expect(MediaFiles.isMime('application/pdf')).toBe(true)
      expect(MediaFiles.isMime('text/plain')).toBe(true)
      expect(MediaFiles.isMime('image/*')).toBe(true)
    })

    it('should normalize MIME type with uppercase or charset parameters', () => {
      expect(MediaFiles.isMime('  IMAGE/PNG  ')).toBe(true)
      expect(MediaFiles.isMime('text/plain; charset=utf-8')).toBe(true)
    })

    it('should return false for paths, links, filenames or unregistered types', () => {
      expect(MediaFiles.isMime('/var/log/file.txt')).toBe(false)
      expect(MediaFiles.isMime('folder/file.png')).toBe(false)
      expect(MediaFiles.isMime('https://example.com/file.pdf')).toBe(false)
      expect(MediaFiles.isMime('report.pdf')).toBe(false)
      expect(MediaFiles.isMime('png')).toBe(false)
      expect(MediaFiles.isMime('')).toBe(false)
      expect(MediaFiles.isMime('unknown/mime-type')).toBe(false)
    })
  })
})
