import { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { HorizontalScrollPropsInclude } from '../HorizontalScroll';
import { ModelPropsSelected } from '../../types/modelTypes';
type TabsNavigationPropsToken = {
    divider?: boolean;
};
export type TabsNavigationPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = HorizontalScrollPropsInclude & ModelPropsSelected<ListSelectedList> & {
    /** Status/ Статусы */
    /** List of selected values/ Список выбранных значений */
    selected?: ListSelectedList;
    /** Value/ Значения */
    /** List of tab items/ Список элементов вкладок */
    list?: ListRecord<TabItem>;
    /** Style/ Стили */
    /** HTML tag for the tabs navigation/ HTML-тег для навигации вкладок */
    tag?: TabItem['tag'];
    /** Options/ Опции */
    /** Key for the label/ Ключ для подписи */
    keyLabel?: string;
    /** Key for the value/ Ключ для значения */
    keyValue?: string;
    /** Attributes/ Атрибуты */
    /** Additional attributes for each tab item/ Дополнительные атрибуты для каждого элемента вкладки */
    itemAttrs?: ConstrBind<TabItem>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TabsNavigationProps = TabsNavigationPropsBasic & TabsNavigationPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTabsNavigation: {
    horizontalScrollFlush: boolean;
    horizontalScrollAlign: string;
};
export {};
