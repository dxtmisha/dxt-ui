// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, provide, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignComponents, DesignName, ServerStorage, type SortDir } from '@dxtmisha/functional'

import type { SortColumn } from '../../../types/sortTypes'
import { TableHeaderItem } from '../TableHeaderItem'
import { TableHeaderItemDesign } from '../TableHeaderItemDesign'
import { TableHeaderItemInclude } from '../TableHeaderItemInclude'
import type { TableHeaderItemProps } from '../props'
import type { TableHeaderItemSlots } from '../types'

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

describe('TableHeaderItem (SSR)', () => {
  const naming = new DesignName('d1.tableHeaderItem')

  it('should initialize and evaluate TableHeaderItem orchestrator in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<TableHeaderItemProps>({
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
      const item = new TableHeaderItem(props, element, naming)

      expect(item.tag).toBe('th')
      expect(item.ariaSort).toBe('ascending')
      expect(item.aria).toEqual({
        'aria-selected': 'true',
        'aria-sort': 'ascending'
      })
      expect(item.binds).toEqual({
        'colspan': 2,
        'rowspan': 1,
        'data-index': 0,
        'scope': 'col',
        'aria-selected': 'true',
        'aria-sort': 'ascending'
      })
      expect(item.hasInstance('chip')).toBe(false)
      expect(item.hasInstance('description')).toBe(false)
      expect(item.hasInstance('label')).toBe(false)
      expect(item.hasInstance('skeleton')).toBe(false)
      expect(item.hasInstance('sort')).toBe(false)
      expect(item.hasInstance('tooltip')).toBe(false)
    })

    scope.stop()
  })

  it('should render full TableHeaderItemDesign component to HTML string across variants in SSR', async () => {
    const variants: Array<{
      props: TableHeaderItemProps
      slots?: TableHeaderItemSlots
      providedSortColumn?: SortColumn
      providedSortDir?: SortDir
    }> = [
      { props: {} },
      { props: { label: 0, description: 0, index: 0, scope: 'col' } },
      {
        props: {
          label: 'Nguyễn — Привет',
          description: 'Описание колонки',
          scope: 'col',
          colspan: 2,
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
        props: { tag: 'div', label: 'Flex Header' },
        slots: {
          tooltip: () => h('span', { class: 'ssr-tooltip-slot' }, 'Tooltip body'),
          context: () => h('div', { class: 'ssr-context' }, 'Extra')
        }
      }
    ]

    for (const variant of variants) {
      const TestComponent = defineComponent({
        setup(_, { slots }) {
          const design = new TableHeaderItemDesign(
            'd1.tableHeaderItem',
            variant.props,
            {
              slots,
              components: {
                chip: SsrMockChip,
                icon: SsrMockIcon,
                tooltip: SsrMockTooltip
              }
            } as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[2]
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
      const expectedTag = variant.props.tag || 'th'

      expect(html).toContain(`<${expectedTag}`)
      expect(html).toContain(`</${expectedTag}>`)

      if (variant.props.label === 0) {
        expect(html).toContain('d1-tableHeaderItem__body')
        expect(html).toContain('d1-tableHeaderItem__label')
        expect(html).toContain('>0<')
        expect(html).toContain('data-index="0"')
      }

      if (variant.props.showSort) {
        expect(html).toContain('ssr-chip')
        expect(html).toContain('data-selected="true"')
        expect(html).toContain('aria-sort="descending"')
      }

      if (variant.props.tooltipLabel || variant.slots?.tooltip) {
        expect(html).toContain('ssr-tooltip')
        expect(html).toContain('d1-tableHeaderItem__tooltip')
        expect(html).toContain('data-event-type="tooltip"')
      }

      if (variant.props.isSkeleton) {
        expect(html).toContain('d1-skeleton__textVariant')
      }

      if (variant.slots?.context) {
        expect(html).toContain('ssr-context')
        expect(html).toContain('ssr-tooltip-slot')
      }
    }
  })

  it('should render TableHeaderItemInclude with header slots and default rendering cleanly in SSR', async () => {
    const HeaderComponent = defineComponent({
      name: 'SsrTableHeaderItem',
      props: {
        label: [String, Number],
        description: [String, Number],
        scope: String,
        index: [String, Number]
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

    const TestHeaderRow = defineComponent({
      setup() {
        const components = new DesignComponents({
          tableHeaderItem: HeaderComponent
        })
        const include = new TableHeaderItemInclude(
          {},
          new DesignName('d1.tableRecord'),
          components,
          undefined,
          {
            'header-custom': ({ value, classes }: { value: unknown, classes: Record<string, string> }) =>
              h('span', { class: classes.label }, `HeaderSlot:${String(value)}`),
            'default': () => h('span', 'BodyDefaultMustBeIgnored')
          }
        )

        return () => h('tr', [
          include.renderItem('h__name', 'name', { name: 'User' }, { scope: 'col' }),
          include.renderItem('h__custom', 'custom', { custom: 'Role' }, { scope: 'col' })
        ])
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const html = await renderToString(createSSRApp(TestHeaderRow))
    expect(html).toContain('<tr')
    expect(html).toContain('<th')
    expect(html).toContain('scope="col"')
    expect(html).toContain('User')
    expect(html).toContain('HeaderSlot:Role')
    expect(html).toContain('d1-tableHeaderItem__label')
    expect(html).not.toContain('BodyDefaultMustBeIgnored')
  })
})
