// md5:4e7dcca751a7f9e76c072c28a61eef72 true
type SliderFieldPropsToken = {
    disabled?: boolean;
    vertical?: boolean;
};

export type SliderFieldPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, Slider extends SliderPropsBasic = SliderPropsBasic> = IconTrailingPropsInclude<Icon> & FieldLabelPropsInclude<FieldLabel> & FieldMessagePropsInclude<FieldMessage> & FieldValueProps<SliderValueType> & SliderPropsInclude<Slider> & {
    showValueInLabel?: boolean;
    showInput?: boolean;
    showValue?: boolean;
    labelLeading?: string;
    labelTrailing?: string;
    labelSeparator?: string;
};

export type SliderFieldProps = SliderFieldPropsBasic & SliderFieldPropsToken;

/** Default values for SliderField component properties. @keywords defaults, slider, configuration */
export declare const defaultsSliderField: {
    showValue: boolean;
    labelSeparator: string;
    keyLabel: string;
    keyValue: string;
    step: number;
    max: number;
    min: number;
    minimumDistance: number;
    showThumbLabel: boolean;
};