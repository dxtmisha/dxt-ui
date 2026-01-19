import { ConstrBind } from '@dxtmisha/functional';
import { ButtonPropsBasic } from '../Button';
interface ActionsPropsToken {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: boolean;
}
export interface ActionsPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> {
    list?: ConstrBind<Button>[];
    listSecondary?: ConstrBind<Button>[];
    buttonAttrs?: ConstrBind<Button>;
    buttonSecondaryAttrs?: ConstrBind<Button>;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ActionsProps extends ActionsPropsBasic, ActionsPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsActions: {
    align: string;
};
export {};
