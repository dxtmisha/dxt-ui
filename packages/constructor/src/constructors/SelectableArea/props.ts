import type { ModelPropsSelected } from '../../types/modelTypes'

/** Type describing token properties / Тип, описывающий свойства токенов */
type SelectableAreaPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Type describing basic properties / Тип, описывающий базовые свойства */
export type SelectableAreaPropsBasic = ModelPropsSelected
  & {
    /** Disables the selection functionality / Отключает функционал выделения */
    disabled?: boolean
    /** Active status for continuous selection / Активный статус для непрерывного выделения */
    active?: boolean

    /** Array or string of currently selected values / Массив или строка текущих выбранных значений */
    selected?: string | string[]

    /** HTML tag of the wrapper element / HTML-тег элемента обертки */
    tag?: string
  }

/** Type describing incoming properties / Тип, описывающий входящие свойства */
export type SelectableAreaProps = SelectableAreaPropsBasic & SelectableAreaPropsToken

/** Default value for property / Значение по умолчанию для свойства */
export const defaultsSelectableArea = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
