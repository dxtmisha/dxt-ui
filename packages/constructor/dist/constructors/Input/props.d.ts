import { NumberOrString } from '@dxtmisha/functional';
import { MaskPropsBasic, MaskPropsInclude } from '../Mask';
import { IconPropsBasic } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { FieldInputProps } from '../../types/fieldTypes';
interface InputPropsToken {
}
export interface InputPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends MaskPropsInclude<Mask>, FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, FieldInputProps<NumberOrString> {
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface InputProps extends InputPropsBasic, InputPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsInput: {
    type: string;
    autocomplete: string;
    arrow: string;
    maskVisible: boolean;
};
export {};
