import type { ConstrBind, ConstrItem } from '@dxt-ui/functional'
import type { ImagePropsBasic } from '../Image'

export type IconValue<
  Image extends ImagePropsBasic = ImagePropsBasic
> = string | ConstrBind<Image> | null

export type IconEventLoad = {
  isActive: boolean
  iconBind: ConstrItem | undefined
  iconActiveBind: ConstrItem | undefined
}
