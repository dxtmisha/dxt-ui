// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { LabelInclude } from '../../../classes/LabelInclude'
import { BadgeInclude } from '../../Badge'
import { IconTrailingInclude } from '../../Icon'
import { RippleInclude } from '../../Ripple'
import { SkeletonInclude } from '../../Skeleton'
import { defaultsTabItem, TabItem, type TabItemConstructors } from '../../TabItem'
import { defaultsSegmentControlItem, type SegmentControlItemPropsBasic } from '../props'
import { SegmentControlItem } from '../SegmentControlItem'
import type { SegmentControlItemSlots } from '../types'

/**
 * Inspectable subclass of SegmentControlItem exposing internal lazy-instantiated instances.
 *
 * Проверяемый подкласс SegmentControlItem, предоставляющий доступ к внутренним лениво созданным экземплярам.
 */
class InspectableSegmentControlItem extends SegmentControlItem {
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

describe('SegmentControlItem (unit)', () => {
  const naming = new DesignName('d1.segmentControlItem')
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Inheritance and default contract', () => {
    it('should inherit TabItem logic and defaultsSegmentControlItem should inherit defaultsTabItem', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({
        ...defaultsSegmentControlItem
      })

      expect(defaultsSegmentControlItem).toMatchObject(defaultsTabItem)
      expect(defaultsSegmentControlItem.role).toBe('tab')

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(props, element, naming)

        expect(segmentControlItem).toBeInstanceOf(SegmentControlItem)
        expect(segmentControlItem).toBeInstanceOf(TabItem)
        expect(segmentControlItem.tag).toBe('button')
        expect(segmentControlItem.binds.type).toBe('button')
        expect(segmentControlItem.binds.tabindex).toBe(-1)
        expect(segmentControlItem.binds.role).toBe('tab')
        expect(segmentControlItem.binds['aria-selected']).toBe('false')
        expect(segmentControlItem.binds['aria-disabled']).toBeUndefined()
        expect(segmentControlItem.binds['aria-labelledby']).toBeUndefined()
        expect(segmentControlItem.binds['data-value']).toBeUndefined()
        expect(typeof segmentControlItem.binds.onClick).toBe('function')
        expect(typeof segmentControlItem.binds.onKeydown).toBe('function')
      })
    })

    it('should keep state isolated between independent SegmentControlItem instances', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const firstProps: SegmentControlItemPropsBasic = reactive({
        ...defaultsSegmentControlItem,
        label: 'First',
        selected: true,
        value: 'first'
      })
      const secondProps: SegmentControlItemPropsBasic = reactive({
        ...defaultsSegmentControlItem,
        label: 'Second',
        selected: false,
        value: 'second'
      })

      scope.run(() => {
        const firstItem = new SegmentControlItem(firstProps, ref<HTMLDivElement>(), naming)
        const secondItem = new SegmentControlItem(secondProps, ref<HTMLDivElement>(), naming)

        expect(firstItem.aria['aria-selected']).toBe('true')
        expect(secondItem.aria['aria-selected']).toBe('false')
        expect(firstItem.binds['data-value']).toBe('first')
        expect(secondItem.binds['data-value']).toBe('second')
        expect(firstItem.i('label').id).not.toBe(secondItem.i('label').id)
      })
    })
  })

  describe('Tag resolution and value bindings', () => {
    it('should resolve tag to "a" when href or to is provided and omit type attribute', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({ href: 'https://example.com' })

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(props, element, naming)

        expect(segmentControlItem.tag).toBe('a')
        expect(segmentControlItem.binds.href).toBe('https://example.com')
        expect(segmentControlItem.binds.type).toBeUndefined()

        props.href = undefined
        props.to = '/analytics'
        expect(segmentControlItem.tag).toBe('a')
        expect(segmentControlItem.binds.type).toBeUndefined()

        props.to = { name: 'analytics' }
        expect(segmentControlItem.tag).toBe('a')
      })
    })

    it('should prioritize explicit tag prop over href and to', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({
        href: 'https://example.com',
        to: '/analytics',
        tag: 'li'
      })

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(props, element, naming)

        expect(segmentControlItem.tag).toBe('li')
        expect(segmentControlItem.binds.type).toBeUndefined()
      })
    })

    it('should prioritize index over value for data-value and preserve numeric 0', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({
        index: 0,
        value: 'fallback'
      })

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(props, element, naming)

        expect(segmentControlItem.binds['data-value']).toBe(0)

        props.index = undefined
        props.value = 0
        expect(segmentControlItem.binds['data-value']).toBe(0)

        props.value = 'segment-alpha'
        expect(segmentControlItem.binds['data-value']).toBe('segment-alpha')
      })
    })
  })

  describe('ARIA attribute encapsulation', () => {
    it('should build aria attributes with role, selected, disabled, and labelledby', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({
        ...defaultsSegmentControlItem,
        label: 'Day',
        labelId: 'custom-segment-label',
        selected: true,
        disabled: true
      })

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(props, element, naming)

        expect(segmentControlItem.aria).toEqual({
          'tabindex': -1,
          'role': 'tab',
          'aria-labelledby': 'custom-segment-label',
          'aria-selected': 'true',
          'aria-disabled': 'true'
        })
      })
    })

    it('should resolve aria-labelledby when default slot is provided without label prop', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({ ...defaultsSegmentControlItem })
      const slots: SegmentControlItemSlots = {
        default: () => 'Slotted Segment'
      }

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(props, element, naming, undefined, slots)

        expect(segmentControlItem.aria['aria-labelledby']).toBe(segmentControlItem.i('label').id)
      })
    })

    it('should remove aria-labelledby reactively when label becomes undefined', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({ label: 'Initial' })

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(props, element, naming)

        expect(segmentControlItem.aria['aria-labelledby']).toBeTruthy()

        props.label = undefined
        expect(segmentControlItem.aria['aria-labelledby']).toBeUndefined()
      })
    })
  })

  describe('Lazy loading & on-demand instantiation', () => {
    it('should not instantiate any sub-constructors eagerly on creation', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({})

      scope.run(() => {
        const segmentControlItem = new InspectableSegmentControlItem(props, element, naming)

        expect(Object.keys(segmentControlItem.instantiatedItems)).toHaveLength(0)
      })
    })

    it('should skip instantiating optional helpers when their canCreate predicates are false', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({ disabled: true })

      scope.run(() => {
        const segmentControlItem = new InspectableSegmentControlItem(props, element, naming)

        expect(segmentControlItem.aria['aria-labelledby']).toBeUndefined()
        expect(segmentControlItem.callInstance('badge', item => item.render(), [])).toEqual([])
        expect(segmentControlItem.callInstance('icon', item => item.render(), [])).toEqual([])
        expect(segmentControlItem.callInstance('label', item => item.render(), [])).toEqual([])
        expect(segmentControlItem.callInstance('ripple', item => item.render(), [])).toEqual([])
        expect(segmentControlItem.callInstance('skeleton', item => item.classes)).toBeUndefined()

        expect(segmentControlItem.instantiatedItems.badge).toBeUndefined()
        expect(segmentControlItem.instantiatedItems.icon).toBeUndefined()
        expect(segmentControlItem.instantiatedItems.label).toBeUndefined()
        expect(segmentControlItem.instantiatedItems.ripple).toBeUndefined()
        expect(segmentControlItem.instantiatedItems.skeleton).toBeUndefined()
        expect(segmentControlItem.instantiatedItems.enabled).toBeUndefined()
        expect(segmentControlItem.instantiatedItems.event).toBeUndefined()
      })
    })

    it('should keep skeleton unallocated during label rendering unless isSkeleton is true', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({
        label: 'Week',
        isSkeleton: false
      })

      scope.run(() => {
        const segmentControlItem = new InspectableSegmentControlItem(props, element, naming)

        const renderedWithoutSkeleton = segmentControlItem.callInstance('label', item => item.render(), [])
        expect(renderedWithoutSkeleton).toHaveLength(1)
        expect(segmentControlItem.instantiatedItems.label).toBeDefined()
        expect(segmentControlItem.instantiatedItems.skeleton).toBeUndefined()

        props.isSkeleton = true
        const renderedWithSkeleton = segmentControlItem.callInstance('label', item => item.render(), [])
        expect(renderedWithSkeleton).toHaveLength(1)
        expect(segmentControlItem.instantiatedItems.skeleton).toBeDefined()
        expect(segmentControlItem.i('skeleton').classes['d1-skeleton__textVariant']).toBe(true)
      })
    })

    it('should configure badge with static overlap and instantiate on demand', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({ badge: '9+' })

      scope.run(() => {
        const segmentControlItem = new InspectableSegmentControlItem(props, element, naming)

        expect(segmentControlItem.instantiatedItems.badge).toBeUndefined()
        const badgeBinds = segmentControlItem.callInstance('badge', item => item.binds.value)
        expect(segmentControlItem.instantiatedItems.badge).toBeDefined()
        expect(badgeBinds?.overlap).toBe('static')
        expect(badgeBinds?.label).toBe('9+')
      })
    })

    it('should evaluate static predicates accurately across empty and active props', () => {
      const emptyProps: SegmentControlItemPropsBasic = {}
      expect(BadgeInclude.is(emptyProps)).toBe(false)
      expect(IconTrailingInclude.is(emptyProps)).toBe(false)
      expect(LabelInclude.is(emptyProps)).toBe(false)
      expect(RippleInclude.is(emptyProps)).toBe(true)
      expect(RippleInclude.is({ disabled: true })).toBe(false)
      expect(RippleInclude.is({ readonly: true })).toBe(false)
      expect(SkeletonInclude.is(emptyProps)).toBe(false)

      const activeProps: SegmentControlItemPropsBasic = {
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
      const props: SegmentControlItemPropsBasic = reactive({ badge: '1' })

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
        const segmentControlItem = new SegmentControlItem(
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
        expect(segmentControlItem.callInstance('badge', item => item.render(), [])).toEqual([])
        expect(customBadgeCreated).toBe(true)
      })
    })
  })

  describe('Click and keyboard event handling', () => {
    it('should emit click and clickLite events with resolved value and detail', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({
        value: 'segment-year',
        detail: { source: 'toolbar' }
      })
      const emitSpy = vi.fn()

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const clickEvent = new MouseEvent('click')
        const onClick = segmentControlItem.binds.onClick as (event: MouseEvent) => void
        onClick(clickEvent)

        expect(emitSpy).toHaveBeenCalledTimes(2)
        expect(emitSpy).toHaveBeenNthCalledWith(1, 'click', clickEvent, {
          type: 'click',
          value: 'segment-year',
          detail: { source: 'toolbar' }
        })
        expect(emitSpy).toHaveBeenNthCalledWith(2, 'clickLite', {
          type: 'click',
          value: 'segment-year',
          detail: { source: 'toolbar' }
        })
      })
    })

    it('should fall back to index in click payload when value is omitted', () => {
      const scope = effectScope()
      cleanups.push(() => scope.stop())
      const element = ref<HTMLDivElement>()
      const props: SegmentControlItemPropsBasic = reactive({ index: 2 })
      const emitSpy = vi.fn()

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const onClick = segmentControlItem.binds.onClick as (event: MouseEvent) => void
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
      const props: SegmentControlItemPropsBasic = reactive({
        value: 'blocked',
        disabled: true
      })
      const emitSpy = vi.fn()

      scope.run(() => {
        const segmentControlItem = new SegmentControlItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const onClick = segmentControlItem.binds.onClick as (event: MouseEvent) => void
        const onKeydown = segmentControlItem.binds.onKeydown as (event: KeyboardEvent) => void

        onClick(new MouseEvent('click'))
        onKeydown(new KeyboardEvent('keydown', { key: 'Enter' }))
        expect(emitSpy).not.toHaveBeenCalled()

        props.disabled = false
        props.readonly = true
        onClick(new MouseEvent('click'))
        expect(emitSpy).not.toHaveBeenCalled()
      })
    })
  })
})
