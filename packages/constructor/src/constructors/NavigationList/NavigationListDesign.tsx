import { ListDesign } from '../List'

import {
  type NavigationListPropsBasic
} from './props'
import {
  type NavigationListClasses,
  type NavigationListComponents,
  type NavigationListExpose
} from './types'

/**
 * Design constructor class for NavigationList component, rendering navigation list containers and applying visual layout styles.
 * Inherits all list container rendering functionality from ListDesign.
 *
 * Дизайн-класс конструктора для компонента NavigationList, выполняющий рендеринг контейнеров списка навигации и применение визуальных стилей макета.
 * Наследует всю функциональность рендеринга контейнера списка от ListDesign.
 */
export class NavigationListDesign<
  COMP extends NavigationListComponents,
  EXPOSE extends NavigationListExpose,
  CLASSES extends NavigationListClasses,
  P extends NavigationListPropsBasic
> extends ListDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
}
