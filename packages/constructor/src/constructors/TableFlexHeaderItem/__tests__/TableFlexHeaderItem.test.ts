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
import {
  DesignComponents,
  DesignName,
  type ConstrClasses,
  type SortColumnItem,
  type SortDir
} from '@dxtmisha/functional'

import type { SortColumn } from '../../../types/sortTypes'
import {
  TableHeaderItemInclude,
  type TableHeaderItemConstructors
} from '../../TableHeaderItem'
import { TableFlexHeaderItem } from '../TableFlexHeaderItem'
import { TableFlexHeaderItemDesign } from '../TableFlexHeaderItemDesign'
import type { TableFlexHeaderItemProps } from '../props'
import type {
  TableFlexHeaderItemClasses,
  TableFlexHeaderItemComponents,
  TableFlexHeaderItemExpose,
  TableFlexHeaderItemSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTableFlexHeaderItem extends TableFlexHeaderItem {
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
  props?: TableFlexHeaderItemProps
  slots?: TableFlexHeaderItemSlots
  attrs?: Record<string, unknown>
  providedSortColumn?: Ref<SortColumn | undefined>
  providedSortDir?: Ref<SortDir | undefined>
}

async function mountTableFlexHeaderItem(options: MountOptions = {}) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<TableFlexHeaderItemProps>({ ...(options.props ?? {}) })
  const emittedSort: SortColumnItem[] = []
  let logicInstance!: InspectableTableFlexHeaderItem

  class TestTableFlexHeaderItemDesign extends TableFlexHeaderItemDesign<
    TableFlexHeaderItemComponents,
    TableFlexHeaderItemExpose,
    TableFlexHeaderItemClasses,
    TableFlexHeaderItemProps
  > {
    get logic(): InspectableTableFlexHeaderItem {
      return this.item as InspectableTableFlexHeaderItem
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-tableFlexHeaderItem': true,
          'd1-tableFlexHeaderItem--selected': props.selected,
          'd1-tableFlexHeaderItem--disabled': props.disabled,
          'd1-tableFlexHeaderItem--dividerX': props.dividerX,
          'd1-tableFlexHeaderItem--dividerY': props.dividerY,
          'd1-tableFlexHeaderItem--labelClamp': props.labelClamp,
          'd1-tableFlexHeaderItem--stickyTop': props.stickyTop,
          'd1-tableFlexHeaderItem--stickyLeft': props.stickyLeft
        }
      }))

      const design = new TestTableFlexHeaderItemDesign(
        'd1.tableFlexHeaderItem',
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
        } as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[2],
        InspectableTableFlexHeaderItem as unknown as typeof TableFlexHeaderItem
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

      return () => h('div', { role: 'table' }, [
        h('div', { role: 'row' }, [
          h(
            Host,
            options.attrs ?? {},
            (options.slots ?? {}) as Record<string, () => unknown>
          )
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

describe('TableFlexHeaderItem (Integration)', () => {
  it('should render default div with role="columnheader", omit invalid table attrs, and keep all 6 helpers lazy', async () => {
    const { host, logic } = await mountTableFlexHeaderItem({
      attrs: { class: 'custom-flex-header', style: { flexBasis: '180px' } }
    })

    const root = host.querySelector('.d1-tableFlexHeaderItem') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.tagName).toBe('DIV')
    expect(root.getAttribute('role')).toBe('columnheader')
    expect(root.classList.contains('custom-flex-header')).toBe(true)
    expect(root.style.flexBasis).toBe('180px')
    expect(root.getAttribute('aria-disabled')).toBeNull()
    expect(root.getAttribute('aria-selected')).toBeNull()
    expect(root.getAttribute('aria-sort')).toBeNull()
    expect(root.getAttribute('colspan')).toBeNull()
    expect(root.getAttribute('rowspan')).toBeNull()
    expect(root.getAttribute('scope')).toBeNull()
    expect(root.getAttribute('data-colspan')).toBeNull()
    expect(root.getAttribute('data-rowspan')).toBeNull()
    expect(root.getAttribute('data-index')).toBeNull()
    expect(root.querySelector('.d1-tableFlexHeaderItem__body')).toBeNull()
    expect(root.querySelector('.d1-tableFlexHeaderItem__label')).toBeNull()
    expect(root.querySelector('.d1-tableFlexHeaderItem__description')).toBeNull()

    expect(logic.hasInstance('chip')).toBe(false)
    expect(logic.hasInstance('description')).toBe(false)
    expect(logic.hasInstance('label')).toBe(false)
    expect(logic.hasInstance('skeleton')).toBe(false)
    expect(logic.hasInstance('sort')).toBe(false)
    expect(logic.hasInstance('tooltip')).toBe(false)
  })

  it('should render numeric 0 boundaries, data-colspan/rowspan without raw table attrs, Unicode content, and reactive skeleton', async () => {
    const { host, props, logic } = await mountTableFlexHeaderItem({
      props: {
        label: 0,
        description: 0,
        index: 0,
        colspan: 0,
        rowspan: 0,
        scope: 'col',
        selected: true,
        disabled: true,
        isSkeleton: false
      }
    })

    const root = host.querySelector('.d1-tableFlexHeaderItem') as HTMLDivElement
    expect(root.getAttribute('role')).toBe('columnheader')
    expect(root.getAttribute('data-colspan')).toBe('0')
    expect(root.getAttribute('data-rowspan')).toBe('0')
    expect(root.getAttribute('data-index')).toBe('0')
    expect(root.getAttribute('colspan')).toBeNull()
    expect(root.getAttribute('rowspan')).toBeNull()
    expect(root.getAttribute('scope')).toBeNull()
    expect(root.getAttribute('aria-selected')).toBe('true')
    expect(root.getAttribute('aria-disabled')).toBe('true')

    const body = root.querySelector('.d1-tableFlexHeaderItem__body') as HTMLElement
    expect(body).not.toBeNull()
    expect(body.querySelector('.d1-tableFlexHeaderItem__label')?.textContent).toBe('0')
    expect(root.querySelector('.d1-tableFlexHeaderItem__description')?.textContent).toBe('0')

    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('description')).toBe(true)
    expect(logic.hasInstance('skeleton')).toBe(false)
    expect(logic.hasInstance('chip')).toBe(false)
    expect(logic.hasInstance('sort')).toBe(false)
    expect(logic.hasInstance('tooltip')).toBe(false)

    props.colspan = 3
    props.rowspan = 2
    props.label = 'Nguyễn — Привет 🚀'
    props.description = 'Học tiếng Việt / 日本語'
    props.isSkeleton = true
    await nextTick()

    expect(logic.hasInstance('skeleton')).toBe(true)
    expect(root.getAttribute('data-colspan')).toBe('3')
    expect(root.getAttribute('data-rowspan')).toBe('2')
    expect(root.getAttribute('colspan')).toBeNull()
    expect(root.getAttribute('rowspan')).toBeNull()
    const labelElement = root.querySelector('.d1-tableFlexHeaderItem__label') as HTMLElement
    const descriptionElement = root.querySelector('.d1-tableFlexHeaderItem__description') as HTMLElement
    expect(labelElement.textContent).toBe('Nguyễn — Привет 🚀')
    expect(descriptionElement.textContent).toBe('Học tiếng Việt / 日本語')
    expect(labelElement.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(descriptionElement.classList.contains('d1-skeleton__textVariant')).toBe(true)

    props.isSkeleton = false
    await nextTick()
    expect(labelElement.classList.contains('d1-skeleton__textVariant')).toBe(false)
    expect(descriptionElement.classList.contains('d1-skeleton__textVariant')).toBe(false)

    props.scope = 'row'
    await nextTick()
    expect(root.getAttribute('role')).toBe('rowheader')
    expect(root.getAttribute('scope')).toBeNull()

    props.scope = 'rowgroup'
    await nextTick()
    expect(root.getAttribute('role')).toBe('rowheader')

    props.scope = 'col'
    await nextTick()
    expect(root.getAttribute('role')).toBe('columnheader')
  })

  it('should execute full 3-state sort cycle via chip click and synchronize aria-sort with provided refs', async () => {
    const providedSortColumn = ref<SortColumn | undefined>(undefined)
    const providedSortDir = ref<SortDir | undefined>(undefined)

    const { host, props, emittedSort, logic } = await mountTableFlexHeaderItem({
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

    const root = host.querySelector('.d1-tableFlexHeaderItem') as HTMLDivElement
    const chipButton = root.querySelector('.mock-chip') as HTMLButtonElement
    expect(chipButton).not.toBeNull()
    expect(root.getAttribute('role')).toBe('columnheader')
    expect(chipButton.dataset.selected).toBe('false')
    expect(chipButton.dataset.icon).toBe('swap_vert')
    expect(root.getAttribute('aria-sort')).toBeNull()
    expect(logic.hasInstance('chip')).toBe(true)
    expect(logic.hasInstance('sort')).toBe(true)

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

    chipButton.click()
    await nextTick()
    expect(emittedSort[2]).toEqual({ column: undefined, dir: undefined })

    providedSortColumn.value = 'name'
    providedSortDir.value = 'asc'
    await nextTick()
    expect(root.getAttribute('aria-sort')).toBeNull()
    expect(chipButton.dataset.selected).toBe('false')

    props.showSort = false
    await nextTick()
    expect(root.querySelector('.mock-chip')).toBeNull()
  })

  it('should render tooltip with control icon, support all slots, switch tag safely on empty string, and compose click handlers', async () => {
    const onClick = vi.fn()
    const { host, props, logic } = await mountTableFlexHeaderItem({
      props: {
        tag: 'section',
        iconTooltip: 'info'
      },
      slots: {
        default: () => h('strong', { class: 'slot-label' }, 'Status'),
        description: () => h('em', { class: 'slot-description' }, 'Live state'),
        tooltip: () => h('span', { class: 'slot-tooltip-content' }, 'Custom Help Body'),
        context: () => h('div', { class: 'custom-context' }, 'Extra Context')
      },
      attrs: { onClick }
    })

    let root = host.querySelector('.d1-tableFlexHeaderItem') as HTMLElement
    expect(root.tagName).toBe('SECTION')
    expect(root.getAttribute('role')).toBe('columnheader')
    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('description')).toBe(true)
    expect(logic.hasInstance('tooltip')).toBe(true)
    expect(root.querySelector('.d1-tableFlexHeaderItem__label .slot-label')?.textContent).toBe('Status')
    expect(root.querySelector('.d1-tableFlexHeaderItem__description .slot-description')?.textContent).toBe('Live state')
    expect(root.querySelector('.slot-tooltip-content')?.textContent).toBe('Custom Help Body')
    expect(root.querySelector('.custom-context')?.textContent).toBe('Extra Context')

    const controlIcon = root.querySelector('.mock-icon') as HTMLElement
    expect(controlIcon).not.toBeNull()
    expect(controlIcon.dataset.icon).toBe('info')
    expect(controlIcon.dataset.eventType).toBe('tooltip')
    expect(controlIcon.classList.contains('d1-tableFlexHeaderItem__tooltip')).toBe(true)
    expect(controlIcon.classList.contains('mock-tooltip-trigger')).toBe(true)

    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)

    props.tag = ''
    await nextTick()
    root = host.querySelector('.d1-tableFlexHeaderItem') as HTMLElement
    expect(root.tagName).toBe('DIV')
    expect(root.getAttribute('role')).toBe('columnheader')
  })

  it('should integrate cleanly when rendered by TableHeaderItemInclude as tableHeaderItem component in a flex row', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    mountedCleanups.push(() => host.remove())

    const FlexHeaderComponent = defineComponent({
      name: 'TestD1TableFlexHeaderItem',
      props: {
        label: [String, Number],
        description: [String, Number],
        colspan: [String, Number],
        rowspan: [String, Number],
        scope: String,
        selected: Boolean,
        disabled: Boolean,
        isSkeleton: Boolean,
        index: [String, Number]
      },
      setup(props, { slots }) {
        const design = new TableFlexHeaderItemDesign(
          'd1.tableFlexHeaderItem',
          props as TableFlexHeaderItemProps,
          { slots } as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[2]
        )
        return design.render()
      }
    })

    const FlexHeaderRow = defineComponent({
      setup() {
        const components = new DesignComponents({
          tableHeaderItem: FlexHeaderComponent
        })
        const include = new TableHeaderItemInclude(
          { selected: true },
          new DesignName('d1.tableFlexRecord'),
          components
        )

        return () => h('div', { role: 'row' }, [
          include.renderItem(
            'header__name',
            'name',
            { name: { label: 'Customer', colspan: 2 } },
            { scope: 'col' }
          )
        ])
      }
    })

    const app = createApp(FlexHeaderRow)
    app.mount(host)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    const headerCell = host.querySelector('[role="columnheader"]') as HTMLDivElement
    expect(headerCell).not.toBeNull()
    expect(headerCell.tagName).toBe('DIV')
    expect(headerCell.getAttribute('data-colspan')).toBe('2')
    expect(headerCell.getAttribute('data-index')).toBe('name')
    expect(headerCell.getAttribute('colspan')).toBeNull()
    expect(headerCell.getAttribute('rowspan')).toBeNull()
    expect(headerCell.getAttribute('scope')).toBeNull()
    expect(headerCell.getAttribute('aria-selected')).toBe('true')
    expect(headerCell.querySelector('.d1-tableFlexHeaderItem__label')?.textContent).toBe('Customer')
  })
})
