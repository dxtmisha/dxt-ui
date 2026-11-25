// ai-none

import type { ConstrBind } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { DropzonePropsInclude } from './basicTypes'
import type { DropzonePropsBasic } from './props'
import type { DropzoneExpose, DropzoneSlots } from './types'

/**
 * Inclusion class for embedding the Dropzone component within parent components.
 *
 * Класс включения для встраивания компонента Dropzone внутри родительских компонентов.
 */
export class DropzoneInclude extends ComponentIncludeAbstract<
  DropzonePropsInclude,
  DropzonePropsBasic,
  DropzoneExpose,
  DropzoneSlots
> {
  /** List of exposed Dropzone methods / Список экспортируемых методов Dropzone */
  protected override readonly exposeItems = [
    { name: 'open' },
    { name: 'clear' }
  ]

  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'dropzone'

  /** Property name containing Dropzone attributes / Имя свойства, содержащего атрибуты Dropzone */
  protected override readonly propsAttrsName = 'dropzoneAttrs'

  /**
   * Combines input attributes with internal component bindings without overwriting existing values with undefined.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента без перезаписи существующих значений на undefined.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<DropzonePropsBasic>> {
    const props = this.getProps()
    const binds: Partial<ConstrBind<DropzonePropsBasic>> = {
      ...super.toBinds()
    }

    if (props.dropzoneLabel !== undefined) {
      binds.label = props.dropzoneLabel
    }

    if (props.dropzoneDescription !== undefined) {
      binds.description = props.dropzoneDescription
    }

    if (props.dropzoneIcon !== undefined) {
      binds.icon = props.dropzoneIcon
    }

    return binds
  }
}
