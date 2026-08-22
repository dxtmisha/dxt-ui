import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { CropAreaPropsInclude } from './basicTypes'
import type { CropAreaProps } from './props'
import type { CropAreaExpose } from './types'

/**
 * Inclusion class for embedding CropArea component within parent components.
 *
 * Класс включения для встраивания компонента CropArea внутри родительских компонентов.
 */
export class CropAreaInclude extends ComponentIncludeAbstract<
  CropAreaPropsInclude,
  CropAreaProps,
  CropAreaExpose,
  any
> {
  protected override readonly name = 'cropArea'
  protected override readonly propsAttrsName = 'cropAreaAttrs'
  protected readonly hasInitElement: boolean = false

  /**
   * Checks whether the crop area should be displayed.
   * Returns false if readonly is set to true.
   *
   * Проверяет, должна ли отображаться область кадрирования.
   * Возвращает false, если установлено readonly: true.
   */
  override get is(): boolean {
    return !this.binds.value.readonly
  }
}
