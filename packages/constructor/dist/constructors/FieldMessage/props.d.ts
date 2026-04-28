import { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter';
import { SkeletonPropsInclude } from '../Skeleton';
export type FieldMessagePropsToken = {};
export type FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & SkeletonPropsInclude & {
    /** Status/ Статус */
    /** Whether to force show the message/ Принудительно ли показывать сообщение */
    forceShow?: boolean;
    /** Whether the field is disabled/ Отключено ли поле */
    disabled?: boolean;
    /** Value/ Значения */
    /** Helper message text/ Текст вспомогательного сообщения */
    helperMessage?: string;
    /** Validation message text/ Текст сообщения валидации */
    validationMessage?: string;
    /** Technical/ Технические свойства */
    /** Unique ID for the helper message/ Уникальный идентификатор вспомогательного сообщения */
    helperId?: string;
    /** Unique ID for the validation message/ Уникальный идентификатор сообщения валидации */
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
