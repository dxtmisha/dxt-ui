// md5:8db7b3bac14bd349efaa142a50670181 true
import type { ConstrBind } from '@dxtmisha/functional';
/** Component configuration for including a button. @keywords button, component, include */
export type ButtonComponentInclude = {
    button?: object;
};
/** Properties for embedding a Button component with bound attributes. @keywords button, props, include, binding */
export type ButtonPropsInclude<Button extends ButtonPropsBasic = ButtonPropsBasic> = {
    buttonAttrs?: ConstrBind<Button>;
};