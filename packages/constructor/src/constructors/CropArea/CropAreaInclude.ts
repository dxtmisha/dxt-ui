// ai-none

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { CropAreaPropsInclude } from './basicTypes'
import type { CropAreaProps } from './props'
import type { CropAreaExpose, CropAreaSlots } from './types'

/**
 * Inclusion class for embedding CropArea component within parent components.
 *
 * Класс включения для встраивания компонента CropArea внутри родительских компонентов.
 */
export class CropAreaInclude extends ComponentIncludeAbstract<
  CropAreaPropsInclude,
  CropAreaProps,
  CropAreaExpose,
  CropAreaSlots
> {
  /**
   * Checks whether the crop area should be enabled based on parent properties.
   *
   * Проверяет, должна ли отображаться область кадрирования на основе свойств родителя.
   * @param props input properties / входные свойства
   * @returns true if crop area is not readonly / true, если область кадрирования не в режиме только для чтения
   */
  static is(props?: CropAreaPropsInclude & { readonly?: boolean }): boolean {
    return !props?.readonly && !props?.cropAreaAttrs?.readonly
  }

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected override readonly hasInitElement: boolean = false

  /** Component sub-name identifier / Идентификатор имени субкомпонента */
  protected override readonly name = 'cropArea'

  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'cropAreaAttrs'

  /**
   * Checks whether the crop area should be displayed.
   * Returns false if readonly is set to true.
   *
   * Проверяет, должна ли отображаться область кадрирования.
   * Возвращает false, если установлено readonly: true.
   * @returns true if crop area should be displayed / true, если область кадрирования должна отображаться
   */
  override get is(): boolean {
    return !this.binds.value.readonly
  }
}
