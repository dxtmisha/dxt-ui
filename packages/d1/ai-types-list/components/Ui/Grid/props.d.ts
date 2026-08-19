// md5:c90ae46a3504bf1a546a2b012e804353 true
import { GridPropsBasic } from '@dxtmisha/constructor/Grid';
/** Allowed values for grid alignment properties @keywords propsValues, align, grid */
export declare const propsTypeValues: {
    align: string[];
};
type PropsToken = {
    align?: 'center' | 'top' | 'bottom' | 'stretch' | 'baseline' | 'start' | 'end';
};
/** Combined grid properties contract @keywords GridProps, GridPropsBasic, PropsToken */
export type GridProps = GridPropsBasic & PropsToken;
/** Default configuration object for grid component @keywords defaults, object */
export declare const defaults: object;