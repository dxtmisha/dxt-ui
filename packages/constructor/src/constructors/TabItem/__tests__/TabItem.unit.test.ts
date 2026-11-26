// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { LabelInclude } from '../../../classes/LabelInclude'
import { BadgeInclude } from '../../Badge'
import { IconTrailingInclude } from '../../Icon'
import { ProgressInclude } from '../../Progress'
import { RippleInclude } from '../../Ripple'
import { SkeletonInclude } from '../../Skeleton'
import type { TabItemPropsBasic } from '../props'
import { TabItem, type TabItemConstructors } from '../TabItem'
import type { TabItemSlots } from '../types'

/**
 * Inspectable subclass of TabItem exposing internal lazy-instantiated instances.
 *
 * Проверяемый подкласс TabItem, предоставляющий доступ к внутренним лениво созданным экземплярам.
 */
class InspectableTabItem extends TabItem {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof TabItemConstructors, unknown>> {
    return this.instances
  }
}

describe('TabItem (unit)', () => {
  const naming = new DesignName('d1.tabItem')
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize with default button tag and standard bindings', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({ role: 'tab' })

      scope.run(() => {
        const tabItem = new TabItem(props, element, naming)

        expect(tabItem.tag).toBe('button')
        expect(tabItem.binds.type).toBe('button')
        expect(tabItem.binds.tabindex).toBe(-1)
        expect(tabItem.binds.role).toBe('tab')
        expect(tabItem.binds['aria-selected']).toBe('false')
        expect(tabItem.binds['aria-disabled']).toBeUndefined()
        expect(tabItem.binds['aria-labelledby']).toBeUndefined()
        expect(tabItem.binds['data-value']).toBeUndefined()
        expect(typeof tabItem.binds.onClick).toBe('function')
        expect(typeof tabItem.binds.onKeydown).toBe('function')
      })
    })

    it('should resolve tag to "a" when href or to is provided and omit type attribute', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({ href: 'https://example.com' })

      scope.run(() => {
        const tabItem = new TabItem(props, element, naming)

        expect(tabItem.tag).toBe('a')
        expect(tabItem.binds.href).toBe('https://example.com')
        expect(tabItem.binds.type).toBeUndefined()

        props.href = undefined
        props.to = '/profile'
        expect(tabItem.tag).toBe('a')
        expect(tabItem.binds.type).toBeUndefined()

        props.to = { name: 'profile' }
        expect(tabItem.tag).toBe('a')
      })
    })

    it('should prioritize explicit tag prop over href and to', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({
        href: 'https://example.com',
        to: '/profile',
        tag: 'li'
      })

      scope.run(() => {
        const tabItem = new TabItem(props, element, naming)

        expect(tabItem.tag).toBe('li')
        expect(tabItem.binds.type).toBeUndefined()
      })
    })

    it('should prioritize index over value for data-value and preserve numeric 0', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({
        index: 0,
        value: 'fallback'
      })

      scope.run(() => {
        const tabItem = new TabItem(props, element, naming)

        expect(tabItem.binds['data-value']).toBe(0)

        props.index = undefined
        props.value = 0
        expect(tabItem.binds['data-value']).toBe(0)

        props.value = 'tab-alpha'
        expect(tabItem.binds['data-value']).toBe('tab-alpha')
      })
    })
  })

  describe('ARIA attribute encapsulation', () => {
    it('should build aria attributes with role, selected, disabled, and labelledby', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({
        role: 'tab',
        label: 'Account',
        labelId: 'custom-tab-label',
        selected: true,
        disabled: true
      })

      scope.run(() => {
        const tabItem = new TabItem(props, element, naming)

        expect(tabItem.aria).toEqual({
          'tabindex': -1,
          'role': 'tab',
          'aria-labelledby': 'custom-tab-label',
          'aria-selected': 'true',
          'aria-disabled': 'true'
        })
      })
    })

    it('should resolve aria-labelledby when default slot is provided without label prop', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({ role: 'tab' })
      const slots: TabItemSlots = {
        default: () => 'Slotted Tab'
      }

      scope.run(() => {
        const tabItem = new TabItem(props, element, naming, undefined, slots)

        expect(tabItem.aria['aria-labelledby']).toBe(tabItem.i('label').id)
      })
    })

    it('should remove aria-labelledby reactively when label becomes undefined', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({ label: 'Initial' })

      scope.run(() => {
        const tabItem = new TabItem(props, element, naming)

        expect(tabItem.aria['aria-labelledby']).toBeTruthy()

        props.label = undefined
        expect(tabItem.aria['aria-labelledby']).toBeUndefined()
      })
    })
  })

  describe('Lazy loading & on-demand instantiation', () => {
    it('should not instantiate any sub-constructors eagerly on creation', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({})

      scope.run(() => {
        const tabItem = new InspectableTabItem(props, element, naming)

        expect(Object.keys(tabItem.instantiatedItems)).toHaveLength(0)
      })
    })

    it('should skip instantiating optional helpers when their canCreate predicates are false', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({ disabled: true })

      scope.run(() => {
        const tabItem = new InspectableTabItem(props, element, naming)

        expect(tabItem.aria['aria-labelledby']).toBeUndefined()
        expect(tabItem.callInstance('badge', item => item.render(), [])).toEqual([])
        expect(tabItem.callInstance('icon', item => item.render(), [])).toEqual([])
        expect(tabItem.callInstance('label', item => item.render(), [])).toEqual([])
        expect(tabItem.callInstance('ripple', item => item.render(), [])).toEqual([])
        expect(tabItem.callInstance('skeleton', item => item.classes)).toBeUndefined()

        expect(tabItem.instantiatedItems.badge).toBeUndefined()
        expect(tabItem.instantiatedItems.icon).toBeUndefined()
        expect(tabItem.instantiatedItems.label).toBeUndefined()
        expect(tabItem.instantiatedItems.progress).toBeUndefined()
        expect(tabItem.instantiatedItems.ripple).toBeUndefined()
        expect(tabItem.instantiatedItems.skeleton).toBeUndefined()
        expect(tabItem.instantiatedItems.enabled).toBeUndefined()
        expect(tabItem.instantiatedItems.event).toBeUndefined()
      })
    })

    it('should keep skeleton unallocated during label rendering unless isSkeleton is true', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({
        label: 'Metrics',
        isSkeleton: false
      })

      scope.run(() => {
        const tabItem = new InspectableTabItem(props, element, naming)

        const renderedWithoutSkeleton = tabItem.callInstance('label', item => item.render(), [])
        expect(renderedWithoutSkeleton).toHaveLength(1)
        expect(tabItem.instantiatedItems.label).toBeDefined()
        expect(tabItem.instantiatedItems.skeleton).toBeUndefined()

        props.isSkeleton = true
        const renderedWithSkeleton = tabItem.callInstance('label', item => item.render(), [])
        expect(renderedWithSkeleton).toHaveLength(1)
        expect(tabItem.instantiatedItems.skeleton).toBeDefined()
        expect(tabItem.i('skeleton').classes['d1-skeleton__textVariant']).toBe(true)
      })
    })

    it('should configure badge with static overlap and instantiate on demand', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({ badge: '3' })

      scope.run(() => {
        const tabItem = new InspectableTabItem(props, element, naming)

        expect(tabItem.instantiatedItems.badge).toBeUndefined()
        const badgeBinds = tabItem.callInstance('badge', item => item.binds.value)
        expect(tabItem.instantiatedItems.badge).toBeDefined()
        expect(badgeBinds?.overlap).toBe('static')
        expect(badgeBinds?.label).toBe('3')
      })
    })

    it('should evaluate static predicates accurately across empty and active props', () => {
      const emptyProps: TabItemPropsBasic = {}
      expect(BadgeInclude.is(emptyProps)).toBe(false)
      expect(IconTrailingInclude.is(emptyProps)).toBe(false)
      expect(LabelInclude.is(emptyProps)).toBe(false)
      expect(RippleInclude.is(emptyProps)).toBe(true)
      expect(RippleInclude.is({ disabled: true })).toBe(false)
      expect(RippleInclude.is({ readonly: true })).toBe(false)
      expect(SkeletonInclude.is(emptyProps)).toBe(false)

      const activeProps: TabItemPropsBasic = {
        badge: 0,
        icon: 'star',
        isSkeleton: true,
        label: 0
      }
      expect(BadgeInclude.is(activeProps)).toBe(true)
      expect(IconTrailingInclude.is(activeProps)).toBe(true)
      expect(LabelInclude.is(activeProps)).toBe(true)
      expect(SkeletonInclude.is(activeProps)).toBe(true)
    })
  })

  describe('Dependency Injection', () => {
    it('should allow overriding subordinate constructors via constructors parameter', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({ badge: '1' })

      let customBadgeCreated = false

      class CustomBadge {
        readonly is = true
        constructor() {
          customBadgeCreated = true
        }

        render() {
          return []
        }
      }

      scope.run(() => {
        const tabItem = new TabItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            badge: CustomBadge as unknown as typeof BadgeInclude
          }
        )

        expect(customBadgeCreated).toBe(false)
        expect(tabItem.callInstance('badge', item => item.render(), [])).toEqual([])
        expect(customBadgeCreated).toBe(true)
      })
    })
  })

  describe('Click and keyboard event handling', () => {
    it('should emit click and clickLite events with resolved value and detail', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({
        value: 'tab-settings',
        detail: { source: 'nav' }
      })
      const emitSpy = vi.fn()

      scope.run(() => {
        const tabItem = new TabItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const clickEvent = new MouseEvent('click')
        const onClick = tabItem.binds.onClick as (event: MouseEvent) => void
        onClick(clickEvent)

        expect(emitSpy).toHaveBeenCalledTimes(2)
        expect(emitSpy).toHaveBeenNthCalledWith(1, 'click', clickEvent, {
          type: 'click',
          value: 'tab-settings',
          detail: { source: 'nav' }
        })
        expect(emitSpy).toHaveBeenNthCalledWith(2, 'clickLite', {
          type: 'click',
          value: 'tab-settings',
          detail: { source: 'nav' }
        })
      })
    })

    it('should fall back to index in click payload when value is omitted', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({ index: 2 })
      const emitSpy = vi.fn()

      scope.run(() => {
        const tabItem = new TabItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const onClick = tabItem.binds.onClick as (event: MouseEvent) => void
        onClick(new MouseEvent('click'))

        expect(emitSpy).toHaveBeenCalledWith('clickLite', {
          type: 'click',
          value: 2,
          detail: undefined
        })
      })
    })

    it('should suppress click and keydown emissions when disabled or readonly', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: TabItemPropsBasic = reactive({
        value: 'blocked',
        disabled: true
      })
      const emitSpy = vi.fn()

      scope.run(() => {
        const tabItem = new TabItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const onClick = tabItem.binds.onClick as (event: MouseEvent) => void
        const onKeydown = tabItem.binds.onKeydown as (event: KeyboardEvent) => void

        onClick(new MouseEvent('click'))
        onKeydown(new KeyboardEvent('keydown', { key: 'Enter' }))
        expect(emitSpy).not.toHaveBeenCalled()

        props.disabled = false
        props.readonly = true
        onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()

        props.readonly = false
        props.loading = true
        expect(ProgressInclude.is(props)).toBe(true)
        expect(tabItem.classes['d1-tabItem--loading']).toBe(true)
        expect(tabItem.aria['aria-disabled']).toBe('true')
        onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()
      })
    })
  })
})
