// md5:cd5fa1235c7231cb90cdf815da24008f true
import { ConstrClass } from '@dxtmisha/functional';

/** Components required for input phone operation @keywords input phone components include */
export type InputPhoneComponents = FieldComponentInclude & MaskComponentInclude & InputPhoneDialCodeComponentInclude;

/** Available events for input phone @keywords input phone emits events */
export type InputPhoneEmits = FieldBasicEmits;

/** Exposed methods and properties for input phone @keywords input phone expose properties */
export interface InputPhoneExpose extends FieldBasicExpose {
}

/** Available slots for input phone component @keywords input phone slots */
export interface InputPhoneSlots extends FieldSlotsInclude {
}

/** CSS class definitions for input phone elements @keywords input phone classes main */
export type InputPhoneClasses = {
    main: ConstrClass;
};