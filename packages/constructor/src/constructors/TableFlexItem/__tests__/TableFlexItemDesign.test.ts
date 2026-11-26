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
  type Ref
} from 'vue'

import { TableFlexItem } from '../TableFlexItem'
import { TableFlexItemDesign } from '../TableFlexItemDesign'
import { defaultsTableFlexItem, type TableFlexItemProps } from '../props'
import type {
  TableFlexItemClasses,
  TableFlexItemComponents,
  TableFlexItemExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('TableFlexItemDesign', () => {
  it('should expose defaultsTableFlexItem with div tag and standard alignments', () => {
    expect(defaultsTableFlexItem).toEqual({
      tag: 'div',
      align: 'left',
      alignVertical: 'center'
    })
  })

  it('should render div root with role="cell", merge external attrs/classes/styles/listeners, and bind elementHtml ref', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<TableFlexItemProps>({
          label: 'Total',
          description: 'USD',
          colspan: 2,
          rowspan: 1,
          index: 'total',
          selected: true
        })

        const design = new TableFlexItemDesign<
          TableFlexItemComponents,
          TableFlexItemExpose,
          TableFlexItemClasses,
          TableFlexItemProps
        >(
          'd1.tableFlexItem',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-tableFlexItem': true, 'd1-tableFlexItem--selected': true }
            }))
          } as unknown as ConstructorParameters<typeof TableFlexItemDesign>[2]
        )

        const expose = design.expose() as TableFlexItemExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
        elementHtmlRef = expose.elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h('div', { role: 'table' }, [
        h('div', { role: 'row' }, [
          h(TestComponent, {
            'class': 'extra-flex-cell',
            'style': { paddingLeft: '8px' },
            'data-testid': 'table-flex-item-root',
            'onClick': externalClick
          })
        ])
      ])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('[data-testid="table-flex-item-root"]') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName).toBe('DIV')
    expect(rootElement.getAttribute('role')).toBe('cell')
    expect(rootElement.classList.contains('d1-tableFlexItem')).toBe(true)
    expect(rootElement.classList.contains('d1-tableFlexItem--selected')).toBe(true)
    expect(rootElement.classList.contains('extra-flex-cell')).toBe(true)
    expect(rootElement.style.paddingLeft).toBe('8px')
    expect(rootElement.getAttribute('data-colspan')).toBe('2')
    expect(rootElement.getAttribute('data-rowspan')).toBe('1')
    expect(rootElement.getAttribute('data-index')).toBe('total')
    expect(rootElement.getAttribute('colspan')).toBeNull()
    expect(rootElement.getAttribute('rowspan')).toBeNull()
    expect(rootElement.getAttribute('aria-selected')).toBe('true')
    expect(rootElement.getAttribute('aria-disabled')).toBeNull()
    expect(rootElement.querySelector('.d1-tableFlexItem__label')?.textContent).toBe('Total')
    expect(rootElement.querySelector('.d1-tableFlexItem__description')?.textContent).toBe('USD')
    expect(elementHtmlRef.value).toBe(rootElement)

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should expose inherited public renderContext method and support ItemConstructor DI override', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomTableFlexItem extends TableFlexItem {
      override get tag(): string {
        return 'article'
      }
    }

    let renderedContextLength = -1

    const TestComponent = defineComponent({
      setup(_, { slots }) {
        const design = new TableFlexItemDesign<
          TableFlexItemComponents,
          TableFlexItemExpose,
          TableFlexItemClasses,
          TableFlexItemProps
        >(
          'd1.tableFlexItem',
          reactive({ label: 'Custom Flex Cell' }),
          { slots } as unknown as ConstructorParameters<typeof TableFlexItemDesign>[2],
          CustomTableFlexItem
        )

        const render = design.render()

        return () => {
          renderedContextLength = design.renderContext().length
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
    expect(rootElement.getAttribute('role')).toBe('cell')
    expect(renderedContextLength).toBe(2)
    expect(rootElement.querySelector('.d1-tableFlexItem__label')?.textContent).toBe('Custom Flex Cell')
    expect(rootElement.querySelector('.custom-context')?.textContent).toBe('Ctx')
  })

  it('should render empty div with role="cell" when no props or slots are supplied', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new TableFlexItemDesign<
          TableFlexItemComponents,
          TableFlexItemExpose,
          TableFlexItemClasses,
          TableFlexItemProps
        >(
          'd1.tableFlexItem',
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

    const rootElement = host.querySelector('[role="cell"]') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName).toBe('DIV')
    expect(rootElement.children).toHaveLength(0)
  })
})
