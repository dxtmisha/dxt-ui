import { ListItemDesign } from '../ListItem/ListItemDesign'

import {
  type NavigationItemPropsBasic
} from './props'
import {
  type NavigationItemClasses,
  type NavigationItemComponents,
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
}
