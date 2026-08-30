// md5:7284480b196b10680ce499a8071d4bb3 true
type RadioPropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways';
    container?: boolean;
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
export type RadioPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>;
/** Radio component properties @keywords radio, props */
export type RadioProps = RadioPropsBasic & RadioPropsToken;
/** Default property values for radio component @keywords defaults, radio */
export declare const defaultsRadio: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};