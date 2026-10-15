// @vitest-environment jsdom
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest'
import { createApp, h, nextTick, ref, reactive, type VNode } from 'vue'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'
import { ImageBackground } from '../ImageBackground'
import { ImageCoordinator } from '../ImageCoordinator'
import { ImageData } from '../ImageData'
import { ImageImg } from '../ImageImg'
import { ImagePosition } from '../ImagePosition'
import { ImageType } from '../ImageType'
import type { ImageAdaptiveItem } from '../ImageAdaptiveItem'
import type { ImageLazy } from '../ImageLazy'
import { ImageTypeValue, type ImageUint8ArrayType } from '../basicTypes'
import type { ImageProps } from '../props'

/** Object URL produced from the binary source / URL объекта, полученный из бинарного источника */
const BINARY_SOURCE = 'blob:https://example.com/binary-image'
/** Image elements used for decoding / Элементы изображений, используемые для декодирования */
let decodingImages: HTMLImageElement[] = []

beforeEach(() => {
  decodingImages = []

  /**
   * Controls object URL creation and cleanup while preserving URL parsing.
   *
   * Управляет созданием и очисткой URL объектов, сохраняя разбор URL.
   */
  class BinaryObjectURL extends URL {
    /** Controlled object URL creation / Управляемое создание URL объекта */
    static createObjectURL = vi.fn(() => BINARY_SOURCE)
    /** Object URL cleanup observer / Наблюдатель очистки URL объекта */
    static revokeObjectURL = vi.fn()
  }
  vi.stubGlobal('URL', BinaryObjectURL)
  vi.stubGlobal('Image', vi.fn(function (): HTMLImageElement {
    const image = document.createElement('img')
    decodingImages.push(image)
    return image
  }))
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('ImageImg', () => {
  it('should check if img tag is needed', () => {
    const props = reactive({ tagImg: true, lazy: true, preloadOffset: '0px' })
    const mockType = {
      item: { value: 'image' }
    } as any
    const mockPosition = { x: 'center', y: 'center' } as any
    const mockBackground = {
      size: { value: 'cover' }
    } as any
    const mockLazy = {
      isLazy: vi.fn(() => false)
    } as any

    const img = new ImageImg(props, ref(undefined), mockType, mockPosition, mockBackground, mockLazy)
    expect(img.is()).toBe(true)
    expect(img.binds.value.loading).toBe('auto')
    expect(img.binds.value).not.toHaveProperty('fetchPriority')
    expect(mockLazy.isLazy).toHaveBeenCalled()
  })

  it.each([
    ['Uint8Array', new Uint8Array([1, 2, 3])],
    ['ArrayBuffer', new Uint8Array([1, 2, 3]).buffer]
  ] as const)('should bind a decoded %s source to a native img', async (_, value: ImageUint8ArrayType) => {
    const props = reactive<ImageProps>({
      value,
      tagImg: true,
      lazy: false,
      fetchPriority: 'high',
      alt: 'Binary image',
      srcset: '/retina.png 2x',
      picture: { '600px': '/wide.png' }
    })
    const element = ref<HTMLElement>()
    const lazy = { isLazy: () => false } as unknown as ImageLazy
    const adaptive = { is: () => false } as unknown as ImageAdaptiveItem
    let type: ImageType | undefined
    let data: ImageData | undefined
    let imageTag: ImageImg | undefined
    const host = document.createElement('div')
    document.body.append(host)
    const application = createApp({
      setup(): () => VNode {
        const clientOnly = new ClientOnlyInclude({ clientOnly: false })
        type = new ImageType(props, clientOnly)
        data = new ImageData(props, clientOnly, type, lazy)
        const coordinator = new ImageCoordinator(props)
        const position = new ImagePosition(props, coordinator)
        const background = new ImageBackground(props, data, coordinator, adaptive)
        imageTag = new ImageImg(props, element, type, position, background, lazy)
        return () => h('img', imageTag?.binds.value)
      }
    })

    try {
      application.mount(host)
      expect(type?.item.value).toBe(ImageTypeValue.array)
      expect(imageTag?.is()).toBe(true)
      expect(host.querySelector('img')?.hasAttribute('src')).toBe(false)

      await vi.waitFor(() => expect(decodingImages).toHaveLength(1))
      const image = decodingImages[0]
      if (!image) {
        throw new Error('Binary image decoder was not initialized')
      }
      Object.defineProperties(image, {
        naturalWidth: { value: 200 },
        naturalHeight: { value: 100 }
      })
      image.onload?.call(image, new Event('load'))
      await vi.waitFor(() => expect(imageTag?.binds.value.src).toBe(BINARY_SOURCE))
      await nextTick()

      expect(URL.createObjectURL).toHaveBeenCalledWith(expect.objectContaining({ size: value.byteLength }))
      expect(data?.image.value).toEqual({ image, src: BINARY_SOURCE, width: 200, height: 100 })
      expect(host.querySelector('img')?.getAttribute('src')).toBe(BINARY_SOURCE)
      expect(host.querySelector('img')?.getAttribute('alt')).toBe('Binary image')
      expect(host.querySelector('img')?.getAttribute('fetchpriority')).toBe('high')
      expect(imageTag?.isPicture()).toBe(true)
      expect(imageTag?.binds.value.srcset).toBe('/retina.png 2x')
      expect(imageTag?.picture.value).toEqual([
        { key: '600px', srcset: '/wide.png', media: '(width >= 600px)' }
      ])
    } finally {
      application.unmount()
      host.remove()
    }

    expect(URL.revokeObjectURL).toHaveBeenCalledWith(BINARY_SOURCE)
  })
})
