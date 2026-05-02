import { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes';
type ClientOnlyPropsToken = {};
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ClientOnlyProps = ClientOnlyPropsBasic & ClientOnlyPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsClientOnly: {
    clientOnly: boolean;
};
export {};
