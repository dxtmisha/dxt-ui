import {
  type ConstrItems,
  DesignLogicAbstract,
  GeoRef,
  GeoUnit,
  isFilled,
  isNull,
  isNumber,
  isString,
  type NumberOrString
} from '@dxtmisha/functional'

import type { FormattedUnitProps } from './props'
import type { FormattedUnitComponents, FormattedUnitEmits, FormattedUnitSlots } from './types'

/** FormattedUnit dependency constructors type / Тип конструкторов зависимостей FormattedUnit */
export type FormattedUnitConstructors = {}

/**
 * Class for managing unit formatting and automatic conversions.
 * Formats measurement values with locale-based unit conversion via `GeoUnit` and reactive `GeoRef`.
 *
 * Класс для управления логикой форматирования единиц измерения и автоматической конвертации.
 * Форматирует значения величин с региональной конвертацией единиц измерения через `GeoUnit` и реактивный `GeoRef`.
 */
export class FormattedUnit extends DesignLogicAbstract<
  HTMLSpanElement,
  FormattedUnitComponents,
  FormattedUnitEmits,
  FormattedUnitSlots,
  FormattedUnitProps,
  FormattedUnitConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<FormattedUnitConstructors> = {}

  /**
   * Returns the formatted string value according to locale and unit conversion settings.
   *
   * Возвращает отформатированное строковое значение с учётом настроек локали и конвертации единиц измерения.
   * @returns formatted value / отформатированное значение
   */
  get item(): string {
    const value = this.props.value
    const unitKey = this.props.unit

    if (
      this.isFormatting()
      && this.isFormattable(value)
      && isFilled(unitKey)
    ) {
      return this.getUnit().format(value, unitKey)
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

    return isNumber(value) && Number.isFinite(value)
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
   * Returns the GeoUnit instance for the configured language or reactive global locale.
   *
   * Возвращает экземпляр GeoUnit для указанного языка или реактивной глобальной локали.
   * @returns GeoUnit formatter instance / экземпляр форматировщика GeoUnit
   */
  protected getUnit(): GeoUnit {
    return GeoUnit.getInstance(
      isFilled(this.props.language)
        ? this.props.language
        : GeoRef.getLocation().value
    )
  }
}
