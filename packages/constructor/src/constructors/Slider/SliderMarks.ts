import type { SliderMarksData } from './SliderMarksData'

import { SliderFocusType, type SliderMarkItem } from './basicTypes'
import type { SliderPropsBasic } from './props'

/**
 * Class for handling slider mark calculations, percentage conversions, and position snapping.
 *
 * Класс для обработки вычислений меток слайдера, конвертации процентов и привязки позиций.
 */
export class SliderMarks {
  /**
   * Constructor
   * @param props input properties / входящие свойства
   * @param className class name prefix / префикс названия класса
   * @param data manager for computing normalized mark items list / менеджер вычисления нормализованного списка элементов меток
   */
  constructor(
    protected readonly props: SliderPropsBasic,
    protected readonly className: string,
    protected readonly data: SliderMarksData
  ) { }

  /**
   * Returns marks data manager instance.
   *
   * Возвращает экземпляр менеджера данных меток.
   * @returns marks data manager / менеджер данных меток
   */
  getData(): SliderMarksData {
    return this.data
  }

  /**
   * Retrieves mark item object for a given mark or value.
   *
   * Получает объект элемента метки для заданного значения или метки.
   * @param targetValue search target / искомое значение
   * @param searchKey key type to match / тип ключа для поиска
   * @returns mark item / элемент метки
   */
  getItem(
    targetValue: number,
    searchKey: 'mark' | 'value' = 'mark'
  ): SliderMarkItem {
    const marks = this.data.get()

    if (marks) {
      const foundItem = marks.find(item => item[searchKey] === targetValue)

      if (foundItem) {
        return foundItem
      }
    }

    return {
      mark: targetValue,
      value: targetValue,
      label: String(targetValue)
    }
  }

  /**
   * Finds neighbor mark for step navigation.
   *
   * Находит соседнюю метку для шаговой навигации.
   * @param currentValue current thumb value / текущее значение ползунка
   * @param isIncrease true if increasing value / true если значение увеличивается
   * @returns neighbor mark value / значение соседней метки
   */
  getMarkNeighbor(currentValue: number, isIncrease: boolean): number {
    return isIncrease
      ? this.getNext(currentValue)
      : this.getPrev(currentValue)
  }

  /**
   * Finds nearest mark value for magnet snapping.
   *
   * Находит ближайшее значение метки для притягивания (магнита).
   * @param targetValue target numeric value / целевое числовое значение
   * @returns nearest mark value / ближайшее значение метки
   */
  getNearest(targetValue: number): number {
    const data = this.data.get()

    if (
      this.props.magnet
      && data
    ) {
      let nearestMark = targetValue
      let minimumDifference = Infinity

      data.forEach((markItem) => {
        const difference = Math.abs(markItem.mark - targetValue)

        if (difference < minimumDifference) {
          nearestMark = markItem.mark
          minimumDifference = difference
        }
      })

      return nearestMark
    }

    return targetValue
  }

  /**
   * Returns next mark or value by step for increasing value.
   *
   * Возвращает следующее значение метки или шага для увеличения значения.
   * @param currentValue current thumb value / текущее значение ползунка
   * @returns next value / следующее значение
   */
  getNext(currentValue: number): number {
    if (this.props.magnet) {
      return this.getNextItem(currentValue)?.mark ?? currentValue
    }

    return currentValue + this.data.stepNumber
  }

  /**
   * Finds next mark item with mark greater than currentValue.
   *
   * Находит следующий элемент метки со значением больше currentValue.
   * @param currentValue current thumb value / текущее значение ползунка
   * @returns next mark item or undefined / следующий элемент метки или undefined
   */
  getNextItem(currentValue: number): SliderMarkItem | undefined {
    const data = this.data.get()

    if (data) {
      return data.find(item => item.mark > currentValue)
    }

    return undefined
  }

  /**
   * Returns previous mark or value by step for decreasing value.
   *
   * Возвращает предыдущее значение метки или шага для уменьшения значения.
   * @param currentValue current thumb value / текущее значение ползунка
   * @returns previous value / предыдущее значение
   */
  getPrev(currentValue: number): number {
    if (this.props.magnet) {
      return this.getPrevItem(currentValue)?.mark ?? currentValue
    }

    return currentValue - this.data.stepNumber
  }

  /**
   * Finds previous mark item with mark less than currentValue.
   *
   * Находит предыдущий элемент метки со значением меньше currentValue.
   * @param currentValue current thumb value / текущее значение ползунка
   * @returns previous mark item or undefined / предыдущий элемент метки или undefined
   */
  getPrevItem(currentValue: number): SliderMarkItem | undefined {
    const data = this.data.get()

    if (data) {
      return data.slice()
        .reverse()
        .find(item => item.mark < currentValue)
    }

    return undefined
  }

  /**
   * Validates target value against min/max limits and minimum distance constraints.
   *
   * Проверяет целевое значение на соответствие ограничениям min/max и минимального расстояния.
   * @param targetValue desired value / желаемое значение
   * @param minCurrent current min thumb value / текущее значение минимального ползунка
   * @param maxCurrent current max thumb value / текущее значение максимального ползунка
   * @param focusType handle focus type / тип фокуса ползунка
   * @returns valid bounded value / валидное ограниченное значение
   */
  checkValue(
    targetValue: number,
    minCurrent: number,
    maxCurrent: number,
    focusType: SliderFocusType
  ): number {
    const minimumDistance = this.data.minimumDistanceNumber
    let minLimit = this.data.minNumber
    let maxLimit = this.data.maxNumber

    if (this.props.multiple) {
      if (focusType === SliderFocusType.min) {
        maxLimit = maxCurrent - minimumDistance
      } else {
        minLimit = minCurrent + minimumDistance
      }
    }

    return Math.max(minLimit, Math.min(maxLimit, targetValue))
  }

  /**
   * Converts percentage back into a mark/value using step or magnet snapping.
   *
   * Переводит процент обратно в значение с учетом шага или притягивания к метке.
   * @param percent percentage value / значение в процентах
   * @returns calculated value or mark / вычисленное значение или метка
   */
  toMark(percent: number): number {
    return this.getNearest(this.data.toValue(percent))
  }
}
