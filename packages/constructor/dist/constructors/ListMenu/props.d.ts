import { WindowPropsBasic, WindowPropsInclude } from '../Window';
interface ListMenuPropsToken {
    open?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
}
export interface ListMenuPropsBasic<Window extends WindowPropsBasic = WindowPropsBasic> extends WindowPropsInclude<Window> {
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListMenuProps extends ListMenuPropsBasic, ListMenuPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsListMenu: {};
export {};
