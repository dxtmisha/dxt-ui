// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { ImageData } from '../ImageData'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'
import { ImageType } from '../ImageType'
import { type ImageItem, ImageTypeValue } from '../basicTypes'
import { ImageFile } from '../ImageFile'
import { ImagePdf } from '../ImagePdf'
import { ImageBackground } from '../ImageBackground'
import { ImageCoordinator } from '../ImageCoordinator'
import { ImageImg } from '../ImageImg'
import { ImagePosition } from '../ImagePosition'
import type { ImageAdaptiveItem } from '../ImageAdaptiveItem'
import type { ImageLazy } from '../ImageLazy'
import type { ImageProps } from '../props'
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
} as unknown as ImageLazy

const activeLazy = {
  isLazy: vi.fn(() => true)
} as unknown as ImageLazy

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

  it('should manage states for a decoded image', async () => {
    const scope = effectScope()

    try {
      await scope.run(async () => {
        const props = { value: new File([], 'photo.png', { type: 'image/png' }) }
        const clientOnly = new ClientOnlyInclude({ clientOnly: false })
        const type = new ImageType(props, clientOnly)
        const image = {
          image: document.createElement('img'),
          src: 'data:image/png;base64,test',
          width: 100,
          height: 100
        }
        vi.spyOn(ImageFile, 'createImage').mockResolvedValue(image)
        const data = new ImageData(props, clientOnly, type, defaultLazy)

        await vi.waitFor(() => {
          expect(data.image.value).toBe(image)
          expect(data.is()).toBe(true)
          expect(data.isLink()).toBe(false)
          expect(data.isImage()).toBe(true)
        })
      })
    } finally {
      scope.stop()
    }
  })

  it('should return false for is() when value is empty', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const type = new ImageType({}, clientOnly)

    const data = new ImageData({}, clientOnly, type, defaultLazy)
    expect(data.is()).toBe(false)
    expect(data.isLink()).toBe(false)
    expect(data.isImage()).toBe(false)
  })

  it('should update display text when the source and its type change', () => {
    const scope = effectScope()

    try {
      scope.run(() => {
        const props = reactive<ImageProps>({ value: '$home' })
        const clientOnly = new ClientOnlyInclude({ clientOnly: false })
        const type = new ImageType(props, clientOnly)
        const data = new ImageData(props, clientOnly, type, defaultLazy)

        expect(data.text.value).toBe('home')

        props.value = 'material-account_circle'
        expect(data.text.value).toBe('account_circle')

        props.value = 'outlined-home'
        expect(data.text.value).toBe('home')

        props.value = 'f-vn'
        expect(data.text.value).toBe('VN')

        props.value = '#fff'
        expect(data.text.value).toBeUndefined()

        props.value = undefined
        expect(data.text.value).toBeUndefined()
      })
    } finally {
      scope.stop()
    }
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

    await vi.waitFor(() => {
      expect(data.text.value).toBe('data:application/pdf;base64,...')
    })
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

  it.each([
    ['https://example.test/photo.png', 'https://example.test/photo.png'],
    ['image:photo.png?token=image%3A#preview', 'photo.png?token=image%3A#preview'],
    ['image:https://example.test/photo.png', 'https://example.test/photo.png']
  ])('should preserve a lazy native image URL without processing it as a file: %s', async (value, source) => {
    const scope = effectScope()

    try {
      await scope.run(async () => {
        const props = { value, lazy: true, tagImg: true }
        const clientOnly = new ClientOnlyInclude({ clientOnly: false })
        vi.spyOn(clientOnly, 'isRender').mockReturnValue(true)
        const type = new ImageType(props, clientOnly)
        const createImage = vi.spyOn(ImageFile, 'createImage')
        const data = new ImageData(props, clientOnly, type, activeLazy)
        const coordinator = new ImageCoordinator(props)
        const adaptive = { is: (): boolean => false } as unknown as ImageAdaptiveItem
        const background = new ImageBackground(props, data, coordinator, adaptive)
        const image = new ImageImg(
          props,
          ref<HTMLElement>(),
          type,
          new ImagePosition(props, coordinator),
          background,
          activeLazy
        )

        expect(type.item.value).toBe(ImageTypeValue.image)
        expect(data.image.value).toBe(source)
        expect(image.binds.value.src).toBe(source)
        expect(image.binds.value.loading).toBe('lazy')
        await nextTick()
        expect(createImage).not.toHaveBeenCalled()
        expect(data.image.value).toBe(source)
      })
    } finally {
      scope.stop()
    }
  })

  it.each([
    ['https://example.test/photo.png', 'https://example.test/photo.png'],
    ['image:photo.png', 'photo.png']
  ])('should defer a lazy background URL through initial rendering and until visibility: %s', async (value, source) => {
    const scope = effectScope()

    try {
      await scope.run(async () => {
        const props = reactive({ value, lazy: true })
        const isLazy = ref(true)
        const isClientReady = ref(false)
        const lazy = { isLazy: (): boolean => isLazy.value } as unknown as ImageLazy
        const clientOnly = new ClientOnlyInclude({ clientOnly: true })
        vi.spyOn(clientOnly, 'isRender').mockImplementation(() => isClientReady.value)
        const type = new ImageType(props, clientOnly)
        const image: ImageItem = {
          image: document.createElement('img'),
          src: source,
          width: 200,
          height: 100
        }
        let resolveImage: ((image: ImageItem) => void) | undefined
        const pendingImage = new Promise<ImageItem>((resolve) => {
          resolveImage = resolve
        })
        const createImage = vi.spyOn(ImageFile, 'createImage').mockReturnValue(pendingImage)
        const emits = vi.fn()
        const data = new ImageData(props, clientOnly, type, lazy, emits)
        const adaptive = { is: (): boolean => false } as unknown as ImageAdaptiveItem
        const background = new ImageBackground(props, data, new ImageCoordinator(props), adaptive)

        expect(data.image.value).toBeUndefined()
        expect(background.image).toBeNull()
        await nextTick()
        expect(data.image.value).toBeUndefined()
        expect(createImage).not.toHaveBeenCalled()

        isClientReady.value = true
        await nextTick()
        expect(data.image.value).toBeUndefined()
        expect(background.image).toBeNull()
        expect(createImage).not.toHaveBeenCalled()
        expect(emits).not.toHaveBeenCalled()

        isLazy.value = false
        await nextTick()
        expect(createImage).toHaveBeenCalledExactlyOnceWith(source)
        expect(background.image).toBeNull()
        expect(emits).not.toHaveBeenCalled()

        resolveImage?.(image)

        await vi.waitFor(() => {
          expect(data.image.value).toBe(image)
          expect(background.image).toBe(`url("${source}")`)
          expect(emits).toHaveBeenCalledExactlyOnceWith('load', {
            type: ImageTypeValue.image,
            image
          })
        })
      })
    } finally {
      scope.stop()
    }
  })

  it('should remove the explicit image prefix from the initial SSR source', async () => {
    const scope = effectScope()

    try {
      await scope.run(async () => {
        const props = { value: 'image:photo.png', tagImg: true, lazy: false }
        const clientOnly = new ClientOnlyInclude({ clientOnly: true })
        vi.spyOn(clientOnly, 'isRender').mockReturnValue(false)
        const type = new ImageType(props, clientOnly)
        const createImage = vi.spyOn(ImageFile, 'createImage')
        const data = new ImageData(props, clientOnly, type, defaultLazy)

        expect(data.image.value).toBe('photo.png')
        await nextTick()
        expect(data.image.value).toBe('photo.png')
        expect(createImage).not.toHaveBeenCalled()
      })
    } finally {
      scope.stop()
    }
  })

  it('should defer a lazy File and emit decoded image data only after visibility', async () => {
    const scope = effectScope()

    try {
      await scope.run(async () => {
        const file = new File([], 'photo.png', { type: 'image/png' })
        const props = reactive({ value: file, lazy: true })
        const isLazy = ref(true)
        const lazy = { isLazy: (): boolean => isLazy.value } as unknown as ImageLazy
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
        const data = new ImageData(props, clientOnly, type, lazy, emits)

        expect(type.item.value).toBe(ImageTypeValue.file)
        expect(data.image.value).toBeUndefined()
        expect(data.isImage()).toBe(false)
        await nextTick()
        expect(data.image.value).toBeUndefined()
        expect(createImage).not.toHaveBeenCalled()
        expect(emits).not.toHaveBeenCalled()

        isLazy.value = false

        await vi.waitFor(() => {
          expect(data.image.value).toBe(image)
          expect(createImage).toHaveBeenCalledExactlyOnceWith(file)
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

  it('should defer a File while client rendering is unavailable', async () => {
    const scope = effectScope()

    try {
      await scope.run(async () => {
        const file = new File([], 'photo.png', { type: 'image/png' })
        const props = { value: file }
        const isClientReady = ref(false)
        const clientOnly = new ClientOnlyInclude({ clientOnly: true })
        vi.spyOn(clientOnly, 'isRender').mockImplementation(() => isClientReady.value)
        const type = { item: ref(ImageTypeValue.file) } as unknown as ImageType
        const image = {
          image: document.createElement('img'),
          src: 'data:image/png;base64,test',
          width: 200,
          height: 100
        }
        const createImage = vi.spyOn(ImageFile, 'createImage').mockResolvedValue(image)
        const emits = vi.fn()
        const data = new ImageData(props, clientOnly, type, defaultLazy, emits)

        expect(data.image.value).toBeUndefined()
        await nextTick()
        expect(data.image.value).toBeUndefined()
        expect(createImage).not.toHaveBeenCalled()
        expect(emits).not.toHaveBeenCalled()

        isClientReady.value = true

        await vi.waitFor(() => {
          expect(data.image.value).toBe(image)
          expect(createImage).toHaveBeenCalledExactlyOnceWith(file)
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
