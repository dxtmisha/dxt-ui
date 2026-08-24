import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { DropzonePropsInclude } from './basicTypes'
import type { DropzoneExpose, DropzoneSlots } from './types'
import type { DropzonePropsBasic } from './props'

/**
 * Inclusion class for embedding Dropzone component within parent components.
 *
 * Класс включения для встраивания компонента Dropzone внутри родительских компонентов.
 */
export class DropzoneInclude extends ComponentIncludeAbstract<
  DropzonePropsInclude,
  DropzonePropsBasic,
  DropzoneExpose,
  DropzoneSlots
> {
  protected override readonly name = 'dropzone'
  protected override readonly propsAttrsName = 'dropzoneAttrs'
  protected override readonly exposeItems = [
    { name: 'open' },
    { name: 'clear' }
  ]

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    const props = this.getProps()
    const binds = super.toBinds()

    return {
      ...binds,
      label: props.dropzoneLabel,
      description: props.dropzoneDescription,
      icon: props.dropzoneIcon
    }
  }
}
