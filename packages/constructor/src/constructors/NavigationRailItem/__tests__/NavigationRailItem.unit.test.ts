// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName, RouterItemRef } from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { BadgeInclude } from '../../Badge'
import { IconInclude, type IconPropsInclude } from '../../Icon'
import { ProgressInclude } from '../../Progress'
import { RippleInclude } from '../../Ripple'
import { SkeletonInclude } from '../../Skeleton'
import {
  NavigationRailItem,
  type NavigationRailItemConstructors
} from '../NavigationRailItem'
import type { NavigationRailItemProps } from '../props'

/**
 * Inspectable subclass of NavigationRailItem exposing internal lazy-instantiated instances.
 *
 * Проверяемый подкласс NavigationRailItem, предоставляющий доступ к внутренним лениво созданным экземплярам.
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

describe('NavigationRailItem (unit)', () => {
  const naming = new DesignName('d1.navigationRailItem')
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Tag, classes, binds, and ARIA', () => {
    it('should resolve tag from explicit tag, to, href, or default div', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({})

      scope.run(() => {
        const item = new NavigationRailItem(props, element, naming)
        expect(item.tag).toBe('div')

        props.href = 'https://example.com'
        expect(item.tag).toBe('a')

        props.href = undefined
        props.to = '/profile'
        expect(item.tag).toBe('a')

        props.to = { name: 'profile' }
        expect(item.tag).toBe('a')

        props.tag = 'button'
        expect(item.tag).toBe('button')
      })
    })

    it('should compute classes for selected and static link tag modifier', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({
        selected: false
      })

      scope.run(() => {
        const item = new NavigationRailItem(props, element, naming)
        expect(item.classes).toEqual({
          'd1-navigationRailItem--selected': false,
          'd1-a--static': true
        })

        props.selected = true
        expect(item.classes).toEqual({
          'd1-navigationRailItem--selected': true,
          'd1-a--static': true
        })
      })
    })

    it('should preserve numeric 0 and false values in binds and compute ARIA including loading', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({
        index: 0,
        value: 'fallback',
        divider: true,
        parent: 'nav-group',
        listId: 0,
        tabindex: 0,
        role: 'option',
        selected: false,
        disabled: true
      })

      scope.run(() => {
        const item = new NavigationRailItem(props, element, naming)

        expect(item.binds['data-value']).toBe(0)
        expect(item.binds['data-divider']).toBe('active')
        expect(item.binds['data-parent']).toBe('nav-group')
        expect(item.binds['data-list-id']).toBe(0)
        expect(item.binds.tabindex).toBe(0)
        expect(item.binds.role).toBe('option')
        expect(item.binds['aria-selected']).toBe('false')
        expect(item.binds['aria-disabled']).toBe('true')
        expect(typeof item.binds.onClick).toBe('function')
        expect(typeof item.binds.onKeydown).toBe('function')

        props.index = undefined
        props.value = 0
        props.divider = false
        props.disabled = false
        props.loading = true
        props.selected = true

        expect(item.binds['data-value']).toBe(0)
        expect(item.binds['data-divider']).toBeUndefined()
        expect(item.aria).toEqual({
          'tabindex': 0,
          'role': 'option',
          'aria-selected': 'true',
          'aria-disabled': 'true'
        })

        props.loading = false
        expect(item.aria).toEqual({
          'tabindex': 0,
          'role': 'option',
          'aria-selected': 'true'
        })
      })
    })

    it('should resolve href in binds from both href and route object to', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({
        href: '/inbox'
      })

      scope.run(() => {
        const item = new NavigationRailItem(props, element, naming)
        expect(item.binds.href).toBe('/inbox')

        const rawToHrefSpy = vi.spyOn(RouterItemRef, 'rawToHref').mockReturnValue({ href: '/inbox-route' })
        props.href = undefined
        props.to = { name: 'inbox' }
        expect(item.binds.href).toBe('/inbox-route')
        expect(rawToHrefSpy).toHaveBeenCalledWith({ name: 'inbox' })
      })
    })
  })

  describe('Lazy loading, canCreate guards, and on-demand instantiation', () => {
    it('should not instantiate any sub-constructors eagerly on creation or classes/tag reads', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({})

      scope.run(() => {
        const item = new InspectableNavigationRailItem(props, element, naming)

        expect(Object.keys(item.instantiatedItems)).toHaveLength(0)
        expect(item.tag).toBe('div')
        expect(item.classes).toBeDefined()
        expect(Object.keys(item.instantiatedItems)).toHaveLength(0)
      })
    })

    it('should keep progress uninstantiated during aria calculation unless loading is true', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const propsWithoutLoading = reactive<NavigationRailItemProps>({ loading: false })
      const propsWithLoading = reactive<NavigationRailItemProps>({ loading: true })

      scope.run(() => {
        const idleItem = new InspectableNavigationRailItem(propsWithoutLoading, element, naming)
        expect(idleItem.aria['aria-disabled']).toBeUndefined()
        expect(idleItem.hasInstance('progress')).toBe(false)

        const loadingItem = new InspectableNavigationRailItem(propsWithLoading, element, naming)
        expect(loadingItem.aria['aria-disabled']).toBe('true')
        expect(loadingItem.hasInstance('progress')).toBe(true)
      })
    })

    it('should respect canCreate via callInstance for all optional inclusions', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({
        disabled: true
      })

      scope.run(() => {
        const item = new InspectableNavigationRailItem(props, element, naming)

        expect(item.callInstance('badge', instance => instance.is, false)).toBe(false)
        expect(item.callInstance('icon', instance => instance.isIcon(), false)).toBe(false)
        expect(item.callInstance('label', instance => instance.is, false)).toBe(false)
        expect(item.callInstance('progress', instance => instance.is, false)).toBe(false)
        expect(item.callInstance('ripple', instance => instance.render(), [])).toEqual([])
        expect(item.callInstance('skeleton', instance => instance.classes, {})).toEqual({})

        expect(item.hasInstance('badge')).toBe(false)
        expect(item.hasInstance('icon')).toBe(false)
        expect(item.hasInstance('label')).toBe(false)
        expect(item.hasInstance('progress')).toBe(false)
        expect(item.hasInstance('ripple')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
      })
    })

    it('should compute badge overlap without instantiating icon when icon is omitted', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({
        badge: '4'
      })

      scope.run(() => {
        const item = new InspectableNavigationRailItem(props, element, naming)
        const badge = item.i('badge')

        expect(badge.binds.value.overlap).toBe('static')
        expect(item.hasInstance('icon')).toBe(false)

        props.icon = 'mail'
        expect(badge.binds.value.overlap).toBe('circular')
        expect(item.hasInstance('icon')).toBe(true)
      })
    })

    it('should keep skeleton uninstantiated when label is created without isSkeleton', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({
        label: 'Home'
      })

      scope.run(() => {
        const item = new InspectableNavigationRailItem(props, element, naming)
        const nodes = item.i('label').render()

        expect(nodes).toHaveLength(1)
        expect(item.hasInstance('label')).toBe(true)
        expect(item.hasInstance('skeleton')).toBe(false)
      })
    })

    it('should evaluate static predicates across empty and populated props', () => {
      expect(BadgeInclude.is({})).toBe(false)
      expect(BadgeInclude.is({ badge: 0 })).toBe(true)
      expect(BadgeInclude.is({ badgeDot: true })).toBe(true)

      expect(IconInclude.is({})).toBe(false)
      expect(IconInclude.is({ icon: 'home' })).toBe(true)

      expect(LabelInclude.is({})).toBe(false)
      expect(LabelInclude.is({ label: 0 })).toBe(true)
      expect(LabelInclude.is({}, { default: () => [] })).toBe(true)

      expect(ProgressInclude.is({})).toBe(false)
      expect(ProgressInclude.is({ loading: true })).toBe(true)

      expect(RippleInclude.is({})).toBe(true)
      expect(RippleInclude.is({ disabled: true })).toBe(false)
      expect(RippleInclude.is({ readonly: true })).toBe(false)
      expect(RippleInclude.is({ loading: true })).toBe(false)

      expect(SkeletonInclude.is({})).toBe(false)
      expect(SkeletonInclude.is({ isSkeleton: true })).toBe(true)
    })
  })

  describe('Dependency Injection', () => {
    it('should allow overriding all subordinate constructors via constructors parameter', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({
        badge: '1',
        icon: 'star',
        isSkeleton: true,
        label: 'Item',
        loading: true
      })

      class CustomBadge extends BadgeInclude {}
      class CustomEnabled extends EnabledInclude {}
      class CustomEvent extends EventClickInclude {}
      class CustomIcon<Props extends IconPropsInclude = IconPropsInclude> extends IconInclude<Props> {}
      class CustomLabel extends LabelInclude {}
      class CustomProgress extends ProgressInclude {}
      class CustomRipple extends RippleInclude {}
      class CustomSkeleton extends SkeletonInclude {}

      scope.run(() => {
        const item = new NavigationRailItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            badge: CustomBadge,
            enabled: CustomEnabled,
            event: CustomEvent,
            icon: CustomIcon,
            label: CustomLabel,
            progress: CustomProgress,
            ripple: CustomRipple,
            skeleton: CustomSkeleton
          }
        )

        expect(item.i('badge')).toBeInstanceOf(CustomBadge)
        expect(item.i('enabled')).toBeInstanceOf(CustomEnabled)
        expect(item.i('event')).toBeInstanceOf(CustomEvent)
        expect(item.i('icon')).toBeInstanceOf(CustomIcon)
        expect(item.i('label')).toBeInstanceOf(CustomLabel)
        expect(item.i('progress')).toBeInstanceOf(CustomProgress)
        expect(item.i('ripple')).toBeInstanceOf(CustomRipple)
        expect(item.i('skeleton')).toBeInstanceOf(CustomSkeleton)
      })
    })
  })

  describe('Click event handling and suppression', () => {
    it('should emit click and clickLite when enabled and suppress when disabled, readonly, or loading', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props = reactive<NavigationRailItemProps>({
        value: 'nav-home',
        detail: { id: 1 }
      })
      const emitSpy = vi.fn()

      scope.run(() => {
        const item = new NavigationRailItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const clickEvent = new MouseEvent('click')
        const onClick = item.binds.onClick as (event: MouseEvent) => void
        onClick(clickEvent)

        expect(emitSpy).toHaveBeenCalledTimes(2)
        expect(emitSpy).toHaveBeenNthCalledWith(1, 'click', clickEvent, {
          detail: { id: 1 },
          type: 'click',
          value: 'nav-home'
        })
        expect(emitSpy).toHaveBeenNthCalledWith(2, 'clickLite', {
          detail: { id: 1 },
          type: 'click',
          value: 'nav-home'
        })

        emitSpy.mockClear()
        props.disabled = true
        onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()

        props.disabled = false
        props.readonly = true
        onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()

        props.readonly = false
        props.loading = true
        onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()
      })
    })
  })
})
