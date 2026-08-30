// md5:637685321b060536efde1b9670630dce true
export type FieldLabelPropsToken = {};
export type FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & {
    /** Associated input element ID. @keywords input, id, for */
    for?: string;
    /** Indicates whether the field is required. @keywords required, validation */
    required?: boolean;
};
/** Field label component properties. @keywords field, label, props */
export type FieldLabelProps = FieldLabelPropsBasic & FieldLabelPropsToken;
/** Default properties for the field label component. @keywords defaults, field, label */
export declare const defaultsFieldLabel: {};