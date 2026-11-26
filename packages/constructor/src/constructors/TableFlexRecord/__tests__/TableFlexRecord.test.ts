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

import { TableFlexHeaderItemDesign } from '../../TableFlexHeaderItem'
import { TableFlexItemDesign } from '../../TableFlexItem'
import { TableFlexRecord, type TableFlexRecordConstructors } from '../TableFlexRecord'
import { TableFlexRecordDesign } from '../TableFlexRecordDesign'
import type { TableFlexRecordProps } from '../props'
import type {
  TableFlexRecordClasses,
  TableFlexRecordComponents,
  TableFlexRecordExpose,
  TableFlexRecordSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTableFlexRecord extends TableFlexRecord {
  get instantiatedItems(): Partial<Record<keyof TableFlexRecordConstructors, unknown>> {
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

    constructor(cb: IntersectionObserverCallback) {
      callback = cb
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
  setup(_, { emit, attrs }) {
    return () => h('button', {
      ...attrs,
      type: 'button',
      class: 'mock-sort-chip',
      onClick: (event: MouseEvent) => emit('click', event)
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

async function mountTableFlexRecord(
  initialProps: TableFlexRecordProps = {},
  customSlots: TableFlexRecordSlots = {},
  extraAttrs: Record<string, unknown> = {},
  onSort?: (item: SortColumnItem) => void
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<TableFlexRecordProps>(initialProps)
  let logicInstance!: InspectableTableFlexRecord

  class TestTableFlexRecordDesign extends TableFlexRecordDesign<
    TableFlexRecordComponents,
    TableFlexRecordExpose,
    TableFlexRecordClasses,
    TableFlexRecordProps
  > {
    get logic(): InspectableTableFlexRecord {
      return this.item as InspectableTableFlexRecord
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    emits: ['sort'],
    setup(_, { attrs, emit, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-tableFlexRecord': true,
          'd1-tableFlexRecord--disabled': props.disabled,
          'd1-tableFlexRecord--selected': props.selected
        }
      }))

      const design = new TestTableFlexRecordDesign(
        'd1.tableFlexRecord',
        props,
        {
          emits: emit,
          classes,
          slots,
          components: {
            tableHeaderItem: RealTableFlexHeaderItemComponent,
            tableItem: RealTableFlexItemComponent
          }
        } as unknown as ConstructorParameters<typeof TableFlexRecordDesign>[2],
        InspectableTableFlexRecord as unknown as typeof TableFlexRecord
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

describe('TableFlexRecord (Integration)', () => {
  it('should render empty div[role="row"] without false-positive ARIA and keep all helpers lazy when lazy=false', async () => {
    const { host, logic } = await mountTableFlexRecord(
      { lazy: false },
      {},
      { class: 'custom-flex-row', style: { backgroundColor: 'rgb(245, 245, 245)' } }
    )

    const row = host.querySelector('.d1-tableFlexRecord') as HTMLDivElement
    expect(row).not.toBeNull()
    expect(row.tagName).toBe('DIV')
    expect(row.getAttribute('role')).toBe('row')
    expect(row.classList.contains('custom-flex-row')).toBe(true)
    expect(row.classList.contains('d1-tableFlexRecord--lazy')).toBe(false)
    expect(row.style.backgroundColor).toBe('rgb(245, 245, 245)')
    expect(row.getAttribute('data-key')).toBeNull()
    expect(row.getAttribute('aria-disabled')).toBeNull()
    expect(row.getAttribute('aria-selected')).toBeNull()
    expect(row.children).toHaveLength(0)

    expect(logic.hasInstance('lazy')).toBe(false)
    expect(logic.hasInstance('tableItem')).toBe(false)
    expect(logic.hasInstance('tableHeaderItem')).toBe(false)
  })

  it('should virtualize row cells via IntersectionObserver, apply minHeight style, and unobserve cleanly on unmount', async () => {
    const observer = installIntersectionObserverMock()
    const { host, props, logic, unmount } = await mountTableFlexRecord({
      index: 'lazy-row-1',
      lazy: true,
      defaultHeight: 48,
      columns: ['id', 'name'],
      item: {
        id: 0,
        name: 'Nguyễn — Привет 🚀'
      }
    })

    const row = host.querySelector('.d1-tableFlexRecord') as HTMLDivElement
    expect(row).not.toBeNull()
    expect(logic.hasInstance('lazy')).toBe(true)
    expect(observer.observe).toHaveBeenCalledTimes(1)
    expect(observer.observe).toHaveBeenCalledWith(row)

    // Initially off-screen after mount -> hidden state, no cell VNodes rendered
    expect(row.classList.contains('d1-tableFlexRecord--lazy')).toBe(true)
    expect(row.classList.contains('d1-tableFlexRecord--lazy--hidden')).toBe(true)
    expect(row.classList.contains('d1-tableFlexRecord--lazy--visible')).toBe(false)
    expect(row.style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('48px')
    expect(row.querySelectorAll('[role="cell"]')).toHaveLength(0)

    // Enter viewport -> cells render
    observer.trigger(row, true)
    await nextTick()
    expect(row.classList.contains('d1-tableFlexRecord--lazy--visible')).toBe(true)
    expect(row.classList.contains('d1-tableFlexRecord--lazy--hidden')).toBe(false)
    const cells = Array.from(row.querySelectorAll('[role="cell"]'))
    expect(cells).toHaveLength(2)
    expect(cells[0]?.textContent).toBe('0')
    expect(cells[1]?.textContent).toBe('Nguyễn — Привет 🚀')

    // Leave viewport -> cells unmount
    observer.trigger(row, false)
    await nextTick()
    expect(row.classList.contains('d1-tableFlexRecord--lazy--hidden')).toBe(true)
    expect(row.querySelectorAll('[role="cell"]')).toHaveLength(0)

    // Disable lazy dynamically -> unobserve and show cells immediately
    props.lazy = false
    await nextTick()
    expect(observer.unobserve).toHaveBeenCalledTimes(1)
    expect(row.classList.contains('d1-tableFlexRecord--lazy')).toBe(false)
    expect(row.style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('')
    expect(row.querySelectorAll('[role="cell"]')).toHaveLength(2)

    // Re-enable lazy and unmount -> must unobserve again
    props.lazy = true
    await nextTick()
    expect(observer.observe).toHaveBeenCalledTimes(2)
    unmount()
    expect(observer.unobserve).toHaveBeenCalledTimes(2)
  })

  it('should render header row without lazy instantiation, with role="columnheader" and bubbling sort events', async () => {
    const observer = installIntersectionObserverMock()
    const onSort = vi.fn()
    const { host, logic } = await mountTableFlexRecord(
      {
        index: 'header-0',
        isHeader: true,
        lazy: true,
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

    expect(logic.hasInstance('lazy')).toBe(false)
    expect(logic.hasInstance('tableHeaderItem')).toBe(true)
    expect(logic.hasInstance('tableItem')).toBe(false)
    expect(observer.observe).not.toHaveBeenCalled()

    const headerCells = Array.from(host.querySelectorAll('[role="columnheader"]'))
    expect(headerCells).toHaveLength(2)
    expect(headerCells[0]?.querySelector('.d1-tableFlexHeaderItem__label')?.textContent).toBe('Name')
    expect(headerCells[1]?.querySelector('.d1-tableFlexHeaderItem__label')?.textContent).toBe('Score')

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

  it('should render data rows with numeric 0, *none, stickyLeft, reactive selected/disabled, mixed headers, slots, and skeleton', async () => {
    const { host, props, logic } = await mountTableFlexRecord(
      {
        index: 'row-0',
        lazy: false,
        columns: ['metric', 'count', 'hidden', 'note'],
        item: {
          metric: { label: 'Revenue', isHeader: true },
          count: 0,
          hidden: '*none',
          note: 'Active'
        },
        stickyLeft: ['metric'],
        isSkeleton: false
      },
      {
        note: ({ value, classes }) => h('strong', { class: classes.label }, `Slot:${String(value)}`)
      }
    )

    const row = host.querySelector('.d1-tableFlexRecord') as HTMLDivElement
    expect(row.getAttribute('data-key')).toBe('row-0')
    expect(logic.hasInstance('tableHeaderItem')).toBe(true)
    expect(logic.hasInstance('tableItem')).toBe(true)
    expect(logic.hasInstance('lazy')).toBe(false)

    const headerCell = row.querySelector('[role="rowheader"]') as HTMLDivElement
    expect(headerCell).not.toBeNull()
    expect(headerCell.querySelector('.d1-tableFlexHeaderItem__label')?.textContent).toBe('Revenue')

    const cells = Array.from(row.querySelectorAll('[role="cell"]'))
    expect(cells).toHaveLength(3)
    expect(cells[0]?.textContent).toBe('0')
    expect(cells[1]?.classList.contains('d1-tableFlexRecord--none')).toBe(true)
    expect(cells[2]?.querySelector('strong.d1-tableItem__label')?.textContent).toBe('Slot:Active')

    props.selected = true
    props.disabled = true
    props.isSkeleton = true
    await nextTick()

    expect(row.getAttribute('aria-selected')).toBe('true')
    expect(row.getAttribute('aria-disabled')).toBe('true')
    expect(row.querySelector('.d1-skeleton__textVariant')).not.toBeNull()
  })

  it('should compose external row click handlers via mergeProps without losing role="row" or data-key', async () => {
    const onClick = vi.fn()
    const { host } = await mountTableFlexRecord(
      {
        index: 'clickable-flex-row',
        lazy: false,
        columns: ['title'],
        item: { title: 'Item' }
      },
      {},
      { onClick }
    )

    const row = host.querySelector('.d1-tableFlexRecord') as HTMLDivElement
    expect(row.getAttribute('role')).toBe('row')
    expect(row.getAttribute('data-key')).toBe('clickable-flex-row')
    row.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
