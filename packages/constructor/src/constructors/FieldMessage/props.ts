import type { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter'
import type { SkeletonPropsInclude } from '../Skeleton'

export type FieldMessagePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type FieldMessagePropsBasic<
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic
> = FieldCounterPropsInclude<FieldCounter>
  & SkeletonPropsInclude
  & {
    /** Whether to force show the message/ Принудительно ли показывать сообщение */
    forceShow?: boolean
    /** Whether the message can contain HTML code/ Может ли сообщение содержать HTML-код */
    hasHtmlCode?: boolean
    /** Whether the field is disabled/ Отключено ли поле */
    disabled?: boolean
    /** Whether the field is in warning state/ Находится ли поле в состоянии предупреждения */
    warning?: boolean

    /** Helper message text/ Текст вспомогательного сообщения */
    helperMessage?: string
    /** Warning message text/ Текст предупреждающего сообщения */
    warningMessage?: string
    /** Validation message text/ Текст сообщения валидации */
    validationMessage?: string

    /** Unique ID for the helper message/ Уникальный идентификатор вспомогательного сообщения */
    helperId?: string
    /** Unique ID for the warning message/ Уникальный идентификатор предупреждающего сообщения */
    warningId?: string
    /** Unique ID for the validation message/ Уникальный идентификатор сообщения валидации */
    validationId?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FieldMessageProps = FieldMessagePropsBasic & FieldMessagePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsFieldMessage = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
