import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { CropAreaPropsInclude } from './basicTypes'
import type { CropAreaPropsBasic } from './props'
import type { CropAreaExpose } from './types'

/**
 * Inclusion class for embedding CropArea component within parent components.
 *
 * Класс включения для встраивания компонента CropArea внутри родительских компонентов.
 */
export class CropAreaInclude extends ComponentIncludeAbstract<
  CropAreaPropsInclude,
  CropAreaPropsBasic,
  CropAreaExpose,
  any
> {
  protected override readonly name = 'cropArea'
  protected override readonly propsAttrsName = 'cropAreaAttrs'
  protected readonly hasInitElement: boolean = false

  override get is(): boolean {
    return (
      'value' in this.binds.value
      || 'min' in this.binds.value
    )
  }
}
