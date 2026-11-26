// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignComponents, DesignName, ServerStorage } from '@dxtmisha/functional'

import { TableItemInclude } from '../../TableItem'
import { TableFlexItem } from '../TableFlexItem'
import { TableFlexItemDesign } from '../TableFlexItemDesign'
import type { TableFlexItemProps } from '../props'
import type { TableFlexItemSlots } from '../types'

describe('TableFlexItem (SSR)', () => {
  const naming = new DesignName('d1.tableFlexItem')

  it('should initialize and evaluate TableFlexItem orchestrator in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableFlexItemProps>({
      label: 'Amount',
      description: 'Before tax',
      colspan: 2,
      rowspan: 1,
      index: 0,
      selected: true,
      disabled: false
    })

    scope.run(() => {
      const item = new TableFlexItem(props, element, naming)

      expect(item.tag).toBe('div')
      expect(item.aria).toEqual({
        'aria-selected': 'true',
        'role': 'cell'
      })
      expect(item.binds).toEqual({
        'data-colspan': 2,
        'data-rowspan': 1,
        'data-index': 0,
        'aria-selected': 'true',
        'role': 'cell'
      })
      expect('colspan' in item.binds).toBe(false)
      expect('rowspan' in item.binds).toBe(false)
      expect(item.hasInstance('label')).toBe(false)
      expect(item.hasInstance('description')).toBe(false)
      expect(item.hasInstance('skeleton')).toBe(false)
    })

    scope.stop()
  })

  it('should render full TableFlexItemDesign component to HTML string across variants and escape XSS in SSR', async () => {
    const variants: Array<{ props: TableFlexItemProps, slots?: TableFlexItemSlots }> = [
      { props: {} },
      { props: { tag: '', label: 0, description: 0, colspan: 0, rowspan: 0, index: 0 } },
      {
        props: {
          tag: 'section',
          label: 'Nguyễn — Привет',
          description: 'Описание',
          colspan: 2,
          rowspan: 3,
          index: 'user',
          selected: true,
          disabled: true,
          isSkeleton: true
        }
      },
      {
        props: {
          label: '<script>alert(1)</script>',
          index: '"><img src=x onerror=alert(1)>'
        }
      },
      {
        props: { label: 'Cell' },
        slots: {
          default: () => ' (slot)',
          description: () => 'Desc slot',
          context: () => h('div', { class: 'ssr-context' }, 'Extra')
        }
      }
    ]

    for (const variant of variants) {
      const TestComponent = defineComponent({
        setup(_, { slots }) {
          const design = new TableFlexItemDesign(
            'd1.tableFlexItem',
            variant.props,
            { slots } as unknown as ConstructorParameters<typeof TableFlexItemDesign>[2]
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

      const expectedTag = variant.props.tag || 'div'
      expect(html).toContain(`<${expectedTag}`)
      expect(html).toContain(`</${expectedTag}>`)
      expect(html).toContain('role="cell"')
      expect(html).not.toMatch(/\scolspan="/)
      expect(html).not.toMatch(/\srowspan="/)
      expect(html).not.toContain('<script>')

      if (variant.props.label === 0) {
        expect(html).toContain('d1-tableFlexItem__label')
        expect(html).toContain('>0<')
        expect(html).toContain('data-colspan="0"')
        expect(html).toContain('data-rowspan="0"')
        expect(html).toContain('data-index="0"')
      }

      if (variant.props.isSkeleton) {
        expect(html).toContain('d1-skeleton__textVariant')
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

      if (variant.props.colspan !== undefined) {
        expect(html).toContain(`data-colspan="${variant.props.colspan}"`)
      }

      if (variant.props.rowspan !== undefined) {
        expect(html).toContain(`data-rowspan="${variant.props.rowspan}"`)
      }

      if (variant.slots?.context) {
        expect(html).toContain('ssr-context')
        expect(html).toContain('Desc slot')
      }
    }
  })

  it('should render TableItemInclude paired with TableFlexItemDesign cleanly in SSR', async () => {
    const FlexItemComponent = defineComponent({
      name: 'SsrTableFlexItem',
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

    const TestFlexRow = defineComponent({
      setup() {
        const components = new DesignComponents({
          tableItem: FlexItemComponent
        })
        const include = new TableItemInclude(
          { selected: true, stickyLeft: ['name'] },
          new DesignName('d1.tableFlexRecord'),
          components,
          undefined,
          {
            custom: ({ value, classes }: { value: unknown, classes: Record<string, string> }) =>
              h('span', { class: classes.label }, `Slot:${String(value)}`)
          }
        )

        return () => h('div', { role: 'row' }, [
          include.renderItem('r1__name', 'name', { name: { label: 'Alice', colspan: 2 } }),
          include.renderItem('r1__custom', 'custom', { custom: 'VIP' }),
          include.renderItem('r1__skip', 'skip', { skip: '*none' })
        ])
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const html = await renderToString(createSSRApp(TestFlexRow))
    expect(html).toContain('role="row"')
    expect(html).toContain('role="cell"')
    expect(html).toContain('data-colspan="2"')
    expect(html).not.toMatch(/\scolspan="/)
    expect(html).toContain('Alice')
    expect(html).toContain('Slot:VIP')
    expect(html).toContain('d1-tableFlexItem__label')
    expect(html).toContain('d1-tableFlexRecord--none')
  })
})
