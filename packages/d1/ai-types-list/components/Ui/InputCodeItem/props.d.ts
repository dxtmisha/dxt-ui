// md5:667e6ca9c79ce60d58c94a3c13823475 true
import { InputCodeItemPropsBasic } from '@dxtmisha/constructor/InputCodeItem';
/** Default size values @keywords propsValues, size */
export declare const propsValues: {
    size: string[];
};
type PropsToken = {
    disabled?: boolean;
    success?: boolean;
    error?: boolean;
    hide?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'display';
};
/** Properties for InputCodeItem component @keywords InputCodeItemProps, props */
export type InputCodeItemProps = InputCodeItemPropsBasic & PropsToken;
/** Default object values @keywords defaults, object */
export declare const defaults: object;