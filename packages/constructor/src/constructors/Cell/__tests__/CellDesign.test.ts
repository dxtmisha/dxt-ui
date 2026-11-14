// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, nextTick, reactive } from 'vue'

import { CellDesign } from '../CellDesign'
import type { CellPropsBasic } from '../props'
import type {
  CellClasses,
  CellComponents,
  CellExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('CellDesign', () => {
  it('should initialize and provide expose methods within component lifecycle', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposed!: CellExpose

    const Component = defineComponent({
      setup() {
        const props: CellPropsBasic = reactive({})
        const design = new CellDesign<
          CellComponents,
          CellExpose,
          CellClasses,
          CellPropsBasic
        >('d1.cell', props)

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(exposed).toBeDefined()
  })

  it('should generate all required subclasses in initClasses', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let classes!: Partial<CellClasses>

    const Component = defineComponent({
      setup() {
        const props: CellPropsBasic = reactive({})
        const design = new CellDesign<
          CellComponents,
          CellExpose,
          CellClasses,
          CellPropsBasic
        >('d1.cell', props)

        classes = (design as any).initClasses()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(classes.main).toBeDefined()
    expect(classes.context).toContain('context')
    expect(classes.contextTrailing).toContain('contextTrailing')
    expect(classes.label).toContain('label')
    expect(classes.description).toContain('description')
    expect(classes.caption).toContain('caption')
    expect(classes.icon).toContain('icon')
    expect(classes.trailing).toContain('trailing')
    expect(classes.body).toContain('body')
    expect(classes.loading).toContain('loading')
  })

  it('should return empty styles object by default', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let styles!: Record<string, any>

    const Component = defineComponent({
      setup() {
        const props: CellPropsBasic = reactive({})
        const design = new CellDesign<
          CellComponents,
          CellExpose,
          CellClasses,
          CellPropsBasic
        >('d1.cell', props)

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

    let designInstance!: CellDesign<CellComponents, CellExpose, CellClasses, CellPropsBasic>

    const Component = defineComponent({
      setup() {
        const props: CellPropsBasic = reactive({
          label: 'Item Label',
          caption: 'Item Caption',
          description: 'Item Description'
        })
        designInstance = new CellDesign<
          CellComponents,
          CellExpose,
          CellClasses,
          CellPropsBasic
        >('d1.cell', props)

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const contextNodes = designInstance.renderContext()
    expect(Array.isArray(contextNodes)).toBe(true)
    expect(contextNodes.length).toBeGreaterThan(0)
    expect(container.textContent).toContain('Item Label')
    expect(container.textContent).toContain('Item Caption')
    expect(container.textContent).toContain('Item Description')

    // Optional slot containers with omitted slots return empty arrays
    expect(designInstance.renderTrailing()).toEqual([])
    expect(designInstance.renderBody()).toEqual([])
  })
})
