// md5:c31d540fc4fc7b2af3659209cf3eb49b true
import { NumberOrString } from '@dxtmisha/functional';
export type InputPropsToken = {};
export type InputPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputProps<NumberOrString>;
/** Type describing incoming properties. @keywords input_props incoming properties */
export type InputProps = InputPropsBasic & InputPropsToken;
/** Default values for input properties. @keywords defaults_input default values */
export declare const defaultsInput: {
    type: string;
    autocomplete: string;
    arrow: string;
    maskVisible: boolean;
};