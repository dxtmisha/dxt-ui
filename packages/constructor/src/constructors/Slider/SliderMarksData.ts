import { computed } from 'vue'
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
   * Converts a numeric value to percentage relative to min and max.
   *
   * Переводит числовое значение в процент относительно min и max.
   * @param value numeric value / числовое значение
   * @returns calculated percentage / вычисленный процент
   */
  toPercent(value: number): number {
    const min = toNumber(this.props.min ?? 0)
    const max = toNumber(this.props.max ?? 100)

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
