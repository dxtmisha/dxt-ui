// ai-none

import { type ConstrBind, getObjectNoUndefined } from '@dxtmisha/functional'
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
  protected override readonly exposeItems = [
    { name: 'toSelected' }
  ]

  /** Component sub-name / Дополнительное имя компонента */
  protected override readonly name = 'horizontalScroll'
  /** Property name containing raw attributes / Имя свойства, содержащего сырые атрибуты */
  protected override readonly propsAttrsName = 'horizontalScrollAttrs'

  /**
   * HTML element of the component.
   *
   * HTML элемент компонента.
   * @returns HTML div element or undefined / HTML-элемент div или undefined
   */
  get elementHtml(): HTMLDivElement | undefined {
    return this.element.value?.getElement()
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
  protected override toBinds(): Partial<ConstrBind<HorizontalScrollPropsBasic>> {
    const props = this.getProps()

    return {
      ...super.toBinds(),
      ...getObjectNoUndefined({
        bleed: props.horizontalScrollBleed,
        align: props.horizontalScrollAlign
      })
    }
  }
}
