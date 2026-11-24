import { ref, watch, type Ref, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract, isNumber, isString } from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'

import { ClockPeriodType } from './basicTypes'
import type { ClockPeriodProps } from './props'

/**
 * Class for managing period value (AM / PM) for ClockPeriod.
 * Synchronizes with model value and provides methods for setting period by value or hour.
 *
 * Класс для управления значением периода (AM / PM) для ClockPeriod.
 * Синхронизируется со значением модели и предоставляет методы для установки периода по значению или часу.
 */
export class ClockPeriodValue extends DesignLifecycleAbstract {
  /** Stop handle for the reactive props watcher / Функция остановки реактивного наблюдателя свойств */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor for ClockPeriodValue.
   *
   * Конструктор для ClockPeriodValue.
   * @param props component input properties / входные свойства компонента
   * @param model getter returning model synchronization manager / функция, возвращающая менеджер синхронизации модели
   */
  constructor(
    protected readonly props: Readonly<ClockPeriodProps>,
    protected readonly model?: () => ModelInclude<ClockPeriodType>
  ) {
    super()

    this.value.value = this.initValue()
  }

  /** Reactive reference to the period value ('am' or 'pm') / Реактивная ссылка на значение периода ('am' или 'pm') */
  readonly value: Ref<ClockPeriodType> = ref<ClockPeriodType>(ClockPeriodType.am)

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
  readonly get = (): ClockPeriodType => {
    return this.value.value
  }

  /**
   * Sets new period value and emits model synchronization when changed.
   *
   * Устанавливает новое значение периода и испускает синхронизацию модели при изменении.
   * @param value period value to set / устанавливаемое значение периода
   */
  readonly set = (value?: ClockPeriodType | string): void => {
    const nextValue = value !== undefined
      ? this.normalizeValue(value)
      : this.initValue()

    if (this.value.value !== nextValue) {
      this.value.value = nextValue
      this.model?.().emit(nextValue)
    }
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
   * Sets period value based on hour.
   *
   * Устанавливает значение периода по значению часа.
   * @param hour hour value / значение часа
   */
  readonly setByHour = (hour?: number | string): void => {
    if (isNumber(hour)) {
      this.set(Number(hour) >= 12 ? ClockPeriodType.pm : ClockPeriodType.am)
    }
  }

  /**
   * Registers reactive watcher for modelValue and value props on mount.
   *
   * Регистрирует реактивный наблюдатель для свойств modelValue и value при монтировании.
   */
  override readonly onMounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = watch(
      () => this.props.modelValue ?? this.props.value,
      this.update
    )
  }

  /**
   * Stops registered reactive watcher on unmount.
   *
   * Останавливает зарегистрированный реактивный наблюдатель при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
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
   * Updates internal value from props without triggering feedback model emits.
   *
   * Обновляет внутреннее значение из свойств без генерации обратных событий модели.
   */
  protected readonly update = (): void => {
    this.value.value = this.initValue()
  }

  /**
   * Initializes or calculates the current period value from props.
   *
   * Инициализирует или рассчитывает текущее значение периода из свойств.
   * @returns calculated period value / рассчитанное значение периода
   */
  protected initValue(): ClockPeriodType {
    return this.normalizeValue(this.props.modelValue ?? this.props.value)
  }

  /**
   * Normalizes an incoming period value to a valid ClockPeriodType.
   *
   * Нормализует входящее значение периода к допустимому ClockPeriodType.
   * @param value raw period value / исходное значение периода
   * @returns normalized period value / нормализованное значение периода
   */
  protected normalizeValue(value?: unknown): ClockPeriodType {
    if (isString(value)) {
      const normalized = value.trim().toLowerCase()

      if (normalized === ClockPeriodType.pm) {
        return ClockPeriodType.pm
      }
    }

    return ClockPeriodType.am
  }
}
