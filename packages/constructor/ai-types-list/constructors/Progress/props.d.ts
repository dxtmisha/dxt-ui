// md5:1521dd607a087d415aec3216454f19e2 true
import type { AriaLabelPropsInclude } from '../../types/ariaTypes';
import type { TextLoadingPropsInclude } from '../../types/textTypes';
import type { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes';

export type ProgressPropsToken = {
    point?: boolean;
    linear?: boolean;
    circular?: boolean;
    indeterminate?: 'type1' | 'type2' | 'type3';
    position?: 'top' | 'bottom' | 'static';
    dense?: boolean;
    inverse?: boolean;
};

export type ProgressPropsBasic = AriaLabelPropsInclude & TextLoadingPropsInclude & ClientOnlyPropsInclude & {
    visible?: boolean;
    value?: number | string;
    max?: number | string;
    linear?: boolean;
    circular?: boolean;
    /** Display stop indicator dot on linear progress (determinate value or indeterminate type1; ignored for circular). @keywords point, dot */
    point?: boolean;
    delay?: number | string;
    delayHide?: number | string;
};

/** Progress component incoming properties. @keywords progress, props */
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken;

/** Default property values for the Progress component. @keywords progress, defaults */
export declare const defaultsProgress: {
    linear: boolean;
    indeterminate: string;
    position: string;
    clientOnly: boolean;
    max: number;
    delay: number;
    delayHide: number;
};