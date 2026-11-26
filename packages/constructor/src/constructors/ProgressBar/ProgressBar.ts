import { computed } from 'vue'
import {
  type ConstrItems,
  DesignLogicAbstract,
  isArray,
  isFilled,
  isNumber,
  isObjectNotArray,
  toNumber
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { SkeletonInclude } from '../Skeleton'

import type { ProgressBarProps } from './props'
import type { ProgressBarComponents, ProgressBarEmits, ProgressBarSlots } from './types'
import type { ProgressBarItem, ProgressBarInfoItem, ProgressBarInfoList, ProgressBarList } from './basicTypes'

/** ProgressBar dependency constructors type / Тип конструкторов зависимостей ProgressBar */
export type ProgressBarConstructors = {
  /** Skeleton manager constructor / Конструктор менеджера скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * ProgressBar orchestrator class managing multi-segment progress value normalization,
 * percentage calculation, ARIA progressbar attributes, and skeleton class integration.
 *
 * Класс-оркестратор ProgressBar, управляющий нормализацией значений многосегментного прогресса,
 * вычислением процентов, ARIA-атрибутами progressbar и интеграцией классов скелетона.
 */
export class ProgressBar extends DesignLogicAbstract<
  HTMLDivElement,
  ProgressBarComponents,
  ProgressBarEmits,
  ProgressBarSlots,
  ProgressBarProps,
  ProgressBarConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ProgressBarConstructors> = {
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classBackgroundVariant']
      ]
    }
  }

  /**
   * Returns the current total value across all progress segments.
   *
   * Возвращает текущее суммарное значение по всем сегментам прогресса.
   * @returns total numeric value / суммарное числовое значение
   */
  get value(): number {
    let total = 0

    this.standard.forEach((item) => {
      total += toNumber(item.value ?? 0)
    })

    return total
  }

  /**
   * Returns the maximum available value.
   *
   * Возвращает максимальное доступное значение.
   * @returns maximum numeric value / максимальное числовое значение
   */
  get max(): number {
    if (
      isFilled(this.props.max)
      || isNumber(this.props.max)
    ) {
      return toNumber(this.props.max)
    }

    let maximumValue = 0

    this.standard.forEach((item) => {
      maximumValue += toNumber(item.value ?? 0)
    })

    return maximumValue
  }

  /**
   * Returns the normalized list of progress segments.
   *
   * Возвращает нормализованный список сегментов прогресса.
   * @returns list of normalized progress items / список нормализованных элементов прогресса
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
   * Computed list of processed progress segments including any remainder space.
   *
   * Вычисляемый список обработанных сегментов прогресса с учётом остатка.
   * @returns processed items list / список обработанных элементов
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
   * Returns the skeleton text class when skeleton mode is active.
   *
   * Возвращает класс текста скелетона при активном режиме скелетона.
   * @returns text skeleton class name / имя класса текста скелетона
   */
  getSkeletonTextClass(): string {
    return this.callInstance('skeleton', item => item.classesSkeleton.classText, '')
  }

  /**
   * Returns the skeleton background class when skeleton mode is active.
   *
   * Возвращает класс фона скелетона при активном режиме скелетона.
   * @returns background skeleton class name / имя класса фона скелетона
   */
  getSkeletonBackgroundClass(): string {
    return this.callInstance('skeleton', item => item.classesSkeleton.classBackground, '')
  }

  /**
   * Returns the class name of the progress item.
   *
   * Возвращает название класса элемента прогресса.
   * @returns class name / название класса
   */
  protected getItemClassName(): string {
    return this.naming.getSubClass('item')
  }

  /**
   * Returns processed display, class, style, and ARIA data for a progress bar item.
   *
   * Возвращает обработанные данные отображения, классов, стилей и ARIA для элемента прогресс-бара.
   * @param item input item data / входящие данные элемента
   * @param max maximum value / максимальное значение
   * @returns processed item / обработанный элемент
   */
  protected getItem(item: ProgressBarItem, max: number): ProgressBarInfoItem {
    const palette = item.color ? undefined : (item.palette ?? this.props.palette)
    const color = item.color || (!palette && this.props.color) || null
    const numericValue = toNumber(item.value ?? 0)
    const percent = max > 0 ? Math.max(0, 100 / max * numericValue) : 0
    const classNameItem = this.getItemClassName()

    return {
      ...item,
      percent,
      classes: {
        [`${classNameItem}--focus`]: isFilled(this.props.focus) && this.props.focus === item.index,
        [`${classNameItem}--palette`]: Boolean(palette),
        [`${classNameItem}--color`]: Boolean(color),
        [`${this.naming.getDesign()}-palette--${palette}`]: Boolean(palette)
      },
      style: {
        [this.naming.getStyle('percent')]: `${percent}%`,
        [this.naming.getStyle('color')]: color
      },
      aria: {
        ...AriaStaticInclude.role('progressbar'),
        ...AriaStaticInclude.valueMinMax(
          numericValue,
          0,
          max
        ),
        ...AriaStaticInclude.label(item.label ?? `${Math.round(percent)}%`)
      }
    }
  }

  /**
   * Returns data for the empty space segment of the progress bar.
   *
   * Возвращает данные для сегмента пустого пространства прогресс-бара.
   * @param remainder remainder percentage / процент остатка
   * @returns space item / элемент пустого пространства
   */
  protected getSpace(remainder: number): ProgressBarInfoItem {
    return {
      value: 0,
      percent: remainder,
      classes: {
        [`${this.getItemClassName()}--space`]: true
      },
      style: {
        [this.naming.getStyle('percent')]: `${remainder}%`
      },
      aria: {
        ...AriaStaticInclude.hidden()
      }
    }
  }
}
