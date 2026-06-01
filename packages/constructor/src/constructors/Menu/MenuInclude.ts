import { computed } from 'vue'
import {
  type ListNames
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

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
  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'menu'

  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'menuAttrs'

  /**
   * Checks whether menu should be displayed /
   * Проверяет, нужно ли отображать меню
   */
  override get is(): boolean {
    const props = this.getProps()
    return Boolean(!props.disabled && this.components)
  }

  /**
   * Check if the menu is open /
   * Проверяет, открыто ли меню
   */
  get isOpen(): boolean {
    return Boolean(this.element.value?.getOpen())
  }

  /**
   * Exposes the API methods and properties /
   * Экспортирует API-методы и свойства
   */
  override get expose(): MenuExposeInclude {
    return {
      getOpen: () => Boolean(this.element.value?.getOpen()),
      setOpen: async (open: boolean) => this.element.value?.setOpen(open),
      toOpen: async () => this.element.value?.toOpen(),
      toClose: async () => this.element.value?.toClose(),
      toggle: async () => this.element.value?.toggle(),

      getMenuElement: () => this.element as any,

      isSelected: computed(() => this.element.value?.isSelected.value ?? false),
      selectedList: computed(() => this.element.value?.selectedList.value ?? []),
      selectedNames: computed(() => this.element.value?.selectedNames.value ?? {} as ListNames),
      selectedValues: computed(() => this.element.value?.selectedValues.value ?? [])
    }
  }

  /**
   * Get the menu element /
   * Получить элемент меню
   * @returns menu element or undefined / элемент меню или undefined
   */
  getElement() {
    return this.element.value
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
