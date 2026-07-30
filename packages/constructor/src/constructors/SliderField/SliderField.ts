import { computed, type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { Slider } from '../Slider/Slider'
import type { SliderEventPayload } from '../Slider/basicTypes'
import type { SliderFieldProps } from './props'
import type {
  SliderFieldComponents,
  SliderFieldEmits,
  SliderFieldSlots
} from './types'

/**
 * SliderField
 */
export class SliderField {
  readonly slider: Slider

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors constructors list / список конструкторов
   * @param constructors.SliderConstructor class for Slider logic / класс для работы со Slider
   */
  constructor(
    protected readonly props: SliderFieldProps,
    protected readonly refs: ToRefs<SliderFieldProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SliderFieldComponents, SliderFieldProps>,
    protected readonly slots?: SliderFieldSlots,
    protected readonly emits?: ConstrEmit<SliderFieldEmits>,
    constructors: {
      SliderConstructor?: typeof Slider
    } = {}
  ) {
    const { SliderConstructor = Slider } = constructors
    this.slider = new SliderConstructor(
      this.props,
      this.refs,
      this.element,
      this.classDesign,
      this.className,
      this.components as any,
      this.slots as any,
      this.emits as any
    )
  }

  /**
   * Computed display string for minimum value.
   */
  readonly textMin = computed<string>(() => {
    return String(this.slider.valueMin.value)
  })

  /**
   * Computed display string for maximum value.
   */
  readonly textMax = computed<string>(() => {
    return String(this.slider.valueMax.value)
  })

  /**
   * Computed string representation of the current value for the header label.
   */
  readonly textLabel = computed<string>(() => {
    if (this.props.multiple) {
      return `${this.textMin.value} – ${this.textMax.value}`
    }
    return this.textMax.value
  })

  /**
   * Formatted string representing the hidden form input value.
   */
  readonly propValueString = computed<string>(() => {
    if (Array.isArray(this.slider.currentValue.value)) {
      return this.slider.currentValue.value.join(',')
    }
    return String(this.slider.currentValue.value)
  })

  /**
   * Process numeric input from min/max text fields.
   * @param inputValue target value number
   * @param type min or max field
   */
  onInputMinMax(inputValue: number, type: 'min' | 'max'): void {
    this.slider.focusThumb.value = type
    this.slider.updateValueByThumb(inputValue, 'on-input')
    this.slider.updateValueByThumb(inputValue, 'on-change')
  }

  /**
   * Forward input event from slider.
   * @param payload event payload
   */
  readonly onSelect = (payload: SliderEventPayload): void => {
    this.emits?.('on-input', payload)
    this.emits?.('update:value', payload.value)
    this.emits?.('update:modelValue', payload.value)
  }

  /**
   * Forward change event from slider.
   * @param payload event payload
   */
  readonly onChange = (payload: SliderEventPayload): void => {
    this.emits?.('on-change', payload)
  }
}
