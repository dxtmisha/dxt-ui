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
    /** Style/ Стили */
    /** Current counter value/ Текущее значение счетчика */
    counter?: string | number
    /** Maximum allowed length/ Максимально допустимая длина */
    maxlength?: string | number
    /**
     * The number of characters remaining at which the screen reader starts announcing/
     * Количество оставшихся символов, при котором скринридер начинает произносить
     */
    maxlengthOnce?: string | number

    /** Template for formatting the counter display/ Шаблон для форматирования отображения счетчика */
    template?: string

    /** Technical/ Технические свойства */
    /** Unique identifier for the element/ Уникальный идентификатор для элемента */
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
