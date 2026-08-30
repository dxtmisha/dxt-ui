// md5:8f7a46a80d9c738dadc23a3189746f26 true
import type { ConstrClass } from '@dxtmisha/functional';
/** Required sub-components for navigation rail item. @keywords navigation rail item, components */
export type NavigationRailItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type NavigationRailItemEmits = EventClickEmits;
export interface NavigationRailItemExpose extends EventClickExpose {}
/** Available slots for navigation rail item. @keywords navigation rail item, slots */
export interface NavigationRailItemSlots extends LabelSlots {
    /** Slot for leading element. @keywords slot, leading */
    leading?(props: any): any;
    /** Slot for body element content. @keywords slot, body */
    body?(props: any): any;
}
/** CSS class names structure for navigation rail item. @keywords navigation rail item, classes */
export type NavigationRailItemClasses = {
    main: ConstrClass;
    label: string;
    context: string;
    contextLine: string;
    badge: string;
};