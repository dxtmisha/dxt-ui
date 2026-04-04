import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
export type ActionSheetPropsToken = {};
export type ActionSheetPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = WindowPropsInclude<Window> & BarsPropsInclude<Bars> & ActionsPropsInclude<Actions> & {
    /** Whether the action sheet is visible/ Открыт ли лист действий */
    open?: boolean;
    /** Whether to close the action sheet by swiping down or clicking the overlay/ Закрывать ли лист действий при свайпе вниз или клике на оверлей */
    touchClose?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ActionSheetProps = ActionSheetPropsBasic & ActionSheetPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsActionSheet: {
    barsBackHide: boolean;
    touchClose: boolean;
};
