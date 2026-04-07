import { ActionSheetPropsBasic } from '@dxtmisha/constructor/ActionSheet';
import { WindowProps } from '../Window';
import { BarsProps } from '../Bars';
import { ActionsProps } from '../Actions';
export declare const propsValues: {
    width: string[];
};
type PropsToken = {
    width?: 'sm' | 'md' | 'lg' | 'auto';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ActionSheetProps = ActionSheetPropsBasic<WindowProps, BarsProps, ActionsProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
