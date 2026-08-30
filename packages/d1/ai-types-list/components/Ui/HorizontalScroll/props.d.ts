// md5:3df4a3989b1690563d95ab97aaeaaf57 true
import { type HorizontalScrollPropsBasic } from '@dxtmisha/constructor/HorizontalScroll';

/** Allowed property values for horizontal scroll. @keywords horizontal-scroll, values */
export declare const propsValues: {
    align: string[];
};

type PropsToken = {
    bleed?: boolean;
    align?: 'block' | 'center' | 'left' | 'right';
};

/** Horizontal scroll component incoming properties. @keywords horizontal-scroll, props */
export type HorizontalScrollProps = HorizontalScrollPropsBasic & PropsToken;

/** Default property values for horizontal scroll component. @keywords horizontal-scroll, defaults */
export declare const defaults: object;