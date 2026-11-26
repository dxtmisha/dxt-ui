// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  provide,
  reactive,
  ref,
  type Ref
} from 'vue'
import type { ConstrClasses, SortColumnItem, SortDir } from '@dxtmisha/functional'

import type { SortColumn } from '../../../types/sortTypes'
import { TableHeaderItem, type TableHeaderItemConstructors } from '../TableHeaderItem'
import { TableHeaderItemDesign } from '../TableHeaderItemDesign'
import type { TableHeaderItemProps } from '../props'
import type {
  TableHeaderItemClasses,
  TableHeaderItemComponents,
  TableHeaderItemExpose,
  TableHeaderItemSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTableHeaderItem extends TableHeaderItem {
  get instantiatedItems(): Partial<Record<keyof TableHeaderItemConstructors, unknown>> {
    return this.instances as Partial<Record<keyof TableHeaderItemConstructors, unknown>>
  }
}

const MockChip = defineComponent({
  name: 'MockChip',
  props: {
    icon: [String, Object],
    selected: Boolean,
    label: [String, Number]
  },
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      'button',
      {
        'type': 'button',
        'class': ['mock-chip', attrs.class],
        'data-selected': String(Boolean(props.selected)),
        'data-icon': typeof props.icon === 'string'
          ? props.icon
          : JSON.stringify(props.icon ?? ''),
        'onClick': (event: MouseEvent) => emit('click', event)
      },
      'sort'
    )
  }
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object]
  },
  setup(props, { attrs }) {
    return () => h('span', {
      ...attrs,
      'class': ['mock-icon', attrs.class],
      'data-icon': typeof props.icon === 'string' ? props.icon : JSON.stringify(props.icon ?? '')
    })
  }
})

const MockTooltip = defineComponent({
  name: 'MockTooltip',
  props: {
    label: String,
    description: String
  },
  setup(props, { attrs, slots }) {
    const open = ref(false)
    const controlBinds = {
      'class': 'mock-tooltip-trigger',
      'aria-expanded': 'false',
      'onClick': () => {
        open.value = !open.value
      },
      'onMouseover': () => {},
      'onMouseout': () => {}
    }

    return () => h(
      'span',
      {
        'class': ['mock-tooltip', attrs.class],
        'data-label': props.label,
        'data-description': props.description
      },
      [
        slots.control?.({
          ...controlBinds,
          open,
          binds: controlBinds
        }),
        slots.body
          ? h('span', { class: 'mock-tooltip-body' }, slots.body())
          : undefined
      ]
    )
  }
})

interface MountOptions {
  props?: TableHeaderItemProps
  slots?: TableHeaderItemSlots
  attrs?: Record<string, unknown>
  providedSortColumn?: Ref<SortColumn | undefined>
  providedSortDir?: Ref<SortDir | undefined>
}

async function mountTableHeaderItem(options: MountOptions = {}) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<TableHeaderItemProps>({ ...(options.props ?? {}) })
  const emittedSort: SortColumnItem[] = []
  let logicInstance!: InspectableTableHeaderItem

  class TestTableHeaderItemDesign extends TableHeaderItemDesign<
    TableHeaderItemComponents,
    TableHeaderItemExpose,
    TableHeaderItemClasses,
    TableHeaderItemProps
  > {
    get logic(): InspectableTableHeaderItem {
      return this.item as InspectableTableHeaderItem
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-tableHeaderItem': true,
          'd1-tableHeaderItem--selected': props.selected,
          'd1-tableHeaderItem--disabled': props.disabled,
          'd1-tableHeaderItem--dividerX': props.dividerX,
          'd1-tableHeaderItem--dividerY': props.dividerY,
          'd1-tableHeaderItem--labelClamp': props.labelClamp,
          'd1-tableHeaderItem--stickyTop': props.stickyTop,
          'd1-tableHeaderItem--stickyLeft': props.stickyLeft
        }
      }))

      const design = new TestTableHeaderItemDesign(
        'd1.tableHeaderItem',
        props,
        {
          classes,
          slots,
          components: {
            chip: MockChip,
            icon: MockIcon,
            tooltip: MockTooltip
          },
          emits: (event: 'sort', item: SortColumnItem) => {
            if (event === 'sort') {
              emittedSort.push(item)
            }
          }
        } as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[2],
        InspectableTableHeaderItem as unknown as typeof TableHeaderItem
      )

      logicInstance = design.logic
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const ProviderWrapper = defineComponent({
    setup() {
      if (options.providedSortColumn) {
        provide('sortColumn', options.providedSortColumn)
      }

      if (options.providedSortDir) {
        provide('sortDir', options.providedSortDir)
      }

      return () => h('table', [
        h('thead', [
          h('tr', [
            h(
              Host,
              options.attrs ?? {},
              (options.slots ?? {}) as Record<string, () => unknown>
            )
          ])
        ])
      ])
    }
  })

  const app = createApp(ProviderWrapper)
  app.mount(host)
  mountedCleanups.push(() => app.unmount())

  await nextTick()

  return {
    host,
    props,
    emittedSort,
    logic: logicInstance
  }
}

describe('TableHeaderItem (Integration)', () => {
  it('should render default th when empty, omit optional ARIA/body, and keep all 6 helpers lazy', async () => {
    const { host, logic } = await mountTableHeaderItem({
      attrs: { class: 'custom-header', style: { width: '160px' } }
    })

    const root = host.querySelector('.d1-tableHeaderItem') as HTMLTableCellElement
    expect(root).not.toBeNull()
    expect(root.tagName).toBe('TH')
    expect(root.classList.contains('custom-header')).toBe(true)
    expect(root.style.width).toBe('160px')
    expect(root.getAttribute('aria-disabled')).toBeNull()
    expect(root.getAttribute('aria-selected')).toBeNull()
    expect(root.getAttribute('aria-sort')).toBeNull()
    expect(root.getAttribute('scope')).toBeNull()
    expect(root.querySelector('.d1-tableHeaderItem__body')).toBeNull()
    expect(root.querySelector('.d1-tableHeaderItem__label')).toBeNull()
    expect(root.querySelector('.d1-tableHeaderItem__description')).toBeNull()

    expect(logic.hasInstance('chip')).toBe(false)
    expect(logic.hasInstance('description')).toBe(false)
    expect(logic.hasInstance('label')).toBe(false)
    expect(logic.hasInstance('skeleton')).toBe(false)
    expect(logic.hasInstance('sort')).toBe(false)
    expect(logic.hasInstance('tooltip')).toBe(false)
  })

  it('should render label, description, numeric 0, scope, Unicode content, and skeleton reactively', async () => {
    const { host, props, logic } = await mountTableHeaderItem({
      props: {
        label: 0,
        description: 0,
        index: 0,
        scope: 'col',
        colspan: 2,
        rowspan: 1,
        selected: true,
        disabled: true,
        isSkeleton: false
      }
    })

    const root = host.querySelector('.d1-tableHeaderItem') as HTMLTableCellElement
    expect(root.getAttribute('scope')).toBe('col')
    expect(root.getAttribute('colspan')).toBe('2')
    expect(root.getAttribute('rowspan')).toBe('1')
    expect(root.getAttribute('data-index')).toBe('0')
    expect(root.getAttribute('aria-selected')).toBe('true')
    expect(root.getAttribute('aria-disabled')).toBe('true')

    const body = root.querySelector('.d1-tableHeaderItem__body') as HTMLElement
    expect(body).not.toBeNull()
    expect(body.querySelector('.d1-tableHeaderItem__label')?.textContent).toBe('0')
    expect(root.querySelector('.d1-tableHeaderItem__description')?.textContent).toBe('0')

    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('description')).toBe(true)
    expect(logic.hasInstance('skeleton')).toBe(false)
    expect(logic.hasInstance('chip')).toBe(false)
    expect(logic.hasInstance('sort')).toBe(false)
    expect(logic.hasInstance('tooltip')).toBe(false)

    props.label = 'Nguyễn — Привет 🚀'
    props.description = 'Học tiếng Việt / 日本語'
    props.isSkeleton = true
    await nextTick()

    expect(logic.hasInstance('skeleton')).toBe(true)
    const labelElement = root.querySelector('.d1-tableHeaderItem__label') as HTMLElement
    const descriptionElement = root.querySelector('.d1-tableHeaderItem__description') as HTMLElement
    expect(labelElement.textContent).toBe('Nguyễn — Привет 🚀')
    expect(descriptionElement.textContent).toBe('Học tiếng Việt / 日本語')
    expect(labelElement.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(descriptionElement.classList.contains('d1-skeleton__textVariant')).toBe(true)
  })

  it('should execute full 3-state sort cycle via chip click and synchronize aria-sort with provided refs', async () => {
    const providedSortColumn = ref<SortColumn | undefined>(undefined)
    const providedSortDir = ref<SortDir | undefined>(undefined)

    const { host, props, emittedSort, logic } = await mountTableHeaderItem({
      props: {
        label: 'Price',
        index: 'price',
        showSort: true,
        iconSort: 'swap_vert',
        iconArrowUp: 'arrow_upward',
        iconArrowDown: 'arrow_downward'
      },
      providedSortColumn,
      providedSortDir
    })

    const root = host.querySelector('.d1-tableHeaderItem') as HTMLTableCellElement
    const chipButton = root.querySelector('.mock-chip') as HTMLButtonElement
    expect(chipButton).not.toBeNull()
    expect(chipButton.dataset.selected).toBe('false')
    expect(chipButton.dataset.icon).toBe('swap_vert')
    expect(root.getAttribute('aria-sort')).toBeNull()
    expect(logic.hasInstance('chip')).toBe(true)
    expect(logic.hasInstance('sort')).toBe(true)

    // Click 1: unsorted -> asc
    chipButton.click()
    await nextTick()
    expect(emittedSort[0]).toEqual({ column: 'price', dir: 'asc' })

    providedSortColumn.value = 'price'
    providedSortDir.value = 'asc'
    await nextTick()
    expect(root.getAttribute('aria-sort')).toBe('ascending')
    expect(chipButton.dataset.selected).toBe('true')
    expect(JSON.parse(chipButton.dataset.icon ?? '{}')).toEqual({
      icon: 'arrow_upward',
      iconActive: 'arrow_downward',
      active: false
    })

    // Click 2: asc -> desc
    chipButton.click()
    await nextTick()
    expect(emittedSort[1]).toEqual({ column: 'price', dir: 'desc' })

    providedSortDir.value = 'desc'
    await nextTick()
    expect(root.getAttribute('aria-sort')).toBe('descending')
    expect(JSON.parse(chipButton.dataset.icon ?? '{}')).toEqual({
      icon: 'arrow_upward',
      iconActive: 'arrow_downward',
      active: true
    })

    // Click 3: desc -> undefined
    chipButton.click()
    await nextTick()
    expect(emittedSort[2]).toEqual({ column: undefined, dir: undefined })

    // Switching sortColumn to another column clears aria-sort on this column
    providedSortColumn.value = 'name'
    providedSortDir.value = 'asc'
    await nextTick()
    expect(root.getAttribute('aria-sort')).toBeNull()
    expect(chipButton.dataset.selected).toBe('false')

    // Disabling showSort hides sort chip cleanly after creation
    props.showSort = false
    await nextTick()
    expect(root.querySelector('.mock-chip')).toBeNull()
  })

  it('should render tooltip with control icon and custom tooltip/context slots, keeping tooltip lazy when absent', async () => {
    const { host, props, logic } = await mountTableHeaderItem({
      props: {
        label: 'Status',
        iconTooltip: 'info'
      },
      slots: {
        context: () => h('div', { class: 'custom-context' }, 'Extra Context')
      }
    })

    const root = host.querySelector('.d1-tableHeaderItem') as HTMLTableCellElement
    expect(root.querySelector('.mock-tooltip')).toBeNull()
    expect(root.querySelector('.custom-context')?.textContent).toBe('Extra Context')
    expect(logic.hasInstance('tooltip')).toBe(false)

    props.tooltipLabel = 'Status info'
    props.tooltipDescription = 'Current workflow status'
    await nextTick()

    expect(logic.hasInstance('tooltip')).toBe(true)
    const tooltipElement = root.querySelector('.mock-tooltip') as HTMLElement
    expect(tooltipElement).not.toBeNull()
    expect(tooltipElement.dataset.label).toBe('Status info')
    expect(tooltipElement.dataset.description).toBe('Current workflow status')

    const controlIcon = tooltipElement.querySelector('.mock-icon') as HTMLElement
    expect(controlIcon).not.toBeNull()
    expect(controlIcon.dataset.icon).toBe('info')
    expect(controlIcon.dataset.eventType).toBe('tooltip')
    expect(controlIcon.classList.contains('d1-tableHeaderItem__tooltip')).toBe(true)
    expect(controlIcon.classList.contains('mock-tooltip-trigger')).toBe(true)
  })

  it('should render tooltip slot content and compose external click handlers via mergeProps', async () => {
    const onClick = vi.fn()
    const { host, logic } = await mountTableHeaderItem({
      props: { label: 'Help' },
      slots: {
        tooltip: () => h('span', { class: 'slot-tooltip-content' }, 'Custom Help Body')
      },
      attrs: { onClick }
    })

    const root = host.querySelector('.d1-tableHeaderItem') as HTMLTableCellElement
    expect(logic.hasInstance('tooltip')).toBe(true)
    expect(root.querySelector('.slot-tooltip-content')?.textContent).toBe('Custom Help Body')
    expect(root.querySelector('.mock-icon')?.getAttribute('data-icon')).toBe('help-circle')

    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
