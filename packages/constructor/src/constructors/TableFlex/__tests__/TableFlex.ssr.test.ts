// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import {
  computed,
  createSSRApp,
  defineComponent,
  effectScope,
  h,
  reactive,
  ref
} from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, DesignName, ServerStorage } from '@dxtmisha/functional'

import { TableFlexHeaderItemDesign } from '../../TableFlexHeaderItem'
import { TableFlexItemDesign } from '../../TableFlexItem'
import { TableFlexRecordDesign, type TableFlexRecordProps } from '../../TableFlexRecord'
import { TableFlex } from '../TableFlex'
import { TableFlexDesign } from '../TableFlexDesign'
import type { TableFlexProps } from '../props'
import type { TableFlexSlots } from '../types'

const SsrTableFlexItemComponent = defineComponent({
  name: 'SsrTableFlexItem',
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
    const design = new TableFlexItemDesign(
      'd1.tableFlexItem',
      props,
      { slots } as unknown as ConstructorParameters<typeof TableFlexItemDesign>[2]
    )
    return design.render()
  }
})

const SsrTableFlexHeaderItemComponent = defineComponent({
  name: 'SsrTableFlexHeaderItem',
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
    sortDir: String
  },
  setup(props, { slots }) {
    const design = new TableFlexHeaderItemDesign(
      'd1.tableFlexHeaderItem',
      props as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[1],
      { slots } as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[2]
    )
    return design.render()
  }
})

const SsrTableFlexRecordComponent = defineComponent({
  name: 'SsrTableFlexRecord',
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
    const design = new TableFlexRecordDesign(
      'd1.tableFlexRecord',
      props as TableFlexRecordProps,
      {
        slots,
        components: {
          tableHeaderItem: SsrTableFlexHeaderItemComponent,
          tableItem: SsrTableFlexItemComponent
        }
      } as unknown as ConstructorParameters<typeof TableFlexRecordDesign>[2]
    )
    return design.render()
  }
})

const SsrScrollStickyComponent = defineComponent({
  name: 'SsrScrollSticky',
  setup(_, { attrs, slots }) {
    return () => h('div', { ...attrs, 'data-ssr-scroll-sticky': 'true' }, slots.default?.())
  }
})

async function renderTableFlexToString(
  props: TableFlexProps,
  slots: TableFlexSlots = {}
): Promise<string> {
  const storage: Record<string, unknown> = {}
  ServerStorage.init(() => storage)

  const TestComponent = defineComponent({
    setup(_, { slots: componentSlots }) {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-tableFlex': true,
          'd1-tableFlex--headerTop': props.headerTop,
          'd1-tableFlex--captionBottom': props.captionBottom,
          'd1-tableFlex--bleed': props.bleed
        }
      }))

      const design = new TableFlexDesign(
        'd1.tableFlex',
        props,
        {
          classes,
          slots: componentSlots,
          components: {
            tableRecord: SsrTableFlexRecordComponent,
            scrollSticky: SsrScrollStickyComponent
          }
        } as unknown as ConstructorParameters<typeof TableFlexDesign>[2]
      )
      const render = design.render()
      return () => h(render)
    }
  })

  const app = createSSRApp({
    render: () => h(TestComponent, {}, slots as Record<string, () => unknown>)
  })

  return await renderToString(app)
}

describe('TableFlex (SSR)', () => {
  const naming = new DesignName('d1.tableFlex')

  it('should initialize and evaluate TableFlex orchestrator in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableFlexProps>({
      caption: 'SSR Caption',
      columns: ['id', 'name'],
      columnsWidth: { id: 60, name: 180 },
      header: { id: 'ID', name: 'Name' },
      list: [
        { id: 2, name: 'Bob' },
        { id: 1, name: 'Alice' }
      ],
      sort: 'name',
      sortDir: 'asc',
      page: 1,
      rows: 10
    })

    scope.run(() => {
      const table = new TableFlex(props, element, naming)

      expect(table.aria).toEqual({ role: 'table' })
      expect(table.binds).toEqual({ role: 'table' })
      expect(table.tag).toBe('div')
      expect(table.tagCaption).toBe('div')
      expect(table.tagColgroup).toBeUndefined()
      expect(table.tagFoot).toBe('div')
      expect(table.tagHeader).toBe('div')
      expect(table.tagItems).toBe('div')
      expect(table.i('columns').list).toEqual(['id', 'name'])
      expect(table.i('pagination').list.map(item => (item as { name: string }).name)).toEqual(['Alice', 'Bob'])
    })

    scope.stop()
  })

  it('should render full TableFlexDesign component to deterministic HTML string across variants in SSR', async () => {
    const emptyHtml = await renderTableFlexToString({
      lazy: false,
      stickyScrollBottom: false
    })
    expect(emptyHtml).toContain('role="table"')
    expect(emptyHtml).toContain('d1-tableFlex__table')
    expect(emptyHtml).not.toContain('<table')
    expect(emptyHtml).not.toContain('<colgroup')

    const fullProps: TableFlexProps = {
      caption: 'SSR Flex Table',
      columns: ['id', 'name', 'total'],
      columnsWidth: { id: 80, name: '200px', total: 120 },
      header: { id: 'ID', name: { label: 'Name', showSort: true }, total: 'Total' },
      list: [
        { id: 2, name: 'Привет', total: 500, disabled: true },
        { id: 1, name: 'Nguyễn', total: 0 }
      ],
      foot: { id: 'Sum', name: '2 rows', total: 500 },
      keyValue: 'id',
      selected: ['1'],
      sort: 'id',
      sortDir: 'asc',
      lazy: true,
      defaultHeight: 48,
      stickyScrollBottom: true,
      headerTop: true
    }
    const fullSlots: TableFlexSlots = {
      'foot-total': ({ value }) => h('strong', { class: 'ssr-foot-total' }, `SUM:${String(value)}`)
    }

    const firstRender = await renderTableFlexToString(fullProps, fullSlots)
    const secondRender = await renderTableFlexToString(fullProps, fullSlots)

    // Deterministic markup structure for hydration safety (excluding monotonic element IDs)
    const normalizeIds = (html: string) => html.replace(/id="id-\d+"/g, 'id="id-*"')
    expect(normalizeIds(firstRender)).toBe(normalizeIds(secondRender))

    // Div-based ARIA table structure without native table/colgroup tags
    expect(firstRender).toContain('data-ssr-scroll-sticky="true"')
    expect(firstRender).toContain('role="table"')
    expect(firstRender).toContain('role="row"')
    expect(firstRender).toContain('role="columnheader"')
    expect(firstRender).toContain('role="cell"')
    expect(firstRender).not.toContain('<table')
    expect(firstRender).not.toContain('<colgroup')
    expect(firstRender).not.toContain('<col')

    // Caption, lazy visible rows in SSR, minHeight style, sorted order, selection, disabled, footer slot
    expect(firstRender).toContain('d1-tableFlex__caption')
    expect(firstRender).toContain('SSR Flex Table')
    expect(firstRender).toContain('d1-tableFlexRecord--lazy--visible')
    expect(firstRender).not.toContain('d1-tableFlexRecord--lazy--hidden')
    expect(firstRender).toContain('--d1-tableFlexRecord-sys-minHeight:48px')
    expect(firstRender).toContain('data-key="1"')
    expect(firstRender).toContain('aria-selected="true"')
    expect(firstRender).toContain('data-key="2"')
    expect(firstRender).toContain('aria-disabled="true"')
    expect(firstRender).toContain('>0<')
    expect(firstRender).toContain('Nguyễn')
    expect(firstRender).toContain('Привет')
    expect(firstRender).toContain('ssr-foot-total')
    expect(firstRender).toContain('SUM:500')
    expect(firstRender.indexOf('Nguyễn')).toBeLessThan(firstRender.indexOf('Привет'))
  })

  it('should render filtered, paginated, and slotted TableFlex cleanly in SSR with request isolation', async () => {
    const htmlFirstRequest = await renderTableFlexToString(
      {
        columns: ['name'],
        list: [
          { name: 'Alpha' },
          { name: 'Beta' },
          { name: 'Gamma' }
        ],
        search: 'a',
        sort: 'name',
        sortDir: 'desc',
        page: 1,
        rows: 1,
        lazy: false,
        stickyScrollBottom: false
      },
      {
        body: () => h('div', { class: 'ssr-body-slot' }, 'Request 1')
      }
    )

    const htmlSecondRequest = await renderTableFlexToString(
      {
        columns: ['name'],
        list: [{ name: 'Delta' }],
        lazy: false,
        stickyScrollBottom: false
      },
      {
        body: () => h('div', { class: 'ssr-body-slot' }, 'Request 2')
      }
    )

    expect(htmlFirstRequest).toContain('Request 1')
    expect(htmlFirstRequest).toContain('Gamma')
    expect(htmlFirstRequest).not.toContain('Alpha')
    expect(htmlFirstRequest).not.toContain('Delta')

    expect(htmlSecondRequest).toContain('Request 2')
    expect(htmlSecondRequest).toContain('Delta')
    expect(htmlSecondRequest).not.toContain('Gamma')
    expect(htmlSecondRequest).not.toContain('Request 1')
  })
})
