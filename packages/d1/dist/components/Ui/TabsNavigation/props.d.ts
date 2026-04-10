import { TabsNavigationPropsBasic } from '@dxtmisha/constructor/TabsNavigation';
import { TabItemProps } from '../TabItem';
export declare const propsValues: {};
type PropsToken = {
    divider?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TabsNavigationProps = TabsNavigationPropsBasic<TabItemProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
