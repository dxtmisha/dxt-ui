import { ListItemDesign } from '../ListItem'

import {
  type NavigationItemPropsBasic
} from './props'
import {
  type NavigationItemClasses,
  type NavigationItemComponents,
  type NavigationItemExpose
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
}
