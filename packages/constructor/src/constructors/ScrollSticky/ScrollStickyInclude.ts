import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ScrollStickyPropsInclude } from './basicTypes'
import type { ScrollStickyPropsBasic } from './props'
import type { ScrollStickyExpose, ScrollStickySlots } from './types'

/**
 * ScrollStickyInclude class provides functionality for conditionally rendering scroll sticky components
 * within other components.
 *
 * Класс ScrollStickyInclude предоставляет функциональность для условного рендеринга компонентов
 * липкой прокрутки внутри других компонентов.
 */
export class ScrollStickyInclude extends ComponentIncludeAbstract<
  ScrollStickyPropsInclude,
  ScrollStickyPropsBasic,
  ScrollStickyExpose,
  ScrollStickySlots
> {
  /** Component sub-name / Дополнительное имя компонента */
  protected name = 'scrollSticky'
  /** Property name containing raw attributes / Имя свойства, содержащего сырые атрибуты */
  protected propsAttrsName = 'scrollStickyAttrs'

  /**
   * HTML element of the component.
   *
   * HTML элемент компонента.
   */
  get elementHtml(): HTMLDivElement | undefined {
    return this.element.value?.getElement()
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    const props = this.getProps()

    return {
      ...super.toBinds(),
      target: props.scrollStickyTarget,
      header: props.scrollStickyHeader,
      fixWidth: props.scrollStickyFixWidth
    }
  }
}
