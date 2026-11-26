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
import type { ConstrClasses, SortColumnItem } from '@dxtmisha/functional'

import { TableHeaderItemDesign } from '../../TableHeaderItem'
import { TableItemDesign } from '../../TableItem'
import { TableRecord, type TableRecordConstructors } from '../TableRecord'
import { TableRecordDesign } from '../TableRecordDesign'
import type { TableRecordProps } from '../props'
import type {
  TableRecordClasses,
  TableRecordComponents,
  TableRecordExpose,
  TableRecordSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTableRecord extends TableRecord {
  get instantiatedItems(): Partial<Record<keyof TableRecordConstructors, unknown>> {
    return this.instances
  }
}

const RealTableItemComponent = defineComponent({
  name: 'RealTableItem',
  props: {
    label: [String, Number],
    description: [String, Number],
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
      props,
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
  setup(_, { emit, attrs }) {
    return () => h('button', {
      ...attrs,
      type: 'button',
      class: 'mock-sort-chip',
      onClick: (event: MouseEvent) => emit('click', event)
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

async function mountTableRecord(
  initialProps: TableRecordProps = {},
  customSlots: TableRecordSlots = {},
  extraAttrs: Record<string, unknown> = {},
  onSort?: (item: SortColumnItem) => void
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<TableRecordProps>(initialProps)
  let logicInstance!: InspectableTableRecord

  class TestTableRecordDesign extends TableRecordDesign<
    TableRecordComponents,
    TableRecordExpose,
    TableRecordClasses,
    TableRecordProps
  > {
    get logic(): InspectableTableRecord {
      return this.item as InspectableTableRecord
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    emits: ['sort'],
    setup(_, { attrs, emit, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-tableRecord': true,
          'd1-tableRecord--disabled': props.disabled,
          'd1-tableRecord--selected': props.selected
        }
      }))

      const design = new TestTableRecordDesign(
        'd1.tableRecord',
        props,
        {
          emits: emit,
          classes,
          slots,
          components: {
            tableHeaderItem: RealTableHeaderItemComponent,
            tableItem: RealTableItemComponent
          }
        } as unknown as ConstructorParameters<typeof TableRecordDesign>[2],
        InspectableTableRecord as unknown as typeof TableRecord
      )

      logicInstance = design.logic
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const app = createApp({
    render: () => h('table', [
      h('tbody', [
        h(
          Host,
          {
            ...extraAttrs,
            ...(onSort ? { onSort } : {})
          },
          customSlots as Record<string, () => unknown>
        )
      ])
    ])
  })
  app.mount(host)
  mountedCleanups.push(() => app.unmount())

  await nextTick()

  return {
    host,
    props,
    logic: logicInstance
  }
}

describe('TableRecord (Integration)', () => {
  it('should render empty tr without ARIA false positives and keep both cell helpers lazy', async () => {
    const { host, logic } = await mountTableRecord(
      {},
      {},
      { class: 'custom-row', style: { backgroundColor: 'rgb(240, 240, 240)' } }
    )

    const row = host.querySelector('.d1-tableRecord') as HTMLTableRowElement
    expect(row).not.toBeNull()
    expect(row.tagName).toBe('TR')
    expect(row.classList.contains('custom-row')).toBe(true)
    expect(row.style.backgroundColor).toBe('rgb(240, 240, 240)')
    expect(row.getAttribute('data-key')).toBeNull()
    expect(row.getAttribute('aria-disabled')).toBeNull()
    expect(row.getAttribute('aria-selected')).toBeNull()
    expect(row.children).toHaveLength(0)

    expect(logic.hasInstance('tableItem')).toBe(false)
    expect(logic.hasInstance('tableHeaderItem')).toBe(false)
  })

  it('should render data row cells lazily (without creating tableHeaderItem) with numeric 0, *none, and Unicode', async () => {
    const { host, props, logic } = await mountTableRecord({
      index: 'row-0',
      columns: ['id', 'name', 'hidden'],
      item: {
        id: 0,
        name: 'Nguyễn — Привет 🚀',
        hidden: '*none'
      },
      stickyLeft: ['id']
    })

    const row = host.querySelector('tr.d1-tableRecord') as HTMLTableRowElement
    expect(row.getAttribute('data-key')).toBe('row-0')
    expect(logic.hasInstance('tableItem')).toBe(true)
    expect(logic.hasInstance('tableHeaderItem')).toBe(false)

    const cells = Array.from(row.querySelectorAll('td'))
    expect(cells).toHaveLength(3)
    expect(cells[0]?.textContent).toBe('0')
    expect(cells[0]?.classList.contains('d1-tableItem--stickyLeft')).toBe(true)
    expect(cells[1]?.textContent).toBe('Nguyễn — Привет 🚀')
    expect(cells[2]?.classList.contains('d1-tableRecord--none')).toBe(true)

    props.selected = true
    props.disabled = true
    await nextTick()
    expect(row.getAttribute('aria-selected')).toBe('true')
    expect(row.getAttribute('aria-disabled')).toBe('true')
    expect(cells[0]?.getAttribute('aria-selected')).toBe('true')
    expect(cells[0]?.getAttribute('aria-disabled')).toBe('true')

    props.selected = false
    props.disabled = false
    await nextTick()
    expect(row.getAttribute('aria-selected')).toBeNull()
    expect(row.getAttribute('aria-disabled')).toBeNull()
  })

  it('should render header row lazily (without creating tableItem) with scope="col" and bubble sort events', async () => {
    const onSort = vi.fn()
    const { host, logic } = await mountTableRecord(
      {
        index: 'header-0',
        isHeader: true,
        columns: ['name', 'score'],
        item: {
          name: { label: 'Name', showSort: true },
          score: 'Score'
        }
      },
      {},
      {},
      onSort
    )

    expect(logic.hasInstance('tableHeaderItem')).toBe(true)
    expect(logic.hasInstance('tableItem')).toBe(false)

    const headerCells = Array.from(host.querySelectorAll('th'))
    expect(headerCells).toHaveLength(2)
    expect(headerCells[0]?.getAttribute('scope')).toBe('col')
    expect(headerCells[1]?.getAttribute('scope')).toBe('col')
    expect(headerCells[0]?.querySelector('.d1-tableHeaderItem__label')?.textContent).toBe('Name')
    expect(headerCells[1]?.querySelector('.d1-tableHeaderItem__label')?.textContent).toBe('Score')

    const sortButton = headerCells[0]?.querySelector('.mock-sort-chip') as HTMLButtonElement
    expect(sortButton).not.toBeNull()
    sortButton.click()
    await nextTick()

    expect(onSort).toHaveBeenCalledTimes(1)
    expect(onSort).toHaveBeenCalledWith(expect.objectContaining({
      column: 'name',
      dir: 'asc'
    }))
  })

  it('should render mixed row with per-cell isHeader: true using scope="row" alongside regular td cells', async () => {
    const { host, logic } = await mountTableRecord({
      index: 'metric-1',
      columns: ['metric', 'q1'],
      item: {
        metric: { label: 'Revenue', isHeader: true },
        q1: 1200
      }
    })

    expect(logic.hasInstance('tableHeaderItem')).toBe(true)
    expect(logic.hasInstance('tableItem')).toBe(true)

    const headerCell = host.querySelector('th') as HTMLTableCellElement
    const dataCell = host.querySelector('td') as HTMLTableCellElement
    expect(headerCell).not.toBeNull()
    expect(headerCell.getAttribute('scope')).toBe('row')
    expect(headerCell.querySelector('.d1-tableHeaderItem__label')?.textContent).toBe('Revenue')
    expect(dataCell).not.toBeNull()
    expect(dataCell.querySelector('.d1-tableItem__label')?.textContent).toBe('1200')
  })

  it('should project named column slots, default slot, and header slots and toggle skeleton classes reactively', async () => {
    const { host, props } = await mountTableRecord(
      {
        index: 'row-slots',
        columns: ['name', 'role'],
        item: {
          name: 'Alice',
          role: 'Engineer'
        },
        isSkeleton: false
      },
      {
        name: ({ value, classes }) => h('strong', { class: classes.label }, `Named:${String(value)}`),
        default: ({ value }) => h('em', { class: 'default-slot-cell' }, `Default:${String(value)}`)
      }
    )

    expect(host.querySelector('strong.d1-tableItem__label')?.textContent).toBe('Named:Alice')
    expect(host.querySelector('em.default-slot-cell')?.textContent).toBe('Default:Engineer')

    props.isHeader = true
    props.isSkeleton = true
    await nextTick()

    const headerCells = Array.from(host.querySelectorAll('th'))
    expect(headerCells).toHaveLength(2)
    expect(headerCells[0]?.querySelector('.d1-skeleton__textVariant')).not.toBeNull()
  })

  it('should compose external row click handlers via mergeProps without losing data-key', async () => {
    const onClick = vi.fn()
    const { host } = await mountTableRecord(
      {
        index: 'clickable-row',
        columns: ['title'],
        item: { title: 'Item' }
      },
      {},
      { onClick }
    )

    const row = host.querySelector('tr.d1-tableRecord') as HTMLTableRowElement
    expect(row.getAttribute('data-key')).toBe('clickable-row')
    row.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
