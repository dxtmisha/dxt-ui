import type { ConstrStyles } from '@dxtmisha/functional'
import type { ClockDialList } from './ClockDialList'
import type { ClockDialValue } from './ClockDialValue'
import type { ClockDialProps } from './props'

/**
 * Class for calculating clock hands (arrows) rotations and styles.
 *
 * Класс для вычисления поворотов и стилей стрелок часов.
 */
export class ClockDialArrows {
  /**
   * Constructor
   * @param props component input properties / входные свойства компонента
   * @param className base CSS class name / базовое имя CSS класса
   * @param list clock dial list manager / менеджер списка циферблата часов
   * @param valueItem time values manager / менеджер значений времени
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly className: string,
    protected readonly list: ClockDialList,
    protected readonly valueItem: ClockDialValue
  ) { }

  /**
   * Rotation style for hour hand.
   *
   * Стиль поворота для часовой стрелки.
   * @returns CSS style dictionary / словарь CSS стилей
   */
  get styleHour(): ConstrStyles {
    if (this.valueItem.isHourVisible()) {
      let rotateDegrees = (360 / 12) * this.valueItem.hour

      if (this.valueItem.isMinuteVisible()) {
        rotateDegrees += (360 / 12 / 60) * this.valueItem.minute
      }

      if (this.valueItem.isSecondVisible()) {
        rotateDegrees += (360 / 12 / 3600) * this.valueItem.second
      }

      return {
        [`--${this.className}-sys-arrow-rotate`]: `${rotateDegrees}deg`
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
    if (this.valueItem.isMinuteVisible()) {
      let rotateDegrees = (360 / 60) * this.valueItem.minute

      if (this.valueItem.isSecondVisible()) {
        rotateDegrees += (360 / 3600) * this.valueItem.second
      }

      return {
        [`--${this.className}-sys-arrow-rotate`]: `${rotateDegrees}deg`
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
    if (this.valueItem.isSecondVisible()) {
      const rotateDegrees = (360 / 60) * this.valueItem.second

      return {
        [`--${this.className}-sys-arrow-rotate`]: `${rotateDegrees}deg`
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
    if (this.valueItem.isSelectVisible()) {
      const rotateDegrees = this.list.rotate * this.valueItem.value

      return {
        [`--${this.className}-sys-arrow-rotate`]: `${rotateDegrees}deg`
      }
    }

    return {}
  }
}
