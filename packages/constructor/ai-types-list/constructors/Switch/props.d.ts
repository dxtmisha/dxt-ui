// md5:1c9fa7d777ff5c167070595307f38087 true
type SwitchPropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways';
    container?: boolean;
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
export type SwitchPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>;
/** Switch component properties. @keywords switch, props */
export type SwitchProps = SwitchPropsBasic & SwitchPropsToken;
/** Default property values for Switch component. @keywords switch, defaults */
export declare const defaultsSwitch: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};