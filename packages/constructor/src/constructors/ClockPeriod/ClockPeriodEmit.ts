import type { ConstrEmit } from '@dxtmisha/functional'
import type { ClockPeriodEmits } from './types'
import type { ClockPeriodItem, ClockPeriodType } from './basicTypes'

/**
 * Class for managing event emissions for ClockPeriod.
 *
 * Класс для управления отправкой событий для ClockPeriod.
 */
export class ClockPeriodEmit {
  /**
   * Constructor
   * @param emits emit trigger function / функция отправки событий
   */
  constructor(
    protected readonly emits?: ConstrEmit<ClockPeriodEmits>
  ) {}

  /**
   * Triggers input event when a period item is selected.
   *
   * Вызывает событие ввода при выборе элемента периода.
   * @param item selected period item / выбранный элемент периода
   * @param value selected period value / выбранное значение периода
   */
  onInput(item: ClockPeriodItem, value: ClockPeriodType): void {
    this.emits?.('input', { item, value }, value)
    this.emits?.('inputLite', value)
    this.emits?.('update:value', value)
    this.emits?.('update:modelValue', value)
  }

  /**
   * Triggers change event when a period item selection is confirmed.
   *
   * Вызывает событие изменения при подтверждении выбора элемента периода.
   * @param item selected period item / выбранный элемент периода
   * @param value selected period value / выбранное значение периода
   */
  onChange(item: ClockPeriodItem, value: ClockPeriodType): void {
    this.emits?.('change', { item, value }, value)
    this.emits?.('changeLite', value)
  }
}
