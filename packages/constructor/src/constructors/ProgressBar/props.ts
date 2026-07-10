import type { ProgressBarItem, ProgressBarList } from './basicTypes'

type ProgressBarPropsToken = {
  // :type [!] System label / Системная метка
  overlay?: boolean
  // :type [!] System label / Системная метка
}

export type ProgressBarPropsBasic = {
  /** Focus item index / Фокусируемый индекс элемента */
  focus?: string

  /** Data value / Значение данных */
  value?: string | number | ProgressBarItem | ProgressBarList
  /** Maximum value / Максимальное значение */
  max?: string | number

  /** Active color / Активный цвет */
  color?: string
  /** Palette name / Название палитры */
  palette?: string

  /** Show label status / Статус отображения метки */
  showLabel?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ProgressBarProps = ProgressBarPropsBasic & ProgressBarPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsProgressBar = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
