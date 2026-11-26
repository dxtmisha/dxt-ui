// ai-none

import { type ConstrBind, isNull } from '@dxtmisha/functional'

import type { FieldLabelPropsInclude } from '../FieldLabel'
import type { SliderFieldProps } from './props'
import type { SliderFieldValue } from './SliderFieldValue'

/**
 * Class for managing minimum, maximum, and formatted text labels for SliderField.
 * Builds display strings for single or range values and prepares FieldLabel bindings.
 *
 * Класс для управления минимальными, максимальными и форматированными текстовыми метками для SliderField.
 * Формирует строки отображения для одиночных значений или диапазона и подготавливает привязки для FieldLabel.
 */
export class SliderFieldLabel {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входящие свойства
   * @param valueItem getter returning slider field value instance / функция, возвращающая экземпляр значения поля слайдера
   */
  constructor(
    protected readonly props: Readonly<SliderFieldProps>,
    protected readonly valueItem: () => SliderFieldValue
  ) { }

  /**
   * Minimum text label or placeholder.
   *
   * Текстовая метка или плейсхолдер для минимума.
   * @returns min label string / строка метки минимума
   */
  get min(): string {
    return String(this.valueItem().min)
  }

  /**
   * Maximum text label or placeholder.
   *
   * Текстовая метка или плейсхолдер для максимума.
   * @returns max label string / строка метки максимума
   */
  get max(): string {
    return String(this.valueItem().max)
  }

  /**
   * Formatted string representation of the current value.
   *
   * Форматированное строковое представление текущего значения.
   * @returns label string representation / строковое представление метки
   */
  get label(): string {
    if (this.props.multiple) {
      return `${this.min} - ${this.max}`
    }

    return this.max
  }

  /**
   * Calculates and returns label properties object for field label rendering.
   *
   * Вычисляет и возвращает объект свойств метки для рендеринга заголовка поля.
   * @returns label properties / свойства метки
   */
  get labelProps(): ConstrBind<FieldLabelPropsInclude> {
    const separator = this.props.labelSeparator ?? ': '
    const hasLabel = !isNull(this.props.label) && this.props.label !== ''

    return {
      ...this.props,
      label: this.props.showValueInLabel
        ? `${hasLabel ? `${this.props.label}${separator}` : ''}${this.label}`
        : this.props.label
    }
  }
}
