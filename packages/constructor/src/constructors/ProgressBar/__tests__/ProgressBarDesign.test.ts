// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { ProgressBarDesign } from '../ProgressBarDesign'
import type { ProgressBarProps, ProgressBarPropsBasic } from '../props'
import type { ProgressBarClasses, ProgressBarComponents, ProgressBarExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

function mountProgressBarDesign(
  initialProps: ProgressBarProps = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const state = reactive<ProgressBarProps>({ ...initialProps })
  let exposed: (ProgressBarExpose & { elementHtml?: unknown }) | undefined

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-progressBar': true,
          'd1-progressBar--overlay': Boolean(state.overlay)
        }
      }))
      const styles = computed<ConstrStyles>(() => ({ '--pb-height': '8px' }))

      const design = new ProgressBarDesign<
        ProgressBarComponents,
        ProgressBarExpose,
        ProgressBarClasses,
        ProgressBarPropsBasic
      >('d1.progressBar', state, { classes, styles })

      exposed = design.expose() as ProgressBarExpose & { elementHtml?: unknown }
      return design.render()
    }
  })

  const container = document.createElement('div')
  const app = createApp({
    render: () => h(Host, extraAttrs)
  })
  app.mount(container)
  cleanups.push(() => app.unmount())

  return {
    container,
    state,
    getExposed: () => exposed!
  }
}

describe('ProgressBarDesign (isolated class)', () => {
  it('renders segments, labels, space remainder, ARIA attributes, elementHtml ref, and merged external attrs', async () => {
    const { container, state, getExposed } = mountProgressBarDesign(
      {
        showLabel: true,
        max: 100,
        value: [
          { index: 'a', value: 30, label: '30%', color: '#ff0000' },
          { index: 'b', value: 40, label: '40%', palette: 'blue' }
        ]
      },
      {
        'class': 'external-pb',
        'style': { width: '300px' },
        'data-testid': 'pb'
      }
    )

    const root = container.querySelector('[data-testid="pb"]') as HTMLElement
    expect(root.classList.contains('d1-progressBar')).toBe(true)
    expect(root.classList.contains('external-pb')).toBe(true)
    expect(root.style.getPropertyValue('--pb-height')).toBe('8px')
    expect(root.style.width).toBe('300px')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)

    const items = root.querySelectorAll('.d1-progressBar__item')
    expect(items).toHaveLength(3)
    expect(items[0]?.getAttribute('role')).toBe('progressbar')
    expect(items[0]?.getAttribute('aria-valuenow')).toBe('30')
    expect(items[0]?.querySelector('.d1-progressBar__item__label')?.textContent).toBe('30%')
    expect(items[1]?.classList.contains('d1-palette--blue')).toBe(true)
    expect(items[2]?.classList.contains('d1-progressBar__item--space')).toBe(true)
    expect(items[2]?.getAttribute('aria-hidden')).toBe('true')

    state.isSkeleton = true
    await nextTick()
    expect(root.querySelector('.d1-progressBar__item__label')?.classList.contains('d1-skeleton__text')).toBe(true)
    expect(root.querySelector('.d1-progressBar__item__progress')?.classList.contains('d1-skeleton__background')).toBe(true)
  })
})
