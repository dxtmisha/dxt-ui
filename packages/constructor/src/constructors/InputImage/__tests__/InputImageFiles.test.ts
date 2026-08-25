// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { reactive, ref, toRefs } from 'vue'

import { ImageFile } from '../../Image/ImageFile'
import { FieldAttributesInclude } from '../../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../../classes/Field/FieldChangeInclude'
import { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import { FieldValidationInclude } from '../../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'

import { InputImageFiles } from '../InputImageFiles'
import type { InputImageProps } from '../props'
import type { InputImageItem } from '../basicTypes'

describe('InputImageFiles', () => {
  let originalImage: typeof Image

  beforeEach(() => {
    vi.restoreAllMocks()
    originalImage = globalThis.Image
  })

  afterEach(() => {
    globalThis.Image = originalImage
  })

  const createHelper = (initialProps: Partial<InputImageProps> = {}) => {
    const props = reactive({
      value: undefined,
      disabled: false,
      maxPixel: 1280,
      ...initialProps
    }) as InputImageProps

    const refs = toRefs(props)
    const elementRef = ref(document.createElement('div'))

    const elementItem = new FieldElementInclude(props, elementRef)
    const value = new FieldValueInclude<InputImageItem>(props, refs, elementItem)
    const change = new FieldChangeInclude(props)
    const attributes = new FieldAttributesInclude(props)
    new FieldValidationInclude(props, attributes, value, change)

    const files = new InputImageFiles(props, value)

    return { props, value, files }
  }

  it('should initialize with undefined value', () => {
    const { files } = createHelper()

    expect(files.get()).toBeUndefined()
    expect(files.src).toBeUndefined()
    expect(files.crop).toBeUndefined()
    expect(files.hasImage()).toBe(false)
  })

  it('should handle string initial value', () => {
    const { files } = createHelper({
      value: 'https://example.com/test.jpg',
      crop: [10, 20, 30, 40]
    })

    expect(files.hasImage()).toBe(true)
    expect(files.src).toBe('https://example.com/test.jpg')
    expect(files.crop).toEqual([10, 20, 30, 40])
    expect(files.get()).toEqual({
      value: 'https://example.com/test.jpg',
      crop: [10, 20, 30, 40]
    })
  })

  it('should handle structured object initial value', () => {
    const { files } = createHelper({
      value: {
        value: 'https://example.com/test.jpg',
        crop: [1, 2, 3, 4]
      }
    })

    expect(files.hasImage()).toBe(true)
    expect(files.src).toBe('https://example.com/test.jpg')
    expect(files.crop).toEqual([1, 2, 3, 4])
  })

  it('should update crop coordinates via setCrop', () => {
    const { files } = createHelper({
      value: 'https://example.com/photo.jpg'
    })

    files.setCrop([5, 10, 15, 20])
    expect(files.get()).toEqual({
      value: 'https://example.com/photo.jpg',
      crop: [5, 10, 15, 20]
    })
  })

  it('should process and resize image file in setFile', async () => {
    class MockImage {
      naturalWidth = 2000
      naturalHeight = 1000
      onload: (() => void) | null = null
      onerror: (() => void) | null = null
      private _src = ''

      set src(value: string) {
        this._src = value
        setTimeout(() => this.onload?.(), 0)
      }

      get src() {
        return this._src
      }
    }
    globalThis.Image = MockImage as unknown as typeof Image

    const { files } = createHelper({ maxPixel: 500 })

    vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)
    vi.spyOn(ImageFile, 'getFileResult').mockResolvedValue('data:image/png;base64,mock')

    const mockFile = new File(['mock-content'], 'avatar.png', { type: 'image/png' })
    const result = await files.setFile(mockFile)

    expect(result).toBeDefined()
    expect(files.src).toBeDefined()
  })

  it('should return undefined when file exceeds maxFileSize', async () => {
    const { files } = createHelper({ maxFileSize: 10 })

    vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)
    const largeFile = new File(['large-content-exceeding-limit'], 'large.png', { type: 'image/png' })
    const result = await files.setFile(largeFile)

    expect(result).toBeUndefined()
  })

  it('should return undefined when setFile receives undefined or invalid image file', async () => {
    const { files } = createHelper()

    const undefinedResult = await files.setFile(undefined)
    expect(undefinedResult).toBeUndefined()

    vi.spyOn(ImageFile, 'isImage').mockReturnValue(false)
    const textFile = new File(['text'], 'doc.txt', { type: 'text/plain' })
    const textResult = await files.setFile(textFile)
    expect(textResult).toBeUndefined()
  })

  it('should handle setFiles with FileList', async () => {
    const { files } = createHelper()
    const setFileSpy = vi.spyOn(files, 'setFile').mockResolvedValue('data:image/png;base64,mock')

    const mockFile = new File(['bytes'], 'image.jpg', { type: 'image/jpeg' })
    const fileList = {
      0: mockFile,
      length: 1,
      item: (index: number) => (index === 0 ? mockFile : null)
    } as unknown as FileList

    await files.setFiles(fileList)
    expect(setFileSpy).toHaveBeenCalledWith(mockFile)

    const emptyResult = await files.setFiles(undefined)
    expect(emptyResult).toBeUndefined()
  })
})
