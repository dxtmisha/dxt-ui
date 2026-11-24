// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { CollageBarDesign } from '../CollageBarDesign'
import type { CollageBarProps } from '../props'
import type {
  CollageBarClasses,
  CollageBarComponents,
  CollageBarExpose,
  CollageBarSlots
} from '../types'

/** Stub button component for SSR verification / Заглушка кнопки для проверки SSR */
const stubComponents: CollageBarComponents = {
  button: defineComponent({
    name: 'StubSsrButton',
    props: {
      label: { type: [String, Number], default: undefined },
      icon: { type: [String, Object], default: undefined },
      href: { type: String, default: undefined }
    },
    setup(props, { attrs }) {
      return () => h(
        props.href ? 'a' : 'button',
        {
          'class': attrs.class,
          'href': props.href,
          'data-icon': props.icon ? String(props.icon) : undefined
        },
        props.label !== undefined ? String(props.label) : undefined
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
 * Renders CollageBarDesign in a server-side Node environment without browser globals.
 *
 * Рендерит CollageBarDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderCollageBarSsr(
  properties: CollageBarProps = {},
  slots?: CollageBarSlots
): Promise<string> {
  const Component = defineComponent({
    setup() {
      const props = reactive<CollageBarProps>({ ...properties })
      const design = new CollageBarDesign<
        CollageBarComponents,
        CollageBarExpose,
        CollageBarClasses,
        CollageBarProps
      >('d1.collageBar', props, {
        components: stubComponents
      })

      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(Component, null, slots ? (slots as Record<string, unknown>) : undefined)
    }
  })

  return renderToString(createSSRApp(Root))
}

describe('CollageBarDesign in Node SSR', () => {
  it('should render full CollageBar markup with label, description, button, and slots in SSR without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderCollageBarSsr(
      {
        label: 'SSR Collage Title',
        description: 'SSR Collage Description',
        button: 'SSR Action',
        icon: 'open_in_new',
        href: 'https://example.com/ssr'
      },
      {
        body: () => h('p', 'SSR Body Slot'),
        trailing: () => h('span', 'SSR Trailing Slot')
      }
    )

    expect(html).toContain('<figcaption')
    expect(html).toContain('d1-collageBar__context')
    expect(html).toContain('SSR Collage Title')
    expect(html).toContain('SSR Collage Description')
    expect(html).toContain('SSR Body Slot')
    expect(html).toContain('SSR Action')
    expect(html).toContain('https://example.com/ssr')
    expect(html).toContain('SSR Trailing Slot')
  })

  it('should render empty, custom tag, numeric zero, and multilingual configurations deterministically across requests', async () => {
    const configs: Array<{ props: CollageBarProps, expected: string[] }> = [
      {
        props: {},
        expected: ['<figcaption', '</figcaption>']
      },
      {
        props: { tag: 'div', label: 0, description: 0, button: 0 },
        expected: ['<div', '>0<', '</div>']
      },
      {
        props: { label: 'Tiếng Việt — Привет 🚀', button: 'Xem' },
        expected: ['Tiếng Việt — Привет 🚀', 'Xem']
      }
    ]

    for (const item of configs) {
      ServerStorage.reset()
      const request: Record<string, unknown> = {}
      ServerStorage.init(() => request)

      const html = await renderCollageBarSsr(item.props)
      for (const fragment of item.expected) {
        expect(html).toContain(fragment)
      }
    }
  })
})
