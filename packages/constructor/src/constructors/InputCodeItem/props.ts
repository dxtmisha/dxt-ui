import type { NumberOrString } from '@dxtmisha/functional'
import type { TextSymbolPropsInclude } from '../../types/textTypes'

type InputCodeItemPropsToken = {
  // :type [!] System label / Системная метка
  /** Disabled state / Состояние отключения */
  disabled?: boolean
  /** Success status / Статус успеха */
  success?: boolean
  /** Error status / Статус ошибки */
  error?: boolean
  /** Hidden state / Состояние скрытия */
  hide?: boolean
  // :type [!] System label / Системная метка
}

export type InputCodeItemPropsBasic = TextSymbolPropsInclude & {
  /** Focus movement enabled / Разрешено ли перемещение фокуса */
  move?: boolean

  /** Item index / Индекс элемента */
  index?: NumberOrString

  /** RegExp for input verification / Регулярное выражение для проверки ввода */
  match?: RegExp
  /** Mode of virtual keyboard / Режим виртуальной клавиатуры */
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string
  /** Placeholder text / Текст-заполнитель */
  placeholder?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputCodeItemProps = InputCodeItemPropsBasic & InputCodeItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputCodeItem = {
  move: true,
  match: /[0-9]/,
  inputmode: 'numeric',
  placeholder: ' ',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
