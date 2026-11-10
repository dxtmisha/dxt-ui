// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'

import { ModalDesign } from '../ModalDesign'
import type { ModalPropsBasic } from '../props'
import type {
  ModalClasses,
  ModalComponents,
  ModalExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('ModalDesign', () => {
  it('should initialize and provide expose methods within component lifecycle', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposed!: ModalExpose

    const Component = defineComponent({
      setup() {
        const props: ModalPropsBasic = reactive({})
        const design = new ModalDesign<
          ModalComponents,
          ModalExpose,
          ModalClasses,
          ModalPropsBasic
        >('d1.modal', props)

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(exposed).toBeDefined()
    expect(typeof exposed.setOpen).toBe('function')
    expect(typeof exposed.toOpen).toBe('function')
    expect(typeof exposed.toClose).toBe('function')
    expect(typeof exposed.toggle).toBe('function')
  })

  it('should generate all required subclasses in initClasses', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let classes!: Partial<ModalClasses>

    const Component = defineComponent({
      setup() {
        const props: ModalPropsBasic = reactive({})
        const design = new ModalDesign<
          ModalComponents,
          ModalExpose,
          ModalClasses,
          ModalPropsBasic
        >('d1.modal', props)

        classes = (design as any).initClasses()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(classes.main).toBeDefined()
    expect(classes.title).toContain('title')
    expect(classes.header).toContain('header')
    expect(classes.body).toContain('body')
    expect(classes.footer).toContain('footer')
  })

  it('should return empty styles object by default', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let styles!: Record<string, any>

    const Component = defineComponent({
      setup() {
        const props: ModalPropsBasic = reactive({})
        const design = new ModalDesign<
          ModalComponents,
          ModalExpose,
          ModalClasses,
          ModalPropsBasic
        >('d1.modal', props)

        styles = (design as any).initStyles()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(styles).toEqual({})
  })

  it('should render slots via sub-render methods inside render function', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const renderResults: Record<string, any> = {}

    const Component = defineComponent({
      setup() {
        const props: ModalPropsBasic = reactive({})
        const design = new ModalDesign<
          ModalComponents,
          ModalExpose,
          ModalClasses,
          ModalPropsBasic
        >('d1.modal', props)

        return () => {
          renderResults.control = design.renderControl({ open: false } as any)
          renderResults.title = design.renderTitle({ open: false } as any)
          renderResults.default = design.renderDefault({ open: false } as any)
          renderResults.footer = design.renderFooter({ open: false } as any)
          return h('div', 'mounted')
        }
      }
    })

    const Root = defineComponent({
      render() {
        return h(Component, null, {
          control: () => h('button', 'Open'),
          title: () => h('span', 'Title Slot'),
          header: () => h('div', 'Header Slot'),
          default: () => h('p', 'Body Slot'),
          footer: () => h('div', 'Footer Slot')
        })
      }
    })

    const app = createApp(Root)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(renderResults.control).toBeDefined()
    expect(renderResults.title.length).toBeGreaterThanOrEqual(1)
    expect(renderResults.default.length).toBe(2)
    expect(renderResults.footer.length).toBeGreaterThanOrEqual(1)
  })
})
