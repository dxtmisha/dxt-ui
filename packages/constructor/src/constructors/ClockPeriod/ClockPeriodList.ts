import { computed, type ComputedRef } from 'vue'
import type { EnabledInclude } from '../../classes/EnabledInclude'
import type { TextInclude } from '../../classes/TextInclude'
import type { ClockPeriodValue } from './ClockPeriodValue'
import type { ClockPeriodItem, ClockPeriodType } from './basicTypes'

/**
 * Class for managing the list of period items (AM and PM) for ClockPeriod.
 *
 * Класс для управления списком элементов периода (AM и PM) для ClockPeriod.
 */
export class ClockPeriodList {
  /**
   * Computed list of period items (AM and PM).
   *
   * Вычисляемый список элементов периода (AM и PM).
   */
  readonly items: ComputedRef<ClockPeriodItem[]> = computed(() => {
    return [
      this.getItem('am'),
      this.getItem('pm')
    ]
  })

  /**
   * Constructor
   * @param text text manager instance / экземпляр менеджера текста
   * @param value period value manager instance / экземпляр менеджера значения периода
   * @param enabled enabled state manager instance / экземпляр менеджера состояния активности
   */
  constructor(
    protected readonly text: TextInclude,
    protected readonly value: ClockPeriodValue,
    protected readonly enabled: EnabledInclude
  ) {}

  /**
   * Generates a period item data object for the given period.
   *
   * Формирует объект данных элемента периода для указанного периода.
   * @param period period type ('am' or 'pm') / тип периода ('am' или 'pm')
   * @returns period item data / данные элемента периода
   */
  getItem(period: ClockPeriodType): ClockPeriodItem {
    const isAmPeriod = period === 'am'
    const label = isAmPeriod
      ? (this.text.am ?? 'AM')
      : (this.text.pm ?? 'PM')

    return {
      value: period,
      label,
      selected: this.value.isSelected(period),
      disabled: !this.enabled.isEnabled
    }
  }
}
