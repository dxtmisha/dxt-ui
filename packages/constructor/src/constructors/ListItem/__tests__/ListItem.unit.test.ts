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
import { ProgressInclude } from '../../Progress'
import { RippleInclude } from '../../Ripple'
import { SkeletonInclude } from '../../Skeleton'
import { ListItem, type ListItemConstructors } from '../ListItem'
import type { ListItemProps } from '../props'

class InspectableListItem extends ListItem {
  get instantiatedItems(): Partial<Record<keyof ListItemConstructors, unknown>> {
    return this.instances
  }
}

describe('ListItem (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.listItem')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should keep optional helpers uninstantiated when not needed', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<ListItemProps>({})

      scope.run(() => {
        const item = new InspectableListItem(props, element, naming)

        expect(item.tag).toBe('div')
        expect(item.isRender()).toBe(true)
        expect(item.classes).toEqual({
          'd1-listItem--selected': false,
          'd1-listItem--selectionStyle': false,
          'd1-listItem--description': false,
          'd1-a--static': true
        })
        expect(item.binds['data-highlight']).toBeUndefined()

        expect(item.hasInstance('badge')).toBe(false)
        expect(item.hasInstance('caption')).toBe(false)
        expect(item.hasInstance('description')).toBe(false)
        expect(item.hasInstance('icon')).toBe(false)
        expect(item.hasInstance('label')).toBe(false)
        expect(item.hasInstance('prefix')).toBe(false)
        expect(item.hasInstance('progress')).toBe(false)
        expect(item.hasInstance('ripple')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
        expect(item.hasInstance('suffix')).toBe(false)
      })

      scope.stop()
    })

    it('should support constructors DI overrides for all dependencies', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<ListItemProps>({
        badge: '1',
        caption: 'Cap',
        description: 'Desc',
        icon: 'star',
        isSkeleton: true,
        label: 'Item',
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
      class CustomPrefix extends PrefixInclude {}
      class CustomProgress extends ProgressInclude {}
      class CustomRipple extends RippleInclude {}
      class CustomSkeleton extends SkeletonInclude {}
      class CustomSuffix extends SuffixInclude {}

      scope.run(() => {
        const item = new ListItem(
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
        expect(item.i('prefix')).toBeInstanceOf(CustomPrefix)
        expect(item.i('progress')).toBeInstanceOf(CustomProgress)
        expect(item.i('ripple')).toBeInstanceOf(CustomRipple)
        expect(item.i('skeleton')).toBeInstanceOf(CustomSkeleton)
        expect(item.i('suffix')).toBeInstanceOf(CustomSuffix)
      })

      scope.stop()
    })
  })

  describe('Tag, classes, binds, and ARIA', () => {
    it('should resolve tag from explicit tag, href, or default div', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<ListItemProps>({})

      scope.run(() => {
        const item = new ListItem(props, element, naming)
        expect(item.tag).toBe('div')

        props.href = '/about'
        expect(item.tag).toBe('a')

        props.tag = 'button'
        expect(item.tag).toBe('button')
      })

      scope.stop()
    })

    it('should compute classes for selected, selectionStyle, and description including numeric zero', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<ListItemProps>({
        selected: true,
        description: 0
      })

      scope.run(() => {
        const item = new ListItem(props, element, naming)
        expect(item.classes).toEqual({
          'd1-listItem--selected': true,
          'd1-listItem--selectionStyle': false,
          'd1-listItem--description': true,
          'd1-a--static': true
        })

        props.selectionStyle = 'checkbox'
        expect(item.classes).toEqual({
          'd1-listItem--selected': false,
          'd1-listItem--selectionStyle': true,
          'd1-listItem--selectionStyle--checkbox': true,
          'd1-listItem--description': true,
          'd1-a--static': true
        })

        props.selectionStyle = 'none'
        expect(item.classes['d1-listItem--selected']).toBe(true)
        expect(item.classes['d1-listItem--selectionStyle']).toBe(false)
        expect(item.classes['d1-listItem--selectionStyle--none']).toBe(true)
      })

      scope.stop()
    })

    it('should preserve falsy zero/false values in binds and resolve ARIA attributes for roles and loading', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<ListItemProps>({
        index: 0,
        value: 'fallback',
        divider: true,
        parent: 'root',
        listId: 0,
        tabindex: 0,
        role: 'option',
        selected: false,
        disabled: true
      })

      scope.run(() => {
        const item = new ListItem(props, element, naming)

        expect(item.binds['data-value']).toBe(0)
        expect(item.binds['data-divider']).toBe('active')
        expect(item.binds['data-parent']).toBe('root')
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
        props.role = 'menuitemcheckbox'
        props.selected = true
        expect(item.binds['data-value']).toBe(0)
        expect(item.aria).toEqual({
          'tabindex': 0,
          'role': 'menuitemcheckbox',
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
      const props = reactive<ListItemProps>({
        label: 'Apple Juice',
        highlight: 'apple',
        filterMode: false
      })

      scope.run(() => {
        const item = new InspectableListItem(props, element, naming)

        expect(item.isRender()).toBe(true)
        expect(item.hasInstance('label')).toBe(false)

        props.filterMode = true
        expect(item.isRender()).toBe(true)
        expect(item.hasInstance('label')).toBe(true)
        expect(item.binds['data-highlight']).toBe('apple')

        props.highlight = 'missing'
        expect(item.isRender()).toBe(false)
        expect(item.binds['data-highlight']).toBeUndefined()
      })

      scope.stop()
    })

    it('should handle filterMode without label when highlight is short vs active', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<ListItemProps>({
        filterMode: true,
        highlight: 'a',
        highlightLengthStart: 2
      })

      scope.run(() => {
        const item = new InspectableListItem(props, element, naming)
        expect(item.isRender()).toBe(true)
        expect(item.hasInstance('label')).toBe(false)

        props.highlight = 'ab'
        expect(item.isRender()).toBe(false)
      })

      scope.stop()
    })
  })
})
