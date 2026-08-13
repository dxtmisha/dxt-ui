// md5:0a91229229b4805c448626466301712c true
import { ConstrBind, ListSelectedList } from '@dxtmisha/functional';
export type ChipGroupPropsToken = {};
export type ChipGroupPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic> = ModelPropsSelected<ListSelectedList> & {
    readonly?: boolean;
    selected?: ListSelectedList;
    list?: ChipGroupData;
    iconWhenSelected?: boolean;
    multiple?: boolean;
    keyLabel?: string;
    keyValue?: string;
    chipAttrs?: ConstrBind<Chip>;
};
export type ChipGroupProps = ChipGroupPropsBasic & ChipGroupPropsToken;
/** Default properties for ChipGroup component @keywords chip_group defaults configuration */
export declare const defaultsChipGroup: {
    readonly: boolean;
};