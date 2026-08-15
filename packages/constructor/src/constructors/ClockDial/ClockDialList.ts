import { computed, type ComputedRef } from 'vue'
import { toNumber } from '@dxtmisha/functional'

import type { ClockDialMarkItem } from './basicTypes'
import type { ClockDialProps } from './props'

/**
 * Class for managing and generating clock dial items and tick divisions.
 *
 * Класс для управления и генерации элементов циферблата часов и делений.
 */
export class ClockDialList {
  /**
   * Computed array of clock dial division marks.
   *
   * Вычисляемый массив меток делений циферблата часов.
   * @returns computed array of clock dial mark items / вычисляемый массив элементов меток циферблата
   */
  readonly marks: ComputedRef<ClockDialMarkItem[]> = computed(() => {
    const items: ClockDialMarkItem[] = []
    const count = this.maxCount
    const rotateStep = this.rotate
    const minimum = toNumber(this.props.min ?? 0)
    const maximum = toNumber(this.props.max ?? 60)
    const step = toNumber(this.props.step ?? 1)

    for (let index = 1; index <= count; index++) {
      const isZeroValue = index === count && count !== 12
      const value = isZeroValue ? 0 : index
      const valueRotate = `${rotateStep * index}deg`
      const name = value < 10 ? `0${value}` : `${value}`
      const section = count === 24 && (value > 12 || value === 0)
      const isStepValid = step <= 1 || ((value - minimum) % step === 0)
      const disabled = Boolean(this.props.disabled)
        || value < minimum
        || value > maximum
        || !isStepValid

      items.push({
        name,
        rotate: valueRotate,
        section,
        style: {
          [`--${this.className}-sys-valueRotate`]: valueRotate
        },
        value,
        disabled
      })
    }

    return items
  })

  /**
   * Constructor
   * @param props component input properties / входные свойства компонента
   * @param className base CSS class name / базовое имя CSS класса
   */
  constructor(
    protected readonly props: ClockDialProps,
    protected readonly className: string
  ) { }

  /**
   * Maximum count of divisions for current clock type.
   *
   * Максимальное количество делений для текущего типа часов.
   * @returns maximum count / максимальное количество
   */
  get maxCount(): number {
    switch (this.props.type) {
      case '12':
        return 12
      case '24':
        return 24
      case 'minute':
      case 'second':
      default:
        return 60
    }
  }

  /**
   * Rotation step in degrees.
   *
   * Шаг поворота в градусах.
   * @returns rotation step in degrees / шаг поворота в градусах
   */
  get rotate(): number {
    switch (this.props.type) {
      case '12':
      case '24':
        return 360 / 12
      case 'minute':
      case 'second':
      default:
        return 360 / 60
    }
  }

  /**
   * Checks if an item with given value is in the inner section (24-hour mode).
   *
   * Проверяет, находится ли элемент с указанным значением во внутренней секции (24-часовой режим).
   * @param value numeric value to check / числовое значение для проверки
   * @returns boolean section state / флаг секции
   */
  isSection(value?: number): boolean {
    const item = this.find(value)
    return Boolean(item?.section)
  }

  /**
   * Finds a clock dial mark item by value.
   *
   * Находит элемент метки циферблата часов по значению.
   * @param value numeric value to search / числовое значение для поиска
   * @returns clock dial mark item or undefined / элемент метки циферблата или undefined
   */
  find(value?: number): ClockDialMarkItem | undefined {
    if (value === undefined || value === -1) {
      return undefined
    }

    return this.marks.value.find(item => item.value === value)
  }
}
