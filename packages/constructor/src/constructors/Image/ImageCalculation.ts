import { type ImageSize } from './basicTypes'

/**
 * A class for storing data for adaptive computation of image scaling for a specific group.
 * It manages physical sizes and multipliers to ensure consistent scaling across related images.
 *
 * Класс для хранения данных для адаптивного вычисления масштабирования изображения для конкретной группы.
 * Управляет физическими размерами и множителями для обеспечения согласованного масштабирования связанных изображений.
 */
export class ImageCalculation {
  /** Maximum scaling multiplier / Максимальный множитель масштабирования */
  factorMax: number = 1

  /** Maximum physical dimensions in the group / Максимальные физические размеры в группе */
  protected size: ImageSize = {
    width: 0,
    height: 0
  }

  /** Minimum actual sizes (offset) in the group / Минимальные фактические размеры (offset) в группе */
  protected offset: ImageSize = {
    width: 7680,
    height: 7680
  }

  /**
   * Constructor for initializing image calculation values for a group.
   *
   * Конструктор для инициализации значений вычисления изображения для группы.
   * @param name group name / название группы
   */
  constructor(
    protected readonly name: string
  ) {
  }

  /**
   * Returns the maximum physical width.
   *
   * Возвращает максимальную физическую ширину.
   * @returns maximum physical width / максимальная физическая ширина
   */
  get width(): number {
    return this.size.width
  }

  /**
   * Returns the maximum physical height.
   *
   * Возвращает максимальную физическую высоту.
   * @returns maximum physical height / максимальная физическая высота
   */
  get height(): number {
    return this.size.height
  }

  /**
   * Returns the actual width.
   *
   * Возвращает фактическую ширину.
   * @returns actual offset width / фактическая ширина
   */
  get offsetWidth(): number {
    return this.offset.width
  }

  /**
   * Returns the actual height.
   *
   * Возвращает фактическую высоту.
   * @returns actual offset height / фактическая высота
   */
  get offsetHeight(): number {
    return this.offset.height
  }

  /**
   * Checks whether the element belongs to the current group.
   *
   * Проверяет, принадлежит ли элемент к текущей группе.
   * @param name name of the checked group / название проверяемой группы
   * @returns true if group name matches / true, если название группы совпадает
   */
  is(name: string): boolean {
    return this.name === name
  }

  /**
   * Checks if the group has elements with sizes. It is used to check if there is data for work.
   *
   * Проверяет, есть ли у группы элементы с размерами. Используется для проверки, есть ли данные для работы.
   * @returns true if sizes are present / true, если размеры присутствуют
   */
  isSize(): boolean {
    return Boolean(this.size.width || this.size.height)
  }

  /**
   * Updating size.width, if it is less than the selected value.
   *
   * Обновление size.width, если она меньше выбранного значения.
   * @param width value of the selected width / значение выбранной ширины
   * @returns instance of this class / экземпляр этого класса
   */
  makeWidth(width: number): this {
    if (width > this.size.width) {
      this.size.width = width
    }

    return this
  }

  /**
   * Updating size.height, if it is less than the selected value.
   *
   * Обновление size.height, если она меньше выбранного значения.
   * @param height value of the selected height / значение выбранной высоты
   * @returns instance of this class / экземпляр этого класса
   */
  makeHeight(height: number): this {
    if (height > this.size.height) {
      this.size.height = height
    }

    return this
  }

  /**
   * Updating offset.width, if it is larger than the selected value.
   *
   * Обновление offset.width, если она больше выбранного значения.
   * @param width value of the selected width / значение выбранной ширины
   * @returns instance of this class / экземпляр этого класса
   */
  makeOffsetWidth(width: number): this {
    if (width < this.offset.width) {
      this.offset.width = width
    }

    return this
  }

  /**
   * Updating offset.height, if it is larger than the selected value.
   *
   * Обновление offset.height, если она больше выбранного значения.
   * @param height value of the selected height / значение выбранной высоты
   * @returns instance of this class / экземпляр этого класса
   */
  makeOffsetHeight(height: number): this {
    if (height < this.offset.height) {
      this.offset.height = height
    }

    return this
  }

  /**
   * Changes the multiplier value if it is greater than the checked value.
   *
   * Изменяет значение множителя, если оно больше проверяемого значения.
   * @param value values for verification / значения для проверки
   * @returns instance of this class / экземпляр этого класса
   */
  makeFactorMax(value: number): this {
    if (value < this.factorMax) {
      this.factorMax = value
    }

    return this
  }

  /**
   * Restoring the value to its original state.
   *
   * Восстановление значения в изначальное состояние.
   * @returns instance of this class / экземпляр этого класса
   */
  reset(): this {
    this.factorMax = 1

    this.size = {
      width: 0,
      height: 0
    }

    this.offset = {
      width: 7680,
      height: 7680
    }

    return this
  }
}
