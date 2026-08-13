// md5:437c7ddb0f563427d0a8847f534e18a0 true
import { IconPropsBasic } from '@dxtmisha/constructor/Icon';
/** List of allowed property values for icon components. @keywords icon props values */
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
    rounded?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};
/** Combined icon properties type definition. @keywords icon props type */
export type IconProps = IconPropsBasic<ImageProps> & PropsToken;
/** Default values configuration object. @keywords icon defaults */
export declare const defaults: object;