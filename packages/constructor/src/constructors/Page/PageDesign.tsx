import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { BlockDesign } from '../Block'
import { Page } from './Page'

import {
  type PagePropsBasic
} from './props'
import {
  type PageClasses,
  type PageComponents,
  type PageEmits,
  type PageExpose
} from './types'

/**
 * PageDesign
 */
export class PageDesign<
  COMP extends PageComponents,
  EXPOSE extends PageExpose,
  CLASSES extends PageClasses,
  P extends PagePropsBasic
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
    options?: ConstrOptions<COMP, PageEmits, P>,
    ItemConstructor: typeof Page = Page
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
