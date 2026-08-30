// md5:087fe4d94877c09a44aba74bf316bb24 true
type SliderFieldPropsToken = {
    disabled?: boolean;
    vertical?: boolean;
};

/** Basic properties interface for the SliderField component. @keywords slider, field, props */
export type SliderFieldPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, Slider extends SliderPropsBasic = SliderPropsBasic> = IconTrailingPropsInclude<Icon> & FieldLabelPropsInclude<FieldLabel> & FieldMessagePropsInclude<FieldMessage> & FieldValueProps<SliderValueType> & SliderPropsInclude<Slider> & {
    showValueInLabel?: boolean;
    showInput?: boolean;
    showValue?: boolean;
    labelLeading?: string;
    labelTrailing?: string;
    labelSeparator?: string;
};

/** Incoming properties for the SliderField component. @keywords slider, field, props */
export type SliderFieldProps = SliderFieldPropsBasic & SliderFieldPropsToken;

/** Default property values for the SliderField component. @keywords slider, field, defaults */
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