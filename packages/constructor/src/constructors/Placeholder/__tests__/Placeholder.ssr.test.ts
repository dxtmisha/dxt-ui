// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { PlaceholderDesign } from '../PlaceholderDesign'
import type { PlaceholderProps, PlaceholderPropsBasic } from '../props'
import type { PlaceholderClasses, PlaceholderComponents, PlaceholderExpose, PlaceholderSlots } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const SsrImage = defineComponent({
  name: 'SsrImage',
  props: { value: [String, Object] },
  setup(props) {
    return () => h('div', { 'class': 'd1-image', 'data-value': String(props.value ?? '') })
  }
})

const SsrActions = defineComponent({
  name: 'SsrActions',
  props: { list: Array },
  setup(props) {
    return () => h('div', { class: 'd1-actions' }, String(props.list?.length ?? 0))
  }
})

function createSsrPlaceholderApp(props: PlaceholderProps, slots?: PlaceholderSlots) {
  const SsrPlaceholder = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({ main: { 'd1-placeholder': true } }))
      const design = new PlaceholderDesign<
        PlaceholderComponents,
        PlaceholderExpose,
        PlaceholderClasses,
        PlaceholderPropsBasic
      >(
        'd1.placeholder',
        props,
        {
          classes,
          components: {
            image: SsrImage,
            actions: SsrActions
          }
        }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(SsrPlaceholder, null, slots as Record<string, () => unknown>)
  })
}

describe('Placeholder (SSR)', () => {
  it('renders image, label, description, context slot, actions, and ARIA links in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrPlaceholderApp(
      {
        image: 'info',
        label: 'SSR Empty State',
        labelId: 'ssr-ph-lbl',
        description: 'SSR description text',
        descriptionId: 'ssr-ph-desc',
        actionsList: [{ label: 'Retry' }]
      },
      {
        context: () => [h('p', 'SSR Context')]
      }
    ))

    expect(html).toContain('class="d1-placeholder"')
    expect(html).toContain('aria-labelledby="ssr-ph-lbl"')
    expect(html).toContain('aria-describedby="ssr-ph-desc"')
    expect(html).toContain('SSR Empty State')
    expect(html).toContain('SSR description text')
    expect(html).toContain('SSR Context')
    expect(html).toContain('d1-actions d1-placeholder__actions')
  })

  it('omits image wrapper and ARIA links when no content is provided in SSR', async () => {
    const html = await renderToString(createSsrPlaceholderApp({}))

    expect(html).toContain('class="d1-placeholder"')
    expect(html).not.toContain('d1-placeholder__image')
    expect(html).not.toContain('aria-labelledby')
    expect(html).not.toContain('aria-describedby')
  })
})
