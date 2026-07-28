import { ListDesign } from '../List/ListDesign'

import {
  type NavigationListPropsBasic
} from './props'
import {
  type NavigationListClasses,
  type NavigationListComponents,
  type NavigationListExpose
} from './types'

/**
 * NavigationListDesign
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

