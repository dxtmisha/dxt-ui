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

import { NavigationRailItem, type NavigationRailItemConstructors } from '../NavigationRailItem'
import { NavigationRailItemDesign } from '../NavigationRailItemDesign'
import type { NavigationRailItemProps } from '../props'
import type {
  NavigationRailItemClasses,
  NavigationRailItemComponents,
  NavigationRailItemEmits,
  NavigationRailItemExpose,
  NavigationRailItemSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

/**
 * Inspectable subclass of NavigationRailItem exposing internal instance checks.
 *
 * Проверяемый подкласс NavigationRailItem, предоставляющий доступ к внутренним экземплярам.
 */
class InspectableNavigationRailItem extends NavigationRailItem {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof NavigationRailItemConstructors, unknown>> {
    return this.instances
  }
}

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    active: Boolean,
    isSkeleton: Boolean
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'span',
      mergeProps({
        'class': 'mock-icon',
        'data-active': String(Boolean(componentProps.active)),
        'data-skeleton': String(Boolean(componentProps.isSkeleton))
      }, attrs),
      typeof componentProps.icon === 'string' ? componentProps.icon : 'icon-obj'
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
        'data-overlap': componentProps.overlap ?? ''
      }, attrs),
      componentProps.label !== undefined ? String(componentProps.label) : ''
    )
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean,
    circular: Boolean
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'span',
      mergeProps({
        'class': 'mock-progress',
        'data-visible': String(Boolean(componentProps.visible)),
        'data-circular': String(Boolean(componentProps.circular))
      }, attrs),
      componentProps.visible ? 'loading' : ''
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
 * Mounts full NavigationRailItem component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента NavigationRailItem в jsdom.
 * @param initialProps initial properties / начальные свойства
 * @param customSlots slot renderers / функции рендеринга слотов
 * @param extraAttrs external attributes / внешние атрибуты
 * @returns container, reactive props, logic instance, emitted events, and exposed API / контейнер, реактивные свойства, экземпляр логики, события и экспонируемый API
 */
async function mountNavigationRailItem(
  initialProps: NavigationRailItemProps = {},
  customSlots: NavigationRailItemSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedCleanups.push(() => container.remove())

  const props = reactive<NavigationRailItemProps>({
    role: 'option',
    tabindex: '-1',
    ...initialProps
  })
  const emitted: Array<{ event: keyof NavigationRailItemEmits, args: unknown[] }> = []
  let exposed!: NavigationRailItemExpose
  let logic!: InspectableNavigationRailItem

  class TestNavigationRailItemDesign extends NavigationRailItemDesign<
    NavigationRailItemComponents,
    NavigationRailItemExpose,
    NavigationRailItemClasses,
    NavigationRailItemProps
  > {
    get logicInstance(): InspectableNavigationRailItem {
      return this.item as InspectableNavigationRailItem
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-navigationRailItem': true,
          'd1-navigationRailItem--disabled': Boolean(props.disabled),
          'd1-navigationRailItem--readonly': Boolean(props.readonly),
          'd1-navigationRailItem--divider': Boolean(props.divider)
        }
      }))

      const design = new TestNavigationRailItemDesign(
        'd1.navigationRailItem',
        props,
        {
          classes: classesToken,
          components: {
            icon: MockIcon,
            badge: MockBadge,
            progress: MockProgress,
            ripple: MockRipple
          },
          emits: ((event: keyof NavigationRailItemEmits, ...args: unknown[]) => {
            emitted.push({ event, args })
          }) as never
        },
        InspectableNavigationRailItem as unknown as typeof NavigationRailItem
      )

      logic = design.logicInstance
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
    logic,
    emitted,
    exposed
  }
}

describe('NavigationRailItem (integration)', () => {
  describe('Full rendering, layout branches, and lazy dependencies', () => {
    it('should render label and ripple without creating optional badge, icon, progress, or skeleton', async () => {
      const { container, logic, exposed } = await mountNavigationRailItem({
        label: 'Home',
        value: 'home-item',
        detail: { section: 'main' }
      })

      const root = container.querySelector('.d1-navigationRailItem') as HTMLElement
      expect(root).not.toBeNull()
      expect(root.tagName.toLowerCase()).toBe('div')
      expect(root.getAttribute('role')).toBe('option')
      expect(root.getAttribute('tabindex')).toBe('-1')
      expect(root.getAttribute('aria-selected')).toBe('false')
      expect(root.getAttribute('data-value')).toBe('home-item')
      expect(root.querySelector('.d1-navigationRailItem__context')).toBeNull()
      expect(root.querySelector('.d1-navigationRailItem__contextLine')).toBeNull()
      expect(root.querySelector('.d1-navigationRailItem__label')?.textContent).toBe('Home')
      expect(root.querySelector('.mock-ripple.d1-navigationRailItem__ripple')).not.toBeNull()

      expect(logic.hasInstance('event')).toBe(true)
      expect(logic.hasInstance('label')).toBe(true)
      expect(logic.hasInstance('ripple')).toBe(true)
      expect(logic.hasInstance('badge')).toBe(false)
      expect(logic.hasInstance('icon')).toBe(false)
      expect(logic.hasInstance('progress')).toBe(false)
      expect(logic.hasInstance('skeleton')).toBe(false)

      expect(exposed.getValue?.()).toBe('home-item')
      expect(exposed.getDetail?.()).toEqual({ section: 'main' })
    })

    it('should render icon and label directly when badge is absent', async () => {
      const { container, logic } = await mountNavigationRailItem({
        icon: 'dashboard',
        label: 'Dashboard',
        selected: true
      })

      const root = container.querySelector('.d1-navigationRailItem') as HTMLElement
      expect(root.classList.contains('d1-navigationRailItem--selected')).toBe(true)
      expect(root.getAttribute('aria-selected')).toBe('true')
      expect(root.querySelector('.d1-navigationRailItem__context')).toBeNull()
      expect(root.querySelector('.d1-navigationRailItem__contextLine')).toBeNull()

      const icon = root.querySelector('.mock-icon')
      expect(icon).not.toBeNull()
      expect(icon?.textContent).toBe('dashboard')
      expect(icon?.getAttribute('data-active')).toBe('true')
      expect(root.querySelector('.d1-navigationRailItem__label')?.textContent).toBe('Dashboard')

      expect(logic.hasInstance('icon')).toBe(true)
      expect(logic.hasInstance('badge')).toBe(false)
    })

    it('should wrap icon and badge in .context with circular overlap when both are present', async () => {
      const { container } = await mountNavigationRailItem({
        icon: 'notifications',
        badge: 5,
        label: 'Alerts'
      })

      const context = container.querySelector('.d1-navigationRailItem__context')
      expect(context).not.toBeNull()
      expect(container.querySelector('.d1-navigationRailItem__contextLine')).toBeNull()
      expect(context?.querySelector('.mock-icon')?.textContent).toBe('notifications')

      const badge = context?.querySelector('.mock-badge')
      expect(badge).not.toBeNull()
      expect(badge?.textContent).toBe('5')
      expect(badge?.getAttribute('data-overlap')).toBe('circular')
      expect(container.querySelector('.d1-navigationRailItem > .d1-navigationRailItem__label')?.textContent).toBe('Alerts')
    })

    it('should wrap label and badge in .contextLine with static overlap when icon is absent', async () => {
      const { container, logic } = await mountNavigationRailItem({
        badge: 'NEW',
        label: 'Updates'
      })

      const contextLine = container.querySelector('.d1-navigationRailItem__contextLine')
      expect(contextLine).not.toBeNull()
      expect(container.querySelector('.d1-navigationRailItem__context')).toBeNull()
      expect(contextLine?.querySelector('.d1-navigationRailItem__label')?.textContent).toBe('Updates')

      const badge = contextLine?.querySelector('.mock-badge')
      expect(badge).not.toBeNull()
      expect(badge?.textContent).toBe('NEW')
      expect(badge?.getAttribute('data-overlap')).toBe('static')
      expect(logic.hasInstance('icon')).toBe(false)
    })

    it('should preserve numeric 0 across label, badge, index, listId, and tabindex', async () => {
      const { container, exposed } = await mountNavigationRailItem({
        label: 0,
        badge: 0,
        index: 0,
        value: 'fallback',
        listId: 0,
        tabindex: 0
      })

      const root = container.querySelector('.d1-navigationRailItem') as HTMLElement
      expect(root.getAttribute('data-value')).toBe('0')
      expect(root.getAttribute('data-list-id')).toBe('0')
      expect(root.getAttribute('tabindex')).toBe('0')
      expect(root.querySelector('.d1-navigationRailItem__label')?.textContent).toBe('0')
      expect(root.querySelector('.mock-badge')?.textContent).toBe('0')
      expect(exposed.getValue?.()).toBe('fallback')
    })

    it('should support badgeDot without numeric or string badge value', async () => {
      const { container } = await mountNavigationRailItem({
        icon: 'mail',
        badgeDot: true,
        label: 'Inbox'
      })

      const badge = container.querySelector('.d1-navigationRailItem__context .mock-badge')
      expect(badge).not.toBeNull()
      expect(badge?.getAttribute('data-dot')).toBe('true')
    })
  })

  describe('Reactive state transitions (badge, icon, loading, disabled, readonly, skeleton)', () => {
    it('should reactively switch layout wrappers when badge and icon change', async () => {
      const { container, props } = await mountNavigationRailItem({
        label: 'Inbox',
        icon: 'mail'
      })

      expect(container.querySelector('.d1-navigationRailItem__context')).toBeNull()
      expect(container.querySelector('.d1-navigationRailItem__contextLine')).toBeNull()

      props.badge = 3
      await nextTick()
      expect(container.querySelector('.d1-navigationRailItem__context')).not.toBeNull()
      expect(container.querySelector('.mock-badge')?.getAttribute('data-overlap')).toBe('circular')

      props.icon = undefined
      await nextTick()
      expect(container.querySelector('.d1-navigationRailItem__context')).toBeNull()
      expect(container.querySelector('.d1-navigationRailItem__contextLine')).not.toBeNull()
      expect(container.querySelector('.mock-badge')?.getAttribute('data-overlap')).toBe('static')

      props.badge = undefined
      await nextTick()
      expect(container.querySelector('.d1-navigationRailItem__contextLine')).toBeNull()
      expect(container.querySelector('.mock-badge')).toBeNull()
    })

    it('should toggle progress, aria-disabled, ripple, and click blocking on loading change', async () => {
      const { container, props, emitted } = await mountNavigationRailItem({
        label: 'Sync',
        loading: false
      })

      const root = container.querySelector('.d1-navigationRailItem') as HTMLElement
      expect(container.querySelector('.mock-progress')).toBeNull()
      expect(container.querySelector('.mock-ripple')).not.toBeNull()
      expect(root.getAttribute('aria-disabled')).toBeNull()

      props.loading = true
      await nextTick()
      expect(container.querySelector('.mock-progress')?.getAttribute('data-visible')).toBe('true')
      expect(container.querySelector('.mock-ripple')).toBeNull()
      expect(root.getAttribute('aria-disabled')).toBe('true')

      root.click()
      expect(emitted).toHaveLength(0)

      props.loading = false
      await nextTick()
      expect(container.querySelector('.mock-progress')?.getAttribute('data-visible')).toBe('false')
      expect(container.querySelector('.mock-ripple')).not.toBeNull()
      expect(root.getAttribute('aria-disabled')).toBeNull()

      root.click()
      expect(emitted).toHaveLength(2)
    })

    it('should block clicks and hide ripple when disabled or readonly', async () => {
      const { container, props, emitted } = await mountNavigationRailItem({
        label: 'Blocked',
        disabled: true
      })

      const root = container.querySelector('.d1-navigationRailItem') as HTMLElement
      expect(root.getAttribute('aria-disabled')).toBe('true')
      expect(container.querySelector('.mock-ripple')).toBeNull()

      root.click()
      expect(emitted).toHaveLength(0)

      props.disabled = false
      props.readonly = true
      await nextTick()
      expect(root.getAttribute('aria-disabled')).toBeNull()
      expect(container.querySelector('.mock-ripple')).toBeNull()

      root.click()
      expect(emitted).toHaveLength(0)
    })

    it('should apply skeleton class to label and isSkeleton prop to icon', async () => {
      const { container, props, logic } = await mountNavigationRailItem({
        label: 'Loading Item',
        icon: 'star',
        isSkeleton: true
      })

      expect(logic.hasInstance('skeleton')).toBe(true)
      expect(container.querySelector('.d1-navigationRailItem__label')?.classList.contains('d1-skeleton__textVariant')).toBe(true)
      expect(container.querySelector('.mock-icon')?.getAttribute('data-skeleton')).toBe('true')

      props.isSkeleton = false
      await nextTick()
      expect(container.querySelector('.d1-navigationRailItem__label')?.classList.contains('d1-skeleton__textVariant')).toBe(false)
    })
  })

  describe('Tags, slots, keyboard activation, and external attrs merging', () => {
    it('should render anchor tag for href or to, and custom tag when explicitly set', async () => {
      const { container, props } = await mountNavigationRailItem({
        label: 'Nav Link',
        href: 'https://example.com'
      })

      expect(container.querySelector('a.d1-navigationRailItem')?.getAttribute('href')).toBe('https://example.com')

      props.href = undefined
      props.to = '/settings'
      await nextTick()
      expect(container.querySelector('a.d1-navigationRailItem')).not.toBeNull()

      props.tag = 'li'
      await nextTick()
      expect(container.querySelector('li.d1-navigationRailItem')).not.toBeNull()
    })

    it('should project leading, default, and body slots in order', async () => {
      const { container } = await mountNavigationRailItem(
        { loading: true },
        {
          leading: () => [h('span', { class: 'slot-leading' }, 'Leading')],
          default: () => [h('span', { class: 'slot-default' }, 'DefaultLabel')],
          body: () => [h('span', { class: 'slot-body' }, 'BodyExtra')]
        }
      )

      const root = container.querySelector('.d1-navigationRailItem') as HTMLElement
      expect(root.querySelector('.slot-leading')?.textContent).toBe('Leading')
      expect(root.querySelector('.d1-navigationRailItem__label .slot-default')?.textContent).toBe('DefaultLabel')
      expect(root.querySelector('.slot-body')?.textContent).toBe('BodyExtra')

      const children = Array.from(root.children)
      const leadingIndex = children.findIndex(element => element.classList.contains('slot-leading'))
      const labelIndex = children.findIndex(element => element.classList.contains('d1-navigationRailItem__label'))
      const progressIndex = children.findIndex(element => element.classList.contains('mock-progress'))
      const bodyIndex = children.findIndex(element => element.classList.contains('slot-body'))

      expect(leadingIndex).toBeLessThan(labelIndex)
      expect(labelIndex).toBeLessThan(progressIndex)
      expect(progressIndex).toBeLessThan(bodyIndex)
    })

    it('should activate click emissions on Enter keydown and merge external attrs with internal handlers', async () => {
      const externalClick = vi.fn()
      const { container, emitted } = await mountNavigationRailItem(
        {
          label: 'Explore',
          value: 'explore',
          divider: true,
          parent: 'group-1'
        },
        {},
        {
          class: 'ext-item',
          style: 'color: green',
          onClick: externalClick
        }
      )

      const root = container.querySelector('.d1-navigationRailItem') as HTMLElement
      expect(root.classList.contains('ext-item')).toBe(true)
      expect(root.getAttribute('style')).toContain('color: green')
      expect(root.getAttribute('data-divider')).toBe('active')
      expect(root.getAttribute('data-parent')).toBe('group-1')

      root.click()
      expect(externalClick).toHaveBeenCalledTimes(1)
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])

      emitted.length = 0
      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])
    })
  })
})
