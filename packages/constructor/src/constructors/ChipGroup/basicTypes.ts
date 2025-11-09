import type { ListListInput } from '@dxtmisha/functional'
import type { ChipPropsBasic } from '../Chip'

export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>
