// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { MotionAxis } from '../MotionAxis'
import { MotionAxisDesign } from '../MotionAxisDesign'
import type { MotionAxisProps } from '../props'

describe('MotionAxis (SSR)', () => {
  const naming = new DesignName('d1.motion-axis')

  it('should initialize and evaluate logic orchestrator in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<MotionAxisProps>({
      axis: 'y',
      direction: 'next',
      selected: 'slide-2',
      inDomSlide: ['slide-3']
    })

    scope.run(() => {
      const axis = new MotionAxis(props, element, naming)

      expect(axis.classes['d1-motionAxis--axis--y']).toBe(true)
      expect(axis.classes['d1-motionAxis--direction--next']).toBe(true)
      expect(axis.isInDom('slide-2')).toBe(true)
      expect(axis.isInDom('slide-3')).toBe(true)
      expect(axis.isInDom('slide-1')).toBe(false)
    })

    scope.stop()
  })

  it('should render full MotionAxisDesign component to HTML string in SSR without DOM globals', async () => {
    const props: MotionAxisProps = {
      axis: 'x',
      direction: 'auto',
      selected: 'slide-2'
    }

    const TestComponent = defineComponent({
      setup() {
        const design = new MotionAxisDesign('d1.motion-axis', props)
        const render = design.render()
        return () => h(render)
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp({
      render() {
        return h(TestComponent, null, {
          'slide-1': () => h('p', 'Hidden Slide 1'),
          'slide-2': () => h('p', 'Active Slide 2')
        })
      }
    })
    const html = await renderToString(app)

    expect(html).toContain('data-key="slide-2"')
    expect(html).toContain('Active Slide 2')
    expect(html).toContain('d1-motionAxis__slide--active')
    expect(html).not.toContain('Hidden Slide 1')
  })

  it('should render inDom and direction variants deterministically across isolated SSR requests', async () => {
    const variants: MotionAxisProps[] = [
      { axis: 'x', direction: 'next', selected: 'a' },
      { axis: 'y', direction: 'back', selected: 'b', inDom: true },
      { axis: 'z', direction: 'auto', selected: 'a', inDomSlide: ['b'] }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new MotionAxisDesign('d1.motion-axis', props)
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp({
        render() {
          return h(TestComponent, null, {
            a: () => h('span', 'Alpha'),
            b: () => h('span', 'Beta')
          })
        }
      })
      const html = await renderToString(app)

      expect(html).toContain(`data-key="${props.selected}"`)
      expect(html).toContain(`d1-motionAxis--axis--${props.axis}`)
      expect(html).toContain(`d1-motionAxis--direction--${props.direction}`)
    }
  })
})
