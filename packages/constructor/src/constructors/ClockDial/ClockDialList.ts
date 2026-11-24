// ai-none

import { computed, type ComputedRef } from 'vue'
import { toNumber, type DesignName } from '@dxtmisha/functional'

import type { ClockDialMarkItem } from './basicTypes'
import type { ClockDialProps } from './props'

/** Full circle angle in degrees / Полный угол окружности в градусах */
const FULL_CIRCLE_DEGREES = 360

/** Number of marks for 12-hour clock mode / Количество меток для 12-часового режима */
const COUNT_12_HOURS = 12

/** Number of marks for 24-hour clock mode / Количество меток для 24-часового режима */
const COUNT_24_HOURS = 24

/** Number of marks for minute/second clock modes / Количество меток для режимов минут и секунд */
const COUNT_MINUTES_SECONDS = 60

/**
 * Class for managing and generating clock dial items and tick divisions.
 *
 * Класс для управления и генерации элементов циферблата часов и делений.
 */
export class ClockDialList {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props component input properties / входные свойства компонента
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly props: Readonly<ClockDialProps>,
    protected readonly naming: DesignName
  ) {}

  /**
   * Computed array of clock dial division marks.
   *
   * Вычисляемый массив меток делений циферблата часов.
   */
  readonly marks: ComputedRef<ClockDialMarkItem[]> = computed(() => {
    const items: ClockDialMarkItem[] = []
    const count = this.maxCount
    const rotateStep = this.rotate
    const minimum = toNumber(this.props.min ?? 0)
    const maximum = toNumber(this.props.max ?? COUNT_MINUTES_SECONDS)
    const step = toNumber(this.props.step ?? 1)
    const styleProperty = this.naming.getStyle('valueRotate')
    const isDisabledAll = Boolean(this.props.disabled)

    for (let index = 1; index <= count; index++) {
      const isZeroValue = index === count && count !== COUNT_12_HOURS
      const value = isZeroValue ? 0 : index
      const valueRotate = `${rotateStep * index}deg`
      const name = value < 10 ? `0${value}` : `${value}`
      const section = count === COUNT_24_HOURS && (value > COUNT_12_HOURS || value === 0)
      const isStepValid = step <= 1 || ((value - minimum) % step === 0)
      const disabled = isDisabledAll
        || value < minimum
        || value > maximum
        || !isStepValid

      items.push({
        name,
        rotate: valueRotate,
        section,
        style: {
          [styleProperty]: valueRotate
        },
        value,
        disabled
      })
    }

    return items
  })

  /**
   * Maximum count of divisions for current clock type.
   *
   * Максимальное количество делений для текущего типа часов.
   * @returns maximum count / максимальное количество
   */
  get maxCount(): number {
    switch (this.props.type) {
      case '12':
        return COUNT_12_HOURS
      case '24':
        return COUNT_24_HOURS
      case 'minute':
      case 'second':
      default:
        return COUNT_MINUTES_SECONDS
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
        return FULL_CIRCLE_DEGREES / COUNT_12_HOURS
      case 'minute':
      case 'second':
      default:
        return FULL_CIRCLE_DEGREES / COUNT_MINUTES_SECONDS
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
