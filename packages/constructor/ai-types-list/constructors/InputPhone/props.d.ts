// md5:9dc3d3ffeecac8e346dbe51aadccb423 true
import { ConstrBind } from '@dxtmisha/functional';
type InputPhonePropsToken = {};
export type InputPhonePropsBasic<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic, Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = InputPhoneDialCodePropsInclude<InputPhoneDialCode> & Omit<FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, 'caption' | 'counterShow'> & FieldInputPhoneProps & {
    /** Default country @keywords country_default, input_phone */
    countryDefault?: string;
    /** Flag to disable dynamic country detection by phone number @keywords country_block, input_phone */
    countryBlock?: boolean;
    /** Additional attributes for the mask @keywords mask_attrs, input_phone */
    maskAttrs?: ConstrBind<Mask>;
};
export type InputPhoneProps = InputPhonePropsBasic & InputPhonePropsToken;
/** Default values for input phone properties @keywords defaults_input_phone */
export declare const defaultsInputPhone: {};