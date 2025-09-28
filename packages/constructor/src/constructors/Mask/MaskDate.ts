import { computed } from 'vue'
import { Datetime } from '@dxtmisha/functional'

import { MaskType } from './MaskType'

import type { FieldMasks, FieldPatternElement, FieldPatternList } from '../../types/fieldTypes'
import type { MaskProps } from './props'

const PATTERN_FOR_DATE: FieldPatternList = {
  Y: '[0-9]{4}',
  M: {
    type: 'number',
    min: '1',
    max: '12'
  },
  D: (item: FieldMasks): FieldPatternElement => {
    const date = new Datetime(`${item?.Y?.value ?? '2000'}-${item?.M?.value ?? '01'}-01`)

    return {
      type: 'number',
      min: '1',
      max: date.getMaxDay().toString()
    }
  },
  h: {
    type: 'number',
    min: '0',
    max: '23'
  },
  m: {
    type: 'number',
    min: '0',
    max: '59'
  },
  s: {
    type: 'number',
    min: '0',
    max: '59'
  }
}
const VIEW_LIST: Record<string, string> = {
  Y: 'y',
  M: 'm',
  D: 'd',
  h: 'h',
  m: 'm',
  s: 's'
}

/**
 * Class for working with date/time masks (date, datetime, time etc.).
 *
 * Класс для работы с масками даты/времени (date, datetime, time и т.п.).
 */
export class MaskDate {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type mask type helper/ объект помощник типа маски
   */
  constructor(
    protected readonly props: MaskProps,
    protected readonly type: MaskType
  ) {
  }

  /** Mask template for current date type / Шаблон маски для текущего типа даты */
  readonly mask = computed<string[]>(() => {
    return this.getDatetime()
      .setHour24(true)
      .locale(undefined, '2-digit')
      .replace('1987', 'YYYY')
      .replace('12', 'MM')
      .replace('18', 'DD')
      .replace('10', 'hh')
      .replace('20', 'mm')
      .replace('30', 'ss')
      .split('')
  })

  /**
   * Returns base Datetime helper for given value (or default stub).
   *
   * Возвращает базовый помощник Datetime для значения (или дефолтный шаблон).
   * @param date filled date string/ заполненная строка даты
   */
  getDatetime(date?: string): Datetime {
    return new Datetime(date ?? '1987-12-18T10:20:30', this.type.getByDate(), this.props.language)
  }

  /**
   * Returns localized formatted date/time value.
   *
   * Возвращает локализованное форматированное значение даты/времени.
   * @param date filled date string/ заполненная строка даты
   */
  getValue(date?: string): string {
    return this.getDatetime(date).locale(undefined, '2-digit')
  }

  /**
   * Returns standardized (ISO-like) date/time value or empty if invalid.
   *
   * Возвращает стандартизированное (похоже на ISO) значение или пустую строку при невалидности.
   * @param date masks data grouped by parts/ данные масок, сгруппированные по частям
   */
  getValueStandard(date: FieldMasks): string {
    const value = this.getValueStandardFull(date)
    return value === '' ? '' : this.getDatetime(value).standard(false)
  }

  /**
   * Returns full raw date/time string assembled from groups (or empty if invalid).
   *
   * Возвращает полную «сырую» строку даты/времени, собранную из групп (или пусто если невалидно).
   * @param date masks data grouped by parts/ данные масок, сгруппированные по частям
   */
  getValueStandardFull(date: FieldMasks): string {
    const value = `${date?.Y?.value || '2000'}`
      + `-${date?.M?.value || '01'}`
      + `-${date?.D?.value || '01'}`
      + `T${date?.h?.value || '00'}`
      + `:${date?.m?.value || '00'}`
      + `:${date?.s?.value || '00'}`

    return isNaN(Date.parse(value)) ? '' : value
  }

  /**
   * Returns validation patterns object for date/time parts.
   *
   * Возвращает объект паттернов валидации для частей даты/времени.
   */
  getPattern(): FieldPatternList {
    return PATTERN_FOR_DATE
  }

  /** Returns list of date-only group symbols/ Возвращает список символов для даты */
  getSpecialDate(): string[] {
    return ['Y', 'M', 'D']
  }

  /** Returns list of full date-time group symbols/ Возвращает список символов для даты и времени */
  getSpecialFull(): string[] {
    return [...this.getSpecialDate(), 'h', 'm', 's']
  }

  /**
   * Returns display symbol for group.
   *
   * Возвращает отображаемый символ для группы.
   * @param groupName group name/ название группы
   */
  getView(groupName: string): string | undefined {
    return VIEW_LIST?.[groupName]
  }
}
