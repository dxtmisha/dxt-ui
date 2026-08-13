// md5:5eb807c4593cb99a023e595ae1a1b4a1 true
export type NavigationRailItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type NavigationRailItemEmits = EventClickEmits;
export interface NavigationRailItemExpose extends EventClickExpose {
}
/** Slot definitions for NavigationRailItem @keywords slots navigation rail item */
export interface NavigationRailItemSlots extends LabelSlots {
    /** Slot for leading element @keywords leading slot */
    leading?(props: any): any;
    /** Slot for list item body @keywords body slot */
    body?(props: any): any;
}
export type NavigationRailItemClasses = {
    main: ConstrClass;
    label: string;
    context: string;
    contextLine: string;
    badge: string;
};