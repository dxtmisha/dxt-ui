import { isString } from '@dxtmisha/functional'

import type { FieldElement } from './FieldElement'
import type { FieldProps } from './props'

/**
 * Class for managing the spacing layout and tracking character length value inside the field.
 * It provides computed values for minimum width sizing and focus-related value strings.
 *
 * Класс для управления размещением отступов и отслеживания длины значения символов внутри поля.
 * Предоставляет вычисляемые значения для минимальной ширины и строковых значений фокуса.
 */
export class FieldSpace {
  /**
   * Constructor for initializing FieldSpace.
   *
   * Конструктор для инициализации FieldSpace.
   * @param props input properties / входящие свойства
   * @param fieldElement field element instance / экземпляр элемента поля
   */
  constructor(
    protected readonly props: FieldProps,
    protected readonly fieldElement: FieldElement
  ) {}

  /**
   * Returns the minimum width of the input element in pixels.
   *
   * Возвращает минимальную ширину элемента ввода в пикселях.
   * @returns element offset width string or undefined / ширина элемента в пикселях или undefined
   */
  get minWidth(): string | undefined {
    const element = this.fieldElement.inputElement.value

    if (element) {
      return `${element.offsetWidth}px`
    }

    return undefined
  }

  /**
   * Returns value for the active focused field state.
   *
   * Возвращает значение для активного сфокусированного состояния поля.
   * @returns active string value / активное строковое значение
   */
  get value(): string {
    if (
      !this.fieldElement.inputElement.value
      && isString(this.props.value)
    ) {
      return this.props.value
    }

    return ''
  }
}
