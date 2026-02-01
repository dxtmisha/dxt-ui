import { ConstrBind } from '@dxtmisha/functional';
import { ButtonPropsBasic } from '../Button';
export type ActionsPropsToken = {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: boolean;
    wrap?: boolean;
};
export type ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = {
    list?: ConstrBind<Button>[];
    listSecondary?: ConstrBind<Button>[];
    buttonAttrs?: ConstrBind<Button>;
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
