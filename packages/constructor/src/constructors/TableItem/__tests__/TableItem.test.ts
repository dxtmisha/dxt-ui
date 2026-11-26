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
import type { ConstrClasses } from '@dxtmisha/functional'

import { TableItem, type TableItemConstructors } from '../TableItem'
import { TableItemDesign } from '../TableItemDesign'
import type { TableItemProps } from '../props'
import type {
  TableItemClasses,
  TableItemComponents,
  TableItemExpose,
  TableItemSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

class InspectableTableItem extends TableItem {
  get instantiatedItems(): Partial<Record<keyof TableItemConstructors, unknown>> {
    return this.instances
  }
}

async function mountTableItem(
  initialProps: TableItemProps = {},
  customSlots: TableItemSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  const props = reactive<TableItemProps>(initialProps)
  let logicInstance!: InspectableTableItem

  class TestTableItemDesign extends TableItemDesign<
    TableItemComponents,
    TableItemExpose,
    TableItemClasses,
    TableItemProps
  > {
    get logic(): InspectableTableItem {
      return this.item as InspectableTableItem
    }
  }

  const Host = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-tableItem': true,
          'd1-tableItem--selected': props.selected,
          'd1-tableItem--disabled': props.disabled,
          'd1-tableItem--dividerX': props.dividerX,
          'd1-tableItem--dividerY': props.dividerY,
          'd1-tableItem--labelClamp': props.labelClamp,
          'd1-tableItem--stickyTop': props.stickyTop,
          'd1-tableItem--stickyLeft': props.stickyLeft
        }
      }))

      const design = new TestTableItemDesign(
        'd1.tableItem',
        props,
        {
          classes,
          slots
        } as unknown as ConstructorParameters<typeof TableItemDesign>[2],
        InspectableTableItem as unknown as typeof TableItem
      )

      logicInstance = design.logic
      const render = design.render()

      return () => h(render, attrs)
    }
  })

  const app = createApp({
    render: () => h('table', [
      h('tbody', [
        h('tr', [
          h(Host, extraAttrs, customSlots as Record<string, () => unknown>)
        ])
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

describe('TableItem (Integration)', () => {
  it('should render default td when empty, omit aria-disabled/aria-selected, and keep all helpers lazy', async () => {
    const { host, logic } = await mountTableItem(
      {},
      {},
      { class: 'custom-cell', style: { width: '120px' } }
    )

    const root = host.querySelector('.d1-tableItem') as HTMLTableCellElement
    expect(root).not.toBeNull()
    expect(root.tagName).toBe('TD')
    expect(root.classList.contains('custom-cell')).toBe(true)
    expect(root.style.width).toBe('120px')
    expect(root.getAttribute('aria-disabled')).toBeNull()
    expect(root.getAttribute('aria-selected')).toBeNull()
    expect(root.getAttribute('colspan')).toBeNull()
    expect(root.getAttribute('rowspan')).toBeNull()
    expect(root.getAttribute('data-index')).toBeNull()
    expect(root.querySelector('.d1-tableItem__label')).toBeNull()
    expect(root.querySelector('.d1-tableItem__description')).toBeNull()

    expect(logic.hasInstance('label')).toBe(false)
    expect(logic.hasInstance('description')).toBe(false)
    expect(logic.hasInstance('skeleton')).toBe(false)
  })

  it('should render label, description, numeric 0, and Unicode content with reactive updates', async () => {
    const { host, props, logic } = await mountTableItem({
      label: 0,
      description: 0,
      index: 0,
      colspan: 2,
      rowspan: 3
    })

    const root = host.querySelector('.d1-tableItem') as HTMLTableCellElement
    expect(root.getAttribute('colspan')).toBe('2')
    expect(root.getAttribute('rowspan')).toBe('3')
    expect(root.getAttribute('data-index')).toBe('0')
    expect(root.querySelector('.d1-tableItem__label')?.textContent).toBe('0')
    expect(root.querySelector('.d1-tableItem__description')?.textContent).toBe('0')
    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('description')).toBe(true)
    expect(logic.hasInstance('skeleton')).toBe(false)

    props.label = 'Nguyễn — Привет 🚀'
    props.description = 'Học tiếng Việt / 日本語'
    await nextTick()
    expect(root.querySelector('.d1-tableItem__label')?.textContent).toBe('Nguyễn — Привет 🚀')
    expect(root.querySelector('.d1-tableItem__description')?.textContent).toBe('Học tiếng Việt / 日本語')

    props.label = ''
    props.description = undefined
    await nextTick()
    expect(root.querySelector('.d1-tableItem__label')).toBeNull()
    expect(root.querySelector('.d1-tableItem__description')).toBeNull()
  })

  it('should lazily instantiate skeleton and toggle skeleton classes reactively on label and description', async () => {
    const { host, props, logic } = await mountTableItem({
      label: 'Revenue',
      description: 'Q4 total',
      isSkeleton: false
    })

    expect(logic.hasInstance('skeleton')).toBe(false)
    const labelElement = host.querySelector('.d1-tableItem__label') as HTMLElement
    const descriptionElement = host.querySelector('.d1-tableItem__description') as HTMLElement
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

  it('should render default, description, and context slots together and switch root tag reactively', async () => {
    const { host, props, logic } = await mountTableItem(
      {
        tag: 'th',
        selected: true,
        disabled: true
      },
      {
        default: () => h('strong', { class: 'slot-label' }, 'Header'),
        description: () => h('em', { class: 'slot-description' }, 'Subtext'),
        context: () => h('div', { class: 'slot-context' }, 'Extra')
      }
    )

    let root = host.querySelector('.d1-tableItem') as HTMLElement
    expect(root.tagName).toBe('TH')
    expect(root.getAttribute('aria-selected')).toBe('true')
    expect(root.getAttribute('aria-disabled')).toBe('true')
    expect(root.querySelector('.d1-tableItem__label .slot-label')?.textContent).toBe('Header')
    expect(root.querySelector('.d1-tableItem__description .slot-description')?.textContent).toBe('Subtext')
    expect(root.querySelector('.slot-context')?.textContent).toBe('Extra')
    expect(logic.hasInstance('label')).toBe(true)
    expect(logic.hasInstance('description')).toBe(true)

    props.tag = ''
    props.selected = false
    props.disabled = false
    await nextTick()

    root = host.querySelector('.d1-tableItem') as HTMLElement
    expect(root.tagName).toBe('TD')
    expect(root.getAttribute('aria-selected')).toBeNull()
    expect(root.getAttribute('aria-disabled')).toBeNull()
  })

  it('should compose external click handlers via mergeProps without losing bindings', async () => {
    const onClick = vi.fn()
    const { host } = await mountTableItem(
      { label: 'Clickable', index: 'col-1' },
      {},
      { onClick }
    )

    const root = host.querySelector('.d1-tableItem') as HTMLElement
    expect(root.getAttribute('data-index')).toBe('col-1')
    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
