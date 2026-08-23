import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { InputImagePropsInclude } from './basicTypes'
import type { InputImageProps } from './props'
import type { InputImageExpose, InputImageSlots } from './types'

/**
 * Inclusion class for embedding InputImage component within parent components.
 *
 * Класс включения для встраивания компонента InputImage внутри родительских компонентов.
 */
export class InputImageInclude extends ComponentIncludeAbstract<
  InputImagePropsInclude,
  InputImageProps,
  InputImageExpose,
  InputImageSlots
> {
  protected override readonly name = 'inputImage'
  protected override readonly propsAttrsName = 'inputImageAttrs'
  protected readonly hasInitElement: boolean = false
}
