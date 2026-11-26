// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignComponents, DesignName, ServerStorage } from '@dxtmisha/functional'

import { TableHeaderItemDesign } from '../../TableHeaderItem'
import { TableItemDesign } from '../../TableItem'
import { TableRecord } from '../TableRecord'
import { TableRecordDesign } from '../TableRecordDesign'
import { TableRecordInclude } from '../TableRecordInclude'
import type { TableRecordProps } from '../props'
import type { TableRecordSlots } from '../types'

const SsrTableItemComponent = defineComponent({
  name: 'SsrTableItem',
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
    const design = new TableItemDesign(
      'd1.tableItem',
      props,
      { slots } as unknown as ConstructorParameters<typeof TableItemDesign>[2]
    )
    return design.render()
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
    isSkeleton: Boolean
  },
  setup(props, { slots }) {
    const design = new TableHeaderItemDesign(
      'd1.tableHeaderItem',
      props as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[1],
      { slots } as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[2]
    )
    return design.render()
  }
})

describe('TableRecord (SSR)', () => {
  const naming = new DesignName('d1.tableRecord')

  it('should initialize and evaluate TableRecord orchestrator in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableRecordProps>({
      index: 'ssr-row',
      columns: ['id', 'name'],
      item: { id: 0, name: 'Alice' },
      selected: true,
      disabled: false
    })

    scope.run(() => {
      const record = new TableRecord(props, element, naming)

      expect(record.key).toBe('ssr-row')
      expect(record.aria).toEqual({ 'aria-selected': 'true' })
      expect(record.binds).toEqual({
        'data-key': 'ssr-row',
        'aria-selected': 'true'
      })
      expect(record.hasInstance('tableItem')).toBe(false)
      expect(record.hasInstance('tableHeaderItem')).toBe(false)
    })

    scope.stop()
  })

  it('should render full TableRecordDesign component to HTML string across variants in SSR', async () => {
    const variants: Array<{ props: TableRecordProps, slots?: TableRecordSlots }> = [
      { props: {} },
      {
        props: {
          index: '0',
          columns: ['id', 'name', 'hidden'],
          item: { id: 0, name: 'Nguyễn — Привет', hidden: '*none' }
        }
      },
      {
        props: {
          index: 'header-0',
          isHeader: true,
          columns: ['id', 'name'],
          item: { id: 'ID', name: 'Имя' },
          selected: true,
          disabled: true,
          isSkeleton: true
        }
      },
      {
        props: {
          index: 'mixed-1',
          columns: ['label', 'amount'],
          item: {
            label: { label: 'Total', isHeader: true },
            amount: 500
          }
        },
        slots: {
          amount: ({ value }) => h('strong', { class: 'ssr-amount' }, `$${String(value)}`)
        }
      }
    ]

    for (const variant of variants) {
      const TestComponent = defineComponent({
        setup(_, { slots }) {
          const design = new TableRecordDesign(
            'd1.tableRecord',
            variant.props,
            {
              slots,
              components: {
                tableHeaderItem: SsrTableHeaderItemComponent,
                tableItem: SsrTableItemComponent
              }
            } as unknown as ConstructorParameters<typeof TableRecordDesign>[2]
          )
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp({
        render: () => h('table', [
          h('tbody', [
            h(TestComponent, {}, variant.slots as Record<string, () => unknown>)
          ])
        ])
      })
      const html = await renderToString(app)

      expect(html).toContain('<tr')
      expect(html).toContain('</tr>')

      if (variant.props.index) {
        expect(html).toContain(`data-key="${variant.props.index}"`)
      }

      if (variant.props.selected) {
        expect(html).toContain('aria-selected="true"')
      } else {
        expect(html).not.toContain('aria-selected')
      }

      if (variant.props.disabled) {
        expect(html).toContain('aria-disabled="true"')
      } else {
        expect(html).not.toContain('aria-disabled')
      }

      if (variant.props.isHeader) {
        expect(html).toContain('<th')
        expect(html).toContain('scope="col"')
        expect(html).toContain('d1-skeleton__textVariant')
      }

      if (variant.props.index === '0') {
        expect(html).toContain('>0<')
        expect(html).toContain('Nguyễn — Привет')
        expect(html).toContain('d1-tableRecord--none')
      }

      if (variant.props.index === 'mixed-1') {
        expect(html).toContain('scope="row"')
        expect(html).toContain('ssr-amount')
        expect(html).toContain('$500')
      }
    }
  })

  it('should render TableRecordInclude with TableRecordDesign cleanly in SSR', async () => {
    const SsrTableRecordComponent = defineComponent({
      name: 'SsrTableRecord',
      props: {
        item: Object,
        columns: Array,
        isHeader: Boolean,
        index: String,
        selected: Boolean,
        disabled: Boolean,
        stickyTop: Boolean,
        stickyLeft: Array,
        isSkeleton: Boolean,
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

    const TestTable = defineComponent({
      setup() {
        const components = new DesignComponents({
          tableRecord: SsrTableRecordComponent
        })
        const include = new TableRecordInclude(
          {
            keyValue: 'id',
            selected: ['1']
          },
          new DesignName('d1.table'),
          components
        )

        return () => h('table', [
          h('thead', [
            include.renderRecord('header-0', ['id', 'name'], { id: 'ID', name: 'Name' }, true, { stickyTop: false })
          ]),
          h('tbody', [
            include.renderRecord('item-0', ['id', 'name'], { id: 1, name: 'Alice' }),
            include.renderRecord('item-1', ['id', 'name'], { id: 2, name: 'Bob', disabled: true })
          ])
        ])
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const html = await renderToString(createSSRApp(TestTable))
    expect(html).toContain('<table')
    expect(html).toContain('scope="col"')
    expect(html).toContain('data-key="1"')
    expect(html).toContain('aria-selected="true"')
    expect(html).toContain('data-key="2"')
    expect(html).toContain('aria-disabled="true"')
    expect(html).toContain('Alice')
    expect(html).toContain('Bob')
  })
})
