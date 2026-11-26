// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive
} from 'vue'
import { DesignName, type ConstrClasses, type SortColumnItem } from '@dxtmisha/functional'

import { TableHeaderItemDesign } from '../../TableHeaderItem'
import { TableItemDesign } from '../../TableItem'
import { TableRecordDesign } from '../../TableRecord'
import type { TableRecordProps } from '../../TableRecord'
import { Table, type TableConstructors } from '../Table'
import { TableDesign } from '../TableDesign'
import type { TableProps } from '../props'
import type {
  TableClasses,
  TableComponents,
  TableExpose,
  TableSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTable extends Table {
  get instantiatedItems(): Partial<Record<keyof TableConstructors, unknown>> {
    return this.instances
  }
}

const RealTableItemComponent = defineComponent({
  name: 'RealTableItem',
  props: {
    label: [String, Number],
    description: [String, Number],
    value: [String, Number],
    tag: String,
    colspan: [String, Number],
    rowspan: [String, Number],
    index: [String, Number],
    selected: Boolean,
    disabled: Boolean,
    stickyTop: Boolean,
    stickyLeft: Boolean,
    isSkeleton: Boolean
  },
  setup(props, { slots }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-tableItem': true,
        'd1-tableItem--selected': props.selected,
        'd1-tableItem--disabled': props.disabled,
        'd1-tableItem--stickyTop': props.stickyTop,
        'd1-tableItem--stickyLeft': props.stickyLeft
      }
    }))
    const design = new TableItemDesign(
      'd1.tableItem',
      props as unknown as ConstructorParameters<typeof TableItemDesign>[1],
      {
        classes,
        slots
      } as unknown as ConstructorParameters<typeof TableItemDesign>[2]
    )
    return design.render()
  }
})

const MockChipComponent = defineComponent({
  name: 'MockSortChip',
  props: {
    label: [String, Number],
    icon: [String, Object],
    selected: Boolean
  },
  emits: ['click'],
  setup(props, { emit, attrs }) {
    return () => h('button', {
      ...attrs,
      'type': 'button',
      'class': 'mock-sort-chip',
      'data-selected': props.selected ? 'true' : 'false',
      'data-icon-active': (
        typeof props.icon === 'object'
        && props.icon !== null
        && 'active' in props.icon
      )
        ? String((props.icon as { active?: boolean }).active)
        : 'none',
      'onClick': (event: MouseEvent) => emit('click', event)
    }, 'sort')
  }
})

const RealTableHeaderItemComponent = defineComponent({
  name: 'RealTableHeaderItem',
  props: {
    label: [String, Number],
    description: [String, Number],
    tag: String,
    scope: String,
    colspan: [String, Number],
    rowspan: [String, Number],
    index: [String, Number],
    selected: Boolean,
    disabled: Boolean,
    stickyTop: Boolean,
    stickyLeft: Boolean,
    isSkeleton: Boolean,
    showSort: Boolean,
    sortColumn: [String, Number],
    sortDir: String,
    iconSort: {
      type: [String, Object],
      default: 'sort'
    },
    iconArrowUp: {
      type: [String, Object],
      default: 'arrow-up'
    },
    iconArrowDown: {
      type: [String, Object],
      default: 'arrow-down'
    }
  },
  emits: ['sort'],
  setup(props, { emit, slots }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-tableHeaderItem': true,
        'd1-tableHeaderItem--selected': props.selected,
        'd1-tableHeaderItem--disabled': props.disabled
      }
    }))
    const design = new TableHeaderItemDesign(
      'd1.tableHeaderItem',
      props as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[1],
      {
        classes,
        emits: emit,
        slots,
        components: {
          chip: MockChipComponent
        }
      } as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[2]
    )
    return design.render()
  }
})

const RealTableRecordComponent = defineComponent({
  name: 'RealTableRecord',
  props: {
    item: Object,
    columns: Array,
    isHeader: Boolean,
    isFoot: Boolean,
    index: String,
    selected: Boolean,
    disabled: Boolean,
    stickyTop: Boolean,
    stickyLeft: Array,
    isSkeleton: Boolean,
    lazy: Boolean,
    defaultHeight: [String, Number],
    tableItemAttrs: Object,
    tableItemColumnAttrs: Object
  },
  emits: ['sort'],
  setup(props, { emit, slots }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-tableRecord': true,
        'd1-tableRecord--selected': props.selected,
        'd1-tableRecord--disabled': props.disabled
      }
    }))
    const design = new TableRecordDesign(
      'd1.tableRecord',
      props as TableRecordProps,
      {
        classes,
        emits: emit,
        slots,
        components: {
          tableHeaderItem: RealTableHeaderItemComponent,
          tableItem: RealTableItemComponent
        }
      } as unknown as ConstructorParameters<typeof TableRecordDesign>[2]
    )
    return design.render()
  }
})

const MockScrollStickyComponent = defineComponent({
  name: 'MockScrollSticky',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        'data-scroll-sticky': 'true'
      },
      slots.default?.()
    )
  }
})

type MountTableOptions = {
  includeScrollSticky?: boolean
  includeTableRecord?: boolean
  onSort?: (item: SortColumnItem) => void
}

async function mountTable(
  initialProps: TableProps = {},
  customSlots: TableSlots = {},
  extraAttrs: Record<string, unknown> = {},
  options: MountTableOptions = {}
) {
  const {
    includeScrollSticky = false,
    includeTableRecord = true,
    onSort
  } = options

  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<TableProps>(initialProps)
  let logicInstance!: InspectableTable

  class TestTableDesign extends TableDesign<
    TableComponents,
    TableExpose,
    TableClasses,
    TableProps
  > {
    get logic(): InspectableTable {
      return this.item as InspectableTable
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    emits: ['sort'],
    setup(_, { attrs, emit, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-table': true,
          'd1-table--headerTop': props.headerTop,
          'd1-table--captionBottom': props.captionBottom,
          'd1-table--bleed': props.bleed
        }
      }))

      const components: TableComponents = {}

      if (includeTableRecord) {
        components.tableRecord = RealTableRecordComponent
      }

      if (includeScrollSticky) {
        components.scrollSticky = MockScrollStickyComponent
      }

      const design = new TestTableDesign(
        'd1.table',
        props,
        {
          emits: emit,
          classes,
          slots,
          components
        } as unknown as ConstructorParameters<typeof TableDesign>[2],
        InspectableTable as unknown as typeof Table
      )

      logicInstance = design.logic
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const app = createApp({
    render: () => h(
      Host,
      {
        ...extraAttrs,
        ...(onSort ? { onSort } : {})
      },
      customSlots as Record<string, () => unknown>
    )
  })
  app.mount(host)
  const unmountApp = () => app.unmount()
  mountedCleanups.push(unmountApp)

  await nextTick()

  return {
    host,
    props,
    logic: logicInstance,
    unmount: unmountApp
  }
}

describe('Table (Integration)', () => {
  it('should render empty table with merged attrs and keep optional dependencies lazy while initializing sort and sticky in setup', async () => {
    const onClick = vi.fn()
    const { host, logic } = await mountTable(
      {},
      {},
      {
        'class': 'custom-table-wrapper',
        'style': { backgroundColor: 'rgb(250, 250, 250)' },
        'data-testid': 'empty-table',
        onClick
      }
    )

    const root = host.querySelector('.d1-table') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('custom-table-wrapper')).toBe(true)
    expect(root.style.backgroundColor).toBe('rgb(250, 250, 250)')
    expect(root.getAttribute('data-testid')).toBe('empty-table')

    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)

    const table = root.querySelector('table.d1-table__table') as HTMLTableElement
    expect(table).not.toBeNull()
    expect(table.querySelector('caption')).toBeNull()
    expect(table.querySelector('colgroup')).toBeNull()
    expect(table.querySelector('thead')).toBeNull()
    expect(table.querySelector('tbody')).toBeNull()
    expect(table.querySelector('tfoot')).toBeNull()

    expect(logic.hasInstance('sort')).toBe(true)
    expect(logic.hasInstance('sticky')).toBe(true)
    expect(logic.hasInstance('caption')).toBe(false)
    expect(logic.hasInstance('columns')).toBe(false)
    expect(logic.hasInstance('pagination')).toBe(false)
    expect(logic.hasInstance('search')).toBe(false)
    expect(logic.hasInstance('tableRecord')).toBe(false)
  })

  it('should run reactive search -> sort -> pagination pipeline including Unicode, regex characters, numeric 0, and page clamping', async () => {
    const { host, props, logic } = await mountTable({
      keyValue: 'id',
      header: {
        id: 'ID',
        name: 'Name',
        score: 'Score'
      },
      list: [
        { id: 0, name: 'Nguyễn Văn A', score: 0 },
        { id: 1, name: 'Привет Мир', score: 30 },
        { id: 2, name: 'C++ Guide', score: 20 },
        { id: 3, name: 'Alice C++', score: 10 },
        { id: 4, name: 'Bob', score: 40 }
      ],
      sort: 'score',
      sortDir: 'asc',
      rows: 2,
      page: 1
    })

    expect(logic.hasInstance('columns')).toBe(true)
    expect(logic.hasInstance('pagination')).toBe(true)
    expect(logic.hasInstance('search')).toBe(true)
    expect(logic.hasInstance('tableRecord')).toBe(true)

    const getRowKeys = () => Array.from(host.querySelectorAll('tbody tr')).map(row => row.getAttribute('data-key'))
    const getCellText = (rowIndex: number, columnIndex: number) => {
      const row = host.querySelectorAll('tbody tr')[rowIndex]
      return row?.querySelectorAll('td')[columnIndex]?.textContent ?? ''
    }

    // Sorted ascending by score (0, 10, 20, 30, 40), page 1 with rows = 2 -> ids 0, 3
    expect(getRowKeys()).toEqual(['0', '3'])
    expect(getCellText(0, 0)).toBe('0')
    expect(getCellText(0, 1)).toBe('Nguyễn Văn A')
    expect(getCellText(0, 2)).toBe('0')

    // Page overflow clamps to last available page (page 3 -> id 4)
    props.page = 99
    await nextTick()
    expect(getRowKeys()).toEqual(['4'])

    // rows: 0 shows full list without pagination slicing
    props.rows = 0
    props.page = 1
    await nextTick()
    expect(getRowKeys()).toEqual(['0', '3', '2', '1', '4'])

    // Search with regex metacharacters ("C++")
    props.search = 'C++'
    await nextTick()
    expect(getRowKeys()).toEqual(['3', '2'])

    // Search with Vietnamese diacritics
    props.search = 'Nguyễn'
    await nextTick()
    expect(getRowKeys()).toEqual(['0'])

    // Search with Cyrillic
    props.search = 'Привет'
    await nextTick()
    expect(getRowKeys()).toEqual(['1'])

    // Clear search -> all rows restored in sorted order
    props.search = ''
    await nextTick()
    expect(getRowKeys()).toEqual(['0', '3', '2', '1', '4'])
  })

  it('should synchronize initial props.sort/sortDir with aria-sort and active chip, support 3-click reset cycle, and re-sync on external prop change', async () => {
    const onSort = vi.fn()
    const { host, props } = await mountTable(
      {
        keyValue: 'id',
        columns: ['id', 'name', 'age'],
        header: {
          id: 'ID',
          name: { label: 'Name', showSort: true },
          age: { label: 'Age', showSort: true }
        },
        sort: 'age',
        sortDir: 'desc',
        list: [
          { id: '1', name: 'Charlie', age: 28 },
          { id: '2', name: 'Alice', age: 42 },
          { id: '3', name: 'Bob', age: 35 }
        ]
      },
      {},
      {},
      { onSort }
    )

    const getRowNames = () => Array.from(host.querySelectorAll('tbody tr'))
      .map(row => row.querySelectorAll('td')[1]?.textContent)
    const getHeaderCells = () => Array.from(host.querySelectorAll('thead th'))

    // Initial render: sorted by age desc, aria-sort="descending" on age, active chip selected
    expect(getRowNames()).toEqual(['Alice', 'Bob', 'Charlie'])
    expect(getHeaderCells()[0]?.getAttribute('aria-sort')).toBeNull()
    expect(getHeaderCells()[1]?.getAttribute('aria-sort')).toBeNull()
    expect(getHeaderCells()[2]?.getAttribute('aria-sort')).toBe('descending')

    const ageChip = getHeaderCells()[2]?.querySelector('.mock-sort-chip') as HTMLButtonElement
    const nameChip = getHeaderCells()[1]?.querySelector('.mock-sort-chip') as HTMLButtonElement
    expect(ageChip.getAttribute('data-selected')).toBe('true')
    expect(ageChip.getAttribute('data-icon-active')).toBe('true')
    expect(nameChip.getAttribute('data-selected')).toBe('false')

    // Click age chip when dir is 'desc' -> resets sorting completely (Option A: does NOT snap back to props.sort)
    ageChip.click()
    await nextTick()

    expect(onSort).toHaveBeenLastCalledWith({ column: undefined, dir: undefined })
    expect(getHeaderCells()[2]?.getAttribute('aria-sort')).toBeNull()
    expect(ageChip.getAttribute('data-selected')).toBe('false')
    expect(getRowNames()).toEqual(['Charlie', 'Alice', 'Bob'])

    // Full 3-click cycle on name chip: asc -> desc -> none
    nameChip.click()
    await nextTick()
    expect(onSort).toHaveBeenLastCalledWith({ column: 'name', dir: 'asc' })
    expect(getHeaderCells()[1]?.getAttribute('aria-sort')).toBe('ascending')
    expect(nameChip.getAttribute('data-selected')).toBe('true')
    expect(nameChip.getAttribute('data-icon-active')).toBe('false')
    expect(getRowNames()).toEqual(['Alice', 'Bob', 'Charlie'])

    nameChip.click()
    await nextTick()
    expect(onSort).toHaveBeenLastCalledWith({ column: 'name', dir: 'desc' })
    expect(getHeaderCells()[1]?.getAttribute('aria-sort')).toBe('descending')
    expect(nameChip.getAttribute('data-icon-active')).toBe('true')
    expect(getRowNames()).toEqual(['Charlie', 'Bob', 'Alice'])

    nameChip.click()
    await nextTick()
    expect(onSort).toHaveBeenLastCalledWith({ column: undefined, dir: undefined })
    expect(getHeaderCells()[1]?.getAttribute('aria-sort')).toBeNull()
    expect(nameChip.getAttribute('data-selected')).toBe('false')
    expect(getRowNames()).toEqual(['Charlie', 'Alice', 'Bob'])

    // External reactive update to props.sort / props.sortDir clears user override and re-syncs
    props.sort = 'name'
    props.sortDir = 'asc'
    await nextTick()
    expect(getHeaderCells()[1]?.getAttribute('aria-sort')).toBe('ascending')
    expect(nameChip.getAttribute('data-selected')).toBe('true')
    expect(getRowNames()).toEqual(['Alice', 'Bob', 'Charlie'])
  })

  it('should render foot rows with isFoot (without scope="col"/"row") and resolve #foot-<col>, #foot-default, and #foot slots', async () => {
    const { host } = await mountTable(
      {
        columns: ['id', 'name', 'total'],
        header: {
          id: 'ID',
          name: 'Name',
          total: 'Total'
        },
        foot: [
          { id: 'Sum', name: 'All items', total: 250 },
          { id: 'Avg', name: 'Average', total: 125 }
        ]
      },
      {
        'header-total': ({ value }: { value: unknown }) => h('span', { class: 'custom-header-total' }, `H:${String(value)}`),
        'foot-total': ({ value }: { value: unknown }) => h('strong', { class: 'custom-foot-total' }, `F:${String(value)}`),
        'foot-default': ({ value, index }: { value: unknown, index: string }) => h('em', { class: 'custom-foot-default' }, `${index}:${String(value)}`),
        'foot': ({ columns }: { columns: string[] }) => h('tr', { 'class': 'extra-foot-row', 'data-cols': columns.join(',') })
      } as unknown as TableSlots
    )

    // Header cells have scope="col" and resolve #header-total
    const headerCells = Array.from(host.querySelectorAll('thead th'))
    expect(headerCells).toHaveLength(3)
    expect(headerCells.every(cell => cell.getAttribute('scope') === 'col')).toBe(true)
    expect(host.querySelector('thead .custom-header-total')?.textContent).toBe('H:Total')

    // Footer rows render <th> via TableHeaderItem WITHOUT scope="col" or scope="row"
    const footRows = Array.from(host.querySelectorAll('tfoot tr'))
    expect(footRows).toHaveLength(3)

    const footCells = Array.from(host.querySelectorAll('tfoot th'))
    expect(footCells).toHaveLength(6)
    expect(footCells.every(cell => cell.getAttribute('scope') === null)).toBe(true)

    const customTotals = Array.from(host.querySelectorAll('tfoot .custom-foot-total')).map(node => node.textContent)
    expect(customTotals).toEqual(['F:250', 'F:125'])

    const customDefaults = Array.from(host.querySelectorAll('tfoot .custom-foot-default')).map(node => node.textContent)
    expect(customDefaults).toEqual(['id:Sum', 'name:All items', 'id:Avg', 'name:Average'])

    expect(host.querySelector('tfoot tr.extra-foot-row')?.getAttribute('data-cols')).toBe('id,name,total')
  })

  it('should render caption (string, numeric 0, slot, captionDecorative) and colgroup with validated columnsWidth', async () => {
    const { host, props } = await mountTable(
      {
        caption: 0,
        columns: ['id', 'name', 'ratio', 'empty', 'invalid'],
        columnsWidth: {
          id: 0,
          name: 180,
          ratio: '25%',
          empty: '',
          invalid: Number.NaN
        }
      },
      {
        caption: () => h('span', { class: 'caption-slot-extra' }, ' items')
      }
    )

    const caption = host.querySelector('caption.d1-table__caption') as HTMLTableCaptionElement
    expect(caption).not.toBeNull()
    expect(caption.textContent).toBe('0 items')
    expect(caption.getAttribute('aria-live')).toBe('polite')
    expect(caption.getAttribute('aria-atomic')).toBe('true')
    expect(caption.getAttribute('aria-hidden')).toBeNull()

    props.captionDecorative = true
    await nextTick()
    expect(caption.getAttribute('aria-hidden')).toBe('true')
    expect(caption.getAttribute('aria-live')).toBeNull()

    const cols = Array.from(host.querySelectorAll('colgroup.d1-table__colgroup col.d1-table__col'))
    expect(cols).toHaveLength(5)
    expect(cols[0]?.getAttribute('data-col')).toBe('id')
    expect((cols[0] as HTMLElement).style.width).toBe('0px')
    expect((cols[1] as HTMLElement).style.width).toBe('180px')
    expect((cols[2] as HTMLElement).style.width).toBe('25%')
    expect((cols[3] as HTMLElement).style.width).toBe('')
    expect((cols[4] as HTMLElement).style.width).toBe('')
  })

  it('should render multi-row header with colspan/rowspan and pass columns to #body, #header, #items, and #foot slots', async () => {
    const { host } = await mountTable(
      {
        header: [
          {
            first: { label: 'User Info', colspan: 2 },
            last: '*none',
            status: { label: 'Status', rowspan: 2 }
          },
          {
            first: 'First',
            last: 'Last',
            status: '*none'
          }
        ]
      },
      {
        body: () => h('tbody', { class: 'custom-body-slot' }),
        header: ({ columns }: { columns: string[] }) => h('tr', { 'class': 'slot-header', 'data-cols': columns.join(',') }),
        items: ({ columns }: { columns: string[] }) => h('tr', { 'class': 'slot-items', 'data-cols': columns.join(',') }),
        foot: ({ columns }: { columns: string[] }) => h('tr', { 'class': 'slot-foot', 'data-cols': columns.join(',') })
      } as unknown as TableSlots
    )

    const headerRows = Array.from(host.querySelectorAll('thead tr'))
    expect(headerRows).toHaveLength(3)
    expect(host.querySelector('thead th[colspan="2"]')?.textContent).toContain('User Info')
    expect(host.querySelector('thead th[rowspan="2"]')?.textContent).toContain('Status')

    expect(host.querySelector('tbody.custom-body-slot')).not.toBeNull()
    expect(host.querySelector('thead tr.slot-header')?.getAttribute('data-cols')).toBe('first,last,status')
    expect(host.querySelector('tbody tr.slot-items')?.getAttribute('data-cols')).toBe('first,last,status')
    expect(host.querySelector('tfoot tr.slot-foot')?.getAttribute('data-cols')).toBe('first,last,status')
  })

  it('should wrap table in ScrollSticky when component is registered and stickyScrollBottom is true, merging attrs, and fall back to div otherwise', async () => {
    const onClick = vi.fn()
    const { host, props } = await mountTable(
      {
        stickyScrollBottom: true
      },
      {},
      {
        class: 'sticky-ext',
        style: { paddingTop: '8px' },
        onClick
      },
      {
        includeScrollSticky: true
      }
    )

    const stickyRoot = host.querySelector('[data-scroll-sticky="true"]') as HTMLDivElement
    expect(stickyRoot).not.toBeNull()
    expect(stickyRoot.classList.contains('d1-table')).toBe(true)
    expect(stickyRoot.classList.contains('sticky-ext')).toBe(true)
    expect(stickyRoot.style.paddingTop).toBe('8px')
    expect(stickyRoot.querySelector('table.d1-table__table')).not.toBeNull()

    stickyRoot.click()
    expect(onClick).toHaveBeenCalledTimes(1)

    props.stickyScrollBottom = false
    await nextTick()

    expect(host.querySelector('[data-scroll-sticky="true"]')).toBeNull()
    const plainRoot = host.querySelector('div.d1-table.sticky-ext') as HTMLDivElement
    expect(plainRoot).not.toBeNull()
    expect(plainRoot.style.paddingTop).toBe('8px')
  })

  it('should keep StickyInclude inactive when headerTop is falsy, activate on headerTop=true, and clean up listeners on unmount', async () => {
    const stickyFixProperty = new DesignName('d1.table').getStyle('sticky-fix')
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')

    const { host, props, unmount } = await mountTable({
      stickyScrollBottom: true,
      headerTop: false,
      header: { id: 'ID', name: 'Name' },
      list: [{ id: 1, name: 'Alice' }]
    })

    const scrollAddsBefore = addSpy.mock.calls.filter(([type]) => type === 'scroll').length
    expect(scrollAddsBefore).toBe(0)

    const thead = host.querySelector('thead') as HTMLElement
    expect(thead).not.toBeNull()
    expect(thead.style.getPropertyValue(stickyFixProperty)).toBe('')

    props.headerTop = true
    await nextTick()

    const scrollAddsAfter = addSpy.mock.calls.filter(([type]) => type === 'scroll').length
    expect(scrollAddsAfter).toBeGreaterThan(0)
    expect(thead.style.getPropertyValue(stickyFixProperty)).toBe('0px')

    unmount()
    await nextTick()

    const scrollRemovesAfter = removeSpy.mock.calls.filter(([type]) => type === 'scroll').length
    expect(scrollRemovesAfter).toBe(scrollAddsAfter)
    expect(thead.style.getPropertyValue(stickyFixProperty)).toBe('')
  })
})
