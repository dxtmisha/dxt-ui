// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { Slider } from '../Slider'
import { SliderFocusType } from '../basicTypes'
import type { SliderProps } from '../props'
import type { SliderEmits } from '../types'

describe('Slider (Orchestrator Unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should keep optional and interaction helpers lazy until explicitly needed', () => {
    const scope = effectScope()
    const props = reactive<SliderProps>({ min: 0, max: 100, value: 40 })
    const element = ref<HTMLDivElement | undefined>(undefined)
    const naming = new DesignName('d1.slider')

    scope.run(() => {
      const slider = new Slider(props, element, naming)

      expect(slider.classes).toEqual({ 'd1-slider--mark': false })
      expect(slider.styles).toEqual({
        '--d1-slider-sys-thumb-min-x': '0%',
        '--d1-slider-sys-thumb-max-x': '40%'
      })
      expect(slider.tabindex).toBe(0)

      // Lazy interaction & optional helpers remain unallocated
      expect(slider.hasInstance('dragEvent')).toBe(false)
      expect(slider.hasInstance('emit')).toBe(false)
      expect(slider.hasInstance('event')).toBe(false)
      expect(slider.hasInstance('focus')).toBe(false)
      expect(slider.hasInstance('go')).toBe(false)
      expect(slider.hasInstance('marks')).toBe(false)
      expect(slider.hasInstance('ripple')).toBe(false)
      expect(slider.hasInstance('skeleton')).toBe(false)
      expect(slider.hasInstance('sliderElement')).toBe(false)
      expect(slider.hasInstance('thumbMin')).toBe(false)
    })

    scope.stop()
  })

  it('should preserve falsy modelValue 0 instead of falling back to value prop', () => {
    const scope = effectScope()
    const props = reactive<SliderProps>({
      min: -50,
      max: 50,
      modelValue: 0,
      value: 25
    })
    const element = ref<HTMLDivElement | undefined>(undefined)
    const naming = new DesignName('d1.slider')

    scope.run(() => {
      const slider = new Slider(props, element, naming)

      expect(slider.i('model').get()).toBe(0)
      expect(slider.i('value').max).toBe(0)
      expect((slider.styles as Record<string, string>)['--d1-slider-sys-thumb-max-x']).toBe('50%')
    })

    scope.stop()
  })

  it('should enforce canCreate guards for thumbMin, ripple, and skeleton', () => {
    const scope = effectScope()
    const props = reactive<SliderProps>({
      min: 0,
      max: 100,
      multiple: false,
      disabled: true,
      isSkeleton: false
    })
    const element = ref<HTMLDivElement | undefined>(undefined)
    const naming = new DesignName('d1.slider')

    scope.run(() => {
      const slider = new Slider(props, element, naming)

      expect(slider.callInstance('thumbMin', item => item.value, -1)).toBe(-1)
      expect(slider.hasInstance('thumbMin')).toBe(false)

      expect(slider.callInstance('ripple', item => item.render(), [])).toEqual([])
      expect(slider.hasInstance('ripple')).toBe(false)

      expect(slider.callInstance('skeleton', item => item.classesSkeleton.classBackground, 'fallback')).toBe('fallback')
      expect(slider.hasInstance('skeleton')).toBe(false)

      expect(slider.tabindex).toBe(-1)

      // Enabling props allows lazy creation on next callInstance
      props.multiple = true
      props.isSkeleton = true

      expect(slider.callInstance('thumbMin', item => item.value, -1)).toBe(0)
      expect(slider.hasInstance('thumbMin')).toBe(true)

      expect(slider.callInstance('skeleton', item => item.classesSkeleton.classBackground, 'fallback')).toBe('d1-skeleton__background')
      expect(slider.hasInstance('skeleton')).toBe(true)
    })

    scope.stop()
  })

  it('should delegate events lazily and clean up dragEvent via DesignLifecycleAbstract on unmount', () => {
    const props = reactive<SliderProps>({ min: 0, max: 100, value: 50 })
    const element = ref<HTMLDivElement | undefined>(undefined)
    const naming = new DesignName('d1.slider')
    const emitsSpy = vi.fn()
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener')
    const container = document.createElement('div')
    let slider!: Slider

    const HostComponent = defineComponent({
      setup() {
        slider = new Slider(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitsSpy as unknown as ConstrEmit<SliderEmits>
        )
        return () => h('div')
      }
    })

    const app = createApp(HostComponent)
    app.mount(container)

    expect(slider.eventsMin).toHaveProperty('onFocus', slider.onFocusMin)
    expect(slider.eventsMax).toHaveProperty('onFocus', slider.onFocusMax)
    expect(slider.hasInstance('event')).toBe(false)

    slider.onFocusMin()
    expect(slider.hasInstance('event')).toBe(true)
    expect(slider.i('focus').get()).toBe(SliderFocusType.min)

    slider.onFocusMax()
    expect(slider.i('focus').get()).toBe(SliderFocusType.max)

    slider.onKeydown({ key: 'ArrowRight', preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(slider.i('model').get()).toBe(51)
    expect(emitsSpy).toHaveBeenCalledWith('changeLite', 51)

    slider.onMousedownMax({
      button: 0,
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      clientX: 10
    } as unknown as MouseEvent)
    expect(slider.hasInstance('dragEvent')).toBe(true)

    app.unmount()
    expect(removeListenerSpy).toHaveBeenCalledWith('pointercancel', expect.any(Function))
    expect(removeListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
  })
})
