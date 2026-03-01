import { ListMenuPropsBasic } from '@dxtmisha/constructor/ListMenu';
import { WindowProps } from '../Window';
export declare const propsValues: {
    axis: string[];
};
export type PropsToken = {
    open?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ListMenuProps = ListMenuPropsBasic<WindowProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
