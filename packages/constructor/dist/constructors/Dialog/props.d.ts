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
export type DialogPropsToken = {
    success?: boolean;
    error?: boolean;
    imagePosition?: string | 'top' | 'left';
};
export type DialogPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & LabelProps & DescriptionProps & TextClosePropsInclude & TextOkPropsInclude & {
    /** Status/ Статус */
    /** Whether the dialog is open/ Открыто ли диалоговое окно */
    open?: boolean;
    /** Style/ Стили */
    /** Icon for the dialog/ Иконка для диалогового окна */
    icon?: IconValue<Icon>;
    /** Positive action button properties/ Свойства кнопки положительного действия */
    buttonOk?: string | ConstrBind<Button> | null;
    /** Close action button properties/ Свойства кнопки действия закрытия */
    buttonClose?: string | ConstrBind<Button> | null;
    /** Whether to show the close button/ Показывать ли кнопку закрытия */
    closeButton?: boolean;
    /** Whether to close the dialog upon clicking the OK button/ Закрывать ли диалоговое окно при клике на кнопку подтверждения */
    clickOkAndClose?: boolean;
    /** Icon for the success state/ Иконка для состояния успеха */
    iconSuccess?: IconValue<Icon>;
    /** Icon for the error state/ Иконка для состояния ошибки */
    iconError?: IconValue<Icon>;
    /** Additional attributes for the icon component/ Дополнительные атрибуты для компонента иконки */
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
