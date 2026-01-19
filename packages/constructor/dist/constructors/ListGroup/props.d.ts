interface ListGroupPropsToken {
    open?: boolean;
    divider?: boolean;
}
export interface ListGroupPropsBasic {
    divider?: boolean;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListGroupProps extends ListGroupPropsBasic, ListGroupPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsListGroup: {};
export {};
