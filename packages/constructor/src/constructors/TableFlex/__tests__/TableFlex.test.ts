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
import { type ConstrClasses, ServerStorage, type SortColumnItem } from '@dxtmisha/functional'

import type { TableConstructors } from '../../Table'
import { TableFlexHeaderItemDesign } from '../../TableFlexHeaderItem'
import { TableFlexItemDesign } from '../../TableFlexItem'
import { TableFlexRecordDesign, type TableFlexRecordProps } from '../../TableFlexRecord'
import { TableFlex } from '../TableFlex'
import { TableFlexDesign } from '../TableFlexDesign'
import type { TableFlexProps } from '../props'
import type {
  TableFlexClasses,
  TableFlexComponents,
  TableFlexExpose,
  TableFlexSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTableFlex extends TableFlex {
  get instantiatedItems(): Partial<Record<keyof TableConstructors, unknown>> {
    return this.instances
  }
}

function installIntersectionObserverMock() {
  const original = globalThis.IntersectionObserver
  const observe = vi.fn()
  const unobserve = vi.fn()
  const disconnect = vi.fn()
  let callback: IntersectionObserverCallback | undefined

  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null
    readonly rootMargin: string = '128px 0px'
    readonly scrollMargin: string = '0px'
    readonly thresholds: ReadonlyArray<number> = [0]

    constructor(observerCallback: IntersectionObserverCallback) {
      callback = observerCallback
    }

    observe(target: Element): void {
      observe(target)
    }

    unobserve(target: Element): void {
      unobserve(target)
    }

    disconnect(): void {
      disconnect()
    }

    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }

  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  ServerStorage.reset()

  mountedCleanups.push(() => {
    vi.stubGlobal('IntersectionObserver', original)
    ServerStorage.reset()
  })

  return {
    observe,
    unobserve,
    disconnect,
    trigger(target: Element, isIntersecting: boolean) {
      callback?.(
        [
          {
            target,
            isIntersecting,
            intersectionRatio: isIntersecting ? 1 : 0
          } as IntersectionObserverEntry
        ],
        {} as IntersectionObserver
      )
    }
  }
}

const RealTableFlexItemComponent = defineComponent({
  name: 'RealTableFlexItem',
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
        'd1-tableFlexItem': true,
        'd1-tableFlexItem--selected': props.selected,
        'd1-tableFlexItem--disabled': props.disabled,
        'd1-tableFlexItem--stickyTop': props.stickyTop,
        'd1-tableFlexItem--stickyLeft': props.stickyLeft
      }
    }))
    const design = new TableFlexItemDesign(
      'd1.tableFlexItem',
      props,
      {
        classes,
        slots
      } as unknown as ConstructorParameters<typeof TableFlexItemDesign>[2]
    )
    return design.render()
  }
})

const MockSortChipComponent = defineComponent({
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
      'data-selected': String(Boolean(props.selected)),
      'onClick': (event: MouseEvent) => emit('click', event)
    }, 'sort')
  }
})

const RealTableFlexHeaderItemComponent = defineComponent({
  name: 'RealTableFlexHeaderItem',
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
        'd1-tableFlexHeaderItem': true,
        'd1-tableFlexHeaderItem--selected': props.selected,
        'd1-tableFlexHeaderItem--disabled': props.disabled
      }
    }))
    const design = new TableFlexHeaderItemDesign(
      'd1.tableFlexHeaderItem',
      props as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[1],
      {
        classes,
        emits: emit,
        slots,
        components: {
          chip: MockSortChipComponent
        }
      } as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[2]
    )
    return design.render()
  }
})

const RealTableFlexRecordComponent = defineComponent({
  name: 'RealTableFlexRecord',
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
        'd1-tableFlexRecord': true,
        'd1-tableFlexRecord--disabled': props.disabled,
        'd1-tableFlexRecord--selected': props.selected
      }
    }))
    const design = new TableFlexRecordDesign(
      'd1.tableFlexRecord',
      props as TableFlexRecordProps,
      {
        emits: emit,
        classes,
        slots,
        components: {
          tableHeaderItem: RealTableFlexHeaderItemComponent,
          tableItem: RealTableFlexItemComponent
        }
      } as unknown as ConstructorParameters<typeof TableFlexRecordDesign>[2]
    )
    return design.render()
  }
})

const MockScrollStickyComponent = defineComponent({
  name: 'MockScrollSticky',
  setup(_, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        'data-mock-scroll-sticky': 'true'
      },
      slots.default?.()
    )
  }
})

async function mountTableFlex(
  initialProps: TableFlexProps = {},
  customSlots: TableFlexSlots = {},
  extraAttrs: Record<string, unknown> = {},
  onSort?: (item: SortColumnItem) => void
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<TableFlexProps>(initialProps)
  let logicInstance!: InspectableTableFlex

  class TestTableFlexDesign extends TableFlexDesign<
    TableFlexComponents,
    TableFlexExpose,
    TableFlexClasses,
    TableFlexProps
  > {
    get logic(): InspectableTableFlex {
      return this.item as InspectableTableFlex
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    emits: ['sort'],
    setup(_, { attrs, emit, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-tableFlex': true,
          'd1-tableFlex--headerTop': props.headerTop,
          'd1-tableFlex--captionBottom': props.captionBottom,
          'd1-tableFlex--bleed': props.bleed
        }
      }))

      const design = new TestTableFlexDesign(
        'd1.tableFlex',
        props,
        {
          emits: emit,
          classes,
          slots,
          components: {
            tableRecord: RealTableFlexRecordComponent,
            scrollSticky: MockScrollStickyComponent
          }
        } as unknown as ConstructorParameters<typeof TableFlexDesign>[2],
        InspectableTableFlex as unknown as typeof TableFlex
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
  const unmount = () => app.unmount()
  mountedCleanups.push(unmount)

  await nextTick()

  return {
    host,
    props,
    logic: logicInstance,
    unmount
  }
}

describe('TableFlex (Integration)', () => {
  it('should render div-based role="table" hierarchy with zero native table/colgroup tags and keep optional helpers lazy', async () => {
    const { host, logic } = await mountTableFlex(
      {
        columns: ['id', 'name'],
        columnsWidth: { id: 80, name: '240px' },
        header: { id: 'ID', name: 'Name' },
        list: [
          { id: 0, name: 'Nguyễn — Привет 🚀' },
          { id: 1, name: 'Alice', disabled: true }
        ],
        keyValue: 'id',
        selected: ['0'],
        lazy: false,
        stickyScrollBottom: false
      },
      {},
      { class: 'custom-flex-table', style: { padding: '8px' } }
    )

    const root = host.querySelector('.d1-tableFlex') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.tagName).toBe('DIV')
    expect(root.classList.contains('custom-flex-table')).toBe(true)
    expect(root.style.padding).toBe('8px')

    const tableElement = root.querySelector('.d1-tableFlex__table') as HTMLDivElement
    expect(tableElement).not.toBeNull()
    expect(tableElement.tagName).toBe('DIV')
    expect(tableElement.getAttribute('role')).toBe('table')

    // Zero native HTML table tags anywhere in DOM
    expect(root.querySelector('table, thead, tbody, tfoot, colgroup, col, tr, th, td')).toBeNull()

    expect(tableElement.querySelector('.d1-tableFlex__header')?.getAttribute('role')).toBe('rowgroup')
    expect(tableElement.querySelector('.d1-tableFlex__items')?.getAttribute('role')).toBe('rowgroup')

    const headerCells = Array.from(tableElement.querySelectorAll('.d1-tableFlex__header [role="columnheader"]'))
    expect(headerCells).toHaveLength(2)
    expect(headerCells.map(cell => cell.textContent)).toEqual(['ID', 'Name'])

    const rows = Array.from(tableElement.querySelectorAll('.d1-tableFlex__items [role="row"]'))
    expect(rows).toHaveLength(2)
    expect(rows[0]?.getAttribute('data-key')).toBe('0')
    expect(rows[0]?.getAttribute('aria-selected')).toBe('true')
    expect(rows[0]?.getAttribute('aria-disabled')).toBeNull()
    expect(Array.from(rows[0]!.querySelectorAll('[role="cell"]')).map(cell => cell.textContent)).toEqual([
      '0',
      'Nguyễn — Привет 🚀'
    ])
    expect(rows[1]?.getAttribute('data-key')).toBe('1')
    expect(rows[1]?.getAttribute('aria-disabled')).toBe('true')

    // Caption was not provided so CaptionInclude stayed lazy
    expect(logic.hasInstance('caption')).toBe(false)
    expect(logic.hasInstance('columns')).toBe(true)
    expect(logic.hasInstance('pagination')).toBe(true)
    expect(logic.hasInstance('tableRecord')).toBe(true)
  })

  it('should virtualize data rows via lazy + defaultHeight while rendering header and footer rows eagerly', async () => {
    const observer = installIntersectionObserverMock()
    const { host, props, unmount } = await mountTableFlex({
      columns: ['id', 'name'],
      header: { id: 'ID', name: 'Name' },
      list: [
        { id: 1, name: 'Row One' },
        { id: 2, name: 'Row Two' }
      ],
      foot: { id: 'Total', name: '2' },
      keyValue: 'id',
      lazy: true,
      defaultHeight: 56,
      stickyScrollBottom: false
    })

    // Header and footer rows are NOT lazy-observed and render cells immediately
    expect(host.querySelectorAll('.d1-tableFlex__header [role="columnheader"]')).toHaveLength(2)
    expect(host.querySelectorAll('.d1-tableFlex__foot [role="columnheader"]')).toHaveLength(2)
    expect(host.querySelector('.d1-tableFlex__header .d1-tableFlexRecord--lazy')).toBeNull()
    expect(host.querySelector('.d1-tableFlex__foot .d1-tableFlexRecord--lazy')).toBeNull()

    // Both data rows are observed via IntersectionObserver and start hidden with minHeight token
    const dataRows = Array.from(host.querySelectorAll('.d1-tableFlex__items [role="row"]')) as HTMLDivElement[]
    expect(dataRows).toHaveLength(2)
    expect(observer.observe).toHaveBeenCalledTimes(2)
    expect(dataRows[0]?.style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('56px')
    expect(dataRows[0]?.classList.contains('d1-tableFlexRecord--lazy--hidden')).toBe(true)
    expect(dataRows[0]?.querySelectorAll('[role="cell"]')).toHaveLength(0)

    // Intersect first row only -> first row renders cells, second remains hidden
    observer.trigger(dataRows[0]!, true)
    await nextTick()
    expect(dataRows[0]?.classList.contains('d1-tableFlexRecord--lazy--visible')).toBe(true)
    expect(Array.from(dataRows[0]!.querySelectorAll('[role="cell"]')).map(cell => cell.textContent)).toEqual([
      '1',
      'Row One'
    ])
    expect(dataRows[1]?.querySelectorAll('[role="cell"]')).toHaveLength(0)

    // Disable lazy dynamically -> unobserves both rows and renders all cells immediately
    props.lazy = false
    await nextTick()
    expect(observer.unobserve).toHaveBeenCalledTimes(2)
    expect(dataRows[1]?.querySelectorAll('[role="cell"]')).toHaveLength(2)

    // Re-enable lazy and unmount -> clean unobserve
    props.lazy = true
    await nextTick()
    expect(observer.observe).toHaveBeenCalledTimes(4)
    unmount()
    expect(observer.unobserve).toHaveBeenCalledTimes(4)
  })

  it('should render footer rows with isFoot=true and project #foot-* and #foot-default slots without colliding with #header-* or cell slots', async () => {
    const { host } = await mountTableFlex(
      {
        caption: 'Financial Report',
        columns: ['item', 'amount', 'currency'],
        header: { item: 'Item', amount: 'Amount', currency: 'Currency' },
        list: [{ item: 'Widget', amount: 0, currency: 'USD' }],
        foot: { item: 'Summary', amount: 1200, currency: 'USD' },
        lazy: false,
        stickyScrollBottom: false
      },
      {
        'header-amount': ({ value }) => h('span', { class: 'custom-header-amount' }, `H:${String(value)}`),
        'amount': ({ value }) => h('span', { class: 'custom-cell-amount' }, `C:${String(value)}`),
        'foot-amount': ({ value }) => h('strong', { class: 'custom-foot-amount' }, `F:${String(value)}`),
        'foot-default': ({ index, value }) => h('em', { class: `custom-foot-default-${index}` }, `FD:${String(value)}`)
      }
    )

    expect(host.querySelector('.d1-tableFlex__caption')?.tagName).toBe('DIV')
    expect(host.querySelector('.d1-tableFlex__caption')?.textContent).toBe('Financial Report')

    // Header slot
    expect(host.querySelector('.d1-tableFlex__header .custom-header-amount')?.textContent).toBe('H:Amount')

    // Data cell slot (including falsy numeric 0)
    expect(host.querySelector('.d1-tableFlex__items .custom-cell-amount')?.textContent).toBe('C:0')

    // Footer named and default fallback slots
    const footContainer = host.querySelector('.d1-tableFlex__foot') as HTMLDivElement
    expect(footContainer).not.toBeNull()
    expect(footContainer.tagName).toBe('DIV')
    expect(footContainer.getAttribute('role')).toBe('rowgroup')
    expect(footContainer.querySelector('.custom-foot-amount')?.textContent).toBe('F:1200')
    expect(footContainer.querySelector('.custom-foot-default-item')?.textContent).toBe('FD:Summary')
    expect(footContainer.querySelector('.custom-foot-default-currency')?.textContent).toBe('FD:USD')

    // Footer header items must NOT carry scope attribute
    const footCells = Array.from(footContainer.querySelectorAll('[role="columnheader"]'))
    expect(footCells).toHaveLength(3)
    footCells.forEach((cell) => {
      expect(cell.getAttribute('scope')).toBeNull()
    })
  })

  it('should synchronize interactive sorting via provide/inject, reorder DOM rows, emit sort, and reset on external prop update', async () => {
    const onSort = vi.fn()
    const sourceList = [
      { id: 'c', name: 'Charlie', score: 20 },
      { id: 'a', name: 'Alice', score: 10 },
      { id: 'b', name: 'Bob', score: 30 }
    ]

    const { host, props } = await mountTableFlex(
      {
        columns: ['name', 'score'],
        header: {
          name: { label: 'Name', showSort: true },
          score: { label: 'Score', showSort: true }
        },
        list: sourceList,
        keyValue: 'id',
        lazy: false,
        stickyScrollBottom: false
      },
      {},
      {},
      onSort
    )

    const getRenderedNames = () => Array.from(
      host.querySelectorAll('.d1-tableFlex__items [role="row"]')
    ).map(row => row.querySelector('[role="cell"]')?.textContent)

    expect(getRenderedNames()).toEqual(['Charlie', 'Alice', 'Bob'])

    const sortButtons = Array.from(host.querySelectorAll('.mock-sort-chip')) as HTMLButtonElement[]
    expect(sortButtons).toHaveLength(2)

    // 1st click on Name -> ascending
    sortButtons[0]!.click()
    await nextTick()
    expect(onSort).toHaveBeenLastCalledWith(expect.objectContaining({ column: 'name', dir: 'asc' }))
    expect(getRenderedNames()).toEqual(['Alice', 'Bob', 'Charlie'])
    expect(sortButtons[0]?.getAttribute('data-selected')).toBe('true')
    expect(sortButtons[1]?.getAttribute('data-selected')).toBe('false')

    // 2nd click on Name -> descending
    sortButtons[0]!.click()
    await nextTick()
    expect(onSort).toHaveBeenLastCalledWith(expect.objectContaining({ column: 'name', dir: 'desc' }))
    expect(getRenderedNames()).toEqual(['Charlie', 'Bob', 'Alice'])

    // 3rd click on Name -> clear sort (restores source order)
    sortButtons[0]!.click()
    await nextTick()
    expect(onSort).toHaveBeenLastCalledWith(expect.objectContaining({ column: undefined, dir: undefined }))
    expect(getRenderedNames()).toEqual(['Charlie', 'Alice', 'Bob'])
    expect(sortButtons[0]?.getAttribute('data-selected')).toBe('false')

    // External props.sort/sortDir override syncs DOM and header sort state
    props.sort = 'score'
    props.sortDir = 'desc'
    await nextTick()
    expect(getRenderedNames()).toEqual(['Bob', 'Charlie', 'Alice'])
    expect(sortButtons[1]?.getAttribute('data-selected')).toBe('true')
  })

  it('should filter rows via search (including regex metacharacters) and paginate with rows/page props', async () => {
    const { host, props } = await mountTableFlex({
      columns: ['id', 'title'],
      header: { id: 'ID', title: 'Title' },
      list: [
        { id: 1, title: 'C++ Core' },
        { id: 2, title: 'TypeScript $10' },
        { id: 3, title: 'Vue 3 Guide' },
        { id: 4, title: 'Tiếng Việt' },
        { id: 5, title: 'Привет Мир' }
      ],
      keyValue: 'id',
      lazy: false,
      page: 1,
      rows: 2,
      stickyScrollBottom: true
    })

    const getRenderedTitles = () => Array.from(
      host.querySelectorAll('.d1-tableFlex__items [role="row"]')
    ).map(row => row.querySelectorAll('[role="cell"]')[1]?.textContent)

    // ScrollSticky active when stickyScrollBottom=true
    expect(host.querySelector('[data-mock-scroll-sticky="true"]')).not.toBeNull()

    // Page 1 of 5 rows (2 per page)
    expect(getRenderedTitles()).toEqual(['C++ Core', 'TypeScript $10'])

    // Page 2
    props.page = 2
    await nextTick()
    expect(getRenderedTitles()).toEqual(['Vue 3 Guide', 'Tiếng Việt'])

    // Page 3
    props.page = 3
    await nextTick()
    expect(getRenderedTitles()).toEqual(['Привет Мир'])

    // Search with regex metacharacters (C++)
    props.page = 1
    props.search = 'C++'
    await nextTick()
    expect(getRenderedTitles()).toEqual(['C++ Core'])

    // Search with $ metacharacter
    props.search = '$10'
    await nextTick()
    expect(getRenderedTitles()).toEqual(['TypeScript $10'])

    // Search with Cyrillic case-folding
    props.search = 'привет'
    await nextTick()
    expect(getRenderedTitles()).toEqual(['Привет Мир'])

    // Clear search
    props.search = ''
    await nextTick()
    expect(getRenderedTitles()).toEqual(['C++ Core', 'TypeScript $10'])
  })
})
