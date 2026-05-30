import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ChipPropsInclude } from './basicTypes'
import type { ChipPropsBasic } from './props'
import type { ChipExpose, ChipSlots } from './types'

/**
 * ChipInclude class provides functionality for conditionally rendering chip components
 * within other components. It manages the logic for determining when to display a chip
 * and configures the appropriate properties.
 *
 * Класс ChipInclude предоставляет функциональность для условного рендеринга компонентов
 * чипа внутри других компонентов. Он управляет логикой определения необходимости
 * отображения чипа и настраивает соответствующие свойства.
 */
export class ChipInclude extends ComponentIncludeAbstract<
  ChipPropsInclude,
  ChipPropsBasic,
  ChipExpose,
  ChipSlots
> {
  /** Name of the component for style prefixing and resolution / Имя компонента для префикса стилей и разрешения */
  protected override readonly name = 'chip'

  /** Key name for passing additional attributes / Имя ключа для передачи дополнительных атрибутов */
  protected override readonly propsAttrsName = 'chipAttrs'

  /**
   * Checks whether the chip should be displayed.
   *
   * Проверяет, нужно ли отображать чип.
   * @returns check result / результат проверки
   */
  override get is(): boolean {
    return (
      'label' in this.binds.value
      || 'icon' in this.binds.value
      || 'iconTrailing' in this.binds.value
    )
  }
}
