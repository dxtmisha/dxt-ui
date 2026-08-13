// md5:f44a4696b44062730ca96f0ffbd32efc true
import { TooltipPropsBasic } from '@dxtmisha/constructor/Tooltip';
/** Tooltip max width options @keywords propsValues, maxWidth */
export declare const propsValues: {
    maxWidth: string[];
};
type PropsToken = {
    interactive?: boolean;
    embedded?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg';
};
/** Tooltip incoming properties @keywords TooltipProps, props */
export type TooltipProps = TooltipPropsBasic<ArrowProps> & PropsToken;
/** Default property values @keywords defaults, object */
export declare const defaults: object;