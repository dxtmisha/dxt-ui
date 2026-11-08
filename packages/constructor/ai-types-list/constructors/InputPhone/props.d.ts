// md5:818fba07fe3ba327323d50f8a92ab806 true
import type { ConstrBind } from '@dxtmisha/functional';

type InputPhonePropsToken = {};

/** Basic properties for the InputPhone component. @keywords input, phone, props */
export type InputPhonePropsBasic<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic, Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = InputPhoneDialCodePropsInclude<InputPhoneDialCode> & Omit<FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, 'caption' | 'counterShow'> & FieldInputPhoneProps & {
    /** Default country code. */
    countryDefault?: string;
    /** Disables dynamic country detection by phone number. */
    countryBlock?: boolean;
    /** Additional attributes for the input mask. */
    maskAttrs?: ConstrBind<Mask>;
};

/** InputPhone component properties. @keywords input, phone, props */
export type InputPhoneProps = InputPhonePropsBasic & InputPhonePropsToken;

/** Default values for InputPhone properties. @keywords defaults, input, phone */
export declare const defaultsInputPhone: {};