import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { CollageItemPropsInclude } from './basicTypes'
import type { CollageItemExpose, CollageItemSlots } from './types'
import type { CollageItemPropsBasic } from './props'

/**
 * CollageItemInclude class provides functionality for conditionally rendering CollageItem components
 * within other components (such as Collage).
 *
 * Класс CollageItemInclude предоставляет функциональность для условного рендеринга компонентов
 * CollageItem внутри других компонентов (таких как Collage).
 */
export class CollageItemInclude extends ComponentIncludeAbstract<
  CollageItemPropsInclude,
  CollageItemPropsBasic,
  CollageItemExpose,
  CollageItemSlots
> {
  /** Name of the component for style prefixing and resolution / Имя компонента для префикса стилей и разрешения */
  protected override readonly name = 'collageItem'

  /** Key name for passing additional attributes / Имя ключа для передачи дополнительных атрибутов */
  protected override readonly propsAttrsName = 'collageItemAttrs'

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected readonly hasInitElement: boolean = false

  /**
   * Checks whether the item should be displayed.
   *
   * Проверяет, нужно ли отображать элемент.
   * @returns check result / результат проверки
   */
  override get is(): boolean {
    return Boolean(
      this.binds.value.image
      || this.binds.value.label
      || this.binds.value.value
    )
  }
}
