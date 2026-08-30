// md5:fdca4f806742e06d274e0b84e6f7be8c true
import type { ConstrBind } from '@dxtmisha/functional';
/** Component connection configuration for FieldLabel. @keywords field, label, component, include */
export type FieldLabelComponentInclude = {
  fieldLabel?: object;
};
/** Slots contract exposed by FieldLabelInclude. @keywords field, label, slots */
export interface FieldLabelSlotsInclude extends LabelAlternativeSlots {}
/** Props contract for FieldLabelInclude. @keywords field, label, props, required, counter */
export type FieldLabelPropsInclude<FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & {
  required?: boolean;
  fieldLabelAttrs?: ConstrBind<FieldLabel>;
};