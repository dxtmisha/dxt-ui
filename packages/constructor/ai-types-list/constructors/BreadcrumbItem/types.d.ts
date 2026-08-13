// md5:5cbe3102e0f07f3a102171894983f43e
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BreadcrumbItemComponents = IconComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BreadcrumbItemEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BreadcrumbItemExpose extends EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BreadcrumbItemSlots extends LabelSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BreadcrumbItemClasses = {
    main: ConstrClass;
    iconArrow: string;
};
