import { computed, type ComputedRef } from 'vue'
import {
  isArray,
  isObject,
  isObjectNotArray,
  toNumber,
  toPercentBy100
} from '@dxtmisha/functional'

import type { SliderMarkList } from './basicTypes'
import type { SliderPropsBasic } from './props'

/**
 * Class for computing and managing normalized slider mark items list.
 *
 * Класс для вычисления и управления нормализованным списком элементов меток слайдера.
 */
export class SliderMarksData {
  /** Computed list of normalized mark items / Вычисляемый список нормализованных элементов меток */
  readonly data = computed<SliderMarkList | undefined>(() => {
    if (this.props.marks) {
      const resultList: SliderMarkList = []
      const rawList = this.getRawMarks()

      rawList.forEach((item: any) => {
        const mark = this.getItemMark(item)
        const value = this.getItemValue(item, mark)

        resultList.push({
          mark,
          value,
          text: this.getItemText(item, value),
          style: {
            [`--${this.className}-sys-mark`]: `${this.toPercent(mark)}%`
          }
        })
      })

      if (resultList.length > 0) {
        resultList.sort((itemA, itemB) => itemA.mark - itemB.mark)
        return resultList
      }
    }

    return undefined
  })

  /**
   * Constructor
   * @param props input properties / входящие свойства
   * @param className class name prefix / префикс названия класса
   */
  constructor(
    protected readonly props: SliderPropsBasic,
    protected readonly className: string
  ) {
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
   * Returns minimum numeric value of range.
   *
   * Возвращает минимальное числовое значение диапазона.
   * @returns minimum value / минимальное значение
   */
  get minNumber(): number {
    return toNumber(this.props.min ?? 0)
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
   * Checks if mark items list is present and non-empty.
   *
   * Проверяет, присутствует ли список элементов меток и не пуст ли он.
   * @returns true if marks exist / true если метки присутствуют
   */
  is(): this is { data: ComputedRef<SliderMarkList> } {
    return Boolean(this.data.value)
  }

  /**
   * Returns list of normalized mark items.
   *
   * Возвращает список нормализованных элементов меток.
   * @returns mark items list or undefined / список элементов меток или undefined
   */
  get(): SliderMarkList | undefined {
    return this.data.value
  }

  /**
   * Converts a numeric value to percentage relative to min and max.
   *
   * Переводит числовое значение в процент относительно min и max.
   * @param value numeric value / числовое значение
   * @returns calculated percentage / вычисленный процент
   */
  toPercent(value: number): number {
    const min = this.minNumber
    const max = this.maxNumber

    if (
      max <= min
      || value <= min
    ) {
      return 0
    }

    if (value >= max) {
      return 100
    }

    return toPercentBy100(max - min, value - min)
  }

  /**
   * Converts percentage back into a numeric value relative to min, max, and step.
   *
   * Переводит процент обратно в числовое значение относительно min, max и step.
   * @param percent percentage value / значение в процентах
   * @returns calculated bounded value / вычисленное ограниченное значение
   */
  toValue(percent: number): number {
    const min = this.minNumber
    const max = this.maxNumber
    const step = this.stepNumber

    const rawValue = ((max - min) / 100) * percent + min
    const stepValue = Math.round((rawValue - min) / step) * step + min

    return Math.max(min, Math.min(max, stepValue))
  }

  /**
   * Returns property key name for text label lookup.
   *
   * Возвращает имя ключа свойства для поиска текста метки.
   * @returns key name / имя ключа
   */
  protected get keyLabel(): string {
    return this.props.keyLabel ?? 'text'
  }

  /**
   * Returns property key name for value lookup.
   *
   * Возвращает имя ключа свойства для поиска значения.
   * @returns key name / имя ключа
   */
  protected get keyValue(): string {
    return this.props.keyValue ?? 'value'
  }

  /**
   * Extracts numeric mark position value from raw item.
   *
   * Извлекает числовое значение позиции метки из сырого элемента.
   * @param item raw item / сырой элемент
   * @returns numeric mark value / числовое значение метки
   */
  protected getItemMark(item: any): number {
    if (isObjectNotArray(item)) {
      return toNumber(item.mark ?? item[this.keyValue] ?? item.value ?? 0)
    }

    return toNumber(item)
  }

  /**
   * Extracts text label representation from raw item.
   *
   * Извлекает текстовое представление метки из сырого элемента.
   * @param item raw item / сырой элемент
   * @param value computed item value / вычисленное значение элемента
   * @returns text label string / строка текста метки
   */
  protected getItemText(item: any, value: any): string {
    if (isObjectNotArray(item)) {
      return String(item[this.keyLabel] ?? item.text ?? value)
    }

    return String(item)
  }

  /**
   * Extracts target mark payload value from raw item.
   *
   * Извлекает целевое значение данных метки из сырого элемента.
   * @param item raw item / сырой элемент
   * @param mark computed mark position value / вычисленное значение позиции метки
   * @returns payload value / значение данных
   */
  protected getItemValue(item: any, mark: number): any {
    if (isObjectNotArray(item)) {
      return item[this.keyValue] ?? item.value ?? mark
    }

    return item
  }

  /**
   * Extracts raw list of marks from props.
   *
   * Извлекает сырой список меток из свойств.
   * @returns array of raw mark items / массив сырых элементов меток
   */
  protected getRawMarks(): any[] {
    if (isArray(this.props.marks)) {
      return this.props.marks
    }

    if (isObject(this.props.marks)) {
      return Object.values(this.props.marks)
    }

    return []
  }
}
