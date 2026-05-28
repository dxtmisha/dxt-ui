import { type VNode } from 'vue'
import { getElementId, isFilled, render } from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { PrefixProps, PrefixSlots } from '../types/prefixTypes'

/**
 * Class for managing the state, identification, and rendering of the component's prefix element.
 * It handles checking if the prefix has content from props or slots, resolving its unique ID,
 * and generating the prefix virtual DOM node.
 *
 * Класс для управления состоянием, идентификацией и рендерингом элемента префикса (prefix) компонента.
 * Он проверяет наличие содержимого префикса из свойств или слотов, разрешает его уникальный ID
 * и генерирует виртуальный узел DOM префикса.
 */
export class PrefixInclude {
  /** Default element identifier / Идентификатор элемента по умолчанию */
  protected readonly elementIdDefault = getElementId()

  /**
   * Constructor
   *
   * Конструктор
   * @param props input property / входное свойство
   * @param className class name / название класса
   * @param slots object for working with slots / объект для работы со слотами
   * @param skeleton optional skeleton for loading state / необязательный скелетон для состояния загрузки
   */
  constructor(
    protected readonly props: Readonly<PrefixProps>,
    protected readonly className: string,
    protected readonly slots?: PrefixSlots,
    protected readonly skeleton?: SkeletonInclude
  ) {
  }

  /**
   * Returns true if the prefix is filled.
   *
   * Возвращает true, если prefix заполнен.
   * @returns checking state / состояние проверки
   */
  get is(): boolean {
    return Boolean(this.props.prefix || this.slots?.prefix)
  }

  /**
   * Unique identifier.
   *
   * Уникальный идентификатор.
   * @returns unique identifier string / строка уникального идентификатора
   */
  get id(): string {
    return this.props.prefixId || this.elementIdDefault
  }

  /**
   * Returns the identifier if the element exists.
   *
   * Возвращает идентификатор, если элемент существует.
   * @returns unique identifier or empty string / уникальный идентификатор или пустая строка
   */
  get describedby(): string {
    if (
      isFilled(this.props.prefix)
      || this.slots?.prefix
    ) {
      return this.id
    }

    return ''
  }

  /**
   * Renders prefix element with content from props or slots.
   *
   * Отображает элемент prefix с содержимым из props или slots.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  render(): VNode[] {
    const children: any[] = []

    if (isFilled(this.props.prefix)) {
      children.push(this.props.prefix)
    }

    if (this.slots?.prefix) {
      children.push(this.slots.prefix?.({}))
    }

    if (children.length > 0) {
      return [
        render(
          'div',
          {
            'id': this.id,
            'class': {
              [`${this.className}__prefix`]: true,
              ...this.skeleton?.classes
            },
            'data-event-type': 'prefix'
          },
          children,
          'prefix'
        )
      ]
    }

    return []
  }
}
