// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignComponents, DesignName, ServerStorage } from '@dxtmisha/functional'

import { TableFlexHeaderItemDesign } from '../../TableFlexHeaderItem'
import { TableFlexItemDesign } from '../../TableFlexItem'
import { TableRecordInclude } from '../../TableRecord'
import { TableFlexRecord } from '../TableFlexRecord'
import { TableFlexRecordDesign } from '../TableFlexRecordDesign'
import type { TableFlexRecordProps } from '../props'
import type { TableFlexRecordSlots } from '../types'

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
    isSkeleton: Boolean
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

describe('TableFlexRecord (SSR)', () => {
  const naming = new DesignName('d1.tableFlexRecord')

  it('should initialize and evaluate TableFlexRecord orchestrator in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableFlexRecordProps>({
      index: 'ssr-flex-row',
      lazy: true,
      defaultHeight: 40,
      columns: ['id', 'name'],
      item: { id: 0, name: 'Alice' },
      selected: true,
      disabled: false
    })

    scope.run(() => {
      const record = new TableFlexRecord(props, element, naming)

      expect(record.key).toBe('ssr-flex-row')
      expect(record.aria).toEqual({
        'aria-selected': 'true',
        'role': 'row'
      })
      expect(record.binds).toEqual({
        'data-key': 'ssr-flex-row',
        'aria-selected': 'true',
        'role': 'row'
      })
      expect(record.isRender()).toBe(true)
      expect(record.classes).toEqual({
        'd1-tableFlexRecord--lazy': true,
        'd1-tableFlexRecord--lazy--visible': true,
        'd1-tableFlexRecord--lazy--hidden': false
      })
      expect(record.styles).toEqual({
        '--d1-tableFlexRecord-sys-minHeight': '40px'
      })
      expect(record.hasInstance('lazy')).toBe(true)
      expect(record.hasInstance('tableItem')).toBe(false)
      expect(record.hasInstance('tableHeaderItem')).toBe(false)
    })

    scope.stop()
  })

  it('should render full TableFlexRecordDesign component to deterministic HTML string across variants in SSR', async () => {
    const variants: Array<{ props: TableFlexRecordProps, slots?: TableFlexRecordSlots }> = [
      { props: { lazy: false } },
      {
        props: {
          index: '0',
          lazy: true,
          defaultHeight: 44,
          columns: ['id', 'name', 'hidden'],
          item: { id: 0, name: 'Nguyễn — Привет', hidden: '*none' }
        }
      },
      {
        props: {
          index: 'header-0',
          isHeader: true,
          lazy: true,
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
          lazy: true,
          defaultHeight: '3rem',
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
          const design = new TableFlexRecordDesign(
            'd1.tableFlexRecord',
            variant.props,
            {
              slots,
              components: {
                tableHeaderItem: SsrTableFlexHeaderItemComponent,
                tableItem: SsrTableFlexItemComponent
              }
            } as unknown as ConstructorParameters<typeof TableFlexRecordDesign>[2]
          )
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp({
        render: () => h(TestComponent, {}, variant.slots as Record<string, () => unknown>)
      })
      const html = await renderToString(app)

      expect(html).toContain('<div')
      expect(html).toContain('role="row"')

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

      if (variant.props.lazy && !variant.props.isHeader) {
        expect(html).toContain('d1-tableFlexRecord--lazy')
        expect(html).toContain('d1-tableFlexRecord--lazy--visible')
        expect(html).not.toContain('d1-tableFlexRecord--lazy--hidden')
      } else {
        expect(html).not.toContain('d1-tableFlexRecord--lazy')
      }

      if (variant.props.isHeader) {
        expect(html).toContain('role="columnheader"')
        expect(html).toContain('d1-skeleton__textVariant')
      }

      if (variant.props.index === '0') {
        expect(html).toContain('--d1-tableFlexRecord-sys-minHeight:44px')
        expect(html).toContain('role="cell"')
        expect(html).toContain('>0<')
        expect(html).toContain('Nguyễn — Привет')
        expect(html).toContain('d1-tableFlexRecord--none')
      }

      if (variant.props.index === 'mixed-1') {
        expect(html).toContain('--d1-tableFlexRecord-sys-minHeight:3rem')
        expect(html).toContain('role="rowheader"')
        expect(html).toContain('ssr-amount')
        expect(html).toContain('$500')
      }
    }
  })

  it('should render TableRecordInclude with TableFlexRecordDesign cleanly in SSR', async () => {
    const SsrTableFlexRecordComponent = defineComponent({
      name: 'SsrTableFlexRecord',
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

    const TestFlexTable = defineComponent({
      setup() {
        const components = new DesignComponents({
          tableRecord: SsrTableFlexRecordComponent
        })
        const include = new TableRecordInclude(
          {
            keyValue: 'id',
            selected: ['1'],
            lazy: true,
            defaultHeight: 36
          },
          new DesignName('d1.tableFlex'),
          components
        )

        return () => h('div', { role: 'table' }, [
          include.renderRecord('header-0', ['id', 'name'], { id: 'ID', name: 'Name' }, true, { stickyTop: false }),
          include.renderRecord('item-0', ['id', 'name'], { id: 1, name: 'Alice' }),
          include.renderRecord('item-1', ['id', 'name'], { id: 2, name: 'Bob', disabled: true })
        ])
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const html = await renderToString(createSSRApp(TestFlexTable))
    expect(html).toContain('role="table"')
    expect(html).toContain('role="row"')
    expect(html).toContain('role="columnheader"')
    expect(html).toContain('role="cell"')
    expect(html).toContain('data-key="1"')
    expect(html).toContain('aria-selected="true"')
    expect(html).toContain('data-key="2"')
    expect(html).toContain('aria-disabled="true"')
    expect(html).toContain('--d1-tableFlexRecord-sys-minHeight:36px')
    expect(html).toContain('Alice')
    expect(html).toContain('Bob')
  })
})
