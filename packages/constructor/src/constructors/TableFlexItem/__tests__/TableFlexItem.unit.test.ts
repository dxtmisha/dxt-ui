// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { SkeletonInclude } from '../../Skeleton'
import { TableItem, type TableItemConstructors } from '../../TableItem'
import { TableFlexItem } from '../TableFlexItem'
import type { TableFlexItemProps } from '../props'

class InspectableTableFlexItem extends TableFlexItem {
  get instantiatedItems(): Partial<Record<keyof TableItemConstructors, unknown>> {
    return this.instances
  }
}

describe('TableFlexItem (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.tableFlexItem')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Inheritance, lazy instantiation, canCreate guards, and Dependency Injection', () => {
    it('should extend TableItem and keep description, label, and skeleton uninstantiated when empty', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexItemProps>({})

      scope.run(() => {
        const item = new InspectableTableFlexItem(props, element, naming)

        expect(item).toBeInstanceOf(TableItem)
        expect(item.tag).toBe('div')
        expect(item.aria).toEqual({ role: 'cell' })
        expect(item.binds).toEqual({
          'data-colspan': undefined,
          'data-rowspan': undefined,
          'data-index': undefined,
          'role': 'cell'
        })
        expect('colspan' in item.binds).toBe(false)
        expect('rowspan' in item.binds).toBe(false)

        expect(item.callInstance('label', helper => helper.render(), [])).toEqual([])
        expect(item.callInstance('description', helper => helper.render(), [])).toEqual([])
        expect(item.callInstance('skeleton', helper => helper.classes)).toBeUndefined()

        expect(item.hasInstance('label')).toBe(false)
        expect(item.hasInstance('description')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
      })

      scope.stop()
    })

    it('should instantiate helpers on demand for numeric 0, text, slots, and isSkeleton', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexItemProps>({
        label: 0,
        description: 0,
        isSkeleton: false
      })

      scope.run(() => {
        const item = new InspectableTableFlexItem(props, element, naming)

        expect(item.callInstance('label', helper => helper.render(), [])).toHaveLength(1)
        expect(item.hasInstance('label')).toBe(true)
        expect(item.hasInstance('description')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)

        expect(item.callInstance('description', helper => helper.render(), [])).toHaveLength(1)
        expect(item.hasInstance('description')).toBe(true)
        expect(item.hasInstance('skeleton')).toBe(false)

        props.isSkeleton = true
        const skeletonClasses = item.callInstance('skeleton', helper => helper.classes)
        expect(item.hasInstance('skeleton')).toBe(true)
        expect(skeletonClasses).toEqual({ 'd1-skeleton__textVariant': true })
      })

      scope.stop()
    })

    it('should detect default and description slots in inherited canCreate guards', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexItemProps>({})

      scope.run(() => {
        const item = new InspectableTableFlexItem(
          props,
          element,
          naming,
          undefined,
          {
            default: () => 'Flex label slot',
            description: () => 'Flex description slot'
          }
        )

        expect(item.callInstance('label', helper => helper.render(), [])).toHaveLength(1)
        expect(item.callInstance('description', helper => helper.render(), [])).toHaveLength(1)
        expect(item.hasInstance('label')).toBe(true)
        expect(item.hasInstance('description')).toBe(true)
        expect(item.hasInstance('skeleton')).toBe(false)
      })

      scope.stop()
    })

    it('should support inherited constructors DI overrides for description, label, and skeleton', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexItemProps>({
        label: 'Title',
        description: 'Subtitle',
        isSkeleton: true
      })

      class CustomDescriptionInclude extends DescriptionInclude {}
      class CustomLabelInclude extends LabelInclude {}
      class CustomSkeletonInclude extends SkeletonInclude {}

      scope.run(() => {
        const item = new TableFlexItem(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            description: CustomDescriptionInclude,
            label: CustomLabelInclude,
            skeleton: CustomSkeletonInclude
          }
        )

        expect(item.i('description')).toBeInstanceOf(CustomDescriptionInclude)
        expect(item.i('label')).toBeInstanceOf(CustomLabelInclude)
        expect(item.i('skeleton')).toBeInstanceOf(CustomSkeletonInclude)
      })

      scope.stop()
    })
  })

  describe('ARIA, binds, tag resolution, and instance isolation', () => {
    it('should resolve aria attributes with role="cell" and reactive selected/disabled flags', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexItemProps>({})

      scope.run(() => {
        const item = new TableFlexItem(props, element, naming)
        expect(item.aria).toEqual({ role: 'cell' })

        props.disabled = false
        props.selected = false
        expect(item.aria).toEqual({ role: 'cell' })

        props.selected = true
        expect(item.aria).toEqual({
          'aria-selected': 'true',
          'role': 'cell'
        })

        props.disabled = true
        expect(item.aria).toEqual({
          'aria-selected': 'true',
          'aria-disabled': 'true',
          'role': 'cell'
        })

        props.selected = undefined
        props.disabled = undefined
        expect(item.aria).toEqual({ role: 'cell' })
      })

      scope.stop()
    })

    it('should compute binds with data-colspan, data-rowspan, numeric 0 index, and aria without leaking raw colspan/rowspan', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexItemProps>({
        colspan: 0,
        rowspan: '2',
        index: 0,
        selected: true
      })

      scope.run(() => {
        const item = new TableFlexItem(props, element, naming)
        expect(item.binds).toEqual({
          'data-colspan': 0,
          'data-rowspan': '2',
          'data-index': 0,
          'aria-selected': 'true',
          'role': 'cell'
        })
        expect('colspan' in item.binds).toBe(false)
        expect('rowspan' in item.binds).toBe(false)

        props.colspan = '3'
        props.rowspan = 4
        props.index = 'price'
        props.disabled = true
        expect(item.binds).toEqual({
          'data-colspan': '3',
          'data-rowspan': 4,
          'data-index': 'price',
          'aria-selected': 'true',
          'aria-disabled': 'true',
          'role': 'cell'
        })
      })

      scope.stop()
    })

    it('should resolve tag with fallback to div when undefined or empty string', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexItemProps>({})

      scope.run(() => {
        const item = new TableFlexItem(props, element, naming)
        expect(item.tag).toBe('div')

        props.tag = ''
        expect(item.tag).toBe('div')

        props.tag = 'span'
        expect(item.tag).toBe('span')

        props.tag = 'section'
        expect(item.tag).toBe('section')
      })

      scope.stop()
    })

    it('should maintain strict state isolation across independent instances', () => {
      const scope = effectScope()
      const propsFirst = reactive<TableFlexItemProps>({
        tag: 'article',
        colspan: 2,
        selected: true
      })
      const propsSecond = reactive<TableFlexItemProps>({
        index: 'second'
      })

      scope.run(() => {
        const first = new TableFlexItem(propsFirst, ref<HTMLElement>(), naming)
        const second = new TableFlexItem(propsSecond, ref<HTMLElement>(), naming)

        expect(first.tag).toBe('article')
        expect(second.tag).toBe('div')
        expect(first.binds['data-colspan']).toBe(2)
        expect(second.binds['data-colspan']).toBeUndefined()
        expect(first.aria['aria-selected']).toBe('true')
        expect(second.aria['aria-selected']).toBeUndefined()
      })

      scope.stop()
    })
  })
})
