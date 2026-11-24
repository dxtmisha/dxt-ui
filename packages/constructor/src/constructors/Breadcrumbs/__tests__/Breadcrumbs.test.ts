// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { BreadcrumbItemDesign } from '../../BreadcrumbItem/BreadcrumbItemDesign'
import { defaultsBreadcrumbItem, type BreadcrumbItemProps, type BreadcrumbItemPropsBasic } from '../../BreadcrumbItem/props'
import type {
  BreadcrumbItemClasses,
  BreadcrumbItemComponents,
  BreadcrumbItemEmits,
  BreadcrumbItemExpose
} from '../../BreadcrumbItem/types'
import { BreadcrumbsDesign } from '../BreadcrumbsDesign'
import { defaultsBreadcrumbs, type BreadcrumbsProps, type BreadcrumbsPropsBasic } from '../props'
import type { BreadcrumbsClasses, BreadcrumbsComponents, BreadcrumbsEmits, BreadcrumbsExpose } from '../types'

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

const RealBreadcrumbItem = defineComponent({
  name: 'RealBreadcrumbItem',
  props: {
    index: Number,
    label: [String, Number],
    labelId: String,
    icon: [String, Object],
    iconArrowLeft: { type: String, default: 'chevron_left' },
    iconArrowRight: { type: String, default: 'chevron_right' },
    href: String,
    to: [String, Object],
    value: [String, Number, Object],
    detail: Object,
    disabled: Boolean,
    readonly: Boolean,
    back: Boolean,
    isSkeleton: Boolean
  },
  emits: ['click', 'clickLite'],
  setup(props, { emit }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-breadcrumbItem': true,
        'd1-breadcrumbItem--disabled': Boolean(props.disabled),
        'd1-breadcrumbItem--readonly': Boolean(props.readonly),
        'd1-breadcrumbItem--back': Boolean(props.back)
      }
    }))
    const design = new BreadcrumbItemDesign<
      BreadcrumbItemComponents,
      BreadcrumbItemExpose,
      BreadcrumbItemClasses,
      BreadcrumbItemPropsBasic
    >(
      'd1.breadcrumbItem',
      props as BreadcrumbItemProps,
      {
        emits: emit as unknown as ConstrEmit<BreadcrumbItemEmits>,
        classes,
        components: { icon: MockIcon }
      }
    )
    return design.render()
  }
})

describe('Breadcrumbs (integrated component)', () => {
  it('should integrate BreadcrumbsDesign, Breadcrumbs, BreadcrumbItemInclude, and real BreadcrumbItemDesign across states', async () => {
    const emits = vi.fn()
    const state = reactive<BreadcrumbsProps>({
      ...defaultsBreadcrumbs,
      ...defaultsBreadcrumbItem,
      textBreadcrumb: 'Путь навигации',
      list: [
        { label: 'Home', icon: 'home', value: 'home' },
        { label: 'Disabled', disabled: true, value: 'disabled' },
        { label: 'Locked', readonly: true, value: 'locked' },
        { label: 'Current Page', value: 'current' }
      ]
    })

    const IntegratedBreadcrumbs = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-breadcrumbs': true }
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
            components: {
              breadcrumbItem: RealBreadcrumbItem
            }
          }
        )
        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp(IntegratedBreadcrumbs)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const nav = container.querySelector('nav.d1-breadcrumbs')!
    expect(nav.getAttribute('aria-label')).toBe('Путь навигации')

    const items = nav.querySelectorAll('.d1-breadcrumbs__item')
    expect(items).toHaveLength(4)
    expect(items[0]?.tagName).toBe('A')
    expect(items[0]?.getAttribute('role')).toBe('link')
    expect(items[1]?.getAttribute('aria-disabled')).toBe('true')
    expect(items[2]?.tagName).toBe('SPAN')
    expect(items[2]?.getAttribute('aria-current')).toBe('page')
    expect(items[3]?.tagName).toBe('SPAN')
    expect(items[3]?.getAttribute('aria-current')).toBe('page')
    expect(items[3]?.querySelector('.d1-breadcrumbItem__iconArrow')).toBeNull()

    ;(items[0] as HTMLElement).click()
    ;(items[1] as HTMLElement).click()
    expect(emits).toHaveBeenCalledTimes(2)
    expect(emits).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 'home',
      detail: undefined
    })

    state.isSkeleton = true
    await nextTick()

    expect(items[0]?.querySelector('.d1-breadcrumbItem__label')?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(items[0]?.querySelector('.d1-breadcrumbItem__icon')?.getAttribute('data-skeleton')).toBe('true')
  })
})
