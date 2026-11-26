import type { ConstrBind } from '@dxtmisha/functional'

/** Token-based properties for TextareaAutosize / Токен-свойства для TextareaAutosize */
export type TextareaAutosizePropsToken = {
  // :type [!] System label / Системная метка
  autosize?: boolean
  // :type [!] System label / Системная метка
}

/** Basic properties for TextareaAutosize / Базовые свойства для TextareaAutosize */
export type TextareaAutosizePropsBasic = {
  /** Value / Значения */
  /** Current text value / Текущее текстовое значение */
  value?: string

  /** Style / Стили */
  /** Additional attributes for the textarea element / Дополнительные атрибуты для элемента textarea */
  inputAttrs?: ConstrBind
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & TextareaAutosizePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTextareaAutosize = {
  ...{
    // :default [!] System label / Системная метка
    autosize: true
    // :default [!] System label / Системная метка
  }
}
