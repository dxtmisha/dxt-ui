// md5:cc2a821efed70ecd0abb410b4347f48c true
import type { ConstrClass } from '@dxtmisha/functional';

/** Component dependencies required for button functionality. @keywords button, components */
export type ButtonComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type ButtonEmits = EventClickEmits;
export interface ButtonExpose extends EventClickExpose {}
export interface ButtonSlots extends LabelSlots {}
/** CSS class names for button sub-elements. @keywords button, classes, styling */
export type ButtonClasses = {
    main: ConstrClass;
    label: string;
    icon: string;
    trailing: string;
    loading: string;
};