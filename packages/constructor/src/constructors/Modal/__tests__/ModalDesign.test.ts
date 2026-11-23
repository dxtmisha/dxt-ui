// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'

import { Modal } from '../Modal'
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
  vi.restoreAllMocks()
})

describe('ModalDesign (Unit)', () => {
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
    expect(typeof exposed.getId).toBe('function')
    expect(typeof exposed.getOpen).toBe('function')
    expect(typeof exposed.getControl).toBe('function')
    expect(typeof exposed.setOpen).toBe('function')
    expect(typeof exposed.toOpen).toBe('function')
    expect(typeof exposed.toClose).toBe('function')
    expect(typeof exposed.toggle).toBe('function')
    expect(typeof exposed.getWindowElement).toBe('function')
  })

  it('should generate all required subclasses in initClasses and empty styles in initStyles', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let classes!: Partial<ModalClasses>
    let styles!: Record<string, unknown>

    const Component = defineComponent({
      setup() {
        const props: ModalPropsBasic = reactive({})
        const design = new ModalDesign<
          ModalComponents,
          ModalExpose,
          ModalClasses,
          ModalPropsBasic
        >('d1.modal', props)

        classes = (design as unknown as { initClasses: () => Partial<ModalClasses> }).initClasses()
        styles = (design as unknown as { initStyles: () => Record<string, unknown> }).initStyles()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(classes.main).toBeDefined()
    expect(classes.title).toBe('d1-modal__title')
    expect(classes.header).toBe('d1-modal__header')
    expect(classes.body).toBe('d1-modal__body')
    expect(classes.footer).toBe('d1-modal__footer')
    expect(styles).toEqual({})
  })

  it('should support overriding ItemConstructor in ModalDesign constructor', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    class CustomModal extends Modal {}
    let itemInstance: unknown

    const Component = defineComponent({
      setup() {
        const props: ModalPropsBasic = reactive({})
        const design = new ModalDesign<
          ModalComponents,
          ModalExpose,
          ModalClasses,
          ModalPropsBasic
        >('d1.modal', props, undefined, CustomModal)

        itemInstance = (design as unknown as { item: Modal }).item
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(itemInstance).toBeInstanceOf(CustomModal)
  })

  it('should render slots via sub-render methods inside render function', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const renderResults: Record<string, unknown> = {}

    const Component = defineComponent({
      setup() {
        const props: ModalPropsBasic = reactive({ barsBackHide: true })
        const design = new ModalDesign<
          ModalComponents,
          ModalExpose,
          ModalClasses,
          ModalPropsBasic
        >('d1.modal', props)

        return () => {
          const controlItem = { open: false } as unknown as Parameters<typeof design.renderTitle>[0]
          renderResults.control = design.renderControl(controlItem)
          renderResults.title = design.renderTitle(controlItem)
          renderResults.default = design.renderDefault(controlItem)
          renderResults.footer = design.renderFooter(controlItem)
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
    expect((renderResults.title as unknown[]).length).toBe(1)
    expect((renderResults.default as unknown[]).length).toBe(2)
    expect((renderResults.footer as unknown[]).length).toBe(1)
  })
})
