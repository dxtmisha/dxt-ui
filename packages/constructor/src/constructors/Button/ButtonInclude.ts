import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ButtonPropsInclude } from './basicTypes'
import type { ButtonPropsBasic } from './props'
import type { ButtonExpose } from './types'

/**
 * ButtonInclude class provides functionality for conditionally rendering button components
 * within other components. It manages the logic for determining when to display a button
 * and configures the appropriate properties.
 *
 * Класс ButtonInclude предоставляет функциональность для условного рендеринга компонентов
 * кнопки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения кнопки и настраивает соответствующие свойства.
 */
export class ButtonInclude extends ComponentIncludeAbstract<
  ButtonPropsInclude,
  ButtonPropsBasic,
  ButtonExpose,
  any
> {
  protected override readonly name = 'button'
  protected override readonly propsAttrsName = 'buttonAttrs'

  /**
   * Checks whether the button should be displayed /
   * Проверяет, нужно ли отображать кнопку
   */
  override get is(): boolean {
    return (
      'label' in this.binds.value
      || 'icon' in this.binds.value
      || 'iconTrailing' in this.binds.value
    )
  }
}
