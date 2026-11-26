// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { Slider } from '../Slider'
import { SliderDesign } from '../SliderDesign'
import type { SliderProps } from '../props'
import type {
  SliderClasses,
  SliderComponents,
  SliderEmits,
  SliderExpose,
  SliderSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const RippleStub = defineComponent({
  name: 'RippleStub',
  setup() {
    return () => h('span', { class: 'ripple-stub' })
  }
})

describe('SliderDesign (Design Layer Unit)', () => {
  const mountDesign = (
    initialProps: SliderProps = { min: 0, max: 100, value: 40, showThumbLabel: true },
    options?: {
      slots?: SliderSlots
      attrs?: Record<string, unknown>
      withRipple?: boolean
    }
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const props = reactive<SliderProps>({ ...initialProps })
    const emitsSpy = vi.fn()
    let designInstance!: SliderDesign<SliderComponents, SliderExpose, SliderClasses, SliderProps>
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

    const ChildComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-slider': true }
        }))

        designInstance = new SliderDesign<SliderComponents, SliderExpose, SliderClasses, SliderProps>(
          'd1.slider',
          props,
          {
            classes: classesToken,
            emits: emitsSpy as unknown as ConstrEmit<SliderEmits>,
            components: options?.withRipple ? { ripple: RippleStub } : undefined
          },
          InspectableSlider
        )

        exposed = designInstance.expose()
        return designInstance.render()
      }
    })

    const RootWrapper = defineComponent({
      setup() {
        return () => h(ChildComponent as unknown as ReturnType<typeof defineComponent>, options?.attrs ?? {}, options?.slots)
      }
    })

    const app = createApp(RootWrapper)
    app.mount(container)
    cleanups.push(() => app.unmount())

    return { container, props, emitsSpy, designInstance, logicInstance, exposed }
  }

  it('should render root element with merged attrs, sub-elements, hidden input, and expose methods', async () => {
    const { container, exposed, logicInstance } = mountDesign(
      {
        min: 0,
        max: 100,
        value: 0,
        name: 'volume',
        required: true,
        showThumbLabel: true,
        inputAttrs: { id: 'volume-input' }
      },
      {
        attrs: { 'data-testid': 'slider-root', 'class': 'custom-host-class' },
        withRipple: true
      }
    )
    await nextTick()

    const root = container.querySelector('[data-testid="slider-root"]') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-slider')).toBe(true)
    expect(root.classList.contains('custom-host-class')).toBe(true)

    expect(container.querySelector('.d1-slider__rail')?.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('.d1-slider__track')?.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('.d1-slider__select')?.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('.d1-slider__thumbMin')).toBeNull()
    expect(container.querySelector('.d1-slider__thumbMax')).not.toBeNull()
    expect(container.querySelector('.ripple-stub')).not.toBeNull()

    // Falsy zero must be preserved in hidden input
    const hiddenInput = container.querySelector('input[type="hidden"]') as HTMLInputElement
    expect(hiddenInput.name).toBe('volume')
    expect(hiddenInput.value).toBe('0')
    expect(hiddenInput.id).toBe('volume-input')
    expect(hiddenInput.required).toBe(true)

    // Exposed methods work and remain consistent
    expect(exposed.getValue()).toBe(0)
    exposed.setValue(30)
    await nextTick()
    expect(exposed.getValue()).toBe(30)
    expect(hiddenInput.value).toBe('30')

    exposed.increase()
    await nextTick()
    expect(exposed.getValue()).toBe(31)

    exposed.decrease()
    await nextTick()
    expect(exposed.getValue()).toBe(30)

    expect(logicInstance.hasInstance('thumbMin')).toBe(false)
    expect(logicInstance.hasInstance('skeleton')).toBe(false)
  })

  it('should render custom slots for minLabel, maxLabel, and mark items', async () => {
    const { container } = mountDesign(
      {
        min: 0,
        max: 100,
        multiple: true,
        value: [20, 80],
        showThumbLabel: true,
        marks: [
          { mark: 20, label: 'Low' },
          { mark: 80, label: 'High' }
        ]
      },
      {
        slots: {
          minLabel: ({ value }) => `MIN:${value}`,
          maxLabel: ({ value }) => `MAX:${value}`,
          mark: ({ item }) => `M:${item.label}`
        }
      }
    )
    await nextTick()

    const minLabel = container.querySelector('.d1-slider__thumbMin .d1-slider__label')
    const maxLabel = container.querySelector('.d1-slider__thumbMax .d1-slider__label')
    const markItems = container.querySelectorAll('.d1-slider__mark')

    expect(minLabel?.textContent).toBe('MIN:20')
    expect(maxLabel?.textContent).toBe('MAX:80')
    expect(markItems.length).toBe(2)
    expect(markItems[0]?.textContent).toBe('M:Low')
    expect(markItems[1]?.textContent).toBe('M:High')
  })

  it('should omit thumb label and ripple when showThumbLabel is false or isSkeleton is true', async () => {
    const { container, props, logicInstance } = mountDesign(
      {
        min: 0,
        max: 100,
        value: 50,
        showThumbLabel: false,
        isSkeleton: true
      },
      { withRipple: true }
    )
    await nextTick()

    expect(container.querySelector('.d1-slider__label')).toBeNull()
    expect(container.querySelector('.ripple-stub')).toBeNull()
    expect(logicInstance.hasInstance('ripple')).toBe(false)
    expect(logicInstance.hasInstance('marks')).toBe(false)

    props.isSkeleton = false
    await nextTick()
    expect(container.querySelector('.ripple-stub')).not.toBeNull()
    expect(logicInstance.hasInstance('ripple')).toBe(true)
  })
})
