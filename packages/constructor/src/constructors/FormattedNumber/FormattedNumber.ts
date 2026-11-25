import {
  type ConstrItems,
  DesignLogicAbstract,
  GeoIntl,
  GeoRef,
  isFilled,
  isNull,
  isNumber,
  isString,
  type NumberOrString
} from '@dxtmisha/functional'

import type { FormattedNumberProps } from './props'
import type { FormattedNumberComponents, FormattedNumberEmits, FormattedNumberSlots } from './types'

/** FormattedNumber dependency constructors type / Тип конструкторов зависимостей FormattedNumber */
export type FormattedNumberConstructors = {}

/**
 * Class for managing number, currency, and unit formatting logic.
 * Formats numeric values according to locale, currency, and unit settings via `GeoIntl` and reactive `GeoRef`.
 *
 * Класс для управления логикой форматирования чисел, валют и единиц измерения.
 * Форматирует числовые значения согласно настройкам локали, валюты и единицы измерения через `GeoIntl` и реактивный `GeoRef`.
 */
export class FormattedNumber extends DesignLogicAbstract<
  HTMLSpanElement,
  FormattedNumberComponents,
  FormattedNumberEmits,
  FormattedNumberSlots,
  FormattedNumberProps,
  FormattedNumberConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<FormattedNumberConstructors> = {}

  /**
   * Returns the formatted string value according to locale, currency, and unit settings.
   *
   * Возвращает отформатированное строковое значение с учётом настроек локали, валюты и единицы измерения.
   * @returns formatted value / отформатированное значение
   */
  get item(): string {
    const value = this.props.value

    if (
      this.isFormatting()
      && this.isFormattable(value)
    ) {
      const intl = this.getIntl()

      if (isFilled(this.props.currency)) {
        return intl.currency(value, this.props.currency)
      }

      if (isFilled(this.props.unit)) {
        return intl.unit(value, this.props.unit)
      }

      return intl.number(value)
    }

    if (isNull(value)) {
      return ''
    }

    return value.toString()
  }

  /**
   * Checks whether the input value can be formatted as a numeric value.
   * Preserves valid zero values (`0`, `-0`, `'0'`, `' 0 '`) while excluding empty strings and non-finite numbers.
   *
   * Проверяет, можно ли отформатировать входное значение как числовое.
   * Сохраняет корректные нулевые значения (`0`, `-0`, `'0'`, `' 0 '`), исключая пустые строки и неконечные числа.
   * @param value input value to check / входное значение для проверки
   * @returns true if the value is formattable / true, если значение можно отформатировать
   */
  protected isFormattable(value?: NumberOrString): value is NumberOrString {
    if (isString(value)) {
      return isFilled(value.trim(), true)
    }

    return isNumber(value)
  }

  /**
   * Checks whether value formatting is enabled (defaults to `true` when omitted).
   *
   * Проверяет, включено ли форматирование значения (по умолчанию `true`, если не указано).
   * @returns true if formatting is enabled / true, если форматирование включено
   */
  protected isFormatting(): boolean {
    return this.props.formatting !== false
  }

  /**
   * Returns the GeoIntl instance for the configured language or reactive global locale.
   *
   * Возвращает экземпляр GeoIntl для указанного языка или реактивной глобальной локали.
   * @returns GeoIntl formatter instance / экземпляр форматировщика GeoIntl
   */
  protected getIntl(): GeoIntl {
    return new GeoIntl(
      isFilled(this.props.language)
        ? this.props.language
        : GeoRef.getLocation().value
    )
  }
}
