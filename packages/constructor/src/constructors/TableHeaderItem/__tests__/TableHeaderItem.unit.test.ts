// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { ChipInclude } from '../../Chip'
import { SkeletonInclude } from '../../Skeleton'
import { TableItem } from '../../TableItem'
import { TooltipInclude } from '../../Tooltip'
import { TableHeaderItem } from '../TableHeaderItem'
import { TableHeaderItemSort } from '../TableHeaderItemSort'
import type { TableHeaderItemProps } from '../props'

describe('TableHeaderItem (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.tableHeaderItem')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Inheritance, lazy instantiation, canCreate guards, and Dependency Injection', () => {
    it('should inherit from TableItem and keep all 6 helpers uninstantiated when empty', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableHeaderItemProps>({})

      scope.run(() => {
        const item = new TableHeaderItem(props, element, naming)

        expect(item).toBeInstanceOf(TableItem)
        expect(item.tag).toBe('th')
        expect(item.aria).toEqual({})
        expect(item.ariaSort).toBeUndefined()
        expect(item.binds).toEqual({
          'colspan': undefined,
          'rowspan': undefined,
          'data-index': undefined,
          'scope': undefined
        })

        expect(item.callInstanceArray('chip', helper => helper.render())).toEqual([])
        expect(item.callInstanceArray('description', helper => helper.render())).toEqual([])
        expect(item.callInstanceArray('label', helper => helper.render())).toEqual([])
        expect(item.callInstance('skeleton', helper => helper.classes)).toBeUndefined()
        expect(item.callInstanceBoolean('sort', helper => helper.isSorted())).toBe(false)
        expect(item.callInstanceArray('tooltip', helper => helper.render())).toEqual([])

        expect(item.hasInstance('chip')).toBe(false)
        expect(item.hasInstance('description')).toBe(false)
        expect(item.hasInstance('label')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
        expect(item.hasInstance('sort')).toBe(false)
        expect(item.hasInstance('tooltip')).toBe(false)
      })

      scope.stop()
    })

    it('should lazily instantiate each helper only when its canCreate guard turns true', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableHeaderItemProps>({
        index: 'price'
      })

      scope.run(() => {
        const item = new TableHeaderItem(props, element, naming)

        props.showSort = true
        expect(item.callInstanceBoolean('sort', helper => helper.isSorted())).toBe(false)
        expect(item.hasInstance('sort')).toBe(true)
        expect(item.hasInstance('chip')).toBe(false)

        expect(item.callInstance('chip', helper => helper.binds.value)).toBeDefined()
        expect(item.hasInstance('chip')).toBe(true)
        expect(item.hasInstance('tooltip')).toBe(false)

        props.tooltipLabel = 'Price details'
        expect(item.callInstance('tooltip', helper => helper.binds.value)).toBeDefined()
        expect(item.hasInstance('tooltip')).toBe(true)

        props.label = 0
        expect(item.callInstanceArray('label', helper => helper.render())).toHaveLength(1)
        expect(item.hasInstance('label')).toBe(true)

        props.description = 0
        expect(item.callInstanceArray('description', helper => helper.render())).toHaveLength(1)
        expect(item.hasInstance('description')).toBe(true)
        expect(item.hasInstance('skeleton')).toBe(false)

        props.isSkeleton = true
        expect(item.callInstance('skeleton', helper => helper.classes)).toEqual({
          'd1-skeleton__textVariant': true
        })
        expect(item.hasInstance('skeleton')).toBe(true)
      })

      scope.stop()
    })

    it('should support constructors DI overrides for all 6 dependencies', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableHeaderItemProps>({
        label: 'Title',
        description: 'Subtitle',
        isSkeleton: true,
        showSort: true,
        tooltipLabel: 'Help'
      })

      class CustomChipInclude extends ChipInclude {}
      class CustomDescriptionInclude extends DescriptionInclude {}
      class CustomLabelInclude extends LabelInclude {}
      class CustomSkeletonInclude extends SkeletonInclude {}
      class CustomSort extends TableHeaderItemSort {}
      class CustomTooltipInclude extends TooltipInclude {}

      scope.run(() => {
        const item = new TableHeaderItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            chip: CustomChipInclude,
            description: CustomDescriptionInclude,
            label: CustomLabelInclude,
            skeleton: CustomSkeletonInclude,
            sort: CustomSort,
            tooltip: CustomTooltipInclude
          }
        )

        expect(item.i('chip')).toBeInstanceOf(CustomChipInclude)
        expect(item.i('description')).toBeInstanceOf(CustomDescriptionInclude)
        expect(item.i('label')).toBeInstanceOf(CustomLabelInclude)
        expect(item.i('skeleton')).toBeInstanceOf(CustomSkeletonInclude)
        expect(item.i('sort')).toBeInstanceOf(CustomSort)
        expect(item.i('tooltip')).toBeInstanceOf(CustomTooltipInclude)
      })

      scope.stop()
    })
  })

  describe('ARIA, ariaSort, binds, tag, and tooltipControlBind', () => {
    it('should resolve ariaSort for standalone sortDir, matching sortColumn, mismatched sortColumn, and numeric 0', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableHeaderItemProps>({})

      scope.run(() => {
        const item = new TableHeaderItem(props, element, naming)
        expect(item.ariaSort).toBeUndefined()

        // Standalone sortDir without sortColumn
        props.sortDir = 'asc'
        expect(item.ariaSort).toBe('ascending')
        expect(item.aria).toEqual({ 'aria-sort': 'ascending' })

        props.sortDir = 'desc'
        expect(item.ariaSort).toBe('descending')
        expect(item.aria).toEqual({ 'aria-sort': 'descending' })

        // Mismatched sortColumn omits aria-sort
        props.index = 'title'
        props.sortColumn = 'author'
        expect(item.ariaSort).toBeUndefined()
        expect(item.aria).toEqual({})

        // Matching sortColumn applies aria-sort
        props.sortColumn = 'title'
        expect(item.ariaSort).toBe('descending')

        // Numeric 0 index and sortColumn
        props.index = 0
        props.sortColumn = 0
        props.sortDir = 'asc'
        expect(item.ariaSort).toBe('ascending')

        // Missing index when sortColumn is set omits aria-sort
        props.index = undefined
        expect(item.ariaSort).toBeUndefined()
      })

      scope.stop()
    })

    it('should combine TableItem aria/binds with scope and aria-sort', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableHeaderItemProps>({
        colspan: 2,
        rowspan: 3,
        index: 'revenue',
        scope: 'colgroup',
        selected: true,
        disabled: true,
        sortColumn: 'revenue',
        sortDir: 'asc'
      })

      scope.run(() => {
        const item = new TableHeaderItem(props, element, naming)
        expect(item.aria).toEqual({
          'aria-selected': 'true',
          'aria-disabled': 'true',
          'aria-sort': 'ascending'
        })
        expect(item.binds).toEqual({
          'colspan': 2,
          'rowspan': 3,
          'data-index': 'revenue',
          'scope': 'colgroup',
          'aria-selected': 'true',
          'aria-disabled': 'true',
          'aria-sort': 'ascending'
        })
      })

      scope.stop()
    })

    it('should resolve tag with fallback to th and tooltipControlBind with fallback to help-circle', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableHeaderItemProps>({})

      scope.run(() => {
        const item = new TableHeaderItem(props, element, naming)
        expect(item.tag).toBe('th')
        expect(item.tooltipControlBind).toEqual({
          'class': 'd1-tableHeaderItem__tooltip',
          'icon': 'help-circle',
          'data-event-type': 'tooltip'
        })

        props.tag = ''
        expect(item.tag).toBe('th')

        props.tag = 'div'
        expect(item.tag).toBe('div')

        props.iconTooltip = 'help_outline'
        expect(item.tooltipControlBind).toEqual({
          'class': 'd1-tableHeaderItem__tooltip',
          'icon': 'help_outline',
          'data-event-type': 'tooltip'
        })
      })

      scope.stop()
    })
  })
})
