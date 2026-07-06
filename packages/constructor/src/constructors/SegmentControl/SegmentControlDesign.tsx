import { type ConstrOptions } from '@dxtmisha/functional'

import { TabsNavigationDesign } from '../TabsNavigation/TabsNavigationDesign'
import { SegmentControl } from './SegmentControl'

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
      options as any,
      ItemConstructor as any
    )
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        item: this.getSubClass('item')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }
}
