import { ConstrBind } from '@dxtmisha/functional';
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { IconPropsBasic, IconValue } from '../Icon';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { ButtonPropsBasic } from '../Button';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { TextClosePropsInclude, TextOkPropsInclude } from '../../types/textTypes';
export type DialogPropsToken = {
    success?: boolean;
    error?: boolean;
    imagePosition?: 'top' | 'left';
};
export type DialogPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & LabelProps & DescriptionProps & TextClosePropsInclude & TextOkPropsInclude & {
    open?: boolean;
    icon?: IconValue<Icon>;
    buttonOk?: string | ConstrBind<Button> | null;
    buttonClose?: string | ConstrBind<Button> | null;
    closeButton?: boolean;
    clickOkAndClose?: boolean;
    iconSuccess?: IconValue<Icon>;
    iconError?: IconValue<Icon>;
    iconAttrs?: ConstrBind<Icon>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type DialogProps = DialogPropsBasic & DialogPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsDialog: {
    imagePosition: string;
    barsBackHide: boolean;
    barsHide: boolean;
    clickOkAndClose: boolean;
};
