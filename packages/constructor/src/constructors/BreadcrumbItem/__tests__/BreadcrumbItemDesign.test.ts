// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit, ConstrStyles } from '@dxtmisha/functional'

import { BreadcrumbItemDesign } from '../BreadcrumbItemDesign'
import type { BreadcrumbItemProps, BreadcrumbItemPropsBasic } from '../props'
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
      'data-dir': String(Boolean(props.dir)),
      'data-skeleton': String(Boolean(props.isSkeleton)),
      'aria-hidden': attrs['aria-hidden']
    })
  }
})

function mountBreadcrumbItemDesign(
  initialProps: BreadcrumbItemProps = {},
  slots?: BreadcrumbItemSlots,
  extraAttrs: Record<string, unknown> = {},
  emits?: ConstrEmit<BreadcrumbItemEmits>
) {
  const state = reactive<BreadcrumbItemProps>({ ...initialProps })
  let designInstance!: BreadcrumbItemDesign<
    BreadcrumbItemComponents,
    BreadcrumbItemExpose,
    BreadcrumbItemClasses,
    BreadcrumbItemPropsBasic
  >
  let exposed!: BreadcrumbItemExpose & { elementHtml?: unknown }

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-breadcrumbItem': true,
          'd1-breadcrumbItem--disabled': Boolean(state.disabled),
          'd1-breadcrumbItem--readonly': Boolean(state.readonly),
          'd1-breadcrumbItem--back': Boolean(state.back)
        }
      }))
      const styles = computed<ConstrStyles>(() => ({
        '--crumb-gap': '6px'
      }))

      designInstance = new BreadcrumbItemDesign(
        'd1.breadcrumbItem',
        state,
        {
          emits,
          classes,
          styles,
          components: {
            icon: MockIcon
          }
        }
      )
      exposed = designInstance.expose() as BreadcrumbItemExpose & { elementHtml?: unknown }
      return designInstance.render()
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
    getDesign: () => designInstance,
    getExposed: () => exposed
  }
}

describe('BreadcrumbItemDesign (isolated class)', () => {
  it('should render interactive link with leading icon, label, decorative separator, elementHtml ref, and exposed getters', () => {
    const emits = vi.fn()
    const externalClick = vi.fn()
    const { container, getExposed } = mountBreadcrumbItemDesign(
      {
        label: 'Catalog',
        icon: 'folder',
        iconArrowRight: 'chevron_right',
        value: 0,
        detail: { section: 'catalog' }
      },
      undefined,
      {
        'class': 'external-crumb',
        'style': { opacity: '0.85' },
        'data-testid': 'crumb-0',
        'onClick': externalClick
      },
      emits as unknown as ConstrEmit<BreadcrumbItemEmits>
    )

    const root = container.querySelector('[data-testid="crumb-0"]') as HTMLAnchorElement | null
    expect(root).not.toBeNull()
    expect(root?.tagName).toBe('A')
    expect(root?.classList.contains('d1-breadcrumbItem')).toBe(true)
    expect(root?.classList.contains('d1-a--static')).toBe(true)
    expect(root?.classList.contains('external-crumb')).toBe(true)
    expect(root?.getAttribute('role')).toBe('link')
    expect(root?.getAttribute('tabindex')).toBe('0')
    expect(root?.getAttribute('data-value')).toBe('0')
    expect(root?.style.getPropertyValue('--crumb-gap')).toBe('6px')
    expect(root?.style.opacity).toBe('0.85')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)
    expect(getExposed().getValue?.()).toBe(0)
    expect(getExposed().getDetail?.()).toEqual({ section: 'catalog' })

    const leadingIcon = root?.querySelector('.d1-breadcrumbItem__icon')
    expect(leadingIcon?.getAttribute('data-icon')).toBe('folder')

    const separator = root?.querySelector('.d1-breadcrumbItem__iconArrow')
    expect(separator?.getAttribute('data-icon')).toBe('chevron_right')
    expect(separator?.getAttribute('data-dir')).toBe('true')
    expect(separator?.getAttribute('aria-hidden')).toBe('true')

    root?.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
    expect(emits).toHaveBeenCalledWith('click', expect.any(MouseEvent), {
      type: 'click',
      value: 0,
      detail: { section: 'catalog' }
    })
    expect(emits).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 0,
      detail: { section: 'catalog' }
    })
  })

  it('should support keyboard Enter activation, block events when disabled, and switch to span without separator when readonly', async () => {
    const emits = vi.fn()
    const { container, state, getDesign } = mountBreadcrumbItemDesign(
      {
        label: 'Settings',
        iconArrowLeft: 'chevron_left',
        iconArrowRight: 'chevron_right',
        value: 'settings'
      },
      undefined,
      {},
      emits as unknown as ConstrEmit<BreadcrumbItemEmits>
    )

    const link = container.querySelector('.d1-breadcrumbItem') as HTMLElement
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true, cancelable: true }))
    expect(emits).toHaveBeenCalledWith('clickLite', {
      type: 'click',
      value: 'settings',
      detail: undefined
    })

    emits.mockClear()
    state.disabled = true
    await nextTick()

    const disabledLink = container.querySelector('.d1-breadcrumbItem') as HTMLElement
    expect(disabledLink.getAttribute('aria-disabled')).toBe('true')
    disabledLink.click()
    disabledLink.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }))
    expect(emits).not.toHaveBeenCalled()

    state.disabled = false
    state.back = true
    await nextTick()
    expect(container.querySelector('.d1-breadcrumbItem__iconArrow')?.getAttribute('data-icon')).toBe('chevron_left')

    state.readonly = true
    await nextTick()
    const readonlyEl = container.querySelector('.d1-breadcrumbItem') as HTMLElement
    expect(readonlyEl.tagName).toBe('SPAN')
    expect(readonlyEl.getAttribute('aria-current')).toBe('page')
    expect(readonlyEl.querySelector('.d1-breadcrumbItem__iconArrow')).toBeNull()
    expect(getDesign().renderSeparator()).toEqual([])
  })
})
