import type { EnabledInclude } from '../../classes/EnabledInclude'
import type { EventClickInclude } from '../../classes/EventClickInclude'

import type { ClockPeriodValue } from './ClockPeriodValue'

import type { EventClickValue } from '../../types/eventClickTypes'
import { ClockPeriodType } from './basicTypes'

/**
 * Class for managing click and keyboard events for ClockPeriod.
 *
 * Класс для управления событиями клика и клавиатуры для ClockPeriod.
 */
export class ClockPeriodEvent {
  /**
   * Constructor for ClockPeriodEvent.
   *
   * Конструктор для ClockPeriodEvent.
   * @param enabled getter returning enabled state manager instance / функция, возвращающая экземпляр менеджера состояния активности
   * @param eventClick getter returning click event manager instance / функция, возвращающая экземпляр менеджера событий клика
   * @param value getter returning period value manager instance / функция, возвращающая экземпляр менеджера значения периода
   */
  constructor(
    protected readonly enabled: () => EnabledInclude,
    protected readonly eventClick: () => EventClickInclude,
    protected readonly value: () => ClockPeriodValue
  ) { }

  /**
   * Handles click on a period button.
   *
   * Обрабатывает клик по кнопке периода.
   * @param event native mouse event / нативное событие мыши
   */
  readonly onClick = (event: MouseEvent): void => {
    event.stopPropagation()

    const currentTarget = event.currentTarget as HTMLElement | null
    const target = event.target as HTMLElement | null
    const value = currentTarget?.dataset?.value
      ?? target?.dataset?.value
      ?? target?.closest?.<HTMLElement>('[data-value]')?.dataset?.value

    if (value === ClockPeriodType.am || value === ClockPeriodType.pm) {
      this.select(value, event)
    }
  }

  /**
   * Handles keyboard navigation.
   *
   * Обрабатывает клавиатурную навигацию.
   * @param event native keyboard event / нативное событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (event.isComposing) {
      return
    }

    if (this.enabled().isEnabled) {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          event.preventDefault()
          this.select(ClockPeriodType.am)
          break
        case 'ArrowDown':
        case 'ArrowRight':
          event.preventDefault()
          this.select(ClockPeriodType.pm)
          break
        case ' ':
        case 'Enter':
          event.preventDefault()
          this.select(this.value().isAm() ? ClockPeriodType.pm : ClockPeriodType.am)
          break
      }
    }
  }

  /**
   * Selects a period and triggers appropriate events.
   *
   * Выбирает период и вызывает соответствующие события.
   * @param period period to select / выбираемый период
   * @param event native mouse event / нативное событие мыши
   */
  select(period: ClockPeriodType, event?: MouseEvent): void {
    if (
      !this.enabled().isEnabled
      || this.value().isSelected(period)
    ) {
      return
    }

    this.value().set(period)
    this.eventClick().onClick(
      this.getEvent(event),
      this.getOptions(period)
    )
  }

  /**
   * Returns provided mouse event or creates a fallback synthetic click event.
   *
   * Возвращает переданное событие мыши или создает резервное синтетическое событие клика.
   * @param event native mouse event / нативное событие мыши
   * @returns mouse event / событие мыши
   */
  protected getEvent(event?: MouseEvent): MouseEvent {
    if (event) {
      return event
    }

    if (typeof MouseEvent !== 'undefined') {
      return new MouseEvent('click')
    }

    return {} as MouseEvent
  }

  /**
   * Generates click options payload for the selected period.
   *
   * Формирует параметры клика для выбранного периода.
   * @param period period value / значение периода
   * @returns click options payload / параметры клика
   */
  protected getOptions(period: ClockPeriodType): EventClickValue {
    return {
      type: 'item',
      value: period,
      detail: undefined
    }
  }
}
