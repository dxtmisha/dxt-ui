// ai-none

import { mergeProps, type Ref } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem } from '../../types/componentInclude'
import type { MenuExposeInclude, MenuPropsInclude } from './basicTypes'
import type { MenuExpose, MenuSlots } from './types'
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
    Partial<ConstrBind<MenuProps>>
  > {
  /** List of methods to expose from the sub-component / Список методов для экспорта из субкомпонента */
  protected override readonly exposeItems: ComponentIncludeExposeItem[] | undefined = [
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
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<PropsExtra>> {
    const props = this.getProps()

    return mergeProps(
      super.toBinds(),
      {
        ...(props.disabled !== undefined ? { disabled: props.disabled } : {}),
        ...(props.disableFocusReturn !== undefined ? { disableFocusReturn: props.disableFocusReturn } : {})
      }
    ) as Partial<ConstrBind<PropsExtra>>
  }

  /**
   * Collects and exposes defined proxy methods of the sub-component.
   *
   * Собирает и экспортирует определенные прокси-методы субкомпонента.
   * @returns exposed API object / объект экспортируемого API
   */
  protected override toExpose(): MenuExposeInclude {
    return {
      ...super.toExpose(),
      getMenuElement: () => this.element as Ref<ConstrBind<MenuExpose> | undefined>
    }
  }
}
