// md5:9dc3d3ffeecac8e346dbe51aadccb423
import { IconPropsBasic } from '../Icon';
import { InputPhoneDialCodePropsBasic, InputPhoneDialCodePropsInclude } from '../InputPhoneDialCode';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { ProgressPropsBasic } from '../Progress';
import { FieldInputPhoneProps } from '../../types/fieldTypes';
import { ConstrBind } from '@dxtmisha/functional';
import { MaskPropsBasic } from '../Mask';
/**
 * Type describing token properties for InputPhone /
 * Тип, описывающий свойства токенов для InputPhone
 */
type InputPhonePropsToken = {};
/**
 * Interface describing basic properties of the InputPhone component /
 * Интерфейс, описывающий базовые свойства компонента InputPhone
 */
export type InputPhonePropsBasic<InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic, Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = InputPhoneDialCodePropsInclude<InputPhoneDialCode> & Omit<FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, 'caption' | 'counterShow'> & FieldInputPhoneProps & {
    /** Default country / Страна по умолчанию */
    countryDefault?: string;
    /** Flag to disable dynamic country detection by phone number / Флаг для отключения динамического определения страны по номеру телефона */
    countryBlock?: boolean;
    /** Additional attributes for the mask / Дополнительные атрибуты для маски */
    maskAttrs?: ConstrBind<Mask>;
};
/** Type describing incoming properties / Тип, описывающий входящие свойства */
export type InputPhoneProps = InputPhonePropsBasic & InputPhonePropsToken;
/** Default values for properties / Значения по умолчанию для свойств */
export declare const defaultsInputPhone: {};
export {};
