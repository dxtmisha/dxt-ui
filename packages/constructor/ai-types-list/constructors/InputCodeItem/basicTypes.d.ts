// md5:da887a9204d229f18f9b8a77b268a8da true
import { ConstrBind } from '@dxtmisha/functional';

export type InputCodeItemElement = HTMLElement | Element | null | undefined;

export type InputCodeItemComponentInclude = {
    inputCodeItem?: object;
};

export type InputCodeItemPropsInclude<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic> = SkeletonPropsInclude & {
    disabled?: boolean;
    name?: string;
    match?: InputCodeItemPropsBasic['match'];
    inputMode?: InputCodeItemPropsBasic['inputMode'];
    placeholder?: string;
    itemAttrs?: ConstrBind<InputCodeItem>;
};