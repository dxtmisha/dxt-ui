// ai-none

import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents,
  type DesignName,
  executeFunction,
  type RawChildren,
  type RawSlots
} from '@dxtmisha/functional'

import type {
  ScrollbarComponentInclude,
  ScrollbarEdgeType,
  ScrollbarEmitsInclude,
  ScrollbarEventList,
  ScrollbarPropsInclude
} from './basicTypes'

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
  protected readonly scrollbarEvents: ScrollbarEventList

  /**
   * Constructor for ScrollbarInclude class.
   *
   * Конструктор класса ScrollbarInclude.
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly naming: DesignName,
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
   * @param slotsChildren sub-component slots or child nodes / слоты субкомпонента или дочерние узлы
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @param tag HTML tag or component name / HTML-тег или имя компонента
   * @returns array of rendered VNodes / массив отрендеренных VNode
   */
  render(
    slotsChildren?: RawChildren | RawSlots,
    attrs: ConstrBind = {},
    tag: string = 'div'
  ): VNode[] {
    if (this.components) {
      const scrollbar = this.components.renderOne(
        'scrollbar',
        mergeProps(
          {
            tag,
            class: this.naming.getSubClass('scrollbar'),
            ...this.scrollbarEvents
          },
          attrs,
          (this.props.scrollbarAttrs ?? {}) as Record<string, unknown>
        ),
        slotsChildren
      )

      if (scrollbar) {
        return [scrollbar]
      }
    }

    return [h(tag, attrs, executeFunction(slotsChildren) as RawChildren)]
  }
}
