// md5:6132c44e5a421118bb181fc5d55131ed true
import type { ConstrBind } from '@dxtmisha/functional';

type InputPhonePropsToken = {};

/** Basic properties for the InputPhone component @keywords phone_input, input_phone, properties */
export type InputPhonePropsBasic<
  InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic,
  Mask extends MaskPropsBasic = MaskPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = InputPhoneDialCodePropsInclude<InputPhoneDialCode> &
  Omit<FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, 'caption' | 'counterShow'> &
  FieldInputPhoneProps & {
    /** Default country code @keywords default_country */
    countryDefault?: string;
    /** Disables dynamic country detection by phone number @keywords country_block, disable_detection */
    countryBlock?: boolean;
    /** Additional attributes for the input mask @keywords mask_attributes */
    maskAttrs?: ConstrBind<Mask>;
  };

/** Properties for the InputPhone component @keywords phone_input, props */
export type InputPhoneProps = InputPhonePropsBasic & InputPhonePropsToken;

/** Default property values for the InputPhone component @keywords defaults */
export declare const defaultsInputPhone: {};