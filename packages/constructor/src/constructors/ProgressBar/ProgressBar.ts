import { computed } from 'vue'
import type { Ref, ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  isArray,
  isFilled,
  isObjectNotArray,
  toNumber
} from '@dxtmisha/functional'

import type { ProgressBarComponents, ProgressBarEmits, ProgressBarSlots } from './types'
import type { ProgressBarProps } from './props'
import type { ProgressBarItem, ProgressBarInfoItem, ProgressBarInfoList, ProgressBarList } from './basicTypes'

/**
 * Class for working with the progress bar component.
 *
 * Класс для работы с компонентом прогрессивный бар.
 */
export class ProgressBar {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ProgressBarProps,
    protected readonly refs: ToRefs<ProgressBarProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ProgressBarComponents, ProgressBarProps>,
    protected readonly slots?: ProgressBarSlots,
    protected readonly emits?: ConstrEmit<ProgressBarEmits>
  ) {
  }

  /**
   * Returns the data format to the standard view.
   *
   * Возвращает формат данных в стандартный вид.
   */
  protected get standard(): ProgressBarList {
    const value = this.props.value

    if (isArray(value)) {
      return value
    }

    if (isObjectNotArray(value)) {
      return [value]
    }

    if (typeof value === 'number') {
      return [{ value }]
    }

    if (typeof value === 'string') {
      return [{ value: toNumber(value) }]
    }

    return []
  }

  /**
   * Returns the maximum available value.
   *
   * Возвращает максимальное доступное значение.
   */
  get max(): number {
    if (isFilled(this.props.max)) {
      return toNumber(this.props.max)
    }

    let maximumValue = 0

    this.standard.forEach((item) => {
      maximumValue += toNumber(item.value ?? 0)
    })

    return maximumValue
  }

  /**
   * Returns processed data for work.
   *
   * Возвращает обработанные данные для работы.
   */
  readonly item = computed<ProgressBarInfoList>(() => {
    const value: ProgressBarInfoList = []
    const max = this.max
    let remainder = 100

    this.standard.forEach((item) => {
      const infoItem = this.getItem(item, max)

      value.push(infoItem)
      remainder -= infoItem.percent
    })

    if (remainder > 0) {
      value.push(this.getSpace(remainder))
    }

    return value
  })

  /**
   * Returns data for the progress bar item.
   *
   * Возвращает данные для элемента прогресс-бара.
   * @param item input item data / входящие данные элемента
   * @param max maximum value / максимальное значение
   * @returns processed item / обработанный элемент
   */
  protected getItem(item: ProgressBarItem, max: number): ProgressBarInfoItem {
    const palette = item.color ? undefined : (item.palette ?? this.props.palette)
    const color = item.color || (!palette && this.props.color) || null
    const percent = 100 / max * toNumber(item.value)

    return {
      ...item,
      percent,
      classes: {
        [`${this.className}__item--focus`]: Boolean(this.props.focus) && this.props.focus === item.index,
        [`${this.className}__item--palette`]: Boolean(palette),
        [`${this.className}__item--color`]: Boolean(color),
        [`${this.classDesign}-palette--${palette}`]: Boolean(palette)
      },
      style: {
        [`--${this.className}-sys-percent`]: `${percent}%`,
        [`--${this.className}-sys-color`]: color
      }
    }
  }

  /**
   * Returns data for the empty space of the progress bar.
   *
   * Возвращает данные для пустого пространства прогресс-бара.
   * @param remainder remainder percentage / процент остатка
   * @returns space item / элемент пустого пространства
   */
  protected getSpace(remainder: number): ProgressBarInfoItem {
    return {
      value: 0,
      percent: remainder,
      classes: {
        [`${this.className}--space`]: true
      },
      style: {
        [`--${this.className}-sys-percent`]: `${remainder}%`
      }
    }
  }
}
