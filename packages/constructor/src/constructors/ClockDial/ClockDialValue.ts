import { isNull } from '@dxtmisha/functional'
import type { ModelValueInclude } from '../../classes/ModelValueInclude'
import type { ClockDialProps } from './props'

/**
 * Class for managing time values (hour, minute, second, selected value) for ClockDial.
 *
 * Класс для управления значениями времени (час, минута, секунда, выбранное значение) для ClockDial.
 */
export class ClockDialValue {
  /**
   * Constructor
   * @param props component input properties / входные свойства компонента
   * @param model model value helper instance / экземпляр помощника значения модели
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly model: ModelValueInclude<number>
  ) { }

  /**
   * Current hour value or 0.
   *
   * Текущее значение часа или 0.
   * @returns hour value / значение часа
   */
  get hour(): number {
    return this.props.hour ?? 0
  }

  /**
   * Current minute value or 0.
   *
   * Текущее значение минуты или 0.
   * @returns minute value / значение минуты
   */
  get minute(): number {
    return this.props.minute ?? 0
  }

  /**
   * Current second value or 0.
   *
   * Текущее значение секунды или 0.
   * @returns second value / значение секунды
   */
  get second(): number {
    return this.props.second ?? 0
  }

  /**
   * Current selected value or 0.
   *
   * Текущее выбранное значение или 0.
   * @returns selected numeric value / выбранное числовое значение
   */
  get value(): number {
    return this.model.getValue() ?? 0
  }

  /**
   * Whether the hour hand is visible.
   *
   * Отображается ли часовая стрелка.
   * @returns boolean visibility / флаг видимости
   */
  isHourVisible(): boolean {
    return !isNull(this.props.hour)
  }

  /**
   * Whether the minute hand is visible.
   *
   * Отображается ли минутная стрелка.
   * @returns boolean visibility / флаг видимости
   */
  isMinuteVisible(): boolean {
    return !isNull(this.props.minute)
  }

  /**
   * Whether the second hand is visible.
   *
   * Отображается ли секундная стрелка.
   * @returns boolean visibility / флаг видимости
   */
  isSecondVisible(): boolean {
    return !isNull(this.props.second)
  }

  /**
   * Whether the selected pointer arrow is visible.
   *
   * Отображается ли стрелка выбранного значения.
   * @returns boolean visibility / флаг видимости
   */
  isSelectVisible(): boolean {
    const selectedValue = this.model.getValue()
    return !isNull(selectedValue) && selectedValue > -1
  }
}
