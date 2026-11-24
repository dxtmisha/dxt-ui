// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { BreadcrumbItemDesign } from '../BreadcrumbItemDesign'
import { defaultsBreadcrumbItem, type BreadcrumbItemProps, type BreadcrumbItemPropsBasic } from '../props'
import type {
  BreadcrumbItemClasses,
  BreadcrumbItemComponents,
  BreadcrumbItemEmits,
  BreadcrumbItemExpose,
  BreadcrumbItemSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    dir: Boolean,
    isSkeleton: Boolean
  },
  setup(props, { attrs }) {
    return () => h('span', {
      'class': ['mock-icon', attrs.class],
      'data-icon': typeof props.icon === 'string' ? props.icon : 'object',
      'data-skeleton': String(Boolean(props.isSkeleton))
    })
  }
})

describe('BreadcrumbItem (integrated component)', () => {
  it('should integrate BreadcrumbItemDesign, BreadcrumbItem, IconLiteInclude, LabelInclude, SkeletonInclude, and EventClickInclude across lifecycle transitions', async () => {
    const emits = vi.fn()
    const state = reactive<BreadcrumbItemProps>({
      ...defaultsBreadcrumbItem,
      label: 'Главная — Trang chủ 🚀',
      icon: 'home',
      iconArrowLeft: 'chevron_left',
      iconArrowRight: 'chevron_right',
      href: '/home',
      value: 'home'
    })

    const IntegratedBreadcrumbItem = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-breadcrumbItem': true,
            'd1-breadcrumbItem--disabled': Boolean(state.disabled),
            'd1-breadcrumbItem--readonly': Boolean(state.readonly),
            'd1-breadcrumbItem--back': Boolean(state.back)
          }
        }))
        const design = new BreadcrumbItemDesign<
          BreadcrumbItemComponents,
          BreadcrumbItemExpose,
          BreadcrumbItemClasses,
          BreadcrumbItemPropsBasic
        >(
          'd1.breadcrumbItem',
          state,
          {
            emits: emits as unknown as ConstrEmit<BreadcrumbItemEmits>,
            classes,
            components: { icon: MockIcon }
          }
        )
        return design.render()
      }
    })

    const slots: BreadcrumbItemSlots = {
      default: () => [h('span', { class: 'slot-badge' }, ' (v2)')]
    }

    const container = document.createElement('div')
    const app = createApp({
      render: () => h(IntegratedBreadcrumbItem, null, slots as Record<string, () => unknown>)
    })
    app.mount(container)
    cleanups.push(() => app.unmount())

    const link = container.querySelector('.d1-breadcrumbItem') as HTMLAnchorElement
    expect(link.tagName).toBe('A')
    expect(link.getAttribute('href')).toBe('/home')
    expect(link.getAttribute('role')).toBeNull()
    expect(link.querySelector('.d1-breadcrumbItem__label')?.textContent).toBe('Главная — Trang chủ 🚀 (v2)')
    expect(link.querySelector('.d1-breadcrumbItem__icon')?.getAttribute('data-icon')).toBe('home')
    expect(link.querySelector('.d1-breadcrumbItem__iconArrow')?.getAttribute('data-icon')).toBe('chevron_right')

    state.isSkeleton = true
    state.label = '<script>alert(1)</script>'
    await nextTick()

    expect(link.querySelector('script')).toBeNull()
    expect(link.querySelector('.d1-breadcrumbItem__label')?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(link.querySelector('.d1-breadcrumbItem__icon')?.getAttribute('data-skeleton')).toBe('true')

    state.readonly = true
    await nextTick()

    const currentSpan = container.querySelector('.d1-breadcrumbItem') as HTMLElement
    expect(currentSpan.tagName).toBe('SPAN')
    expect(currentSpan.getAttribute('aria-current')).toBe('page')
    expect(currentSpan.querySelector('.d1-breadcrumbItem__iconArrow')).toBeNull()
  })
})
