import { computed } from 'vue'
import { GeoIntl, strFill } from '@dxt-ui/functional'

import { MaskType } from './MaskType'
import { MaskRubberItem } from './MaskRubberItem'

import type { FieldMasks } from '../../types/fieldTypes'
import type { MaskSpecialList, MaskSpecialProp } from './basicTypes'
import type { MaskProps } from './props'

/**
 * Class for working with formatted number / currency masks.
 *
 * Класс для работы с форматированными масками числа / валюты.
 */
export class MaskFormat {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   * @param rubberItem rubber groups helper/ объект помощник резиновых групп
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly type: MaskType,
    protected readonly rubberItem: MaskRubberItem
  ) {
  }

  /** Special symbols configuration (groups) for numeric input / Конфигурация специальных символов (группы) для числового ввода */
  readonly special: MaskSpecialProp = {
    n: {},
    f: {
      defaultValue: '0'
    }
  }

  /** Rubber mask instructions (dynamic length per group) / Инструкции резиновой маски (динамическая длина по группам) */
  readonly rubber = computed<MaskSpecialList>(() => {
    return {
      n: {
        rubber: true,
        transitionChar: this.getDecimal(),
        maxLength: 10
      },
      f: {
        rubber: this.isFractionRubber(),
        maxLength: 4
      }
    }
  })

  /** Base view symbol per group / Базовый отображаемый символ для группы */
  readonly view = computed<string>(() => {
    if (this.type.isNumber()) {
      return String.fromCharCode(8288)
    }

    return '0'
  })

  /** Fraction digits count / Количество знаков после запятой */
  readonly fraction = computed<number>(() => {
    if (this.type.isCurrency()) {
      return 2
    }

    const fraction = this.props.fraction

    if (typeof fraction === 'number') {
      return fraction
    }

    if (
      typeof fraction === 'string'
      && fraction.match(/[0-9]+/)
    ) {
      return Number(fraction)
    }

    if (this.rubberItem.is('f')) {
      return this.rubberItem.getByIndex('f') + 1
    }

    if (fraction === true) {
      return 1
    }

    return 0
  })

  /** Returns mask characters for current numeric type / Возвращает символы маски для текущего числового типа */
  readonly mask = computed<string[]>(() => {
    if (this.type.isCurrency()) {
      return this.toSpecial(this.getCurrency())
    }

    if (this.type.isNumberFormat()) {
      return this.toSpecial(this.getNumberFormat())
    }

    return this.toSpecial(this.getNumber())
  })

  /**
   * Is fraction part rubber (dynamic)?
   *
   * Является ли дробная часть резиновой (динамичной)?
   */
  isFractionRubber(): boolean {
    return this.props.fraction === true
  }

  /**
   * Returns standardized raw numeric value (integer or integer.fraction).
   *
   * Возвращает стандартизированное «сырое» числовое значение (целое или целое.дробь).
   * @param value masks data object/ объект масок
   */
  getValueStandard(value: FieldMasks): string {
    if (this.type.isNumber()) {
      return value?.n?.value || ''
    }

    const number = `${value?.n?.value || '0'}.${value?.f?.value || '0'}`

    if (number === '0.0') {
      return '0'
    }

    return number
  }

  /** Returns base number mask string.
   *
   * Возвращает строку маски числа.
   */
  getNumber(): string {
    return this.getNumberForString()
  }

  /**
   * Returns formatted number mask string.
   *
   * Возвращает форматированную строку числа.
   */
  getNumberFormat(): string {
    return this.getIntl().number(this.getNumberForString(), { maximumFractionDigits: 9 })
  }

  /**
   * Returns currency mask string with appended currency symbol.
   *
   * Возвращает строку маски валюты с добавленным символом валюты.
   */
  getCurrency(): string {
    return this.getIntl().currency(
      this.getNumberForString(),
      undefined,
      this.props.currencyHide
    )
  }

  /**
   * Returns list of delimiter characters for switching to fraction part.
   *
   * Возвращает список символов-разделителей для перехода к дробной части.
   */
  getDecimal(): string[] {
    return [this.getIntl().decimal(), '.']
  }

  /**
   * Returns list of special group keys.
   *
   * Возвращает список ключей групп специальных символов.
   */
  getSpecial(): string[] {
    return Object.keys(this.special)
  }

  /**
   * Returns GeoIntl helper instance.
   *
   * Возвращает экземпляр помощника GeoIntl.
   */
  protected getIntl(): GeoIntl {
    return new GeoIntl(this.props.language)
  }

  /**
   * Builds base numeric pattern string (with optional fraction & currency).
   *
   * Формирует базовую строку числового паттерна (с необязательной дробью и валютой).
   */
  protected getNumberForString(): string {
    const fraction = this.fraction.value

    const number = strFill('9', this.rubberItem.getByIndex('n') + 1)
    const numberFraction = fraction ? `.${strFill('3', fraction)}` : ''
    const currency = this.type.isCurrency() && this.props.currency ? ` ${this.props.currency}` : ''

    return `${number}${numberFraction}${currency}`
  }

  /**
   * Converts digit markers (9/3) to group symbols (n/f).
   *
   * Преобразует цифровые маркеры (9/3) в групповые символы (n/f).
   */
  protected toSpecial(mask: string): string[] {
    return mask.replace(/9/ig, 'n')
      .replace(/3/ig, 'f')
      .split('')
  }
}
