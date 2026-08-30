// md5:45677e796bfd24bcb84e2207942f920c true
import type { ConstrBind, ListListInput } from '@dxtmisha/functional';
/** Data structure for ChipGroup. @keywords chip group data */
export type ChipGroupData<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>;
/** Single item definition for ChipGroup. @keywords chip group item */
export type ChipGroupItem<Chip extends ChipPropsBasic = ChipPropsBasic> = ConstrBind<Chip>;
/** List of items for ChipGroup. @keywords chip group list */
export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ChipGroupItem<Chip>[];