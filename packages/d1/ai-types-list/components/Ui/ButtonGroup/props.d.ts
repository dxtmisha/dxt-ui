// md5:23f81dc167ac6e631ab8a0c95c0411e0 true
import { type ButtonGroupPropsBasic } from '@dxtmisha/constructor/ButtonGroup';

export declare const propsValues: {
    orientation: string[];
};

type PropsToken = {
    orientation?: 'horizontal' | 'vertical';
    wrap?: boolean;
};

/** Button group component properties. @keywords button, group, props */
export type ButtonGroupProps = ButtonGroupPropsBasic<ButtonProps> & PropsToken;

/** Default property values for button group. @keywords button, group, defaults */
export declare const defaults: object;