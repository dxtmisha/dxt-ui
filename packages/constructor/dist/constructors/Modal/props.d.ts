import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
export type ModalPropsToken = {
    imagePosition?: string | 'top' | 'left';
};
export type ModalPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & ImagePropsInclude<Image> & {
    /** Status/ Статус */
    /** Whether the modal is open/ Открыто ли модальное окно */
    open?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ModalProps = ModalPropsBasic & ModalPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsModal: {
    imagePosition: string;
    barsBackHide: boolean;
};
