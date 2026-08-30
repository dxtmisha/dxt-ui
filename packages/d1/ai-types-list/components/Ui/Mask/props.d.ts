// md5:37283a49b144ec7bff3c369c316c9794 true
import { type MaskPropsBasic } from '@dxtmisha/constructor/Mask';

export declare const propsValues: {
    align: string[];
    dir: string[];
};

type PropsToken = {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
};

/** Mask component properties. @keywords mask, props */
export type MaskProps = MaskPropsBasic & PropsToken;

/** Default property values for Mask. @keywords mask, defaults */
export declare const defaults: object;