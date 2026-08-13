// md5:ad4d48c91b7bdf88a39104d47153338d true
import { ConstrClass } from '@dxtmisha/functional';

export type TableItemComponents = {};

export type TableItemEmits = {};

export interface TableItemExpose {
}

export interface TableItemSlots extends LabelSlots, DescriptionSlots {
    /** Slot for custom cell context @keywords context slot cell */
    context?(): any;
}

export type TableItemClasses = {
    /** Main class name of the table item @keywords main class table item */
    main: ConstrClass;
    label: string;
    description: string;
};