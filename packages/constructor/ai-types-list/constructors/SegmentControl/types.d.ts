// md5:487f3868b7a6334e74c69f35843e1dab
import { ConstrClass } from '@dxtmisha/functional';
import { TabsNavigationEmits, TabsNavigationExpose, TabsNavigationSlots } from '../TabsNavigation';
import { HorizontalScrollComponentInclude } from '../HorizontalScroll';
import { SegmentControlItemComponentInclude } from '../SegmentControlItem';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SegmentControlComponents = HorizontalScrollComponentInclude & SegmentControlItemComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SegmentControlEmits = TabsNavigationEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SegmentControlExpose extends TabsNavigationExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SegmentControlSlots extends TabsNavigationSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SegmentControlClasses = {
    main: ConstrClass;
    item: string;
};
