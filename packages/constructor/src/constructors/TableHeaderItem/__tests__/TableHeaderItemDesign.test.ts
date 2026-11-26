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

import { TableHeaderItem } from '../TableHeaderItem'
import { TableHeaderItemDesign } from '../TableHeaderItemDesign'
import type { TableHeaderItemProps } from '../props'
import type {
  TableHeaderItemClasses,
  TableHeaderItemComponents,
  TableHeaderItemExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('TableHeaderItemDesign', () => {
  it('should render root th, merge external attrs/classes/styles/listeners, and bind elementHtml ref', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<TableHeaderItemProps>({
          label: 'Revenue',
          description: 'USD',
          scope: 'col',
          colspan: 2,
          index: 'revenue',
          sortColumn: 'revenue',
          sortDir: 'asc',
          selected: true
        })

        const design = new TableHeaderItemDesign<
          TableHeaderItemComponents,
          TableHeaderItemExpose,
          TableHeaderItemClasses,
          TableHeaderItemProps
        >(
          'd1.tableHeaderItem',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-tableHeaderItem': true, 'd1-tableHeaderItem--selected': true }
            }))
          } as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[2]
        )

        const expose = design.expose() as TableHeaderItemExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
        elementHtmlRef = expose.elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h('table', [
        h('thead', [
          h('tr', [
            h(TestComponent, {
              'class': 'extra-header',
              'style': { paddingLeft: '12px' },
              'data-testid': 'header-root',
              'onClick': externalClick
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
    expect(rootElement.classList.contains('d1-tableHeaderItem')).toBe(true)
    expect(rootElement.classList.contains('d1-tableHeaderItem--selected')).toBe(true)
    expect(rootElement.classList.contains('extra-header')).toBe(true)
    expect(rootElement.style.paddingLeft).toBe('12px')
    expect(rootElement.dataset.testid).toBe('header-root')
    expect(rootElement.getAttribute('scope')).toBe('col')
    expect(rootElement.getAttribute('colspan')).toBe('2')
    expect(rootElement.getAttribute('data-index')).toBe('revenue')
    expect(rootElement.getAttribute('aria-selected')).toBe('true')
    expect(rootElement.getAttribute('aria-sort')).toBe('ascending')
    expect(rootElement.querySelector('.d1-tableHeaderItem__body .d1-tableHeaderItem__label')?.textContent).toBe('Revenue')
    expect(rootElement.querySelector('.d1-tableHeaderItem__description')?.textContent).toBe('USD')
    expect(elementHtmlRef.value).toBe(rootElement)

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should expose public renderBody and renderTooltipControl methods and support ItemConstructor DI override', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomTableHeaderItem extends TableHeaderItem {
      override get tag(): string {
        return 'div'
      }
    }

    const MockIcon = defineComponent({
      props: { icon: [String, Object] },
      setup(props, { attrs }) {
        return () => h('span', { ...attrs, 'data-icon': String(props.icon ?? '') })
      }
    })

    let capturedDesign!: TableHeaderItemDesign<
      TableHeaderItemComponents,
      TableHeaderItemExpose,
      TableHeaderItemClasses,
      TableHeaderItemProps
    >
    const props = reactive<TableHeaderItemProps>({
      iconTooltip: 'help-outline'
    })

    const TestComponent = defineComponent({
      setup() {
        capturedDesign = new TableHeaderItemDesign(
          'd1.tableHeaderItem',
          props,
          {
            components: { icon: MockIcon }
          } as unknown as ConstructorParameters<typeof TableHeaderItemDesign>[2],
          CustomTableHeaderItem
        )

        return capturedDesign.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('div') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(capturedDesign.renderBody()).toEqual([])

    const controlClick = vi.fn()
    const controlVNode = capturedDesign.renderTooltipControl({
      open: ref(false),
      class: 'tooltip-ctrl',
      onClick: controlClick,
      onMouseover: () => {},
      onMouseout: () => {},
      binds: {
        class: 'tooltip-ctrl',
        onClick: controlClick,
        onMouseover: () => {},
        onMouseout: () => {}
      }
    })

    expect(controlVNode).toBeDefined()
    expect(controlVNode?.props).toMatchObject({
      'icon': 'help-outline',
      'data-event-type': 'tooltip'
    })
    expect(String(controlVNode?.props?.class)).toContain('d1-tableHeaderItem__tooltip')
    expect(String(controlVNode?.props?.class)).toContain('tooltip-ctrl')

    props.label = 'Dynamic Header'
    await nextTick()
    expect(capturedDesign.renderBody()).toHaveLength(1)
    expect(rootElement.querySelector('.d1-tableHeaderItem__body')?.textContent).toBe('Dynamic Header')
  })

  it('should return undefined from renderTooltipControl when icon component is not registered', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let capturedDesign!: TableHeaderItemDesign<
      TableHeaderItemComponents,
      TableHeaderItemExpose,
      TableHeaderItemClasses,
      TableHeaderItemProps
    >

    const TestComponent = defineComponent({
      setup() {
        capturedDesign = new TableHeaderItemDesign(
          'd1.tableHeaderItem',
          reactive({})
        )

        return capturedDesign.render()
      }
    })

    const app = createApp({
      render: () => h('table', [h('thead', [h('tr', [h(TestComponent)])])])
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const result = capturedDesign.renderTooltipControl({
      open: ref(false),
      class: 'ctrl',
      onClick: () => {},
      onMouseover: () => {},
      onMouseout: () => {},
      binds: {
        class: 'ctrl',
        onClick: () => {},
        onMouseover: () => {},
        onMouseout: () => {}
      }
    })

    expect(result).toBeUndefined()
  })
})
