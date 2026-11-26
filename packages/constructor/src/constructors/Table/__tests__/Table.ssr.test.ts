// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { TableHeaderItemDesign } from '../../TableHeaderItem'
import { TableItemDesign } from '../../TableItem'
import { TableRecordDesign, type TableRecordProps } from '../../TableRecord'
import { Table } from '../Table'
import { TableDesign } from '../TableDesign'
import type { TableProps } from '../props'
import type { TableSlots } from '../types'

const SsrTableItemComponent = defineComponent({
  name: 'SsrTableItem',
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
    const design = new TableItemDesign(
      'd1.tableItem',
      props as unknown as ConstructorParameters<typeof TableItemDesign>[1],
      { slots } as unknown as ConstructorParameters<typeof TableItemDesign>[2]
    )
    return design.render()
  }
})

const SsrMockChipComponent = defineComponent({
  name: 'SsrMockChip',
  props: {
    label: [String, Number],
    icon: [String, Object],
    selected: Boolean
  },
  setup(props, { attrs }) {
    return () => h('button', {
      ...attrs,
      'type': 'button',
      'data-selected': props.selected ? 'true' : 'false'
    }, 'sort')
  }
})

const SsrTableHeaderItemComponent = defineComponent({
  name: 'SsrTableHeaderItem',
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
  setup(props, { slots }) {
    const design = new TableHeaderItemDesign(
      'd1.tableHeaderItem',
      props as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[1],
      {
        slots,
        components: {
          chip: SsrMockChipComponent
        }
      } as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[2]
    )
    return design.render()
  }
})

const SsrTableRecordComponent = defineComponent({
  name: 'SsrTableRecord',
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
  setup(props, { slots }) {
    const design = new TableRecordDesign(
      'd1.tableRecord',
      props as TableRecordProps,
      {
        slots,
        components: {
          tableHeaderItem: SsrTableHeaderItemComponent,
          tableItem: SsrTableItemComponent
        }
      } as unknown as ConstructorParameters<typeof TableRecordDesign>[2]
    )
    return design.render()
  }
})

const SsrScrollStickyComponent = defineComponent({
  name: 'SsrScrollSticky',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', { ...attrs, 'data-ssr-scroll-sticky': 'true' }, slots.default?.())
  }
})

describe('Table (SSR)', () => {
  const naming = new DesignName('d1.table')

  it('should initialize Table orchestrator in Node without DOM globals and isolate state per ServerStorage request', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableProps>({
      columns: ['id', 'name'],
      header: { id: 'ID', name: 'Name' },
      list: [
        { id: 2, name: 'Bob' },
        { id: 1, name: 'Alice' }
      ],
      sort: 'name',
      sortDir: 'asc',
      headerTop: true,
      stickyScrollBottom: true
    })

    scope.run(() => {
      const table = new Table(props, element, naming)

      expect(table.hasInstance('sort')).toBe(true)
      expect(table.hasInstance('sticky')).toBe(true)
      expect(table.hasInstance('caption')).toBe(false)
      expect(table.hasInstance('columns')).toBe(false)
      expect(table.hasInstance('pagination')).toBe(false)

      expect(table.i('columns').list).toEqual(['id', 'name'])
      expect(table.i('pagination').list.map(item => (item as { name: string }).name)).toEqual(['Alice', 'Bob'])
    })

    scope.stop()
  })

  it('should render full TableDesign tree to HTML string across all variants in Node SSR', async () => {
    const variants: Array<{
      name: string
      props: TableProps
      slots?: TableSlots
      withScrollSticky?: boolean
    }> = [
      {
        name: 'empty',
        props: {}
      },
      {
        name: 'full-pipeline',
        props: {
          caption: 'SSR Table — Nguyễn / Привет 🚀',
          keyValue: 'id',
          columns: ['id', 'name', 'age'],
          columnsWidth: { id: 0, name: '50%', age: 120 },
          header: {
            id: 'ID',
            name: { label: 'Name', showSort: true },
            age: { label: 'Age', showSort: true }
          },
          list: [
            { id: 0, name: 'Nguyễn Văn A', age: 25 },
            { id: 1, name: 'Привет Мир', age: 40 },
            { id: 2, name: 'Alice', age: 30 }
          ],
          foot: { id: 'Total', name: 'Users', age: 95 },
          sort: 'age',
          sortDir: 'desc',
          rows: 2,
          page: 1,
          headerTop: true,
          stickyScrollBottom: true
        },
        slots: {
          'foot-age': ({ value }) => h('strong', { class: 'ssr-foot-age' }, `Sum:${String(value)}`)
        },
        withScrollSticky: true
      },
      {
        name: 'search-and-slots',
        props: {
          caption: 0,
          captionDecorative: true,
          columns: ['id', 'title'],
          list: [
            { id: 1, title: 'C++ Guide' },
            { id: 2, title: 'Rust Book' }
          ],
          search: 'C++',
          stickyScrollBottom: false
        },
        slots: {
          body: () => h('tbody', { class: 'ssr-custom-body' }),
          header: ({ columns }: { columns: string[] }) => h('tr', { 'class': 'ssr-header-slot', 'data-cols': columns.join(',') }),
          foot: ({ columns }: { columns: string[] }) => h('tr', { 'class': 'ssr-foot-slot', 'data-cols': columns.join(',') })
        } as unknown as TableSlots
      }
    ]

    for (const variant of variants) {
      const TestTableComponent = defineComponent({
        setup(_, { slots }) {
          const design = new TableDesign(
            'd1.table',
            variant.props,
            {
              slots,
              components: {
                tableRecord: SsrTableRecordComponent,
                ...(variant.withScrollSticky ? { scrollSticky: SsrScrollStickyComponent } : {})
              }
            } as unknown as ConstructorParameters<typeof TableDesign>[2]
          )
          return design.render()
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp({
        render: () => h(TestTableComponent, {}, variant.slots as Record<string, () => unknown>)
      })
      const html = await renderToString(app)

      expect(html).toContain('<table')
      expect(html).toContain('</table>')

      if (variant.name === 'empty') {
        expect(html).not.toContain('<caption')
        expect(html).not.toContain('<colgroup')
        expect(html).not.toContain('<thead')
        expect(html).not.toContain('<tbody')
        expect(html).not.toContain('<tfoot')
      }

      if (variant.name === 'full-pipeline') {
        expect(html).toContain('data-ssr-scroll-sticky="true"')
        expect(html).toContain('<caption')
        expect(html).toContain('SSR Table — Nguyễn / Привет 🚀')
        expect(html).toContain('<colgroup')
        expect(html).toContain('width:0px')
        expect(html).toContain('width:50%')
        expect(html).toContain('width:120px')
        expect(html).toContain('scope="col"')
        expect(html).toContain('aria-sort="descending"')
        expect(html).toContain('data-selected="true"')
        expect(html).toContain('Привет Мир')
        expect(html).toContain('Alice')
        // Third row sliced out by pagination rows=2
        expect(html).not.toContain('Nguyễn Văn A')
        expect(html).toContain('<tfoot')
        expect(html).toContain('ssr-foot-age')
        expect(html).toContain('Sum:95')
        // Verify footer <th> cells do NOT emit scope="col"
        const tfootMatch = html.match(/<tfoot[\s\S]*?<\/tfoot>/)
        expect(tfootMatch?.[0]).toBeDefined()
        expect(tfootMatch?.[0]).not.toContain('scope="col"')
        expect(tfootMatch?.[0]).not.toContain('scope="row"')
      }

      if (variant.name === 'search-and-slots') {
        expect(html).toContain('aria-hidden="true"')
        expect(html).toContain('>0</caption>')
        expect(html).toContain('ssr-custom-body')
        expect(html).toContain('ssr-header-slot')
        expect(html).toContain('ssr-foot-slot')
        expect(html).toContain('C++')
        expect(html).not.toContain('Rust Book')
      }
    }
  })
})
