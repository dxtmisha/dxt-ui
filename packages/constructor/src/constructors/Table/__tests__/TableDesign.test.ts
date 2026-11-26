// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick } from 'vue'
import type { ConstrBind, ConstrClasses } from '@dxtmisha/functional'

import { Table } from '../Table'
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

class InspectableTableDesign extends TableDesign<
  TableComponents,
  TableExpose,
  TableClasses,
  TableProps
> {
  get logic(): Table {
    return this.item
  }
}

function createDesignInSetup(
  props: TableProps,
  options?: ConstructorParameters<typeof TableDesign>[2],
  ItemConstructor?: typeof Table
): InspectableTableDesign {
  const host = document.createElement('div')
  document.body.appendChild(host)
  mountedCleanups.push(() => host.remove())

  let designInstance!: InspectableTableDesign

  const app = createApp({
    setup() {
      designInstance = new InspectableTableDesign(
        'd1.table',
        props,
        options,
        ItemConstructor
      )
      return () => h('div')
    }
  })
  app.mount(host)
  mountedCleanups.push(() => app.unmount())

  return designInstance
}

describe('TableDesign (Unit)', () => {
  it('should not render empty thead/tbody/tfoot when tableRecord component is not registered', () => {
    const design = createDesignInSetup({
      columns: ['id', 'name'],
      header: { id: 'ID', name: 'Name' },
      list: [{ id: 1, name: 'Alice' }],
      foot: { id: 'Total', name: '1' }
    })

    expect(design.renderList()).toEqual([])
    expect(design.renderItems()).toEqual([])
    expect(design.renderHeader()).toEqual([])
    expect(design.renderFoot()).toEqual([])
    expect(design.renderColgroup()).toHaveLength(1)
  })

  it('should pass isHeader=true for renderHeader and isHeader=false, isFoot=true for renderFoot', () => {
    const renderedCalls: Array<{
      index?: string
      isHeader?: boolean
      isFoot?: boolean
      stickyTop?: boolean
      columns?: string[]
      item?: unknown
    }> = []

    const SpyTableRecord = defineComponent({
      name: 'SpyTableRecord',
      props: {
        index: String,
        isHeader: Boolean,
        isFoot: Boolean,
        stickyTop: Boolean,
        columns: Array,
        item: Object
      },
      setup(props) {
        renderedCalls.push({
          index: props.index,
          isHeader: props.isHeader,
          isFoot: props.isFoot,
          stickyTop: props.stickyTop,
          columns: props.columns as string[] | undefined,
          item: props.item
        })
        return () => h('tr', { 'data-spy-index': props.index })
      }
    })

    const host = document.createElement('div')
    document.body.appendChild(host)
    mountedCleanups.push(() => host.remove())

    const app = createApp({
      setup() {
        const design = new InspectableTableDesign(
          'd1.table',
          {
            columns: ['id', 'total'],
            header: { id: 'ID', total: 'Total' },
            foot: { id: 'Sum', total: 42 }
          },
          {
            components: {
              tableRecord: SpyTableRecord
            }
          } as unknown as ConstructorParameters<typeof TableDesign>[2]
        )
        return design.render()
      }
    })
    app.mount(host)
    mountedCleanups.push(() => app.unmount())

    expect(renderedCalls).toHaveLength(2)
    expect(renderedCalls[0]).toEqual({
      index: 'header-0',
      isHeader: true,
      isFoot: false,
      stickyTop: false,
      columns: ['id', 'total'],
      item: { id: 'ID', total: 'Total' }
    })
    expect(renderedCalls[1]).toEqual({
      index: 'foot-0',
      isHeader: false,
      isFoot: true,
      stickyTop: false,
      columns: ['id', 'total'],
      item: { id: 'Sum', total: 42 }
    })
  })

  it('should omit colgroup when ItemConstructor returns tagColgroup = undefined and merge custom ItemConstructor binds', async () => {
    class CustomTagTable extends Table {
      override get binds(): ConstrBind {
        return {
          'role': 'table',
          'data-custom-bind': 'yes'
        }
      }

      override get tag(): string {
        return 'div'
      }

      override get tagColgroup(): string | undefined {
        return undefined
      }
    }

    const host = document.createElement('div')
    document.body.appendChild(host)
    mountedCleanups.push(() => host.remove())

    let designRef!: InspectableTableDesign
    const onRootClick = vi.fn()

    const Host = defineComponent({
      inheritAttrs: false,
      setup(_, { attrs }) {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-table': true }
        }))
        const design = new InspectableTableDesign(
          'd1.table',
          {
            columns: ['id', 'name'],
            columnsWidth: { id: 100 }
          },
          {
            classes,
            attrs
          } as unknown as ConstructorParameters<typeof TableDesign>[2],
          CustomTagTable
        )
        designRef = design
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Host, {
        class: 'merged-class',
        style: { color: 'rgb(10, 20, 30)' },
        onClick: onRootClick
      })
    })
    app.mount(host)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(designRef.logic).toBeInstanceOf(CustomTagTable)
    expect(designRef.renderColgroup()).toEqual([])

    const root = host.querySelector('div.d1-table.merged-class') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.style.color).toBe('rgb(10, 20, 30)')
    root.click()
    expect(onRootClick).toHaveBeenCalledTimes(1)

    const innerTable = root.querySelector('[role="table"]') as HTMLDivElement
    expect(innerTable).not.toBeNull()
    expect(innerTable.getAttribute('data-custom-bind')).toBe('yes')
    expect(innerTable.classList.contains('d1-table__table')).toBe(true)
    expect(designRef.expose().elementHtml?.value).toBe(innerTable)
  })

  it('should renderScrollSticky when stickyScrollBottom is true and scrollSticky component exists, or return undefined otherwise', () => {
    const MockScrollSticky = defineComponent({
      name: 'MockScrollSticky',
      setup(_, { slots }) {
        return () => h('div', { class: 'mock-sticky' }, slots.default?.())
      }
    })

    const withSticky = createDesignInSetup(
      { stickyScrollBottom: true },
      {
        components: {
          scrollSticky: MockScrollSticky
        }
      } as unknown as ConstructorParameters<typeof TableDesign>[2]
    )
    expect(withSticky.renderScrollSticky()).toBeDefined()

    const disabledSticky = createDesignInSetup(
      { stickyScrollBottom: false },
      {
        components: {
          scrollSticky: MockScrollSticky
        }
      } as unknown as ConstructorParameters<typeof TableDesign>[2]
    )
    expect(disabledSticky.renderScrollSticky()).toBeUndefined()

    const withoutComponent = createDesignInSetup(
      { stickyScrollBottom: true }
    )
    expect(withoutComponent.renderScrollSticky()).toBeUndefined()
  })

  it('should render body, header, items, and foot slots cleanly and attach headerElement ref', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    mountedCleanups.push(() => host.remove())

    let designRef!: InspectableTableDesign

    const Host = defineComponent({
      setup(_, { slots }) {
        const design = new InspectableTableDesign(
          'd1.table',
          { columns: ['a', 'b'] },
          {
            slots: slots as TableSlots
          } as unknown as ConstructorParameters<typeof TableDesign>[2]
        )
        designRef = design
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Host, {}, {
        body: () => h('tbody', { class: 'slot-body' }),
        header: ({ columns }: { columns: string[] }) => h('tr', { 'class': 'slot-head', 'data-cols': columns.join('-') }),
        items: ({ columns }: { columns: string[] }) => h('tr', { 'class': 'slot-items', 'data-cols': columns.join('-') }),
        foot: ({ columns }: { columns: string[] }) => h('tr', { 'class': 'slot-foot', 'data-cols': columns.join('-') })
      })
    })
    app.mount(host)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(host.querySelector('tbody.slot-body')).not.toBeNull()
    expect(host.querySelector('thead.d1-table__header tr.slot-head')?.getAttribute('data-cols')).toBe('a-b')
    expect(host.querySelector('tbody.d1-table__items tr.slot-items')?.getAttribute('data-cols')).toBe('a-b')
    expect(host.querySelector('tfoot.d1-table__foot tr.slot-foot')?.getAttribute('data-cols')).toBe('a-b')
    expect(designRef.logic.headerElement.value).toBe(host.querySelector('thead.d1-table__header'))
  })
})
