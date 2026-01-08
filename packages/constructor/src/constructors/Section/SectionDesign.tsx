import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { BlockDesign } from '../Block'
import { Section } from './Section'

import {
  type SectionPropsBasic
} from './props'
import {
  type SectionClasses,
  type SectionComponents,
  type SectionEmits,
  type SectionExpose
} from './types'

/**
 * SectionDesign
 */
export class SectionDesign<
  COMP extends SectionComponents,
  EXPOSE extends SectionExpose,
  CLASSES extends SectionClasses,
  P extends SectionPropsBasic
> extends BlockDesign<
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
   * @param ItemConstructor block item class/ класс элемента блока
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SectionEmits, P>,
    ItemConstructor: typeof Section = Section
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
