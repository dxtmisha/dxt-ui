// md5:a1b8ab6dc90acfb8d71302b7824f6df5 true
import { ConstrClass } from '@dxtmisha/functional';

export type ActionsComponents = ButtonComponentInclude;

export type ActionsEmits = EventClickEmits;

export interface ActionsExpose {
}

export interface ActionsSlots {
    /** @keywords slot, default, action */
    default?(props: any): any;
    /** @keywords slot, secondary, action */
    secondary?(props: any): any;
}

export type ActionsClasses = {
    main: ConstrClass;
    item: string;
    list: string;
    secondary: string;
    spacer: string;
};