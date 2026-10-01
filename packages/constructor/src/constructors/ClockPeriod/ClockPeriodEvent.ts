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
   * Constructor
   * @param enabled enabled state manager instance / экземпляр менеджера состояния активности
   * @param value period value manager instance / экземпляр менеджера значения периода
   * @param eventClick click event manager instance / экземпляр менеджера событий клика
   */
  constructor(
    protected readonly enabled: EnabledInclude,
    protected readonly value: ClockPeriodValue,
    protected readonly eventClick: EventClickInclude
  ) { }

  /**
   * Selects a period and triggers appropriate events.
   *
   * Выбирает период и вызывает соответствующие события.
   * @param period period to select / выбираемый период
   * @param event native mouse event / нативное событие мыши
   */
  select(period: ClockPeriodType, event?: MouseEvent): void {
    if (
      !this.enabled.isEnabled
      || this.value.isSelected(period)
    ) {
      return
    }

    this.value.set(period)
    this.eventClick.onClick(
      this.getEvent(event),
      this.getOptions(period)
    )
  }

  /**
   * Handles click on a period button.
   *
   * Обрабатывает клик по кнопке периода.
   * @param event native mouse event / нативное событие мыши
   */
  readonly onClick = (event: MouseEvent): void => {
    event.stopPropagation()

    const value = (event.target as HTMLElement)?.dataset.value

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
    if (this.enabled.isEnabled) {
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
          this.select(this.value.isAm() ? ClockPeriodType.pm : ClockPeriodType.am)
          break
      }
    }
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
