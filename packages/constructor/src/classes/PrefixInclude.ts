import { computed, type VNode } from 'vue'
import { isFilled, render } from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { PrefixProps, PrefixSlots } from '../types/prefixTypes'

/**
 * Class for working with prefix.
 *
 * Класс для работы с prefix.
 */
export class PrefixInclude {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(
    protected readonly props: Readonly<PrefixProps>,
    protected readonly className: string,
    protected readonly slots?: PrefixSlots,
    protected readonly skeleton?: SkeletonInclude
  ) {
  }

  /**
   * Returns true if prefix is filled
   *
   * Возвращает true, если prefix заполнен
   */
  readonly is = computed(() => Boolean(this.props.prefix || this.slots?.prefix))

  /**
   * Renders prefix element with content from props or slots.
   *
   * Отображает элемент prefix с содержимым из props или slots.
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
            'class': {
              [`${this.className}__prefix`]: true,
              ...this.skeleton?.classes.value
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
