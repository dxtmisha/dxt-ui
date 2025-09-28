import { computed } from 'vue'
import type { GeoDate } from '@dxtmisha/functional'

import type { MaskTypeItem } from './basicTypes'
import type { MaskProps } from './props'

/**
 * Class for defining the mask type.
 *
 * Класс для определения типа маски.
 */
export class MaskType {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: MaskProps
  ) {
  }

  /** Current mask type (default: text)/ Текущий тип маски (по умолчанию: text) */
  readonly item = computed<MaskTypeItem>(() => this.props.type ?? 'text')

  /**
   * Is the mask simple number type.
   *
   * Является ли маска простым числовым типом (number).
   */
  isNumber(): boolean {
    return this.item.value === 'number'
  }

  /**
   * Is the mask formatted number type (number-format).
   *
   * Является ли маска типом форматированного числа (number-format).
   */
  isNumberFormat(): boolean {
    return this.item.value === 'number-format'
  }

  /**
   * Is the mask currency type.
   *
   * Является ли маска валютным типом (currency).
   */
  isCurrency(): boolean {
    return this.item.value === 'currency'
  }

  /**
   * Is the mask one of numeric related types (number | number-format | currency).
   *
   * Является ли маска одним из числовых типов (number | number-format | currency).
   */
  isCurrencyOrNumber(): boolean {
    return this.isNumber() || this.isNumberFormat() || this.isCurrency()
  }

  /**
   * Is the mask one of the time input types.
   *
   * Является ли маска одним из типов для ввода времени.
   */
  isTime(): boolean {
    return [
      'full',
      'datetime',
      'time',
      'hour-minute',
      'hour',
      'minute',
      'second'
    ].indexOf(this.item.value) !== -1
  }

  /**
   * Is the mask one of the date (or time) input types.
   *
   * Является ли маска одним из типов для ввода даты (или времени).
   */
  isDate(): boolean {
    return this.isTime()
      || [
        'date',
        'year',
        'year-month',
        'month',
        'day',
        'day-month'
      ].indexOf(this.item.value) !== -1
  }

  /**
   * Returns GeoDate-compatible mask type (fallback: date).
   *
   * Возвращает тип маски совместимый с GeoDate (если нет — date).
   */
  getByDate(): GeoDate {
    return this.isDate() ? (this.item.value as GeoDate) : 'date'
  }
}
