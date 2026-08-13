// md5:9773dbc74b08ac0a076edee83384bcd8 true
import { InputSocialTypeValue } from '@dxtmisha/media';
export type InputSocialPropsToken = {};
export type InputSocialPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputSocialProps & {
    socialType?: InputSocialTypeValue;
    socialIcons?: Record<InputSocialTypeValue, string>;
};
export type InputSocialProps = InputSocialPropsBasic & InputSocialPropsToken;
/** Default configuration values for InputSocial component properties @keywords defaults, input_social, configuration */
export declare const defaultsInputSocial: {
    type: string;
    autocomplete: string;
    maskVisible: boolean;
};