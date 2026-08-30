// md5:8280a74f64a6bfe6afe3d437d0713ab6 true
import type { ConstrClass } from '@dxtmisha/functional';

export type ButtonComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type ButtonEmits = EventClickEmits;
export interface ButtonExpose extends EventClickExpose {}
export interface ButtonSlots extends LabelSlots {}
/** Class names for button sub-elements and states. @keywords button, classes, styling */
export type ButtonClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    trailing: string;
    loading: string;
};