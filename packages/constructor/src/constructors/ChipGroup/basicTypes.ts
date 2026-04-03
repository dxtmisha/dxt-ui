import type { ConstrBind, ListListInput } from '@dxtmisha/functional'
import type { ChipPropsBasic } from '../Chip'

/** Type describing data for ChipGroup/ Тип, описывающий данные для ChipGroup */
export type ChipGroupData<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>
/** Type describing an item for ChipGroup/ Тип, описывающий элемент для ChipGroup */
export type ChipGroupItem<Chip extends ChipPropsBasic = ChipPropsBasic> = ConstrBind<Chip>
/** Type describing a list for ChipGroup/ Тип, описывающий список для ChipGroup */
export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ChipGroupItem<Chip>[]
