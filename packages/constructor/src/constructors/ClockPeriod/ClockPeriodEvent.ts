import type { ClockPeriodProps } from './props'
import type { EnabledInclude } from '../../classes/EnabledInclude'
import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { ClockPeriodEmit } from './ClockPeriodEmit'
import type { ClockPeriodList } from './ClockPeriodList'
import type { ClockPeriodValue } from './ClockPeriodValue'
import type { ClockPeriodType } from './basicTypes'

/**
 * Class for managing click and keyboard events for ClockPeriod.
 *
 * Класс для управления событиями клика и клавиатуры для ClockPeriod.
 */
export class ClockPeriodEvent {
  /**
   * Constructor
   * @param props component properties / свойства компонента
   * @param enabled enabled state manager instance / экземпляр менеджера состояния активности
   * @param valueItem period value manager instance / экземпляр менеджера значения периода
   * @param list period list manager instance / экземпляр менеджера списка периодов
   * @param emitsItem emit manager instance / экземпляр менеджера отправки событий
   * @param model model value manager instance / экземпляр менеджера значения модели
   */
  constructor(
    protected readonly props: ClockPeriodProps,
    protected readonly enabled: EnabledInclude,
    protected readonly valueItem: ClockPeriodValue,
    protected readonly list: ClockPeriodList,
    protected readonly emitsItem: ClockPeriodEmit,
    protected readonly model: ModelValueInclude<ClockPeriodType>
  ) {}

  /**
   * Selects a period and triggers appropriate events.
   *
   * Выбирает период и вызывает соответствующие события.
   * @param period period to select / выбираемый период
   */
  select(period: ClockPeriodType): void {
    if (!this.enabled.isEnabled || this.props.readonly) {
      return
    }

    if (this.valueItem.isSelected(period)) {
      return
    }

    this.model.set(period)

    const item = this.list.getItem(period)
    this.emitsItem.onInput(item, period)
    this.emitsItem.onChange(item, period)
  }

  /**
   * Handles click on a period button.
   *
   * Обрабатывает клик по кнопке периода.
   * @param event native mouse event / нативное событие мыши
   * @param period clicked period / период, по которому кликнули
   */
  readonly onClick = (event: MouseEvent, period: ClockPeriodType): void => {
    event.stopPropagation()
    this.select(period)
  }

  /**
   * Handles keyboard navigation.
   *
   * Обрабатывает клавиатурную навигацию.
   * @param event native keyboard event / нативное событие клавиатуры
   */
  readonly onKeydown = (event: KeyboardEvent): void => {
    if (!this.enabled.isEnabled || this.props.readonly) {
      return
    }

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault()
        this.select('am')
        break
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault()
        this.select('pm')
        break
      case ' ':
      case 'Enter':
        event.preventDefault()
        this.select(this.valueItem.isAm() ? 'pm' : 'am')
        break
    }
  }
}
