// md5:705c9c97419d6bf4b1f29e000d109253 true
import { ConstrBind } from '@dxtmisha/functional';

export type FieldLabelComponentInclude = {
    fieldLabel?: object;
};

export interface FieldLabelSlotsInclude extends LabelAlternativeSlots {
}

/** FieldLabelInclude properties. @keywords field_label props configuration */
export type FieldLabelPropsInclude<FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & {
    required?: boolean;
    fieldLabelAttrs?: ConstrBind<FieldLabel>;
};