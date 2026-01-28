import { WindowProps } from '../Window';
import { BarsProps } from '../Bars';
import { ActionsProps } from '../Actions';
import { ActionSheetPropsBasic } from '@dxtmisha/constructor/ActionSheet';
export declare const propsValues: {
    padding: string[];
    width: string[];
};
export type PropsToken = {
    padding?: 'sm' | 'md' | 'lg';
    paddingByIndent?: boolean;
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
