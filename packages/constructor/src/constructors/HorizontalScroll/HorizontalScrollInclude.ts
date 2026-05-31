import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { HorizontalScrollPropsInclude } from './basicTypes'
import type { HorizontalScrollPropsBasic } from './props'
import type { HorizontalScrollExpose, HorizontalScrollSlots } from './types'

/**
 * HorizontalScrollInclude class provides functionality for conditionally rendering horizontal scroll components
 * within other components. It manages the logic for determining when to display a horizontal scroll
 * and configures the appropriate properties.
 *
 * Класс HorizontalScrollInclude предоставляет функциональность для условного рендеринга компонентов
 * горизонтальной прокрутки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения горизонтальной прокрутки и настраивает соответствующие свойства.
 */
export class HorizontalScrollInclude extends ComponentIncludeAbstract<
  HorizontalScrollPropsInclude,
  HorizontalScrollPropsBasic,
  HorizontalScrollExpose,
  HorizontalScrollSlots
> {
  /** List of methods to expose from the sub-component / Список методов для экспорта из субкомпонента */
  protected readonly exposeItems = [
    { name: 'toSelected' }
  ]

  /** Component sub-name / Дополнительное имя компонента */
  protected name = 'horizontalScroll'
  /** Property name containing raw attributes / Имя свойства, содержащего сырые атрибуты */
  protected propsAttrsName = 'horizontalScrollAttrs'

  /**
   * HTML element of the component.
   *
   * HTML элемент компонента.
   */
  get elementHtml(): HTMLDivElement | undefined {
    return this.element.value?.elementHtml
  }

  /**
   * Scrolls to the selected element.
   *
   * Прокручивает к выбранному элементу.
   */
  readonly toSelected = (): void => {
    this.element.value?.toSelected?.()
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
      bleed: props.horizontalScrollBleed,
      align: props.horizontalScrollAlign
    }
  }
}
