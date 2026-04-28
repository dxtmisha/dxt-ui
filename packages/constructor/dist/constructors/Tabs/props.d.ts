import { ListSelectedList } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { TabsNavigationPropsBasic, TabsNavigationPropsInclude } from '../TabsNavigation';
import { MotionAxisPropsBasic, MotionAxisPropsInclude } from '../MotionAxis';
import { ModelPropsSelected } from '../../types/modelTypes';
type TabsPropsToken = {};
export type TabsPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic, MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = TabsNavigationPropsInclude<TabItem, TabsNavigation> & MotionAxisPropsInclude<MotionAxis> & ModelPropsSelected<ListSelectedList>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TabsProps = TabsPropsBasic & TabsPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTabs: {};
export {};
