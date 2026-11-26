// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import {
  DesignComponents,
  DesignName,
  type ConstrBind,
  type ConstrEmit
} from '@dxtmisha/functional'

import { CaptionInclude } from '../../../classes/CaptionInclude'
import { PaginationInclude } from '../../../classes/PaginationInclude'
import { SearchInclude } from '../../../classes/SearchInclude'
import { StickyInclude } from '../../../classes/StickyInclude'
import { TableRecordInclude } from '../../TableRecord'
import { Table, type TableConstructors } from '../Table'
import { TableColumns } from '../TableColumns'
import { TableSort } from '../TableSort'
import type { TableProps } from '../props'
import type { TableComponents, TableEmits, TableSlots } from '../types'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Table (Unit)', () => {
  const naming = new DesignName('d1.table')

  it('should expose default semantic HTML tags and empty binds object', () => {
    const scope = effectScope()
    const element = ref<HTMLElement>()

    scope.run(() => {
      const table = new Table({}, element, naming)

      expect(table.binds).toEqual({})
      expect(table.tag).toBe('table')
      expect(table.tagCaption).toBe('caption')
      expect(table.tagCol).toBe('col')
      expect(table.tagColgroup).toBe('colgroup')
      expect(table.tagFoot).toBe('tfoot')
      expect(table.tagHeader).toBe('thead')
      expect(table.tagItems).toBe('tbody')
      expect(table.headerElement.value).toBeUndefined()
    })

    scope.stop()
  })

  it('should eagerly initialize sort and sticky while keeping caption, columns, pagination, search, and tableRecord lazy', () => {
    const scope = effectScope()
    const element = ref<HTMLElement>()

    scope.run(() => {
      const table = new Table({}, element, naming)

      expect(table.hasInstance('sort')).toBe(true)
      expect(table.hasInstance('sticky')).toBe(true)
      expect(table.hasInstance('caption')).toBe(false)
      expect(table.hasInstance('columns')).toBe(false)
      expect(table.hasInstance('pagination')).toBe(false)
      expect(table.hasInstance('search')).toBe(false)
      expect(table.hasInstance('tableRecord')).toBe(false)

      // canCreate guards block instantiation when corresponding props/slots/components are absent
      expect(table.callInstanceArray('caption', item => item.render())).toEqual([])
      expect(table.callInstanceArray('columns', item => item.list)).toEqual([])
      expect(table.callInstanceArray('pagination', item => item.list)).toEqual([])
      expect(table.callInstance('tableRecord', item => item.getKey('k'))).toBeUndefined()

      expect(table.hasInstance('caption')).toBe(false)
      expect(table.hasInstance('columns')).toBe(false)
      expect(table.hasInstance('pagination')).toBe(false)
      expect(table.hasInstance('tableRecord')).toBe(false)
    })

    scope.stop()
  })

  it('should instantiate caption, columns, pagination, search, and tableRecord on demand when canCreate conditions are met', () => {
    const scope = effectScope()
    const element = ref<HTMLElement>()
    const components = new DesignComponents<TableComponents, TableProps>({
      tableRecord: { name: 'StubTableRecord' }
    })
    const slots: TableSlots = {
      caption: () => 'Caption Slot'
    }
    const props = reactive<TableProps>({
      columns: ['id', 'name'],
      list: [
        { id: 2, name: 'Bob' },
        { id: 1, name: 'Alice' }
      ],
      sort: 'name',
      sortDir: 'asc'
    })

    scope.run(() => {
      const table = new Table(props, element, naming, components, slots)

      expect(table.callInstanceArray('caption', item => item.render())).toHaveLength(1)
      expect(table.hasInstance('caption')).toBe(true)

      expect(table.callInstanceArray('columns', item => item.list)).toEqual(['id', 'name'])
      expect(table.hasInstance('columns')).toBe(true)

      expect(
        table.callInstanceArray('pagination', item => item.list).map(item => (item as { name: string }).name)
      ).toEqual(['Alice', 'Bob'])
      expect(table.hasInstance('pagination')).toBe(true)
      expect(table.hasInstance('search')).toBe(true)

      expect(table.callInstance('tableRecord', item => item.getKey('fallback', { index: 'row-1' }))).toBe('row-1')
      expect(table.hasInstance('tableRecord')).toBe(true)
    })

    scope.stop()
  })

  it('should pass stickyEnable as strict Boolean(props.headerTop) into StickyInclude', () => {
    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableProps>({
      stickyScrollBottom: true
    })

    let receivedStickyProps: (() => Readonly<{ stickyScrollBottom?: boolean, stickyEnable?: boolean }>) | undefined

    class SpySticky extends StickyInclude {
      constructor(...parameters: ConstructorParameters<typeof StickyInclude>) {
        super(...parameters)
        receivedStickyProps = parameters[0] as () => Readonly<{ stickyScrollBottom?: boolean, stickyEnable?: boolean }>
      }
    }

    scope.run(() => {
      new Table(
        props,
        element,
        naming,
        undefined,
        undefined,
        undefined,
        { sticky: SpySticky as unknown as typeof StickyInclude }
      )

      expect(receivedStickyProps).toBeTypeOf('function')
      expect(receivedStickyProps?.()).toEqual({
        stickyScrollBottom: true,
        stickyEnable: false
      })

      props.headerTop = true
      expect(receivedStickyProps?.()).toEqual({
        stickyScrollBottom: true,
        stickyEnable: true
      })

      props.stickyScrollBottom = false
      props.headerTop = false
      expect(receivedStickyProps?.()).toEqual({
        stickyScrollBottom: false,
        stickyEnable: false
      })
    })

    scope.stop()
  })

  it('should support DI overrides for all 7 TableConstructors entries', () => {
    const scope = effectScope()
    const element = ref<HTMLElement>()
    const emits = vi.fn() as unknown as ConstrEmit<TableEmits>
    const components = new DesignComponents<TableComponents, TableProps>({
      tableRecord: { name: 'StubTableRecord' }
    })
    const props = reactive<TableProps>({
      caption: 'DI Caption',
      columns: ['id'],
      list: [{ id: 1 }]
    })

    class CustomCaption extends CaptionInclude {}
    class CustomColumns extends TableColumns {}
    class CustomPagination extends PaginationInclude {}
    class CustomSearch extends SearchInclude {}
    class CustomSort extends TableSort {}
    class CustomSticky extends StickyInclude {}
    class CustomTableRecord extends TableRecordInclude {}

    const overrides: Partial<TableConstructors> = {
      caption: CustomCaption,
      columns: CustomColumns,
      pagination: CustomPagination,
      search: CustomSearch,
      sort: CustomSort,
      sticky: CustomSticky,
      tableRecord: CustomTableRecord
    }

    scope.run(() => {
      const table = new Table(props, element, naming, components, undefined, emits, overrides)

      expect(table.i('caption')).toBeInstanceOf(CustomCaption)
      expect(table.i('columns')).toBeInstanceOf(CustomColumns)
      expect(table.i('pagination')).toBeInstanceOf(CustomPagination)
      expect(table.i('search')).toBeInstanceOf(CustomSearch)
      expect(table.i('sort')).toBeInstanceOf(CustomSort)
      expect(table.i('sticky')).toBeInstanceOf(CustomSticky)
      expect(table.i('tableRecord')).toBeInstanceOf(CustomTableRecord)
    })

    scope.stop()
  })

  it('should allow polymorphic subclass overrides (TableFlex pattern) for tag* and binds', () => {
    class PolymorphicFlexTable extends Table {
      override get binds(): ConstrBind {
        return {
          ...super.binds,
          role: 'table'
        }
      }

      override get tag(): string {
        return 'div'
      }

      override get tagCaption(): string {
        return 'div'
      }

      override get tagColgroup(): string | undefined {
        return undefined
      }

      override get tagHeader(): string {
        return 'div'
      }

      override get tagFoot(): string {
        return 'div'
      }

      override get tagItems(): string {
        return 'div'
      }
    }

    const scope = effectScope()
    const element = ref<HTMLElement>()

    scope.run(() => {
      const flexTable = new PolymorphicFlexTable({ caption: 'Flex Title' }, element, naming)

      expect(flexTable.binds).toEqual({ role: 'table' })
      expect(flexTable.tag).toBe('div')
      expect(flexTable.tagCaption).toBe('div')
      expect(flexTable.tagColgroup).toBeUndefined()
      expect(flexTable.tagHeader).toBe('div')
      expect(flexTable.tagFoot).toBe('div')
      expect(flexTable.tagItems).toBe('div')

      const captionNodes = flexTable.i('caption').render()
      expect(captionNodes).toHaveLength(1)
      expect(captionNodes[0]?.type).toBe('div')
    })

    scope.stop()
  })
})
