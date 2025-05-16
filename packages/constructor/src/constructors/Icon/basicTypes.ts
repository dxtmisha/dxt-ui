import type { ConstrBind, ConstrItem } from '@dxt-ui/functional'

import type { IconPropsBasic } from './props'

export type IconEventLoad = {
  isActive: boolean
  iconBind: ConstrItem | undefined
  iconActiveBind: ConstrItem | undefined
}

export type IconValue<
  Icon extends IconPropsBasic = IconPropsBasic
> = string | ConstrBind<Icon> | null

export type IconComponentInclude = {
  icon?: object
}

export interface IconLitePropsInclude<
  Icon extends IconPropsBasic = IconPropsBasic
> {
  // Values
  icon?: IconValue<Icon>
}

export interface IconPropsInclude<
  Icon extends IconPropsBasic = IconPropsBasic
> extends IconLitePropsInclude<Icon> {
  // Status
  selected?: boolean
  iconTurn?: boolean
  iconHide?: boolean

  // Style
  iconDir?: boolean
  iconPalette?: boolean
  iconAttrs?: ConstrBind<Icon>
}

export interface IconTrailingPropsInclude<
  Icon extends IconPropsBasic = IconPropsBasic
> extends IconPropsInclude<Icon> {
  // Values
  iconTrailing?: IconValue<Icon>

  // Style
  iconTrailingTurnOnly?: boolean
  iconTrailingDirOnly?: boolean
  iconTrailingPalette?: boolean
}
