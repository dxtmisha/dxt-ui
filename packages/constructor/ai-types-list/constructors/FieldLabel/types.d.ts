// md5:0af44750ee4ca8f63a9f027d9d1a0a49 true
import { ConstrClass } from '@dxtmisha/functional';

/** Interface for connected components. @keywords FieldLabelComponents, components */
export type FieldLabelComponents = FieldCounterComponentInclude & ProgressComponentInclude;

/** Available events type. @keywords FieldLabelEmits, events */
export type FieldLabelEmits = {};

/** Available properties interface. @keywords FieldLabelExpose, expose, properties */
export interface FieldLabelExpose {
}

/** Available slots interface. @keywords FieldLabelSlots, slots */
export interface FieldLabelSlots extends LabelAlternativeSlots {
}

/** Subclasses type definition. @keywords FieldLabelClasses, classes */
export type FieldLabelClasses = {
    main: ConstrClass;
    label: string;
    required: string;
};