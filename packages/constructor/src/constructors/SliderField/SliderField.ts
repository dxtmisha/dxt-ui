import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, toNumber } from '@dxtmisha/functional'

import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import { IconTrailingInclude } from '../Icon'
import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { type SliderValueType } from '../Slider'

import type { FieldElementInput } from '../../types/fieldTypes'
import type { SliderFieldComponents, SliderFieldEmits, SliderFieldSlots } from './types'
import type { SliderFieldProps } from './props'

/**
 * SliderField logic orchestrator class.
 * Coordinates field label, field message, slider picker, input handlers, values, validation, and ARIA bindings.
 *
 * Оркестраторный класс логики SliderField.
 * Координирует метку поля, сообщение поля, ползунок слайдера, обработчики ввода, значения, валидацию и привязки ARIA.
 */
export class SliderField {
  /** Field change include instance / Экземпляр отслеживания изменений поля */
  readonly change: FieldChangeInclude
  /** Field attributes include instance / Экземпляр атрибутов поля */
  readonly attributes: FieldAttributesInclude
  /** Field element include instance / Экземпляр HTML-элемента поля */
  readonly elementItem: FieldElementInclude
  /** Field value include instance / Экземпляр значения поля */
  readonly value: FieldValueInclude<SliderValueType>
  /** Field code include instance / Экземпляр кода поля */
  readonly code: FieldCodeInclude
  /** Field validation include instance / Экземпляр валидации поля */
  readonly validation: FieldValidationInclude
  /** Field event include instance / Экземпляр событий поля */
  readonly event: FieldEventInclude
  /** Field label include instance / Экземпляр включения метки поля */
  readonly fieldLabel: FieldLabelInclude
  /** Field message include instance / Экземпляр включения сообщения поля */
  readonly fieldMessage: FieldMessageInclude
  /** Icon trailing include instance / Экземпляр включения иконки */
  readonly icon: IconTrailingInclude

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
   * @param constructors object with classes / объект с классами
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes / класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change / класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code / класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element / класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event / класс для работы с событием поля
   * @param constructors.FieldLabelIncludeConstructor class for working with field label / класс для работы с меткой поля
   * @param constructors.FieldMessageIncludeConstructor class for working with field message / класс для работы с сообщением поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation / класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value / класс для работы со значением поля
   */
  constructor(
    protected readonly props: SliderFieldProps,
    protected readonly refs: ToRefs<SliderFieldProps>,
    protected readonly element: Ref<FieldElementInput>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SliderFieldComponents, SliderFieldProps>,
    protected readonly slots?: SliderFieldSlots,
    protected readonly emits?: ConstrEmit<SliderFieldEmits>,
    constructors: {
      FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude
      FieldChangeIncludeConstructor?: typeof FieldChangeInclude
      FieldCodeIncludeConstructor?: typeof FieldCodeInclude
      FieldElementIncludeConstructor?: typeof FieldElementInclude
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldLabelIncludeConstructor?: typeof FieldLabelInclude
      FieldMessageIncludeConstructor?: typeof FieldMessageInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude
      IconTrailingIncludeConstructor?: typeof IconTrailingInclude
    } = {}
  ) {
    const {
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldElementIncludeConstructor = FieldElementInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldLabelIncludeConstructor = FieldLabelInclude,
      FieldMessageIncludeConstructor = FieldMessageInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      IconTrailingIncludeConstructor = IconTrailingInclude
    } = constructors

    this.change = new FieldChangeIncludeConstructor(this.props)
    this.attributes = new FieldAttributesIncludeConstructor(this.props)

    this.elementItem = new FieldElementIncludeConstructor(
      this.props,
      this.element
    )

    this.value = new FieldValueIncludeConstructor<SliderValueType>(
      this.props,
      this.refs,
      this.elementItem
    )

    this.code = new FieldCodeIncludeConstructor(this.props)
    this.validation = new FieldValidationIncludeConstructor(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    )
    this.event = new FieldEventIncludeConstructor(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    )

    this.icon = new IconTrailingIncludeConstructor(this.props, this.className, this.components)

    this.fieldLabel = new FieldLabelIncludeConstructor(
      this.className,
      () => ({
        ...this.props,
        ...this.getLabel()
      }),
      this.components
    )

    this.fieldMessage = new FieldMessageIncludeConstructor(
      this.className,
      this.props,
      this.components,
      undefined,
      undefined,
      () => this.validation.message
    )
  }

  /** Minimum numeric value / Минимальное числовое значение */
  readonly valueMin = computed<number>(() => {
    const val = this.value.item.value

    if (this.props.multiple) {
      if (Array.isArray(val)) {
        return toNumber(val[0])
      }
    }

    return typeof val === 'number' ? val : toNumber(this.props.min ?? 0)
  })

  /** Maximum numeric value / Максимальное числовое значение */
  readonly valueMax = computed<number>(() => {
    const val = this.value.item.value

    if (this.props.multiple) {
      if (Array.isArray(val)) {
        return toNumber(val[1])
      }
    }

    return typeof val === 'number' ? val : toNumber(this.props.max ?? 100)
  })

  /** Minimum text label or placeholder / Текстовая метка или плейсхолдер для минимума */
  readonly labelMin = computed<string>(() => {
    return this.props.labelMin ?? String(this.valueMin.value)
  })

  /** Maximum text label or placeholder / Текстовая метка или плейсхолдер для максимума */
  readonly labelMax = computed<string>(() => {
    return this.props.labelMax ?? String(this.valueMax.value)
  })

  /** Formatted string representation of the current value / Форматированное строковое представление текущего значения */
  readonly textLabel = computed<string>(() => {
    if (this.props.multiple) {
      return `${this.labelMin.value} - ${this.labelMax.value}`
    }

    return String(this.valueMin.value)
  })

  /**
   * Calculates and returns label properties object for field label rendering.
   *
   * Вычисляет и возвращает объект свойств метки для рендеринга заголовка поля.
   * @returns label properties / свойства метки
   */
  getLabel(): Record<string, any> {
    const separator = this.props.labelSeparator ?? ': '

    return {
      label: this.props.showValueInLabel
        ? `${this.props.label ? this.props.label + separator : ''}${this.textLabel.value}`
        : this.props.label
    }
  }

  /**
   * Event handler when slider value is selected or dragged.
   *
   * Обработчик события при выборе или перетаскивании значения слайдера.
   * @param detailOrValue selected detail object or value / выбранный объект деталей или значение
   */
  readonly onSelect = (detailOrValue: any): void => {
    const val = typeof detailOrValue === 'object' && detailOrValue !== null && 'mark' in detailOrValue
      ? detailOrValue.mark
      : (typeof detailOrValue === 'object' && detailOrValue !== null && 'value' in detailOrValue ? detailOrValue.value : detailOrValue)

    this.event.onInput(val as any)
  }

  /**
   * Event handler when slider value change is committed.
   *
   * Обработчик события при подтверждении изменения значения слайдера.
   * @param detailOrValue committed detail object or value / подтвержденный объект деталей или значение
   */
  readonly onChange = (detailOrValue: any): void => {
    const val = typeof detailOrValue === 'object' && detailOrValue !== null && 'mark' in detailOrValue
      ? detailOrValue.mark
      : (typeof detailOrValue === 'object' && detailOrValue !== null && 'value' in detailOrValue ? detailOrValue.value : detailOrValue)

    this.event.onChange(val as any)
  }

  /**
   * Input handler for numeric input fields.
   *
   * Обработчик ввода для числовых полей ввода.
   * @param event input event / событие ввода
   */
  readonly onInput = (event: Event): void => {
    const target = event.target as HTMLInputElement
    const val = parseFloat(target.value) || 0
    const type = target.dataset.type

    if (this.props.multiple) {
      const min = type === 'min' ? val : this.valueMin.value
      const max = type === 'max' ? val : this.valueMax.value

      this.onSelect([min, max])
    } else {
      this.onSelect(val)
    }
  }

  /**
   * Focus handler for numeric input fields.
   *
   * Обработчик фокуса для числовых полей ввода.
   * @param event focus event / событие фокуса
   */
  readonly onFocus = (event: FocusEvent): void => {
    const target = event.target as HTMLInputElement

    switch (target.dataset.type) {
      case 'min':
        target.value = String(this.valueMin.value)
        break
      case 'max':
        target.value = String(this.valueMax.value)
        break
    }
  }

  /**
   * Blur handler for numeric input fields.
   *
   * Обработчик потери фокуса для числовых полей ввода.
   * @param event blur event / событие потери фокуса
   */
  readonly onBlur = (event: FocusEvent): void => {
    const target = event.target as HTMLInputElement

    target.value = ''
  }
}
