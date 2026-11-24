// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, provide, reactive, type PropType } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { COLLAGE_NAME_UPDATE } from '../basicTypes'
import { CollageItemDesign } from '../CollageItemDesign'
import type { ImageEventData, ImageItem } from '../../Image'
import type { CollageItemProps } from '../props'
import type {
  CollageItemClasses,
  CollageItemComponents,
  CollageItemEmits,
  CollageItemExpose,
  CollageItemSlots
} from '../types'

/** Cleanup callbacks for mounted test apps / Обработчики очистки смонтированных тестовых приложений */
const mountedCleanups: Array<() => void> = []

/** Last captured image onLoad callback from stub image / Последний захваченный коллбэк onLoad заглушки изображения */
let capturedImageOnLoad: ((event: ImageEventData) => void) | undefined

/** Stub sub-components mirroring D1Image, D1Icon, and D1CollageBar / Заглушки субкомпонентов, имитирующие D1Image, D1Icon и D1CollageBar */
const stubComponents: CollageItemComponents = {
  image: defineComponent({
    name: 'StubImage',
    props: {
      value: { type: [String, Object] as PropType<string | Record<string, unknown>>, default: undefined },
      tagImg: { type: Boolean, default: false },
      size: { type: String, default: undefined },
      coordinator: { type: Array as PropType<readonly number[]>, default: undefined },
      x: { type: [String, Number], default: undefined },
      y: { type: [String, Number], default: undefined },
      alt: { type: String, default: undefined },
      onLoad: { type: Function as PropType<(event: ImageEventData) => void>, default: undefined }
    },
    setup(props, { attrs }) {
      return () => {
        capturedImageOnLoad = props.onLoad

        return h('img', {
          ...attrs,
          'src': typeof props.value === 'string' ? props.value : undefined,
          'alt': props.alt,
          'data-stub': 'image',
          'data-tag-img': String(props.tagImg),
          'data-size': props.size,
          'data-coordinator': props.coordinator ? props.coordinator.join(',') : undefined,
          'data-x': props.x !== undefined ? String(props.x) : undefined,
          'data-y': props.y !== undefined ? String(props.y) : undefined
        })
      }
    }
  }),
  icon: defineComponent({
    name: 'StubIcon',
    props: {
      icon: { type: [String, Object] as PropType<string | Record<string, unknown>>, default: undefined }
    },
    setup(props, { attrs }) {
      return () => h('span', {
        ...attrs,
        'data-stub': 'icon',
        'data-icon': typeof props.icon === 'string' ? props.icon : String((props.icon as Record<string, unknown>)?.value ?? '')
      })
    }
  }),
  collageBar: defineComponent({
    name: 'StubCollageBar',
    props: {
      label: { type: [String, Number], default: undefined },
      description: { type: [String, Number], default: undefined },
      position: { type: String, default: undefined },
      selected: { type: Boolean, default: undefined },
      href: { type: String, default: undefined },
      value: { type: [String, Number, Object] as PropType<unknown>, default: undefined }
    },
    setup(props, { attrs, slots }) {
      return () => h(
        'figcaption',
        {
          ...attrs,
          'data-stub': 'collageBar',
          'data-position': props.position,
          'data-selected': props.selected !== undefined ? String(props.selected) : undefined,
          'data-href': props.href
        },
        [
          props.label !== undefined ? h('div', { class: 'stub-bar__label' }, String(props.label)) : null,
          props.description !== undefined ? h('div', { class: 'stub-bar__description' }, String(props.description)) : null,
          slots.body?.(),
          slots.trailing?.()
        ]
      )
    }
  })
}

/**
 * Mounts a full CollageItem component tree into jsdom for integration testing.
 *
 * Монтирует полное дерево компонента CollageItem в jsdom для интеграционного тестирования.
 * @param initialProps initial CollageItem properties / начальные свойства CollageItem
 * @param options slots, emits, attrs, and optional parent Collage update callback / слоты, события, атрибуты и необязательный коллбэк обновления родительского Collage
 * @returns mounted helpers and DOM root accessor / вспомогательные объекты и доступ к корневому DOM-элементу
 */
async function mountCollageItem(
  initialProps: CollageItemProps = {},
  options: {
    slots?: CollageItemSlots
    emits?: ConstrEmit<CollageItemEmits>
    attrs?: Record<string, unknown>
    parentUpdate?: () => void
  } = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<CollageItemProps>({ ...initialProps })
  let exposed!: CollageItemExpose & { elementHtml?: { value?: HTMLElement } }

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const design = new CollageItemDesign<
        CollageItemComponents,
        CollageItemExpose,
        CollageItemClasses,
        CollageItemProps
      >('d1.collageItem', props, {
        components: stubComponents,
        emits: options.emits
      })

      exposed = design.expose()
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      if (options.parentUpdate) {
        provide(COLLAGE_NAME_UPDATE, options.parentUpdate)
      }

      return () => h(
        Host,
        options.attrs ?? null,
        options.slots ? (options.slots as Record<string, unknown>) : undefined
      )
    }
  })

  const app = createApp(Root)
  app.mount(container)
  mountedCleanups.push(() => {
    app.unmount()
    container.remove()
  })

  await nextTick()

  return {
    container,
    props,
    exposed,
    root: () => container.firstElementChild as HTMLElement
  }
}

afterEach(() => {
  capturedImageOnLoad = undefined
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('CollageItem (integration)', () => {
  it('should render complete DOM hierarchy with image, check icon, and collage bar', async () => {
    const { container, root } = await mountCollageItem({
      image: 'https://example.com/halong.jpg',
      size: 'cover',
      coordinator: [10, 20, 30, 40],
      x: 0,
      y: 0,
      imageAttrs: { alt: 'Hạ Long Bay' },
      iconCheck: 'verified',
      label: 'Vịnh Hạ Long',
      description: 'Утренний туман ⛵',
      collageBarPosition: 'top',
      selected: true,
      value: 'photo-halong'
    })

    const figure = root()
    expect(figure.tagName).toBe('FIGURE')
    expect(figure.getAttribute('data-collage-item')).toBe('true')
    expect(figure.getAttribute('data-value')).toBe('photo-halong')
    expect(figure.classList.contains('d1-collageItem--collageBarPosition--top')).toBe(true)

    const body = container.querySelector('.d1-collageItem__body') as HTMLElement
    expect(body.tagName).toBe('A')
    expect(body.classList.contains('d1-a--static')).toBe(true)

    const image = container.querySelector('[data-stub="image"]') as HTMLElement
    expect(image).not.toBeNull()
    expect(image.classList.contains('d1-collageItem__image')).toBe(true)
    expect(image.getAttribute('src')).toBe('https://example.com/halong.jpg')
    expect(image.getAttribute('alt')).toBe('Hạ Long Bay')
    expect(image.getAttribute('data-tag-img')).toBe('true')
    expect(image.getAttribute('data-size')).toBe('cover')
    expect(image.getAttribute('data-coordinator')).toBe('10,20,30,40')
    expect(image.getAttribute('data-x')).toBe('0')
    expect(image.getAttribute('data-y')).toBe('0')

    const icon = container.querySelector('[data-stub="icon"]') as HTMLElement
    expect(icon).not.toBeNull()
    expect(icon.classList.contains('d1-collageItem__icon')).toBe(true)
    expect(icon.getAttribute('data-icon')).toBe('verified')

    const bar = container.querySelector('[data-stub="collageBar"]') as HTMLElement
    expect(bar).not.toBeNull()
    expect(bar.classList.contains('d1-collageItem__collageBar')).toBe(true)
    expect(bar.getAttribute('data-position')).toBe('top')
    expect(bar.getAttribute('data-selected')).toBe('true')
    expect(bar.querySelector('.stub-bar__label')?.textContent).toBe('Vịnh Hạ Long')
    expect(bar.querySelector('.stub-bar__description')?.textContent).toBe('Утренний туман ⛵')
  })

  it('should update root CSS variables, data dimensions, expose, parent Collage update, and emit load on image load', async () => {
    const emitSpy = vi.fn()
    const parentUpdate = vi.fn()

    const { root, exposed } = await mountCollageItem(
      {
        image: 'https://example.com/mountain.jpg',
        value: 'mountain-1'
      },
      {
        emits: emitSpy as unknown as ConstrEmit<CollageItemEmits>,
        parentUpdate
      }
    )

    expect(capturedImageOnLoad).toBeTypeOf('function')
    expect(exposed.getHeight?.()).toBeUndefined()
    expect(exposed.getWidth?.()).toBeUndefined()

    const payload: ImageEventData = {
      type: undefined,
      image: {
        width: 800,
        height: 600,
        image: {} as HTMLImageElement,
        src: 'https://example.com/mountain.jpg'
      } as ImageItem
    }

    capturedImageOnLoad?.(payload)
    await nextTick()

    const figure = root()
    expect(exposed.getHeight?.()).toBe(7)
    expect(exposed.getWidth?.()).toBe(13)
    expect(figure.getAttribute('data-height')).toBe('7')
    expect(figure.getAttribute('data-width')).toBe('13')
    expect(figure.style.getPropertyValue('--d1-collageItem-sys-height')).toBe('7')
    expect(figure.style.getPropertyValue('--d1-collageItem-sys-width')).toBe('13')
    expect(parentUpdate).toHaveBeenCalledTimes(1)
    expect(emitSpy).toHaveBeenCalledWith('load', payload)
  })

  it('should emit click and clickLite on body click and Enter keydown with numeric 0 value', async () => {
    const emitSpy = vi.fn()

    const { container, exposed } = await mountCollageItem(
      {
        image: 'https://example.com/item.jpg',
        value: 0,
        detail: { source: 'gallery' }
      },
      {
        emits: emitSpy as unknown as ConstrEmit<CollageItemEmits>
      }
    )

    expect(exposed.getValue?.()).toBe(0)
    expect(exposed.getDetail?.()).toEqual({ source: 'gallery' })

    const body = container.querySelector('.d1-collageItem__body') as HTMLElement
    body.click()

    expect(emitSpy).toHaveBeenCalledWith('click', expect.any(MouseEvent), {
      type: 'click',
      value: 0,
      detail: { source: 'gallery' }
    })
    expect(emitSpy).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 0,
      detail: { source: 'gallery' }
    })

    emitSpy.mockClear()
    body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(emitSpy).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 0,
      detail: { source: 'gallery' }
    })
  })

  it('should project barBody and barTrailing slots and preserve external attrs via mergeProps', async () => {
    const { root } = await mountCollageItem(
      {
        value: 'slotted'
      },
      {
        attrs: {
          class: 'external-grid-tile',
          style: 'z-index: 3;'
        },
        slots: {
          barBody: () => h('span', { 'data-testid': 'slot-bar-body' }, 'Custom Caption'),
          barTrailing: () => h('button', { 'data-testid': 'slot-bar-trailing' }, 'More')
        }
      }
    )

    expect(root().classList.contains('external-grid-tile')).toBe(true)
    expect(root().style.zIndex).toBe('3')
    expect(root().querySelector('[data-testid="slot-bar-body"]')?.textContent).toBe('Custom Caption')
    expect(root().querySelector('[data-testid="slot-bar-trailing"]')?.textContent).toBe('More')
  })

  it('should reactively toggle optional image, icon, collageBar, tag, and bar position without errors', async () => {
    const { container, props, root } = await mountCollageItem({
      iconCheck: ''
    })

    expect(container.querySelector('[data-stub="image"]')).toBeNull()
    expect(container.querySelector('[data-stub="icon"]')).toBeNull()
    expect(container.querySelector('[data-stub="collageBar"]')).toBeNull()

    props.image = 'https://example.com/live.jpg'
    props.iconCheck = 'check'
    props.label = 0
    props.collageBarPosition = 'top'
    props.tag = 'div'
    await nextTick()

    expect(container.querySelector('.d1-collageItem__body')?.tagName).toBe('DIV')
    expect(container.querySelector('[data-stub="image"]')?.getAttribute('src')).toBe('https://example.com/live.jpg')
    expect(container.querySelector('[data-stub="icon"]')?.getAttribute('data-icon')).toBe('check')
    expect(container.querySelector('.stub-bar__label')?.textContent).toBe('0')
    expect(root().classList.contains('d1-collageItem--collageBarPosition--top')).toBe(true)

    props.image = undefined
    props.iconCheck = ''
    props.label = ''
    props.collageBarPosition = undefined
    await nextTick()

    expect(container.querySelector('[data-stub="image"]')).toBeNull()
    expect(container.querySelector('[data-stub="icon"]')).toBeNull()
    expect(container.querySelector('[data-stub="collageBar"]')).toBeNull()
    expect(root().classList.contains('d1-collageItem--collageBarPosition--top')).toBe(false)
  })
})
