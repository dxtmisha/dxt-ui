import type {
  TextCharacterLimitPropsInclude,
  TextCharacterRemainingPropsInclude
} from '../../types/textTypes'

export type FieldCounterPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type FieldCounterPropsBasic = TextCharacterLimitPropsInclude
  & TextCharacterRemainingPropsInclude
  & {
    // Style
    counter?: string | number
    maxlength?: string | number
    /**
     * The number of characters remaining at which the screen reader starts announcing/
     * Количество оставшихся символов, при котором скринридер начинает произносить
     */
    maxlengthOnce?: string | number

    template?: string

    // Technical
    id?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FieldCounterProps = FieldCounterPropsBasic & FieldCounterPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsFieldCounter = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
