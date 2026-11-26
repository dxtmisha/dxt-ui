import type { ConstrOptions } from '@dxtmisha/functional'

import { ListItemDesign } from '../ListItem'
import { NavigationItem } from './NavigationItem'

import type {
  NavigationItemPropsBasic
} from './props'
import type {
  NavigationItemClasses,
  NavigationItemComponents,
  NavigationItemEmits,
  NavigationItemExpose
} from './types'

/**
 * Design constructor class for NavigationItem component, rendering navigation list item elements and applying visual styles.
 * Inherits all layout and rendering functionality from ListItemDesign.
 *
 * Дизайн-класс конструктора для компонента NavigationItem, выполняющий рендеринг элементов списка навигации и применение визуальных стилей.
 * Наследует всю функциональность макета и рендеринга от ListItemDesign.
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
  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor item constructor class / класс конструктора элемента
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
      options,
      ItemConstructor
    )
  }
}
