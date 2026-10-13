// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { reactive, ref, toRefs } from 'vue'

vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')

  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual<typeof import('@dxtmisha/functional')>('@dxtmisha/functional')

  return {
    ...actual,
    resizeImage: vi.fn()
  }
})

import { resizeImage } from '@dxtmisha/functional'

import { ImageFile } from '../../Image/ImageFile'
import { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'

import { InputImageFiles } from '../InputImageFiles'

import type { FieldFileValue } from '../../../types/fieldTypes'
import type { InputImageItem } from '../basicTypes'
import type { InputImageProps } from '../props'

const DATA_URL = 'data:image/png;base64,bW9jaw=='
const REMOTE_URL = 'https://example.com/photo.jpg'

/**
 * Creates an InputImageFiles instance bound to a real FieldValueInclude.
 *
 * Создаёт экземпляр InputImageFiles, связанный с реальным FieldValueInclude.
 * @param initialProps initial component properties / начальные свойства компонента
 * @returns helper context / контекст помощника
 */
const createHelper = (initialProps: Partial<InputImageProps> = {}) => {
  const props = reactive({
    value: undefined,
    modelValue: undefined,
    ...initialProps
  }) as InputImageProps
  const refs = toRefs(props)
  const elementItem = new FieldElementInclude(props, ref(undefined))
  const value = new FieldValueInclude<InputImageItem>(props, refs, elementItem)
  const files = new InputImageFiles(props, value)

  return { props, value, files }
}

/**
 * Mocks a successful image pipeline (type check, reading and decoding).
 *
 * Мокирует успешный конвейер обработки изображения (проверка типа, чтение и декодирование).
 * @param width decoded width / декодированная ширина
 * @param height decoded height / декодированная высота
 */
const mockImagePipeline = (width = 800, height = 600): void => {
  vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)
  vi.spyOn(ImageFile, 'getImageDataUrl').mockResolvedValue(DATA_URL)
  vi.spyOn(ImageFile, 'createImage').mockResolvedValue({
    image: {} as HTMLImageElement,
    src: DATA_URL,
    width,
    height
  })
}

/**
 * Creates a FileList-like object from an array of files.
 *
 * Создаёт объект, подобный FileList, из массива файлов.
 * @param list list of files / список файлов
 * @returns FileList-like object / объект, подобный FileList
 */
const createFileList = (list: File[]): FileList => {
  const fileList: Record<number, File> & { length: number, item: (index: number) => File | null } = {
    length: list.length,
    item: (index: number) => list[index] ?? null
  }

  list.forEach((file, index) => {
    fileList[index] = file
  })

  return fileList as unknown as FileList
}

describe('InputImageFiles', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.mocked(resizeImage).mockReset()
    vi.mocked(resizeImage).mockImplementation(async image => String(image))
  })

  describe('get / src / crop / hasImage', () => {
    it('returns undefined for an empty value', () => {
      const { files } = createHelper()

      expect(files.get()).toBeUndefined()
      expect(files.src).toBeUndefined()
      expect(files.crop).toBeUndefined()
      expect(files.hasImage()).toBe(false)
    })

    it('treats an empty string as no image', () => {
      const { files } = createHelper({ value: '' })

      expect(files.get()).toBeUndefined()
      expect(files.hasImage()).toBe(false)
    })

    it('wraps a string value and applies the crop property', () => {
      const { files } = createHelper({
        value: REMOTE_URL,
        crop: [10, 20, 30, 40]
      })

      expect(files.get()).toEqual({
        value: REMOTE_URL,
        crop: [10, 20, 30, 40]
      })
      expect(files.src).toBe(REMOTE_URL)
      expect(files.crop).toEqual([10, 20, 30, 40])
      expect(files.hasImage()).toBe(true)
    })

    it('returns a structured value as is (own crop has priority over the crop property)', () => {
      const structured: FieldFileValue = {
        value: REMOTE_URL,
        name: 'photo.jpg',
        crop: [1, 2, 3, 4]
      }
      const { files } = createHelper({
        value: structured,
        crop: [9, 9, 9, 9]
      })

      expect(files.get()).toEqual(structured)
      expect(files.crop).toEqual([1, 2, 3, 4])
    })

    it('reports no image for an object without a source', () => {
      const { files } = createHelper({ value: { name: 'empty' } })

      expect(files.get()).toEqual({ name: 'empty' })
      expect(files.src).toBeUndefined()
      expect(files.hasImage()).toBe(false)
    })

    it('reacts to direct value changes', () => {
      const { files, value } = createHelper()

      value.item.value = REMOTE_URL
      expect(files.hasImage()).toBe(true)

      value.item.value = undefined
      expect(files.hasImage()).toBe(false)
    })
  })

  describe('setCrop', () => {
    it('converts a string value into a structured value with crop', () => {
      const { files, value } = createHelper({ value: REMOTE_URL })

      files.setCrop([5, 10, 15, 20])

      expect(value.item.value).toEqual({
        value: REMOTE_URL,
        crop: [5, 10, 15, 20]
      })
    })

    it('preserves all metadata of a structured value', () => {
      const { files } = createHelper({
        value: {
          value: DATA_URL,
          name: 'avatar.png',
          size: 100,
          crop: [0, 0, 0, 0]
        }
      })

      files.setCrop([1, 1, 1, 1])

      expect(files.get()).toEqual({
        value: DATA_URL,
        name: 'avatar.png',
        size: 100,
        crop: [1, 1, 1, 1]
      })
    })

    it('removes the crop when called without coordinates', () => {
      const { files } = createHelper({
        value: {
          value: DATA_URL,
          crop: [1, 2, 3, 4]
        }
      })

      files.setCrop()

      expect(files.crop).toBeUndefined()
      expect(files.src).toBe(DATA_URL)
    })

    it('does nothing when there is no value', () => {
      const { files, value } = createHelper()

      files.setCrop([1, 2, 3, 4])

      expect(value.item.value).toBeUndefined()
    })
  })

  describe('setFile', () => {
    it('returns undefined and resets the file reference for an undefined file', async () => {
      const { files } = createHelper()

      await expect(files.setFile(undefined)).resolves.toBeUndefined()
      expect(files.file.value).toBeUndefined()
    })

    it('rejects a non-image file without reading it', async () => {
      const { files, value } = createHelper()
      const readSpy = vi.spyOn(ImageFile, 'getImageDataUrl')

      vi.spyOn(ImageFile, 'isImage').mockReturnValue(false)

      const result = await files.setFile(new File(['text'], 'doc.txt', { type: 'text/plain' }))

      expect(result).toBeUndefined()
      expect(readSpy).not.toHaveBeenCalled()
      expect(value.item.value).toBeUndefined()
      expect(files.file.value).toBeUndefined()
    })

    it('rejects a file exceeding maxFileSize without reading it', async () => {
      const { files, value } = createHelper({ maxFileSize: 10 })
      const readSpy = vi.spyOn(ImageFile, 'getImageDataUrl')

      vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)

      const result = await files.setFile(new File(['x'.repeat(11)], 'large.png', { type: 'image/png' }))

      expect(result).toBeUndefined()
      expect(readSpy).not.toHaveBeenCalled()
      expect(value.item.value).toBeUndefined()
    })

    it('accepts a file whose size equals maxFileSize', async () => {
      mockImagePipeline()
      const { files } = createHelper({ maxFileSize: 10 })

      const result = await files.setFile(new File(['x'.repeat(10)], 'exact.png', { type: 'image/png' }))

      expect(result).toBe(DATA_URL)
    })

    it('returns undefined when the file cannot be read', async () => {
      const { files, value } = createHelper()

      vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)
      vi.spyOn(ImageFile, 'getImageDataUrl').mockResolvedValue('')

      const result = await files.setFile(new File(['broken'], 'broken.png', { type: 'image/png' }))

      expect(result).toBeUndefined()
      expect(resizeImage).not.toHaveBeenCalled()
      expect(value.item.value).toBeUndefined()
    })

    it('stores the processed image with full metadata', async () => {
      mockImagePipeline(800, 600)
      const { files } = createHelper({ crop: [1, 2, 3, 4] })
      const file = new File(['content'], 'avatar.png', {
        type: 'image/png',
        lastModified: 1700000000000
      })

      const result = await files.setFile(file)

      expect(result).toBe(DATA_URL)
      expect(files.file.value).toBe(file)
      expect(files.get()).toEqual({
        value: DATA_URL,
        name: 'avatar.png',
        type: 'image/png',
        size: file.size,
        width: 800,
        height: 600,
        lastModified: 1700000000000,
        crop: [1, 2, 3, 4],
        file
      })
    })

    it('resizes with the default limit of 1280 pixels', async () => {
      mockImagePipeline()
      const { files } = createHelper()

      await files.setFile(new File(['content'], 'avatar.png', { type: 'image/png' }))

      expect(resizeImage).toHaveBeenCalledWith(DATA_URL, 1280)
    })

    it('resizes with a custom maxPixel', async () => {
      mockImagePipeline()
      const { files } = createHelper({ maxPixel: 500 })

      await files.setFile(new File(['content'], 'avatar.png', { type: 'image/png' }))

      expect(resizeImage).toHaveBeenCalledWith(DATA_URL, 500)
    })

    it('stores the image without dimensions when decoding fails', async () => {
      vi.spyOn(ImageFile, 'isImage').mockReturnValue(true)
      vi.spyOn(ImageFile, 'getImageDataUrl').mockResolvedValue(DATA_URL)
      vi.spyOn(ImageFile, 'createImage').mockResolvedValue(undefined)
      const { files } = createHelper()

      await files.setFile(new File(['content'], 'avatar.png', { type: 'image/png' }))

      expect(files.get()).toMatchObject({
        value: DATA_URL,
        width: undefined,
        height: undefined
      })
    })
  })

  describe('setFiles', () => {
    it('returns undefined for undefined or an empty list', async () => {
      const { files } = createHelper()
      const setFileSpy = vi.spyOn(files, 'setFile')

      await expect(files.setFiles(undefined)).resolves.toBeUndefined()
      await expect(files.setFiles(createFileList([]))).resolves.toBeUndefined()
      expect(setFileSpy).not.toHaveBeenCalled()
    })

    it('uses only the first file of the list', async () => {
      const { files } = createHelper()
      const setFileSpy = vi.spyOn(files, 'setFile').mockResolvedValue(DATA_URL)
      const first = new File(['1'], 'first.png', { type: 'image/png' })
      const second = new File(['2'], 'second.png', { type: 'image/png' })

      const result = await files.setFiles(createFileList([first, second]))

      expect(result).toBe(DATA_URL)
      expect(setFileSpy).toHaveBeenCalledTimes(1)
      expect(setFileSpy).toHaveBeenCalledWith(first)
    })
  })
})
