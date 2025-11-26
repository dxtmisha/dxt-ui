import { computed, type VNode } from 'vue'
import { getElementId, isFilled, render } from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { DescriptionExpose, DescriptionProps, DescriptionSlots } from '../types/descriptionTypes'

/**
 * Use for adding description text
 *
 * Использование для добавления описания текста
 */
export class DescriptionInclude {
  /** Unique identifier/ Уникальный идентификатор */
  protected id = getElementId()

  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(
    protected readonly props: Readonly<DescriptionProps>,
    protected readonly className: string,
    protected readonly slots?: DescriptionSlots,
    protected readonly skeleton?: SkeletonInclude
  ) {
  }

  /**
   * Check for the presence of a description
   *
   * Проверка наличия описания
   */
  readonly is = computed(() => Boolean(this.props.description || this.slots?.description))

  /** Description expose reference/ Ссылка на expose описания */
  readonly expose: DescriptionExpose = {
    descriptionId: this.id
  }

  /**
   * Get description ID
   *
   * Получить ID описания
   */
  getId(): string {
    return this.id
  }

  /**
   * Render the description
   *
   * Рендер описания
   */
  render(): VNode[] {
    const children: any[] = []

    if (isFilled(this.props.description)) {
      children.push(this.props.description)
    }

    if (this.slots?.description) {
      children.push(this.slots.description?.({}))
    }

    if (children.length > 0) {
      return [
        render(
          'div',
          {
            class: {
              [`${this.className}__description`]: true,
              ...this.skeleton?.classes.value
            }
          },
          children,
          'description'
        )
      ]
    }

    return []
  }
}
