import { computed, type VNode } from 'vue'
import { isFilled, render } from '@dxt-ui/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { CaptionProps, CaptionSlots } from '../types/captionTypes'

/**
 * Class for working with caption.
 *
 * Класс для работы с caption.
 */
export class CaptionInclude {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(
    protected readonly props: Readonly<CaptionProps>,
    protected readonly className: string,
    protected readonly slots?: CaptionSlots,
    protected readonly skeleton?: SkeletonInclude
  ) {
  }

  /**
   * Returns true if caption is filled
   *
   * Возвращает true, если caption заполнен
   */
  readonly is = computed(() => Boolean(this.props.caption || this.slots?.caption))

  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   */
  render(): VNode[] {
    const children: any[] = []

    if (isFilled(this.props.caption)) {
      children.push(this.props.caption)
    }

    if (this.slots?.caption) {
      children.push(this.slots.caption?.({}))
    }

    if (children.length > 0) {
      return [
        render(
          'div',
          {
            class: {
              [`${this.className}__caption`]: true,
              ...this.skeleton?.classes.value
            }
          },
          children,
          'caption'
        )
      ]
    }

    return []
  }
}
