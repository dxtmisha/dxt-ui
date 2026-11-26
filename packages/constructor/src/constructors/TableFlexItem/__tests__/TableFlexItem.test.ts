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
import { DesignComponents, DesignName, type ConstrClasses } from '@dxtmisha/functional'

import { TableItemInclude, type TableItemConstructors } from '../../TableItem'
import { TableFlexItem } from '../TableFlexItem'
import { TableFlexItemDesign } from '../TableFlexItemDesign'
import type { TableFlexItemProps } from '../props'
import type {
  TableFlexItemClasses,
  TableFlexItemComponents,
  TableFlexItemExpose,
  TableFlexItemSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTableFlexItem extends TableFlexItem {
  get instantiatedItems(): Partial<Record<keyof TableItemConstructors, unknown>> {
    return this.instances
  }
}

async function mountTableFlexItem(
  initialProps: TableFlexItemProps = {},
  customSlots: TableFlexItemSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<TableFlexItemProps>(initialProps)
  let logicInstance!: InspectableTableFlexItem

  class TestTableFlexItemDesign extends TableFlexItemDesign<
    TableFlexItemComponents,
    TableFlexItemExpose,
    TableFlexItemClasses,
    TableFlexItemProps
  > {
    get logic(): InspectableTableFlexItem {
      return this.item as InspectableTableFlexItem
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-tableFlexItem': true,
          'd1-tableFlexItem--selected': props.selected,
          'd1-tableFlexItem--disabled': props.disabled,
          'd1-tableFlexItem--dividerX': props.dividerX,
          'd1-tableFlexItem--dividerY': props.dividerY,
          'd1-tableFlexItem--labelClamp': props.labelClamp,
          'd1-tableFlexItem--stickyTop': props.stickyTop,
          'd1-tableFlexItem--stickyLeft': props.stickyLeft
        }
      }))

      const design = new TestTableFlexItemDesign(
        'd1.tableFlexItem',
        props,
        {
          classes,
          slots
        } as unknown as ConstructorParameters<typeof TableFlexItemDesign>[2],
        InspectableTableFlexItem as unknown as typeof TableFlexItem
      )

      logicInstance = design.logic
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const app = createApp({
    render: () => h('div', { role: 'table' }, [
      h('div', { role: 'row' }, [
        h(Host, extraAttrs, customSlots as Record<string, () => unknown>)
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

describe('TableFlexItem (Integration)', () => {
  it('should render default div with role="cell", merge attrs, omit invalid table attrs, and keep helpers lazy', async () => {
    const { host, logic } = await mountTableFlexItem(
      {},
      {},
      { class: 'custom-flex-cell', style: { flexBasis: '160px' } }
    )

    const root = host.querySelector('.d1-tableFlexItem') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.tagName).toBe('DIV')
    expect(root.getAttribute('role')).toBe('cell')
    expect(root.classList.contains('custom-flex-cell')).toBe(true)
    expect(root.style.flexBasis).toBe('160px')
    expect(root.getAttribute('aria-disabled')).toBeNull()
    expect(root.getAttribute('aria-selected')).toBeNull()
    expect(root.getAttribute('colspan')).toBeNull()
    expect(root.getAttribute('rowspan')).toBeNull()
    expect(root.getAttribute('data-colspan')).toBeNull()
    expect(root.getAttribute('data-rowspan')).toBeNull()
    expect(root.getAttribute('data-index')).toBeNull()
    expect(root.querySelector('.d1-tableFlexItem__label')).toBeNull()
    expect(root.querySelector('.d1-tableFlexItem__description')).toBeNull()

    expect(logic.hasInstance('label')).toBe(false)
    expect(logic.hasInstance('description')).toBe(false)
    expect(logic.hasInstance('skeleton')).toBe(false)
  })

  it('should render label, description, numeric 0 boundaries, data-colspan/rowspan, and Unicode content reactively', async () => {
    const { host, props, logic } = await mountTableFlexItem({
      label: 0,
      description: 0,
      index: 0,
      colspan: 0,
      rowspan: 0
    })

    const root = host.querySelector('.d1-tableFlexItem') as HTMLDivElement
    expect(root.getAttribute('role')).toBe('cell')
    expect(root.getAttribute('data-colspan')).toBe('0')
    expect(root.getAttribute('data-rowspan')).toBe('0')
    expect(root.getAttribute('data-index')).toBe('0')
    expect(root.getAttribute('colspan')).toBeNull()
    expect(root.getAttribute('rowspan')).toBeNull()
    expect(root.querySelector('.d1-tableFlexItem__label')?.textContent).toBe('0')
    expect(root.querySelector('.d1-tableFlexItem__description')?.textContent).toBe('0')
    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('description')).toBe(true)
    expect(logic.hasInstance('skeleton')).toBe(false)

    props.colspan = 3
    props.rowspan = 2
    props.label = 'Nguyễn — Привет 🚀'
    props.description = 'Học tiếng Việt / 日本語'
    await nextTick()
    expect(root.getAttribute('data-colspan')).toBe('3')
    expect(root.getAttribute('data-rowspan')).toBe('2')
    expect(root.getAttribute('colspan')).toBeNull()
    expect(root.getAttribute('rowspan')).toBeNull()
    expect(root.querySelector('.d1-tableFlexItem__label')?.textContent).toBe('Nguyễn — Привет 🚀')
    expect(root.querySelector('.d1-tableFlexItem__description')?.textContent).toBe('Học tiếng Việt / 日本語')

    props.label = ''
    props.description = undefined
    await nextTick()
    expect(root.querySelector('.d1-tableFlexItem__label')).toBeNull()
    expect(root.querySelector('.d1-tableFlexItem__description')).toBeNull()
  })

  it('should lazily instantiate skeleton and toggle skeleton classes reactively on label and description', async () => {
    const { host, props, logic } = await mountTableFlexItem({
      label: 'Revenue',
      description: 'Q4 total',
      isSkeleton: false
    })

    expect(logic.hasInstance('skeleton')).toBe(false)
    const labelElement = host.querySelector('.d1-tableFlexItem__label') as HTMLElement
    const descriptionElement = host.querySelector('.d1-tableFlexItem__description') as HTMLElement
    expect(labelElement.classList.contains('d1-skeleton__textVariant')).toBe(false)
    expect(descriptionElement.classList.contains('d1-skeleton__textVariant')).toBe(false)

    props.isSkeleton = true
    await nextTick()
    expect(logic.hasInstance('skeleton')).toBe(true)
    expect(labelElement.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(descriptionElement.classList.contains('d1-skeleton__textVariant')).toBe(true)

    props.isSkeleton = false
    await nextTick()
    expect(labelElement.classList.contains('d1-skeleton__textVariant')).toBe(false)
    expect(descriptionElement.classList.contains('d1-skeleton__textVariant')).toBe(false)
  })

  it('should render default, description, and context slots together and switch root tag reactively with safe empty fallback', async () => {
    const { host, props, logic } = await mountTableFlexItem(
      {
        tag: 'section',
        selected: true,
        disabled: true
      },
      {
        default: () => h('strong', { class: 'slot-label' }, 'Flex Label'),
        description: () => h('em', { class: 'slot-description' }, 'Flex Desc'),
        context: () => h('div', { class: 'slot-context' }, 'Extra')
      }
    )

    let root = host.querySelector('.d1-tableFlexItem') as HTMLElement
    expect(root.tagName).toBe('SECTION')
    expect(root.getAttribute('role')).toBe('cell')
    expect(root.getAttribute('aria-selected')).toBe('true')
    expect(root.getAttribute('aria-disabled')).toBe('true')
    expect(root.querySelector('.d1-tableFlexItem__label .slot-label')?.textContent).toBe('Flex Label')
    expect(root.querySelector('.d1-tableFlexItem__description .slot-description')?.textContent).toBe('Flex Desc')
    expect(root.querySelector('.slot-context')?.textContent).toBe('Extra')
    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('description')).toBe(true)

    props.tag = ''
    props.selected = false
    props.disabled = false
    await nextTick()

    root = host.querySelector('.d1-tableFlexItem') as HTMLElement
    expect(root.tagName).toBe('DIV')
    expect(root.getAttribute('role')).toBe('cell')
    expect(root.getAttribute('aria-selected')).toBeNull()
    expect(root.getAttribute('aria-disabled')).toBeNull()
  })

  it('should compose external click handlers via mergeProps without losing role or data-index', async () => {
    const onClick = vi.fn()
    const { host } = await mountTableFlexItem(
      { label: 'Clickable', index: 'col-1' },
      {},
      { onClick }
    )

    const root = host.querySelector('.d1-tableFlexItem') as HTMLElement
    expect(root.getAttribute('role')).toBe('cell')
    expect(root.getAttribute('data-index')).toBe('col-1')
    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should integrate cleanly when rendered by TableItemInclude as tableItem component in a flex row', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    mountedCleanups.push(() => host.remove())

    const FlexItemComponent = defineComponent({
      name: 'TestD1TableFlexItem',
      props: {
        label: [String, Number],
        description: [String, Number],
        colspan: [String, Number],
        rowspan: [String, Number],
        selected: Boolean,
        disabled: Boolean,
        isSkeleton: Boolean,
        index: [String, Number]
      },
      setup(props, { slots }) {
        const design = new TableFlexItemDesign(
          'd1.tableFlexItem',
          props,
          { slots } as unknown as ConstructorParameters<typeof TableFlexItemDesign>[2]
        )
        return design.render()
      }
    })

    const FlexRow = defineComponent({
      setup() {
        const components = new DesignComponents({
          tableItem: FlexItemComponent
        })
        const include = new TableItemInclude(
          { selected: true },
          new DesignName('d1.tableFlexRecord'),
          components
        )

        return () => h('div', { role: 'row' }, [
          include.renderItem('row1__name', 'name', { name: { label: 'Alice', colspan: 2 } })
        ])
      }
    })

    const app = createApp(FlexRow)
    app.mount(host)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    const cell = host.querySelector('[role="cell"]') as HTMLDivElement
    expect(cell).not.toBeNull()
    expect(cell.tagName).toBe('DIV')
    expect(cell.getAttribute('data-colspan')).toBe('2')
    expect(cell.getAttribute('data-index')).toBe('name')
    expect(cell.getAttribute('colspan')).toBeNull()
    expect(cell.getAttribute('aria-selected')).toBe('true')
    expect(cell.querySelector('.d1-tableFlexItem__label')?.textContent).toBe('Alice')
  })
})
