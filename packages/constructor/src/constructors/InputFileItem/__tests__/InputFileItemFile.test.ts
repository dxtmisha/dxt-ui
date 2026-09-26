// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'

import { ImageFile } from '../../Image/ImageFile'
import { InputFileItemFile } from '../InputFileItemFile'
import type { InputFileItemPropsBasic } from '../props'

describe('InputFileItemFile', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    return new InputFileItemFile(props as InputFileItemPropsBasic)
  }

  describe('name', () => {
    it('returns props.name when provided', () => {
      const helper = createHelper({ name: 'document.pdf' })
      expect(helper.name).toBe('document.pdf')
    })

    it('returns props.label when name is not provided', () => {
      const helper = createHelper({ label: 'custom_label.jpg' })
      expect(helper.name).toBe('custom_label.jpg')
    })

    it('returns props.file.name when props.name is absent', () => {
      const mockFile = new File([''], 'file_name.png', { type: 'image/png' })
      const helper = createHelper({ file: mockFile })
      expect(helper.name).toBe('file_name.png')
    })

    it('returns props.item.name when file is absent', () => {
      const helper = createHelper({ item: { name: 'item_name.txt' } })
      expect(helper.name).toBe('item_name.txt')
    })

    it('returns empty string when no name source is provided', () => {
      const helper = createHelper({})
      expect(helper.name).toBe('')
    })
  })

  describe('size', () => {
    it('returns numeric size from props.size', () => {
      const helper = createHelper({ size: 1024 })
      expect(helper.size).toBe(1024)
    })

    it('parses numeric string size from props.size', () => {
      const helper = createHelper({ size: '2048' })
      expect(helper.size).toBe(2048)
    })

    it('returns size from props.file', () => {
      const mockFile = new File(['hello world'], 'text.txt', { type: 'text/plain' })
      const helper = createHelper({ file: mockFile })
      expect(helper.size).toBe(mockFile.size)
    })

    it('returns size from props.item.size', () => {
      const helper = createHelper({ item: { size: 4096 } })
      expect(helper.size).toBe(4096)
    })

    it('returns undefined when no size is available', () => {
      const helper = createHelper({})
      expect(helper.size).toBeUndefined()
    })
  })

  describe('sizeFormatted', () => {
    it('returns custom string as-is when non-numeric string is passed to size', () => {
      const helper = createHelper({ size: '72 Mb' })
      expect(helper.sizeFormatted).toBe('72 Mb')
    })

    it('returns empty string when size is undefined or negative', () => {
      const helper = createHelper({})
      expect(helper.sizeFormatted).toBe('')

      const negativeHelper = createHelper({ size: -10 })
      expect(negativeHelper.sizeFormatted).toBe('')
    })

    it('formats bytes correctly', () => {
      const helper = createHelper({ size: 512 })
      expect(helper.sizeFormatted).toBe('512 B')
    })

    it('formats kilobytes correctly', () => {
      const helperSmallKb = createHelper({ size: 2.5 * 1024 })
      expect(helperSmallKb.sizeFormatted).toBe('2.5 KB')

      const helperLargeKb = createHelper({ size: 150 * 1024 })
      expect(helperLargeKb.sizeFormatted).toBe('150 KB')
    })

    it('formats megabytes correctly', () => {
      const helperSmallMb = createHelper({ size: 5.5 * 1024 * 1024 })
      expect(helperSmallMb.sizeFormatted).toBe('5.5 Mb')

      const helperLargeMb = createHelper({ size: 72 * 1024 * 1024 })
      expect(helperLargeMb.sizeFormatted).toBe('72 Mb')
    })

    it('formats gigabytes correctly', () => {
      const helperGb = createHelper({ size: 1.5 * 1024 * 1024 * 1024 })
      expect(helperGb.sizeFormatted).toBe('1.5 GB')
    })
  })

  describe('src', () => {
    it('returns props.src when provided', () => {
      const helper = createHelper({ src: 'https://example.com/image.png' })
      expect(helper.src).toBe('https://example.com/image.png')
    })

    it('returns props.url when src is absent', () => {
      const helper = createHelper({ url: 'https://example.com/file.jpg' })
      expect(helper.src).toBe('https://example.com/file.jpg')
    })

    it('returns props.thumbnail when it is a string URL', () => {
      const helper = createHelper({ thumbnail: 'https://example.com/thumb.webp' })
      expect(helper.src).toBe('https://example.com/thumb.webp')
    })

    it('returns props.item.src when root props are absent', () => {
      const helper = createHelper({ item: { src: 'https://example.com/item.svg' } })
      expect(helper.src).toBe('https://example.com/item.svg')
    })

    it('returns undefined when no URL is provided', () => {
      const helper = createHelper({})
      expect(helper.src).toBeUndefined()
    })
  })

  describe('isImage', () => {
    it('delegates to ImageFile.isImage when file is present', () => {
      const isImageSpy = vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)
      const mockFile = new File([''], 'photo.jpg', { type: 'image/jpeg' })
      const helper = createHelper({ file: mockFile })

      expect(helper.isImage).toBe(true)
      expect(isImageSpy).toHaveBeenCalledWith(mockFile)
    })

    it('detects image extension from src', () => {
      const helperPng = createHelper({ src: 'https://example.com/picture.png' })
      expect(helperPng.isImage).toBe(true)

      const helperWebp = createHelper({ src: 'picture.webp' })
      expect(helperWebp.isImage).toBe(true)

      const helperPdf = createHelper({ src: 'document.pdf' })
      expect(helperPdf.isImage).toBe(false)
    })

    it('detects image extension from name', () => {
      const helper = createHelper({ name: 'photo.JPEG' })
      expect(helper.isImage).toBe(true)
    })

    it('returns false when no source or extension matches', () => {
      const helper = createHelper({})
      expect(helper.isImage).toBe(false)
    })
  })

  describe('imageValue', () => {
    it('returns src when available', () => {
      const helper = createHelper({ src: 'https://example.com/photo.jpg' })
      expect(helper.imageValue).toBe('https://example.com/photo.jpg')
    })

    it('returns file instance when file is an image and no src is set', () => {
      vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)
      const mockFile = new File([''], 'photo.png', { type: 'image/png' })
      const helper = createHelper({ file: mockFile })

      expect(helper.imageValue).toBe(mockFile)
    })

    it('returns undefined when neither src nor image file is present', () => {
      vi.spyOn(ImageFile, 'isImage').mockReturnValue(false)
      const mockFile = new File([''], 'doc.pdf', { type: 'application/pdf' })
      const helper = createHelper({ file: mockFile })

      expect(helper.imageValue).toBeUndefined()
    })
  })

  describe('hasThumbnail', () => {
    it('returns false when thumbnail is explicitly false', () => {
      const helper = createHelper({ thumbnail: false, src: 'https://example.com/photo.jpg' })
      expect(helper.hasThumbnail).toBe(false)
    })

    it('returns true when thumbnail is explicitly true', () => {
      const helper = createHelper({ thumbnail: true })
      expect(helper.hasThumbnail).toBe(true)
    })

    it('returns true when src is provided', () => {
      const helper = createHelper({ src: 'https://example.com/photo.jpg' })
      expect(helper.hasThumbnail).toBe(true)
    })

    it('returns true when file is provided', () => {
      const mockFile = new File([''], 'file.txt', { type: 'text/plain' })
      const helper = createHelper({ file: mockFile })
      expect(helper.hasThumbnail).toBe(true)
    })
  })
})
