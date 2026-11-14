// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { ScrollbarDesign } from '../ScrollbarDesign'
import type { ScrollbarProps } from '../props'
import type { ScrollbarClasses } from '../types'

describe('Scrollbar SSR', () => {
  it('should render default ScrollbarDesign to string in SSR', async () => {
    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const props = reactive<ScrollbarProps>({})
    const styles = ref({ '--d1-scrollbar-size': '6px' })
    const classes = computed<ScrollbarClasses>(() => ({
      main: { 'd1-scrollbar': true }
    }))

    const InnerComponent = defineComponent({
      setup() {
        const design = new ScrollbarDesign(
          'd1.scrollbar',
          props,
          {
            classes,
            styles
          }
        )

        return design.render()
      }
    })

    const RootComponent = defineComponent({
      setup() {
        return () => h(
          InnerComponent,
          { 'data-testid': 'scrollbar-ssr' },
          {
            default: () => h('p', { class: 'ssr-paragraph' }, 'SSR Scrollable content')
          }
        )
      }
    })

    const app = createSSRApp(RootComponent)
    const html = await renderToString(app)

    expect(html).toContain('<div')
    expect(html).toContain('data-testid="scrollbar-ssr"')
    expect(html).toContain('d1-scrollbar')
    expect(html).toContain('--d1-scrollbar-size:6px')
    expect(html).toContain('SSR Scrollable content')
  })

  it('should render custom tag, divider, and visible props in SSR', async () => {
    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const props = reactive<ScrollbarProps>({
      tag: 'section',
      divider: true,
      visible: true
    })
    const classes = computed<ScrollbarClasses>(() => ({
      main: {
        'd1-scrollbar': true,
        'd1-scrollbar--divider': true,
        'd1-scrollbar--visible': true
      }
    }))

    const InnerComponent = defineComponent({
      setup() {
        const design = new ScrollbarDesign(
          'd1.scrollbar',
          props,
          {
            classes
          }
        )

        return design.render()
      }
    })

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(InnerComponent, {}, {
          default: () => h('span', 'Content')
        })
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('<section')
    expect(html).toContain('</section>')
    expect(html).toContain('d1-scrollbar--divider')
    expect(html).toContain('d1-scrollbar--visible')
    expect(html).toContain('<span>Content</span>')
  })
})
