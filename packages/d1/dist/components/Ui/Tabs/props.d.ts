import { TabsPropsBasic } from '@dxtmisha/constructor/Tabs';
import { TabItemProps } from '../TabItem';
import { TabsNavigationProps } from '../TabsNavigation';
import { MotionAxisProps } from '../MotionAxis';
export declare const propsValues: {};
type PropsToken = {};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TabsProps = TabsPropsBasic<TabItemProps, TabsNavigationProps, MotionAxisProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
