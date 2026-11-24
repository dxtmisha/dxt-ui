// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, inject, reactive, type VNode } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { COLLAGE_NAME_UPDATE, type CollageUpdate } from '../basicTypes'
import { CollageDesign } from '../CollageDesign'
import type { CollageProps } from '../props'
import type {
  CollageClasses,
  CollageComponents,
  CollageExpose,
  CollageSlots
} from '../types'

/** Stub CollageItem component for Node SSR rendering / Заглушка компонента CollageItem для серверного рендеринга в Node */
const stubSsrCollageItem = defineComponent({
  name: 'StubSsrCollageItem',
  props: {
    value: { type: [String, Number], default: undefined },
    label: { type: String, default: undefined },
    selected: { type: Boolean, default: false },
    tabindex: { type: Number, default: undefined }
  },
  setup(props, { attrs }) {
    const injectedUpdate = inject<CollageUpdate | undefined>(COLLAGE_NAME_UPDATE, undefined)

    return () => h(
      'figure',
      {
        'class': attrs.class,
        'data-collage-item': 'true',
        'data-value': props.value !== undefined ? String(props.value) : undefined,
        'data-selected': String(props.selected),
        'data-has-update': String(typeof injectedUpdate === 'function'),
        'tabindex': props.tabindex
      },
      props.label ?? String(props.value ?? '')
    )
  }
})

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders CollageDesign in a Node SSR environment without browser DOM globals.
 *
 * Рендерит CollageDesign в серверном окружении Node без глобальных DOM-объектов браузера.
 */
async function renderCollageSsr(
  properties: CollageProps = {},
  slots?: CollageSlots
): Promise<string> {
  const Component = defineComponent({
    name: 'TestCollageSsr',
    setup() {
      const props = reactive<CollageProps>({ ...properties })
      const design = new CollageDesign<
        CollageComponents,
        CollageExpose,
        CollageClasses,
        CollageProps
      >(
        'd1.collage',
        props,
        {
          components: {
            collageItem: stubSsrCollageItem
          }
        }
      )

      const render = design.render()

      return () => render() as VNode
    }
  })

  const Wrapper = defineComponent({
    name: 'TestCollageSsrWrapper',
    setup() {
      return () => h(Component, {}, slots ? { ...slots } as Record<string, unknown> : undefined)
    }
  })

  const app = createSSRApp(Wrapper)

  return await renderToString(app)
}

describe('Collage (SSR)', () => {
  it('should execute in a pure Node runtime without window or document', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
  })

  it('should render basic collage structure and default slot cleanly on the server', async () => {
    const html = await renderCollageSsr(
      {
        variant: 'standard',
        columns: '4',
        cellSize: 180
      },
      {
        default: () => [h('div', { class: 'ssr-slot-item' }, 'SSR Slot')]
      }
    )

    expect(html).toContain('class="d1-collage__body"')
    expect(html).toContain('--d1-collage-cell-size:180px')
    expect(html).toContain('class="ssr-slot-item"')
    expect(html).toContain('SSR Slot')
  })

  it('should render images list with selection states, control focus attributes, and provide update callback in SSR', async () => {
    const html = await renderCollageSsr({
      variant: 'quilted',
      control: true,
      selected: ['photo-a'],
      images: [
        { value: 'photo-a', label: 'Alpha' },
        { value: 'photo-b', label: 'Beta' }
      ]
    })

    expect(html).toContain('tabindex="0"')
    expect(html).toContain('tabindex="-1"')
    expect(html).toContain('data-value="photo-a"')
    expect(html).toContain('data-selected="true"')
    expect(html).toContain('data-value="photo-b"')
    expect(html).toContain('data-selected="false"')
    expect(html).toContain('data-has-update="true"')
    expect(html).toContain('Alpha')
    expect(html).toContain('Beta')
  })

  it.each([
    'standard',
    'quilted',
    'woven',
    'masonryHorizontal',
    'masonryVertical'
  ] as const)('should render variant=%s without browser API leaks or timers on the server', async (variant) => {
    const html = await renderCollageSsr({
      variant,
      cellSize: '12rem',
      images: [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' }
      ]
    })

    expect(html).toContain('class="d1-collage__body"')
    expect(html).toContain('--d1-collage-cell-size:12rem')
    expect(html).toContain('data-value="1"')
    expect(html).toContain('data-value="2"')
  })

  it('should produce deterministic identical HTML across repeated server renders', async () => {
    const props: CollageProps = {
      variant: 'woven',
      control: true,
      cellSize: 200,
      modelSelected: ['img-2'],
      images: [
        { value: 'img-1', label: 'First' },
        { value: 'img-2', label: 'Second' }
      ]
    }

    const firstRender = await renderCollageSsr(props)
    const secondRender = await renderCollageSsr(props)

    expect(firstRender).toBe(secondRender)
  })
})
