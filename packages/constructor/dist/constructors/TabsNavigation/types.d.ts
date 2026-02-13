import { ConstrClass } from '@dxtmisha/functional';
import { HorizontalScrollComponentInclude } from '../HorizontalScroll';
import { TabItemComponentInclude } from '../TabItem';
import { EventClickEmits } from '../../types/eventClickTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TabsNavigationComponents = HorizontalScrollComponentInclude & TabItemComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TabsNavigationEmits = EventClickEmits & {
    'update:selected': [value: boolean];
    'update:modelSelected': [value: boolean];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TabsNavigationExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TabsNavigationSlots {
    leading?(props: any): any;
    trailing?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TabsNavigationClasses = {
    main: ConstrClass;
};
