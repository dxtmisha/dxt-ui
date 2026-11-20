// ai-none

import { mergeProps, type Ref } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem } from '../../types/componentInclude'
import type { MenuCountryExposeInclude, MenuCountryPropsInclude } from './basicTypes'
import type { MenuCountryExpose, MenuCountrySlots } from './types'
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
  protected override readonly name = 'menuCountry'
  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'menuCountryAttrs'

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<MenuCountryProps>> {
    const props = this.getProps()

    return mergeProps(
      {
        disabled: props.disabled,
        disableFocusReturn: props.disableFocusReturn,
        list: props.countryList,
        highlightLengthStart: props.highlightLengthStart,
        showSearch: props.showSearch,
        filterMode: props.filterMode
      },
      super.toBinds()
    ) as Partial<ConstrBind<MenuCountryProps>>
  }

  /**
   * Collects and exposes defined proxy methods of the sub-component.
   *
   * Собирает и экспортирует определенные прокси-методы субкомпонента.
   * @returns exposed API object / объект экспортируемого API
   */
  protected override toExpose(): MenuCountryExposeInclude {
    return {
      ...super.toExpose(),
      getMenuCountryElement: () => this.element as Ref<ConstrBind<MenuCountryExpose> | undefined>
    }
  }
}
