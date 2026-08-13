// md5:7213d2ba13c70a1edb8b6eee3470b8a3
import { ImagePropsBasic } from '../Image';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { CheckboxPropsBasic } from '../Checkbox';
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
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SwitchProps = SwitchPropsBasic & SwitchPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSwitch: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};
export {};
