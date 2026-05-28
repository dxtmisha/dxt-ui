import { type VNode } from 'vue'
import { getElementId, isFilled, render } from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { SuffixProps, SuffixSlots } from '../types/suffixTypes'

/**
 * Class for managing the state, identification, and rendering of the component's suffix element.
 * It handles checking if the suffix has content from props or slots, resolving its unique ID,
 * and generating the suffix virtual DOM node.
 *
 * Класс для управления состоянием, идентификацией и рендерингом элемента суффикса (suffix) компонента.
 * Он проверяет наличие содержимого суффикса из свойств или слотов, разрешает его уникальный ID
 * и генерирует виртуальный узел DOM суффикса.
 */
export class SuffixInclude {
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
    protected readonly props: Readonly<SuffixProps>,
    protected readonly className: string,
    protected readonly slots?: SuffixSlots,
    protected readonly skeleton?: SkeletonInclude
  ) {
  }

  /**
   * Returns true if the suffix is filled.
   *
   * Возвращает true, если suffix заполнен.
   * @returns checking state / состояние проверки
   */
  get is(): boolean {
    return Boolean(this.props.suffix || this.slots?.suffix)
  }

  /**
   * Unique identifier.
   *
   * Уникальный идентификатор.
   * @returns unique identifier string / строка уникального идентификатора
   */
  get id(): string {
    return this.props.suffixId || this.elementIdDefault
  }

  /**
   * Returns the identifier if the element exists.
   *
   * Возвращает идентификатор, если элемент существует.
   * @returns unique identifier or empty string / уникальный идентификатор или пустая строка
   */
  get describedby(): string {
    if (
      isFilled(this.props.suffix)
      || this.slots?.suffix
    ) {
      return this.id
    }

    return ''
  }

  /**
   * Renders suffix element with content from props or slots.
   *
   * Отображает элемент suffix с содержимым из props или slots.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  render(): VNode[] {
    const children: any[] = []

    if (isFilled(this.props.suffix)) {
      children.push(this.props.suffix)
    }

    if (this.slots?.suffix) {
      children.push(this.slots.suffix?.({}))
    }

    if (children.length > 0) {
      return [
        render(
          'div',
          {
            'id': this.id,
            'class': {
              [`${this.className}__suffix`]: true,
              ...this.skeleton?.classes
            },
            'data-event-type': 'suffix'
          },
          children,
          'suffix'
        )
      ]
    }

    return []
  }
}
