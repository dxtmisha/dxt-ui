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
  protected override readonly name = 'imageCrop'
  protected override readonly propsAttrsName = 'imageCropAttrs'
  protected readonly hasInitElement: boolean = false
}
