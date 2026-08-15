// md5:aa9aaa3ebf6e568725fbdf0b2ead2711 true
import { ConstrBind } from '@dxtmisha/functional';

export type InputCodeItemElement = HTMLElement | Element | null | undefined;

/** Component map for InputCodeItem inclusion. @keywords InputCodeItemComponentInclude, component map */
export type InputCodeItemComponentInclude = {
    inputCodeItem?: object;
};

/** Props for including and configuring InputCodeItem. @keywords InputCodeItemPropsInclude, component props */
export type InputCodeItemPropsInclude<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic> = SkeletonPropsInclude & {
    disabled?: boolean;
    hide?: boolean;
    name?: string;
    match?: InputCodeItemPropsBasic['match'];
    inputMode?: InputCodeItemPropsBasic['inputMode'];
    placeholder?: string;
    itemAttrs?: ConstrBind<InputCodeItem>;
};