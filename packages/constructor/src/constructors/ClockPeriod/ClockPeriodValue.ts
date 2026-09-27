import { isFilled } from '@dxtmisha/functional'
import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { ClockPeriodProps } from './props'
import type { ClockPeriodType } from './basicTypes'

/**
 * Class for managing period value (AM / PM) for ClockPeriod.
 * Synchronizes with model value and deduces period from hour prop if provided.
 *
 * Класс для управления значением периода (AM / PM) для ClockPeriod.
 * Синхронизируется со значением модели и определяет период по свойству часа, если оно передано.
 */
export class ClockPeriodValue {
  /**
   * Constructor
   * @param props component input properties / входные свойства компонента
   * @param model model value helper instance / экземпляр помощника значения модели
   */
  constructor(
    protected readonly props: ClockPeriodProps,
    protected readonly model: ModelValueInclude<ClockPeriodType>
  ) {}

  /**
   * Current selected period value ('am' or 'pm').
   *
   * Текущее выбранное значение периода ('am' или 'pm').
   * @returns selected period value / выбранное значение периода
   */
  get value(): ClockPeriodType {
    const modelValue = this.model.getValue()

    if (modelValue) {
      return String(modelValue).toLowerCase() as ClockPeriodType
    }

    if (isFilled(this.props.hour)) {
      return this.props.hour >= 12 ? 'pm' : 'am'
    }

    return 'am'
  }

  /**
   * Checks whether the current period is AM.
   *
   * Проверяет, является ли текущий период AM.
   * @returns true if AM / true, если AM
   */
  isAm(): boolean {
    return this.value === 'am'
  }

  /**
   * Checks whether the current period is PM.
   *
   * Проверяет, является ли текущий период PM.
   * @returns true if PM / true, если PM
   */
  isPm(): boolean {
    return this.value === 'pm'
  }

  /**
   * Checks whether the specified period is selected.
   *
   * Проверяет, выбран ли указанный период.
   * @param period period to check / проверяемый период
   * @returns true if selected / true, если выбран
   */
  isSelected(period: ClockPeriodType): boolean {
    return this.value === period
  }

  /**
   * Sets new period value.
   *
   * Устанавливает новое значение периода.
   * @param value period value to set / устанавливаемое значение периода
   */
  set(value?: ClockPeriodType): void {
    this.model.set(value)
  }

  /**
   * Selects AM period.
   *
   * Выбирает период AM.
   */
  setAm(): void {
    this.set('am')
  }

  /**
   * Selects PM period.
   *
   * Выбирает период PM.
   */
  setPm(): void {
    this.set('pm')
  }

  /**
   * Toggles between AM and PM.
   *
   * Переключает между AM и PM.
   */
  toggle(): void {
    this.set(this.isAm() ? 'pm' : 'am')
  }
}
