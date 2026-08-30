// md5:07ce8b003600bccc0b86aad149165a59 true
import type { InputSocialTypeValue } from '@dxtmisha/media';

export type InputSocialPropsToken = {};

/** Basic properties of InputSocial component. @keywords input social props */
export type InputSocialPropsBasic<
    Mask extends MaskPropsBasic = MaskPropsBasic,
    Icon extends IconPropsBasic = IconPropsBasic,
    Field extends FieldPropsBasic = FieldPropsBasic,
    FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
    FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
    FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
    Progress extends ProgressPropsBasic = ProgressPropsBasic
> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputSocialProps & {
    /** Social network type. */
    socialType?: InputSocialTypeValue;
    /** Dictionary of custom icons for each social network. */
    socialIcons?: Record<InputSocialTypeValue, string>;
};

export type InputSocialProps = InputSocialPropsBasic & InputSocialPropsToken;

/** Default values for InputSocial properties. @keywords input social defaults */
export declare const defaultsInputSocial: {
    type: string;
    autocomplete: string;
    maskVisible: boolean;
};