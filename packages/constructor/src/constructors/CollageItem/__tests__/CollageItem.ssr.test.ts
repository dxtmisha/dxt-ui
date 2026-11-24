// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, provide, reactive, type PropType } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { COLLAGE_NAME_UPDATE } from '../basicTypes'
import { CollageItemDesign } from '../CollageItemDesign'
import type { CollageItemProps } from '../props'
import type {
  CollageItemClasses,
  CollageItemComponents,
  CollageItemExpose,
  CollageItemSlots
} from '../types'

/** Stub sub-components for SSR verification / Заглушки субкомпонентов для проверки SSR */
const stubComponents: CollageItemComponents = {
  image: defineComponent({
    name: 'StubSsrImage',
    props: {
      value: { type: [String, Object] as PropType<string | Record<string, unknown>>, default: undefined },
      tagImg: { type: Boolean, default: false },
      size: { type: String, default: undefined },
      x: { type: [String, Number], default: undefined },
      y: { type: [String, Number], default: undefined }
    },
    setup(props, { attrs }) {
      return () => h('img', {
        'class': attrs.class,
        'src': typeof props.value === 'string' ? props.value : undefined,
        'data-tag-img': String(props.tagImg),
        'data-size': props.size,
        'data-x': props.x !== undefined ? String(props.x) : undefined,
        'data-y': props.y !== undefined ? String(props.y) : undefined
      })
    }
  }),
  icon: defineComponent({
    name: 'StubSsrIcon',
    props: {
      icon: { type: [String, Object] as PropType<string | Record<string, unknown>>, default: undefined }
    },
    setup(props, { attrs }) {
      return () => h('span', {
        'class': attrs.class,
        'data-icon': typeof props.icon === 'string' ? props.icon : 'custom'
      })
    }
  }),
  collageBar: defineComponent({
    name: 'StubSsrCollageBar',
    props: {
      label: { type: [String, Number], default: undefined },
      description: { type: [String, Number], default: undefined },
      position: { type: String, default: undefined }
    },
    setup(props, { attrs, slots }) {
      return () => h(
        'figcaption',
        {
          'class': attrs.class,
          'data-position': props.position
        },
        [
          props.label !== undefined ? h('span', String(props.label)) : null,
          props.description !== undefined ? h('p', String(props.description)) : null,
          slots.body?.(),
          slots.trailing?.()
        ]
      )
    }
  })
}

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders CollageItemDesign in a server-side Node environment without browser globals.
 *
 * Рендерит CollageItemDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param withParentProvider whether to provide COLLAGE_NAME_UPDATE from parent / предоставлять ли COLLAGE_NAME_UPDATE от родителя
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderCollageItemSsr(
  properties: CollageItemProps = {},
  slots?: CollageItemSlots,
  withParentProvider = false
): Promise<string> {
  const Component = defineComponent({
    setup() {
      const props = reactive<CollageItemProps>({ ...properties })
      const design = new CollageItemDesign<
        CollageItemComponents,
        CollageItemExpose,
        CollageItemClasses,
        CollageItemProps
      >('d1.collageItem', props, {
        components: stubComponents
      })

      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      if (withParentProvider) {
        provide(COLLAGE_NAME_UPDATE, () => undefined)
      }

      return () => h(Component, null, slots ? (slots as Record<string, unknown>) : undefined)
    }
  })

  return renderToString(createSSRApp(Root))
}

describe('CollageItemDesign in Node SSR', () => {
  it('should render full CollageItem markup with image, icon, collageBar, and slots in SSR without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderCollageItemSsr(
      {
        image: 'https://example.com/ssr-photo.jpg',
        size: 'cover',
        x: 0,
        y: 0,
        iconCheck: 'check_circle',
        label: 'SSR Photo Title',
        description: 'SSR Photo Description',
        collageBarPosition: 'top',
        href: 'https://example.com/photo',
        value: 'ssr-tile-1'
      },
      {
        barBody: () => h('div', 'SSR Bar Body'),
        barTrailing: () => h('span', 'SSR Bar Trailing')
      },
      true
    )

    expect(html).toContain('<figure')
    expect(html).toContain('data-collage-item="true"')
    expect(html).toContain('data-value="ssr-tile-1"')
    expect(html).toContain('d1-collageItem--collageBarPosition--top')
    expect(html).toContain('d1-collageItem__body')
    expect(html).toContain('https://example.com/photo')
    expect(html).toContain('https://example.com/ssr-photo.jpg')
    expect(html).toContain('data-tag-img="true"')
    expect(html).toContain('data-x="0"')
    expect(html).toContain('data-y="0"')
    expect(html).toContain('data-icon="check_circle"')
    expect(html).toContain('<figcaption')
    expect(html).toContain('SSR Photo Title')
    expect(html).toContain('SSR Photo Description')
    expect(html).toContain('SSR Bar Body')
    expect(html).toContain('SSR Bar Trailing')
  })

  it('should render empty, custom tag, numeric zero, and multilingual configurations deterministically across SSR requests', async () => {
    const configs: Array<{ props: CollageItemProps, expected: string[], excluded?: string[] }> = [
      {
        props: { iconCheck: '' },
        expected: ['<figure', 'data-collage-item="true"', '<a', '</figure>'],
        excluded: ['<img', '<figcaption', 'data-icon']
      },
      {
        props: { tag: 'div', value: 0, label: 0 },
        expected: ['<div', 'data-value="0"', '>0<', '</div>']
      },
      {
        props: { image: 'https://example.com/vn.jpg', label: 'Đà Nẵng — Привет 🚀' },
        expected: ['https://example.com/vn.jpg', 'Đà Nẵng — Привет 🚀']
      }
    ]

    for (const item of configs) {
      ServerStorage.reset()
      const request: Record<string, unknown> = {}
      ServerStorage.init(() => request)

      const html = await renderCollageItemSsr(item.props)
      for (const fragment of item.expected) {
        expect(html).toContain(fragment)
      }
      for (const fragment of item.excluded ?? []) {
        expect(html).not.toContain(fragment)
      }
    }
  })
})
