import { LabelProps } from '../../types/labelTypes';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
import { SkeletonPropsInclude } from '../Skeleton';
interface FieldLabelPropsToken {
}
export interface FieldLabelPropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelProps, FieldCounterPropsInclude<FieldCounter>, ProgressPropsInclude<Progress>, SkeletonPropsInclude {
    required?: boolean;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface FieldLabelProps extends FieldLabelPropsBasic, FieldLabelPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldLabel: {};
export {};
