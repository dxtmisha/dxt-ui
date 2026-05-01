import { IconPropsBasic } from '@dxtmisha/constructor/Icon';
import { ImageProps } from '../Image';
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
    animationType?: string | 'type1' | 'type2';
    animationShow?: boolean;
    square?: boolean;
    circle?: boolean;
    rect?: boolean;
    size?: string | 'auto' | 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    inverse?: boolean;
    rounded?: string | 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type IconProps = IconPropsBasic<ImageProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
