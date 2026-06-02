import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { InputPhoneDialCodePropsInclude } from './basicTypes'
import type { InputPhoneDialCodeProps } from './props'
import type { InputPhoneDialCodeExpose, InputPhoneDialCodeSlots } from './types'

/**
 * InputPhoneDialCodeInclude class provides functionality for conditionally rendering
 * InputPhoneDialCode components within other components.
 *
 * Класс InputPhoneDialCodeInclude предоставляет функциональность для условного рендеринга
 * компонентов InputPhoneDialCode внутри других компонентов.
 */
export class InputPhoneDialCodeInclude extends ComponentIncludeAbstract<
  InputPhoneDialCodePropsInclude,
  InputPhoneDialCodeProps,
  InputPhoneDialCodeExpose,
  InputPhoneDialCodeSlots
> {
  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'inputPhoneDialCode'

  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'inputPhoneDialCodeAttrs'

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
