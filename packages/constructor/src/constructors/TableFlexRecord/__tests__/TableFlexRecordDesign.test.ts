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

import { TableRecordDesign } from '../../TableRecord'
import { TableFlexRecord } from '../TableFlexRecord'
import { TableFlexRecordDesign } from '../TableFlexRecordDesign'
import type { TableFlexRecordProps } from '../props'
import type {
  TableFlexRecordClasses,
  TableFlexRecordComponents,
  TableFlexRecordExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockFlexCell = defineComponent({
  name: 'MockFlexCell',
  props: {
    label: [String, Number],
    index: [String, Number]
  },
  setup(props) {
    return () => h('div', { 'role': 'cell', 'data-cell': String(props.index ?? '') }, String(props.label ?? ''))
  }
})

describe('TableFlexRecordDesign', () => {
  it('should extend TableRecordDesign, render div[role="row"], merge attrs via mergeProps, and bind elementHtml ref', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    let designInstance!: TableFlexRecordDesign<
      TableFlexRecordComponents,
      TableFlexRecordExpose,
      TableFlexRecordClasses,
      TableFlexRecordProps
    >
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const columns = ['id', 'name'] as const
        const props = reactive<TableFlexRecordProps>({
          index: 'flex-1',
          columns,
          item: { id: 1, name: 'Alice' },
          selected: true,
          lazy: true,
          defaultHeight: 52
        })

        designInstance = new TableFlexRecordDesign<
          TableFlexRecordComponents,
          TableFlexRecordExpose,
          TableFlexRecordClasses,
          TableFlexRecordProps
        >(
          'd1.tableFlexRecord',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-tableFlexRecord': true, 'd1-tableFlexRecord--selected': true }
            })),
            components: {
              tableItem: MockFlexCell
            }
          } as unknown as ConstructorParameters<typeof TableFlexRecordDesign>[2]
        )

        const expose = designInstance.expose() as TableFlexRecordExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
        elementHtmlRef = expose.elementHtml

        return designInstance.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {
        'class': 'extra-flex-row',
        'style': { opacity: '0.85' },
        'data-testid': 'flex-record-root',
        'onClick': externalClick
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designInstance).toBeInstanceOf(TableRecordDesign)

    const rootElement = host.querySelector('[data-testid="flex-record-root"]') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName).toBe('DIV')
    expect(rootElement.getAttribute('role')).toBe('row')
    expect(rootElement.getAttribute('data-key')).toBe('flex-1')
    expect(rootElement.getAttribute('aria-selected')).toBe('true')
    expect(rootElement.getAttribute('aria-disabled')).toBeNull()
    expect(rootElement.classList.contains('d1-tableFlexRecord')).toBe(true)
    expect(rootElement.classList.contains('d1-tableFlexRecord--selected')).toBe(true)
    expect(rootElement.classList.contains('d1-tableFlexRecord--lazy')).toBe(true)
    expect(rootElement.classList.contains('extra-flex-row')).toBe(true)
    expect(rootElement.style.opacity).toBe('0.85')
    expect(rootElement.style.getPropertyValue('--d1-tableFlexRecord-sys-minHeight')).toBe('52px')
    expect(rootElement.querySelectorAll('[role="cell"]')).toHaveLength(2)
    expect(elementHtmlRef.value).toBe(rootElement)

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should omit child cells when ItemConstructor.isRender() returns false and support public renderChildren()', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const state = reactive({ visible: false })
    let renderedChildrenCount = -1

    class CustomTableFlexRecord extends TableFlexRecord {
      override isRender(): boolean {
        return state.visible
      }
    }

    const TestComponent = defineComponent({
      setup() {
        const design = new TableFlexRecordDesign<
          TableFlexRecordComponents,
          TableFlexRecordExpose,
          TableFlexRecordClasses,
          TableFlexRecordProps
        >(
          'd1.tableFlexRecord',
          reactive({
            lazy: false,
            columns: ['a', 'b'],
            item: { a: 'A', b: 'B' }
          }),
          {
            components: {
              tableItem: MockFlexCell
            }
          } as unknown as ConstructorParameters<typeof TableFlexRecordDesign>[2],
          CustomTableFlexRecord
        )

        const render = design.render()

        return () => {
          renderedChildrenCount = design.renderChildren().length
          return render()
        }
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('[role="row"]') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.children).toHaveLength(0)
    expect(renderedChildrenCount).toBe(2)

    state.visible = true
    await nextTick()
    expect(rootElement.querySelectorAll('[role="cell"]')).toHaveLength(2)
  })

  it('should render empty div[role="row"] when columns are absent', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new TableFlexRecordDesign<
          TableFlexRecordComponents,
          TableFlexRecordExpose,
          TableFlexRecordClasses,
          TableFlexRecordProps
        >(
          'd1.tableFlexRecord',
          reactive({ lazy: false })
        )
        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('[role="row"]') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName).toBe('DIV')
    expect(rootElement.children).toHaveLength(0)
  })
})
