// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { TableHeaderItemInclude } from '../../TableHeaderItem'
import { TableItemInclude } from '../../TableItem'
import { TableRecord } from '../../TableRecord'
import { TableFlexRecord, type TableFlexRecordConstructors } from '../TableFlexRecord'
import { TableFlexRecordLazy } from '../TableFlexRecordLazy'
import type { TableFlexRecordProps } from '../props'
import type { TableFlexRecordComponents } from '../types'

class InspectableTableFlexRecord extends TableFlexRecord {
  get instantiatedItems(): Partial<Record<keyof TableFlexRecordConstructors, unknown>> {
    return this.instances
  }
}

const MockTableFlexItem = defineComponent({
  name: 'MockTableFlexItem',
  setup() {
    return () => h('div')
  }
})

const MockTableFlexHeaderItem = defineComponent({
  name: 'MockTableFlexHeaderItem',
  setup() {
    return () => h('div')
  }
})

describe('TableFlexRecord (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.tableFlexRecord')

  function createComponents(overrides: Partial<TableFlexRecordComponents> = {}) {
    return new DesignComponents<TableFlexRecordComponents, TableFlexRecordProps>({
      tableItem: MockTableFlexItem,
      tableHeaderItem: MockTableFlexHeaderItem,
      ...overrides
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Inheritance, lazy instantiation, canCreate guards, and Dependency Injection', () => {
    it('should extend TableRecord and keep lazy, tableItem, and tableHeaderItem uninstantiated when disabled/unused', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexRecordProps>({
        lazy: false,
        defaultHeight: 40,
        columns: ['name'],
        item: { name: 'Alice' }
      })

      scope.run(() => {
        const record = new InspectableTableFlexRecord(props, element, naming)
        expect(record).toBeInstanceOf(TableRecord)
        expect(record.classes).toEqual({})
        expect(record.styles).toEqual({})
        expect(record.isRender()).toBe(true)
        expect(record.renderColumn('name')).toBeUndefined()
        expect(record.hasInstance('lazy')).toBe(false)
        expect(record.hasInstance('tableItem')).toBe(false)
        expect(record.hasInstance('tableHeaderItem')).toBe(false)

        // Header rows must also never instantiate lazy even when lazy=true
        props.lazy = true
        props.isHeader = true
        expect(record.classes).toEqual({})
        expect(record.styles).toEqual({})
        expect(record.isRender()).toBe(true)
        expect(record.hasInstance('lazy')).toBe(false)
      })

      scope.stop()
    })

    it('should instantiate lazy on demand when lazy=true and not header, exposing classes, styles, and isRender', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexRecordProps>({
        lazy: true,
        defaultHeight: 44
      })

      scope.run(() => {
        const record = new InspectableTableFlexRecord(props, element, naming)
        expect(record.hasInstance('lazy')).toBe(false)

        expect(record.isRender()).toBe(true)
        expect(record.hasInstance('lazy')).toBe(true)
        expect(record.classes).toEqual({
          'd1-tableFlexRecord--lazy': true,
          'd1-tableFlexRecord--lazy--visible': true,
          'd1-tableFlexRecord--lazy--hidden': false
        })
        expect(record.styles).toEqual({
          '--d1-tableFlexRecord-sys-minHeight': '44px'
        })
      })

      scope.stop()
    })

    it('should support DI constructor overrides for lazy, tableHeaderItem, and tableItem and typed helper methods', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexRecordProps>({
        lazy: true
      })

      class CustomTableFlexRecordLazy extends TableFlexRecordLazy {}
      class CustomTableHeaderItemInclude extends TableHeaderItemInclude {}
      class CustomTableItemInclude extends TableItemInclude {}

      scope.run(() => {
        const record = new TableFlexRecord(
          props,
          element,
          naming,
          createComponents(),
          undefined,
          undefined,
          {
            lazy: CustomTableFlexRecordLazy,
            tableHeaderItem: CustomTableHeaderItemInclude,
            tableItem: CustomTableItemInclude
          }
        )

        expect(record.i('lazy')).toBeInstanceOf(CustomTableFlexRecordLazy)
        expect(record.i('tableHeaderItem')).toBeInstanceOf(CustomTableHeaderItemInclude)
        expect(record.i('tableItem')).toBeInstanceOf(CustomTableItemInclude)
        expect(record.getInstance('lazy')).toBe(record.i('lazy'))
        expect(record.callInstanceBoolean('lazy', item => item.isLazy())).toBe(true)
        expect(record.callInstanceArray('lazy', item => Object.keys(item.classes))).toHaveLength(3)
      })

      scope.stop()
    })
  })

  describe('ARIA role="row", root binds, key resolution, and column rendering', () => {
    it('should always include role="row" in aria and binds without false-positive aria-selected/aria-disabled', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexRecordProps>({})

      scope.run(() => {
        const record = new TableFlexRecord(props, element, naming)
        expect(record.aria).toEqual({ role: 'row' })
        expect(record.binds).toEqual({
          'data-key': undefined,
          'role': 'row'
        })

        props.disabled = false
        props.selected = false
        expect(record.aria).toEqual({ role: 'row' })

        props.index = 'flex-row-0'
        props.selected = true
        props.disabled = true
        expect(record.aria).toEqual({
          'aria-selected': 'true',
          'aria-disabled': 'true',
          'role': 'row'
        })
        expect(record.binds).toEqual({
          'data-key': 'flex-row-0',
          'aria-selected': 'true',
          'aria-disabled': 'true',
          'role': 'row'
        })
      })

      scope.stop()
    })

    it('should inherit row key resolution, column rendering, and sort event forwarding from TableRecord', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const emits = vi.fn()
      const props = reactive<TableFlexRecordProps>({
        lazy: false,
        item: {
          index: 0,
          title: { label: 'Title', isHeader: true },
          count: 0
        }
      })

      scope.run(() => {
        const record = new InspectableTableFlexRecord(
          props,
          element,
          naming,
          createComponents(),
          undefined,
          emits
        )

        expect(record.key).toBe('0')

        const headerVNode = record.renderColumn('title')
        expect(headerVNode?.key).toBe('.0__title.title')
        expect(headerVNode?.props?.scope).toBe('row')
        expect(record.hasInstance('tableHeaderItem')).toBe(true)
        expect(record.hasInstance('tableItem')).toBe(false)

        const onSortHandler = headerVNode?.props?.onSort as ((item: { column: string, dir: 'asc' }) => void) | undefined
        onSortHandler?.({ column: 'title', dir: 'asc' })
        expect(emits).toHaveBeenCalledWith('sort', { column: 'title', dir: 'asc' })

        const dataVNode = record.renderColumn('count')
        expect(dataVNode?.key).toBe('.0__count.count')
        expect(dataVNode?.props?.label).toBe(0)
        expect(record.hasInstance('tableItem')).toBe(true)
        expect(record.hasInstance('lazy')).toBe(false)
      })

      scope.stop()
    })
  })
})
