import { computed, type VNode } from 'vue'
import { type ConstrClass, GeoRef, isNumber, toNumberByMax } from '@dxt-ui/functional'

import { LabelInclude } from './LabelInclude'
import { SkeletonInclude } from '../constructors/Skeleton'

import type { LabelNumberProps, LabelNumberSlots } from '../types/labelTypes'

/**
 * The LabelNumberInclude class extends LabelInclude to handle numeric labels.
 * Allows converting and displaying numeric values with respect to maximum constraints.
 *
 * Класс LabelNumberInclude расширяет LabelInclude для работы с числовыми метками.
 * Позволяет преобразовывать и отображать числовые значения с учетом максимальных ограничений.
 */
export class LabelNumberInclude extends LabelInclude {
  /**
   * Constructor for working with text that has maximum values.
   *
   * Конструктор для работы с текстом, у которого есть максимальные значения.
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(
    protected readonly props: Readonly<LabelNumberProps>,
    protected readonly className: string,
    protected readonly classesExtra?: ConstrClass,
    protected readonly slots?: LabelNumberSlots,
    protected readonly elementsExtra?: () => VNode[],
    protected readonly skeleton?: SkeletonInclude
  ) {
    super(
      props,
      className,
      classesExtra,
      slots,
      elementsExtra,
      computed(() => this.getNumber()),
      undefined,
      skeleton
    )
  }

  /**
   * Returns text with conversion to maximum values.
   *
   * Возвращает текст с преобразованием в максимальные значения.
   */
  protected getNumber(): string | undefined {
    const props = this.props

    if (
      props.label
      && isNumber(props.label)
    ) {
      return toNumberByMax(
        props.label,
        props.labelMax,
        props.formatting,
        GeoRef.getLanguage().value
      ).toString()
    }

    return undefined
  }
}
