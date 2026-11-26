// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createApp,
  defineComponent,
  effectScope,
  h,
  nextTick,
  provide,
  reactive,
  ref
} from 'vue'
import { DesignName, type SortDir } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import type { SortColumn } from '../../../types/sortTypes'
import { ChipInclude } from '../../Chip'
import { SkeletonInclude } from '../../Skeleton'
import {
  TableHeaderItem,
  TableHeaderItemSort,
  type TableHeaderItemConstructors
} from '../../TableHeaderItem'
import { TableItem } from '../../TableItem'
import { TooltipInclude } from '../../Tooltip'
import { TableFlexHeaderItem } from '../TableFlexHeaderItem'
import type { TableFlexHeaderItemProps } from '../props'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTableFlexHeaderItem extends TableFlexHeaderItem {
  get instantiatedItems(): Partial<Record<keyof TableHeaderItemConstructors, unknown>> {
    return this.instances as Partial<Record<keyof TableHeaderItemConstructors, unknown>>
  }
}

describe('TableFlexHeaderItem (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.tableFlexHeaderItem')

  describe('Inheritance, lazy instantiation, canCreate guards, and Dependency Injection', () => {
    it('should extend TableHeaderItem and TableItem and keep all 6 helpers uninstantiated when empty', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexHeaderItemProps>({})

      scope.run(() => {
        const item = new InspectableTableFlexHeaderItem(props, element, naming)

        expect(item).toBeInstanceOf(TableHeaderItem)
        expect(item).toBeInstanceOf(TableItem)
        expect(item.tag).toBe('div')
        expect(item.ariaSort).toBeUndefined()
        expect(item.aria).toEqual({ role: 'columnheader' })
        expect(item.binds).toEqual({
          'data-colspan': undefined,
          'data-rowspan': undefined,
          'data-index': undefined,
          'role': 'columnheader'
        })
        expect('colspan' in item.binds).toBe(false)
        expect('rowspan' in item.binds).toBe(false)
        expect('scope' in item.binds).toBe(false)

        expect(item.callInstance('chip', helper => helper.render(), [])).toEqual([])
        expect(item.callInstance('description', helper => helper.render(), [])).toEqual([])
        expect(item.callInstance('label', helper => helper.render(), [])).toEqual([])
        expect(item.callInstance('skeleton', helper => helper.classes)).toBeUndefined()
        expect(item.callInstance('sort', helper => helper.isSorted(), false)).toBe(false)
        expect(item.callInstance('tooltip', helper => helper.render(), [])).toEqual([])

        expect(item.hasInstance('chip')).toBe(false)
        expect(item.hasInstance('description')).toBe(false)
        expect(item.hasInstance('label')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
        expect(item.hasInstance('sort')).toBe(false)
        expect(item.hasInstance('tooltip')).toBe(false)
      })

      scope.stop()
    })

    it('should lazily instantiate helpers on demand when props or slots satisfy canCreate guards', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexHeaderItemProps>({
        label: 0,
        description: 0,
        showSort: true,
        tooltipLabel: 'Column hint',
        isSkeleton: false
      })

      scope.run(() => {
        const item = new InspectableTableFlexHeaderItem(props, element, naming)

        expect(item.callInstance('label', helper => helper.render(), [])).toHaveLength(1)
        expect(item.hasInstance('label')).toBe(true)
        expect(item.hasInstance('description')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
        expect(item.hasInstance('sort')).toBe(false)
        expect(item.hasInstance('chip')).toBe(false)
        expect(item.hasInstance('tooltip')).toBe(false)

        expect(item.callInstance('description', helper => helper.render(), [])).toHaveLength(1)
        expect(item.hasInstance('description')).toBe(true)

        expect(item.callInstance('sort', helper => helper.isSorted(), false)).toBe(false)
        expect(item.hasInstance('sort')).toBe(true)

        item.callInstance('chip', helper => helper.render(), [])
        expect(item.hasInstance('chip')).toBe(true)

        item.callInstance('tooltip', helper => helper.render(), [])
        expect(item.hasInstance('tooltip')).toBe(true)

        props.isSkeleton = true
        const skeletonClasses = item.callInstance('skeleton', helper => helper.classes)
        expect(item.hasInstance('skeleton')).toBe(true)
        expect(skeletonClasses).toEqual({ 'd1-skeleton__textVariant': true })
      })

      scope.stop()
    })

    it('should support inherited constructors DI overrides for all 6 helpers', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexHeaderItemProps>({
        label: 'Title',
        description: 'Subtitle',
        showSort: true,
        tooltipLabel: 'Help',
        isSkeleton: true
      })

      class CustomChipInclude extends ChipInclude {}
      class CustomDescriptionInclude extends DescriptionInclude {}
      class CustomLabelInclude extends LabelInclude {}
      class CustomSkeletonInclude extends SkeletonInclude {}
      class CustomSort extends TableHeaderItemSort {}
      class CustomTooltipInclude extends TooltipInclude {}

      scope.run(() => {
        const item = new TableFlexHeaderItem(
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

  describe('ARIA, binds, tag resolution, tooltipControlBind, and instance isolation', () => {
    it('should resolve aria attributes with role="columnheader", selected, disabled, and sort state', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexHeaderItemProps>({
        index: 'price'
      })

      scope.run(() => {
        const item = new TableFlexHeaderItem(props, element, naming)
        expect(item.aria).toEqual({ role: 'columnheader' })

        props.selected = true
        props.disabled = true
        props.sortColumn = 'price'
        props.sortDir = 'asc'
        expect(item.aria).toEqual({
          'aria-selected': 'true',
          'aria-disabled': 'true',
          'aria-sort': 'ascending',
          'role': 'columnheader'
        })

        props.sortDir = 'desc'
        expect(item.aria['aria-sort']).toBe('descending')

        props.sortColumn = 'other'
        expect(item.aria['aria-sort']).toBeUndefined()

        props.selected = false
        props.disabled = false
        props.sortColumn = undefined
        props.sortDir = undefined
        expect(item.aria).toEqual({ role: 'columnheader' })

        props.scope = 'row'
        expect(item.aria).toEqual({ role: 'rowheader' })

        props.scope = 'rowgroup'
        expect(item.aria).toEqual({ role: 'rowheader' })

        props.scope = 'colgroup'
        expect(item.aria).toEqual({ role: 'columnheader' })

        props.scope = 'col'
        expect(item.aria).toEqual({ role: 'columnheader' })
      })

      scope.stop()
    })

    it('should prioritize injected sortColumn and sortDir refs for aria-sort inside Vue component context', async () => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      mountedCleanups.push(() => host.remove())

      const sortColumn = ref<SortColumn | undefined>('amount')
      const sortDir = ref<SortDir | undefined>('asc')
      let capturedItem!: TableFlexHeaderItem

      const Child = defineComponent({
        setup() {
          const props = reactive<TableFlexHeaderItemProps>({
            index: 'amount',
            sortColumn: 'fallback',
            sortDir: 'desc'
          })
          capturedItem = new TableFlexHeaderItem(props, ref<HTMLElement>(), naming)
          return () => h('div')
        }
      })

      const Parent = defineComponent({
        setup() {
          provide('sortColumn', sortColumn)
          provide('sortDir', sortDir)
          return () => h(Child)
        }
      })

      const app = createApp(Parent)
      app.mount(host)
      mountedCleanups.push(() => app.unmount())
      await nextTick()

      expect(capturedItem.aria).toEqual({
        'aria-sort': 'ascending',
        'role': 'columnheader'
      })

      sortDir.value = 'desc'
      expect(capturedItem.aria).toEqual({
        'aria-sort': 'descending',
        'role': 'columnheader'
      })

      sortColumn.value = 'other'
      expect(capturedItem.aria).toEqual({
        role: 'columnheader'
      })
    })

    it('should compute binds with data-colspan, data-rowspan, numeric 0 index, and aria without leaking raw table attrs', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexHeaderItemProps>({
        colspan: 0,
        rowspan: '2',
        index: 0,
        scope: 'col',
        selected: true,
        sortColumn: 0,
        sortDir: 'asc'
      })

      scope.run(() => {
        const item = new TableFlexHeaderItem(props, element, naming)
        expect(item.binds).toEqual({
          'data-colspan': 0,
          'data-rowspan': '2',
          'data-index': 0,
          'aria-selected': 'true',
          'aria-sort': 'ascending',
          'role': 'columnheader'
        })
        expect('colspan' in item.binds).toBe(false)
        expect('rowspan' in item.binds).toBe(false)
        expect('scope' in item.binds).toBe(false)

        props.colspan = '3'
        props.rowspan = 4
        props.index = 'revenue'
        props.disabled = true
        props.sortColumn = 'revenue'
        props.sortDir = 'desc'
        expect(item.binds).toEqual({
          'data-colspan': '3',
          'data-rowspan': 4,
          'data-index': 'revenue',
          'aria-selected': 'true',
          'aria-disabled': 'true',
          'aria-sort': 'descending',
          'role': 'columnheader'
        })
      })

      scope.stop()
    })

    it('should resolve tag with fallback to div when undefined or empty string and compute tooltipControlBind', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexHeaderItemProps>({})

      scope.run(() => {
        const item = new TableFlexHeaderItem(props, element, naming)
        expect(item.tag).toBe('div')
        expect(item.tooltipControlBind).toEqual({
          'class': 'd1-tableFlexHeaderItem__tooltip',
          'icon': 'help-circle',
          'data-event-type': 'tooltip'
        })

        props.tag = ''
        expect(item.tag).toBe('div')

        props.tag = 'section'
        props.iconTooltip = 'info'
        expect(item.tag).toBe('section')
        expect(item.tooltipControlBind).toEqual({
          'class': 'd1-tableFlexHeaderItem__tooltip',
          'icon': 'info',
          'data-event-type': 'tooltip'
        })
      })

      scope.stop()
    })

    it('should maintain strict state isolation across independent instances', () => {
      const scope = effectScope()
      const propsFirst = reactive<TableFlexHeaderItemProps>({
        tag: 'article',
        colspan: 2,
        index: 'first',
        selected: true,
        sortColumn: 'first',
        sortDir: 'asc'
      })
      const propsSecond = reactive<TableFlexHeaderItemProps>({
        index: 'second'
      })

      scope.run(() => {
        const first = new TableFlexHeaderItem(propsFirst, ref<HTMLElement>(), naming)
        const second = new TableFlexHeaderItem(propsSecond, ref<HTMLElement>(), naming)

        expect(first.tag).toBe('article')
        expect(second.tag).toBe('div')
        expect(first.binds['data-colspan']).toBe(2)
        expect(second.binds['data-colspan']).toBeUndefined()
        expect(first.aria['aria-sort']).toBe('ascending')
        expect(second.aria['aria-sort']).toBeUndefined()
        expect(first.aria['aria-selected']).toBe('true')
        expect(second.aria['aria-selected']).toBeUndefined()
      })

      scope.stop()
    })
  })
})
