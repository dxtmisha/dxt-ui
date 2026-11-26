// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  ref,
  type Ref
} from 'vue'

import { TableFlexHeaderItem } from '../TableFlexHeaderItem'
import { TableFlexHeaderItemDesign } from '../TableFlexHeaderItemDesign'
import { defaultsTableFlexHeaderItem, type TableFlexHeaderItemProps } from '../props'
import type {
  TableFlexHeaderItemClasses,
  TableFlexHeaderItemComponents,
  TableFlexHeaderItemExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object]
  },
  setup(props, { attrs }) {
    return () => h('span', {
      ...attrs,
      'class': ['mock-icon', attrs.class],
      'data-icon': typeof props.icon === 'string' ? props.icon : JSON.stringify(props.icon ?? '')
    })
  }
})

describe('TableFlexHeaderItemDesign', () => {
  it('should expose defaultsTableFlexHeaderItem with div tag and standard alignments without scope', () => {
    expect(defaultsTableFlexHeaderItem).toEqual({
      tag: 'div',
      align: 'left',
      alignVertical: 'center'
    })
    expect('scope' in defaultsTableFlexHeaderItem).toBe(false)
  })

  it('should render div root with role="columnheader", merge external attrs/classes/styles/listeners, and bind elementHtml ref', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<TableFlexHeaderItemProps>({
          label: 'Total',
          description: 'USD',
          colspan: 2,
          rowspan: 1,
          scope: 'col',
          index: 'total',
          selected: true,
          sortColumn: 'total',
          sortDir: 'asc'
        })

        const design = new TableFlexHeaderItemDesign<
          TableFlexHeaderItemComponents,
          TableFlexHeaderItemExpose,
          TableFlexHeaderItemClasses,
          TableFlexHeaderItemProps
        >(
          'd1.tableFlexHeaderItem',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-tableFlexHeaderItem': true, 'd1-tableFlexHeaderItem--selected': true }
            }))
          } as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[2]
        )

        const expose = design.expose() as TableFlexHeaderItemExpose & {
          elementHtml: Ref<HTMLDivElement | undefined>
        }
        elementHtmlRef = expose.elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h('div', { role: 'table' }, [
        h('div', { role: 'row' }, [
          h(TestComponent, {
            'class': 'extra-flex-header',
            'style': { paddingLeft: '12px' },
            'data-testid': 'table-flex-header-item-root',
            'onClick': externalClick
          })
        ])
      ])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('[data-testid="table-flex-header-item-root"]') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName).toBe('DIV')
    expect(rootElement.getAttribute('role')).toBe('columnheader')
    expect(rootElement.classList.contains('d1-tableFlexHeaderItem')).toBe(true)
    expect(rootElement.classList.contains('d1-tableFlexHeaderItem--selected')).toBe(true)
    expect(rootElement.classList.contains('extra-flex-header')).toBe(true)
    expect(rootElement.style.paddingLeft).toBe('12px')
    expect(rootElement.getAttribute('data-colspan')).toBe('2')
    expect(rootElement.getAttribute('data-rowspan')).toBe('1')
    expect(rootElement.getAttribute('data-index')).toBe('total')
    expect(rootElement.getAttribute('colspan')).toBeNull()
    expect(rootElement.getAttribute('rowspan')).toBeNull()
    expect(rootElement.getAttribute('scope')).toBeNull()
    expect(rootElement.getAttribute('aria-selected')).toBe('true')
    expect(rootElement.getAttribute('aria-sort')).toBe('ascending')
    expect(rootElement.getAttribute('aria-disabled')).toBeNull()
    expect(rootElement.querySelector('.d1-tableFlexHeaderItem__body')).not.toBeNull()
    expect(rootElement.querySelector('.d1-tableFlexHeaderItem__label')?.textContent).toBe('Total')
    expect(rootElement.querySelector('.d1-tableFlexHeaderItem__description')?.textContent).toBe('USD')
    expect(elementHtmlRef.value).toBe(rootElement)

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should expose inherited public renderBody and renderTooltipControl methods and support ItemConstructor DI override', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomTableFlexHeaderItem extends TableFlexHeaderItem {
      override get tag(): string {
        return 'article'
      }
    }

    let renderedBodyCount = -1
    let tooltipControlRendered = false

    const TestComponent = defineComponent({
      setup(_, { slots }) {
        const design = new TableFlexHeaderItemDesign<
          TableFlexHeaderItemComponents,
          TableFlexHeaderItemExpose,
          TableFlexHeaderItemClasses,
          TableFlexHeaderItemProps
        >(
          'd1.tableFlexHeaderItem',
          reactive({
            label: 'Custom Flex Header',
            iconTooltip: 'help'
          }),
          {
            slots,
            components: {
              icon: MockIcon
            }
          } as unknown as ConstructorParameters<typeof TableFlexHeaderItemDesign>[2],
          CustomTableFlexHeaderItem
        )

        const render = design.render()

        return () => {
          renderedBodyCount = design.renderBody().length
          const controlVNode = design.renderTooltipControl({
            open: ref(false),
            binds: {
              class: 'trigger-class',
              onClick: () => {},
              onMouseover: () => {},
              onMouseout: () => {}
            }
          } as unknown as Parameters<typeof design.renderTooltipControl>[0])
          tooltipControlRendered = Boolean(controlVNode)

          return render()
        }
      }
    })

    const app = createApp({
      render: () => h('div', { role: 'row' }, [
        h(TestComponent, {}, {
          context: () => h('span', { class: 'custom-context' }, 'Ctx')
        })
      ])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('article') as HTMLElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.getAttribute('role')).toBe('columnheader')
    expect(renderedBodyCount).toBe(1)
    expect(tooltipControlRendered).toBe(true)
    expect(rootElement.querySelector('.d1-tableFlexHeaderItem__label')?.textContent).toBe('Custom Flex Header')
    expect(rootElement.querySelector('.custom-context')?.textContent).toBe('Ctx')
  })

  it('should render empty div with role="columnheader" and omit body wrapper when no props or slots are supplied', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new TableFlexHeaderItemDesign<
          TableFlexHeaderItemComponents,
          TableFlexHeaderItemExpose,
          TableFlexHeaderItemClasses,
          TableFlexHeaderItemProps
        >(
          'd1.tableFlexHeaderItem',
          reactive({})
        )
        return design.render()
      }
    })

    const app = createApp({
      render: () => h('div', { role: 'row' }, [h(TestComponent)])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('[role="columnheader"]') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName).toBe('DIV')
    expect(rootElement.querySelector('.d1-tableFlexHeaderItem__body')).toBeNull()
    expect(rootElement.children).toHaveLength(0)
  })
})
