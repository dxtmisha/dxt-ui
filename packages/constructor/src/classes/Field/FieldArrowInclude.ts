import { toNumber } from '@dxtmisha/functional'

import { FieldValueInclude } from './FieldValueInclude'
import { FieldTypeInclude } from './FieldTypeInclude'

import type { FieldAllProps, FieldArrowProps } from '../../types/fieldTypes'

/**
 * Class for working with input arrows.
 *
 * Класс для работы со стрелками ввода.
 */
export class FieldArrowInclude {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param value object for working with values / объект для работы со значениями
   * @param type object for working with input type / объект для работы с типом ввода
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly value: FieldValueInclude,
    protected readonly type?: FieldTypeInclude
  ) {
  }

  /**
   * Indicates if arrows are enabled.
   *
   * Указывает, включены ли стрелки.
   * @returns true if arrows are enabled / true, если стрелки включены
   */
  get is(): boolean {
    return Boolean(this.props.arrow && this.props.arrow !== 'none')
  }

  /**
   * Indicates if the previous button is disabled.
   *
   * Указывает, отключена ли кнопка предыдущего.
   * @returns true if previous is disabled / true, если кнопка предыдущего отключена
   */
  get disabledPrevious(): boolean {
    return !this.isPrevious(this.value.number)
  }

  /**
   * Indicates if the next button is disabled.
   *
   * Указывает, отключена ли кнопка следующего.
   * @returns true if next is disabled / true, если кнопка следующего отключена
   */
  get disabledNext(): boolean {
    return !this.isNext(this.value.number)
  }

  /**
   * Checks if the arrow type is carousel.
   *
   * Проверяет, является ли тип стрелок carousel.
   * @returns true if carousel type / true, если тип carousel
   */
  isCarousel(): boolean {
    return this.get() === 'carousel'
  }

  /**
   * Checks if the arrow type is stepper.
   *
   * Проверяет, является ли тип стрелок stepper.
   * @returns true if stepper type / true, если тип stepper
   */
  isStepper(): boolean {
    return this.get() === 'stepper'
  }

  /**
   * Checks if it is possible to decrease the value.
   *
   * Проверяет, можно ли уменьшить значение.
   * @param value values for checking / значения для проверки
   * @returns true if decrease is possible / true, если уменьшение возможно
   */
  isPrevious(value: number): boolean {
    const min = this.min
    return min === undefined || value > min
  }

  /**
   * Checks if it is possible to increase the value.
   *
   * Проверяет, можно ли увеличить значение.
   * @param value values for checking / значения для проверки
   * @returns true if increase is possible / true, если увеличение возможно
   */
  isNext(value: number): boolean {
    const max = this.max
    return max === undefined || value < max
  }

  /**
   * Returns arrow type.
   *
   * Возвращает тип стрелок.
   * @returns arrow type / тип стрелок
   */
  get(): FieldArrowProps['arrow'] | undefined {
    switch (this.props.arrow) {
      case 'auto':
        if (
          this.type?.get() === 'number'
          || this.type?.get() === 'number-format'
        ) {
          return 'stepper'
        }

        break
    }

    return this.props.arrow
  }

  /**
   * Returns arrow alignment.
   *
   * Возвращает выравнивание стрелок.
   * @returns alignment string or undefined / строка выравнивания или undefined
   */
  align(): string | undefined {
    return this.props.arrowAlign
  }

  /**
   * Decreases the value.
   *
   * Уменьшает значение.
   * @returns current instance / текущий экземпляр
   */
  previous(): this {
    const value = this.value.number - this.step

    if (this.isPrevious(value)) {
      this.value.set(value.toString())
    } else {
      this.toMin()
    }

    return this
  }

  /**
   * Increases the value.
   *
   * Увеличивает значение.
   * @returns current instance / текущий экземпляр
   */
  next(): this {
    const value = this.value.number + this.step

    if (this.isNext(value)) {
      this.value.set(value.toString())
    } else {
      this.toMax()
    }

    return this
  }

  /**
   * Decreases to the minimum value.
   *
   * Уменьшает до минимального значения.
   * @returns current instance / текущий экземпляр
   */
  toMin(): this {
    if (!this.disabledPrevious) {
      const min = this.min

      if (min !== undefined) {
        this.value.set(min.toString())
      }
    }

    return this
  }

  /**
   * Increases to the maximum value.
   *
   * Увеличивает до максимального значения.
   * @returns current instance / текущий экземпляр
   */
  toMax(): this {
    if (!this.disabledNext) {
      const max = this.max

      if (max !== undefined) {
        this.value.set(max.toString())
      }
    }

    return this
  }

  /** Change step / Шаг изменения */
  protected get step(): number {
    return toNumber(this.props.arrowStep ?? this.props.step ?? 1)
  }

  /** Minimum value / Минимальное значение */
  protected get min(): number | undefined {
    return toNumber(this.props.min) ?? undefined
  }

  /** Maximum value / Максимальное значение */
  protected get max(): number | undefined {
    return toNumber(this.props.max) || undefined
  }
}
