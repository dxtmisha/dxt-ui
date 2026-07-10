import type { NumberOrString } from '@dxtmisha/functional'

type FormattedUnitPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type FormattedUnitPropsBasic = {
  /** Value to format / Значение для форматирования */
  value?: NumberOrString
  /** Unit of measurement / Единица измерения */
  unit?: string

  /** Whether to format the value / Требуется ли форматировать значение */
  formatting?: boolean

  /** Language for formatting / Язык для форматирования */
  language?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FormattedUnitProps = FormattedUnitPropsBasic & FormattedUnitPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsFormattedUnit = {
  formatting: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
