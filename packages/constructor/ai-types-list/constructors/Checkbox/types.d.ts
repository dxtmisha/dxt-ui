// md5:ca043db2bb50ce423588c81345e249e3 true
import type { ConstrClass } from '@dxtmisha/functional';

/** Components required for checkbox functionality. @keywords checkbox, components */
export type CheckboxComponents = ImageComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude & RippleComponentInclude;

/** Checkbox event emissions. @keywords checkbox, emits, events */
export type CheckboxEmits = FieldBasicEmits<boolean> & ModelEmitsSelected;

/** Checkbox exposed instance properties and methods. @keywords checkbox, expose */
export interface CheckboxExpose extends FieldBasicExpose<boolean> {}

/** Available slot definitions for checkbox component. @keywords checkbox, slots */
export interface CheckboxSlots extends LabelSlots, DescriptionSlots {}

/** Element class structure for checkbox styling. @keywords checkbox, classes, style */
export type CheckboxClasses = {
    main: ConstrClass;
    input: string;
    body: string;
    item: string;
    icon: string;
    loading: string;
    info: string;
    label: string;
};