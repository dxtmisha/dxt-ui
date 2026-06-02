import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem } from '../../types/componentInclude'
import type { MenuCountryExposeInclude, MenuCountryPropsInclude } from './basicTypes'
import type { MenuCountrySlots } from './types'
import type { MenuCountryProps } from './props'

/**
 * MenuCountryInclude class provides functionality for conditionally rendering MenuCountry components
 * within other components. It manages the logic for determining when to display MenuCountry
 * and configures the appropriate properties.
 *
 * Класс MenuCountryInclude предоставляет функциональность для условного рендеринга компонентов
 * выбора страны MenuCountry внутри других компонентов. Он управляет логикой определения необходимости
 * отображения MenuCountry и настраивает соответствующие свойства.
 */
export class MenuCountryInclude extends ComponentIncludeAbstract<
  MenuCountryPropsInclude,
  MenuCountryProps,
  MenuCountryExposeInclude,
  MenuCountrySlots
> {
  protected readonly exposeItems: ComponentIncludeExposeItem[] | undefined = [
    { name: 'getId' },
    { name: 'getOpen', type: 'boolean' },
    { name: 'getControl' },

    { name: 'setOpen' },
    { name: 'toOpen' },
    { name: 'toClose' },
    { name: 'toggle' },

    { name: 'isSelected', type: 'boolean' },
    { name: 'getSelectedList' },
    { name: 'getSelectedNames' },
    { name: 'getSelectedValues' },

    { name: 'loading' },
    { name: 'previous' },
    { name: 'next' }
  ]

  protected override readonly name = 'menuCountry'
  protected override readonly propsAttrsName = 'menuCountryAttrs'

  /**
   * Exposes the API methods and properties /
   * Экспортирует API-методы и свойства
   */
  override get expose() {
    return {
      ...super.toExpose(),
      getMenuCountryElement: () => this.element
    }
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): any {
    return {
      ...super.toBinds(),
      disabled: this.getProps().disabled
    }
  }
}
