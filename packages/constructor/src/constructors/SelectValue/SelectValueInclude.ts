import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { SelectValuePropsInclude } from './basicTypes'
import type { SelectValueProps } from './props'
import type { SelectValueExpose, SelectValueSlots } from './types'

/**
 * SelectValueInclude class provides functionality for conditionally rendering selectValue components
 * within other components. It manages the logic for determining when to display selectValue
 * and configures the appropriate properties.
 *
 * Класс SelectValueInclude предоставляет функциональность для условного рендеринга компонентов
 * selectValue внутри других компонентов. Он управляет логикой определения необходимости
 * отображения selectValue и настраивает соответствующие свойства.
 */
export class SelectValueInclude extends ComponentIncludeAbstract<
  SelectValuePropsInclude,
  SelectValueProps,
  SelectValueExpose,
  SelectValueSlots
> {
  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'selectValue'

  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'selectValueAttrs'

  /**
   * Checks whether selectValue should be displayed /
   * Проверяет, нужно ли отображать selectValue
   */
  override get is(): boolean {
    const props = this.getProps()
    return Boolean(!props.disabled && this.components)
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
