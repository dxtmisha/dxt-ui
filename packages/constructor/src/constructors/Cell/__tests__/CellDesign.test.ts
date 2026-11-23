// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrStyles } from '@dxtmisha/functional'

import { CellDesign } from '../CellDesign'
import type { CellPropsBasic } from '../props'
import type {
  CellClasses,
  CellComponents,
  CellExpose
} from '../types'

/**
 * Inspectable CellDesign subclass exposing protected initClasses and initStyles hooks.
 *
 * Проверяемый подкласс CellDesign, открывающий защищённые методы initClasses и initStyles.
 */
class InspectableCellDesign extends CellDesign<
  CellComponents,
  CellExpose,
  CellClasses,
  CellPropsBasic
> {
  /**
   * Returns computed class map for verification.
   *
   * Возвращает карту классов для проверки.
   * @returns partial class map / частичная карта классов
   */
  getClassesConfig(): Partial<CellClasses> {
    return this.initClasses()
  }

  /**
   * Returns computed styles map for verification.
   *
   * Возвращает карту стилей для проверки.
   * @returns styles map / карта стилей
   */
  getStylesConfig(): ConstrStyles {
    return this.initStyles()
  }
}

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  document.body.innerHTML = ''
})

describe('CellDesign', () => {
  it('should initialize and provide expose methods within component lifecycle', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposed!: CellExpose

    const Component = defineComponent({
      setup() {
        const props: CellPropsBasic = reactive({ value: 'cell-1' })
        const design = new InspectableCellDesign('d1.cell', props)

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(exposed).toBeDefined()
    expect(exposed.getValue?.()).toBe('cell-1')
  })

  it('should generate all required subclasses in initClasses and empty styles in initStyles', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let classes!: Partial<CellClasses>
    let styles!: ConstrStyles

    const Component = defineComponent({
      setup() {
        const props: CellPropsBasic = reactive({})
        const design = new InspectableCellDesign('d1.cell', props)

        classes = design.getClassesConfig()
        styles = design.getStylesConfig()
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
    expect(styles).toEqual({})
  })

  it('should render context, trailing, and body sub-render methods cleanly', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: InspectableCellDesign

    const Component = defineComponent({
      setup() {
        const props: CellPropsBasic = reactive({
          label: 'Item Label',
          caption: 'Item Caption',
          description: 'Item Description'
        })
        designInstance = new InspectableCellDesign('d1.cell', props)

        return designInstance.render()
      }
    })

    const Root = defineComponent({
      setup() {
        return () => h(Component, null, {
          trailing: () => h('span', 'Trail')
        })
      }
    })

    const app = createApp(Root)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designInstance.renderContext().length).toBeGreaterThan(0)
    expect(container.textContent).toContain('Item Label')
    expect(container.textContent).toContain('Item Caption')
    expect(container.textContent).toContain('Item Description')
    expect(container.querySelector('.d1-cell__contextTrailing')?.textContent).toBe('Trail')
    expect(designInstance.renderBody()).toEqual([])
  })
})
