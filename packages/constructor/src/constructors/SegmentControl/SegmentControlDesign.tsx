import { type ConstrOptions } from '@dxtmisha/functional'

import { SegmentControl } from './SegmentControl'
import { TabsNavigationDesign } from '../TabsNavigation'

import {
  type SegmentControlPropsBasic
} from './props'
import {
  type SegmentControlClasses,
  type SegmentControlComponents,
  type SegmentControlEmits,
  type SegmentControlExpose
} from './types'

/**
 * SegmentControlDesign
 */
export class SegmentControlDesign<
  COMP extends SegmentControlComponents,
  EXPOSE extends SegmentControlExpose,
  CLASSES extends SegmentControlClasses,
  P extends SegmentControlPropsBasic
> extends TabsNavigationDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  protected readonly itemComponent: string = 'segmentControlItem'

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
    options?: ConstrOptions<COMP, SegmentControlEmits, P>,
    ItemConstructor: typeof SegmentControl = SegmentControl
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
