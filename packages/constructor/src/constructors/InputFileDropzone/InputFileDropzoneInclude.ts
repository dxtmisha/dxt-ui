// ai-none

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { InputFileDropzonePropsInclude } from './basicTypes'
import type { InputFileDropzoneExpose, InputFileDropzoneSlots } from './types'
import type { InputFileDropzonePropsBasic } from './props'

/**
 * Inclusion class for embedding InputFileDropzone component within parent components.
 *
 * Класс включения для встраивания компонента InputFileDropzone внутри родительских компонентов.
 */
export class InputFileDropzoneInclude extends ComponentIncludeAbstract<
  InputFileDropzonePropsInclude,
  InputFileDropzonePropsBasic,
  InputFileDropzoneExpose,
  InputFileDropzoneSlots
> {
  protected override readonly name = 'inputFileDropzone'
  protected override readonly propsAttrsName = 'inputFileDropzoneAttrs'
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
      accept: props.accept,
      multiple: props.multiple,
      maxFileSize: props.maxFileSize,
      textDropzone: props.textDropzone
    }
  }
}
