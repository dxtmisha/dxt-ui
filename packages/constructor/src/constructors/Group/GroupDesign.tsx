import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { BlockDesign } from '../Block'
import { Group } from './Group'

import {
  type GroupPropsBasic
} from './props'
import {
  type GroupClasses,
  type GroupComponents,
  type GroupEmits,
  type GroupExpose
} from './types'

/**
 * GroupDesign
 */
export class GroupDesign<
  COMP extends GroupComponents,
  EXPOSE extends GroupExpose,
  CLASSES extends GroupClasses,
  P extends GroupPropsBasic
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
    options?: ConstrOptions<COMP, GroupEmits, P>,
    ItemConstructor: typeof Group = Group
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
