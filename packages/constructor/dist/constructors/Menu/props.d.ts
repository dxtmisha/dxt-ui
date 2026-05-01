import { ApiFetch, ConstrBind, ListRecord, ListSelectedList, NormalOrPromise } from '@dxtmisha/functional';
import { ListPropsBasic } from '../List';
import { ListItemProps, ListItemPropsBasic } from '../ListItem';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { ModelPropsSelected } from '../../types/modelTypes';
import { RoleType } from '../../types/roleTypes';
export type MenuPropsToken = {
    hideList?: boolean;
    barsAdaptive?: string | 'showAlways';
};
export type MenuPropsBasic<List extends ListPropsBasic = ListPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Window extends WindowPropsBasic = WindowPropsBasic> = BarsPropsInclude<Bars> & WindowPropsInclude<Window> & ModelPropsSelected & {
    /** Status/ Статус */
    /** List of selected items/ Список выбранных элементов */
    selected?: ListSelectedList;
    /** Whether to hide the list/ Скрыть ли список */
    hideList?: boolean;
    /** Value/ Значения */
    /** Data list/ Список данных */
    list?: ListRecord<ListItem>;
    /** Threshold for enabling lite mode/ Порог для включения упрощенного режима */
    liteThreshold?: number;
    /** Search string for highlighting/ Строка поиска для подсветки */
    highlight?: string;
    /** Starting length for search highlighting/ Начальная длина для подсветки поиска */
    highlightLengthStart?: number;
    /** Whether to enable filtering mode/ Включен ли режим фильтрации */
    filterMode?: boolean;
    /** AJAX request or function to fetch the list/ AJAX-запрос или функция для получения списка */
    ajax?: string | (() => NormalOrPromise<ListRecord<ListItem>>);
    /** Fetch function for the request/ Функция запроса для получения данных */
    request?: ApiFetch;
    /** Whether to cache the results/ Кэшировать ли результаты */
    cache?: boolean;
    /** Key for the label in the data object/ Ключ для заголовка в объекте данных */
    keyLabel?: string;
    /** Key for the value in the data object/ Ключ для значения в объекте данных */
    keyValue?: string;
    /** Maximum number of items/ Максимальное количество элементов */
    max?: string | number;
    /** Style/ Стили */
    /** HTML tag for the menu item/ HTML-тег для элемента меню */
    tag?: ListItemProps['tag'];
    /** Step for navigation/ Шаг для навигации */
    step?: string | number;
    /** Additional attributes for the List component/ Дополнительные атрибуты для компонента списка */
    listAttrs?: ConstrBind<List>;
    /** Additional attributes for the List Item components/ Дополнительные атрибуты для компонентов элементов списка */
    itemAttrs?: ConstrBind<ListItem>;
    /** ARIA/ ARIA */
    /** ARIA role for the list/ ARIA-роль для списка */
    roleList?: RoleType;
    /** ARIA role for items/ ARIA-роль для элементов */
    roleItem?: RoleType;
    /** Technical/ Технические свойства */
    /** Whether selection is determined by value/ Определяется ли выбор по значению */
    isSelectedByValue?: boolean;
    /** Whether the menu is embedded/ Является ли меню встроенным */
    embedded?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuProps = MenuPropsBasic & MenuPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMenu: {
    liteThreshold: number;
    barsHide: boolean;
    barsBackHide: boolean;
    tag: string;
    step: number;
    autoClose: boolean;
};
