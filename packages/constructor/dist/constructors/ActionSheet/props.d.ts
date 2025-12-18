import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
interface ActionSheetPropsToken {
}
export interface ActionSheetPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> extends WindowPropsInclude<Window>, BarsPropsInclude<Bars>, ActionsPropsInclude<Actions> {
    open?: boolean;
    touchClose?: boolean;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ActionSheetProps extends ActionSheetPropsBasic, ActionSheetPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsActionSheet: {
    barsBackHide: boolean;
    touchClose: boolean;
};
export {};
