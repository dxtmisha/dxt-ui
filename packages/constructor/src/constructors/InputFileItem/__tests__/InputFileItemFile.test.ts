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
    it('returns props.label when provided', () => {
      const helper = createHelper({ label: 'custom_label.jpg' })
      expect(helper.name).toBe('custom_label.jpg')
    })

    it('returns props.file.name when props.label is absent', () => {
      const mockFile = new File([''], 'file_name.png', { type: 'image/png' })
      const helper = createHelper({ file: mockFile })
      expect(helper.name).toBe('file_name.png')
    })

    it('returns props.value.name when file is absent', () => {
      const helper = createHelper({ value: { name: 'item_name.txt' } })
      expect(helper.name).toBe('item_name.txt')
    })

    it('returns empty string when no name source is provided', () => {
      const helper = createHelper({})
      expect(helper.name).toBe('')
    })
  })

  describe('size', () => {
    it('returns size from props.file', () => {
      const mockFile = new File(['hello world'], 'text.txt', { type: 'text/plain' })
      const helper = createHelper({ file: mockFile })
      expect(helper.size).toBe(mockFile.size)
    })

    it('returns size from props.value.size', () => {
      const helper = createHelper({ value: { size: 4096 } })
      expect(helper.size).toBe(4096)
    })

    it('returns undefined when no size is available', () => {
      const helper = createHelper({})
      expect(helper.size).toBeUndefined()
    })
  })

  describe('sizeFormatted', () => {
    it('returns empty string when size is undefined or negative', () => {
      const helper = createHelper({})
      expect(helper.sizeFormatted).toBe('')

      const negativeHelper = createHelper({ value: { size: -10 } })
      expect(negativeHelper.sizeFormatted).toBe('')
    })

    it('formats bytes correctly', () => {
      const helper = createHelper({ value: { size: 512 } })
      expect(helper.sizeFormatted).toBe('512 B')
    })

    it('formats kilobytes correctly', () => {
      const helperSmallKb = createHelper({ value: { size: 2.5 * 1024 } })
      expect(helperSmallKb.sizeFormatted).toBe('2.5 KB')

      const helperLargeKb = createHelper({ value: { size: 150 * 1024 } })
      expect(helperLargeKb.sizeFormatted).toBe('150 KB')
    })

    it('formats megabytes correctly', () => {
      const helperSmallMb = createHelper({ value: { size: 5.5 * 1024 * 1024 } })
      expect(helperSmallMb.sizeFormatted).toBe('5.5 Mb')

      const helperLargeMb = createHelper({ value: { size: 72 * 1024 * 1024 } })
      expect(helperLargeMb.sizeFormatted).toBe('72 Mb')
    })

    it('formats gigabytes correctly', () => {
      const helperGb = createHelper({ value: { size: 1.5 * 1024 * 1024 * 1024 } })
      expect(helperGb.sizeFormatted).toBe('1.5 GB')
    })
  })

  describe('src', () => {
    it('returns props.value.value when provided', () => {
      const helper = createHelper({ value: { value: 'https://example.com/item.svg' } })
      expect(helper.src).toBe('https://example.com/item.svg')
    })

    it('returns props.url when provided', () => {
      const helper = createHelper({ url: 'https://example.com/file.jpg' })
      expect(helper.src).toBe('https://example.com/file.jpg')
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

    it('detects image extension from value.value', () => {
      const helperPng = createHelper({ value: { value: 'https://example.com/picture.png' } })
      expect(helperPng.isImage).toBe(true)

      const helperWebp = createHelper({ value: { value: 'picture.webp' } })
      expect(helperWebp.isImage).toBe(true)

      const helperPdf = createHelper({ value: { value: 'document.pdf' } })
      expect(helperPdf.isImage).toBe(false)
    })

    it('detects image extension from name resolved via label', () => {
      const helper = createHelper({ label: 'photo.JPEG' })
      expect(helper.isImage).toBe(true)
    })

    it('returns false when no source or extension matches', () => {
      const helper = createHelper({})
      expect(helper.isImage).toBe(false)
    })
  })

  describe('imageValue', () => {
    it('returns src when available', () => {
      const helper = createHelper({ value: { value: 'https://example.com/photo.jpg' } })
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
    it('returns true when src is available from value', () => {
      const helper = createHelper({ value: { value: 'https://example.com/photo.jpg' } })
      expect(helper.hasThumbnail).toBe(true)
    })

    it('returns true when file is provided', () => {
      const mockFile = new File([''], 'file.txt', { type: 'text/plain' })
      const helper = createHelper({ file: mockFile })
      expect(helper.hasThumbnail).toBe(true)
    })

    it('returns false when no file or source is provided', () => {
      const helper = createHelper({})
      expect(helper.hasThumbnail).toBe(false)
    })
  })
})
