import { type VNode } from 'vue'
import { isFilled, render } from '@dxtmisha/functional'

import { AriaStaticInclude } from './AriaStaticInclude'
import { SkeletonInclude } from '../constructors/Skeleton'

import type { CaptionProps, CaptionSlots } from '../types/captionTypes'

/**
 * Class for managing the state, bindings, and rendering of the component's caption element.
 * It handles checking if the caption has content from props or slots, generating
 * appropriate ARIA accessibility attributes, and rendering the caption element.
 *
 * Класс для управления состоянием, привязками и рендерингом элемента подписи (caption) компонента.
 * Он проверяет наличие содержимого подписи из свойств или слотов, генерирует
 * соответствующие атрибуты доступности ARIA и отображает элемент подписи.
 */
export class CaptionInclude {
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
    protected readonly props: Readonly<CaptionProps>,
    protected readonly className: string,
    protected readonly slots?: CaptionSlots,
    protected readonly skeleton?: SkeletonInclude
  ) {
  }

  /**
   * Returns true if the caption is filled.
   *
   * Возвращает true, если caption заполнен.
   * @returns checking state / состояние проверки
   */
  get is(): boolean {
    return Boolean(this.props.caption || this.slots?.caption)
  }

  /**
   * Returns bindings for the caption element.
   *
   * Возвращает привязки для элемента подписи.
   * @returns list of attributes / список атрибутов
   */
  get binds() {
    const binds = {
      'class': {
        [`${this.className}__caption`]: true,
        ...this.skeleton?.classes
      },
      'data-event-type': 'caption'
    }

    if (this.props.captionDecorative) {
      return {
        ...binds,
        ...AriaStaticInclude.hidden()
      }
    }

    return {
      ...binds,
      ...AriaStaticInclude.live('polite'),
      ...AriaStaticInclude.atomic(true)
    }
  }

  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   * @returns list of virtual nodes / список виртуальных узлов
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
          this.binds,
          children,
          'caption'
        )
      ]
    }

    return []
  }
}
