export type TextareaAutosizePropsToken = {
  // :type [!] System label / Системная метка
  autosize?: boolean
  // :type [!] System label / Системная метка
}

export type TextareaAutosizePropsBasic = {
  // Value
  value?: string

  // Style
  inputAttrs?: Record<string, any>
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
