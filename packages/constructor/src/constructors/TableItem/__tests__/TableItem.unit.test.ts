// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { SkeletonInclude } from '../../Skeleton'
import { TableItem, type TableItemConstructors } from '../TableItem'
import type { TableItemProps } from '../props'

class InspectableTableItem extends TableItem {
  get instantiatedItems(): Partial<Record<keyof TableItemConstructors, unknown>> {
    return this.instances
  }
}

describe('TableItem (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.tableItem')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation, canCreate guards, and Dependency Injection', () => {
    it('should keep description, label, and skeleton uninstantiated when empty', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableItemProps>({})

      scope.run(() => {
        const item = new InspectableTableItem(props, element, naming)

        expect(item.tag).toBe('td')
        expect(item.aria).toEqual({})
        expect(item.binds).toEqual({
          'colspan': undefined,
          'rowspan': undefined,
          'data-index': undefined
        })
        expect(item.callInstance('label', helper => helper.render(), [])).toEqual([])
        expect(item.callInstance('description', helper => helper.render(), [])).toEqual([])
        expect(item.callInstance('skeleton', helper => helper.classes)).toBeUndefined()

        expect(item.hasInstance('label')).toBe(false)
        expect(item.hasInstance('description')).toBe(false)
        expect(item.hasInstance('skeleton')).toBe(false)
      })

      scope.stop()
    })

    it('should instantiate helpers on demand when numeric 0, text, slots, or isSkeleton are provided', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableItemProps>({
        label: 0,
        description: 0,
        isSkeleton: false
      })

      scope.run(() => {
        const item = new InspectableTableItem(props, element, naming)

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

    it('should detect default and description slots in canCreate guards', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableItemProps>({})

      scope.run(() => {
        const item = new InspectableTableItem(
          props,
          element,
          naming,
          undefined,
          {
            default: () => 'Label slot',
            description: () => 'Description slot'
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

    it('should support constructors DI overrides for description, label, and skeleton', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableItemProps>({
        label: 'Name',
        description: 'Details',
        isSkeleton: true
      })

      class CustomDescriptionInclude extends DescriptionInclude {}
      class CustomLabelInclude extends LabelInclude {}
      class CustomSkeletonInclude extends SkeletonInclude {}

      scope.run(() => {
        const item = new TableItem(
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

  describe('ARIA, binds, and tag resolution', () => {
    it('should resolve aria attributes without treating undefined disabled as true', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableItemProps>({})

      scope.run(() => {
        const item = new TableItem(props, element, naming)
        expect(item.aria).toEqual({})

        props.disabled = false
        props.selected = false
        expect(item.aria).toEqual({})

        props.selected = true
        expect(item.aria).toEqual({ 'aria-selected': 'true' })

        props.disabled = true
        expect(item.aria).toEqual({
          'aria-selected': 'true',
          'aria-disabled': 'true'
        })

        props.selected = undefined
        props.disabled = undefined
        expect(item.aria).toEqual({})
      })

      scope.stop()
    })

    it('should compute binds including colspan, rowspan, numeric 0 index, and aria', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableItemProps>({
        colspan: 0,
        rowspan: '2',
        index: 0,
        selected: true
      })

      scope.run(() => {
        const item = new TableItem(props, element, naming)
        expect(item.binds).toEqual({
          'colspan': 0,
          'rowspan': '2',
          'data-index': 0,
          'aria-selected': 'true'
        })

        props.index = 'price'
        props.disabled = true
        expect(item.binds).toEqual({
          'colspan': 0,
          'rowspan': '2',
          'data-index': 'price',
          'aria-selected': 'true',
          'aria-disabled': 'true'
        })
      })

      scope.stop()
    })

    it('should resolve tag with fallback to td when undefined or empty string', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableItemProps>({})

      scope.run(() => {
        const item = new TableItem(props, element, naming)
        expect(item.tag).toBe('td')

        props.tag = ''
        expect(item.tag).toBe('td')

        props.tag = 'th'
        expect(item.tag).toBe('th')

        props.tag = 'div'
        expect(item.tag).toBe('div')
      })

      scope.stop()
    })
  })
})
