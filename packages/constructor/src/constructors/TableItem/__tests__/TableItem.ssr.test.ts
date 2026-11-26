// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignComponents, DesignName, ServerStorage } from '@dxtmisha/functional'

import { TableItem } from '../TableItem'
import { TableItemDesign } from '../TableItemDesign'
import { TableItemInclude } from '../TableItemInclude'
import type { TableItemProps } from '../props'
import type { TableItemSlots } from '../types'

describe('TableItem (SSR)', () => {
  const naming = new DesignName('d1.tableItem')

  it('should initialize and evaluate TableItem orchestrator in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableItemProps>({
      label: 'Amount',
      description: 'Before tax',
      colspan: 2,
      rowspan: 1,
      index: 0,
      selected: true,
      disabled: false
    })

    scope.run(() => {
      const item = new TableItem(props, element, naming)

      expect(item.tag).toBe('td')
      expect(item.aria).toEqual({ 'aria-selected': 'true' })
      expect(item.binds).toEqual({
        'colspan': 2,
        'rowspan': 1,
        'data-index': 0,
        'aria-selected': 'true'
      })
      expect(item.hasInstance('label')).toBe(false)
      expect(item.hasInstance('description')).toBe(false)
      expect(item.hasInstance('skeleton')).toBe(false)
    })

    scope.stop()
  })

  it('should render full TableItemDesign component to HTML string across variants in SSR', async () => {
    const variants: Array<{ props: TableItemProps, slots?: TableItemSlots }> = [
      { props: {} },
      { props: { label: 0, description: 0, index: 0 } },
      {
        props: {
          tag: 'th',
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
          const design = new TableItemDesign(
            'd1.tableItem',
            variant.props,
            { slots } as unknown as ConstructorParameters<typeof TableItemDesign>[2]
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

      const expectedTag = variant.props.tag || 'td'
      expect(html).toContain(`<${expectedTag}`)
      expect(html).toContain(`</${expectedTag}>`)

      if (variant.props.label === 0) {
        expect(html).toContain('d1-tableItem__label')
        expect(html).toContain('>0<')
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
        expect(html).toContain(`colspan="${variant.props.colspan}"`)
      }

      if (variant.props.rowspan !== undefined) {
        expect(html).toContain(`rowspan="${variant.props.rowspan}"`)
      }

      if (variant.slots?.context) {
        expect(html).toContain('ssr-context')
        expect(html).toContain('Desc slot')
      }
    }
  })

  it('should render TableItemInclude with TableItemDesign cleanly in SSR', async () => {
    const TableItemComponent = defineComponent({
      name: 'SsrTableItem',
      props: {
        label: [String, Number],
        description: [String, Number],
        selected: Boolean,
        disabled: Boolean,
        isSkeleton: Boolean,
        index: [String, Number]
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

    const TestRow = defineComponent({
      setup() {
        const components = new DesignComponents({
          tableItem: TableItemComponent
        })
        const include = new TableItemInclude(
          { selected: true, stickyLeft: ['name'] },
          new DesignName('d1.tableRecord'),
          components,
          undefined,
          {
            custom: ({ value, classes }: { value: unknown, classes: Record<string, string> }) =>
              h('span', { class: classes.label }, `Slot:${String(value)}`)
          }
        )

        return () => h('tr', [
          include.renderItem('r1__name', 'name', { name: 'Alice' }),
          include.renderItem('r1__custom', 'custom', { custom: 'VIP' }),
          include.renderItem('r1__skip', 'skip', { skip: '*none' })
        ])
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const html = await renderToString(createSSRApp(TestRow))
    expect(html).toContain('<tr')
    expect(html).toContain('Alice')
    expect(html).toContain('Slot:VIP')
    expect(html).toContain('d1-tableItem__label')
    expect(html).toContain('d1-tableRecord--none')
  })
})
