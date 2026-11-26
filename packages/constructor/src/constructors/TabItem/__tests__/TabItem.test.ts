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

import { defaultsTabItem, type TabItemPropsBasic } from '../props'
import { TabItemDesign } from '../TabItemDesign'
import type {
  TabItemClasses,
  TabItemComponents,
  TabItemEmits,
  TabItemExpose,
  TabItemSlots
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
 * Mounts full TabItem component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента TabItem в jsdom.
 * @param initialProps initial tab item properties / начальные свойства элемента вкладки
 * @param customSlots slot renderers / функции рендеринга слотов
 * @param extraAttrs external attributes / внешние атрибуты
 * @returns container, reactive props, emitted events, and exposed API / контейнер, реактивные свойства, события и экспонируемый API
 */
async function mountTabItem(
  initialProps: TabItemPropsBasic = {},
  customSlots: TabItemSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedCleanups.push(() => container.remove())

  const props = reactive<TabItemPropsBasic>({
    ...defaultsTabItem,
    ...initialProps
  })
  const emitted: Array<{ event: keyof TabItemEmits, args: unknown[] }> = []
  let exposed!: TabItemExpose

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-tabItem': true,
          'd1-tabItem--selected': Boolean(props.selected),
          'd1-tabItem--disabled': Boolean(props.disabled),
          'd1-tabItem--readonly': Boolean(props.readonly)
        }
      }))

      const design = new TabItemDesign<
        TabItemComponents,
        TabItemExpose,
        TabItemClasses,
        TabItemPropsBasic
      >(
        'd1.tabItem',
        props,
        {
          classes: classesToken,
          components: {
            icon: MockIcon,
            badge: MockBadge,
            ripple: MockRipple
          },
          emits: ((event: keyof TabItemEmits, ...args: unknown[]) => {
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

describe('TabItem (integration)', () => {
  describe('Full rendering and subcomponents assembly', () => {
    it('should render icon, label, badge, and ripple in expected DOM order with ARIA attributes', async () => {
      const { container, exposed } = await mountTabItem({
        label: 'Overview',
        labelId: 'tab-overview-label',
        icon: 'dashboard',
        badge: 5,
        index: 'tab-1',
        value: 'overview',
        detail: { section: 'main' },
        selected: true
      })

      const root = container.querySelector('button.d1-tabItem')
      expect(root).not.toBeNull()
      expect(root?.getAttribute('type')).toBe('button')
      expect(root?.getAttribute('role')).toBe('tab')
      expect(root?.getAttribute('tabindex')).toBe('-1')
      expect(root?.getAttribute('data-value')).toBe('tab-1')
      expect(root?.getAttribute('aria-labelledby')).toBe('tab-overview-label')
      expect(root?.getAttribute('aria-selected')).toBe('true')
      expect(root?.hasAttribute('aria-disabled')).toBe(false)

      const children = Array.from(root?.children ?? [])
      expect(children).toHaveLength(4)
      expect(children[0]?.classList.contains('mock-icon')).toBe(true)
      expect(children[0]?.classList.contains('d1-tabItem__icon')).toBe(true)
      expect(children[0]?.textContent).toBe('dashboard')

      expect(children[1]?.classList.contains('d1-tabItem__label')).toBe(true)
      expect(children[1]?.getAttribute('id')).toBe('tab-overview-label')
      expect(children[1]?.textContent).toBe('Overview')

      expect(children[2]?.classList.contains('mock-badge')).toBe(true)
      expect(children[2]?.classList.contains('d1-tabItem__badge')).toBe(true)
      expect(children[2]?.getAttribute('data-overlap')).toBe('static')
      expect(children[2]?.textContent).toBe('5')

      expect(children[3]?.classList.contains('mock-ripple')).toBe(true)
      expect(children[3]?.classList.contains('d1-tabItem__ripple')).toBe(true)

      expect(exposed.getValue?.()).toBe('overview')
      expect(exposed.getDetail?.()).toEqual({ section: 'main' })
    })

    it('should render default slot content and link aria-labelledby to the generated label id', async () => {
      const { container } = await mountTabItem({}, {
        default: () => [h('strong', { class: 'slot-tab-text' }, 'Custom Tab')]
      })

      const root = container.querySelector('button.d1-tabItem')
      const labelElement = container.querySelector('.d1-tabItem__label')
      expect(labelElement?.querySelector('.slot-tab-text')?.textContent).toBe('Custom Tab')
      expect(labelElement?.getAttribute('id')).toBeTruthy()
      expect(root?.getAttribute('aria-labelledby')).toBe(labelElement?.getAttribute('id'))
    })

    it('should support badgeDot mode without badge text', async () => {
      const { container } = await mountTabItem({
        label: 'Notifications',
        badgeDot: true
      })

      const badge = container.querySelector('.mock-badge')
      expect(badge).not.toBeNull()
      expect(badge?.getAttribute('data-dot')).toBe('true')
      expect(badge?.getAttribute('data-overlap')).toBe('static')
    })

    it('should preserve numeric 0 as valid label, badge, index, and value', async () => {
      const { container, exposed } = await mountTabItem({
        label: 0,
        badge: 0,
        index: 0,
        value: 0
      })

      const root = container.querySelector('button.d1-tabItem')
      expect(root?.getAttribute('data-value')).toBe('0')
      expect(container.querySelector('.d1-tabItem__label')?.textContent).toBe('0')
      expect(container.querySelector('.mock-badge')?.textContent).toBe('0')
      expect(exposed.getValue?.()).toBe(0)
    })

    it('should render multilingual and Unicode labels accurately', async () => {
      const unicodeLabel = 'Настройки · Cài đặt tiếng Việt · 設定 🚀'
      const { container } = await mountTabItem({
        label: unicodeLabel
      })

      expect(container.querySelector('.d1-tabItem__label')?.textContent).toBe(unicodeLabel)
    })
  })

  describe('Reactive state transitions (selected, disabled, readonly, skeleton)', () => {
    it('should reactively synchronize aria-selected when selected prop toggles', async () => {
      const { container, props } = await mountTabItem({
        label: 'General',
        selected: false
      })

      const root = container.querySelector('button.d1-tabItem')
      expect(root?.getAttribute('aria-selected')).toBe('false')

      props.selected = true
      await nextTick()
      expect(root?.getAttribute('aria-selected')).toBe('true')

      props.selected = false
      await nextTick()
      expect(root?.getAttribute('aria-selected')).toBe('false')
    })

    it('should block click emissions and remove ripple when disabled or readonly', async () => {
      const { container, props, emitted } = await mountTabItem({
        label: 'Restricted',
        value: 'restricted',
        disabled: true
      })

      const root = container.querySelector('button.d1-tabItem') as HTMLButtonElement
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
      const { container, props } = await mountTabItem({
        label: 'Loading Tab',
        isSkeleton: false
      })

      const labelElement = container.querySelector('.d1-tabItem__label')
      expect(labelElement?.classList.contains('d1-skeleton__textVariant')).toBe(false)

      props.isSkeleton = true
      await nextTick()
      expect(labelElement?.classList.contains('d1-skeleton__textVariant')).toBe(true)

      props.isSkeleton = false
      await nextTick()
      expect(labelElement?.classList.contains('d1-skeleton__textVariant')).toBe(false)
    })

    it('should update aria-labelledby when label is added or removed reactively', async () => {
      const { container, props } = await mountTabItem({
        icon: 'home'
      })

      const root = container.querySelector('button.d1-tabItem')
      expect(root?.hasAttribute('aria-labelledby')).toBe(false)

      props.label = 'Home'
      await nextTick()
      const labelElement = container.querySelector('.d1-tabItem__label')
      expect(labelElement).not.toBeNull()
      expect(root?.getAttribute('aria-labelledby')).toBe(labelElement?.getAttribute('id'))

      props.label = undefined
      await nextTick()
      expect(container.querySelector('.d1-tabItem__label')).toBeNull()
      expect(root?.hasAttribute('aria-labelledby')).toBe(false)
    })
  })

  describe('Polymorphic tags, links, keyboard navigation, and external attrs', () => {
    it('should render anchor element without type attribute when href or to is provided', async () => {
      const { container, props } = await mountTabItem({
        label: 'Docs',
        href: 'https://example.com/docs'
      })

      const anchor = container.querySelector('a.d1-tabItem')
      expect(anchor).not.toBeNull()
      expect(anchor?.getAttribute('href')).toBe('https://example.com/docs')
      expect(anchor?.hasAttribute('type')).toBe(false)

      props.href = undefined
      props.to = '/settings'
      await nextTick()

      const routerAnchor = container.querySelector('a.d1-tabItem')
      expect(routerAnchor).not.toBeNull()
      expect(routerAnchor?.hasAttribute('type')).toBe(false)
    })

    it('should prioritize explicit tag prop over href and to', async () => {
      const { container } = await mountTabItem({
        label: 'Item',
        href: 'https://example.com',
        tag: 'div'
      })

      const divElement = container.querySelector('div.d1-tabItem')
      expect(divElement).not.toBeNull()
      expect(divElement?.hasAttribute('type')).toBe(false)
    })

    it('should support keyboard activation via Enter and Space and ignore IME composition', async () => {
      const { container, emitted } = await mountTabItem({
        label: 'Keyboard Tab',
        value: 'kb-tab'
      })

      const root = container.querySelector('button.d1-tabItem') as HTMLButtonElement

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true }))
      expect(emitted).toHaveLength(0)

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])

      root.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
      expect(emitted).toHaveLength(4)
    })

    it('should merge external class, style, and onClick handler without overwriting internal bindings', async () => {
      const externalClick = vi.fn()
      const { container, emitted } = await mountTabItem(
        { label: 'Merged Tab', value: 'merged' },
        {},
        {
          class: 'external-tab-class',
          style: 'color: rgb(0, 128, 0)',
          onClick: externalClick
        }
      )

      const root = container.querySelector('button.d1-tabItem') as HTMLButtonElement
      expect(root.classList.contains('d1-tabItem')).toBe(true)
      expect(root.classList.contains('external-tab-class')).toBe(true)
      expect(root.getAttribute('style')).toContain('color: rgb(0, 128, 0)')

      root.click()
      expect(externalClick).toHaveBeenCalledTimes(1)
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])
    })
  })
})
