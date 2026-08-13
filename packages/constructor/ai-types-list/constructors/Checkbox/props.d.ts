// md5:e56ed8e21965ce22d11014646753f846 true
import { ConstrBind } from '@dxtmisha/functional';
type CheckboxPropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways';
    container?: boolean;
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
export type CheckboxPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & FieldMessagePropsInclude<FieldMessage, FieldCounter> & FieldInputCheckProps & ProgressPropsInclude<Progress> & EnabledProps & ModelProps<boolean> & ModelPropsSelected & SkeletonPropsInclude & {
    selected?: string;
    /** Icon for checked state @keywords checkbox icon checked */
    iconCheckbox?: string | ConstrBind<Image> | null;
    /** Icon for indeterminate state @keywords checkbox icon indeterminate */
    iconIndeterminate?: string | ConstrBind<Image> | null;
};
/** Incoming properties for checkbox component @keywords checkbox props */
export type CheckboxProps = CheckboxPropsBasic & CheckboxPropsToken;
/** Default property values for checkbox @keywords checkbox defaults */
export declare const defaultsCheckbox: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};