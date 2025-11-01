import { computed } from 'vue'
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
   * @param props input data/ входные данные
   * @param value object for working with values/ объект для работы со значениями
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly value: FieldValueInclude,
    protected readonly type?: FieldTypeInclude
  ) {
  }

  /**
   * Indicates if arrows are enabled/ Указывает, включены ли стрелки
   *
   * @return true if arrows are enabled/ true, если стрелки включены
   */
  readonly is = computed<string>(() => {
    return this.props.arrow && this.props.arrow !== 'none'
  })

  /** Indicates if the previous button is disabled/ Указывает, отключена ли кнопка предыдущего */
  readonly disabledPrevious = computed<boolean>(() => !this.isPrevious(this.value.number.value))

  /** Indicates if the next button is disabled/ Указывает, отключена ли кнопка следующего */
  readonly disabledNext = computed<boolean>(() => !this.isNext(this.value.number.value))

  /** Returns the change step/ Возвращает шаг изменения */
  protected readonly step = computed<number>(() => toNumber(this.props.arrowStep ?? this.props.step ?? 1))

  /** Returns the minimum value/ Возвращает минимальное значение */
  protected readonly min = computed<number | undefined>(() => toNumber(this.props.min) ?? undefined)

  /** Returns the maximum value/ Возвращает максимальное значение */
  protected readonly max = computed<number | undefined>(() => toNumber(this.props.max) || undefined)

  /**
   * Checks if the arrow type is carousel.
   *
   * Проверяет, является ли тип стрелок carousel.
   */
  isCarousel(): boolean {
    return this.get() === 'carousel'
  }

  /**
   * Checks if the arrow type is stepper.
   *
   * Проверяет, является ли тип стрелок stepper.
   */
  isStepper(): boolean {
    return this.get() === 'stepper'
  }

  /**
   * Checks if it is possible to decrease the value.
   *
   * Проверяет, можно ли уменьшить значение.
   * @param value values for checking/ значения для проверки
   */
  isPrevious(value: number): boolean {
    const min = this.min.value
    return min === undefined || value > min
  }

  /**
   * Checks if it is possible to increase the value.
   *
   * Проверяет, можно ли увеличить значение.
   * @param value values for checking/ значения для проверки
   */
  isNext(value: number): boolean {
    const max = this.max.value
    return max === undefined || value < max
  }

  /**
   * Returns arrow type.
   *
   * Возвращает тип стрелок.
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
   * Decreases the value.
   *
   * Уменьшает значение.
   */
  previous(): this {
    const value = this.value.number.value - this.step.value

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
   */
  next(): this {
    const value = this.value.number.value + this.step.value

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
   */
  toMin(): this {
    if (!this.disabledPrevious.value) {
      const min = this.min.value

      if (min !== undefined) {
        this.value.set(min.toString())
      }
    }

    return this
  }

  /**
   * Increases to the maximum value.
   * s
   * Увеличивает до максимального значения.
   */
  toMax(): this {
    if (!this.disabledNext.value) {
      const max = this.max.value

      if (max !== undefined) {
        this.value.set(max.toString())
      }
    }

    return this
  }
}
