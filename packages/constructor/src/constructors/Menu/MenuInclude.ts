import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem } from '../../types/componentInclude'
import type { MenuExposeInclude, MenuPropsInclude } from './basicTypes'
import type { MenuSlots } from './types'
import type { MenuProps } from './props'

/**
 * MenuInclude class provides functionality for conditionally rendering menu components
 * within other components. It manages the logic for determining when to display menu
 * and configures the appropriate properties.
 *
 * Класс MenuInclude предоставляет функциональность для условного рендеринга компонентов
 * меню внутри других компонентов. Он управляет логикой определения необходимости
 * отображения меню и настраивает соответствующие свойства.
 */
export class MenuInclude<
  Props extends MenuPropsInclude = MenuPropsInclude,
  PropsExtra extends MenuProps = MenuProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    MenuExposeInclude,
    MenuSlots,
    any
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

  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'menu'

  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'menuAttrs'

  /**
   * Exposes the API methods and properties /
   * Экспортирует API-методы и свойства
   */
  override get expose(): MenuExposeInclude {
    return {
      ...super.toExpose(),
      getMenuElement: () => this.element as any
    }
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    return {
      ...super.toBinds(),
      disabled: this.getProps().disabled
    }
  }
}
