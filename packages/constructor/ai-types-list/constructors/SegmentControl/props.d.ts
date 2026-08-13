// md5:f160513781bb0b616d25b5fe60e94a84
import { TabsNavigationPropsBasic } from '../TabsNavigation';
import { TabItemPropsBasic } from '../TabItem';
type SegmentControlPropsToken = {
    divider?: boolean;
};
export type SegmentControlPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = TabsNavigationPropsBasic<TabItem>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SegmentControlProps = SegmentControlPropsBasic & SegmentControlPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSegmentControl: {
    horizontalScrollAlign: boolean;
    horizontalScrollBleed: boolean;
};
export {};
