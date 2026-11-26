// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, provide, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'
import { SliderDesign } from '../../Slider/SliderDesign'
import type { SliderProps } from '../../Slider/props'
import type { SliderClasses, SliderComponents, SliderEmits, SliderExpose } from '../../Slider/types'

import { SliderField } from '../SliderField'
import { SliderFieldDesign } from '../SliderFieldDesign'
import type { SliderFieldProps } from '../props'
import type {
  SliderFieldClasses,
  SliderFieldComponents,
  SliderFieldEmits,
  SliderFieldExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const RealSliderComponent = defineComponent({
  name: 'RealSliderComponent',
  inheritAttrs: false,
  props: {
    readonly: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: undefined },
    selected: { type: Boolean, default: undefined },
    name: { type: String, default: undefined },
    marks: { type: [Array, Object], default: undefined },
    magnet: { type: Boolean, default: undefined },
    keyLabel: { type: String, default: 'label' },
    keyValue: { type: String, default: 'value' },
    required: { type: Boolean, default: undefined },
    step: { type: [Number, String], default: 1 },
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    multiple: { type: Boolean, default: undefined },
    minimumDistance: { type: [Number, String], default: 1 },
    showThumbLabel: { type: Boolean, default: true },
    vertical: { type: Boolean, default: undefined },
    isSkeleton: { type: Boolean, default: undefined },
    inputAttrs: { type: Object, default: undefined },
    value: { type: [Number, String, Array], default: undefined }
  },
  emits: ['input', 'inputLite', 'change', 'changeLite', 'update:value', 'update:modelValue'],
  setup(props, { emit }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-slider': true,
        'd1-slider--disabled': Boolean(props.disabled),
        'd1-slider--vertical': Boolean(props.vertical)
      }
    }))

    const design = new SliderDesign<SliderComponents, SliderExpose, SliderClasses, SliderProps>(
      'd1.slider',
      props as Readonly<SliderProps>,
      {
        classes: classesToken,
        emits: emit as unknown as ConstrEmit<SliderEmits>
      }
    )

    return design.render()
  }
})

const FieldLabelStub = defineComponent({
  name: 'FieldLabelStub',
  props: {
    label: { type: [String, Number], default: undefined }
  },
  setup(props) {
    return () => h('label', { class: 'd1-sliderField__fieldLabel' }, String(props.label ?? ''))
  }
})

const FieldMessageStub = defineComponent({
  name: 'FieldMessageStub',
  props: {
    helperMessage: { type: String, default: undefined },
    validationMessage: { type: String, default: undefined }
  },
  setup(props) {
    return () => h('div', { class: 'd1-sliderField__fieldMessage' }, props.validationMessage || props.helperMessage || '')
  }
})

const IconStub = defineComponent({
  name: 'IconStub',
  props: {
    icon: { type: [String, Object], default: undefined }
  },
  setup(props) {
    return () => h('span', { class: 'd1-sliderField__icon' }, String(props.icon ?? ''))
  }
})

describe('SliderField (Full Component Integration)', () => {
  const mountSliderField = (
    initialProps: SliderFieldProps = { min: 0, max: 100, step: 5, value: 40, showValue: true },
    formRegistration?: FormElementRegistration
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const props = reactive<SliderFieldProps>({ ...initialProps })
    const emitsSpy = vi.fn()
    let logicInstance!: SliderField
    let exposed!: SliderFieldExpose

    const captureLogic = (instance: SliderField) => {
      logicInstance = instance
    }

    class InspectableSliderField extends SliderField {
      constructor(...args: ConstructorParameters<typeof SliderField>) {
        super(...args)
        captureLogic(this)
      }
    }

    const InnerComponent = defineComponent({
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-sliderField': true,
            'd1-sliderField--disabled': Boolean(props.disabled),
            'd1-sliderField--vertical': Boolean(props.vertical)
          }
        }))

        const design = new SliderFieldDesign<SliderFieldComponents, SliderFieldExpose, SliderFieldClasses, SliderFieldProps>(
          'd1.sliderField',
          props,
          {
            classes: classesToken,
            emits: emitsSpy as unknown as ConstrEmit<SliderFieldEmits>,
            components: {
              fieldLabel: FieldLabelStub,
              fieldMessage: FieldMessageStub,
              icon: IconStub,
              slider: RealSliderComponent
            }
          },
          InspectableSliderField
        )

        exposed = design.expose()
        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        if (formRegistration) {
          provide(FORM_NAME_ELEMENT, formRegistration)
        }
        return () => h(InnerComponent)
      }
    })

    const app = createApp(Host)
    app.mount(container)
    const unmount = () => app.unmount()
    cleanups.push(unmount)

    return { container, props, emitsSpy, logicInstance, exposed, unmount }
  }

  it('synchronizes embedded Slider keyboard interaction with SliderField value, label, and emits', async () => {
    const { container, props, emitsSpy, logicInstance, exposed } = mountSliderField({
      label: 'Volume',
      showValueInLabel: true,
      showValue: true,
      min: -50,
      max: 50,
      step: 10,
      value: 0
    })
    await nextTick()

    // Falsy zero must render accurately everywhere
    expect(exposed.getValue()).toBe(0)
    expect(container.querySelector('.d1-sliderField__fieldLabel')?.textContent).toBe('Volume: 0')
    expect(container.querySelector('.d1-sliderField__valueMax')?.textContent).toBe('0')
    expect(logicInstance.hasInstance('sliderEvent')).toBe(false)
    expect(logicInstance.hasInstance('icon')).toBe(false)

    // Keyboard ArrowRight on embedded Slider thumb moves 0 -> 10 and emits through SliderField
    const thumbMax = container.querySelector('.d1-slider__thumbMax') as HTMLButtonElement
    expect(thumbMax).not.toBeNull()
    thumbMax.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await nextTick()

    expect(logicInstance.hasInstance('sliderEvent')).toBe(true)
    expect(exposed.getValue()).toBe(10)
    expect(container.querySelector('.d1-sliderField__fieldLabel')?.textContent).toBe('Volume: 10')
    expect(container.querySelector('.d1-sliderField__valueMax')?.textContent).toBe('10')
    expect(emitsSpy).toHaveBeenCalledWith('update:modelValue', 10)
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', expect.objectContaining({ value: 10 }))
    expect(emitsSpy).toHaveBeenCalledWith('changeLite', expect.objectContaining({ value: 10 }))

    // External modelValue update back to falsy 0 syncs everywhere
    props.modelValue = 0
    await nextTick()
    expect(exposed.getValue()).toBe(0)
    expect(container.querySelector('.d1-sliderField__fieldLabel')?.textContent).toBe('Volume: 0')
    expect(container.querySelector('.d1-sliderField__valueMax')?.textContent).toBe('0')
  })

  it('synchronizes numeric inputs (focus, input, blur) with range slider in multiple mode', async () => {
    const { container, emitsSpy, exposed } = mountSliderField({
      name: 'price',
      label: 'Price Range',
      showValueInLabel: true,
      multiple: true,
      showInput: true,
      min: 0,
      max: 100,
      step: 5,
      value: [20, 80]
    })
    await nextTick()

    const inputMin = container.querySelector('.d1-sliderField__inputMin') as HTMLInputElement
    const inputMax = container.querySelector('.d1-sliderField__inputMax') as HTMLInputElement

    // Focus populates input with current min/max
    inputMin.dispatchEvent(new FocusEvent('focus'))
    expect(inputMin.value).toBe('20')
    expect(emitsSpy).toHaveBeenCalledWith('focus', expect.any(FocusEvent))

    // Typing updates min value and syncs label & exposed value
    inputMin.value = '35'
    inputMin.dispatchEvent(new Event('input'))
    await nextTick()
    expect(exposed.getValue()).toEqual([35, 80])
    expect(container.querySelector('.d1-sliderField__fieldLabel')?.textContent).toBe('Price Range: 35 - 80')

    // Blur clears input value so placeholder displays current value
    inputMin.dispatchEvent(new FocusEvent('blur'))
    expect(inputMin.value).toBe('')
    expect(inputMin.placeholder).toBe('35')
    expect(emitsSpy).toHaveBeenCalledWith('blur', expect.any(FocusEvent))

    // Max input focus & edit
    inputMax.dispatchEvent(new FocusEvent('focus'))
    expect(inputMax.value).toBe('80')
    inputMax.value = '90'
    inputMax.dispatchEvent(new Event('input'))
    await nextTick()
    expect(exposed.getValue()).toEqual([35, 90])
  })

  it('prevents value mutations when disabled or readonly and integrates with Form lifecycle & validation', async () => {
    const formRegistration: FormElementRegistration = {
      register: vi.fn(),
      unregister: vi.fn(),
      updateData: vi.fn(),
      getValue: vi.fn()
    }

    const { container, props, exposed, unmount } = mountSliderField(
      {
        name: 'threshold',
        min: 0,
        max: 100,
        showInput: true,
        value: 50,
        disabled: true,
        validationMessage: 'Out of allowed range'
      },
      formRegistration
    )
    await nextTick()

    expect(formRegistration.register).toHaveBeenCalledTimes(1)
    expect(exposed.checkValidity()).toBe(false)
    expect(exposed.getValidationMessage()).toBe('Out of allowed range')
    expect(container.querySelector('.d1-sliderField__fieldMessage')?.textContent).toBe('Out of allowed range')

    const inputMax = container.querySelector('.d1-sliderField__inputMax') as HTMLInputElement
    expect(inputMax.disabled).toBe(true)

    inputMax.value = '99'
    inputMax.dispatchEvent(new Event('input'))
    await nextTick()
    expect(exposed.getValue()).toBe(50)

    // Readonly also prevents editing
    props.disabled = false
    props.readonly = true
    await nextTick()
    expect(inputMax.readOnly).toBe(true)

    inputMax.value = '77'
    inputMax.dispatchEvent(new Event('input'))
    await nextTick()
    expect(exposed.getValue()).toBe(50)

    unmount()
    expect(formRegistration.unregister).toHaveBeenCalledTimes(1)
  })
})
