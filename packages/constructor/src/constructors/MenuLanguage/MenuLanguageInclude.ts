// ai-none

import { mergeProps, type Ref } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem } from '../../types/componentInclude'
import type { MenuLanguageExposeInclude, MenuLanguagePropsInclude } from './basicTypes'
import type { MenuLanguageExpose, MenuLanguageSlots } from './types'
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
  protected override readonly name = 'menuLanguage'
  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'menuLanguageAttrs'

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<MenuLanguageProps>> {
    const props = this.getProps()

    return mergeProps(
      {
        ...(props.disabled !== undefined ? { disabled: props.disabled } : {})
      },
      super.toBinds()
    ) as Partial<ConstrBind<MenuLanguageProps>>
  }

  /**
   * Collects and exposes defined proxy methods of the sub-component.
   *
   * Собирает и экспортирует определенные прокси-методы субкомпонента.
   * @returns exposed API object / объект экспортируемого API
   */
  protected override toExpose(): MenuLanguageExposeInclude {
    return {
      ...super.toExpose(),
      getMenuLanguageElement: () => this.element as Ref<ConstrBind<MenuLanguageExpose> | undefined>
    }
  }
}
