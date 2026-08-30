// md5:3e62c1c5a339b4a0d6c1d1b7f1807425 true
import type { ConstrBind } from '@dxtmisha/functional';
export type InputCodeItemElement = HTMLElement | Element | null | undefined;
export type InputCodeItemComponentInclude = {
    inputCodeItem?: object;
};
/** Props for configuring and embedding the InputCodeItem component @keywords input, code, item, props, config */
export type InputCodeItemPropsInclude<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic> = SkeletonPropsInclude & {
    disabled?: boolean;
    hide?: boolean;
    name?: string;
    match?: InputCodeItemPropsBasic['match'];
    inputMode?: InputCodeItemPropsBasic['inputMode'];
    placeholder?: string;
    itemAttrs?: ConstrBind<InputCodeItem>;
};