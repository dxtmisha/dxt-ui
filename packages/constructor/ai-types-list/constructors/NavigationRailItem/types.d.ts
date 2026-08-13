// md5:5eb807c4593cb99a023e595ae1a1b4a1
import { ConstrClass } from '@dxtmisha/functional';
import { IconComponentInclude } from '../Icon';
import { BadgeComponentInclude } from '../Badge';
import { ProgressComponentInclude } from '../Progress';
import { RippleComponentInclude } from '../Ripple';
import { LabelSlots } from '../../types/labelTypes';
import { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type NavigationRailItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type NavigationRailItemEmits = EventClickEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface NavigationRailItemExpose extends EventClickExpose {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface NavigationRailItemSlots extends LabelSlots {
    /** Slot for the leading element/ Слот для ведущего элемента */
    leading?(props: any): any;
    /** Slot for the list item body/ Слот для содержимого элемента списка */
    body?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type NavigationRailItemClasses = {
    main: ConstrClass;
    label: string;
    context: string;
    contextLine: string;
    badge: string;
};
