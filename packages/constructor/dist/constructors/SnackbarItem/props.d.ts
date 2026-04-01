import { ConstrBind } from '@dxtmisha/functional';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { TextClosePropsInclude } from '../../types/textTypes';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { ButtonPropsBasic } from '../Button';
import { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon';
type SnackbarItemPropsToken = {};
export type SnackbarItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & TextClosePropsInclude & {
    button?: string | number | ConstrBind<Button>;
    html?: string;
    component?: any;
    componentProps?: object;
    value?: string;
    closeButton?: boolean;
    iconClose?: IconValue<Icon>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SnackbarItemProps = SnackbarItemPropsBasic & SnackbarItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSnackbarItem: {
    closeButton: boolean;
    role: string;
};
export {};
