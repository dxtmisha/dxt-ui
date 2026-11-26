import { type VNode, type VNodeArrayChildren } from 'vue'
import { getElementId, type DesignName, isFilled, render } from '@dxtmisha/functional'

import { SkeletonInclude, type SkeletonPropsInclude } from '../constructors/Skeleton'

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
  /**
   * Checks whether suffix content is present in properties or slots.
   *
   * Проверяет наличие содержимого суффикса в свойствах или слотах.
   * @param props suffix properties / свойства суффикса
   * @param slots suffix slots / слоты суффикса
   * @returns true if suffix is present / true, если суффикс присутствует
   */
  static is(
    props?: Readonly<SuffixProps>,
    slots?: SuffixSlots
  ): boolean {
    return isFilled(props?.suffix) || Boolean(slots?.suffix)
  }

  /** Default element identifier / Идентификатор элемента по умолчанию */
  protected readonly elementIdDefault = getElementId()

  /**
   * Constructor
   *
   * Конструктор
   * @param props input property / входное свойство
   * @param naming component naming helper / помощник именования компонента
   * @param slots object for working with slots / объект для работы со слотами
   * @param skeleton callback returning optional skeleton for loading state / функция обратного вызова, возвращающая необязательный скелетон для состояния загрузки
   */
  constructor(
    protected readonly props: Readonly<SuffixProps & SkeletonPropsInclude>,
    protected readonly naming: DesignName,
    protected readonly slots?: SuffixSlots,
    protected readonly skeleton?: () => SkeletonInclude | undefined
  ) {
  }

  /**
   * Returns true if the suffix is filled.
   *
   * Возвращает true, если suffix заполнен.
   * @returns checking state / состояние проверки
   */
  get is(): boolean {
    return SuffixInclude.is(this.props, this.slots)
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
    if (this.is) {
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
    const children: VNodeArrayChildren = []

    if (isFilled(this.props.suffix)) {
      children.push(this.props.suffix)
    }

    if (this.slots?.suffix) {
      children.push(this.slots.suffix?.({}))
    }

    if (children.length > 0) {
      const skeleton = this.getSkeleton()

      return [
        render(
          'div',
          {
            'id': this.id,
            'class': {
              [this.naming.getSubClass('suffix')]: true,
              ...skeleton?.classes
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

  /**
   * Returns the skeleton instance if skeleton mode is active.
   *
   * Возвращает экземпляр скелетона, если режим скелетона активен.
   * @returns skeleton instance or undefined / экземпляр скелетона или undefined
   */
  protected getSkeleton(): SkeletonInclude | undefined {
    if (SkeletonInclude.is(this.props)) {
      return this.skeleton?.()
    }

    return undefined
  }
}
