import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
import { SkeletonPropsInclude } from '../Skeleton';
interface FieldMessagePropsToken {
}
export interface FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter>, SkeletonPropsInclude {
    forceShow?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    helperId?: string;
    validationId?: string;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface FieldMessageProps extends FieldMessagePropsBasic, FieldMessagePropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldMessage: {};
export {};
