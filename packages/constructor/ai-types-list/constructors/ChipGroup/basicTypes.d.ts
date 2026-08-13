// md5:3e312c65bcdefab9242bc7f23f95e67c true
import { ConstrBind, ListListInput } from '@dxtmisha/functional';
import { ChipPropsBasic } from './types';

export type ChipGroupData<Chip extends ChipPropsBasic = ChipPropsBasic> = ListListInput<Chip>;

export type ChipGroupItem<Chip extends ChipPropsBasic = ChipPropsBasic> = ConstrBind<Chip>;

export type ChipGroupList<Chip extends ChipPropsBasic = ChipPropsBasic> = ChipGroupItem<Chip>[];