// md5:c32326a483527212cb13da621dd2da80 true
import { type GridPropsBasic } from '@dxtmisha/constructor/Grid';

export declare const propsValues: {
    align: string[];
};

type PropsToken = {
    align?: 'center' | 'top' | 'bottom' | 'stretch' | 'baseline' | 'start' | 'end';
};

/** Grid component properties. @keywords grid, props */
export type GridProps = GridPropsBasic & PropsToken;

/** Default property values for Grid component. @keywords grid, defaults */
export declare const defaults: object;