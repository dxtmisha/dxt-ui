// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { SliderField } from '../SliderField'
import { SliderFieldDesign } from '../SliderFieldDesign'
import type { SliderFieldProps } from '../props'
import type {
  SliderFieldClasses,
  SliderFieldComponents,
  SliderFieldEmits,
  SliderFieldExpose,
  SliderFieldSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const FieldLabelStub = defineComponent({
  name: 'FieldLabelStub',
  props: {
    label: { type: [String, Number], default: undefined },
    required: { type: Boolean, default: false }
  },
  setup(props, { slots }) {
    return () => h('label', { 'class': 'field-label-stub', 'data-required': String(props.required) }, [
      slots.label ? slots.label({}) : String(props.label ?? '')
    ])
  }
})

const FieldMessageStub = defineComponent({
  name: 'FieldMessageStub',
  props: {
    helperMessage: { type: String, default: undefined },
    validationMessage: { type: String, default: undefined }
  },
  setup(props) {
    return () => h(
      'div',
      {
        'class': 'field-message-stub',
        'data-helper': props.helperMessage ?? '',
        'data-validation': props.validationMessage ?? ''
      },
      props.validationMessage || props.helperMessage || ''
    )
  }
})

const IconStub = defineComponent({
  name: 'IconStub',
  props: {
    icon: { type: [String, Object], default: undefined }
  },
  setup(props) {
    return () => h('span', { 'class': 'icon-stub', 'data-icon': String(props.icon ?? '') })
  }
})

const SliderStub = defineComponent({
  name: 'SliderStub',
  inheritAttrs: false,
  props: {
    value: { type: [Number, Array], default: undefined },
    min: { type: [Number, String], default: undefined },
    max: { type: [Number, String], default: undefined },
    step: { type: [Number, String], default: undefined },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false }
  },
  emits: ['inputLite', 'changeLite'],
  setup(props, { attrs, emit, slots }) {
    return () => h(
      'div',
      {
        'class': ['slider-stub', attrs.class],
        'data-value': JSON.stringify(props.value),
        'data-disabled': String(props.disabled),
        'data-readonly': String(props.readonly),
        'data-custom': String(attrs['data-custom'] ?? ''),
        'onClick': () => {
          emit('inputLite', props.multiple ? [30, 70] : 65)
          emit('changeLite', props.multiple ? [30, 70] : 65)
        }
      },
      [
        slots.minLabel ? h('span', { class: 'slot-min-label' }, slots.minLabel({ value: 30, item: { mark: 30, label: '30' } })) : null,
        slots.maxLabel ? h('span', { class: 'slot-max-label' }, slots.maxLabel({ value: 70, item: { mark: 70, label: '70' } })) : null,
        slots.mark ? h('span', { class: 'slot-mark' }, slots.mark({ item: { mark: 50, label: 'Mid' } })) : null
      ]
    )
  }
})

describe('SliderFieldDesign (Design Layer Unit)', () => {
  const mountDesign = (
    initialProps: SliderFieldProps = { min: 0, max: 100, value: 40, showValue: true },
    options?: {
      slots?: SliderFieldSlots
      attrs?: Record<string, unknown>
    }
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const props = reactive<SliderFieldProps>({ ...initialProps })
    const emitsSpy = vi.fn()
    let designInstance!: SliderFieldDesign<SliderFieldComponents, SliderFieldExpose, SliderFieldClasses, SliderFieldProps>
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

    const ChildComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-sliderField': true,
            'd1-sliderField--disabled': Boolean(props.disabled),
            'd1-sliderField--vertical': Boolean(props.vertical)
          }
        }))

        designInstance = new SliderFieldDesign<SliderFieldComponents, SliderFieldExpose, SliderFieldClasses, SliderFieldProps>(
          'd1.sliderField',
          props,
          {
            classes: classesToken,
            emits: emitsSpy as unknown as ConstrEmit<SliderFieldEmits>,
            components: {
              fieldLabel: FieldLabelStub,
              fieldMessage: FieldMessageStub,
              icon: IconStub,
              slider: SliderStub
            }
          },
          InspectableSliderField
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

  it('should merge root attrs/classes/styles cleanly, bind root element ref, and keep optional helpers lazy', async () => {
    const { container, logicInstance, exposed } = mountDesign(
      { min: 0, max: 100, value: 40, showValue: true },
      {
        attrs: {
          'data-testid': 'slider-field-root',
          'class': 'external-host-class',
          'style': { maxWidth: '320px' }
        }
      }
    )
    await nextTick()

    const root = container.querySelector('[data-testid="slider-field-root"]') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-sliderField')).toBe(true)
    expect(root.classList.contains('external-host-class')).toBe(true)
    expect(root.style.maxWidth).toBe('320px')

    // Optional helpers remain unallocated when not used
    expect(logicInstance.hasInstance('fieldLabel')).toBe(false)
    expect(logicInstance.hasInstance('icon')).toBe(false)
    expect(logicInstance.hasInstance('form')).toBe(false)
    expect(logicInstance.hasInstance('sliderEvent')).toBe(false)

    // Value display rendered for single mode
    expect(container.querySelector('.d1-sliderField__valueMax')?.textContent).toBe('40')
    expect(container.querySelector('.d1-sliderField__valueMin')).toBeNull()
    expect(container.querySelector('.d1-sliderField__input')).toBeNull()

    // Exposed API works cleanly
    expect(exposed.getValue()).toBe(40)
    exposed.setValue(75)
    await nextTick()
    expect(exposed.getValue()).toBe(75)
    expect(container.querySelector('.d1-sliderField__valueMax')?.textContent).toBe('75')
    expect(exposed.checkValidity()).toBe(true)
    expect(exposed.getValidationMessage()).toBe('')
  })

  it('should render icons, leading/trailing labels & slots, fieldLabel with showValueInLabel, and fieldMessage', async () => {
    const { container, logicInstance } = mountDesign(
      {
        label: 'Brightness',
        showValueInLabel: true,
        labelSeparator: ' - ',
        labelLeading: 'Low',
        labelTrailing: 'High',
        icon: 'wb_sunny',
        iconTrailing: 'brightness_high',
        helperMessage: 'Adjust screen brightness',
        value: 60,
        showValue: true
      },
      {
        slots: {
          leading: () => h('span', { class: 'custom-leading-slot' }, 'L'),
          trailing: () => h('span', { class: 'custom-trailing-slot' }, 'T')
        }
      }
    )
    await nextTick()

    expect(logicInstance.hasInstance('fieldLabel')).toBe(true)
    expect(logicInstance.hasInstance('icon')).toBe(true)

    expect(container.querySelector('.field-label-stub')?.textContent).toBe('Brightness - 60')
    expect(container.querySelector('.d1-sliderField__labelLeading')?.textContent).toBe('Low')
    expect(container.querySelector('.d1-sliderField__labelTrailing')?.textContent).toBe('High')
    expect(container.querySelector('.custom-leading-slot')?.textContent).toBe('L')
    expect(container.querySelector('.custom-trailing-slot')?.textContent).toBe('T')
    expect(container.querySelectorAll('.icon-stub')).toHaveLength(2)
    expect(container.querySelector('.field-message-stub')?.textContent).toBe('Adjust screen brightness')
  })

  it('should render numeric inputs in showInput mode, merge inputAttrs safely, and respect disabled/readonly', async () => {
    const customInputSpy = vi.fn()
    const { container, props, emitsSpy } = mountDesign({
      name: 'budget',
      label: 'Budget',
      min: 0,
      max: 1000,
      step: 10,
      multiple: true,
      showInput: true,
      showValue: true,
      value: [200, 800],
      inputAttrs: {
        class: 'custom-input-class',
        onInput: customInputSpy
      } as unknown as Partial<HTMLInputElement>
    })
    await nextTick()

    // showInput suppresses static value spans
    expect(container.querySelector('.d1-sliderField__valueMin')).toBeNull()
    expect(container.querySelector('.d1-sliderField__valueMax')).toBeNull()

    const inputMin = container.querySelector('.d1-sliderField__inputMin') as HTMLInputElement
    const inputMax = container.querySelector('.d1-sliderField__inputMax') as HTMLInputElement

    expect(inputMin).not.toBeNull()
    expect(inputMax).not.toBeNull()
    expect(inputMin.name).toBe('budget-min')
    expect(inputMax.name).toBe('budget-max')
    expect(inputMin.getAttribute('aria-label')).toBe('Budget (Minimum)')
    expect(inputMax.getAttribute('aria-label')).toBe('Budget (Maximum)')
    expect(inputMin.placeholder).toBe('200')
    expect(inputMax.placeholder).toBe('800')
    expect(inputMax.classList.contains('d1-sliderField__inputMax')).toBe(true)
    expect(inputMax.classList.contains('custom-input-class')).toBe(true)

    // Both internal and inputAttrs onInput handlers run via mergeProps and emit input/change events
    customInputSpy.mockClear()
    emitsSpy.mockClear()
    inputMax.value = '750'
    inputMax.dispatchEvent(new Event('input'))
    inputMax.dispatchEvent(new Event('change'))
    await nextTick()
    expect(customInputSpy).toHaveBeenCalledTimes(1)
    expect(inputMax.placeholder).toBe('750')
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', expect.objectContaining({ value: [200, 750] }))
    expect(emitsSpy).toHaveBeenCalledWith('changeLite', expect.objectContaining({ value: [200, 750] }))

    // Disabled and readonly propagate to numeric inputs
    props.disabled = true
    props.readonly = true
    await nextTick()
    expect(inputMin.disabled).toBe(true)
    expect(inputMax.disabled).toBe(true)
    expect(inputMin.readOnly).toBe(true)
    expect(inputMax.readOnly).toBe(true)
  })

  it('should merge sliderAttrs safely via mergeProps and forward SliderSlots (mark, minLabel, maxLabel)', async () => {
    const customInputLite = vi.fn()
    const { container, emitsSpy, logicInstance } = mountDesign(
      {
        min: 0,
        max: 100,
        multiple: true,
        value: [20, 80],
        sliderAttrs: {
          'class': 'custom-slider-class',
          'data-custom': 'yes',
          'onInputLite': customInputLite
        } as unknown as SliderFieldProps['sliderAttrs']
      },
      {
        slots: {
          minLabel: ({ value }) => `MIN:${value}`,
          maxLabel: ({ value }) => `MAX:${value}`,
          mark: ({ item }) => `MARK:${item.label}`
        }
      }
    )
    await nextTick()

    const sliderStub = container.querySelector('.slider-stub') as HTMLDivElement
    expect(sliderStub.classList.contains('d1-sliderField__slider')).toBe(true)
    expect(sliderStub.classList.contains('custom-slider-class')).toBe(true)
    expect(sliderStub.getAttribute('data-custom')).toBe('yes')
    expect(container.querySelector('.slot-min-label')?.textContent).toBe('MIN:30')
    expect(container.querySelector('.slot-max-label')?.textContent).toBe('MAX:70')
    expect(container.querySelector('.slot-mark')?.textContent).toBe('MARK:Mid')

    // Triggering slider emits invokes both custom sliderAttrs listener and SliderField handler
    expect(logicInstance.hasInstance('sliderEvent')).toBe(false)
    sliderStub.click()
    await nextTick()
    expect(logicInstance.hasInstance('sliderEvent')).toBe(true)
    expect(customInputLite).toHaveBeenCalledWith([30, 70])
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', expect.objectContaining({ value: [30, 70] }))
    expect(emitsSpy).toHaveBeenCalledWith('changeLite', expect.objectContaining({ value: [30, 70] }))
  })
})
