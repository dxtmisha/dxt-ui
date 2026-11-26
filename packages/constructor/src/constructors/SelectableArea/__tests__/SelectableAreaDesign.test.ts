// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'

import { SelectableArea } from '../SelectableArea'
import { SelectableAreaDesign } from '../SelectableAreaDesign'
import type { SelectableAreaControl } from '../basicTypes'
import type { SelectableAreaPropsBasic } from '../props'
import type {
  SelectableAreaClasses,
  SelectableAreaComponents,
  SelectableAreaExpose
} from '../types'

describe('SelectableAreaDesign', () => {
  const mountedApps: Array<{ unmount: () => void, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()!
      entry.unmount()
      entry.container.remove()
    }

    vi.restoreAllMocks()
  })

  it('should expose public renderSquare with square class and aria-hidden="true"', () => {
    const props = reactive<SelectableAreaPropsBasic>({})
    const classes = ref<SelectableAreaClasses>({
      main: { 'd1-selectableArea': true },
      item: 'd1-selectableArea__item',
      square: 'd1-selectableArea__square'
    })

    let designInstance: SelectableAreaDesign<
      SelectableAreaComponents,
      SelectableAreaExpose,
      SelectableAreaClasses,
      SelectableAreaPropsBasic
    > | undefined

    const TestComponent = defineComponent({
      setup() {
        designInstance = new SelectableAreaDesign(
          'd1.selectableArea',
          props,
          { classes: classes as never }
        )

        return designInstance.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(TestComponent)
    app.mount(container)
    mountedApps.push({ unmount: () => app.unmount(), container })

    const squareVNode = designInstance!.renderSquare()
    expect(squareVNode.type).toBe('div')
    expect(squareVNode.props?.class).toBe('d1-selectableArea__square')
    expect(squareVNode.props?.['aria-hidden']).toBe('true')
  })

  it('should support custom ItemConstructor injection and expose reset and setSelected', () => {
    const resetSpy = vi.fn()
    const setSelectedSpy = vi.fn()

    class CustomSelectableArea extends SelectableArea {
      override readonly reset = resetSpy
      override readonly setSelected = setSelectedSpy
    }

    const props = reactive<SelectableAreaPropsBasic>({ tag: 'article' })
    let exposed: SelectableAreaExpose | undefined

    const TestComponent = defineComponent({
      setup(_props, { expose }) {
        const design = new SelectableAreaDesign<
          SelectableAreaComponents,
          SelectableAreaExpose,
          SelectableAreaClasses,
          SelectableAreaPropsBasic
        >(
          'd1.selectableArea',
          props,
          undefined,
          CustomSelectableArea
        )

        exposed = design.expose()
        expose(exposed)
        return design.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(TestComponent)
    app.mount(container)
    mountedApps.push({ unmount: () => app.unmount(), container })

    expect(container.firstElementChild?.tagName).toBe('ARTICLE')

    exposed!.setSelected(['x'])
    expect(setSelectedSpy).toHaveBeenCalledWith(['x'])

    exposed!.reset()
    expect(resetSpy).toHaveBeenCalledTimes(1)
  })

  it('should merge external attrs, classes, styles, and mousedown handlers via mergeProps without overwriting', () => {
    const externalMousedown = vi.fn()
    const props = reactive<SelectableAreaPropsBasic>({})
    const classes = ref<SelectableAreaClasses>({
      main: { 'd1-selectableArea': true },
      item: 'd1-selectableArea__item',
      square: 'd1-selectableArea__square'
    })

    const InnerComponent = defineComponent({
      setup() {
        const design = new SelectableAreaDesign<
          SelectableAreaComponents,
          SelectableAreaExpose,
          SelectableAreaClasses,
          SelectableAreaPropsBasic
        >(
          'd1.selectableArea',
          props,
          { classes: classes as never }
        )

        return design.render()
      }
    })

    const RootComponent = defineComponent({
      setup() {
        return () => h(
          InnerComponent,
          {
            'data-testid': 'design-root',
            'class': 'custom-user-class',
            'style': { padding: '8px' },
            'onMousedown': externalMousedown
          },
          {
            default: (control: SelectableAreaControl) => h(
              'div',
              { 'class': [control.className, control.classClick], 'data-value': 'one' },
              'One'
            )
          }
        )
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(RootComponent)
    app.mount(container)
    mountedApps.push({ unmount: () => app.unmount(), container })

    const rootElement = container.querySelector<HTMLElement>('[data-testid="design-root"]')!
    expect(rootElement.classList.contains('d1-selectableArea')).toBe(true)
    expect(rootElement.classList.contains('custom-user-class')).toBe(true)
    expect(rootElement.style.padding).toBe('8px')

    rootElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }))
    expect(externalMousedown).toHaveBeenCalledTimes(1)
  })
})
