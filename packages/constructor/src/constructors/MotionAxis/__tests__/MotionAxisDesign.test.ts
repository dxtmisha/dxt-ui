// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { MotionAxisDesign } from '../MotionAxisDesign'
import type { MotionAxisPropsBasic } from '../props'
import type { MotionAxisClasses, MotionAxisComponents, MotionAxisExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('MotionAxisDesign', () => {
  it('should render root container, bind ref to elementHtml, and expose navigation methods', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    let exposedResult!: MotionAxisExpose

    const Host = defineComponent({
      setup() {
        const props: MotionAxisPropsBasic = reactive({
          selected: 'slide-1'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-motion-axis': true
          }
        }))

        const design = new MotionAxisDesign<
          MotionAxisComponents,
          MotionAxisExpose,
          MotionAxisClasses,
          MotionAxisPropsBasic
        >('d1.motion-axis', props, {
          classes: classesToken
        })

        exposedResult = design.expose()
        elementHtmlRef = (exposedResult as unknown as { elementHtml: Ref<HTMLDivElement | undefined> }).elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Host, null, {
          'slide-1': () => h('span', 'First slide'),
          'slide-2': () => h('span', 'Second slide')
        })
      }
    })
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const rootElement = container.querySelector('.d1-motion-axis')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('div')
    expect(elementHtmlRef.value).toBe(rootElement)

    // Only selected slide is rendered initially
    const slides = rootElement?.querySelectorAll('[data-key]')
    expect(slides?.length).toBe(1)
    expect(slides?.[0]?.getAttribute('data-key')).toBe('slide-1')
    expect(slides?.[0]?.classList.contains('d1-motionAxis__slide--active')).toBe(true)
    expect(slides?.[0]?.textContent).toBe('First slide')

    // All 9 expose methods are present
    expect(typeof exposedResult.next).toBe('function')
    expect(typeof exposedResult.back).toBe('function')
    expect(typeof exposedResult.to).toBe('function')
    expect(typeof exposedResult.top).toBe('function')
    expect(typeof exposedResult.right).toBe('function')
    expect(typeof exposedResult.bottom).toBe('function')
    expect(typeof exposedResult.left).toBe('function')
    expect(typeof exposedResult.down).toBe('function')
    expect(typeof exposedResult.up).toBe('function')
  })

  it('should provide design classes including slide subclass and merge external class/style', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<MotionAxisClasses>

    const Host = defineComponent({
      inheritAttrs: false,
      setup() {
        const props: MotionAxisPropsBasic = reactive({})
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-motion-axis': true
          }
        }))

        const design = new MotionAxisDesign<
          MotionAxisComponents,
          MotionAxisExpose,
          MotionAxisClasses,
          MotionAxisPropsBasic
        >('d1.motion-axis', props, {
          classes: classesToken
        })

        designClasses = (design as unknown as { initClasses: () => Partial<MotionAxisClasses> }).initClasses()
        return design.render()
      }
    })

    const app = createApp(Host, {
      'class': 'custom-extra-class',
      'style': { opacity: '0.9' },
      'data-testid': 'axis-root'
    })
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const rootElement = container.querySelector('[data-testid="axis-root"]') as HTMLElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.classList.contains('d1-motion-axis')).toBe(true)
    expect(rootElement.classList.contains('custom-extra-class')).toBe(true)
    expect(rootElement.style.opacity).toBe('0.9')
    expect(designClasses.slide).toBe('d1-motionAxis__slide')
  })
})
