// md5:15e16612ee942eca9d809077cd540709 true
import type { ConstrClass } from '@dxtmisha/functional';

export type TabItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type TabItemEmits = EventClickEmits;
export interface TabItemExpose extends EventClickExpose {}
export interface TabItemSlots extends LabelSlots {}
export type TabItemClasses = {
  main: ConstrClass;
  label: string;
  icon: string;
  badge: string;
};