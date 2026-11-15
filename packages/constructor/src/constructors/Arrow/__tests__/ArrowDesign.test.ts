// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  nextTick,
  reactive,
  type Ref
} from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Arrow } from '../Arrow'
import { ArrowDesign } from '../ArrowDesign'
import type { ArrowProps, ArrowPropsBasic } from '../props'
import type {
  ArrowClasses,
  ArrowComponents,
  ArrowExpose
} from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('ArrowDesign', () => {
  it('should provide all expected subclasses and expose update() and elementHtml', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let designClasses!: Partial<ArrowClasses>
    let exposed!: ArrowExpose & { elementHtml: Ref<HTMLDivElement | undefined> }

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ArrowProps>({ position: 'top' })
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-arrow': true
          }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({}))

        const design = new ArrowDesign<
          ArrowComponents,
          ArrowExpose,
          ArrowClasses,
          ArrowPropsBasic
        >(
          'd1.arrow',
          props,
          {
            classes: classesToken,
            styles: stylesToken
          }
        )

        exposed = design.expose() as ArrowExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
        designClasses = (design as unknown as { classes: Ref<Partial<ArrowClasses>> }).classes.value

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(typeof exposed.update).toBe('function')
    expect(exposed.elementHtml.value).toBeInstanceOf(HTMLDivElement)
    expect(designClasses.mask).toBe('d1-arrow__mask')
    expect(designClasses.arrow).toBe('d1-arrow__arrow')
    expect(designClasses.arrowLine).toBe('d1-arrow__arrowLine')
    expect(designClasses.arrowArea).toBe('d1-arrow__arrowArea')
    expect(designClasses.border).toBe('d1-arrow__border')
    expect(designClasses.borderHidden).toBe('d1-arrow__borderHidden')
  })

  it('should expose public renderArrow and renderBorder helpers and omit render before mount', () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let design!: ArrowDesign<ArrowComponents, ArrowExpose, ArrowClasses, ArrowProps>
    let preMountRender: ReturnType<ReturnType<ArrowDesign<ArrowComponents, ArrowExpose, ArrowClasses, ArrowProps>['render']>>

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ArrowProps>({ position: 'bottom' })
        design = new ArrowDesign<
          ArrowComponents,
          ArrowExpose,
          ArrowClasses,
          ArrowProps
        >('d1.arrow', props)

        const renderFn = design.render()
        preMountRender = renderFn()

        return renderFn
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(preMountRender).toBeUndefined()

    const arrowNodes = design.renderArrow()
    expect(arrowNodes).toHaveLength(1)
    expect(arrowNodes[0]?.type).toBe('svg')

    const borderNodes = design.renderBorder()
    expect(borderNodes).toHaveLength(1)
    expect(borderNodes[0]?.type).toBe('div')
  })

  it('should cancel pending animation frame on unmount without updating points', async () => {
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame')
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let design!: ArrowDesign<ArrowComponents, ArrowExpose, ArrowClasses, ArrowProps>

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ArrowProps>({ position: 'top' })
        design = new ArrowDesign<
          ArrowComponents,
          ArrowExpose,
          ArrowClasses,
          ArrowProps
        >('d1.arrow', props)

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)

    await nextTick()
    app.unmount()

    expect(cancelSpy).toHaveBeenCalled()
    expect((design as unknown as { points: Ref<string> }).points.value).toBe('')
  })

  it('should forward custom ItemConstructor via dependency injection', () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomArrow extends Arrow {}
    let design!: ArrowDesign<ArrowComponents, ArrowExpose, ArrowClasses, ArrowProps>

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ArrowProps>({ position: 'right' })
        design = new ArrowDesign<
          ArrowComponents,
          ArrowExpose,
          ArrowClasses,
          ArrowProps
        >('d1.arrow', props, undefined, CustomArrow)

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect((design as unknown as { item: Arrow }).item).toBeInstanceOf(CustomArrow)
  })
})
