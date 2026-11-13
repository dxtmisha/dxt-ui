// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { ProgressDesign } from '../ProgressDesign'
import { Progress } from '../Progress'
import { defaultsProgress, type ProgressProps } from '../props'
import type { ProgressClasses, ProgressComponents, ProgressExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('ProgressDesign (integration)', () => {
  it('renders the point only in linear mode with a determinate value', () => {
    const properties = reactive<ProgressProps>({ linear: true, point: true })
    const isValue = vi.spyOn(Progress.prototype, 'isValue').mockReturnValue(true)
    let design: ProgressDesign<ProgressComponents, ProgressExpose, ProgressClasses, ProgressProps> | undefined
    const component = defineComponent({
      setup() {
        design = new ProgressDesign('d1.progress', properties)
        return () => h('div')
      }
    })
    const container = document.createElement('div')
    const app = createApp(component)
    app.mount(container)
    cleanups.push(() => app.unmount())

    expect(design?.renderPoint()).toHaveLength(1)
    expect(isValue).toHaveBeenCalled()
    properties.circular = true
    expect(design?.renderPoint()).toEqual([])
    expect(design?.renderCircle()).toHaveLength(2)
  })

  it('should render linear progress in DOM and bind root DOM element to elementHtml', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposedInstance: ReturnType<ProgressDesign<
      ProgressComponents,
      ProgressExpose,
      ProgressClasses,
      ProgressProps
    >['expose']> | undefined

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

        exposedInstance = design.expose()

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
    expect(exposedInstance).toBeDefined()

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
