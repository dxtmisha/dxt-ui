// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { TableHeaderItemInclude } from '../../TableHeaderItem'
import { TableItemInclude } from '../../TableItem'
import { TableRecord, type TableRecordConstructors } from '../TableRecord'
import type { TableRecordProps } from '../props'
import type { TableRecordComponents } from '../types'

class InspectableTableRecord extends TableRecord {
  get instantiatedItems(): Partial<Record<keyof TableRecordConstructors, unknown>> {
    return this.instances
  }
}

const MockTableItem = defineComponent({
  name: 'MockTableItem',
  setup() {
    return () => h('td')
  }
})

const MockTableHeaderItem = defineComponent({
  name: 'MockTableHeaderItem',
  setup() {
    return () => h('th')
  }
})

describe('TableRecord (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.tableRecord')

  function createComponents(overrides: Partial<TableRecordComponents> = {}) {
    return new DesignComponents<TableRecordComponents, TableRecordProps>({
      tableItem: MockTableItem,
      tableHeaderItem: MockTableHeaderItem,
      ...overrides
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation, canCreate guards, and Dependency Injection', () => {
    it('should keep tableItem and tableHeaderItem uninstantiated when components are absent or columns are not rendered', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableRecordProps>({
        columns: ['name'],
        item: { name: 'Alice' }
      })

      scope.run(() => {
        const recordWithoutComponents = new InspectableTableRecord(props, element, naming)
        expect(recordWithoutComponents.renderColumn('name')).toBeUndefined()
        expect(recordWithoutComponents.hasInstance('tableItem')).toBe(false)
        expect(recordWithoutComponents.hasInstance('tableHeaderItem')).toBe(false)

        props.isHeader = true
        expect(recordWithoutComponents.renderColumn('name')).toBeUndefined()
        expect(recordWithoutComponents.hasInstance('tableHeaderItem')).toBe(false)

        const recordWithComponents = new InspectableTableRecord(props, element, naming, createComponents())
        expect(recordWithComponents.hasInstance('tableItem')).toBe(false)
        expect(recordWithComponents.hasInstance('tableHeaderItem')).toBe(false)
      })

      scope.stop()
    })

    it('should respect per-component canCreate guards when only one cell component is registered', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableRecordProps>({
        index: 'r1',
        item: {
          head: { label: 'Head', isHeader: true },
          body: 'Body'
        }
      })

      scope.run(() => {
        const onlyBodyComponents = new DesignComponents<TableRecordComponents, TableRecordProps>({
          tableItem: MockTableItem
        })
        const record = new InspectableTableRecord(props, element, naming, onlyBodyComponents)

        expect(record.renderColumn('head')).toBeUndefined()
        expect(record.hasInstance('tableHeaderItem')).toBe(false)

        const bodyVNode = record.renderColumn('body')
        expect(bodyVNode).toBeDefined()
        expect(record.hasInstance('tableItem')).toBe(true)
        expect(record.hasInstance('tableHeaderItem')).toBe(false)
      })

      scope.stop()
    })

    it('should support constructors DI overrides for tableHeaderItem and tableItem', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableRecordProps>({})

      class CustomTableHeaderItemInclude extends TableHeaderItemInclude {}
      class CustomTableItemInclude extends TableItemInclude {}

      scope.run(() => {
        const record = new TableRecord(
          props,
          element,
          naming,
          createComponents(),
          undefined,
          undefined,
          {
            tableHeaderItem: CustomTableHeaderItemInclude,
            tableItem: CustomTableItemInclude
          }
        )

        expect(record.i('tableHeaderItem')).toBeInstanceOf(CustomTableHeaderItemInclude)
        expect(record.i('tableItem')).toBeInstanceOf(CustomTableItemInclude)
      })

      scope.stop()
    })
  })

  describe('ARIA attributes and root binds', () => {
    it('should omit aria-disabled when disabled is undefined or false and omit aria-selected when not selected', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableRecordProps>({})

      scope.run(() => {
        const record = new TableRecord(props, element, naming)
        expect(record.aria).toEqual({})
        expect(record.binds).toEqual({
          'data-key': undefined
        })

        props.disabled = false
        props.selected = false
        expect(record.aria).toEqual({})

        props.selected = true
        expect(record.aria).toEqual({ 'aria-selected': 'true' })

        props.disabled = true
        props.index = 'row-42'
        expect(record.aria).toEqual({
          'aria-selected': 'true',
          'aria-disabled': 'true'
        })
        expect(record.binds).toEqual({
          'data-key': 'row-42',
          'aria-selected': 'true',
          'aria-disabled': 'true'
        })

        props.selected = undefined
        props.disabled = undefined
        expect(record.aria).toEqual({})
      })

      scope.stop()
    })
  })

  describe('Row key resolution and boundary cases', () => {
    it('should prioritize explicit props.index over item.index and item.value', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableRecordProps>({
        index: 'explicit-id',
        item: {
          index: 'item-index',
          value: 'item-value'
        }
      })

      scope.run(() => {
        const record = new TableRecord(props, element, naming)
        expect(record.key).toBe('explicit-id')

        props.index = ''
        expect(record.key).toBe('item-index')

        props.item = { value: 'item-value' }
        expect(record.key).toBe('item-value')
      })

      scope.stop()
    })

    it('should handle numeric 0, string "0", empty strings, NaN, object cell values, and prototype keys safely', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableRecordProps>({
        item: { index: 0 }
      })

      scope.run(() => {
        const record = new TableRecord(props, element, naming)
        expect(record.key).toBe('0')

        props.item = { index: '', value: 0 }
        expect(record.key).toBe('0')

        props.item = { index: Number.NaN, value: Number.POSITIVE_INFINITY }
        expect(record.key).toBeUndefined()

        props.item = { value: { label: '100 USD', align: 'right' } }
        expect(record.key).toBeUndefined()

        props.item = {}
        expect(record.key).toBeUndefined()

        props.index = '0'
        expect(record.key).toBe('0')
      })

      scope.stop()
    })
  })

  describe('Column rendering, header detection, and sort emit forwarding', () => {
    it('should pass scope="col" for header rows, scope="row" for per-cell isHeader, and forward onSort emits', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const emits = vi.fn()
      const props = reactive<TableRecordProps>({
        index: 'r1',
        isHeader: false,
        item: {
          title: { label: 'Title', isHeader: true },
          count: 0
        }
      })

      scope.run(() => {
        const record = new InspectableTableRecord(
          props,
          element,
          naming,
          createComponents(),
          undefined,
          emits
        )

        const rowHeaderVNode = record.renderColumn('title')
        expect(rowHeaderVNode?.key).toBe('.r1__title.title')
        expect(rowHeaderVNode?.props?.scope).toBe('row')
        expect(rowHeaderVNode?.props?.label).toBe('Title')

        const onSortHandler = rowHeaderVNode?.props?.onSort as ((item: { column: string, dir: 'asc' }) => void) | undefined
        expect(typeof onSortHandler).toBe('function')
        onSortHandler?.({ column: 'title', dir: 'asc' })
        expect(emits).toHaveBeenCalledWith('sort', { column: 'title', dir: 'asc' })

        const bodyVNode = record.renderColumn('count')
        expect(bodyVNode?.key).toBe('.r1__count.count')
        expect(bodyVNode?.props?.label).toBe(0)
        expect(bodyVNode?.props?.scope).toBeUndefined()

        props.isHeader = true
        const colHeaderVNode = record.renderColumn('count')
        expect(colHeaderVNode?.props?.scope).toBe('col')

        props.isHeader = false
        props.isFoot = true
        const footVNode = record.renderColumn('count')
        expect(footVNode?.props?.scope).toBeUndefined()
        expect(footVNode?.props?.label).toBe(0)
      })

      scope.stop()
    })

    it('should avoid "undefined__<index>" cell keys when row key is absent and ignore prototype keys in isHeaderColumn', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableRecordProps>({
        item: { name: 'Plain' }
      })

      scope.run(() => {
        const record = new InspectableTableRecord(props, element, naming, createComponents())

        const vnode = record.renderColumn('name')
        expect(vnode?.key).toBe('.name.name')
        expect(record.hasInstance('tableItem')).toBe(true)
        expect(record.hasInstance('tableHeaderItem')).toBe(false)

        const protoVNode = record.renderColumn('toString')
        expect(protoVNode?.props?.label).toBeUndefined()
        expect(record.hasInstance('tableHeaderItem')).toBe(false)
      })

      scope.stop()
    })
  })
})
