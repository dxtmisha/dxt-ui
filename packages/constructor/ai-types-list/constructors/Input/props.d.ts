// md5:47707f3d991451c275eac44a15fa54e4 true
import type { NumberOrString } from '@dxtmisha/functional';

export type InputPropsToken = {};

export type InputPropsBasic<
  Mask extends MaskPropsBasic = MaskPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic,
> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputProps<NumberOrString>;

/** Input component properties. @keywords input, props */
export type InputProps = InputPropsBasic & InputPropsToken;

/** Default property values for input component. @keywords input, defaults */
export declare const defaultsInput: {
  type: string;
  autocomplete: string;
  arrow: string;
  maskVisible: boolean;
};