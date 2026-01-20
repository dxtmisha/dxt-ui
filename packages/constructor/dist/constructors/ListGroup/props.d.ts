export type ListGroupPropsToken = {
    open?: boolean;
    divider?: boolean;
};
export type ListGroupPropsBasic = {
    divider?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ListGroupProps = ListGroupPropsBasic & ListGroupPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsListGroup: {};
