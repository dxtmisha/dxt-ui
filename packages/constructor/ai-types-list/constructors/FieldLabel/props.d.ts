// md5:8e597fec40a3fbfd26e806d0b06005b4 true
export type FieldLabelPropsToken = {};
export type FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & {
    for?: string;
    required?: boolean;
};
/** Field label component properties @keywords field label props properties */
export type FieldLabelProps = FieldLabelPropsBasic & FieldLabelPropsToken;
/** Default field label values @keywords defaults field label config */
export declare const defaultsFieldLabel: {};