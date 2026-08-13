// md5:332dc0d9f0992c8a19dadde7b08234e0
import { ImagePropsBasic } from '../Image';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { CheckboxPropsBasic } from '../Checkbox';
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
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type RadioProps = RadioPropsBasic & RadioPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsRadio: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};
export {};
