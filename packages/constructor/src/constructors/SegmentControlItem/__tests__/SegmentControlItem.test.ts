// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  mergeProps,
  nextTick,
  reactive
} from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { defaultsSegmentControlItem, type SegmentControlItemPropsBasic } from '../props'
import { SegmentControlItemDesign } from '../SegmentControlItemDesign'
import type {
  SegmentControlItemClasses,
  SegmentControlItemComponents,
  SegmentControlItemEmits,
  SegmentControlItemExpose,
  SegmentControlItemSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object]
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'span',
      mergeProps({ class: 'mock-icon' }, attrs),
      String(componentProps.icon ?? '')
    )
  }
})

const MockBadge = defineComponent({
  name: 'MockBadge',
  props: {
    label: [String, Number],
    dot: Boolean,
    overlap: String
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'span',
      mergeProps({
        'class': 'mock-badge',
        'data-dot': String(Boolean(componentProps.dot)),
        'data-overlap': String(componentProps.overlap ?? '')
      }, attrs),
      componentProps.label !== undefined ? String(componentProps.label) : ''
    )
  }
})

const MockRipple = defineComponent({
  name: 'MockRipple',
  setup(_, { attrs }) {
    return () => h('span', mergeProps({ class: 'mock-ripple' }, attrs))
  }
})

/**
 * Mounts full SegmentControlItem component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента SegmentControlItem в jsdom.
 * @param initialProps initial segment control item properties / начальные свойства элемента сегментированного управления
 * @param customSlots slot renderers / функции рендеринга слотов
 * @param extraAttrs external attributes / внешние атрибуты
 * @param includeRipple whether to connect the ripple subcomponent / подключать ли подкомпонент ripple
 * @returns container, reactive props, emitted events, and exposed API / контейнер, реактивные свойства, события и экспонируемый API
 */
async function mountSegmentControlItem(
  initialProps: SegmentControlItemPropsBasic = {},
  customSlots: SegmentControlItemSlots = {},
  extraAttrs: Record<string, unknown> = {},
  includeRipple = true
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedCleanups.push(() => container.remove())

  const props = reactive<SegmentControlItemPropsBasic>({
    ...defaultsSegmentControlItem,
    ...initialProps
  })
  const emitted: Array<{ event: keyof SegmentControlItemEmits, args: unknown[] }> = []
  let exposed!: SegmentControlItemExpose

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-segmentControlItem': true,
          'd1-segmentControlItem--selected': Boolean(props.selected),
          'd1-segmentControlItem--disabled': Boolean(props.disabled),
          'd1-segmentControlItem--readonly': Boolean(props.readonly)
        }
      }))

      const components: SegmentControlItemComponents = {
        icon: MockIcon,
        badge: MockBadge,
        ...(includeRipple ? { ripple: MockRipple } : {})
      }

      const design = new SegmentControlItemDesign<
        SegmentControlItemComponents,
        SegmentControlItemExpose,
        SegmentControlItemClasses,
        SegmentControlItemPropsBasic
      >(
        'd1.segmentControlItem',
        props,
        {
          classes: classesToken,
          components,
          emits: ((event: keyof SegmentControlItemEmits, ...args: unknown[]) => {
            emitted.push({ event, args })
          }) as never
        }
      )

      exposed = design.expose()
      return design.render()
    }
  })

  const app = createApp({
    render() {
      return h(Host, extraAttrs, customSlots as Record<string, () => unknown>)
    }
  })
  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return {
    container,
    props,
    emitted,
    exposed
  }
}

describe('SegmentControlItem (integration)', () => {
  describe('Full rendering and subcomponents assembly', () => {
    it('should render icon, label, badge, and ripple in expected DOM order with ARIA attributes', async () => {
      const { container, exposed } = await mountSegmentControlItem({
        label: 'Monthly',
        labelId: 'segment-monthly-label',
        icon: 'calendar_month',
        badge: 3,
        index: 'segment-1',
        value: 'monthly',
        detail: { period: 'month' },
        selected: true
      })

      const root = container.querySelector('button.d1-segmentControlItem')
      expect(root).not.toBeNull()
      expect(root?.getAttribute('type')).toBe('button')
      expect(root?.getAttribute('role')).toBe('tab')
      expect(root?.getAttribute('tabindex')).toBe('-1')
      expect(root?.getAttribute('data-value')).toBe('segment-1')
      expect(root?.getAttribute('aria-labelledby')).toBe('segment-monthly-label')
      expect(root?.getAttribute('aria-selected')).toBe('true')
      expect(root?.hasAttribute('aria-disabled')).toBe(false)

      const children = Array.from(root?.children ?? [])
      expect(children).toHaveLength(4)
      expect(children[0]?.classList.contains('mock-icon')).toBe(true)
      expect(children[0]?.classList.contains('d1-segmentControlItem__icon')).toBe(true)
      expect(children[0]?.textContent).toBe('calendar_month')

      expect(children[1]?.classList.contains('d1-segmentControlItem__label')).toBe(true)
      expect(children[1]?.getAttribute('id')).toBe('segment-monthly-label')
      expect(children[1]?.textContent).toBe('Monthly')

      expect(children[2]?.classList.contains('mock-badge')).toBe(true)
      expect(children[2]?.classList.contains('d1-segmentControlItem__badge')).toBe(true)
      expect(children[2]?.getAttribute('data-overlap')).toBe('static')
      expect(children[2]?.textContent).toBe('3')

      expect(children[3]?.classList.contains('mock-ripple')).toBe(true)
      expect(children[3]?.classList.contains('d1-segmentControlItem__ripple')).toBe(true)

      expect(exposed.getValue?.()).toBe('monthly')
      expect(exposed.getDetail?.()).toEqual({ period: 'month' })
    })

    it('should render cleanly without ripple component connected (D1SegmentControlItem configuration)', async () => {
      const { container } = await mountSegmentControlItem(
        {
          label: 'Yearly',
          icon: 'event',
          badge: 'Save'
        },
        {},
        {},
        false
      )

      const root = container.querySelector('button.d1-segmentControlItem')
      expect(root).not.toBeNull()
      expect(root?.getAttribute('role')).toBe('tab')
      expect(container.querySelector('.mock-icon')?.textContent).toBe('event')
      expect(container.querySelector('.d1-segmentControlItem__label')?.textContent).toBe('Yearly')
      expect(container.querySelector('.mock-badge')?.textContent).toBe('Save')
      expect(container.querySelector('.mock-ripple')).toBeNull()
    })

    it('should render default slot content and link aria-labelledby to the generated label id', async () => {
      const { container } = await mountSegmentControlItem({}, {
        default: () => [h('strong', { class: 'slot-segment-text' }, 'Custom Segment')]
      })

      const root = container.querySelector('button.d1-segmentControlItem')
      const labelElement = container.querySelector('.d1-segmentControlItem__label')
      expect(labelElement?.querySelector('.slot-segment-text')?.textContent).toBe('Custom Segment')
      expect(labelElement?.getAttribute('id')).toBeTruthy()
      expect(root?.getAttribute('aria-labelledby')).toBe(labelElement?.getAttribute('id'))
    })

    it('should support badgeDot mode without badge text', async () => {
      const { container } = await mountSegmentControlItem({
        label: 'Alerts',
        badgeDot: true
      })

      const badge = container.querySelector('.mock-badge')
      expect(badge).not.toBeNull()
      expect(badge?.getAttribute('data-dot')).toBe('true')
      expect(badge?.getAttribute('data-overlap')).toBe('static')
    })

    it('should preserve numeric 0 as valid label, badge, index, and value', async () => {
      const { container, exposed } = await mountSegmentControlItem({
        label: 0,
        badge: 0,
        index: 0,
        value: 0
      })

      const root = container.querySelector('button.d1-segmentControlItem')
      expect(root?.getAttribute('data-value')).toBe('0')
      expect(container.querySelector('.d1-segmentControlItem__label')?.textContent).toBe('0')
      expect(container.querySelector('.mock-badge')?.textContent).toBe('0')
      expect(exposed.getValue?.()).toBe(0)
    })

    it('should render multilingual and Unicode labels accurately', async () => {
      const unicodeLabel = 'Сегмент · Phân đoạn tiếng Việt · セグメント 🚀'
      const { container } = await mountSegmentControlItem({
        label: unicodeLabel
      })

      expect(container.querySelector('.d1-segmentControlItem__label')?.textContent).toBe(unicodeLabel)
    })
  })

  describe('Reactive state transitions (selected, disabled, readonly, skeleton)', () => {
    it('should reactively synchronize aria-selected when selected prop toggles', async () => {
      const { container, props } = await mountSegmentControlItem({
        label: 'List',
        selected: false
      })

      const root = container.querySelector('button.d1-segmentControlItem')
      expect(root?.getAttribute('aria-selected')).toBe('false')

      props.selected = true
      await nextTick()
      expect(root?.getAttribute('aria-selected')).toBe('true')

      props.selected = false
      await nextTick()
      expect(root?.getAttribute('aria-selected')).toBe('false')
    })

    it('should block click emissions and remove ripple when disabled or readonly', async () => {
      const { container, props, emitted } = await mountSegmentControlItem({
        label: 'Locked',
        value: 'locked',
        disabled: true
      })

      const root = container.querySelector('button.d1-segmentControlItem') as HTMLButtonElement
      expect(root.getAttribute('aria-disabled')).toBe('true')
      expect(container.querySelector('.mock-ripple')).toBeNull()

      root.click()
      expect(emitted).toHaveLength(0)

      props.disabled = false
      props.readonly = true
      await nextTick()

      expect(root.hasAttribute('aria-disabled')).toBe(false)
      expect(container.querySelector('.mock-ripple')).toBeNull()

      root.click()
      expect(emitted).toHaveLength(0)

      props.readonly = false
      await nextTick()

      expect(container.querySelector('.mock-ripple')).not.toBeNull()
      root.click()
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])
    })

    it('should apply and remove skeleton textVariant class on label reactively', async () => {
      const { container, props } = await mountSegmentControlItem({
        label: 'Loading Segment',
        isSkeleton: false
      })

      const labelElement = container.querySelector('.d1-segmentControlItem__label')
      expect(labelElement?.classList.contains('d1-skeleton__textVariant')).toBe(false)

      props.isSkeleton = true
      await nextTick()
      expect(labelElement?.classList.contains('d1-skeleton__textVariant')).toBe(true)

      props.isSkeleton = false
      await nextTick()
      expect(labelElement?.classList.contains('d1-skeleton__textVariant')).toBe(false)
    })

    it('should update aria-labelledby when label is added or removed reactively', async () => {
      const { container, props } = await mountSegmentControlItem({
        icon: 'grid_view'
      })

      const root = container.querySelector('button.d1-segmentControlItem')
      expect(root?.hasAttribute('aria-labelledby')).toBe(false)

      props.label = 'Grid'
      await nextTick()
      const labelElement = container.querySelector('.d1-segmentControlItem__label')
      expect(labelElement).not.toBeNull()
      expect(root?.getAttribute('aria-labelledby')).toBe(labelElement?.getAttribute('id'))

      props.label = undefined
      await nextTick()
      expect(container.querySelector('.d1-segmentControlItem__label')).toBeNull()
      expect(root?.hasAttribute('aria-labelledby')).toBe(false)
    })
  })

  describe('Polymorphic tags, links, keyboard navigation, and external attrs', () => {
    it('should render anchor element without type attribute when href or to is provided', async () => {
      const { container, props } = await mountSegmentControlItem({
        label: 'Docs',
        href: 'https://example.com/docs'
      })

      const anchor = container.querySelector('a.d1-segmentControlItem')
      expect(anchor).not.toBeNull()
      expect(anchor?.getAttribute('href')).toBe('https://example.com/docs')
      expect(anchor?.hasAttribute('type')).toBe(false)

      props.href = undefined
      props.to = '/billing'
      await nextTick()

      const routerAnchor = container.querySelector('a.d1-segmentControlItem')
      expect(routerAnchor).not.toBeNull()
      expect(routerAnchor?.hasAttribute('type')).toBe(false)
    })

    it('should prioritize explicit tag prop over href and to', async () => {
      const { container } = await mountSegmentControlItem({
        label: 'Item',
        href: 'https://example.com',
        tag: 'div'
      })

      const divElement = container.querySelector('div.d1-segmentControlItem')
      expect(divElement).not.toBeNull()
      expect(divElement?.hasAttribute('type')).toBe(false)
    })

    it('should support keyboard activation via Enter and Space and ignore IME composition', async () => {
      const { container, emitted } = await mountSegmentControlItem({
        label: 'Keyboard Segment',
        value: 'kb-segment'
      })

      const root = container.querySelector('button.d1-segmentControlItem') as HTMLButtonElement

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true }))
      expect(emitted).toHaveLength(0)

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])

      root.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
      expect(emitted).toHaveLength(4)
    })

    it('should merge external class, style, and onClick handler without overwriting internal bindings', async () => {
      const externalClick = vi.fn()
      const { container, emitted } = await mountSegmentControlItem(
        { label: 'Merged Segment', value: 'merged' },
        {},
        {
          class: 'external-segment-class',
          style: 'color: rgb(0, 128, 0)',
          onClick: externalClick
        }
      )

      const root = container.querySelector('button.d1-segmentControlItem') as HTMLButtonElement
      expect(root.classList.contains('d1-segmentControlItem')).toBe(true)
      expect(root.classList.contains('external-segment-class')).toBe(true)
      expect(root.getAttribute('style')).toContain('color: rgb(0, 128, 0)')

      root.click()
      expect(externalClick).toHaveBeenCalledTimes(1)
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])
    })
  })
})
