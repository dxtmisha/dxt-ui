import { describe, it, expect } from 'vitest'

import { GeoIntl } from '@dxtmisha/functional'
import { InputFileItemFile } from '../InputFileItemFile'
import type { InputFileItemPropsBasic } from '../props'

class TestInputFileItemFile extends InputFileItemFile {
  override getSource(): File | string | undefined {
    return super.getSource()
  }
}

describe('InputFileItemFile', () => {
  const createHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    return new InputFileItemFile(props as InputFileItemPropsBasic)
  }

  const createTestHelper = (props: Partial<InputFileItemPropsBasic> = {}) => {
    return new TestInputFileItemFile(props as InputFileItemPropsBasic)
  }

  describe('image', () => {
    it('returns src when available and is an image', () => {
      const helper = createHelper({ value: { value: 'https://example.com/photo.jpg' } })
      expect(helper.image).toBe('https://example.com/photo.jpg')
    })

    it('returns file instance when file is an image and no src is set', () => {
      const mockFile = new File([''], 'photo.png', { type: 'image/png' })
      const helper = createHelper({ file: mockFile })

      expect(helper.image).toBe(mockFile)
    })

    it('returns file icon when src or file is not an image', () => {
      const helper = createHelper({ value: { value: 'https://example.com/doc.pdf' } })
      expect(helper.image).toBe(helper.getIcon())
    })

    it('returns undefined when neither image nor icon is available', () => {
      const helper = createHelper({})
      expect(helper.image).toBeUndefined()
    })
  })

  describe('name', () => {
    it('returns props.file.name when file is provided', () => {
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

    it('returns 0 when no size is available', () => {
      const helper = createHelper({})
      expect(helper.size).toBe(0)
    })
  })

  describe('sizeFormatted', () => {
    it('returns formatted size when size is 0 or negative', () => {
      const helper = createHelper({})
      expect(helper.sizeFormatted).toBe(new GeoIntl().sizeFile(0))

      const negativeHelper = createHelper({ value: { size: -10 } })
      expect(negativeHelper.sizeFormatted).toBe(new GeoIntl().sizeFile(-10))
    })

    it('formats bytes correctly', () => {
      const helper = createHelper({ value: { size: 512 } })
      expect(helper.sizeFormatted).toBe(new GeoIntl().sizeFile(512))
    })

    it('formats kilobytes correctly', () => {
      const helperKb = createHelper({ value: { size: 150 * 1024 } })
      expect(helperKb.sizeFormatted).toBe(new GeoIntl().sizeFile(150 * 1024))
    })

    it('formats megabytes correctly', () => {
      const helperMb = createHelper({ value: { size: 72 * 1024 * 1024 } })
      expect(helperMb.sizeFormatted).toBe(new GeoIntl().sizeFile(72 * 1024 * 1024))
    })

    it('formats gigabytes correctly', () => {
      const helperGb = createHelper({ value: { size: 1.5 * 1024 * 1024 * 1024 } })
      expect(helperGb.sizeFormatted).toBe(new GeoIntl().sizeFile(1.5 * 1024 * 1024 * 1024))
    })
  })

  describe('src', () => {
    it('returns props.value.value when provided', () => {
      const helper = createHelper({ value: { value: 'https://example.com/item.svg' } })
      expect(helper.src).toBe('https://example.com/item.svg')
    })

    it('returns undefined when no URL is provided', () => {
      const helper = createHelper({})
      expect(helper.src).toBeUndefined()
    })
  })

  describe('mediaFile', () => {
    it('returns MediaFile instance when file or source is present', () => {
      const helper = createHelper({ value: { name: 'photo.png' } })
      expect(helper.mediaFile.value).toBeDefined()
      expect(helper.mediaFile.value?.extension).toBe('png')
    })

    it('returns undefined when no source is available', () => {
      const helper = createHelper({})
      expect(helper.mediaFile.value).toBeUndefined()
    })
  })

  describe('isImage', () => {
    it('detects image when file is present', () => {
      const mockFile = new File([''], 'photo.jpg', { type: 'image/jpeg' })
      const helper = createHelper({ file: mockFile })

      expect(helper.isImage()).toBe(true)
    })

    it('detects image extension from value.value', () => {
      const helperPng = createHelper({ value: { value: 'https://example.com/picture.png' } })
      expect(helperPng.isImage()).toBe(true)

      const helperWebp = createHelper({ value: { value: 'picture.webp' } })
      expect(helperWebp.isImage()).toBe(true)

      const helperPdf = createHelper({ value: { value: 'document.pdf' } })
      expect(helperPdf.isImage()).toBe(false)
    })

    it('detects image extension from name resolved via value.name', () => {
      const helper = createHelper({ value: { name: 'photo.JPEG' } })
      expect(helper.isImage()).toBe(true)
    })

    it('returns false when no source or extension matches', () => {
      const helper = createHelper({})
      expect(helper.isImage()).toBe(false)
    })
  })

  describe('get', () => {
    it('returns undefined when neither file nor value is provided', () => {
      const helper = createHelper({})
      expect(helper.get()).toBeUndefined()
    })

    it('constructs FieldFileValue from props.file', () => {
      const mockFile = new File(['hello'], 'document.pdf', { type: 'application/pdf', lastModified: 123456789 })
      const helper = createHelper({ file: mockFile })

      expect(helper.get()).toEqual({
        file: mockFile,
        name: 'document.pdf',
        size: 5,
        type: 'application/pdf',
        lastModified: 123456789
      })
    })

    it('returns props.value when file is absent', () => {
      const value = {
        id: 'file-123',
        name: 'remote_photo.jpg',
        value: 'https://example.com/photo.jpg',
        size: 1024
      }
      const helper = createHelper({ value })

      expect(helper.get()).toEqual(value)
    })

    it('merges props.file and props.value correctly', () => {
      const mockFile = new File(['test-data'], 'avatar.png', { type: 'image/png', lastModified: 987654321 })
      const value = {
        id: 'user-avatar',
        value: 'blob:http://localhost/1234',
        crop: { top: 0, right: 100, bottom: 100, left: 0 }
      }
      const helper = createHelper({ file: mockFile, value })

      expect(helper.get()).toEqual({
        id: 'user-avatar',
        value: 'blob:http://localhost/1234',
        crop: { top: 0, right: 100, bottom: 100, left: 0 },
        file: mockFile,
        name: 'avatar.png',
        size: 9,
        type: 'image/png',
        lastModified: 987654321
      })
    })

    it('extracts file from props.value.file if props.file is omitted', () => {
      const mockFile = new File(['data'], 'nested.txt', { type: 'text/plain', lastModified: 55555 })
      const helper = createHelper({ value: { id: 42, file: mockFile } })

      expect(helper.get()).toEqual({
        id: 42,
        file: mockFile,
        name: 'nested.txt',
        size: 4,
        type: 'text/plain',
        lastModified: 55555
      })
    })
  })

  describe('getFile', () => {
    it('returns props.file when provided', () => {
      const mockFile = new File([''], 'file.txt', { type: 'text/plain' })
      const helper = createHelper({ file: mockFile })
      expect(helper.getFile()).toBe(mockFile)
    })

    it('returns props.value.file when props.file is absent', () => {
      const mockFile = new File([''], 'value.png', { type: 'image/png' })
      const helper = createHelper({ value: { file: mockFile } })
      expect(helper.getFile()).toBe(mockFile)
    })

    it('returns undefined when no file is provided', () => {
      const helper = createHelper({})
      expect(helper.getFile()).toBeUndefined()
    })
  })

  describe('getIcon', () => {
    it('returns mediaFile icon when file has a registered icon', () => {
      const helper = createHelper({
        value: { name: 'document.pdf' }
      })
      expect(helper.getIcon()).toBe(helper.mediaFile.value?.icon || undefined)
    })

    it('returns undefined when no file or source is provided', () => {
      const helper = createHelper({})
      expect(helper.getIcon()).toBeUndefined()
    })
  })

  describe('getSource', () => {
    it('returns props.file when provided', () => {
      const mockFile = new File([''], 'photo.jpg')
      const helper = createTestHelper({ file: mockFile })
      expect(helper.getSource()).toBe(mockFile)
    })

    it('returns props.value.file when props.file is absent', () => {
      const mockFile = new File([''], 'value.png')
      const helper = createTestHelper({ value: { file: mockFile } })
      expect(helper.getSource()).toBe(mockFile)
    })

    it('returns src when file is absent', () => {
      const helper = createTestHelper({ value: { value: 'https://example.com/file.jpg' } })
      expect(helper.getSource()).toBe('https://example.com/file.jpg')
    })

    it('returns name when neither file nor src is provided', () => {
      const helper = createTestHelper({ value: { name: 'avatar.webp' } })
      expect(helper.getSource()).toBe('avatar.webp')
    })

    it('returns undefined when no source is available', () => {
      const helper = createTestHelper({})
      expect(helper.getSource()).toBeUndefined()
    })
  })
})
