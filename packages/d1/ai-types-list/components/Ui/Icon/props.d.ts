// md5:b505a170499ddacdb309c1e9ffde25dd true
import { type IconPropsBasic } from '@dxtmisha/constructor/Icon';
import type { ImageProps } from '../Image';
export declare const propsValues: {
    animationType: string[];
    size: string[];
    rounded: string[];
};
type PropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    asPalette?: boolean;
    dir?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
    animationType?: 'type1' | 'type2';
    animationShow?: boolean;
    square?: boolean;
    circle?: boolean;
    rect?: boolean;
    size?: 'auto' | 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    inverse?: boolean;
    success?: boolean;
    error?: boolean;
    rounded?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};
/** Properties for the Icon component. @keywords icon, props */
export type IconProps = IconPropsBasic<ImageProps> & PropsToken;
/** Default property values for the Icon component. @keywords defaults, icon */
export declare const defaults: object;