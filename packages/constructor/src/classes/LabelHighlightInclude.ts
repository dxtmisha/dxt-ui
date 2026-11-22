import { computed, type VNode } from 'vue'
import { type ConstrClass, type DesignName, getExp, isFilled, isNumber } from '@dxtmisha/functional'

import { LabelInclude } from './LabelInclude'
import { SkeletonInclude } from '../constructors/Skeleton'

import type { LabelHighlightProps, LabelHighlightSlots } from '../types/labelTypes'

/**
 * The LabelHighlightInclude class extends LabelInclude to add support for highlighting parts of text.
 * Used to display a label with the ability to highlight specific parts.
 *
 * Класс LabelHighlightInclude расширяет LabelInclude и добавляет поддержку выделения частей текста.
 * Используется для отображения метки с возможностью выделения определённых частей.
 */
export class LabelHighlightInclude extends LabelInclude {
  /**
   * Constructor for the LabelHighlightInclude class.
   *
   * Конструктор для класса LabelHighlightInclude.
   * @param props input property / входное свойство
   * @param naming component naming helper / помощник именования компонента
   * @param classesExtra additional classes / дополнительные классы
   * @param slots object for working with slots / объект для работы со слотами
   * @param elementsExtra additional elements / дополнительные элементы
   * @param skeleton callback returning optional skeleton for loading state / функция обратного вызова, возвращающая необязательный скелетон для состояния загрузки
   */
  constructor(
    protected readonly props: Readonly<LabelHighlightProps>,
    protected readonly naming: DesignName,
    protected readonly classesExtra?: ConstrClass,
    protected readonly slots?: LabelHighlightSlots,
    protected readonly elementsExtra?: () => VNode[],
    protected readonly skeleton?: () => SkeletonInclude | undefined
  ) {
    super(
      props,
      naming,
      classesExtra,
      slots,
      elementsExtra,
      computed(() => this.getLabel()),
      undefined,
      skeleton
    )
  }

  /**
   * Determines if highlighting is required.
   *
   * Определяет, требуется ли выделение.
   * @returns true if item matches highlight or highlighting is inactive / true, если элемент совпадает или подсветка неактивна
   */
  isHighlight(): boolean {
    const props = this.props

    if (
      !props.highlight
      || props.highlight.length < this.getLengthStart()
    ) {
      return true
    }

    if (
      !isFilled(props.label, true)
      && !isNumber(props.label)
    ) {
      return false
    }

    const label = String(props.label)
    const expression = getExp(props.highlight, 'i')

    return Boolean(
      label.match(expression)
      || this.isSearchMatch(expression)
    )
  }

  /**
   * Checks whether the value or search metadata matches the highlight expression.
   *
   * Проверяет, соответствует ли значение или строка поиска выражению подсветки.
   * @param expression regular expression for highlight matching / регулярное выражение для проверки подсветки
   * @returns true if value or search matches / true, если значение или поиск совпадает
   */
  protected isSearchMatch(expression: RegExp): boolean {
    const props = this.props

    return Boolean(
      (
        (isFilled(props.value, true) || isNumber(props.value))
        && props.value.toString().match(expression)
      )
      || (
        isFilled(props.search)
        && props.search.match(expression)
      )
    )
  }

  /**
   * Returns a string with highlighted parts.
   * If highlighting is not required, returns the original string.
   *
   * Возвращает строку с выделенными частями.
   * Если выделение не требуется, возвращает исходную строку.
   * @returns highlighted HTML string or undefined / подсвеченная HTML-строка или undefined
   */
  protected getLabel = (): string | undefined => {
    const props = this.props

    if (
      props.highlight
      && props.highlight.length >= this.getLengthStart()
      && (isFilled(props.label, true) || isNumber(props.label))
    ) {
      const className = this.naming.getSubClass('highlight')
      const label = String(props.label)
      const expression = getExp(props.highlight, 'i')

      if (label.match(expression)) {
        return label.replace(expression, text => `<span class="${className}">${text}</span>`)
      }

      if (this.isSearchMatch(expression)) {
        return `<span class="${className}">${label}</span>`
      }
    }

    return undefined
  }

  /**
   * Returns the minimum length of the string to start highlighting.
   *
   * Возвращает минимальную длину строки для начала выделения.
   * @returns minimum highlight length / минимальная длина для подсветки
   */
  protected getLengthStart(): number {
    return this.props.highlightLengthStart ?? 2
  }
}
