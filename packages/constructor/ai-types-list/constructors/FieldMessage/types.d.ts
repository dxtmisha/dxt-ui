// md5:c293844de3ca71e71acd7a2fa5e9986b true
import { ConstrClass } from '@dxtmisha/functional';

export type FieldMessageComponents = FieldCounterComponentInclude;

export type FieldMessageEmits = {};

export interface FieldMessageExpose {
}

/** Slot definitions for message components @keywords slots, message, helper, validation */
export interface FieldMessageSlots {
    helper?(props: FieldMessageSlot): any;
    validation?(props: FieldMessageSlot): any;
}

export type FieldMessageClasses = {
    main: ConstrClass;
    info: string;
    error: string;
    fieldCounter: string;
};