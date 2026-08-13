// md5:332dc0d9f0992c8a19dadde7b08234e0 true
import { ImagePropsBasic, FieldMessagePropsBasic, FieldCounterPropsBasic, ProgressPropsBasic, CheckboxPropsBasic } from '@gravity-ui/uikit';

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

/** Radio component properties @keywords radio properties props */
export type RadioProps = RadioPropsBasic & RadioPropsToken;

/** Default values for radio component @keywords defaults radio */
export declare const defaultsRadio: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};