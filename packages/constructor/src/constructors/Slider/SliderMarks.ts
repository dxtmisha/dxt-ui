import type { ComputedRef } from 'vue'
import { toNumber } from '@dxtmisha/functional'

import type { SliderMarksData } from './SliderMarksData'
import type { SliderMarkItem, SliderMarkList } from './basicTypes'
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
    readonly data: SliderMarksData
  ) {}

  /**
   * Returns minimum numeric value of range.
   *
   * Возвращает минимальное числовое значение диапазона.
   * @returns minimum value / минимальное значение
   */
  get minNumber(): number {
    return toNumber(this.props.min ?? 0)
  }

  /**
   * Returns maximum numeric value of range.
   *
   * Возвращает максимальное числовое значение диапазона.
   * @returns maximum value / максимальное значение
   */
  get maxNumber(): number {
    return toNumber(this.props.max ?? 100)
  }

  /**
   * Returns step size for value increment.
   *
   * Возвращает размер шага для прироста значения.
   * @returns step size / размер шага
   */
  get stepNumber(): number {
    const step = toNumber(this.props.step ?? 1)
    return step > 0 ? step : 1
  }

  /**
   * Returns minimum required distance between handles in multiple mode.
   *
   * Возвращает минимальное допустимое расстояние между ползунками в режиме множественного выбора.
   * @returns minimum distance / минимальное расстояние
   */
  get minimumDistanceNumber(): number {
    return toNumber(this.props.minimumDistance ?? 1)
  }

  /**
   * Computed list of normalized mark items.
   *
   * Вычисляемый список нормализованных элементов меток.
   * @returns computed reference to mark list / вычисляемая ссылка на список меток
   */
  get normalizedMarks(): ComputedRef<SliderMarkList | undefined> {
    return this.data.data
  }

  /**
   * Converts a numeric value to percentage relative to min and max.
   *
   * Переводит числовое значение в процент относительно min и max.
   * @param value numeric value / числовое значение
   * @returns calculated percentage / вычисленный процент
   */
  toPercent(value: number): number {
    return this.data.toPercent(value)
  }

  /**
   * Converts percentage back into a mark/value using step or magnet snapping.
   *
   * Переводит процент обратно в значение с учетом шага или притягивания к метке.
   * @param percent percentage value / значение в процентах
   * @returns calculated value or mark / вычисленное значение или метка
   */
  toMark(percent: number): number {
    const min = this.minNumber
    const max = this.maxNumber
    const step = this.stepNumber

    const rawValue = ((max - min) / 100) * percent + min
    const stepValue = Math.round((rawValue - min) / step) * step + min
    const boundedValue = Math.max(min, Math.min(max, stepValue))

    if (this.props.magnet && this.normalizedMarks.value) {
      let nearestMark = boundedValue
      let minimumDifference = Infinity

      this.normalizedMarks.value.forEach((markItem) => {
        const difference = Math.abs(markItem.mark - boundedValue)

        if (difference < minimumDifference) {
          nearestMark = markItem.mark
          minimumDifference = difference
        }
      })

      return nearestMark
    }

    return boundedValue
  }

  /**
   * Retrieves mark item object for a given mark or value.
   *
   * Получает объект элемента метки для заданного значения или метки.
   * @param targetValue search target / искомое значение
   * @param searchKey key type to match / тип ключа для поиска
   * @returns mark item / элемент метки
   */
  getRead(targetValue: number, searchKey: 'mark' | 'value' = 'mark'): SliderMarkItem {
    const marks = this.normalizedMarks.value

    if (marks) {
      const foundItem = marks.find(item => item[searchKey] === targetValue)

      if (foundItem) {
        return foundItem
      }
    }

    return {
      mark: targetValue,
      value: targetValue,
      text: String(targetValue)
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
    const marks = this.normalizedMarks.value

    if (this.props.magnet && marks && marks.length > 0) {
      const sortedMarks = [...marks].sort((itemA, itemB) => itemA.mark - itemB.mark)

      if (isIncrease) {
        const nextItem = sortedMarks.find(item => item.mark > currentValue)
        return nextItem ? nextItem.mark : currentValue
      } else {
        const prevItem = sortedMarks.slice().reverse().find(item => item.mark < currentValue)
        return prevItem ? prevItem.mark : currentValue
      }
    }

    const step = this.stepNumber
    return isIncrease ? currentValue + step : currentValue - step
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
    focusType: 'min' | 'max'
  ): number {
    const minLimit = this.minNumber
    const maxLimit = this.maxNumber
    const minimumDistance = this.minimumDistanceNumber

    if (this.props.multiple) {
      if (focusType === 'min') {
        const allowedMax = maxCurrent - minimumDistance
        return Math.max(minLimit, Math.min(allowedMax, targetValue))
      } else {
        const allowedMin = minCurrent + minimumDistance
        return Math.max(allowedMin, Math.min(maxLimit, targetValue))
      }
    }

    return Math.max(minLimit, Math.min(maxLimit, targetValue))
  }

  /**
   * Calculates position percentage from coordinate along container element.
   *
   * Вычисляет процент позиции по координате вдоль элемента контейнера.
   * @param coordinate pointer coordinate / координата указателя
   * @param rectangle container BoundingClientRect / BoundingClientRect контейнера
   * @param isVertical vertical layout flag / флаг вертикального размещения
   * @returns calculated position percentage / вычисленный процент позиции
   */
  getMovePercent(coordinate: number, rectangle: DOMRect, isVertical: boolean): number {
    if (isVertical) {
      if (rectangle.height <= 0) {
        return 0
      }
      return (100 / rectangle.height) * (rectangle.bottom - coordinate)
    } else {
      if (rectangle.width <= 0) {
        return 0
      }
      return (100 / rectangle.width) * (coordinate - rectangle.left)
    }
  }

  /**
   * Determines closest handle type ('min' or 'max') for interaction coordinate.
   *
   * Определяет ближайший тип ползунка ('min' или 'max') для координаты взаимодействия.
   * @param coordinate input coordinate / координата ввода
   * @param minRectangle min thumb BoundingClientRect / BoundingClientRect мин ползунка
   * @param maxRectangle max thumb BoundingClientRect / BoundingClientRect макс ползунка
   * @param isVertical vertical layout flag / флаг вертикальной ориентации
   * @returns focus type / тип фокуса
   */
  getTypeByCoordinate(
    coordinate: number,
    minRectangle?: DOMRect,
    maxRectangle?: DOMRect,
    isVertical?: boolean
  ): 'min' | 'max' {
    if (this.props.multiple && minRectangle && maxRectangle) {
      const positionProperty = isVertical ? 'top' : 'left'
      const distanceMin = Math.abs(minRectangle[positionProperty] - coordinate)
      const distanceMax = Math.abs(maxRectangle[positionProperty] - coordinate)

      return distanceMin < distanceMax ? 'min' : 'max'
    }

    return 'max'
  }
}
