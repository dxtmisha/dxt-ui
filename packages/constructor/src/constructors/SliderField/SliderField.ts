import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { IconTrailingInclude } from '../Icon'
import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { type SliderValueType } from '../Slider'

import { SliderFieldEvent } from './SliderFieldEvent'
import { SliderFieldLabel } from './SliderFieldLabel'
import { SliderFieldValue } from './SliderFieldValue'

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

  /** Field value include instance / Экземпляр значения поля */
  readonly value: FieldValueInclude<SliderValueType>
  /** Slider field value instance / Экземпляр значения поля слайдера */
  readonly valueItem: SliderFieldValue

  /** Field code include instance / Экземпляр кода поля */
  readonly code: FieldCodeInclude
  /** Field validation include instance / Экземпляр валидации поля */
  readonly validation: FieldValidationInclude
  /** Field form include instance / Экземпляр формы поля */
  readonly form: FieldFormInclude
  /** Field event include instance / Экземпляр событий поля */
  readonly event: FieldEventInclude
  /** Slider field event instance / Экземпляр событий поля слайдера */
  readonly sliderEvent: SliderFieldEvent

  /** Field label include instance / Экземпляр включения метки поля */
  readonly fieldLabel: FieldLabelInclude

  /** Field message include instance / Экземпляр включения сообщения поля */
  readonly fieldMessage: FieldMessageInclude

  /** Icon trailing include instance / Экземпляр включения иконки */
  readonly icon: IconTrailingInclude
  /** Slider field label text instance / Экземпляр меток текста поля слайдера */
  readonly label: SliderFieldLabel

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
   * @param constructors.FieldFormIncludeConstructor class for working with form / класс для работы с формой
   * @param constructors.FieldLabelIncludeConstructor class for working with field label / класс для работы с меткой поля
   * @param constructors.FieldMessageIncludeConstructor class for working with field message / класс для работы с сообщением поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation / класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value / класс для работы со значением поля
   * @param constructors.SliderFieldLabelConstructor class for working with slider field label / класс для работы с метками поля слайдера
   * @param constructors.SliderFieldValueConstructor class for working with slider field value / класс для работы со значением поля слайдера
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
      FieldEventIncludeConstructor?: typeof FieldEventInclude
      FieldFormIncludeConstructor?: typeof FieldFormInclude
      FieldLabelIncludeConstructor?: typeof FieldLabelInclude
      FieldMessageIncludeConstructor?: typeof FieldMessageInclude
      FieldValidationIncludeConstructor?: typeof FieldValidationInclude
      FieldValueIncludeConstructor?: typeof FieldValueInclude
      IconTrailingIncludeConstructor?: typeof IconTrailingInclude
      SliderFieldEventConstructor?: typeof SliderFieldEvent
      SliderFieldLabelConstructor?: typeof SliderFieldLabel
      SliderFieldValueConstructor?: typeof SliderFieldValue
    } = {}
  ) {
    const {
      FieldAttributesIncludeConstructor = FieldAttributesInclude,
      FieldChangeIncludeConstructor = FieldChangeInclude,
      FieldCodeIncludeConstructor = FieldCodeInclude,
      FieldEventIncludeConstructor = FieldEventInclude,
      FieldFormIncludeConstructor = FieldFormInclude,
      FieldLabelIncludeConstructor = FieldLabelInclude,
      FieldMessageIncludeConstructor = FieldMessageInclude,
      FieldValidationIncludeConstructor = FieldValidationInclude,
      FieldValueIncludeConstructor = FieldValueInclude,
      IconTrailingIncludeConstructor = IconTrailingInclude,
      SliderFieldEventConstructor = SliderFieldEvent,
      SliderFieldLabelConstructor = SliderFieldLabel,
      SliderFieldValueConstructor = SliderFieldValue
    } = constructors

    this.change = new FieldChangeIncludeConstructor(props)
    this.attributes = new FieldAttributesIncludeConstructor(props)

    this.value = new FieldValueIncludeConstructor<SliderValueType>(props, refs, undefined, undefined, false)
    this.valueItem = new SliderFieldValueConstructor(props, this.value)

    this.code = new FieldCodeIncludeConstructor(props)
    this.validation = new FieldValidationIncludeConstructor(
      props,
      this.attributes,
      this.value,
      this.change,
      this.code
    )
    this.form = new FieldFormIncludeConstructor(
      props,
      this.value,
      this.validation
    )
    this.event = new FieldEventIncludeConstructor(
      props,
      this.change,
      this.value,
      this.validation,
      emits,
      this.form
    )
    this.sliderEvent = new SliderFieldEventConstructor(
      props,
      this.event,
      this.valueItem
    )

    this.fieldLabel = new FieldLabelIncludeConstructor(
      this.className,
      () => this.label.labelProps,
      this.components
    )

    this.fieldMessage = new FieldMessageIncludeConstructor(
      this.className,
      props,
      this.components,
      undefined,
      undefined,
      () => this.validation.message
    )

    this.icon = new IconTrailingIncludeConstructor(props, this.className, this.components)
    this.label = new SliderFieldLabelConstructor(props, this.valueItem)
  }

  /**
   * Returns input name attribute value with optional suffix.
   *
   * Возвращает значение атрибута name для ввода с опциональным суффиксом.
   * @param suffix optional name suffix / опциональный суффикс имени
   * @returns name attribute string or undefined / значение атрибута name или undefined
   */
  getName(suffix?: string): string | undefined {
    if (this.props.name) {
      return suffix ? `${this.props.name}-${suffix}` : this.props.name
    }

    return undefined
  }
}
