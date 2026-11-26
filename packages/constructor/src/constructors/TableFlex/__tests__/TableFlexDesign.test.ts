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
import type { ConstrBind } from '@dxtmisha/functional'

import { TableDesign } from '../../Table'
import { TableFlex } from '../TableFlex'
import { TableFlexDesign } from '../TableFlexDesign'
import type { TableFlexProps } from '../props'
import type {
  TableFlexClasses,
  TableFlexComponents,
  TableFlexExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockFlexRecord = defineComponent({
  name: 'MockFlexRecord',
  props: {
    index: String,
    columns: Array,
    item: Object,
    isHeader: Boolean,
    isFoot: Boolean
  },
  setup(props) {
    return () => h(
      'div',
      {
        'role': 'row',
        'data-record-index': props.index,
        'data-is-header': String(Boolean(props.isHeader)),
        'data-is-foot': String(Boolean(props.isFoot))
      },
      JSON.stringify(props.item ?? {})
    )
  }
})

const MockScrollSticky = defineComponent({
  name: 'MockScrollSticky',
  setup(_, { attrs, slots }) {
    return () => h(
      'div',
      {
        ...attrs,
        'data-scroll-sticky': 'true'
      },
      slots.default?.()
    )
  }
})

describe('TableFlexDesign', () => {
  it('should extend TableDesign, render div[role="table"] without colgroup, merge external attrs, and bind elementHtml', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLElement | undefined>
    let designInstance!: TableFlexDesign<
      TableFlexComponents,
      TableFlexExpose,
      TableFlexClasses,
      TableFlexProps
    >
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<TableFlexProps>({
          caption: 'Flex Summary',
          columns: ['id', 'name'],
          columnsWidth: { id: 100, name: '200px' },
          header: { id: 'ID', name: 'Name' },
          list: [{ id: 1, name: 'Alice' }],
          foot: { id: 'Total', name: '1' },
          stickyScrollBottom: false
        })

        designInstance = new TableFlexDesign<
          TableFlexComponents,
          TableFlexExpose,
          TableFlexClasses,
          TableFlexProps
        >(
          'd1.tableFlex',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-tableFlex': true, 'd1-tableFlex--bleed': true }
            })),
            components: {
              tableRecord: MockFlexRecord
            }
          } as unknown as ConstructorParameters<typeof TableFlexDesign>[2]
        )

        const expose = designInstance.expose() as TableFlexExpose & { elementHtml: Ref<HTMLElement | undefined> }
        elementHtmlRef = expose.elementHtml

        return designInstance.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {
        'class': 'extra-flex-table',
        'style': { maxWidth: '640px' },
        'data-testid': 'table-flex-root',
        'onClick': externalClick
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designInstance).toBeInstanceOf(TableDesign)

    const rootWrapper = host.querySelector('[data-testid="table-flex-root"]') as HTMLDivElement
    expect(rootWrapper).not.toBeNull()
    expect(rootWrapper.tagName).toBe('DIV')
    expect(rootWrapper.classList.contains('d1-tableFlex')).toBe(true)
    expect(rootWrapper.classList.contains('d1-tableFlex--bleed')).toBe(true)
    expect(rootWrapper.classList.contains('extra-flex-table')).toBe(true)
    expect(rootWrapper.style.maxWidth).toBe('640px')

    const tableElement = rootWrapper.querySelector('.d1-tableFlex__table') as HTMLDivElement
    expect(tableElement).not.toBeNull()
    expect(tableElement.tagName).toBe('DIV')
    expect(tableElement.getAttribute('role')).toBe('table')
    expect(elementHtmlRef.value).toBe(tableElement)

    // No native table or colgroup tags
    expect(rootWrapper.querySelector('table')).toBeNull()
    expect(rootWrapper.querySelector('colgroup')).toBeNull()
    expect(rootWrapper.querySelector('col')).toBeNull()
    expect(designInstance.renderColgroup()).toEqual([])

    // Div-based sub-sections with expected BEM classes
    const caption = tableElement.querySelector('.d1-tableFlex__caption') as HTMLDivElement
    const header = tableElement.querySelector('.d1-tableFlex__header') as HTMLDivElement
    const items = tableElement.querySelector('.d1-tableFlex__items') as HTMLDivElement
    const foot = tableElement.querySelector('.d1-tableFlex__foot') as HTMLDivElement

    expect(caption?.tagName).toBe('DIV')
    expect(caption?.textContent).toBe('Flex Summary')
    expect(header?.tagName).toBe('DIV')
    expect(header?.querySelector('[data-is-header="true"]')).not.toBeNull()
    expect(items?.tagName).toBe('DIV')
    expect(items?.querySelectorAll('[role="row"]')).toHaveLength(1)
    expect(foot?.tagName).toBe('DIV')
    expect(foot?.querySelector('[data-is-foot="true"]')).not.toBeNull()

    rootWrapper.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should wrap table in scrollSticky when stickyScrollBottom=true and switch cleanly to div when toggled off', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<TableFlexProps>({
      stickyScrollBottom: true,
      columns: ['title'],
      list: [{ title: 'Row' }]
    })

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const design = new TableFlexDesign<
          TableFlexComponents,
          TableFlexExpose,
          TableFlexClasses,
          TableFlexProps
        >(
          'd1.tableFlex',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-tableFlex': true }
            })),
            components: {
              scrollSticky: MockScrollSticky,
              tableRecord: MockFlexRecord
            }
          } as unknown as ConstructorParameters<typeof TableFlexDesign>[2]
        )

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, { 'data-wrapper': 'flex' })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(host.querySelector('[data-scroll-sticky="true"][data-wrapper="flex"]')).not.toBeNull()
    expect(host.querySelector('[role="table"]')).not.toBeNull()

    props.stickyScrollBottom = false
    await nextTick()

    expect(host.querySelector('[data-scroll-sticky="true"]')).toBeNull()
    expect(host.querySelector('[data-wrapper="flex"].d1-tableFlex')).not.toBeNull()
  })

  it('should support custom slots (#caption, #body, #header, #items, #foot) and custom ItemConstructor DI', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomTableFlex extends TableFlex {
      override get binds(): ConstrBind {
        return {
          ...super.binds,
          'data-custom-flex': 'yes'
        }
      }
    }

    const TestComponent = defineComponent({
      setup(_, { slots }) {
        const design = new TableFlexDesign<
          TableFlexComponents,
          TableFlexExpose,
          TableFlexClasses,
          TableFlexProps
        >(
          'd1.tableFlex',
          reactive<TableFlexProps>({
            columns: ['alpha', 'beta'],
            stickyScrollBottom: false
          }),
          {
            slots
          } as unknown as ConstructorParameters<typeof TableFlexDesign>[2],
          CustomTableFlex
        )

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {}, {
        caption: () => h('span', { class: 'slot-caption' }, 'Slot Caption'),
        body: () => h('div', { class: 'slot-body' }, 'Body Banner'),
        header: ({ columns }: { columns: string[] }) => h('div', { class: 'slot-header' }, columns.join(',')),
        items: ({ columns }: { columns: string[] }) => h('div', { class: 'slot-items' }, `cols:${columns.length}`),
        foot: ({ columns }: { columns: string[] }) => h('div', { class: 'slot-foot' }, columns.join('|'))
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const tableElement = host.querySelector('[role="table"]') as HTMLDivElement
    expect(tableElement.getAttribute('data-custom-flex')).toBe('yes')
    expect(tableElement.querySelector('.d1-tableFlex__caption .slot-caption')?.textContent).toBe('Slot Caption')
    expect(tableElement.querySelector('.slot-body')?.textContent).toBe('Body Banner')
    expect(tableElement.querySelector('.d1-tableFlex__header .slot-header')?.textContent).toBe('alpha,beta')
    expect(tableElement.querySelector('.d1-tableFlex__items .slot-items')?.textContent).toBe('cols:2')
    expect(tableElement.querySelector('.d1-tableFlex__foot .slot-foot')?.textContent).toBe('alpha|beta')
  })

  it('should omit empty header, items, and foot containers when no data or slots are provided', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new TableFlexDesign<
          TableFlexComponents,
          TableFlexExpose,
          TableFlexClasses,
          TableFlexProps
        >(
          'd1.tableFlex',
          reactive<TableFlexProps>({ stickyScrollBottom: false })
        )

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const tableElement = host.querySelector('[role="table"]') as HTMLDivElement
    expect(tableElement).not.toBeNull()
    expect(tableElement.tagName).toBe('DIV')
    expect(tableElement.querySelector('.d1-tableFlex__caption')).toBeNull()
    expect(tableElement.querySelector('.d1-tableFlex__header')).toBeNull()
    expect(tableElement.querySelector('.d1-tableFlex__items')).toBeNull()
    expect(tableElement.querySelector('.d1-tableFlex__foot')).toBeNull()
  })
})
