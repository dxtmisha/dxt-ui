import { ModalPropsBasic } from '@dxtmisha/constructor/Modal';
export declare const propsValues: {
    imagePosition: string[];
    width: string[];
};
type PropsToken = {
    imagePosition?: 'top' | 'left';
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ModalProps = ModalPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
