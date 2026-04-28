import { TextareaAutosizePropsBasic, TextareaAutosizePropsInclude } from '../TextareaAutosize';
import { IconPropsBasic } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { FieldTextareaProps } from '../../types/fieldTypes';
type TextareaPropsToken = {};
export type TextareaPropsBasic<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = TextareaAutosizePropsInclude<TextareaAutosize> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldTextareaProps<string>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TextareaProps = TextareaPropsBasic & TextareaPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTextarea: {
    cancel: string;
    autosize: boolean;
};
export {};
