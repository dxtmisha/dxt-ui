// md5:99e205f6b93aa4d613f696bcb6ed4265
import { MenuPropsBasic } from '../Menu';
import { MenuCountryPropsBasic } from '../MenuCountry';
type MenuLanguagePropsToken = {};
export type MenuLanguagePropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuCountryPropsBasic<Menu>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuLanguageProps = MenuLanguagePropsBasic & MenuLanguagePropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMenuLanguage: {
    isSelectedByValue: boolean;
};
export {};
