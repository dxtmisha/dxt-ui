// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, DesignName, ServerStorage } from '@dxtmisha/functional'

import { Slider } from '../Slider'
import { SliderDesign } from '../SliderDesign'
import type { SliderProps } from '../props'

describe('Slider (SSR)', () => {
  const naming = new DesignName('d1.slider')

  it('initializes orchestrator bindings cleanly in Node SSR without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<SliderProps>({
      min: 0,
      max: 100,
      value: 40
    })

    scope.run(() => {
      const slider = new Slider(props, element, naming)

      expect(slider.classes['d1-slider--mark']).toBe(false)
      const styles = slider.styles as Record<string, string>
      expect(styles['--d1-slider-sys-thumb-min-x']).toBe('0%')
      expect(styles['--d1-slider-sys-thumb-max-x']).toBe('40%')
      expect(slider.tabindex).toBe(0)

      expect(slider.hasInstance('dragEvent')).toBe(false)
      expect(slider.hasInstance('emit')).toBe(false)
      expect(slider.hasInstance('event')).toBe(false)
      expect(slider.hasInstance('focus')).toBe(false)
      expect(slider.hasInstance('go')).toBe(false)
      expect(slider.hasInstance('sliderElement')).toBe(false)
      expect(slider.hasInstance('thumbMin')).toBe(false)
      expect(slider.hasInstance('skeleton')).toBe(false)
    })

    scope.stop()
  })

  it('renders full SliderDesign to deterministic HTML string in SSR with lazy helpers unallocated', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    let logicInstance!: Slider

    const captureLogic = (instance: Slider) => {
      logicInstance = instance
    }

    class InspectableSlider extends Slider {
      constructor(...args: ConstructorParameters<typeof Slider>) {
        super(...args)
        captureLogic(this)
      }
    }

    const createAppForProps = (props: SliderProps) => {
      const TestComponent = defineComponent({
        setup() {
          const classesToken = computed<ConstrClasses>(() => ({
            main: { 'd1-slider': true }
          }))
          const design = new SliderDesign(
            'd1.slider',
            props,
            { classes: classesToken },
            InspectableSlider
          )
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      return createSSRApp(TestComponent)
    }

    const props: SliderProps = {
      min: 0,
      max: 100,
      value: 40,
      name: 'volume',
      showThumbLabel: true
    }

    const htmlFirst = await renderToString(createAppForProps(props))
    const htmlSecond = await renderToString(createAppForProps(props))

    // Deterministic markup across repeated SSR renders
    expect(htmlFirst).toBe(htmlSecond)
    expect(htmlFirst).toContain('role="slider"')
    expect(htmlFirst).toContain('aria-valuenow="40"')
    expect(htmlFirst).toContain('aria-valuemin="0"')
    expect(htmlFirst).toContain('aria-valuemax="100"')
    expect(htmlFirst).toContain('aria-orientation="horizontal"')
    expect(htmlFirst).toContain('--d1-slider-sys-thumb-max-x:40%')
    expect(htmlFirst).toContain('name="volume"')
    expect(htmlFirst).toContain('value="40"')
    expect(htmlFirst).toContain('d1-slider__thumbMax')
    expect(htmlFirst).not.toContain('d1-slider__thumbMin')

    // Lazy interaction and optional helpers must remain unallocated in SSR
    expect(logicInstance.hasInstance('dragEvent')).toBe(false)
    expect(logicInstance.hasInstance('emit')).toBe(false)
    expect(logicInstance.hasInstance('event')).toBe(false)
    expect(logicInstance.hasInstance('focus')).toBe(false)
    expect(logicInstance.hasInstance('go')).toBe(false)
    expect(logicInstance.hasInstance('sliderElement')).toBe(false)
    expect(logicInstance.hasInstance('thumbMin')).toBe(false)
    expect(logicInstance.hasInstance('skeleton')).toBe(false)
  })

  it('renders all Slider variants (multiple, vertical, marks, zero value, disabled, readonly, skeleton) in SSR', async () => {
    const variants: SliderProps[] = [
      { min: -50, max: 50, value: 0, showThumbLabel: true },
      { min: 0, max: 100, multiple: true, value: [20, 80], showThumbLabel: true },
      { min: 0, max: 100, vertical: true, value: 60, showThumbLabel: true },
      {
        min: 0,
        max: 100,
        value: 25,
        marks: [{ mark: 25, label: 'Low' }, { mark: 75, label: 'High' }],
        showThumbLabel: true
      },
      { min: 0, max: 100, value: 30, disabled: true, showThumbLabel: true },
      { min: 0, max: 100, value: 30, readonly: true, showThumbLabel: true },
      { min: 0, max: 100, value: 30, isSkeleton: true, showThumbLabel: false }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new SliderDesign('d1.slider', props)
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const html = await renderToString(createSSRApp(TestComponent))

      expect(typeof html).toBe('string')
      expect(html).toContain('role="slider"')

      if (props.multiple) {
        expect(html).toContain('d1-slider__thumbMin')
      }

      if (props.vertical) {
        expect(html).toContain('aria-orientation="vertical"')
      }

      if (props.marks) {
        expect(html).toContain('d1-slider__marks')
        expect(html).toContain('aria-valuetext="Low"')
      }

      if (props.disabled) {
        expect(html).toContain('aria-disabled="true"')
      }

      if (props.readonly) {
        expect(html).toContain('aria-readonly="true"')
      }

      if (props.value === 0) {
        expect(html).toContain('aria-valuenow="0"')
        expect(html).toContain('value="0"')
      }
    }
  })
})
