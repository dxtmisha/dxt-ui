// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, provide, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignComponents, DesignName, ServerStorage, type SortDir } from '@dxtmisha/functional'

import type { SortColumn } from '../../../types/sortTypes'
import { TableHeaderItemInclude } from '../../TableHeaderItem'
import { TableFlexHeaderItem } from '../TableFlexHeaderItem'
import { TableFlexHeaderItemDesign } from '../TableFlexHeaderItemDesign'
import type { TableFlexHeaderItemProps } from '../props'
import type { TableFlexHeaderItemSlots } from '../types'

const SsrMockChip = defineComponent({
  name: 'SsrMockChip',
  props: {
    icon: [String, Object],
    selected: Boolean
  },
  setup(props, { attrs }) {
    return () => h('button', {
      'type': 'button',
      'class': ['ssr-chip', attrs.class],
      'data-selected': String(Boolean(props.selected))
    }, 'sort')
  }
})

const SsrMockIcon = defineComponent({
  name: 'SsrMockIcon',
  props: {
    icon: [String, Object]
  },
  setup(props, { attrs }) {
    return () => h('span', {
      ...attrs,
      'class': ['ssr-icon', attrs.class],
      'data-icon': String(props.icon ?? '')
    })
  }
})

const SsrMockTooltip = defineComponent({
  name: 'SsrMockTooltip',
  props: {
    label: String,
    description: String
  },
  setup(props, { attrs, slots }) {
    const controlBinds = {
      class: 'ssr-tooltip-trigger',
      onClick: () => {},
      onMouseover: () => {},
      onMouseout: () => {}
    }

    return () => h(
      'span',
      {
        'class': ['ssr-tooltip', attrs.class],
        'data-label': props.label,
        'data-description': props.description
      },
      [
        slots.control?.({
          ...controlBinds,
          open: ref(false),
          binds: controlBinds
        }),
        slots.body ? h('span', { class: 'ssr-tooltip-body' }, slots.body()) : undefined
      ]
    )
  }
})

describe('TableFlexHeaderItem (SSR)', () => {
  const naming = new DesignName('d1.tableFlexHeaderItem')

  it('should initialize and evaluate TableFlexHeaderItem orchestrator in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableFlexHeaderItemProps>({
      label: 'Revenue',
      description: 'Quarterly',
      scope: 'col',
      colspan: 2,
      rowspan: 1,
      index: 0,
      sortColumn: 0,
      sortDir: 'asc',
      selected: true,
      disabled: false
    })

    scope.run(() => {
      const item = new TableFlexHeaderItem(props, element, naming)

      expect(item.tag).toBe('div')
      expect(item.ariaSort).toBe('ascending')
      expect(item.aria).toEqual({
        'aria-selected': 'true',
        'aria-sort': 'ascending',
        'role': 'columnheader'
      })
      expect(item.binds).toEqual({
        'data-colspan': 2,
        'data-rowspan': 1,
        'data-index': 0,
        'aria-selected': 'true',
        'aria-sort': 'ascending',
        'role': 'columnheader'
      })
      expect('colspan' in item.binds).toBe(false)
      expect('rowspan' in item.binds).toBe(false)
      expect('scope' in item.binds).toBe(false)
      expect(item.hasInstance('chip')).toBe(false)
      expect(item.hasInstance('description')).toBe(false)
      expect(item.hasInstance('label')).toBe(false)
      expect(item.hasInstance('skeleton')).toBe(false)
      expect(item.hasInstance('sort')).toBe(false)
      expect(item.hasInstance('tooltip')).toBe(false)
    })

    scope.stop()
  })

  it('should render full TableFlexHeaderItemDesign component to HTML string across variants and escape XSS in SSR', async () => {
    const variants: Array<{
      props: TableFlexHeaderItemProps
      slots?: TableFlexHeaderItemSlots
      providedSortColumn?: SortColumn
      providedSortDir?: SortDir
    }> = [
      { props: {} },
      { props: { tag: '', label: 0, description: 0, colspan: 0, rowspan: 0, index: 0, scope: 'col' } },
      {
        props: {
          tag: 'section',
          label: 'Nguyễn — Привет',
          description: 'Описание колонки',
          scope: 'col',
          colspan: 2,
          rowspan: 3,
          index: 'user',
          showSort: true,
          iconSort: 'swap_vert',
          iconArrowUp: 'arrow_upward',
          iconArrowDown: 'arrow_downward',
          tooltipLabel: 'Help',
          tooltipDescription: 'Column details',
          iconTooltip: 'info',
          selected: true,
          disabled: true,
          isSkeleton: true
        },
        providedSortColumn: 'user',
        providedSortDir: 'desc'
      },
      {
        props: {
          label: '<script>alert(1)</script>',
          index: '"><img src=x onerror=alert(1)>'
        }
      },
      {
        props: { label: 'Flex Header' },
        slots: {
          default: () => ' (slot)',
          description: () => 'Desc slot',
          tooltip: () => h('span', { class: 'ssr-tooltip-slot' }, 'Tooltip body'),
          context: () => h('div', { class: 'ssr-context' }, 'Extra')
        }
      }
    ]

    for (const variant of variants) {
      const TestComponent = defineComponent({
        setup(_, { slots }) {
          const design = new TableFlexHeaderItemDesign(
            'd1.tableFlexHeaderItem',
            variant.props,
            {
              slots,
              components: {
                chip: SsrMockChip,
                icon: SsrMockIcon,
                tooltip: SsrMockTooltip
              }
            } as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[2]
          )
          const render = design.render()
          return () => h(render)
        }
      })

      const Wrapper = defineComponent({
        setup() {
          if (variant.providedSortColumn !== undefined) {
            provide('sortColumn', ref<SortColumn | undefined>(variant.providedSortColumn))
          }

          if (variant.providedSortDir !== undefined) {
            provide('sortDir', ref<SortDir | undefined>(variant.providedSortDir))
          }

          return () => h(
            TestComponent,
            {},
            (variant.slots ?? {}) as Record<string, () => unknown>
          )
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const html = await renderToString(createSSRApp(Wrapper))
      const expectedTag = variant.props.tag || 'div'

      expect(html).toContain(`<${expectedTag}`)
      expect(html).toContain(`</${expectedTag}>`)
      expect(html).toContain('role="columnheader"')
      expect(html).not.toMatch(/\scolspan="/)
      expect(html).not.toMatch(/\srowspan="/)
      expect(html).not.toMatch(/\sscope="/)
      expect(html).not.toContain('<script>')

      if (variant.props.label === 0) {
        expect(html).toContain('d1-tableFlexHeaderItem__body')
        expect(html).toContain('d1-tableFlexHeaderItem__label')
        expect(html).toContain('>0<')
        expect(html).toContain('data-colspan="0"')
        expect(html).toContain('data-rowspan="0"')
        expect(html).toContain('data-index="0"')
      }

      if (variant.props.showSort) {
        expect(html).toContain('ssr-chip')
        expect(html).toContain('data-selected="true"')
        expect(html).toContain('aria-sort="descending"')
      }

      if (variant.props.tooltipLabel || variant.slots?.tooltip) {
        expect(html).toContain('ssr-tooltip')
        expect(html).toContain('d1-tableFlexHeaderItem__tooltip')
        expect(html).toContain('data-event-type="tooltip"')
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

      if (variant.slots?.context) {
        expect(html).toContain('ssr-context')
        expect(html).toContain('ssr-tooltip-slot')
        expect(html).toContain('Desc slot')
      }
    }
  })

  it('should render TableHeaderItemInclude paired with TableFlexHeaderItemDesign cleanly in SSR', async () => {
    const FlexHeaderComponent = defineComponent({
      name: 'SsrTableFlexHeaderItem',
      props: {
        label: [String, Number],
        description: [String, Number],
        colspan: [String, Number],
        rowspan: [String, Number],
        scope: String,
        selected: Boolean,
        disabled: Boolean,
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

    const TestFlexHeaderRow = defineComponent({
      setup() {
        const components = new DesignComponents({
          tableHeaderItem: FlexHeaderComponent
        })
        const include = new TableHeaderItemInclude(
          { selected: true, stickyLeft: ['name'] },
          new DesignName('d1.tableFlexRecord'),
          components,
          undefined,
          {
            'header-custom': ({ value, classes }: { value: unknown, classes: Record<string, string> }) =>
              h('span', { class: classes.label }, `FlexHeaderSlot:${String(value)}`),
            'default': () => h('span', 'BodyDefaultMustBeIgnored')
          }
        )

        return () => h('div', { role: 'row' }, [
          include.renderItem('h__name', 'name', { name: { label: 'User', colspan: 2 } }, { scope: 'col' }),
          include.renderItem('h__custom', 'custom', { custom: 'Role' }, { scope: 'col' })
        ])
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const html = await renderToString(createSSRApp(TestFlexHeaderRow))
    expect(html).toContain('role="row"')
    expect(html).toContain('role="columnheader"')
    expect(html).toContain('data-colspan="2"')
    expect(html).not.toMatch(/\scolspan="/)
    expect(html).not.toMatch(/\sscope="/)
    expect(html).toContain('User')
    expect(html).toContain('FlexHeaderSlot:Role')
    expect(html).toContain('d1-tableFlexHeaderItem__label')
    expect(html).not.toContain('BodyDefaultMustBeIgnored')
  })
})
