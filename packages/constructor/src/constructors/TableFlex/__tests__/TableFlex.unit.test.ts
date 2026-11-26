// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, effectScope, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { CaptionInclude } from '../../../classes/CaptionInclude'
import { PaginationInclude } from '../../../classes/PaginationInclude'
import { SearchInclude } from '../../../classes/SearchInclude'
import { StickyInclude } from '../../../classes/StickyInclude'
import { Table, TableColumns, TableSort, type TableConstructors } from '../../Table'
import { TableRecordInclude } from '../../TableRecord'
import { TableFlex } from '../TableFlex'
import type { TableFlexProps } from '../props'
import type { TableFlexComponents } from '../types'

class InspectableTableFlex extends TableFlex {
  get instantiatedItems(): Partial<Record<keyof TableConstructors, unknown>> {
    return this.instances
  }
}

const MockTableFlexRecord = defineComponent({
  name: 'MockTableFlexRecord',
  setup() {
    return () => h('div', { role: 'row' })
  }
})

describe('TableFlex (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.tableFlex')

  function createComponents(overrides: Partial<TableFlexComponents> = {}) {
    return new DesignComponents<TableFlexComponents, TableFlexProps>({
      tableRecord: MockTableFlexRecord,
      ...overrides
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Inheritance, tag overrides, ARIA role="table", and binds', () => {
    it('should extend Table, override tags to div/undefined, and expose role="table" in aria and binds', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexProps>({})

      scope.run(() => {
        const table = new TableFlex(props, element, naming)

        expect(table).toBeInstanceOf(Table)
        expect(table.aria).toEqual({ role: 'table' })
        expect(table.binds).toEqual({ role: 'table' })
        expect(table.tag).toBe('div')
        expect(table.tagCaption).toBe('div')
        expect(table.tagCol).toBe('col')
        expect(table.tagColgroup).toBeUndefined()
        expect(table.tagFoot).toBe('div')
        expect(table.tagHeader).toBe('div')
        expect(table.tagItems).toBe('div')

        // Returned aria/binds must be fresh objects so external mutation cannot leak across reads
        const firstAria = table.aria
        firstAria['aria-label'] = 'mutated'
        expect(table.aria).toEqual({ role: 'table' })

        const firstBinds = table.binds
        firstBinds.id = 'mutated'
        expect(table.binds).toEqual({ role: 'table' })
      })

      scope.stop()
    })
  })

  describe('Lazy instantiation, canCreate guards, and Dependency Injection', () => {
    it('should eagerly initialize sort and sticky while keeping optional helpers lazy until needed', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexProps>({})

      scope.run(() => {
        const table = new InspectableTableFlex(props, element, naming)

        expect(table.hasInstance('sort')).toBe(true)
        expect(table.hasInstance('sticky')).toBe(true)
        expect(table.hasInstance('caption')).toBe(false)
        expect(table.hasInstance('columns')).toBe(false)
        expect(table.hasInstance('pagination')).toBe(false)
        expect(table.hasInstance('search')).toBe(false)
        expect(table.hasInstance('tableRecord')).toBe(false)

        // Guarded calls with empty props/components must not allocate disabled helpers
        expect(table.callInstanceArray('caption', item => item.render())).toEqual([])
        expect(table.callInstanceArray('columns', item => item.list)).toEqual([])
        expect(table.callInstanceArray('pagination', item => item.list)).toEqual([])
        expect(table.callInstance('tableRecord', item => item.renderRecord('item-0', []))).toBeUndefined()

        expect(table.hasInstance('caption')).toBe(false)
        expect(table.hasInstance('columns')).toBe(false)
        expect(table.hasInstance('pagination')).toBe(false)
        expect(table.hasInstance('search')).toBe(false)
        expect(table.hasInstance('tableRecord')).toBe(false)
      })

      scope.stop()
    })

    it('should pass overridden tagCaption ("div") into CaptionInclude when caption prop or slot is provided', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexProps>({
        caption: 'Flex Table Caption'
      })

      scope.run(() => {
        const table = new InspectableTableFlex(props, element, naming)
        expect(table.hasInstance('caption')).toBe(false)

        const rendered = table.callInstanceArray('caption', item => item.render())
        expect(table.hasInstance('caption')).toBe(true)
        expect(rendered).toHaveLength(1)
        expect(rendered[0]?.type).toBe('div')
      })

      scope.stop()
    })

    it('should support DI constructor overrides for all inherited Table dependencies', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<TableFlexProps>({
        caption: 'Custom',
        columns: ['id', 'name'],
        list: [{ id: 1, name: 'Alice' }]
      })

      class CustomCaptionInclude extends CaptionInclude {}
      class CustomTableColumns extends TableColumns {}
      class CustomPaginationInclude extends PaginationInclude {}
      class CustomSearchInclude extends SearchInclude {}
      class CustomTableSort extends TableSort {}
      class CustomStickyInclude extends StickyInclude {}
      class CustomTableRecordInclude extends TableRecordInclude {}

      scope.run(() => {
        const table = new TableFlex(
          props,
          element,
          naming,
          createComponents(),
          undefined,
          undefined,
          {
            caption: CustomCaptionInclude,
            columns: CustomTableColumns,
            pagination: CustomPaginationInclude,
            search: CustomSearchInclude,
            sort: CustomTableSort,
            sticky: CustomStickyInclude,
            tableRecord: CustomTableRecordInclude
          }
        )

        expect(table.i('caption')).toBeInstanceOf(CustomCaptionInclude)
        expect(table.i('columns')).toBeInstanceOf(CustomTableColumns)
        expect(table.i('pagination')).toBeInstanceOf(CustomPaginationInclude)
        expect(table.i('search')).toBeInstanceOf(CustomSearchInclude)
        expect(table.i('sort')).toBeInstanceOf(CustomTableSort)
        expect(table.i('sticky')).toBeInstanceOf(CustomStickyInclude)
        expect(table.i('tableRecord')).toBeInstanceOf(CustomTableRecordInclude)
      })

      scope.stop()
    })
  })

  describe('Data pipeline (columns, search, sort, pagination) and instance isolation', () => {
    it('should filter by search, sort without mutating input array, paginate, and emit sort updates', async () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const emits = vi.fn()
      const sourceList = [
        { id: 3, name: 'Charlie', score: 10 },
        { id: 1, name: 'Nguyễn', score: 0 },
        { id: 2, name: 'Привет', score: 25 },
        { id: 4, name: 'Alice', score: 15 }
      ]
      const snapshot = sourceList.map(item => ({ ...item }))

      const props = reactive<TableFlexProps>({
        header: { id: 'ID', name: 'Name', score: 'Score' },
        list: sourceList,
        sort: 'score',
        sortDir: 'asc',
        page: 1,
        rows: 2
      })

      await scope.run(async () => {
        const table = new TableFlex(props, element, naming, createComponents(), undefined, emits)

        expect(table.i('columns').list).toEqual(['id', 'name', 'score'])
        expect(table.i('sort').getList().map(item => (item as { score: number }).score)).toEqual([0, 10, 15, 25])
        expect(table.i('pagination').list.map(item => (item as { score: number }).score)).toEqual([0, 10])

        // Page 2
        props.page = 2
        expect(table.i('pagination').list.map(item => (item as { score: number }).score)).toEqual([15, 25])

        // User interactive sort override
        table.i('sort').onSort({ column: 'score', dir: 'desc' })
        expect(emits).toHaveBeenCalledWith('sort', { column: 'score', dir: 'desc' })
        props.page = 1
        expect(table.i('pagination').list.map(item => (item as { score: number }).score)).toEqual([25, 15])

        // External prop change resets user override
        props.sort = 'id'
        props.sortDir = 'asc'
        await nextTick()
        expect(table.i('sort').getList().map(item => (item as { id: number }).id)).toEqual([1, 2, 3, 4])

        // Search filters multilingual records before sort and pagination
        props.search = 'привет'
        await nextTick()
        expect(table.i('pagination').list.map(item => (item as { name: string }).name)).toEqual(['Привет'])

        // Original input list must never be mutated in place
        expect(sourceList).toEqual(snapshot)
      })

      scope.stop()
    })

    it('should isolate state between separate TableFlex instances', () => {
      const scope = effectScope()
      const elementFirst = ref<HTMLElement>()
      const elementSecond = ref<HTMLElement>()
      const propsFirst = reactive<TableFlexProps>({
        columns: ['name'],
        list: [{ name: 'B' }, { name: 'A' }]
      })
      const propsSecond = reactive<TableFlexProps>({
        columns: ['name'],
        list: [{ name: 'B' }, { name: 'A' }]
      })

      scope.run(() => {
        const first = new TableFlex(propsFirst, elementFirst, naming)
        const second = new TableFlex(propsSecond, elementSecond, naming)

        first.i('sort').onSort({ column: 'name', dir: 'asc' })

        expect(first.i('sort').getList().map(item => (item as { name: string }).name)).toEqual(['A', 'B'])
        expect(second.i('sort').getList().map(item => (item as { name: string }).name)).toEqual(['B', 'A'])
        expect(first.headerElement).not.toBe(second.headerElement)
      })

      scope.stop()
    })
  })
})
