import type { ConstrBind } from '@dxt-ui/functional'
import type { ButtonPropsBasic } from './props'

export type ButtonComponentInclude = {
  button?: object
}

export type ButtonPropsInclude<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = {
  buttonAttrs?: ConstrBind<Button>
}
