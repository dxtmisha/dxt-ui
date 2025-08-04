import { h, type VNode } from 'vue'
import { DesignComponents, toBind } from '@dxt-ui/functional'

import type { ScrollbarComponentsInclude, ScrollbarPropsInclude } from './basicTypes'

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
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<ScrollbarComponentsInclude, Props>
  ) {
  }

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
            ...(props ?? {})
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
}
