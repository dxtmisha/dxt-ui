// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit, ConstrStyles } from '@dxtmisha/functional'

import { BreadcrumbsDesign } from '../BreadcrumbsDesign'
import type { BreadcrumbsProps, BreadcrumbsPropsBasic } from '../props'
import type {
  BreadcrumbsClasses,
  BreadcrumbsComponents,
  BreadcrumbsEmits,
  BreadcrumbsExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockBreadcrumbItem = defineComponent({
  name: 'MockBreadcrumbItem',
  props: {
    index: Number,
    label: [String, Number],
    value: [String, Number],
    readonly: Boolean,
    isSkeleton: Boolean,
    iconArrowRight: String
  },
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      props.readonly ? 'span' : 'a',
      {
        'class': ['mock-crumb', attrs.class],
        'data-readonly': String(Boolean(props.readonly)),
        'data-skeleton': String(Boolean(props.isSkeleton)),
        'data-arrow': props.iconArrowRight ?? '',
        'onClick': (event: MouseEvent) => emit('click', event, {
          type: 'click',
          value: props.value ?? props.index,
          detail: undefined
        })
      },
      String(props.label ?? '')
    )
  }
})

describe('BreadcrumbsDesign (isolated class)', () => {
  it('should render semantic nav with aria-label, elementHtml ref, merged attrs, itemAttrs, and forwarded click events', async () => {
    const emits = vi.fn()
    const state = reactive<BreadcrumbsProps>({
      itemAttrs: {
        iconArrowRight: 'east'
      },
      list: [
        { label: 'Home', value: 'home' },
        { label: 'Section', value: 'section', readonly: true },
        { label: 0, value: 0 }
      ]
    })

    let exposed!: BreadcrumbsExpose & { elementHtml?: unknown }

    const Host = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-breadcrumbs': true }
        }))
        const styles = computed<ConstrStyles>(() => ({
          '--trail-gap': '8px'
        }))
        const design = new BreadcrumbsDesign<
          BreadcrumbsComponents,
          BreadcrumbsExpose,
          BreadcrumbsClasses,
          BreadcrumbsPropsBasic
        >(
          'd1.breadcrumbs',
          state,
          {
            emits: emits as unknown as ConstrEmit<BreadcrumbsEmits>,
            classes,
            styles,
            components: {
              breadcrumbItem: MockBreadcrumbItem
            }
          }
        )
        exposed = design.expose() as BreadcrumbsExpose & { elementHtml?: unknown }
        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp({
      render: () => h(Host, {
        'class': 'external-breadcrumbs',
        'style': { opacity: '0.95' },
        'data-testid': 'breadcrumbs-nav'
      })
    })
    app.mount(container)
    cleanups.push(() => app.unmount())

    const nav = container.querySelector('[data-testid="breadcrumbs-nav"]') as HTMLElement
    expect(nav.tagName).toBe('NAV')
    expect(nav.getAttribute('aria-label')).toBe('Breadcrumb')
    expect(nav.classList.contains('d1-breadcrumbs')).toBe(true)
    expect(nav.classList.contains('external-breadcrumbs')).toBe(true)
    expect(nav.style.getPropertyValue('--trail-gap')).toBe('8px')
    expect(nav.style.opacity).toBe('0.95')

    const elementRef = exposed.elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(nav)

    const items = nav.querySelectorAll('.d1-breadcrumbs__item')
    expect(items).toHaveLength(3)
    expect(items[0]?.getAttribute('data-readonly')).toBe('false')
    expect(items[0]?.getAttribute('data-arrow')).toBe('east')
    expect(items[1]?.getAttribute('data-readonly')).toBe('true')
    expect(items[2]?.getAttribute('data-readonly')).toBe('true')
    expect(items[2]?.textContent).toBe('0')

    ;(items[0] as HTMLElement).click()
    expect(emits).toHaveBeenCalledWith('click', expect.any(MouseEvent), {
      type: 'click',
      value: 'home',
      detail: undefined
    })
    expect(emits).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 'home',
      detail: undefined
    })

    state.textBreadcrumb = 'Custom Nav Label'
    state.isSkeleton = true
    await nextTick()

    expect(nav.getAttribute('aria-label')).toBe('Custom Nav Label')
    expect(items[0]?.getAttribute('data-skeleton')).toBe('true')
  })
})
