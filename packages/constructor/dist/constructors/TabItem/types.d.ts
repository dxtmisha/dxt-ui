import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { BadgeComponentInclude } from '../Badge';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentsInclude } from '../Ripple';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
import { LabelSlots } from '../../types/labelTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TabItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentsInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TabItemEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TabItemExpose extends EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TabItemSlots extends LabelSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TabItemClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    badge: string;
};
