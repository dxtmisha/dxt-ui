// ai-none

import { type ConstrBind, getObjectNoUndefined } from '@dxtmisha/functional'

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
  /** Component sub-name identifier / Идентификатор имени субкомпонента */
  protected override readonly name = 'inputFileDropzone'

  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected override readonly propsAttrsName = 'inputFileDropzoneAttrs'

  /** Exposed proxy items list / Список проксируемых экспортируемых методов */
  protected override readonly exposeItems = [
    { name: 'open' }
  ]

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<InputFileDropzonePropsBasic>> {
    const props = this.getProps()
    const binds = super.toBinds()

    return {
      ...binds,
      ...getObjectNoUndefined({
        accept: props.accept,
        multiple: props.multiple,
        maxFileSize: props.maxFileSize,
        textDropzone: props.textDropzone
      })
    }
  }
}
