// md5:7d24e074c03868e0cb6b2e06a78c8efa true
import { ConstrClass } from '@dxtmisha/functional';
export type TabItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type TabItemEmits = EventClickEmits;
export interface TabItemExpose extends EventClickExpose {
}
export interface TabItemSlots extends LabelSlots {
}
/** Tab item CSS classes definition @keywords TabItemClasses, styles */
export type TabItemClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    badge: string;
};