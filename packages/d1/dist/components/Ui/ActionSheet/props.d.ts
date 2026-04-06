import { ActionSheetPropsBasic } from '@dxtmisha/constructor/ActionSheet';
export declare const propsValues: {
    width: string[];
};
type PropsToken = {
    width?: 'sm' | 'md' | 'lg' | 'auto';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ActionSheetProps = ActionSheetPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
