// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import { type ConstrEmit, DesignComponents, DesignName } from '@dxtmisha/functional'

import { BreadcrumbItemInclude } from '../BreadcrumbItemInclude'
import type { BreadcrumbItemEmitsInclude, BreadcrumbItemPropsInclude } from '../basicTypes'
import type { SkeletonPropsInclude } from '../../Skeleton'

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
    href: String,
    readonly: Boolean,
    disabled: Boolean,
    back: Boolean,
    isSkeleton: Boolean,
    iconArrowRight: String
  },
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      props.readonly ? 'span' : 'a',
      {
        'class': attrs.class,
        'data-index': String(props.index),
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

describe('BreadcrumbItemInclude (isolated class)', () => {
  it('should detect list presence in static is() and instance is getter without mutating readonly inputs', () => {
    expect(BreadcrumbItemInclude.is()).toBe(false)
    expect(BreadcrumbItemInclude.is({})).toBe(false)
    expect(BreadcrumbItemInclude.is({ list: [] })).toBe(false)

    const frozenList = Object.freeze([
      Object.freeze({ label: 'Home', href: '/' }),
      Object.freeze({ label: 0, value: 0 })
    ] as const)

    expect(BreadcrumbItemInclude.is({ list: frozenList })).toBe(true)

    const naming = new DesignName('d1.breadcrumbs')
    const include = new BreadcrumbItemInclude({ list: frozenList }, naming)
    expect(include.is).toBe(true)
    expect(include.render()).toEqual([])
    expect(frozenList).toHaveLength(2)
  })

  it('should default last item to readonly, preserve explicit item readonly overrides, merge itemAttrs non-destructively, and forward clicks', async () => {
    const emits = vi.fn()
    const state = reactive<BreadcrumbItemPropsInclude & SkeletonPropsInclude>({
      isSkeleton: false,
      itemAttrs: {
        iconArrowRight: 'arrow_forward'
      },
      list: [
        { label: 'Home', value: 'home' },
        { label: 'Locked Section', value: 'locked', readonly: true },
        { label: 'Current Page', value: 'current', iconArrowRight: undefined }
      ]
    })

    const naming = new DesignName('d1.breadcrumbs')
    const components = new DesignComponents({ breadcrumbItem: MockBreadcrumbItem })

    const Host = defineComponent({
      setup() {
        const include = new BreadcrumbItemInclude(
          state,
          naming,
          components,
          emits as unknown as ConstrEmit<BreadcrumbItemEmitsInclude>
        )
        return () => h('div', include.render())
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const items = container.querySelectorAll('.d1-breadcrumbs__item')
    expect(items).toHaveLength(3)

    expect(items[0]?.tagName).toBe('A')
    expect(items[0]?.getAttribute('data-readonly')).toBe('false')
    expect(items[0]?.getAttribute('data-arrow')).toBe('arrow_forward')

    expect(items[1]?.tagName).toBe('SPAN')
    expect(items[1]?.getAttribute('data-readonly')).toBe('true')

    expect(items[2]?.tagName).toBe('SPAN')
    expect(items[2]?.getAttribute('data-readonly')).toBe('true')
    expect(items[2]?.getAttribute('data-arrow')).toBe('arrow_forward')

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

    state.isSkeleton = true
    state.list = [
      { label: 'Home', value: 'home' },
      { label: 'Interactive Tail', value: 'tail', readonly: false }
    ]
    await nextTick()

    const updatedItems = container.querySelectorAll('.d1-breadcrumbs__item')
    expect(updatedItems).toHaveLength(2)
    expect(updatedItems[1]?.tagName).toBe('A')
    expect(updatedItems[1]?.getAttribute('data-readonly')).toBe('false')
    expect(updatedItems[0]?.getAttribute('data-skeleton')).toBe('true')
  })
})
