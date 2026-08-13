// md5:2101441173111a00fded6fc44e7dd2a2 true
import { ConstrClass } from '@dxtmisha/functional';

export type ButtonGroupComponents = ButtonComponentInclude;

export type ButtonGroupEmits = EventClickEmits;

export interface ButtonGroupExpose {
}

/** Default slots for button group. @keywords button, group, slots */
export interface ButtonGroupSlots {
    default?(props: any): any;
}

/** Subclass definitions for button group. @keywords button, group, classes */
export type ButtonGroupClasses = {
    main: ConstrClass;
    item: string;
};