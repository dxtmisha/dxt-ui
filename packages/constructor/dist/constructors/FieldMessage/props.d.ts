import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
import { SkeletonPropsInclude } from '../Skeleton';
export type FieldMessagePropsToken = {};
export type FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & SkeletonPropsInclude & {
    forceShow?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    helperId?: string;
    validationId?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FieldMessageProps = FieldMessagePropsBasic & FieldMessagePropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldMessage: {};
