import { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { HorizontalScrollPropsInclude } from '../HorizontalScroll';
import { ModelPropsSelected } from '../../types/modelTypes';
type TabsNavigationPropsToken = {
    divider?: boolean;
};
export type TabsNavigationPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = HorizontalScrollPropsInclude & ModelPropsSelected<ListSelectedList> & {
    selected?: ListSelectedList;
    list?: ListRecord<TabItem>;
    tag?: TabItem['tag'];
    keyLabel?: string;
    keyValue?: string;
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
