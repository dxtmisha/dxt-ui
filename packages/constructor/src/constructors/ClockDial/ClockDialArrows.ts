// ai-none

import type { ConstrStyles, DesignName } from '@dxtmisha/functional'
import type { ClockDialList } from './ClockDialList'
import type { ClockDialValue } from './ClockDialValue'

/** Full circle angle in degrees / Полный угол окружности в градусах */
const FULL_CIRCLE_DEGREES = 360

/** Number of hours on a standard dial face / Количество часов на стандартном циферблате */
const HOURS_PER_DIAL = 12

/** Number of minutes or seconds per full rotation / Количество минут или секунд за полный оборот */
const UNITS_PER_ROTATION = 60

/** Number of seconds in one hour / Количество секунд в одном часе */
const SECONDS_PER_HOUR = 3600

/**
 * Class for calculating clock hands (arrows) rotations and styles.
 *
 * Класс для вычисления поворотов и стилей стрелок часов.
 */
export class ClockDialArrows {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param naming component naming helper / помощник именования компонента
   * @param list clock dial list manager factory / фабрика менеджера списка циферблата часов
   * @param value time values manager factory / фабрика менеджера значений времени
   */
  constructor(
    protected readonly naming: DesignName,
    protected readonly list: () => ClockDialList,
    protected readonly value: () => ClockDialValue
  ) {}

  /**
   * Rotation style for hour hand.
   *
   * Стиль поворота для часовой стрелки.
   * @returns CSS style dictionary / словарь CSS стилей
   */
  get styleHour(): ConstrStyles {
    const valueItem = this.value()

    if (valueItem.isHourVisible()) {
      let rotateDegrees = (FULL_CIRCLE_DEGREES / HOURS_PER_DIAL) * valueItem.hour

      if (valueItem.isMinuteVisible()) {
        rotateDegrees += (FULL_CIRCLE_DEGREES / HOURS_PER_DIAL / UNITS_PER_ROTATION) * valueItem.minute
      }

      if (valueItem.isSecondVisible()) {
        rotateDegrees += (FULL_CIRCLE_DEGREES / HOURS_PER_DIAL / SECONDS_PER_HOUR) * valueItem.second
      }

      return {
        [this.naming.getStyle('arrowRotate')]: `${rotateDegrees}deg`
      }
    }

    return {}
  }

  /**
   * Rotation style for minute hand.
   *
   * Стиль поворота для минутной стрелки.
   * @returns CSS style dictionary / словарь CSS стилей
   */
  get styleMinute(): ConstrStyles {
    const valueItem = this.value()

    if (valueItem.isMinuteVisible()) {
      let rotateDegrees = (FULL_CIRCLE_DEGREES / UNITS_PER_ROTATION) * valueItem.minute

      if (valueItem.isSecondVisible()) {
        rotateDegrees += (FULL_CIRCLE_DEGREES / SECONDS_PER_HOUR) * valueItem.second
      }

      return {
        [this.naming.getStyle('arrowRotate')]: `${rotateDegrees}deg`
      }
    }

    return {}
  }

  /**
   * Rotation style for second hand.
   *
   * Стиль поворота для секундной стрелки.
   * @returns CSS style dictionary / словарь CSS стилей
   */
  get styleSecond(): ConstrStyles {
    const valueItem = this.value()

    if (valueItem.isSecondVisible()) {
      const rotateDegrees = (FULL_CIRCLE_DEGREES / UNITS_PER_ROTATION) * valueItem.second

      return {
        [this.naming.getStyle('arrowRotate')]: `${rotateDegrees}deg`
      }
    }

    return {}
  }

  /**
   * Rotation style for selected pointer arrow.
   *
   * Стиль поворота для стрелки выбранного значения.
   * @returns CSS style dictionary / словарь CSS стилей
   */
  get styleSelect(): ConstrStyles {
    const valueItem = this.value()

    if (valueItem.isArrowSelectVisible()) {
      const rotateDegrees = this.list().rotate * valueItem.value

      return {
        [this.naming.getStyle('arrowRotate')]: `${rotateDegrees}deg`
      }
    }

    return {}
  }
}
