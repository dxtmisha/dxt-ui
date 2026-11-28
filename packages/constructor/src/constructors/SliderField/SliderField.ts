import type { Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  isNull
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude'
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude'
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { TextInclude } from '../../classes/TextInclude'

import { FieldLabelInclude } from '../FieldLabel'
import { FieldMessageInclude } from '../FieldMessage'
import { IconTrailingInclude } from '../Icon'
import { type SliderValueType } from '../Slider'

import { SliderFieldEvent } from './SliderFieldEvent'
import { SliderFieldLabel } from './SliderFieldLabel'
import { SliderFieldValue } from './SliderFieldValue'

import type { AriaList } from '../../types/ariaTypes'
import type { SliderFieldProps } from './props'
import type { SliderFieldComponents, SliderFieldEmits, SliderFieldSlots } from './types'

/** SliderField dependency constructors type / Тип конструкторов зависимостей SliderField */
export type SliderFieldConstructors = {
  /** Field attributes include constructor / Конструктор атрибутов поля */
  attributes: typeof FieldAttributesInclude
  /** Field change include constructor / Конструктор отслеживания изменений поля */
  change: typeof FieldChangeInclude
  /** Field code include constructor / Конструктор кодов ошибок поля */
  code: typeof FieldCodeInclude
  /** Field event include constructor / Конструктор событий поля */
  event: typeof FieldEventInclude
  /** Field label include constructor / Конструктор включения метки поля */
  fieldLabel: typeof FieldLabelInclude
  /** Field message include constructor / Конструктор включения сообщения поля */
  fieldMessage: typeof FieldMessageInclude
  /** Field form include constructor / Конструктор интеграции с формой */
  form: typeof FieldFormInclude
  /** Icon trailing include constructor / Конструктор включения иконок */
  icon: typeof IconTrailingInclude
  /** Slider field label text constructor / Конструктор меток текста поля слайдера */
  label: typeof SliderFieldLabel
  /** Slider field event constructor / Конструктор событий поля слайдера */
  sliderEvent: typeof SliderFieldEvent
  /** Text include constructor / Конструктор локализованных текстов */
  text: typeof TextInclude
  /** Field validation include constructor / Конструктор валидации поля */
  validation: typeof FieldValidationInclude
  /** Field value include constructor / Конструктор значения поля */
  value: typeof FieldValueInclude<SliderValueType>
  /** Slider field value constructor / Конструктор значения поля слайдера */
  valueItem: typeof SliderFieldValue
}

/**
 * SliderField logic orchestrator class.
 * Coordinates field label, field message, slider picker, input handlers, values, validation, and form integration.
 *
 * Оркестраторный класс логики SliderField.
 * Координирует метку поля, сообщение поля, ползунок слайдера, обработчики ввода, значения, валидацию и интеграцию с формой.
 */
export class SliderField extends DesignLogicAbstract<
  HTMLDivElement,
  SliderFieldComponents,
  SliderFieldEmits,
  SliderFieldSlots,
  SliderFieldProps,
  SliderFieldConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SliderFieldConstructors> = {
    attributes: {
      item: FieldAttributesInclude,
      parameters: () => [this.props]
    },
    change: {
      item: FieldChangeInclude,
      parameters: () => [this.props]
    },
    code: {
      item: FieldCodeInclude,
      parameters: () => [this.props]
    },
    event: {
      item: FieldEventInclude,
      parameters: () => [
        this.props,
        () => this.i('change'),
        () => this.i('value'),
        () => this.i('validation'),
        this.emits,
        () => this.callInstance('form', item => item)
      ]
    },
    fieldLabel: {
      item: FieldLabelInclude,
      canCreate: () => FieldLabelInclude.is(this.props) || Boolean(this.props.showValueInLabel),
      parameters: () => [
        () => this.i('label').labelProps,
        this.naming,
        this.components
      ]
    },
    fieldMessage: {
      item: FieldMessageInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        () => this.i('validation').message
      ]
    },
    form: {
      item: FieldFormInclude,
      canCreate: () => FieldFormInclude.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('value'),
        () => this.i('validation')
      ]
    },
    icon: {
      item: IconTrailingInclude,
      canCreate: () => IconTrailingInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    label: {
      item: SliderFieldLabel,
      parameters: () => [
        this.props,
        () => this.i('valueItem')
      ]
    },
    sliderEvent: {
      item: SliderFieldEvent,
      parameters: () => [
        this.props,
        () => this.i('event'),
        () => this.i('valueItem')
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    validation: {
      item: FieldValidationInclude,
      parameters: () => [
        this.props,
        () => this.i('attributes'),
        () => this.i('value'),
        () => this.i('change'),
        () => this.i('code'),
        undefined,
        this.isMounted
      ]
    },
    value: {
      item: FieldValueInclude<SliderValueType>,
      parameters: () => [
        this.props,
        undefined,
        undefined,
        false,
        false,
        true
      ]
    },
    valueItem: {
      item: SliderFieldValue,
      parameters: () => [
        this.props,
        () => this.i('value')
      ]
    }
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param element root element reference / ссылка на корневой элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<SliderFieldProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<SliderFieldComponents, SliderFieldProps>,
    slots?: SliderFieldSlots,
    emits?: ConstrEmit<SliderFieldEmits>,
    constructors?: Partial<SliderFieldConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('value')
    this.i('event')
    this.i('validation')
    this.callInstance('form', item => item)
  }

  /**
   * Returns ARIA attributes for the maximum (or single) numeric input field.
   *
   * Возвращает ARIA-атрибуты для числового поля максимального (или одиночного) значения.
   * @returns ARIA attributes map / карта ARIA-атрибутов
   */
  get ariaInputMax(): AriaList {
    return AriaStaticInclude.label(this.getInputAriaLabel('max'))
  }

  /**
   * Returns ARIA attributes for the minimum numeric input field.
   *
   * Возвращает ARIA-атрибуты для числового поля минимального значения.
   * @returns ARIA attributes map / карта ARIA-атрибутов
   */
  get ariaInputMin(): AriaList {
    return AriaStaticInclude.label(this.getInputAriaLabel('min'))
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

  /**
   * Delegates slider value change commit to the lazy slider event handler.
   *
   * Делегирует подтверждение изменения значения слайдера ленивому обработчику событий слайдера.
   */
  readonly onSliderChange = (): void => {
    this.i('sliderEvent').onSliderChange()
  }

  /**
   * Delegates slider value input to the lazy slider event handler.
   *
   * Делегирует ввод значения слайдера ленивому обработчику событий слайдера.
   * @param value selected value or range / выбранное значение или диапазон
   */
  readonly onSliderInput = (value: SliderValueType): void => {
    this.i('sliderEvent').onSliderInput(value)
  }

  /**
   * Builds a localized accessible label for numeric min/max input fields.
   *
   * Формирует локализованную подпись доступности для числовых полей минимума и максимума.
   * @param bound target bound type / тип границы значения
   * @returns accessible label string or undefined / строка подписи доступности или undefined
   */
  protected getInputAriaLabel(bound: 'min' | 'max'): string | undefined {
    const hasLabel = !isNull(this.props.label) && String(this.props.label) !== ''
    const baseLabel = hasLabel ? String(this.props.label) : undefined

    if (
      bound === 'max'
      && !this.props.multiple
      && baseLabel
    ) {
      return baseLabel
    }

    const boundText = bound === 'min'
      ? this.i('text').min
      : this.i('text').max

    if (baseLabel && boundText) {
      return `${baseLabel} (${boundText})`
    }

    return boundText ?? baseLabel
  }
}
