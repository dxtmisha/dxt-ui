import { type ConstrOptions } from '@dxtmisha/functional'

import { ListItemDesign } from '../ListItem/ListItemDesign'
import { NavigationItem } from './NavigationItem'

import {
  type NavigationItemPropsBasic
} from './props'
import {
  type NavigationItemClasses,
  type NavigationItemComponents,
  type NavigationItemEmits,
  type NavigationItemExpose
} from './types'

/**
 * NavigationItemDesign
 */
export class NavigationItemDesign<
  COMP extends NavigationItemComponents,
  EXPOSE extends NavigationItemExpose,
  CLASSES extends NavigationItemClasses,
  P extends NavigationItemPropsBasic
> extends ListItemDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  declare protected readonly item: NavigationItem

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, NavigationItemEmits, P>,
    ItemConstructor: typeof NavigationItem = NavigationItem
  ) {
    super(
      name,
      props,
      options as any,
      ItemConstructor as any
    )
  }
}
