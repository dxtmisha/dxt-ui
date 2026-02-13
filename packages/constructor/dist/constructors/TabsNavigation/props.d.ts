import { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { HorizontalScrollPropsInclude } from '../HorizontalScroll';
type TabsNavigationPropsToken = {
    scrollable?: boolean;
    divider?: boolean;
};
export type TabsNavigationPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = HorizontalScrollPropsInclude & {
    'selected'?: ListSelectedList;
    'list'?: ListRecord<TabItem>;
    'tag'?: TabItem['tag'];
    'keyLabel'?: string;
    'keyValue'?: string;
    'itemAttrs'?: ConstrBind<TabItem>;
    'modelSelected'?: boolean;
    'onUpdate:selected'?: (value: boolean) => void;
    'onUpdate:modelSelected'?: (value: boolean) => void;
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
export declare const defaultsTabsNavigation: {};
export {};
