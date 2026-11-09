// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ButtonDesign } from '../ButtonDesign'
import type { ButtonPropsBasic } from '../props'
import type { ButtonClasses, ButtonComponents, ButtonExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('ButtonDesign', () => {
  it('should render a button element in DOM, bind ref to elementHtml, and expose event getters', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let elementHtmlRef!: Ref<HTMLElement | undefined>
    let exposedResult!: ButtonExpose

    const Component = defineComponent({
      setup() {
        const props: ButtonPropsBasic = reactive({
          label: 'Submit action',
          value: 'btn-value'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-button': true
          }
        }))

        const design = new ButtonDesign<
          ButtonComponents,
          ButtonExpose,
          ButtonClasses,
          ButtonPropsBasic
        >('d1.button', props, {
          classes: classesToken
        })

        exposedResult = design.expose()
        elementHtmlRef = (exposedResult as any).elementHtml

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = container.querySelector('.d1-button')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('button')
    expect(rootElement?.getAttribute('data-value')).toBe('btn-value')
    expect(rootElement?.getAttribute('type')).toBe('button')
    expect(elementHtmlRef.value).toBe(rootElement)

    expect(typeof exposedResult.getValue).toBe('function')
    expect(typeof exposedResult.getDetail).toBe('function')
    expect(exposedResult.getValue?.()).toBe('btn-value')
  })

  it('should provide design classes including subclasses', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<ButtonClasses>

    const Component = defineComponent({
      setup() {
        const props: ButtonPropsBasic = reactive({})

        const design = new ButtonDesign<
          ButtonComponents,
          ButtonExpose,
          ButtonClasses,
          ButtonPropsBasic
        >('d1.button', props)

        designClasses = (design as any).initClasses()

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designClasses.label).toBeDefined()
    expect(designClasses.icon).toBeDefined()
    expect(designClasses.trailing).toBeDefined()
    expect(designClasses.loading).toBeDefined()
  })

  it('should decompose rendering into renderProgress, renderLabel, renderIcon, and renderRipple methods', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designInstance!: ButtonDesign<ButtonComponents, ButtonExpose, ButtonClasses, ButtonPropsBasic>

    const Component = defineComponent({
      setup() {
        const props: ButtonPropsBasic = reactive({
          label: 'Hello'
        })

        designInstance = new ButtonDesign<
          ButtonComponents,
          ButtonExpose,
          ButtonClasses,
          ButtonPropsBasic
        >('d1.button', props)

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    expect(designInstance.renderProgress()).toEqual([])
    expect(designInstance.renderIcon()).toEqual([])
    expect(designInstance.renderRipple()).toEqual([])
    expect(designInstance.renderLabel().length).toBeGreaterThan(0)
  })
})
