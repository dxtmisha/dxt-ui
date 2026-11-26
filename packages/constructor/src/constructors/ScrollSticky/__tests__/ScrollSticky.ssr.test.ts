// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ScrollStickyDesign } from '../ScrollStickyDesign'
import { defaultsScrollSticky, type ScrollStickyProps, type ScrollStickyPropsBasic } from '../props'
import type { ScrollStickyClasses, ScrollStickyComponents, ScrollStickyExpose, ScrollStickySlots } from '../types'

function createSsrScrollStickyApp(props: ScrollStickyProps, slots?: ScrollStickySlots) {
  const SsrScrollSticky = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({ main: { 'd1-scrollSticky': true } }))
      const design = new ScrollStickyDesign<
        ScrollStickyComponents,
        ScrollStickyExpose,
        ScrollStickyClasses,
        ScrollStickyPropsBasic
      >('d1.scrollSticky', { ...defaultsScrollSticky, ...props }, { classes })
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(SsrScrollSticky, null, slots as Record<string, () => unknown>)
  })
}

describe('ScrollSticky (SSR)', () => {
  it('renders context and scroll containers cleanly in Node SSR without browser APIs', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrScrollStickyApp(
      { visible: true },
      {
        default: () => [h('div', { style: 'width: 1200px;' }, 'Wide SSR Content')]
      }
    ))

    expect(html).toContain('class="d1-scrollSticky"')
    expect(html).toContain('class="d1-scrollSticky__context"')
    expect(html).toContain('class="d1-scrollSticky__scroll"')
    expect(html).toContain('Wide SSR Content')
  })

  it('omits scroll element when visible=false in Node SSR', async () => {
    const html = await renderToString(createSsrScrollStickyApp(
      { visible: false },
      {
        default: () => [h('div', 'Hidden Scrollbar Content')]
      }
    ))

    expect(html).toContain('class="d1-scrollSticky__context"')
    expect(html).not.toContain('d1-scrollSticky__scroll')
  })
})
