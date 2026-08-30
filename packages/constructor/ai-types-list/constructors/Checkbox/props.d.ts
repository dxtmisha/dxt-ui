// md5:84a935dcc7641d524994b27ba13fe34a true
import type { ConstrBind } from '@dxtmisha/functional';
type CheckboxPropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways';
    container?: boolean;
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
/** Base properties for the checkbox component. @keywords checkbox, basic, props */
export type CheckboxPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & FieldMessagePropsInclude<FieldMessage, FieldCounter> & FieldInputCheckProps & ProgressPropsInclude<Progress> & EnabledProps & ModelProps<boolean> & ModelPropsSelected & SkeletonPropsInclude & {
    selected?: string;
    /** Icon for the checked state. @keywords icon, checked */
    iconCheckbox?: string | ConstrBind<Image> | null;
    /** Icon for the indeterminate state. @keywords icon, indeterminate */
    iconIndeterminate?: string | ConstrBind<Image> | null;
};
/** Properties for the checkbox component. @keywords checkbox, props */
export type CheckboxProps = CheckboxPropsBasic & CheckboxPropsToken;
/** Default property values for the checkbox component. @keywords checkbox, defaults */
export declare const defaultsCheckbox: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};