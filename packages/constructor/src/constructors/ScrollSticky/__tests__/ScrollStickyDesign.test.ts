// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { ScrollStickyDesign } from '../ScrollStickyDesign'
import { defaultsScrollSticky, type ScrollStickyProps, type ScrollStickyPropsBasic } from '../props'
import type { ScrollStickyClasses, ScrollStickyComponents, ScrollStickyExpose, ScrollStickySlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

function mountScrollStickyDesign(
  initialProps: ScrollStickyProps = { ...defaultsScrollSticky },
  slots?: ScrollStickySlots,
  extraAttrs: Record<string, unknown> = {}
) {
  const state = reactive<ScrollStickyProps>({ ...defaultsScrollSticky, ...initialProps })
  let exposed: (ScrollStickyExpose & { elementHtml?: unknown }) | undefined

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({ main: { 'd1-scrollSticky': true } }))
      const styles = computed<ConstrStyles>(() => ({ '--ss-z': '64' }))

      const design = new ScrollStickyDesign<
        ScrollStickyComponents,
        ScrollStickyExpose,
        ScrollStickyClasses,
        ScrollStickyPropsBasic
      >('d1.scrollSticky', state, { classes, styles })

      exposed = design.expose() as ScrollStickyExpose & { elementHtml?: unknown }
      return design.render()
    }
  })

  const container = document.createElement('div')
  const app = createApp({
    render: () => h(Host, extraAttrs, slots as Record<string, () => unknown>)
  })
  app.mount(container)
  cleanups.push(() => app.unmount())

  return {
    container,
    state,
    getExposed: () => exposed!
  }
}

describe('ScrollStickyDesign (isolated class)', () => {
  it('renders context and scroll elements, binds elementHtml to context, and toggles scroll on visible', async () => {
    const { container, state, getExposed } = mountScrollStickyDesign(
      { visible: true },
      {
        default: ({ onResize }) => [
          h('button', { type: 'button', class: 'resize-btn', onClick: onResize }, 'Resize')
        ]
      },
      {
        'class': 'external-sticky',
        'style': { maxWidth: '500px' },
        'data-testid': 'ss'
      }
    )

    const root = container.querySelector('[data-testid="ss"]') as HTMLElement
    const contextEl = root.querySelector('.d1-scrollSticky__context') as HTMLElement
    const scrollEl = root.querySelector('.d1-scrollSticky__scroll') as HTMLElement

    expect(root.classList.contains('d1-scrollSticky')).toBe(true)
    expect(root.classList.contains('external-sticky')).toBe(true)
    expect(root.style.getPropertyValue('--ss-z')).toBe('64')
    expect(root.style.maxWidth).toBe('500px')
    expect(contextEl).not.toBeNull()
    expect(scrollEl).not.toBeNull()

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(contextEl)

    state.visible = false
    await nextTick()
    expect(root.querySelector('.d1-scrollSticky__scroll')).toBeNull()
  })

  it('supports custom #context and #scroll replacement slots with bound refs and classes', () => {
    const { container } = mountScrollStickyDesign(
      { visible: true },
      {
        context: ({ bindsContext }) => [
          h('section', { ...bindsContext, 'data-custom-ctx': 'yes' }, 'Custom Context')
        ],
        scroll: ({ bindsScroll }) => [
          h('aside', { ...bindsScroll, 'data-custom-scr': 'yes' }, 'Custom Scroll')
        ]
      }
    )

    expect(container.querySelector('section[data-custom-ctx="yes"]')?.classList.contains('d1-scrollSticky__context')).toBe(true)
    expect(container.querySelector('aside[data-custom-scr="yes"]')?.classList.contains('d1-scrollSticky__scroll')).toBe(true)
  })
})
