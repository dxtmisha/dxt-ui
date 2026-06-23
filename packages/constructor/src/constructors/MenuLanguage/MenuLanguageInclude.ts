import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem } from '../../types/componentInclude'
import type { MenuLanguageExposeInclude, MenuLanguagePropsInclude } from './basicTypes'
import type { MenuLanguageSlots } from './types'
import type { MenuLanguageProps } from './props'

/**
 * MenuLanguageInclude class provides functionality for conditionally rendering MenuLanguage components
 * within other components. It manages the logic for determining when to display MenuLanguage
 * and configures the appropriate properties.
 *
 * Класс MenuLanguageInclude предоставляет функциональность для условного рендеринга компонентов
 * выбора языка MenuLanguage внутри других компонентов. Он управляет логикой определения необходимости
 * отображения MenuLanguage и настраивает соответствующие свойства.
 */
export class MenuLanguageInclude extends ComponentIncludeAbstract<
  MenuLanguagePropsInclude,
  MenuLanguageProps,
  MenuLanguageExposeInclude,
  MenuLanguageSlots
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

  protected override readonly name = 'menuLanguage'
  protected override readonly propsAttrsName = 'menuLanguageAttrs'

  /**
   * Exposes the API methods and properties /
   * Экспортирует API-методы и свойства
   */
  override get expose() {
    return {
      ...super.toExpose(),
      getMenuLanguageElement: () => this.element
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
