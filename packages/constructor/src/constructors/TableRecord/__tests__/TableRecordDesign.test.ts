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

import { TableRecord } from '../TableRecord'
import { TableRecordDesign } from '../TableRecordDesign'
import type { TableRecordProps } from '../props'
import type { TableRecordClasses, TableRecordComponents, TableRecordExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockCell = defineComponent({
  name: 'MockCell',
  props: {
    label: [String, Number],
    index: [String, Number]
  },
  setup(props) {
    return () => h('td', { 'data-cell': String(props.index ?? '') }, String(props.label ?? ''))
  }
})

describe('TableRecordDesign', () => {
  it('should render tr root, merge external attrs/classes/styles/listeners via mergeProps, and bind elementHtml ref', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const columns = ['id', 'name'] as const
        const props = reactive<TableRecordProps>({
          index: 'row-1',
          columns,
          item: { id: 1, name: 'Alice' },
          selected: true
        })

        const design = new TableRecordDesign<
          TableRecordComponents,
          TableRecordExpose,
          TableRecordClasses,
          TableRecordProps
        >(
          'd1.tableRecord',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-tableRecord': true, 'd1-tableRecord--selected': true }
            })),
            components: {
              tableItem: MockCell
            }
          } as unknown as ConstructorParameters<typeof TableRecordDesign>[2]
        )

        const expose = design.expose() as TableRecordExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
        elementHtmlRef = expose.elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h('table', [
        h('tbody', [
          h(TestComponent, {
            'class': 'extra-row',
            'style': { opacity: '0.9' },
            'data-testid': 'table-record-root',
            'onClick': externalClick
          })
        ])
      ])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('tr') as HTMLTableRowElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.classList.contains('d1-tableRecord')).toBe(true)
    expect(rootElement.classList.contains('d1-tableRecord--selected')).toBe(true)
    expect(rootElement.classList.contains('extra-row')).toBe(true)
    expect(rootElement.style.opacity).toBe('0.9')
    expect(rootElement.dataset.testid).toBe('table-record-root')
    expect(rootElement.getAttribute('data-key')).toBe('row-1')
    expect(rootElement.getAttribute('aria-selected')).toBe('true')
    expect(rootElement.getAttribute('aria-disabled')).toBeNull()
    expect(rootElement.querySelectorAll('td')).toHaveLength(2)
    expect(elementHtmlRef.value).toBe(rootElement)

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should expose public renderChildren method and support ItemConstructor DI override', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomTableRecord extends TableRecord {
      override get key(): string | undefined {
        return 'custom-key'
      }
    }

    let renderedChildrenCount = -1

    const TestComponent = defineComponent({
      setup() {
        const design = new TableRecordDesign<
          TableRecordComponents,
          TableRecordExpose,
          TableRecordClasses,
          TableRecordProps
        >(
          'd1.tableRecord',
          reactive({
            columns: ['a', 'b'],
            item: { a: 'A', b: 'B' }
          }),
          {
            components: {
              tableItem: MockCell
            }
          } as unknown as ConstructorParameters<typeof TableRecordDesign>[2],
          CustomTableRecord
        )

        const render = design.render()

        return () => {
          renderedChildrenCount = design.renderChildren().length
          return render()
        }
      }
    })

    const app = createApp({
      render: () => h('table', [h('tbody', [h(TestComponent)])])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('tr') as HTMLTableRowElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.getAttribute('data-key')).toBe('custom-key')
    expect(renderedChildrenCount).toBe(2)
  })

  it('should render empty tr when columns are absent or empty', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new TableRecordDesign<
          TableRecordComponents,
          TableRecordExpose,
          TableRecordClasses,
          TableRecordProps
        >(
          'd1.tableRecord',
          reactive({})
        )
        return design.render()
      }
    })

    const app = createApp({
      render: () => h('table', [h('tbody', [h(TestComponent)])])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('tr') as HTMLTableRowElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.children).toHaveLength(0)
  })
})
