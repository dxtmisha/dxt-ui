// ai-none

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { InputFileItemPropsInclude } from './basicTypes'
import type { InputFileItemPropsBasic } from './props'
import type { InputFileItemExpose, InputFileItemSlots } from './types'

/**
 * InputFileItemInclude class provides functionality for conditionally rendering file item components
 * within other components (e.g. InputFile). It manages the logic for determining when to display
 * a file item and configures the appropriate properties.
 *
 * Класс InputFileItemInclude предоставляет функциональность для условного рендеринга компонентов
 * элемента файла внутри других компонентов (например, InputFile). Он управляет логикой определения
 * необходимости отображения элемента файла и настраивает соответствующие свойства.
 */
export class InputFileItemInclude extends ComponentIncludeAbstract<
  InputFileItemPropsInclude,
  InputFileItemPropsBasic,
  InputFileItemExpose,
  InputFileItemSlots
> {
  /** Name of the component for style prefixing and resolution / Имя компонента для префикса стилей и разрешения */
  protected override readonly name = 'inputFileItem'

  /** Key name for passing additional attributes / Имя ключа для передачи дополнительных атрибутов */
  protected override readonly propsAttrsName = 'inputFileItemAttrs'

  /**
   * Checks whether the file item should be displayed.
   *
   * Проверяет, нужно ли отображать элемент файла.
   * @returns check result / результат проверки
   */
  override get is(): boolean {
    return (
      'file' in this.binds.value
      || 'item' in this.binds.value
      || 'name' in this.binds.value
      || 'src' in this.binds.value
    )
  }
}
