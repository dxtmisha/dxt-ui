// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { type Component, computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit, ConstrStyles } from '@dxtmisha/functional'

import { CarouselPagination } from '../CarouselPagination'
import { CarouselPaginationDesign } from '../CarouselPaginationDesign'
import type { CarouselPaginationProps } from '../props'
import type {
  CarouselPaginationClasses,
  CarouselPaginationComponents,
  CarouselPaginationEmits,
  CarouselPaginationExpose,
  CarouselPaginationSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('CarouselPaginationDesign (isolated class)', () => {
  const mountDesign = (
    initialProps: Partial<CarouselPaginationProps> = {},
    options: {
      attrs?: Record<string, unknown>
      slots?: CarouselPaginationSlots
      ItemConstructor?: typeof CarouselPagination
    } = {}
  ) => {
    const emits = vi.fn()
    const state = reactive<CarouselPaginationProps>({
      count: 4,
      selected: 1,
      hideIfOne: true,
      control: true,
      ...initialProps
    })

    let exposed!: CarouselPaginationExpose & { elementHtml?: { value?: HTMLElement } }

    const Host = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-carouselPagination': true }
        }))
        const styles = computed<ConstrStyles>(() => ({
          '--custom-gap': '4px'
        }))
        const design = new CarouselPaginationDesign<
          CarouselPaginationComponents,
          CarouselPaginationExpose,
          CarouselPaginationClasses,
          CarouselPaginationProps
        >(
          'd1.carouselPagination',
          state,
          {
            emits: emits as unknown as ConstrEmit<CarouselPaginationEmits>,
            classes,
            styles
          },
          options.ItemConstructor
        )
        exposed = design.expose() as CarouselPaginationExpose & { elementHtml?: { value?: HTMLElement } }
        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp({
      render: () => h(Host as Component, options.attrs, options.slots ? { ...options.slots } : undefined)
    })
    app.mount(container)
    cleanups.push(() => app.unmount())

    return { container, state, emits, exposed }
  }

  it('should merge external attrs, class, style, and onKeydown with internal bindings via mergeProps', () => {
    const externalKeydown = vi.fn()
    const { container, exposed } = mountDesign(
      { count: 4, selected: 1, tag: 'nav' },
      {
        attrs: {
          'class': 'external-pagination',
          'style': { opacity: '0.8' },
          'data-testid': 'carousel-pagination',
          'onKeydown': externalKeydown
        }
      }
    )

    const root = container.querySelector('[data-testid="carousel-pagination"]') as HTMLElement
    expect(root.tagName).toBe('NAV')
    expect(root.classList.contains('d1-carouselPagination')).toBe(true)
    expect(root.classList.contains('external-pagination')).toBe(true)
    expect(root.style.getPropertyValue('--custom-gap')).toBe('4px')
    expect(root.style.getPropertyValue('--d1-carouselPagination-sys-percent')).toBe('25%')
    expect(root.style.opacity).toBe('0.8')
    expect(root.getAttribute('role')).toBe('tablist')
    expect(exposed.elementHtml?.value).toBe(root)

    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    expect(externalKeydown).toHaveBeenCalledTimes(1)
    expect(exposed.getSelected()).toBe(2)
  })

  it.each(['bullets', 'dots', 'lines'] as const)('should render interactive buttons for type="%s"', (type) => {
    const { container } = mountDesign({ count: 3, selected: 2, type })
    const buttons = container.querySelectorAll('button.d1-carouselPagination__item')

    expect(buttons).toHaveLength(3)
    expect(buttons[0]?.classList.contains('d1-carouselPagination__item--selected')).toBe(false)
    expect(buttons[1]?.classList.contains('d1-carouselPagination__item--selected')).toBe(true)
    expect(buttons[1]?.getAttribute('aria-selected')).toBe('true')
    expect(buttons[1]?.getAttribute('tabindex')).toBe('0')
  })

  it('should render fraction and progressbar modes including zero-count ARIA safety', async () => {
    const { container, state } = mountDesign({
      count: 4,
      selected: 2,
      type: 'fraction',
      template: '[active] of [total]'
    })

    const fraction = container.querySelector('.d1-carouselPagination__fraction')
    expect(fraction?.textContent).toBe('2 of 4')
    expect(fraction?.getAttribute('aria-live')).toBe('polite')

    state.type = 'progressbar'
    await nextTick()

    const progress = container.querySelector('.d1-carouselPagination__progress')
    expect(progress?.getAttribute('role')).toBe('progressbar')
    expect(progress?.getAttribute('aria-valuenow')).toBe('2')
    expect(progress?.getAttribute('aria-valuemin')).toBe('1')
    expect(progress?.getAttribute('aria-valuemax')).toBe('4')
    expect(progress?.querySelector('.d1-carouselPagination__progressBar')).not.toBeNull()

    state.hideIfOne = false
    state.count = 0
    await nextTick()

    const zeroProgress = container.querySelector('.d1-carouselPagination__progress')
    expect(zeroProgress?.getAttribute('aria-valuenow')).toBe('0')
    expect(zeroProgress?.getAttribute('aria-valuemin')).toBe('0')
    expect(zeroProgress?.getAttribute('aria-valuemax')).toBe('0')
  })

  it('should render nothing when hideIfOne is true and count <= 1', () => {
    const { container } = mountDesign({ count: 1, hideIfOne: true })
    expect(container.querySelector('.d1-carouselPagination')).toBeNull()
  })

  it('should render custom item, fraction, and progress scoped slots', async () => {
    const { container, state } = mountDesign(
      { count: 3, selected: 2, type: 'bullets' },
      {
        slots: {
          item: ({ binds, index }) => [
            h('button', { ...binds, 'data-custom-item': index }, `Item ${index}`)
          ],
          fraction: ({ binds, active, total, text }) => [
            h('span', { ...binds, 'data-custom-fraction': `${active}/${total}` }, text)
          ],
          progress: ({ binds, percent }) => [
            h('div', { ...binds, 'data-custom-progress': Math.round(percent) })
          ]
        }
      }
    )

    expect(container.querySelectorAll('[data-custom-item]')).toHaveLength(3)
    expect(container.querySelector('[data-custom-item="2"]')?.textContent).toBe('Item 2')

    state.type = 'fraction'
    await nextTick()
    expect(container.querySelector('[data-custom-fraction="2/3"]')?.textContent).toBe('2 / 3')

    state.type = 'progressbar'
    await nextTick()
    expect(container.querySelector('[data-custom-progress="67"]')).not.toBeNull()
  })

  it('should support custom ItemConstructor dependency injection and expose methods', () => {
    class CustomPagination extends CarouselPagination {
      override get tag(): string {
        return 'section'
      }
    }

    const { container, exposed } = mountDesign(
      { count: 4, selected: 1 },
      { ItemConstructor: CustomPagination }
    )

    expect(container.querySelector('section.d1-carouselPagination')).not.toBeNull()
    expect(exposed.getCount()).toBe(4)
    expect(exposed.getSelected()).toBe(1)

    exposed.next()
    expect(exposed.getSelected()).toBe(2)

    exposed.set(4)
    expect(exposed.getSelected()).toBe(4)

    exposed.previous()
    expect(exposed.getSelected()).toBe(3)
  })
})
