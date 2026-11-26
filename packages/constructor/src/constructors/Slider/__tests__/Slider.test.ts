// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { Slider } from '../Slider'
import { SliderDesign } from '../SliderDesign'
import type { SliderProps } from '../props'
import type { SliderClasses, SliderComponents, SliderEmits, SliderExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const RippleStub = defineComponent({
  name: 'RippleStub',
  setup() {
    return () => h('span', { class: 'd1-slider__ripple' })
  }
})

describe('Slider (Full Component Integration)', () => {
  const mountSlider = (initialProps: SliderProps = { min: 0, max: 100, step: 1, showThumbLabel: true }) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const props = reactive<SliderProps>({ ...initialProps })
    const emitsSpy = vi.fn()
    let logicInstance!: Slider
    let exposed!: SliderExpose

    const captureLogic = (instance: Slider) => {
      logicInstance = instance
    }

    class InspectableSlider extends Slider {
      constructor(...args: ConstructorParameters<typeof Slider>) {
        super(...args)
        captureLogic(this)
      }
    }

    const Component = defineComponent({
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-slider': true,
            'd1-slider--disabled': Boolean(props.disabled),
            'd1-slider--vertical': Boolean(props.vertical)
          }
        }))

        const design = new SliderDesign<SliderComponents, SliderExpose, SliderClasses, SliderProps>(
          'd1.slider',
          props,
          {
            classes: classesToken,
            emits: emitsSpy as unknown as ConstrEmit<SliderEmits>,
            components: { ripple: RippleStub }
          },
          InspectableSlider
        )

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    const unmount = () => app.unmount()
    cleanups.push(unmount)

    return { container, props, emitsSpy, logicInstance, exposed, unmount }
  }

  it('supports keyboard navigation, IME composition guard, and reactive v-model synchronization', async () => {
    const { container, props, emitsSpy, logicInstance, exposed } = mountSlider({
      min: 0,
      max: 100,
      step: 5,
      value: 50,
      showThumbLabel: true
    })
    await nextTick()

    expect(logicInstance.hasInstance('event')).toBe(false)
    expect(logicInstance.hasInstance('dragEvent')).toBe(false)
    expect(logicInstance.hasInstance('thumbMin')).toBe(false)

    const thumbMax = container.querySelector('.d1-slider__thumbMax') as HTMLButtonElement
    expect(thumbMax.getAttribute('role')).toBe('slider')
    expect(thumbMax.getAttribute('aria-valuenow')).toBe('50')
    expect(thumbMax.getAttribute('aria-valuemin')).toBe('0')
    expect(thumbMax.getAttribute('aria-valuemax')).toBe('100')
    expect(thumbMax.getAttribute('aria-orientation')).toBe('horizontal')

    // IME composition must not move slider
    const imeEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    Object.defineProperty(imeEvent, 'isComposing', { value: true })
    thumbMax.dispatchEvent(imeEvent)
    await nextTick()
    expect(exposed.getValue()).toBe(50)

    // ArrowRight increases by step (50 -> 55)
    thumbMax.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(55)
    expect(thumbMax.getAttribute('aria-valuenow')).toBe('55')
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', 55)
    expect(emitsSpy).toHaveBeenCalledWith('changeLite', 55)

    // PageUp jumps by 10% (55 -> 65), Home -> 0, End -> 100
    thumbMax.dispatchEvent(new KeyboardEvent('keydown', { key: 'PageUp', bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(65)

    thumbMax.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(0)
    expect((container.querySelector('input[type="hidden"]') as HTMLInputElement).value).toBe('0')

    thumbMax.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(100)

    // External modelValue update including falsy 0
    props.modelValue = 0
    await nextTick()
    expect(exposed.getValue()).toBe(0)
    expect(thumbMax.getAttribute('aria-valuenow')).toBe('0')
  })

  it('supports pointer dragging, pointercancel/blur cancellation, and unmount listener cleanup', async () => {
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener')
    const { container, emitsSpy, exposed, unmount } = mountSlider({
      min: 0,
      max: 100,
      step: 1,
      value: 20,
      showThumbLabel: true
    })
    await nextTick()

    const root = container.querySelector('.d1-slider') as HTMLDivElement
    root.getBoundingClientRect = () => ({
      left: 0,
      top: 0,
      right: 200,
      bottom: 20,
      width: 200,
      height: 20,
      x: 0,
      y: 0,
      toJSON: () => {}
    })

    const selectArea = container.querySelector('.d1-slider__select') as HTMLDivElement

    // Start drag at 50% (clientX = 100 -> value = 50)
    selectArea.dispatchEvent(new MouseEvent('mousedown', { button: 0, clientX: 100, bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(50)
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', 50)

    // Move to 75% (clientX = 150 -> value = 75) coalesced via requestAnimationFrame
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 150 }))
    await new Promise(resolve => requestAnimationFrame(resolve))
    await nextTick()
    expect(exposed.getValue()).toBe(75)

    // Cancel via window blur commits change and stops listeners
    window.dispatchEvent(new Event('blur'))
    await nextTick()
    expect(emitsSpy).toHaveBeenCalledWith('changeLite', 75)

    // Further mousemove after blur must NOT change value
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 20 }))
    await nextTick()
    expect(exposed.getValue()).toBe(75)

    // Start another drag and unmount mid-drag
    selectArea.dispatchEvent(new MouseEvent('mousedown', { button: 0, clientX: 60, bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(30)

    unmount()
    await nextTick()
    expect(removeListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
    expect(removeListenerSpy).toHaveBeenCalledWith('pointercancel', expect.any(Function))
    expect(removeListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
  })

  it('supports multiple range mode with minimumDistance, marks, magnet, and ARIA valuetext', async () => {
    const { container, exposed } = mountSlider({
      min: 0,
      max: 100,
      multiple: true,
      minimumDistance: 10,
      value: [25, 75],
      magnet: true,
      marks: [
        { mark: 0, label: 'Min' },
        { mark: 25, label: 'Low' },
        { mark: 50, label: 'Mid' },
        { mark: 75, label: 'High' },
        { mark: 100, label: 'Max' }
      ],
      showThumbLabel: true
    })
    await nextTick()

    const root = container.querySelector('.d1-slider') as HTMLDivElement
    expect(root.classList.contains('d1-slider--mark')).toBe(true)

    const thumbMin = container.querySelector('.d1-slider__thumbMin') as HTMLButtonElement
    const thumbMax = container.querySelector('.d1-slider__thumbMax') as HTMLButtonElement
    expect(thumbMin.getAttribute('aria-valuetext')).toBe('Low')
    expect(thumbMax.getAttribute('aria-valuetext')).toBe('High')

    // Focus min thumb and press ArrowRight -> jumps to next magnet mark (50)
    thumbMin.dispatchEvent(new FocusEvent('focus'))
    thumbMin.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toEqual([50, 75])
    expect(thumbMin.getAttribute('aria-valuetext')).toBe('Mid')
  })
})
