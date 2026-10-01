import { ref, watch } from 'vue'
import { isFilled } from '@dxtmisha/functional'

import { ClockPeriodType } from './basicTypes'
import type { ClockPeriodProps } from './props'

/**
 * Class for managing period value (AM / PM) for ClockPeriod.
 * Synchronizes with model value and deduces period from hour prop if provided.
 *
 * Класс для управления значением периода (AM / PM) для ClockPeriod.
 * Синхронизируется со значением модели и определяет период по свойству часа, если оно передано.
 */
export class ClockPeriodValue {
  /** Reactive reference to the period value ('am' or 'pm') / Реактивная ссылка на значение периода ('am' или 'pm') */
  readonly value = ref<ClockPeriodType>(ClockPeriodType.am)

  /**
   * Constructor
   * @param props component input properties / входные свойства компонента
   */
  constructor(
    protected readonly props: ClockPeriodProps
  ) {
    this.value.value = this.initValue()

    watch(
      () => this.props.modelValue ?? this.props.value,
      () => {
        this.value.value = this.initValue()
      }
    )
  }

  /**
   * Checks whether the current period is AM.
   *
   * Проверяет, является ли текущий период AM.
   * @returns true if AM / true, если AM
   */
  isAm(): boolean {
    return this.value.value === ClockPeriodType.am
  }

  /**
   * Checks whether the current period is PM.
   *
   * Проверяет, является ли текущий период PM.
   * @returns true if PM / true, если PM
   */
  isPm(): boolean {
    return this.value.value === ClockPeriodType.pm
  }

  /**
   * Checks whether the specified period is selected.
   *
   * Проверяет, выбран ли указанный период.
   * @param period period to check / проверяемый период
   * @returns true if selected / true, если выбран
   */
  isSelected(period: ClockPeriodType): boolean {
    return this.value.value === period
  }

  /**
   * Returns current selected period value ('am' or 'pm').
   *
   * Возвращает текущее выбранное значение периода ('am' или 'pm').
   * @returns selected period value / выбранное значение периода
   */
  get(): ClockPeriodType {
    return this.value.value
  }

  /**
   * Sets new period value.
   *
   * Устанавливает новое значение периода.
   * @param value period value to set / устанавливаемое значение периода
   */
  set(value?: ClockPeriodType): void {
    this.value.value = value ?? this.initValue()
  }

  /**
   * Selects AM period.
   *
   * Выбирает период AM.
   */
  setAm(): void {
    this.set(ClockPeriodType.am)
  }

  /**
   * Selects PM period.
   *
   * Выбирает период PM.
   */
  setPm(): void {
    this.set(ClockPeriodType.pm)
  }

  /**
   * Toggles between AM and PM.
   *
   * Переключает между AM и PM.
   */
  toggle(): void {
    this.set(this.isAm() ? ClockPeriodType.pm : ClockPeriodType.am)
  }

  /**
   * Initializes or calculates the current period value.
   *
   * Инициализирует или рассчитывает текущее значение периода.
   * @returns calculated period value / рассчитанное значение периода
   */
  protected initValue(): ClockPeriodType {
    const value = this.props.modelValue ?? this.props.value

    if (value) {
      return String(value).toLowerCase() as ClockPeriodType
    }

    if (isFilled(this.props.hour)) {
      return this.props.hour >= 12
        ? ClockPeriodType.pm
        : ClockPeriodType.am
    }

    return ClockPeriodType.am
  }
}
