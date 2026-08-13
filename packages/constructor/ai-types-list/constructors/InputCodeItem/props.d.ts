// md5:1f808dbf164f7f02bd7e0c4f17008339 true
import { NumberOrString } from '@dxtmisha/functional';
type InputCodeItemPropsToken = {
    disabled?: boolean;
    success?: boolean;
    error?: boolean;
    hide?: boolean;
};
export type InputCodeItemPropsBasic = TextSymbolPropsInclude & SkeletonPropsInclude & {
    move?: boolean;
    name?: string;
    index?: NumberOrString;
    match?: RegExp;
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    placeholder?: string;
    tabindex?: number | string;
};
/** Input code item incoming properties type @keywords input_code_item_props properties */
export type InputCodeItemProps = InputCodeItemPropsBasic & InputCodeItemPropsToken;
/** Default values for input code item @keywords defaults_input_code_item default_values */
export declare const defaultsInputCodeItem: {
    move: boolean;
    name: string;
    match: RegExp;
    inputMode: string;
    placeholder: string;
};