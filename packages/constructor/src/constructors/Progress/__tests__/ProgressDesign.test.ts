// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ProgressDesign } from '../ProgressDesign'
import { defaultsProgress, type ProgressProps } from '../props'
import type { ProgressClasses, ProgressComponents, ProgressExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('ProgressDesign (integration)', () => {
  it('should render linear progress in DOM and bind root DOM element to elementHtml', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let elementHtmlRef!: Ref<HTMLElement | undefined>

    const Component = defineComponent({
      setup() {
        const props = reactive<ProgressProps>({
          ...(defaultsProgress as ProgressProps),
          value: 60,
          linear: true,
          point: true
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-progress': true
          }
        }))

        const design = new ProgressDesign<
          ProgressComponents,
          ProgressExpose,
          ProgressClasses,
          ProgressProps
        >('d1.progress', props, {
          classes: classesToken
        })

        elementHtmlRef = (design.expose() as any).elementHtml

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = container.querySelector('.d1-progress')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('div')
    expect(rootElement?.getAttribute('role')).toBe('progressbar')
    expect(rootElement?.getAttribute('aria-valuenow')).toBe('60')
    expect(elementHtmlRef.value).toBe(rootElement)

    const point = rootElement?.querySelector('.d1-progress__point')
    expect(point).not.toBeNull()
  })

  it('should render circular progress with circles in DOM', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const Component = defineComponent({
      setup() {
        const props = reactive<ProgressProps>({
          ...(defaultsProgress as ProgressProps),
          circular: true,
          value: 50
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-progress': true
          }
        }))

        const design = new ProgressDesign<
          ProgressComponents,
          ProgressExpose,
          ProgressClasses,
          ProgressProps
        >('d1.progress', props, {
          classes: classesToken
        })

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    await nextTick()

    const svgElement = container.querySelector('svg')
    expect(svgElement).not.toBeNull()
    expect(svgElement?.getAttribute('viewBox')).toBe('0 0 48 48')

    const circle = svgElement?.querySelector('.d1-progress__circle')
    const circleSub = svgElement?.querySelector('.d1-progress__circleSub')
    expect(circle).not.toBeNull()
    expect(circleSub).not.toBeNull()
  })
})
