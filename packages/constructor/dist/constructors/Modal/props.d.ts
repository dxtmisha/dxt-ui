import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
interface ModalPropsToken {
    imagePosition?: 'top' | 'left';
}
export interface ModalPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> extends WindowPropsInclude<Window>, BarsPropsInclude<Bars>, ActionsPropsInclude<Actions>, ImagePropsInclude<Image> {
    open?: boolean;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ModalProps extends ModalPropsBasic, ModalPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsModal: {
    imagePosition: string;
    barsBackHide: boolean;
};
export {};
