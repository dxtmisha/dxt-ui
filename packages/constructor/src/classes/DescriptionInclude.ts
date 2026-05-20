import { computed, type VNode } from 'vue'
import { getElementId, getRef, isFilled, type RefOrNormal, render, toBinds } from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { DescriptionProps, DescriptionSlots } from '../types/descriptionTypes'

/**
 * Use for adding description text
 *
 * Использование для добавления описания текста
 */
export class DescriptionInclude {
  protected readonly elementIdDefault = getElementId()

  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   * @param tag tag name/ имя тега
   */
  constructor(
    protected readonly props: Readonly<DescriptionProps>,
    protected readonly className: string,
    protected readonly slots?: DescriptionSlots,
    protected readonly skeleton?: SkeletonInclude,
    protected readonly tag: RefOrNormal<string> = 'div'
  ) {
  }

  /** Check for the presence of a description/ Проверка наличия описания */
  readonly is = computed(() => Boolean(this.props.description || this.slots?.description))

  /** Unique identifier/ Уникальный идентификатор */
  readonly id = computed<string>(
    () => this.props?.descriptionId || this.elementIdDefault
  )

  /**
   * Render the description
   *
   * Рендер описания
   * @param childrenExtra additional children/ дополнительные дочерние элементы
   * @param props additional properties/ дополнительные свойства
   */
  render(
    childrenExtra?: any[],
    props: Record<string, any> = {}
  ): VNode[] {
    const children: any[] = []

    if (isFilled(this.props.description)) {
      children.push(this.props.description)
    }

    if (this.slots?.description) {
      children.push(this.slots.description?.({}))
    }

    if (childrenExtra) {
      children.push(...childrenExtra)
    }

    if (children.length > 0) {
      return [
        render(
          getRef(this.tag),
          toBinds(
            {
              id: this.id.value,
              class: {
                [`${this.className}__description`]: true,
                ...this.skeleton?.classes.value
              }
            },
            props
          ),
          children,
          'description'
        )
      ]
    }

    return []
  }
}
