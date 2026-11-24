// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, provide, reactive } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { COLLAGE_NAME_UPDATE } from '../basicTypes'
import { CollageItemDimensions } from '../CollageItemDimensions'
import type { ImageEventData, ImageItem } from '../../Image'
import type { CollageItemProps } from '../props'

/** Cleanup callbacks for mounted test apps / Обработчики очистки смонтированных тестовых приложений */
const mountedCleanups: Array<() => void> = []

/**
 * Helper for creating a typed ImageEventData payload with numeric dimensions.
 *
 * Вспомогательная функция для создания типизированного объекта ImageEventData с числовыми размерами.
 * @param width image width / ширина изображения
 * @param height image height / высота изображения
 * @returns image load event payload / полезная нагрузка события загрузки изображения
 */
function createImageEvent(width: number, height: number): ImageEventData {
  return {
    type: undefined,
    image: {
      width,
      height,
      image: {} as HTMLImageElement,
      src: 'https://example.com/photo.jpg'
    } as ImageItem
  }
}

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('CollageItemDimensions', () => {
  describe('Initialization and default contract', () => {
    it('should initialize with undefined dimensions and zero Vue warnings outside setup', () => {
      const props: CollageItemProps = {
        value: 'test-item'
      }
      const dimensions = new CollageItemDimensions(props, new DesignName('d.collage-item'))

      expect(dimensions.height.value).toBeUndefined()
      expect(dimensions.width.value).toBeUndefined()
      expect(dimensions.update).toBeUndefined()
      expect(dimensions.getHeight()).toBeUndefined()
      expect(dimensions.getWidth()).toBeUndefined()
      expect(dimensions.expose.getHeight()).toBeUndefined()
      expect(dimensions.expose.getWidth()).toBeUndefined()
      expect(dimensions.styles).toEqual({})
      expect(dimensions.binds).toEqual({
        'data-collage-item': 'true',
        'data-value': 'test-item',
        'data-height': undefined,
        'data-width': undefined
      })
    })

    it('should preserve falsy numeric 0 and empty string data-value bindings', () => {
      const zeroDimensions = new CollageItemDimensions({ value: 0 }, new DesignName('d1.collageItem'))
      const emptyDimensions = new CollageItemDimensions({ value: '' }, new DesignName('d1.collageItem'))

      expect(zeroDimensions.binds['data-value']).toBe(0)
      expect(emptyDimensions.binds['data-value']).toBe('')
    })

    it('should keep state isolated between separate instances', () => {
      const first = new CollageItemDimensions({ value: 'first' }, new DesignName('d1.collageItem'))
      const second = new CollageItemDimensions({ value: 'second' }, new DesignName('d1.collageItem'))

      first.onLoad(createImageEvent(800, 600))

      expect(first.getHeight()).toBe(7)
      expect(first.getWidth()).toBe(13)
      expect(second.getHeight()).toBeUndefined()
      expect(second.getWidth()).toBeUndefined()
    })
  })

  describe('Aspect ratio computation, styles, binds, and emits', () => {
    it('should calculate aspect ratios, update styles/binds/expose, and emit load on onLoad', () => {
      const props = reactive<CollageItemProps>({
        value: 'item-1'
      })
      const emit = vi.fn()
      const dimensions = new CollageItemDimensions(props, new DesignName('d.collage-item'), emit)
      const payload = createImageEvent(800, 600)

      dimensions.onLoad(payload)

      // height = Math.floor(600 * 10 / 800) = 7
      // width = Math.floor(800 * 10 / 600) = 13
      expect(dimensions.height.value).toBe(7)
      expect(dimensions.width.value).toBe(13)
      expect(dimensions.getHeight()).toBe(7)
      expect(dimensions.getWidth()).toBe(13)
      expect(dimensions.expose.getHeight()).toBe(7)
      expect(dimensions.expose.getWidth()).toBe(13)
      expect(emit).toHaveBeenCalledTimes(1)
      expect(emit).toHaveBeenCalledWith('load', payload)
      expect(dimensions.styles).toEqual({
        '--d-collageItem-sys-height': '7',
        '--d-collageItem-sys-width': '13'
      })
      expect(dimensions.binds).toEqual({
        'data-collage-item': 'true',
        'data-value': 'item-1',
        'data-height': 7,
        'data-width': 13
      })
    })

    it('should preserve calculated 0 factor in styles and binds for ultra-wide images', () => {
      const dimensions = new CollageItemDimensions({ value: 'banner' }, new DesignName('d1.collageItem'))

      // height = Math.floor(100 * 10 / 2000) = 0
      // width = Math.floor(2000 * 10 / 100) = 200
      dimensions.onLoad(createImageEvent(2000, 100))

      expect(dimensions.getHeight()).toBe(0)
      expect(dimensions.getWidth()).toBe(200)
      expect(dimensions.styles).toEqual({
        '--d1-collageItem-sys-height': '0',
        '--d1-collageItem-sys-width': '200'
      })
      expect(dimensions.binds['data-height']).toBe(0)
      expect(dimensions.binds['data-width']).toBe(200)
    })

    it('should update dimensions when onLoad is triggered again with a new image', () => {
      const dimensions = new CollageItemDimensions({ value: 'dynamic' }, new DesignName('d1.collageItem'))

      dimensions.onLoad(createImageEvent(800, 400))
      expect(dimensions.getHeight()).toBe(5)
      expect(dimensions.getWidth()).toBe(20)

      dimensions.onLoad(createImageEvent(400, 800))
      expect(dimensions.getHeight()).toBe(20)
      expect(dimensions.getWidth()).toBe(5)
    })
  })

  describe('Boundary and invalid image payloads', () => {
    it.each([
      ['undefined image', { type: undefined, image: undefined } as ImageEventData],
      ['string icon image', { type: undefined, image: 'photo_camera' } as ImageEventData],
      ['zero width', createImageEvent(0, 600)],
      ['zero height', createImageEvent(800, 0)],
      ['negative width', createImageEvent(-800, 600)],
      ['negative height', createImageEvent(800, -600)],
      ['NaN dimensions', createImageEvent(Number.NaN, 600)],
      ['Infinity dimensions', createImageEvent(Number.POSITIVE_INFINITY, 600)]
    ])('should ignore invalid dimensions for %s while still notifying update and emitting load', (_, payload) => {
      const emit = vi.fn()
      const dimensions = new CollageItemDimensions({ value: 'edge' }, new DesignName('d1.collageItem'), emit)
      const update = vi.fn()
      Object.defineProperty(dimensions, 'update', { value: update })

      dimensions.onLoad(payload)

      expect(dimensions.getHeight()).toBeUndefined()
      expect(dimensions.getWidth()).toBeUndefined()
      expect(dimensions.styles).toEqual({})
      expect(update).toHaveBeenCalledTimes(1)
      expect(emit).toHaveBeenCalledWith('load', payload)
    })
  })

  describe('Vue provide/inject integration', () => {
    it('should inject parent Collage update callback inside setup and invoke it on load', () => {
      const parentUpdate = vi.fn()
      let capturedDimensions: CollageItemDimensions | undefined

      const Child = defineComponent({
        setup() {
          capturedDimensions = new CollageItemDimensions(
            { value: 'injected' },
            new DesignName('d1.collageItem')
          )
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          provide(COLLAGE_NAME_UPDATE, parentUpdate)
          return () => h(Child)
        }
      })

      const container = document.createElement('div')
      document.body.appendChild(container)
      const app = createApp(Parent)
      app.mount(container)
      mountedCleanups.push(() => {
        app.unmount()
        container.remove()
      })

      expect(capturedDimensions?.update).toBe(parentUpdate)

      capturedDimensions?.onLoad(createImageEvent(400, 300))
      expect(parentUpdate).toHaveBeenCalledTimes(1)
    })

    it('should resolve update as undefined with zero Vue warnings when mounted without a Collage provider', () => {
      let capturedDimensions: CollageItemDimensions | undefined

      const Standalone = defineComponent({
        setup() {
          capturedDimensions = new CollageItemDimensions(
            { value: 'standalone' },
            new DesignName('d1.collageItem')
          )
          return () => h('div')
        }
      })

      const container = document.createElement('div')
      document.body.appendChild(container)
      const app = createApp(Standalone)
      app.mount(container)
      mountedCleanups.push(() => {
        app.unmount()
        container.remove()
      })

      expect(capturedDimensions?.update).toBeUndefined()
    })
  })
})
