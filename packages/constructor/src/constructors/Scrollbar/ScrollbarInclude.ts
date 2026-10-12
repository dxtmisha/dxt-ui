// ai-none

import { h, type VNode } from 'vue'
import { type ConstrEmit, type DesignComponents, toBinds } from '@dxtmisha/functional'

import type { ScrollbarComponentInclude, ScrollbarEmitsInclude, ScrollbarPropsInclude, ScrollbarEdgeType } from './basicTypes'

/**
 * ScrollbarInclude class provides functionality for conditionally rendering scrollbar components
 * within other components with fallback element rendering. It manages the logic for determining
 * when to display a scrollbar and configures the appropriate properties.
 *
 * Note: Intentionally does not extend ComponentIncludeAbstract because it serves as a conditional
 * wrapper component with native element fallback.
 *
 * Класс ScrollbarInclude предоставляет функциональность для условного рендеринга компонентов
 * скроллбара внутри других компонентов с рендерингом запасного элемента. Он управляет логикой
 * определения необходимости отображения скроллбара и настраивает соответствующие свойства.
 *
 * Примечание: Намеренно не наследует ComponentIncludeAbstract, так как служит условным компонентом-обёрткой
 * с запасным рендерингом нативного элемента.
 *
 * @template Props - Properties interface extending ScrollbarPropsInclude
 */
export class ScrollbarInclude<Props extends ScrollbarPropsInclude = ScrollbarPropsInclude> {
  /**
   * Event handlers for scrollbar / Обработчики событий для скроллбара
   */
  protected readonly scrollbarEvents: Record<string, (...args: any[]) => void>

  /**
   * Constructor for ScrollbarInclude class.
   *
   * Конструктор класса ScrollbarInclude.
   * @param props input parameter / входной параметр
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<ScrollbarComponentInclude, Props>,
    protected readonly emits?: ConstrEmit<ScrollbarEmitsInclude>
  ) {
    this.scrollbarEvents = {
      onTop: (isTop: boolean) => this.emits?.('scrollbarTop', isTop),
      onReachTop: () => this.emits?.('scrollbarReachTop'),
      onLeaveTop: () => this.emits?.('scrollbarLeaveTop'),
      onBottom: (isBottom: boolean) => this.emits?.('scrollbarBottom', isBottom),
      onReachBottom: () => this.emits?.('scrollbarReachBottom'),
      onLeaveBottom: () => this.emits?.('scrollbarLeaveBottom'),
      onEdge: (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => this.emits?.('scrollbarEdge', isTop, isBottom, edge)
    }
  }

  /**
   * Renders scrollbar component or fallback element.
   *
   * Рендерит компонент скроллбара или элемент по умолчанию.
   * @param tag HTML tag or component name / HTML-тег или имя компонента
   * @param props additional element properties / дополнительные свойства элемента
   * @param children slot content or child nodes / содержимое слота или дочерние узлы
   * @returns array of rendered VNodes / массив отрендеренных VNode
   */
  render(
    tag: string,
    props?: Record<string, unknown>,
    children?: any
  ): VNode[] {
    if (this.components) {
      const scrollbar = this.components.renderOne(
        'scrollbar',
        toBinds(
          {
            tag,
            class: `${this.className}__scrollbar`,
            ...this.scrollbarEvents
          },
          props,
          this.props.scrollbarAttrs
        ),
        children
      )

      if (scrollbar) {
        return [scrollbar]
      }
    }

    return [h(tag, props as any, children)]
  }
}
