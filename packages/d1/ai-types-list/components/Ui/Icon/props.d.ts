// md5:a81d0d8eae4875b263fef6fb0fae152e true
import { type IconPropsBasic } from '@dxtmisha/constructor/Icon';

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

/** Icon component properties. @keywords icon, properties */
export type IconProps = IconPropsBasic<ImageProps> & PropsToken;

export declare const defaults: object;