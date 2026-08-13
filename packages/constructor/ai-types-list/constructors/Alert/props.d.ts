// md5:f461de0ec73eba268ff1a3f3695db6a9
import { ConstrBind } from '@dxtmisha/functional';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { AlertLinkPropsBasic, AlertLinkPropsInclude } from '../AlertLink';
import { ButtonPropsBasic } from '../Button';
import { IconPropsBasic, IconTrailingPropsInclude } from '../Icon';
import { AriaLivePropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { LabelProps } from '../../types/labelTypes';
import { TextClosePropsInclude } from '../../types/textTypes';
type AlertPropsToken = {
    itemCenter?: boolean;
};
export type AlertPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, AlertLink extends AlertLinkPropsBasic = AlertLinkPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & IconTrailingPropsInclude<Icon> & AlertLinkPropsInclude<AlertLink> & ActionsPropsInclude<Actions> & AriaRolePropsInclude & AriaLivePropsInclude & TextClosePropsInclude & {
    /** Close button value / Значение для кнопки */
    button?: string | number | ConstrBind<Button>;
    /** Close button icon name / Название иконки для закрытия */
    iconClose?: string;
    /** Shows the close button / Показывает кнопку закрытия */
    closeButton?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AlertProps = AlertPropsBasic & AlertPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAlert: {
    itemCenter: boolean;
    role: string;
};
export {};
