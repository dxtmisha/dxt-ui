import { computed, type VNode } from 'vue'
import { getElementId, isFilled, render } from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { SuffixProps, SuffixSlots } from '../types/suffixTypes'

/**
 * Class for working with suffix.
 *
 * Класс для работы с suffix.
 */
export class SuffixInclude {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(
    protected readonly props: Readonly<SuffixProps>,
    protected readonly className: string,
    protected readonly slots?: SuffixSlots,
    protected readonly skeleton?: SkeletonInclude
  ) {
  }

  /**
   * Returns true if the suffix is filled
   *
   * Возвращает true, если suffix заполнен
   */
  readonly is = computed(() => Boolean(this.props.suffix || this.slots?.suffix))

  /** Unique identifier/ Уникальный идентификатор */
  readonly id = computed<string>(
    () => this.props.suffixId || getElementId()
  )

  /**
   * Returns the identifier if the element exists.
   *
   * Возвращает идентификатор, если элемент существует.
   */
  readonly describedby = computed<string>(() => {
    if (
      isFilled(this.props.suffix)
      || this.slots?.suffix
    ) {
      return this.id.value
    }

    return ''
  })

  /**
   * Renders suffix element with content from props or slots.
   *
   * Отображает элемент suffix с содержимым из props или slots.
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
            'id': this.id.value,
            'class': {
              [`${this.className}__suffix`]: true,
              ...this.skeleton?.classes.value
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
