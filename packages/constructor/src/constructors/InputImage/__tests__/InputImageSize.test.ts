// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { effectScope, nextTick, reactive, ref, type Ref } from 'vue'

import { ImageFile } from '../../Image/ImageFile'
import { InputImageSize } from '../InputImageSize'

import type { InputImageFiles } from '../InputImageFiles'
import type { InputImageProps } from '../props'

/** Mutable state of the files mock / Изменяемое состояние мока файлов */
type FilesState = {
  /** Image source / Источник изображения */
  src?: string
}

/**
 * Creates a reactive InputImageFiles mock exposing only the members used by InputImageSize.
 *
 * Создаёт реактивный мок InputImageFiles, содержащий только члены, используемые InputImageSize.
 * @param src initial image source / начальный источник изображения
 * @param file initial file object / начальный объект файла
 * @returns mock and its mutable state / мок и его изменяемое состояние
 */
const createFiles = (src?: string, file?: File) => {
  const state = reactive<FilesState>({ src })
  const fileRef: Ref<File | undefined> = ref(file)
  const files = {
    get src() {
      return state.src
    },
    file: fileRef
  } as unknown as InputImageFiles

  return { files, state, fileRef }
}

/**
 * Mocks image decoding with the given dimensions.
 *
 * Мокирует декодирование изображения с указанными размерами.
 * @param width decoded width / декодированная ширина
 * @param height decoded height / декодированная высота
 */
const mockCreateImage = (width: number, height: number): void => {
  vi.spyOn(ImageFile, 'createImage').mockResolvedValue({
    image: {} as HTMLImageElement,
    src: 'mock',
    width,
    height
  })
}

/**
 * Waits for pending promises and watchers.
 *
 * Ожидает завершения отложенных промисов и наблюдателей.
 */
const flush = async (): Promise<void> => {
  await nextTick()
  await new Promise(resolve => setTimeout(resolve, 0))
}

/**
 * Creates InputImageSize and triggers onMounted inside an effectScope.
 *
 * Создаёт InputImageSize и запускает onMounted внутри effectScope.
 * @param props component properties / свойства компонента
 * @param files files mock / мок файлов
 * @returns InputImageSize instance and scope cleanup / экземпляр InputImageSize и очистка области
 */
const createSize = (
  props: Partial<InputImageProps>,
  files: InputImageFiles
): InputImageSize => {
  const scope = effectScope()
  let size!: InputImageSize

  scope.run(() => {
    size = new InputImageSize(props as Readonly<InputImageProps>, () => files)
    size.onMounted()
  })

  return size
}

describe('InputImageSize', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  describe('size and file size calculation', () => {
    it('stays undefined without an image source and remains lazy before onMounted', async () => {
      const createImageSpy = vi.spyOn(ImageFile, 'createImage')
      const { files } = createFiles('https://example.com/lazy.jpg')
      const unmountedSize = new InputImageSize({} as Readonly<InputImageProps>, () => files)

      expect(createImageSpy).not.toHaveBeenCalled()
      expect(unmountedSize.get()).toBeUndefined()

      const emptyFiles = createFiles().files
      const size = createSize({}, emptyFiles)
      await flush()

      expect(size.get()).toBeUndefined()
      expect(size.getFileSize()).toBeUndefined()
      expect(createImageSpy).not.toHaveBeenCalled()
    })

    it('uses the largest dimension of a landscape image', async () => {
      mockCreateImage(1600, 900)
      const { files } = createFiles('https://example.com/landscape.jpg')
      const size = createSize({}, files)

      await flush()

      expect(size.get()).toBe(1600)
    })

    it('uses the largest dimension of a portrait image', async () => {
      mockCreateImage(600, 1200)
      const { files } = createFiles('https://example.com/portrait.jpg')
      const size = createSize({}, files)

      await flush()

      expect(size.get()).toBe(1200)
    })

    it('resets the size when the image cannot be decoded', async () => {
      vi.spyOn(ImageFile, 'createImage').mockResolvedValue(undefined)
      const { files } = createFiles('https://example.com/broken.jpg')
      const size = createSize({}, files)

      await flush()

      expect(size.get()).toBeUndefined()
    })

    it.each([
      ['hello', 5],
      ['hell', 4],
      ['abc', 3],
      ['hello world test string', 23]
    ])('calculates the exact byte size of a data URL payload "%s"', async (payload, expected) => {
      mockCreateImage(10, 10)
      const { files } = createFiles(`data:image/png;base64,${btoa(payload)}`)
      const size = createSize({}, files)

      await flush()

      expect(size.getFileSize()).toBe(expected)
    })

    it('returns no file size for a data URL without payload', async () => {
      mockCreateImage(10, 10)
      const { files } = createFiles('data:image/png;base64,')
      const size = createSize({}, files)

      await flush()

      expect(size.getFileSize()).toBeUndefined()
    })

    it('returns no file size for a remote URL', async () => {
      mockCreateImage(10, 10)
      const { files } = createFiles('https://example.com/photo.jpg')
      const size = createSize({}, files)

      await flush()

      expect(size.getFileSize()).toBeUndefined()
    })

    it('prefers the File object size over the data URL payload', async () => {
      mockCreateImage(1024, 768)
      const file = new File(['1234567890'], 'image.png', { type: 'image/png' })
      const { files } = createFiles(`data:image/png;base64,${btoa('abc')}`, file)
      const size = createSize({}, files)

      await flush()

      expect(size.get()).toBe(1024)
      expect(size.getFileSize()).toBe(10)
    })

    it('recalculates when the image source changes and stops watching on onUnmounted', async () => {
      mockCreateImage(300, 200)
      const { files, state } = createFiles()
      const size = createSize({}, files)

      await flush()
      expect(size.get()).toBeUndefined()

      state.src = `data:image/png;base64,${btoa('hello')}`
      await flush()

      expect(size.get()).toBe(300)
      expect(size.getFileSize()).toBe(5)

      state.src = undefined
      await flush()

      expect(size.get()).toBeUndefined()
      expect(size.getFileSize()).toBeUndefined()

      size.onUnmounted()
      state.src = `data:image/png;base64,${btoa('ignored')}`
      await flush()

      expect(size.get()).toBeUndefined()
      expect(size.getFileSize()).toBeUndefined()
    })

    it('ignores stale createImage resolution after unmount or subsequent update', async () => {
      let resolveImage: (value: { image: HTMLImageElement, src: string, width: number, height: number }) => void = () => undefined
      vi.spyOn(ImageFile, 'createImage').mockImplementationOnce(() => new Promise((resolve) => {
        resolveImage = resolve
      }))

      const { files } = createFiles('https://example.com/slow.jpg')
      const size = createSize({}, files)

      size.onUnmounted()
      resolveImage({
        image: {} as HTMLImageElement,
        src: 'https://example.com/slow.jpg',
        width: 1920,
        height: 1080
      })
      await flush()

      expect(size.get()).toBeUndefined()
    })

    it('recalculates when the file reference changes', async () => {
      mockCreateImage(300, 200)
      const { files, fileRef } = createFiles('https://example.com/photo.jpg')
      const size = createSize({}, files)

      await flush()
      expect(size.getFileSize()).toBeUndefined()

      fileRef.value = new File(['12345'], 'photo.png', { type: 'image/png' })
      await flush()

      expect(size.getFileSize()).toBe(5)
    })
  })

  describe('isFileSize', () => {
    it.each([
      [{}, false],
      [{ maxPixel: 1000 }, false],
      [{ maxFileSize: 1000 }, true],
      [{ maxFileSize: 1000, maxPixel: 1000 }, false]
    ])('returns the expected mode for %o', (props, expected) => {
      const { files } = createFiles()

      expect(createSize(props, files).isFileSize()).toBe(expected)
    })
  })

  describe('counter modes', () => {
    const file = new File(['12345'], 'image.png', { type: 'image/png' })

    it('hide: never shows the counter', async () => {
      mockCreateImage(1920, 1080)
      const { files } = createFiles('data:image/png;base64,eHh4', file)
      const size = createSize({ counterType: 'hide', maxPixel: 2000, maxFileSize: 5000 }, files)

      await flush()

      expect(size.isCounter()).toBe(false)
      expect(size.getCounter()).toBeUndefined()
      expect(size.getMaxlength()).toBeUndefined()
      expect(size.getExtra()).toEqual({
        counter: undefined,
        maxlength: undefined,
        counterShow: false
      })
    })

    it('pixel: shows the largest dimension against maxPixel', async () => {
      mockCreateImage(1920, 1080)
      const { files } = createFiles('data:image/png;base64,eHh4', file)
      const size = createSize({ counterType: 'pixel', maxPixel: 2000 }, files)

      await flush()

      expect(size.getExtra()).toEqual({
        counter: 1920,
        maxlength: 2000,
        counterShow: true
      })
    })

    it('pixel: hides the counter without limit and image', () => {
      const { files } = createFiles()
      const size = createSize({ counterType: 'pixel' }, files)

      expect(size.isCounter()).toBe(false)
    })

    it('size: shows the file size against maxFileSize', async () => {
      mockCreateImage(1920, 1080)
      const { files } = createFiles('data:image/png;base64,eHh4', file)
      const size = createSize({ counterType: 'size', maxFileSize: 5000 }, files)

      await flush()

      expect(size.getExtra()).toEqual({
        counter: 5,
        maxlength: 5000,
        counterShow: true
      })
    })

    it('size: hides the counter without limit and file', () => {
      const { files } = createFiles()
      const size = createSize({ counterType: 'size' }, files)

      expect(size.isCounter()).toBe(false)
    })

    it('auto: switches to file size mode when only maxFileSize is set', async () => {
      mockCreateImage(1920, 1080)
      const { files } = createFiles('data:image/png;base64,eHh4', file)
      const size = createSize({ counterType: 'auto', maxFileSize: 5000 }, files)

      await flush()

      expect(size.getExtra()).toEqual({
        counter: 5,
        maxlength: 5000,
        counterShow: true
      })
    })

    it('auto: uses pixel mode when maxPixel is set', async () => {
      mockCreateImage(1920, 1080)
      const { files } = createFiles('data:image/png;base64,eHh4', file)
      const size = createSize({ counterType: 'auto', maxPixel: 2000, maxFileSize: 5000 }, files)

      await flush()

      expect(size.getExtra()).toEqual({
        counter: 1920,
        maxlength: 2000,
        counterShow: true
      })
    })

    it('auto (default): falls back to the file size when the dimension is unknown', async () => {
      vi.spyOn(ImageFile, 'createImage').mockResolvedValue(undefined)
      const { files } = createFiles('data:image/png;base64,eHh4', file)
      const size = createSize({}, files)

      await flush()

      expect(size.getCounter()).toBe(5)
      expect(size.isCounter()).toBe(true)
      expect(size.getMaxlength()).toBeUndefined()
    })

    it('auto (default): hides the counter without limits and image', () => {
      const { files } = createFiles()
      const size = createSize({}, files)

      expect(size.isCounter()).toBe(false)
      expect(size.getCounter()).toBeUndefined()
    })
  })
})
