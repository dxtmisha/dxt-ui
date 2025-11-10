import type { ConstrBind, ListListInput } from '@dxtmisha/functional'
import type { ChipPropsBasic } from '../Chip'

export type ChipGroupData<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>
export type ChipGroupItem<Chip extends ChipPropsBasic = ChipPropsBasic> = ConstrBind<Chip>
export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ChipGroupItem<Chip>[]
