// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { effectScope, nextTick } from 'vue'
import { ImageData } from '../ImageData'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'
import { ImageType } from '../ImageType'
import { ImageTypeValue } from '../basicTypes'
import { ImageFile } from '../ImageFile'
import { ImagePdf } from '../ImagePdf'
import { Icons } from '@dxtmisha/functional'
import * as skipFrameModule from '@dxtmisha/functional'

let unmountedCallback: (() => void) | undefined

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: (fn: () => void) => {
      unmountedCallback = fn
    }
  }
})

const defaultLazy = {
  isLazy: vi.fn(() => false)
} as any

const activeLazy = {
  isLazy: vi.fn(() => true)
} as any

describe('ImageData', () => {
  beforeEach(() => {
    unmountedCallback = undefined
    vi.restoreAllMocks()
  })

  it('should manage image loading properties and states for string value', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = new ImageType({ value: 'http://path/to/img.png' }, clientOnly)

    const data = new ImageData({ value: 'http://path/to/img.png' }, clientOnly, type, defaultLazy)
    expect(data.is()).toBe(true)
    expect(data.isLink()).toBe(true)
    expect(data.isImage()).toBe(false)
  })

  it('should manage states for object value', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const mockImageItem = {
      image: {} as HTMLImageElement,
      src: 'http://path/to/img.png',
      width: 100,
      height: 100
    }
    const type = { item: { value: ImageTypeValue.image } } as any

    const data = new ImageData({ value: mockImageItem as any }, clientOnly, type, defaultLazy)
    expect(data.is()).toBe(true)
    expect(data.isLink()).toBe(false)
    expect(data.isImage()).toBe(true)
  })

  it('should return false for is() when value is empty', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = new ImageType({}, clientOnly)

    const data = new ImageData({}, clientOnly, type, defaultLazy)
    expect(data.is()).toBe(false)
    expect(data.isLink()).toBe(false)
    expect(data.isImage()).toBe(false)
  })

  it('should trigger emit on onLoad when image is an object', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = new ImageType({ value: 'http://path/to/img.png' }, clientOnly)
    const emits = vi.fn()

    const data = new ImageData({ value: 'http://path/to/img.png' }, clientOnly, type, defaultLazy, emits)
    const mockItem = {
      image: {} as HTMLImageElement,
      src: 'http://path/to/img.png',
      width: 100,
      height: 100
    }

    data.onLoad(mockItem)
    expect(emits).toHaveBeenCalledWith('load', {
      type: type.item.value,
      image: mockItem
    })
  })

  it('should not trigger emit on onLoad when image is a string or undefined', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = new ImageType({ value: 'http://path/to/img.png' }, clientOnly)
    const emits = vi.fn()

    const data = new ImageData({ value: 'http://path/to/img.png' }, clientOnly, type, defaultLazy, emits)

    data.onLoad('http://path/to/img.png')
    expect(emits).not.toHaveBeenCalled()

    data.onLoad(undefined)
    expect(emits).not.toHaveBeenCalled()
  })

  it('should process pdf with skipFrame and ImagePdf.get', async () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = { item: { value: ImageTypeValue.pdf } } as any
    const spySkipFrame = vi.spyOn(skipFrameModule, 'skipFrame').mockResolvedValue(undefined)
    const spyPdf = vi.spyOn(ImagePdf, 'get').mockResolvedValue('data:application/pdf;base64,...')

    const data = new ImageData({ value: 'document.pdf' }, clientOnly, type, defaultLazy)
    const result = await (data as any).init()

    expect(spySkipFrame).toHaveBeenCalled()
    expect(spyPdf).toHaveBeenCalledWith('document.pdf')
    expect(result).toBe('data:application/pdf;base64,...')
  })

  it('should process file with ImageFile.createImage when rendered', async () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    vi.spyOn(clientOnly, 'isRender').mockReturnValue(true)
    const type = { item: { value: ImageTypeValue.image } } as any

    const mockImageItem = {
      image: {} as HTMLImageElement,
      src: 'blob:test',
      width: 200,
      height: 100
    }
    const spyCreate = vi.spyOn(ImageFile, 'createImage').mockResolvedValue(mockImageItem)

    const file = new File([], 'photo.png', { type: 'image/png' })
    const data = new ImageData({ value: file }, clientOnly, type, defaultLazy)
    const result = await (data as any).init()

    expect(spyCreate).toHaveBeenCalledWith(file)
    expect(result).toBe(mockImageItem)
  })

  it('should preserve a lazy URL without processing it as a file', async () => {
    const scope = effectScope()

    try {
      await scope.run(async () => {
        const props = { value: 'https://example.test/photo.png', lazy: true }
        const clientOnly = new ClientOnlyInclude({ clientOnly: false })
        vi.spyOn(clientOnly, 'isRender').mockReturnValue(true)
        const type = new ImageType(props, clientOnly)
        const createImage = vi.spyOn(ImageFile, 'createImage')
        const data = new ImageData(props, clientOnly, type, activeLazy)

        expect(type.item.value).toBe(ImageTypeValue.image)
        expect(data.image.value).toBe(props.value)
        await nextTick()
        expect(createImage).not.toHaveBeenCalled()
        expect(data.image.value).toBe(props.value)
      })
    } finally {
      scope.stop()
    }
  })

  it('should process a lazy File and emit image data with a source and dimensions', async () => {
    const scope = effectScope()

    try {
      await scope.run(async () => {
        const file = new File([], 'photo.png', { type: 'image/png' })
        const props = { value: file, lazy: true }
        const clientOnly = new ClientOnlyInclude({ clientOnly: false })
        vi.spyOn(clientOnly, 'isRender').mockReturnValue(true)
        const type = new ImageType(props, clientOnly)
        const image = {
          image: document.createElement('img'),
          src: 'data:image/png;base64,test',
          width: 200,
          height: 100
        }
        const createImage = vi.spyOn(ImageFile, 'createImage').mockResolvedValue(image)
        const emits = vi.fn()
        const data = new ImageData(props, clientOnly, type, defaultLazy, emits)

        expect(type.item.value).toBe(ImageTypeValue.file)
        expect(createImage).toHaveBeenCalledExactlyOnceWith(file)

        await vi.waitFor(() => {
          expect(data.image.value).toBe(image)
          expect(emits).toHaveBeenCalledExactlyOnceWith('load', {
            type: ImageTypeValue.file,
            image
          })
        })
      })
    } finally {
      scope.stop()
    }
  })

  it('should fetch icon for icon types', async () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = { item: { value: ImageTypeValue.icon } } as any
    const spyIcon = vi.spyOn(Icons, 'get').mockResolvedValue({
      image: 'home',
      src: '<svg></svg>',
      width: 24,
      height: 24
    } as any)

    const data = new ImageData({ value: 'home', url: '/icons/' }, clientOnly, type, defaultLazy)
    const result = await (data as any).init()

    expect(spyIcon).toHaveBeenCalledWith('home', '/icons/')
    expect(result).toBeDefined()
  })

  it('should cleanup uint8Array on unmounted', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = { item: { value: ImageTypeValue.array } } as any

    const data = new ImageData({ value: new Uint8Array([1, 2, 3]) }, clientOnly, type, defaultLazy)
    const uint8Array = (data as any).getUint8Array()
    const spyReset = vi.spyOn(uint8Array, 'reset')

    unmountedCallback?.()
    expect(spyReset).toHaveBeenCalled()
  })
})
