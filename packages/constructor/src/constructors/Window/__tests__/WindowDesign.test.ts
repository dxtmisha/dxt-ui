// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'

import { WindowDesign } from '../WindowDesign'
import type { WindowPropsBasic } from '../props'
import type {
  WindowClasses,
  WindowComponents,
  WindowExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('WindowDesign', () => {
  it('should initialize and provide expose methods within component lifecycle', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposed!: WindowExpose

    const Component = defineComponent({
      setup() {
        const props: WindowPropsBasic = reactive({ open: true })
        const design = new WindowDesign<
          WindowComponents,
          WindowExpose,
          WindowClasses,
          WindowPropsBasic
        >('d1.window', props)

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(typeof exposed.getId).toBe('function')
    expect(typeof exposed.getOpen).toBe('function')
    expect(typeof exposed.getControl).toBe('function')
    expect(typeof exposed.setOpen).toBe('function')
    expect(typeof exposed.toOpen).toBe('function')
    expect(typeof exposed.toClose).toBe('function')
    expect(typeof exposed.toggle).toBe('function')

    expect(typeof exposed.getId?.()).toBe('string')
    expect(exposed.getControl?.()).toBeDefined()
  })

  it('should generate all required classes and subclasses', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let classes!: Partial<WindowClasses>

    const Component = defineComponent({
      setup() {
        const props: WindowPropsBasic = reactive({})
        const design = new WindowDesign<
          WindowComponents,
          WindowExpose,
          WindowClasses,
          WindowPropsBasic
        >('d1.window', props)

        classes = (design as any).initClasses()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(classes.main).toBeDefined()
    expect(classes.body).toContain('body')
    expect(classes.bodyGroup).toContain('body__group')
    expect(classes.bodyContext).toContain('body__context')
    expect(classes.control).toContain('control')
    expect(classes.image).toContain('image')
    expect(classes.close).toContain('close')
    expect(classes.teleport).toContain('teleport')
  })

  it('should return empty styles object by default', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let styles!: Record<string, any>

    const Component = defineComponent({
      setup() {
        const props: WindowPropsBasic = reactive({})
        const design = new WindowDesign<
          WindowComponents,
          WindowExpose,
          WindowClasses,
          WindowPropsBasic
        >('d1.window', props)

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

  it('should render individual sub-render methods directly', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: WindowDesign<WindowComponents, WindowExpose, WindowClasses, WindowPropsBasic>

    const Component = defineComponent({
      setup() {
        const props: WindowPropsBasic = reactive({
          closeButton: true,
          iconClose: 'close-icon'
        })
        designInstance = new WindowDesign<
          WindowComponents,
          WindowExpose,
          WindowClasses,
          WindowPropsBasic
        >('d1.window', props, {
          components: {
            button: (p: any) => ({ type: 'button', props: p }) as any
          } as any
        })

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const mainNode = designInstance.renderMain()
    expect(mainNode).toBeDefined()
    expect(mainNode.type).toBe('div')

    const bodyNode = designInstance.renderBody()
    expect(bodyNode).toBeDefined()
    expect(bodyNode.type).toBe('div')

    const groupNodes = designInstance.renderBodyGroup()
    expect(Array.isArray(groupNodes)).toBe(true)
    expect(groupNodes.length).toBeGreaterThan(0)

    const closeBtn = designInstance.renderBodyClose()
    expect(Array.isArray(closeBtn)).toBe(true)
    expect(closeBtn.length).toBeGreaterThan(0)
  })

  it('should render image node in body when image prop is set and image component is registered', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: WindowDesign<WindowComponents, WindowExpose, WindowClasses, WindowPropsBasic>
    const mockImage = (p: any) => h('img', { ...p, 'data-mock': 'image' })

    const Component = defineComponent({
      setup() {
        const props: WindowPropsBasic = reactive({
          image: 'test.jpg'
        })
        designInstance = new WindowDesign<
          WindowComponents,
          WindowExpose,
          WindowClasses,
          WindowPropsBasic
        >('d1.window', props, {
          components: {
            image: mockImage
          } as any
        })

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const bodyNode = designInstance.renderBody()
    expect(bodyNode).toBeDefined()
    expect(Array.isArray(bodyNode.children)).toBe(true)
    const imageVNode = (bodyNode.children as any[]).find(child => child?.type === mockImage)
    expect(imageVNode).toBeDefined()
  })

  it('should render body context as native div when scrollbar component is not provided', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: WindowDesign<WindowComponents, WindowExpose, WindowClasses, WindowPropsBasic>

    const Component = defineComponent({
      setup() {
        const props: WindowPropsBasic = reactive({ divider: true })
        designInstance = new WindowDesign<
          WindowComponents,
          WindowExpose,
          WindowClasses,
          WindowPropsBasic
        >('d1.window', props)

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const contextNodes = designInstance.renderBodyContext()
    expect(contextNodes).toHaveLength(1)
    expect(contextNodes[0]?.type).toBe('div')
    expect(contextNodes[0]?.props).toEqual(expect.objectContaining({
      'key': 'bodyContext',
      'divider': true,
      'data-window-body': '1'
    }))
  })

  it('should delegate body context rendering to scrollbar component when registered', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: WindowDesign<WindowComponents, WindowExpose, WindowClasses, WindowPropsBasic>
    const mockScrollbar = (p: any, { slots }: any) => h('div', { ...p, 'data-mock': 'scrollbar' }, slots?.default?.())

    const Component = defineComponent({
      setup() {
        const props: WindowPropsBasic = reactive({ divider: false })
        designInstance = new WindowDesign<
          WindowComponents,
          WindowExpose,
          WindowClasses,
          WindowPropsBasic
        >('d1.window', props, {
          components: {
            scrollbar: mockScrollbar
          } as any
        })

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const contextNodes = designInstance.renderBodyContext()
    expect(contextNodes).toHaveLength(1)
    expect(contextNodes[0]?.type).toBe(mockScrollbar)
  })
})
