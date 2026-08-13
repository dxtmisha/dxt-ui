// md5:7213d2ba13c70a1edb8b6eee3470b8a3 true
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
/** Switch component incoming properties @keywords switch properties props */
export type SwitchProps = SwitchPropsBasic & SwitchPropsToken;
/** Default values for switch component properties @keywords defaults switch configuration */
export declare const defaultsSwitch: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};