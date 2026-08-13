// md5:20790f0a8b3207b3b68bba49b2042543
import { ListSelectedList } from '@dxtmisha/functional';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { ModelPropsSelected } from '../../types/modelTypes';
type MenuCountryPropsToken = {};
export type MenuCountryPropsBasic<Menu extends MenuPropsBasic = MenuPropsBasic> = MenuPropsInclude<Menu> & ModelPropsSelected<ListSelectedList> & {
    /** List of selected items/ Список выбранных элементов */
    selected?: ListSelectedList;
    /**
     * Filter countries by code (ISO 3166-1 alpha-2)/
     * Фильтр стран по кодам (ISO 3166-1 alpha-2)
     */
    list?: string[];
    /** Whether to show the phone code/ Показывать ли код телефона */
    showPhoneCode?: boolean;
    /** Whether selection is determined by value/ Определяется ли выбор по значению */
    isSelectedByValue?: boolean;
    /** Representation language/ Язык представления */
    language?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuCountryProps = MenuCountryPropsBasic & MenuCountryPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMenuCountry: {
    isSelectedByValue: boolean;
};
export {};
