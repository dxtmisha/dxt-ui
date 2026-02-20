import { ConstrClass, ListSelectedList } from '@dxtmisha/functional';
import { TabsNavigationComponentInclude, TabsNavigationEmits } from '../TabsNavigation';
import { MotionAxisComponentInclude, MotionAxisEmitsInclude, MotionAxisSlots } from '../MotionAxis';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { ModelEmitsSelected } from '../../types/modelTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TabsComponents = TabsNavigationComponentInclude & MotionAxisComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TabsEmits = TabsNavigationEmits & MotionAxisEmitsInclude & EventClickEmits & ModelEmitsSelected<ListSelectedList>;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TabsExpose extends EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type TabsSlots = MotionAxisSlots;
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TabsClasses = {
    main: ConstrClass;
    slide: string;
};
