import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { Radio } from './Radio'
import { CheckboxDesign } from '../Checkbox'

import {
  type RadioPropsBasic
} from './props'
import {
  type RadioClasses,
  type RadioComponents,
  type RadioEmits,
  type RadioExpose
} from './types'

/**
 * RadioDesign
 */
export class RadioDesign<
  COMP extends RadioComponents,
  EXPOSE extends RadioExpose,
  CLASSES extends RadioClasses,
  P extends RadioPropsBasic
> extends CheckboxDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, RadioEmits, P>,
    ItemConstructor: typeof Radio = Radio
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
