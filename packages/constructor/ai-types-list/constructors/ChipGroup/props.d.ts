// md5:5dfb17d587893a93852ba30c2eca5e3c true
import type { ConstrBind, ListSelectedList } from '@dxtmisha/functional';

export type ChipGroupPropsToken = {};

export type ChipGroupPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic> = ModelPropsSelected<ListSelectedList> & {
  /** Whether the group is read-only. */
  readonly?: boolean;
  /** List of selected values. */
  selected?: ListSelectedList;
  /** Data list for generating chips. */
  list?: ChipGroupData;
  /** Whether to show an icon when a chip is selected. */
  iconWhenSelected?: boolean;
  /** Whether multiple chips can be selected. */
  multiple?: boolean;
  /** Key for the label in the data object. */
  keyLabel?: string;
  /** Key for the value in the data object. */
  keyValue?: string;
  /** Additional attributes for the Chip component. */
  chipAttrs?: ConstrBind<Chip>;
};

export type ChipGroupProps = ChipGroupPropsBasic & ChipGroupPropsToken;

/** Default property values for ChipGroup. @keywords chip group, defaults */
export declare const defaultsChipGroup: {
  readonly: boolean;
};