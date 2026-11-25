// ai-none

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ImageCropPropsInclude } from './basicTypes'
import type { ImageCropPropsBasic } from './props'
import type { ImageCropExpose, ImageCropSlots } from './types'

/**
 * Inclusion class for embedding ImageCrop component within parent components.
 *
 * Класс включения для встраивания компонента ImageCrop внутри родительских компонентов.
 */
export class ImageCropInclude extends ComponentIncludeAbstract<
  ImageCropPropsInclude,
  ImageCropPropsBasic,
  ImageCropExpose,
  ImageCropSlots
> {
  /** Component sub-name / Дополнительное имя компонента */
  protected override readonly name = 'imageCrop'
  /** Property name containing raw attributes / Имя свойства, содержащего сырые атрибуты */
  protected override readonly propsAttrsName = 'imageCropAttrs'
  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected override readonly hasInitElement: boolean = false
}
