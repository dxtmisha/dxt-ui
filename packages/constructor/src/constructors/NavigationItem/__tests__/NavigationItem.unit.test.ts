// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { CaptionInclude } from '../../../classes/CaptionInclude'
import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { EnabledInclude } from '../../../classes/EnabledInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { LabelHighlightInclude } from '../../../classes/LabelHighlightInclude'
import { PrefixInclude } from '../../../classes/PrefixInclude'
import { SuffixInclude } from '../../../classes/SuffixInclude'
import { BadgeInclude } from '../../Badge'
import { IconTrailingInclude, type IconTrailingPropsInclude } from '../../Icon'
import { ListItem, ListItemLazy, ListItemLazyHeight } from '../../ListItem'
import { ProgressInclude } from '../../Progress'
import { RippleInclude } from '../../Ripple'
import { SkeletonInclude } from '../../Skeleton'
import { NavigationItem } from '../NavigationItem'
import { defaultsNavigationItem, type NavigationItemProps } from '../props'

class InspectableNavigationItem extends NavigationItem {}

describe('NavigationItem (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.navigationItem')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Inheritance, lazy instantiation, and Dependency Injection', () => {
    it('should inherit ListItem and keep optional helpers uninstantiated when not needed', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<NavigationItemProps>({})

      scope.run(() => {
        const item = new InspectableNavigationItem(props, element, naming)

        expect(item).toBeInstanceOf(NavigationItem)
        expect(item).toBeInstanceOf(ListItem)
        expect(item.tag).toBe('div')
        expect(item.isRender()).toBe(true)
        expect(item.classes).toEqual({
          'd1-navigationItem--selected': false,
          'd1-navigationItem--selectionStyle': false,
          'd1-navigationItem--description': false,
          'd1-a--static': true
        })
        expect(item.binds['data-highlight']).toBeUndefined()

        expect(item.hasInstance('badge')).toBe(false)
        expect(item.hasInstance('caption')).toBe(false)
        expect(item.hasInstance('description')).toBe(false)
        expect(item.hasInstance('icon')).toBe(false)
        expect(item.hasInstance('label')).toBe(false)
        expect(item.hasInstance('lazy')).toBe(false)
        expect(item.hasInstance('lazyHeight')).toBe(false)
        expect(item.hasInstance('prefix')).toBe(false)
        expect(item.hasInstance('progress')).toBe(false)
        expect(item.hasInstance('ripple')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
        expect(item.hasInstance('suffix')).toBe(false)
      })

      scope.stop()
    })

    it('should support constructors DI overrides typed via Partial<ListItemConstructors>', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<NavigationItemProps>({
        badge: '1',
        caption: 'Cap',
        description: 'Desc',
        icon: 'star',
        isSkeleton: true,
        label: 'Item',
        lazy: true,
        loading: true,
        prefix: 'Pre',
        suffix: 'Suf'
      })

      class CustomBadge extends BadgeInclude {}
      class CustomCaption extends CaptionInclude {}
      class CustomDescription extends DescriptionInclude {}
      class CustomEnabled extends EnabledInclude {}
      class CustomEvent extends EventClickInclude {}
      class CustomIcon<Props extends IconTrailingPropsInclude = IconTrailingPropsInclude> extends IconTrailingInclude<Props> {}
      class CustomLabel extends LabelHighlightInclude {}
      class CustomLazy extends ListItemLazy {}
      class CustomLazyHeight extends ListItemLazyHeight {}
      class CustomPrefix extends PrefixInclude {}
      class CustomProgress extends ProgressInclude {}
      class CustomRipple extends RippleInclude {}
      class CustomSkeleton extends SkeletonInclude {}
      class CustomSuffix extends SuffixInclude {}

      scope.run(() => {
        const item = new NavigationItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            badge: CustomBadge,
            caption: CustomCaption,
            description: CustomDescription,
            enabled: CustomEnabled,
            event: CustomEvent,
            icon: CustomIcon,
            label: CustomLabel,
            lazy: CustomLazy,
            lazyHeight: CustomLazyHeight,
            prefix: CustomPrefix,
            progress: CustomProgress,
            ripple: CustomRipple,
            skeleton: CustomSkeleton,
            suffix: CustomSuffix
          }
        )

        expect(item.i('badge')).toBeInstanceOf(CustomBadge)
        expect(item.i('caption')).toBeInstanceOf(CustomCaption)
        expect(item.i('description')).toBeInstanceOf(CustomDescription)
        expect(item.i('enabled')).toBeInstanceOf(CustomEnabled)
        expect(item.i('event')).toBeInstanceOf(CustomEvent)
        expect(item.i('icon')).toBeInstanceOf(CustomIcon)
        expect(item.i('label')).toBeInstanceOf(CustomLabel)
        expect(item.i('lazy')).toBeInstanceOf(CustomLazy)
        expect(item.i('lazyHeight')).toBeInstanceOf(CustomLazyHeight)
        expect(item.i('prefix')).toBeInstanceOf(CustomPrefix)
        expect(item.i('progress')).toBeInstanceOf(CustomProgress)
        expect(item.i('ripple')).toBeInstanceOf(CustomRipple)
        expect(item.i('skeleton')).toBeInstanceOf(CustomSkeleton)
        expect(item.i('suffix')).toBeInstanceOf(CustomSuffix)
      })

      scope.stop()
    })
  })

  describe('Defaults, token props, tag, classes, binds, and ARIA', () => {
    it('should expose expected defaultsNavigationItem values', () => {
      expect(defaultsNavigationItem).toEqual({
        tag: 'a',
        tabindex: '-1',
        role: 'option',
        selectionStyle: 'none',
        lazyCacheHeight: true,
        iconAlign: 'center',
        controlPosition: 'end'
      })
    })

    it('should resolve tag from explicit tag, defaultsNavigationItem, to, href, or fallback div', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<NavigationItemProps>({
        ...defaultsNavigationItem
      })

      scope.run(() => {
        const item = new NavigationItem(props, element, naming)
        expect(item.tag).toBe('a')

        props.tag = undefined
        expect(item.tag).toBe('div')

        props.to = '/dashboard'
        expect(item.tag).toBe('a')

        props.to = undefined
        props.href = '/settings'
        expect(item.tag).toBe('a')

        props.tag = 'button'
        expect(item.tag).toBe('button')
      })

      scope.stop()
    })

    it('should accept NavigationItemPropsToken fields and compute classes accurately', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<NavigationItemProps>({
        focus: true,
        open: true,
        selectedChild: true,
        readonly: false,
        disabled: false,
        iconTop: true,
        iconAlign: 'edge',
        controlPosition: 'start',
        fill: 'custom',
        divider: true,
        selected: true,
        description: 0
      })

      scope.run(() => {
        const item = new NavigationItem(props, element, naming)
        expect(item.classes).toEqual({
          'd1-navigationItem--selected': true,
          'd1-navigationItem--selectionStyle': false,
          'd1-navigationItem--description': true,
          'd1-a--static': true
        })
        expect(item.binds['data-divider']).toBe('active')

        props.selectionStyle = 'checkbox'
        expect(item.classes).toEqual({
          'd1-navigationItem--selected': false,
          'd1-navigationItem--selectionStyle': true,
          'd1-navigationItem--selectionStyle--checkbox': true,
          'd1-navigationItem--description': true,
          'd1-a--static': true
        })
      })

      scope.stop()
    })

    it('should preserve falsy zero/false values in binds and resolve ARIA attributes across roles', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<NavigationItemProps>({
        index: 0,
        value: 'fallback',
        divider: true,
        parent: 'nav-root',
        listId: 0,
        tabindex: 0,
        role: 'option',
        selected: false,
        disabled: true
      })

      scope.run(() => {
        const item = new NavigationItem(props, element, naming)

        expect(item.binds['data-value']).toBe(0)
        expect(item.binds['data-divider']).toBe('active')
        expect(item.binds['data-parent']).toBe('nav-root')
        expect(item.binds['data-list-id']).toBe(0)
        expect(item.aria).toEqual({
          'tabindex': 0,
          'role': 'option',
          'aria-disabled': 'true',
          'aria-selected': 'false'
        })

        props.index = undefined
        props.value = 0
        props.disabled = false
        props.loading = true
        props.role = 'menuitemradio'
        props.selected = true
        expect(item.binds['data-value']).toBe(0)
        expect(item.aria).toEqual({
          'tabindex': 0,
          'role': 'menuitemradio',
          'aria-disabled': 'true',
          'aria-checked': 'true'
        })

        props.role = 'menuitem'
        props.loading = false
        expect(item.aria).toEqual({
          'tabindex': 0,
          'role': 'menuitem',
          'aria-selected': 'true'
        })

        props.role = 'button'
        expect(item.aria).toEqual({
          tabindex: 0,
          role: 'button'
        })
      })

      scope.stop()
    })
  })

  describe('Filter mode and highlight behavior', () => {
    it('should evaluate isRender and data-highlight under filterMode', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<NavigationItemProps>({
        label: 'Analytics',
        highlight: 'ana',
        filterMode: false
      })

      scope.run(() => {
        const item = new InspectableNavigationItem(props, element, naming)

        expect(item.isRender()).toBe(true)
        expect(item.hasInstance('label')).toBe(false)

        props.filterMode = true
        expect(item.isRender()).toBe(true)
        expect(item.hasInstance('label')).toBe(true)
        expect(item.binds['data-highlight']).toBe('ana')

        props.highlight = 'missing'
        expect(item.isRender()).toBe(false)
        expect(item.binds['data-highlight']).toBeUndefined()
      })

      scope.stop()
    })
  })
})
