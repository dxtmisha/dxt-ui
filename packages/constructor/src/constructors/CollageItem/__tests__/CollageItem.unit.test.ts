// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignComponents, DesignName, type ConstrEmit } from '@dxtmisha/functional'

import { CollageItem, type CollageItemConstructors } from '../CollageItem'
import type { CollageItemProps } from '../props'
import type { CollageItemComponents, CollageItemEmits, CollageItemSlots } from '../types'

/**
 * Helper that constructs a CollageItem inside an active Vue effectScope.
 *
 * Вспомогательная функция, создающая CollageItem внутри активной области эффектов Vue.
 * @param initialProps initial component properties / начальные свойства компонента
 * @param options optional slots, emits, components, and constructor overrides / необязательные слоты, события, компоненты и переопределения конструкторов
 * @returns scope, reactive props, and created CollageItem instance / область, реактивные свойства и экземпляр CollageItem
 */
function createCollageItem(
  initialProps: CollageItemProps = {},
  options: {
    slots?: CollageItemSlots
    emits?: ConstrEmit<CollageItemEmits>
    components?: DesignComponents<CollageItemComponents, CollageItemProps>
    constructors?: Partial<CollageItemConstructors>
  } = {}
) {
  const scope = effectScope()
  const props = reactive<CollageItemProps>({ ...initialProps })
  const element = ref<HTMLElement | undefined>()
  const naming = new DesignName('d1.collageItem')
  let item!: CollageItem

  scope.run(() => {
    item = new CollageItem(
      props,
      element,
      naming,
      options.components,
      options.slots,
      options.emits,
      options.constructors
    )
  })

  return {
    scope,
    props,
    element,
    naming,
    item
  }
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('CollageItem (unit)', () => {
  describe('Lazy instantiation and canCreate guards', () => {
    it('should instantiate dimensions eagerly during setup while keeping collageBar, event, icon, and image lazy', () => {
      const { scope, item } = createCollageItem({})

      expect(item.hasInstance('dimensions')).toBe(true)
      expect(item.hasInstance('collageBar')).toBe(false)
      expect(item.hasInstance('event')).toBe(false)
      expect(item.hasInstance('icon')).toBe(false)
      expect(item.hasInstance('image')).toBe(false)

      scope.stop()
    })

    it('should skip creating collageBar, image, and icon when canCreate evaluates to false', () => {
      const { scope, item } = createCollageItem({
        iconCheck: ''
      })

      expect(item.callInstance('collageBar', instance => instance.render(), [])).toEqual([])
      expect(item.callInstance('image', instance => instance.render(), [])).toEqual([])
      expect(item.callInstance('icon', instance => instance.renderIcon(), [])).toEqual([])

      expect(item.hasInstance('collageBar')).toBe(false)
      expect(item.hasInstance('image')).toBe(false)
      expect(item.hasInstance('icon')).toBe(false)

      scope.stop()
    })

    it('should lazily create collageBar when props or slots satisfy CollageBarInclude.is', () => {
      const { scope, props, item } = createCollageItem({})

      expect(item.callInstance('collageBar', () => true, false)).toBe(false)
      expect(item.hasInstance('collageBar')).toBe(false)

      props.label = 0
      expect(item.callInstance('collageBar', () => true, false)).toBe(true)
      expect(item.hasInstance('collageBar')).toBe(true)

      scope.stop()
    })

    it('should lazily create collageBar when barBody or barTrailing slots are provided', () => {
      const { scope, item } = createCollageItem(
        {},
        {
          slots: {
            barBody: () => 'Custom Bar'
          }
        }
      )

      expect(item.hasInstance('collageBar')).toBe(false)
      expect(item.callInstance('collageBar', () => true, false)).toBe(true)
      expect(item.hasInstance('collageBar')).toBe(true)

      scope.stop()
    })

    it('should lazily create image only when props.image is filled', () => {
      const { scope, props, item } = createCollageItem({})

      expect(item.callInstance('image', () => true, false)).toBe(false)
      expect(item.hasInstance('image')).toBe(false)

      props.image = 'https://example.com/photo.jpg'
      expect(item.callInstance('image', () => true, false)).toBe(true)
      expect(item.hasInstance('image')).toBe(true)

      scope.stop()
    })

    it('should create icon by default with check_circle and support custom iconCheck values', () => {
      const { scope, props, item } = createCollageItem({})

      expect(item.callInstance('icon', instance => instance.iconBind.icon)).toBe('check_circle')
      expect(item.hasInstance('icon')).toBe(true)

      props.iconCheck = 'done'
      expect(item.i('icon').iconBind.icon).toBe('done')

      scope.stop()
    })
  })

  describe('Public getters (binds, classes, styles, tag)', () => {
    it('should compute collageBarPosition status class from collageBarPosition or collageBarAttrs.position', () => {
      const { scope, props, item } = createCollageItem({})

      expect(item.classes).toEqual({})

      props.collageBarAttrs = { position: 'top' }
      expect(item.classes).toEqual({
        'd1-collageItem--collageBarPosition--top': true
      })

      props.collageBarPosition = 'bottom'
      expect(item.classes).toEqual({
        'd1-collageItem--collageBarPosition--bottom': true
      })

      scope.stop()
    })

    it('should resolve body tag with fallback to a on undefined or empty string', () => {
      const { scope, props, item } = createCollageItem({})

      expect(item.tag).toBe('a')

      props.tag = 'div'
      expect(item.tag).toBe('div')

      props.tag = ''
      expect(item.tag).toBe('a')

      scope.stop()
    })

    it('should delegate binds and styles to dimensions', () => {
      const { scope, item } = createCollageItem({ value: 'tile-7' })

      expect(item.binds).toEqual({
        'data-collage-item': 'true',
        'data-value': 'tile-7',
        'data-height': undefined,
        'data-width': undefined
      })
      expect(item.styles).toEqual({})

      item.i('dimensions').onLoad({
        type: undefined,
        image: {
          width: 1000,
          height: 500,
          image: {} as HTMLImageElement,
          src: 'https://example.com/a.jpg'
        }
      })

      expect(item.binds['data-height']).toBe(5)
      expect(item.binds['data-width']).toBe(20)
      expect(item.styles).toEqual({
        '--d1-collageItem-sys-height': '5',
        '--d1-collageItem-sys-width': '20'
      })

      scope.stop()
    })
  })

  describe('Image parameter forwarding and dependency injection', () => {
    it('should forward image layout props without overwriting imageAttrs with undefined and preserve numeric 0 coordinates', () => {
      const { scope, item } = createCollageItem({
        image: 'https://example.com/photo.jpg',
        imageAttrs: {
          size: 'contain',
          alt: 'Gallery item'
        },
        coordinator: [10, 20, 30, 40],
        x: 0,
        y: 0
      })

      const imageBinds = item.i('image').binds.value

      expect(imageBinds.value).toBe('https://example.com/photo.jpg')
      expect(imageBinds.tagImg).toBe(true)
      expect(imageBinds.size).toBe('contain')
      expect(imageBinds.alt).toBe('Gallery item')
      expect(imageBinds.coordinator).toEqual([10, 20, 30, 40])
      expect(imageBinds.x).toBe(0)
      expect(imageBinds.y).toBe(0)
      expect(imageBinds.onLoad).toBe(item.i('dimensions').onLoad)

      scope.stop()
    })

    it('should support dependency injection overrides via constructors parameter', () => {
      const created: string[] = []

      class MockDimensions {
        readonly binds = { 'data-mock': 'dimensions' }
        readonly styles = { '--mock': '1' }
        readonly expose = { getHeight: () => 4, getWidth: () => 8 }
        readonly onLoad = vi.fn()
        constructor() {
          created.push('dimensions')
        }
      }

      class MockEvent {
        readonly binds = { href: '#mock' }
        readonly expose = { getValue: () => 'mock-value', getDetail: () => undefined }
        constructor() {
          created.push('event')
        }
      }

      class MockIcon {
        readonly renderIcon = () => []
        constructor() {
          created.push('icon')
        }
      }

      class MockImage {
        readonly render = () => []
        constructor() {
          created.push('image')
        }
      }

      class MockCollageBar {
        readonly render = () => []
        constructor() {
          created.push('collageBar')
        }
      }

      const { scope, item } = createCollageItem(
        {
          image: 'photo.jpg',
          label: 'Caption'
        },
        {
          components: new DesignComponents<CollageItemComponents, CollageItemProps>(),
          constructors: {
            collageBar: MockCollageBar as unknown as CollageItemConstructors['collageBar'],
            dimensions: MockDimensions as unknown as CollageItemConstructors['dimensions'],
            event: MockEvent as unknown as CollageItemConstructors['event'],
            icon: MockIcon as unknown as CollageItemConstructors['icon'],
            image: MockImage as unknown as CollageItemConstructors['image']
          }
        }
      )

      expect(created).toEqual(['dimensions'])
      expect(item.binds).toEqual({ 'data-mock': 'dimensions' })
      expect(item.styles).toEqual({ '--mock': '1' })

      item.i('event')
      item.callInstance('icon', instance => instance.renderIcon(), [])
      item.callInstance('image', instance => instance.render(), [])
      item.callInstance('collageBar', instance => instance.render(), [])

      expect(created).toEqual(['dimensions', 'event', 'icon', 'image', 'collageBar'])

      scope.stop()
    })
  })
})
