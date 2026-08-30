// md5:c28e1a2fa0742fbdac9aaccd26c9eed3 true
import { type DialogPropsBasic } from '@dxtmisha/constructor/Dialog';
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
/** Incoming properties for the Dialog component. @keywords dialog, props, window */
export type DialogProps = DialogPropsBasic<WindowProps, BarsProps, IconProps, ImageProps, ButtonProps, ActionsProps> & PropsToken;
/** Default property values for the Dialog component. @keywords dialog, defaults */
export declare const defaults: object;