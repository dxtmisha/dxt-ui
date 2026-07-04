import type { NumberOrString } from '@dxtmisha/functional'
import type { TextSymbolPropsInclude } from '../../types/textTypes'

type InputCodeItemPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  success?: boolean
  error?: boolean
  hide?: boolean
  // :type [!] System label / Системная метка
}

export type InputCodeItemPropsBasic = TextSymbolPropsInclude & {
  /** Focus movement enabled / Разрешено ли перемещение фокуса */
  move?: boolean

  /** Input name / Название поля ввода */
  name?: string
  /** Item index / Индекс элемента */
  index?: NumberOrString

  /** RegExp for input verification / Регулярное выражение для проверки ввода */
  match?: RegExp
  /** Mode of virtual keyboard / Режим виртуальной клавиатуры */
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string
  /** Placeholder text / Текст-заполнитель */
  placeholder?: string
  /** Tab index for keyboard navigation / Индекс табуляции для навигации с клавиатуры */
  tabindex?: number | string
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
  name: 'item-code',
  match: /[0-9]/,
  inputMode: 'numeric',
  placeholder: ' ',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
