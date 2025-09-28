import type { ConstrBind } from '@dxtmisha/functional'

import type { BadgePropsBasic } from './props'

export type BadgeComponentInclude = {
  badge?: object
}

export interface BadgePropsInclude<
  Badge extends BadgePropsBasic = BadgePropsBasic
> {
  // Values
  badge?: string | number | ConstrBind<Badge>
  badgeDot?: boolean
}
