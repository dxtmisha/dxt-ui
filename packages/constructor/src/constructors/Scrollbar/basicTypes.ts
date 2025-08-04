import type { ConstrBind } from '@dxt-ui/functional'
import type { ScrollbarPropsBasic } from './props'

export type ScrollbarEdgeType = 'top' | 'bottom'

export interface ScrollbarComponentsInclude {
  scrollbar?: object
}

export interface ScrollbarPropsInclude<
  Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic
> {
  scrollbarAttrs?: ConstrBind<Scrollbar>
}
