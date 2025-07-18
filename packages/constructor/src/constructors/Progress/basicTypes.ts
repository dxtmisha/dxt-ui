import type { ConstrBind } from '@dxt-ui/functional'
import type { ProgressPropsBasic } from './props'

export type ProgressComponentInclude = {
  progress?: object
}

export interface ProgressPropsInclude<
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> {
  loading?: boolean | ConstrBind<Progress>
}
