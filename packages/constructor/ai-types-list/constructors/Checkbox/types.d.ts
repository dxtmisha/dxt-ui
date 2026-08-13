// md5:09a35d4ec67f8f650b3c82e8b1acec47 true
import { ConstrClass } from '@dxtmisha/functional';
export type CheckboxComponents = ImageComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type CheckboxEmits = FieldBasicEmits<boolean> & ModelEmitsSelected;
/** Checkbox component exposed interface @keywords checkbox expose properties */
export interface CheckboxExpose extends FieldBasicExpose<boolean> {
}
/** Checkbox component slots @keywords checkbox slots template */
export interface CheckboxSlots extends LabelSlots, DescriptionSlots {
}
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