// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, type PropType } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { CollageItem } from '../CollageItem'
import { CollageItemDesign } from '../CollageItemDesign'
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

/** Stub sub-components for CollageItemDesign unit testing / Заглушки субкомпонентов для модульного тестирования CollageItemDesign */
const stubComponents: CollageItemComponents = {
  image: defineComponent({
    name: 'DesignStubImage',
    props: {
      value: { type: [String, Object] as PropType<string | Record<string, unknown>>, default: undefined },
      tagImg: { type: Boolean, default: false }
    },
    setup(props, { attrs }) {
      return () => h('img', {
        ...attrs,
        'src': typeof props.value === 'string' ? props.value : undefined,
        'data-stub': 'image',
        'data-tag-img': String(props.tagImg)
      })
    }
  }),
  icon: defineComponent({
    name: 'DesignStubIcon',
    props: {
      icon: { type: [String, Object] as PropType<string | Record<string, unknown>>, default: undefined }
    },
    setup(props, { attrs }) {
      return () => h('span', {
        ...attrs,
        'data-stub': 'icon',
        'data-icon': typeof props.icon === 'string' ? props.icon : 'custom'
      })
    }
  }),
  collageBar: defineComponent({
    name: 'DesignStubCollageBar',
    props: {
      label: { type: [String, Number], default: undefined },
      position: { type: String, default: undefined }
    },
    setup(props, { attrs, slots }) {
      return () => h(
        'figcaption',
        {
          ...attrs,
          'data-stub': 'collageBar',
          'data-position': props.position
        },
        [
          props.label !== undefined ? h('span', { 'data-bar-label': 'true' }, String(props.label)) : null,
          slots.body?.(),
          slots.trailing?.()
        ]
      )
    }
  })
}

/**
 * Mounts CollageItemDesign directly to inspect its classes, styles, expose, attrs merging, and render methods.
 *
 * Монтирует CollageItemDesign напрямую для проверки классов, стилей, expose, слияния атрибутов и методов рендера.
 * @param initialProps initial properties / начальные свойства
 * @param options extra attrs, slots, emits, and custom ItemConstructor / дополнительные атрибуты, слоты, события и пользовательский ItemConstructor
 * @returns mounted helpers / вспомогательные объекты
 */
async function mountDesign(
  initialProps: CollageItemProps = {},
  options: {
    attrs?: Record<string, unknown>
    slots?: CollageItemSlots
    emits?: ConstrEmit<CollageItemEmits>
    ItemConstructor?: typeof CollageItem
  } = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<CollageItemProps>({ ...initialProps })
  let designInstance!: CollageItemDesign<
    CollageItemComponents,
    CollageItemExpose,
    CollageItemClasses,
    CollageItemProps
  >
  let exposed!: CollageItemExpose & { elementHtml?: { value?: HTMLElement } }

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      designInstance = new CollageItemDesign<
        CollageItemComponents,
        CollageItemExpose,
        CollageItemClasses,
        CollageItemProps
      >(
        'd1.collageItem',
        props,
        {
          components: stubComponents,
          emits: options.emits
        },
        options.ItemConstructor
      )

      exposed = designInstance.expose()
      return designInstance.render()
    }
  })

  const Root = defineComponent({
    setup() {
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
    design: designInstance,
    exposed,
    root: () => container.firstElementChild as HTMLElement
  }
}

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('CollageItemDesign (unit)', () => {
  it('should render figure root with merged external attrs, class, style, ref, and data-collage-item', async () => {
    const { root, exposed } = await mountDesign(
      {
        value: 'photo-1',
        collageBarPosition: 'top'
      },
      {
        attrs: {
          'id': 'tile-1',
          'class': 'custom-tile',
          'style': 'opacity: 0.75;',
          'data-testid': 'collage-item-root'
        }
      }
    )

    const figure = root()
    expect(figure.tagName).toBe('FIGURE')
    expect(figure.id).toBe('tile-1')
    expect(figure.getAttribute('data-testid')).toBe('collage-item-root')
    expect(figure.getAttribute('data-collage-item')).toBe('true')
    expect(figure.getAttribute('data-value')).toBe('photo-1')
    expect(figure.classList.contains('custom-tile')).toBe(true)
    expect(figure.classList.contains('d1-collageItem--collageBarPosition--top')).toBe(true)
    expect(figure.style.opacity).toBe('0.75')
    expect(exposed.elementHtml?.value).toBe(figure)
  })

  it('should expose public renderBody method and apply static anchor class only when tag is a', async () => {
    const { root, props, design } = await mountDesign({
      image: 'https://example.com/photo.jpg',
      href: 'https://example.com/detail'
    })

    expect(typeof design.renderBody).toBe('function')

    const anchorBody = root().querySelector('.d1-collageItem__body') as HTMLAnchorElement
    expect(anchorBody.tagName).toBe('A')
    expect(anchorBody.classList.contains('d1-a--static')).toBe(true)
    expect(anchorBody.getAttribute('href')).toBe('https://example.com/detail')
    expect(anchorBody.querySelector('[data-stub="image"]')).not.toBeNull()
    expect(anchorBody.querySelector('[data-stub="icon"]')).not.toBeNull()

    props.tag = 'div'
    await nextTick()

    const divBody = root().querySelector('.d1-collageItem__body') as HTMLElement
    expect(divBody.tagName).toBe('DIV')
    expect(divBody.classList.contains('d1-a--static')).toBe(false)
  })

  it('should render CollageBar with forwarded barBody and barTrailing slots only when enabled', async () => {
    const { root, props } = await mountDesign({})
    expect(root().querySelector('[data-stub="collageBar"]')).toBeNull()

    props.label = 'Sunset'
    await nextTick()

    const bar = root().querySelector('[data-stub="collageBar"]')
    expect(bar).not.toBeNull()
    expect(bar?.querySelector('[data-bar-label]')?.textContent).toBe('Sunset')

    const withSlots = await mountDesign(
      {},
      {
        slots: {
          barBody: () => h('em', { 'data-slot': 'bar-body' }, 'Body Slot'),
          barTrailing: () => h('strong', { 'data-slot': 'bar-trailing' }, 'Trailing Slot')
        }
      }
    )

    expect(withSlots.root().querySelector('[data-slot="bar-body"]')?.textContent).toBe('Body Slot')
    expect(withSlots.root().querySelector('[data-slot="bar-trailing"]')?.textContent).toBe('Trailing Slot')
  })

  it('should accept custom ItemConstructor via dependency injection', async () => {
    const customSpy = vi.fn()

    class CustomCollageItem extends CollageItem {
      override get tag(): string {
        customSpy()
        return 'article'
      }
    }

    const { root } = await mountDesign(
      {},
      {
        ItemConstructor: CustomCollageItem
      }
    )

    expect(customSpy).toHaveBeenCalled()
    expect(root().querySelector('.d1-collageItem__body')?.tagName).toBe('ARTICLE')
  })
})
