import { h, type VNode } from 'vue'
import { type ConstrEmit, DesignComponents, toBind } from '@dxt-ui/functional'

import type { ScrollbarComponentsInclude, ScrollbarEmitsInclude, ScrollbarPropsInclude, ScrollbarEdgeType } from './basicTypes'

/**
 * ScrollbarInclude class provides functionality for conditionally rendering scrollbar components
 * within other components. It manages the logic for determining when to display a scrollbar
 * and configures the appropriate properties.
 *
 * Класс ScrollbarInclude предоставляет функциональность для условного рендеринга компонентов
 * скроллбара внутри других компонентов. Он управляет логикой определения необходимости
 * отображения скроллбара и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending ScrollbarPropsInclude
 */
export class ScrollbarInclude<Props extends ScrollbarPropsInclude = ScrollbarPropsInclude> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<ScrollbarComponentsInclude, Props>,
    protected readonly emits?: ConstrEmit<ScrollbarEmitsInclude>
  ) {
  }

  /**
   * Renders scrollbar component or fallback element
   * Рендерит компонент скроллбара или элемент по умолчанию
   */
  render(
    tag: string,
    props?: Record<string, any>,
    children?: any
  ): VNode[] {
    if (this.components) {
      const scrollbar = this.components.renderOne(
        'scrollbar',
        toBind(
          {
            tag,
            class: `${this.className}__scrollbar`,
            ...(props ?? {}),
            ...this.getScrollbarEvents()
          },
          this.props.scrollbarAttrs ?? {}
        ),
        children
      )

      if (scrollbar) {
        return [scrollbar]
      }
    }

    return [h(tag, props, children)]
  }

  /**
   * Returns event handlers for scrollbar
   * Возвращает обработчики событий для скроллбара
   */
  protected getScrollbarEvents() {
    return {
      onTop: (isTop: boolean) => this.emits?.('scrollbarTop', isTop),
      onReachTop: () => this.emits?.('scrollbarReachTop'),
      onLeaveTop: () => this.emits?.('scrollbarLeaveTop'),
      onBottom: (isBottom: boolean) => this.emits?.('scrollbarBottom', isBottom),
      onReachBottom: () => this.emits?.('scrollbarReachBottom'),
      onLeaveBottom: () => this.emits?.('scrollbarLeaveBottom'),
      onEdge: (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => this.emits?.('scrollbarEdge', isTop, isBottom, edge)
    }
  }
}
