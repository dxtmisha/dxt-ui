import { ConstrBind } from '@dxtmisha/functional';
import { ButtonPropsBasic } from '../Button';
export type ActionsPropsToken = {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: boolean;
    wrap?: boolean;
};
export type ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = {
    /** Primary list of action configurations/ Основной список конфигураций действий */
    list?: ConstrBind<Button>[];
    /** Secondary list of action configurations/ Вторичный список конфигураций действий */
    listSecondary?: ConstrBind<Button>[];
    /** Shared attributes for buttons in the primary list/ Общие атрибуты для кнопок в основном списке */
    buttonAttrs?: ConstrBind<Button>;
    /** Shared attributes for buttons in the secondary list/ Общие атрибуты для кнопок во вторичном списке */
    buttonSecondaryAttrs?: ConstrBind<Button>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ActionsProps = ActionsPropsBasic & ActionsPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsActions: {
    align: string;
};
