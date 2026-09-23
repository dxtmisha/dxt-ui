// ai-none

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { CollagePropsInclude } from './basicTypes'
import type { CollagePropsBasic } from './props'
import type { CollageExpose, CollageSlots } from './types'

/**
 * CollageInclude class provides functionality for embedding and conditionally rendering Collage components
 * within parent components.
 *
 * Класс CollageInclude предоставляет функциональность для внедрения и условного рендеринга компонентов
 * Collage внутри родительских компонентов.
 */
export class CollageInclude extends ComponentIncludeAbstract<
  CollagePropsInclude,
  CollagePropsBasic,
  CollageExpose,
  CollageSlots
> {
  /** Name of the component for style prefixing and resolution / Имя компонента для префикса стилей и разрешения */
  protected override readonly name = 'collage'

  /** Key name for passing additional attributes / Имя ключа для передачи дополнительных атрибутов */
  protected override readonly propsAttrsName = 'collageAttrs'

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected readonly hasInitElement: boolean = false

  /**
   * Checks whether the collage should be displayed.
   *
   * Проверяет, нужно ли отображать коллаж.
   * @returns check result / результат проверки
   */
  override get is(): boolean {
    return Boolean(
      this.binds.value.images
      || this.binds.value.variant
    )
  }
}
