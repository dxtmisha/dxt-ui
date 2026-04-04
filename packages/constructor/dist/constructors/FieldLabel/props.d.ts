import { LabelProps } from '../../types/labelTypes';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
import { SkeletonPropsInclude } from '../Skeleton';
export type FieldLabelPropsToken = {};
export type FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & FieldCounterPropsInclude<FieldCounter> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & {
    /** Information/ Информационные свойства */
    /** Identifier of the input element this label is for/ Идентификатор элемента ввода, к которому относится этот лейбл */
    for?: string;
    /** Style/ Стили */
    /** Whether the field is required/ Является ли поле обязательным */
    required?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FieldLabelProps = FieldLabelPropsBasic & FieldLabelPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldLabel: {};
