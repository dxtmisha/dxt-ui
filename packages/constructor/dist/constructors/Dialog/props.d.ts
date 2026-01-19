import { ConstrBind } from '@dxtmisha/functional';
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { IconPropsBasic, IconValue } from '../Icon';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { ButtonPropsBasic } from '../Button';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { TextClosePropsInclude, TextOkPropsInclude } from '../../types/textTypes';
interface DialogPropsToken {
    success?: boolean;
    error?: boolean;
    imagePosition?: 'top' | 'left';
}
export interface DialogPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> extends WindowPropsInclude<Window>, BarsPropsInclude<Bars>, ActionsPropsInclude<Actions>, ImagePropsInclude<Image>, LabelProps, DescriptionProps, TextClosePropsInclude, TextOkPropsInclude {
    open?: boolean;
    icon?: IconValue<Icon>;
    buttonOk?: string | ConstrBind<Button> | null;
    buttonClose?: string | ConstrBind<Button> | null;
    closeButton?: boolean;
    clickOkAndClose?: boolean;
    iconSuccess?: IconValue<Icon>;
    iconError?: IconValue<Icon>;
    iconAttrs?: ConstrBind<Icon>;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface DialogProps extends DialogPropsBasic, DialogPropsToken {
}
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
export {};
