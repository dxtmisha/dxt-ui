import type { SliderFieldValue } from './SliderFieldValue'
import type { SliderFieldProps } from './props'

/**
 * Class for managing minimum, maximum and formatted text labels for SliderField.
 *
 * Класс для управления минимальными, максимальными и форматированными текстовыми метками для SliderField.
 */
export class SliderFieldLabel {
  /**
   * Constructor
   * @param props input properties / входящие свойства
   * @param valueItem slider field value instance / экземпляр значения поля слайдера
   */
  constructor(
    protected readonly props: SliderFieldProps,
    protected readonly valueItem: SliderFieldValue
  ) { }

  /**
   * Minimum text label or placeholder / Текстовая метка или плейсхолдер для минимума
   * @returns min label string / строка метки минимума
   */
  get min(): string {
    return String(this.valueItem.min)
  }

  /**
   * Maximum text label or placeholder / Текстовая метка или плейсхолдер для максимума
   * @returns max label string / строка метки максимума
   */
  get max(): string {
    return String(this.valueItem.max)
  }

  /**
   * Formatted string representation of the current value / Форматированное строковое представление текущего значения
   * @returns label string representation / строковое представление метки
   */
  get label(): string {
    if (this.props.multiple) {
      return `${this.min} - ${this.max}`
    }

    return String(this.valueItem.max)
  }

  /**
   * Calculates and returns label properties object for field label rendering.
   *
   * Вычисляет и возвращает объект свойств метки для рендеринга заголовка поля.
   * @returns label properties / свойства метки
   */
  get labelProps(): Record<string, any> {
    const separator = this.props.labelSeparator ?? ': '

    return {
      ...this.props,
      label: this.props.showValueInLabel
        ? `${this.props.label ? this.props.label + separator : ''}${this.label}`
        : this.props.label
    }
  }
}
