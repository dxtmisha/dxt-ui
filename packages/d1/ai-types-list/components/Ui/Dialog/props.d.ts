// md5:0cbaf948b5cac938b81fba5e3001b47d true
import { DialogPropsBasic } from '@dxtmisha/constructor/Dialog';
/** Default image positions and widths @keywords propsValues, defaults */
export declare const propsValues: {
    imagePosition: string[];
    width: string[];
};
type PropsToken = {
    success?: boolean;
    error?: boolean;
    imagePosition?: 'top' | 'left' | 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl';
    width?: 'sm' | 'md' | 'lg' | 'auto';
};
/** Component dialog properties @keywords DialogProps, props */
export type DialogProps = DialogPropsBasic<WindowProps, BarsProps, IconProps, ImageProps, ButtonProps, ActionsProps> & PropsToken;
/** Default properties object @keywords defaults, config */
export declare const defaults: object;