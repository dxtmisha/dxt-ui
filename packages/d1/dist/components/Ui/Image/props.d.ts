import { ImagePropsBasic } from '@dxtmisha/constructor/Image';
export declare const propsValues: {
    size: string[];
};
export type PropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    adaptive?: boolean;
    size?: 'auto' | 'contain' | 'cover';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ImageProps = ImagePropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
