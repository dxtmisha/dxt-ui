// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { reactive, ref } from 'vue'

vi.mock('vue', async () => {
  const actual = await vi.importActual<typeof import('vue')>('vue')
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

import { ImageFile } from '../../Image/ImageFile'
import { InputImageSize } from '../InputImageSize'
import type { InputImageProps } from '../props'
import type { InputImageFiles } from '../InputImageFiles'

describe('InputImageSize', () => {
  let originalImage: typeof Image

  beforeEach(() => {
    vi.restoreAllMocks()
    originalImage = globalThis.Image
  })

  afterEach(() => {
    globalThis.Image = originalImage
  })

  const createProps = (props: Partial<InputImageProps> = {}): InputImageProps => ({
    ...props
  } as InputImageProps)

  it('should initialize with undefined size when no src', () => {
    const filesMock = {
      src: undefined,
      file: ref(undefined)
    } as unknown as InputImageFiles

    const imageSize = new InputImageSize(createProps(), filesMock)

    expect(imageSize.get()).toBeUndefined()
    expect(imageSize.getFileSize()).toBeUndefined()
  })

  it('should load size and fileSize from data URL on init', async () => {
    const base64Data = 'data:image/png;base64,' + btoa('hello world test string')

    vi.spyOn(ImageFile, 'createImage').mockResolvedValue({
      width: 800,
      height: 600,
      image: {} as HTMLImageElement,
      src: base64Data
    })

    const filesMock = reactive({
      src: base64Data,
      file: ref(undefined)
    }) as unknown as InputImageFiles

    const imageSize = new InputImageSize(createProps(), filesMock)

    await new Promise(resolve => setTimeout(resolve, 10))

    expect(imageSize.get()).toBe(800)
    expect(imageSize.getFileSize()).toBeGreaterThan(0)
  })

  it('should load size from image src on init', async () => {
    class MockImage {
      naturalWidth = 1600
      naturalHeight = 900
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

    vi.spyOn(ImageFile, 'createImage').mockResolvedValue({
      width: 1600,
      height: 900,
      image: {} as HTMLImageElement,
      src: 'https://example.com/test.jpg'
    })

    const filesMock = reactive({
      src: 'https://example.com/test.jpg',
      file: ref(undefined)
    }) as unknown as InputImageFiles

    const imageSize = new InputImageSize(createProps(), filesMock)

    await new Promise(resolve => setTimeout(resolve, 10))

    expect(imageSize.get()).toBe(1600)
    expect(imageSize.getFileSize()).toBeUndefined()
  })

  it('should use File object size when available', async () => {
    const mockFile = new File(['1234567890'], 'image.png', { type: 'image/png' })

    vi.spyOn(ImageFile, 'createImage').mockResolvedValue({
      width: 1024,
      height: 768,
      image: {} as HTMLImageElement,
      src: 'data:image/png;base64,xxxx'
    })

    const filesMock = {
      src: 'data:image/png;base64,xxxx',
      file: ref(mockFile)
    } as unknown as InputImageFiles

    const imageSize = new InputImageSize(createProps(), filesMock)

    await new Promise(resolve => setTimeout(resolve, 10))

    expect(imageSize.get()).toBe(1024)
    expect(imageSize.getFileSize()).toBe(10)
  })

  it('should handle counterType pixel, size, auto, hide', async () => {
    const mockFile = new File(['12345'], 'image.png', { type: 'image/png' })

    vi.spyOn(ImageFile, 'createImage').mockResolvedValue({
      width: 1920,
      height: 1080,
      image: {} as HTMLImageElement,
      src: 'data:image/png;base64,xxxx'
    })

    const filesMock = {
      src: 'data:image/png;base64,xxxx',
      file: ref(mockFile)
    } as unknown as InputImageFiles

    // pixel mode
    const pixelSize = new InputImageSize(createProps({ counterType: 'pixel', maxPixel: 2000 }), filesMock)
    await new Promise(resolve => setTimeout(resolve, 10))
    expect(pixelSize.isCounter()).toBe(true)
    expect(pixelSize.getCounter()).toBe(1920)
    expect(pixelSize.getMaxlength()).toBe(2000)
    expect(pixelSize.getExtra()).toEqual({
      counter: 1920,
      maxlength: 2000,
      counterShow: true
    })

    // size mode
    const sizeMode = new InputImageSize(createProps({ counterType: 'size', maxFileSize: 5000 }), filesMock)
    await new Promise(resolve => setTimeout(resolve, 10))
    expect(sizeMode.isCounter()).toBe(true)
    expect(sizeMode.getCounter()).toBe(5)
    expect(sizeMode.getMaxlength()).toBe(5000)
    expect(sizeMode.getExtra()).toEqual({
      counter: 5,
      maxlength: 5000,
      counterShow: true
    })

    // hide mode
    const hideMode = new InputImageSize(createProps({ counterType: 'hide', maxPixel: 2000 }), filesMock)
    expect(hideMode.isCounter()).toBe(false)
    expect(hideMode.getCounter()).toBeUndefined()
    expect(hideMode.getMaxlength()).toBeUndefined()
    expect(hideMode.getExtra()).toEqual({
      counter: undefined,
      maxlength: undefined,
      counterShow: false
    })
  })
})
