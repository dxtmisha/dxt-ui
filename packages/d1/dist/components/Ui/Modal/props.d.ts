import { ModalPropsBasic } from '@dxtmisha/constructor/Modal';
import { WindowProps } from '../Window';
import { BarsProps } from '../Bars';
import { ActionsProps } from '../Actions';
import { ImageProps } from '../Image';
export declare const propsValues: {
    imagePosition: string[];
    width: string[];
};
export type PropsToken = {
    imagePosition?: 'top' | 'left';
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ModalProps = ModalPropsBasic<WindowProps, BarsProps, ActionsProps, ImageProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
