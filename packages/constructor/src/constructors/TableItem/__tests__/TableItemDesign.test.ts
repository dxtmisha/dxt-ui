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

import { TableItem } from '../TableItem'
import { TableItemDesign } from '../TableItemDesign'
import type { TableItemProps } from '../props'
import type { TableItemClasses, TableItemComponents, TableItemExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('TableItemDesign', () => {
  it('should render root element, merge external attrs/classes/styles/listeners, and bind elementHtml ref', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<TableItemProps>({
          label: 'Total',
          description: 'USD',
          colspan: 2,
          rowspan: 1,
          index: 'total',
          selected: true
        })

        const design = new TableItemDesign<TableItemComponents, TableItemExpose, TableItemClasses, TableItemProps>(
          'd1.tableItem',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-tableItem': true, 'd1-tableItem--selected': true }
            }))
          } as unknown as ConstructorParameters<typeof TableItemDesign>[2]
        )

        const expose = design.expose() as TableItemExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
        elementHtmlRef = expose.elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h('table', [
        h('tbody', [
          h('tr', [
            h(TestComponent, {
              'class': 'extra-cell',
              'style': { paddingLeft: '8px' },
              'data-testid': 'table-item-root',
              'onClick': externalClick
            })
          ])
        ])
      ])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('td') as HTMLTableCellElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.classList.contains('d1-tableItem')).toBe(true)
    expect(rootElement.classList.contains('d1-tableItem--selected')).toBe(true)
    expect(rootElement.classList.contains('extra-cell')).toBe(true)
    expect(rootElement.style.paddingLeft).toBe('8px')
    expect(rootElement.dataset.testid).toBe('table-item-root')
    expect(rootElement.getAttribute('colspan')).toBe('2')
    expect(rootElement.getAttribute('rowspan')).toBe('1')
    expect(rootElement.getAttribute('data-index')).toBe('total')
    expect(rootElement.getAttribute('aria-selected')).toBe('true')
    expect(rootElement.getAttribute('aria-disabled')).toBeNull()
    expect(rootElement.querySelector('.d1-tableItem__label')?.textContent).toBe('Total')
    expect(rootElement.querySelector('.d1-tableItem__description')?.textContent).toBe('USD')
    expect(elementHtmlRef.value).toBe(rootElement)

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should expose public renderContext method and support ItemConstructor DI override', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomTableItem extends TableItem {
      override get tag(): string {
        return 'th'
      }
    }

    let renderedContextLength = -1

    const TestComponent = defineComponent({
      setup(_, { slots }) {
        const design = new TableItemDesign<TableItemComponents, TableItemExpose, TableItemClasses, TableItemProps>(
          'd1.tableItem',
          reactive({ label: 'Custom Header' }),
          { slots } as unknown as ConstructorParameters<typeof TableItemDesign>[2],
          CustomTableItem
        )

        const render = design.render()

        return () => {
          renderedContextLength = design.renderContext().length
          return render()
        }
      }
    })

    const app = createApp({
      render: () => h('table', [
        h('thead', [
          h('tr', [
            h(TestComponent, {}, {
              context: () => h('span', { class: 'custom-context' }, 'Ctx')
            })
          ])
        ])
      ])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('th') as HTMLTableCellElement
    expect(rootElement).not.toBeNull()
    expect(renderedContextLength).toBe(2)
    expect(rootElement.querySelector('.d1-tableItem__label')?.textContent).toBe('Custom Header')
    expect(rootElement.querySelector('.custom-context')?.textContent).toBe('Ctx')
  })

  it('should render empty td when no props or slots are supplied', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new TableItemDesign<TableItemComponents, TableItemExpose, TableItemClasses, TableItemProps>(
          'd1.tableItem',
          reactive({})
        )
        return design.render()
      }
    })

    const app = createApp({
      render: () => h('table', [h('tbody', [h('tr', [h(TestComponent)])])])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('td') as HTMLTableCellElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.children).toHaveLength(0)
  })
})
