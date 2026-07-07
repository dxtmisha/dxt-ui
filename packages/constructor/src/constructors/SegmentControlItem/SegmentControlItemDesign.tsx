import { type ConstrOptions } from '@dxtmisha/functional'

import { TabItemDesign } from '../TabItem'
import { SegmentControlItem } from './SegmentControlItem'

import {
  type SegmentControlItemPropsBasic
} from './props'
import {
  type SegmentControlItemClasses,
  type SegmentControlItemComponents,
  type SegmentControlItemEmits,
  type SegmentControlItemExpose
} from './types'

/**
 * SegmentControlItemDesign class constructor for managing classes, styles, and rendering the SegmentControlItem component.
 * It acts as the bridge between component configuration and standard HTML/Vue virtual DOM nodes.
 *
 * Класс-конструктор дизайна SegmentControlItemDesign для управления классами, стилями и рендерингом компонента SegmentControlItem.
 * Служит мостом между конфигурацией компонента и стандартными виртуальными DOM-нодами Vue.
 */
export class SegmentControlItemDesign<
  COMP extends SegmentControlItemComponents,
  EXPOSE extends SegmentControlItemExpose,
  CLASSES extends SegmentControlItemClasses,
  P extends SegmentControlItemPropsBasic
> extends TabItemDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SegmentControlItemEmits, P>,
    ItemConstructor: typeof SegmentControlItem = SegmentControlItem
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
