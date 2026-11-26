// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ScrollStickyDesign } from '../ScrollStickyDesign'
import { defaultsScrollSticky, type ScrollStickyProps, type ScrollStickyPropsBasic } from '../props'
import type { ScrollStickyClasses, ScrollStickyComponents, ScrollStickyExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('ScrollSticky (integrated component)', () => {
  it('synchronizes scrollWidth, scrollLeft, reactive visible toggles, and unmounts cleanly', async () => {
    const state = reactive<ScrollStickyProps>({ ...defaultsScrollSticky })
    const contentWidth = reactive({ value: 1200 })

    const container = document.createElement('div')

    const Host = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-scrollSticky': true } }))
        const design = new ScrollStickyDesign<
          ScrollStickyComponents,
          ScrollStickyExpose,
          ScrollStickyClasses,
          ScrollStickyPropsBasic
        >('d1.scrollSticky', state, { classes })

        const renderDesign = design.render()
        return () => renderDesign()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Host, null, {
          default: ({ onResize }: { onResize: () => void }) => [
            h('div', {
              class: 'wide-child',
              style: { width: `${contentWidth.value}px` },
              onClick: onResize
            }, 'Wide Content')
          ]
        })
      }
    })

    const realApp = createApp(Wrapper)
    realApp.mount(container)
    cleanups.push(() => realApp.unmount())
    await nextTick()

    const contextEl = container.querySelector('.d1-scrollSticky__context') as HTMLDivElement
    const scrollEl = container.querySelector('.d1-scrollSticky__scroll') as HTMLDivElement
    Object.defineProperty(contextEl, 'scrollWidth', { value: 1200, configurable: true })

    ;(container.querySelector('.wide-child') as HTMLElement).click()
    expect(scrollEl.style.getPropertyValue('--d1-scrollSticky-sys-width')).toBe('1200px')

    contextEl.scrollLeft = 90
    contextEl.dispatchEvent(new Event('scroll'))
    scrollEl.scrollLeft = 140
    scrollEl.dispatchEvent(new Event('scroll'))
    await nextTick()

    state.visible = false
    await nextTick()
    expect(container.querySelector('.d1-scrollSticky__scroll')).toBeNull()
  })
})
